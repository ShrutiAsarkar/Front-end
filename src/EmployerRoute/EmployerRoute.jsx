import React from "react";

// react plugin used to create charts
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {applyMiddleware as dispatch} from "redux";
import {store} from '../index.js';
import indexRoutes from "routes/index.jsx";
import {createBrowserHistory} from "history";
const hist = createBrowserHistory();


// function that returns a color based on an interval of numbers



class EmployerRoute extends React.Component {
    constructor(props){
        console.log("employer constructor");
        super(props);
    }
    state= {

    };

    componentDidMount(){
        console.log("in employer did mount");
        // this.props.history.push('/dashboard/1');
    }

    render() {
        return (

            <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            console.log("in routes");
                            return <Route path={prop.path} key={key} component={prop.component} />;
                            // return <Route path
                        })}
                    </Switch>
            </Router>
                // {/*<Link to={{pathname: "/dashboard/1"}}>*/}
                //     {/*<button>go to dash</button>*/}
                // {/*</Link>*/}

        );
    }
}

export default EmployerRoute;
