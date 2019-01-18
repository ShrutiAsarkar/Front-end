import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "empRoutes/dashboard.jsx";
import connect from "react-redux/es/connect/connect";

var ps;
var color = {
  backgroundColor: "black",
};

const mapStateToProps = state => {
    return { data: state };
};

class Dashboard extends React.Component {
  constructor(props){
    super(props);
      console.log("layout:",this.props.data);
      this.state = {
      backgroundColor: "white",
      activeColor: "success",
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  }
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="alert alert-info">
          <span className="glyphicon glyphicon-info-sign"></span> You are using an environment for testing and development purposes only - all crypto-currencies rates are testnet.</div>
          <p style={{color:"white",paddingLeft:"6.6%",marginTop:"50.6px",marginBottom:"1%",fontSize:"30px",fontFamily:'DIN'}}>Welcome {this.props.data.userName}
          </p>
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.pro) {
                return null;
              }
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Footer fluid />

      </div>
    );
  }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;