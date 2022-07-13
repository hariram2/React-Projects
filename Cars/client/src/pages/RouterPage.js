import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import List from './List';
import Details from './Details';
import Dashboard from './Dashboard';
import Demo from './Demo';
import Grid from './Grid';
import login from './login';
import Register from './Register';
import Gridbackend from './Gridbackend';


    class RouterPage extends React.Component{
        render(){
            return(

                <div>
                  
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/grid" component={Grid} />
                            <Route path="/list" component={List} />
                            <Route path="/details" component={Details} />
                            <Route path="/admin" exact component={Dashboard} />
                            <Route path="/admin/demo" component={Demo} />
                            <Route path="/admin/gridbackend" component={Gridbackend} />
                            <Route path="/login" component={login} />
                            <Route path="/register" component={Register} />
                        </Switch>
                    </Router>
                 
                </div>
  )
           
}
}
export default RouterPage;