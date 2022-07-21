import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser } from "./redux/ducks/userSlice";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ test: "hi", id: 1 }));
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Hanush ",
    "Bob Smith",
    "James Cameron",
    "Jack Ma"
  ];
  return (
    <div className="App">
      {user && <h1> Hello, {user.firstName} </h1>}
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
