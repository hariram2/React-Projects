const express = require("express");
const app = express();
const moongoose = require('mongoose');
const ModelUser = require('./models/Users');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use(express.json());
app.use(cors());

moongoose.connect("mongodb+srv://hani_mongo:Hanimongo2022@cluster0.rc9wk.mongodb.net/hani_cars?retryWrites=true&w=majority");


app.get("/api/getUsers", (req, res) => {
    ModelUser.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/api/createUser", async(req, res) => {
    const user = req.body;
    const newUser = new ModelUser(user);
    await newUser.save();
    res.json(user);
});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(3001, () => {
    console.log("Server runs perfectly....!");
});