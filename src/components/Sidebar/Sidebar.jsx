import React from "react";
import { NavLink } from "react-router-dom";
import { Nav , Dropdown,Collapse, DropdownItem, DropdownToggle, DropdownMenu} from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/payroll-logo.jpg";


var ps;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.refs.sidebar, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="sidebar"  data-color={this.props.bgColor} data-active-color={this.props.activeColor}>
                <div className="logo" style={{ paddingTop: "3px", paddingLeft: "18px" }}>
                    <div className="logo-img">
                        <img src= {logo}/>
                    </div>
                </div>
                <div className="sidebar-wrapper wrap" ref="sidebar">
                    <Nav>
                        {this.props.routes.map((prop, key) => {
                            if (prop.redirect) return null;
                            if (!prop.show)return null;

                            else return (
                                <li
                                    className={
                                        this.activeRoute(prop.path) +
                                        (prop.pro ? " active-pro" : "")
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.path}
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        <div style={{display:'inline-block'}}> <img src={require('../../assets/'+prop.icon.trim()+'.png')} />

                                            <span style={{    color: "#212529",marginLeft:20,
                                                "font-family": "DIN","text-transform": "capitalize","font-size": "16px"}}>{prop.name.trim() !== ""?prop.name:null}</span></div>
                                    </NavLink>
                                </li>

                            );
                        })}
                        <div style={{marginLeft:'3rem',marginTop:'20rem'}}>
                            <button type="button" className="btn btn-default btn-fill" style={{"background-color": "#212121","border-radius":"194px","font-family":"DIN-light",height :"50px",paddingTop:"14px", width:"205px",marginTop:"95px"}} round>LOGOUT</button>
                        </div>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;
