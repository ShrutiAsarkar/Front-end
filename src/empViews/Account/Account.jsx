import React from "react";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";



const mapStateToProps = state => {
    return { data: state };
};
class User extends React.Component {
    constructor(props){
        super(props);
        this.IsEmpty=false;
    }
    static handleSubmit() {
        console.log("clicked");
    }
    state={
        personalDetails:null,
        jobDetails:null

    };

    async componentDidMount(){
        await axios.post(this.props.data.backendUrl + '/user/employee/account',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    personalDetails:response.data.personalDetails,
                    jobDetails:response.data.jobDetails
                });
            },this.forceUpdate())
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="content" style={{marginTop: 30, marginLeft: 30, marginRight: 30}}>
                <div className="row">
                    <div className="col-xs-12 col-md-11" style={{"margin-left" : "10px"}}>
                        <div style={{width:"100%" }}>
                            <div style={{marginLeft: "19px",marginTop:"-44px", color: "white", "font-family": "DIN-Light", "font-size" : "30px"}}>Your details
                                <button type="button" className="btn btn-success btn-fill" style={{"font-family": "DIN-Light", "font-size" : "16px",width: "238px",backgroundColor:"#A1DF99",marginTop:"-86px",color:"black",borderRadius:"194px", height: "56px", marginLeft:"760px"}}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-11 ml-xl-10" style={{marginLeft: "10px" }}>
                        <div className="card card-circle-chart" style={{"borderRadius" :"1px",marginLeft: "24px", width : "1000px", height : "219px"}} >  {/*for information inside white box*/}
                            <div className="card-header" style={{marginLeft: "54px"}} >
                                <div className="card-content"  style={{minHeight: 120, marginLeft: 0}}>
                                    {this.state.personalDetails === null ?
                                        <div className="row" style={{paddingBottom: 8}}>
                                            <div className="text-center" align="center">
                                                <p><i style={{"fontFamily":"Franklin-Gothic-Medium","font-size":"20px",color:"#777777",marginTop:"40px"
                                                }}> set up company to show your overview here</i></p>
                                            </div>
                                            <div className="text-left">
                                            </div>
                                        </div>:
                                        <div>
                                            <div className="column">
                                                <div style={{float:"left",width:"10%"}}>
                                                    <i className="text-secondary fa fa-user-circle" style={{"font-size":"150px", "margin-left": "-38px"}}/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div style={{float:"left",width:"257px"}}>
                                                    <p style={{"font-size":"30px",fontFamily:"DIN-Medium",marginTop:"44px", marginLeft:"30px"}}>{this.state.personalDetails.Name}</p>
                                                    <div className="dropdown" style={{marginLeft:"50px"}}>
                                                        <button className="btn btn-default" type="button" data-toggle="dropdown" style={{fontFamily:"DIN-Medium",marginLeft:"-5px",fontSize:"14px",background: "#000000",marginTop:"-3px", color: "white"}}>Employee Profile
                                                            </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">HTML</a></li>
                                                            <li><a href="#">CSS</a></li>
                                                            <li><a href="#">JavaScript</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column" style={{width:"90%"}} >
                                                <div className="row" style={{width:"50%"}}>
                                                    <div style={{float:"right",width:"50%"}}>
                                                        <h5 className="text-secondary text-left" style={{"font-size":"16px",fontFamily:"Franklin-Gothic-Medium",marginLeft:"35px",marginTop:"5px"}}>BIRTHDAY</h5>
                                                        <p className="text-left" style={{"font-size":"16px",marginLeft:"35px",fontFamily:"Franklin-Gothic-Book-Regular"}}>12 January 2018</p>
                                                    </div>
                                                    {this.state.personalDetails !== null ?
                                                    <div style={{float:"right",width:"50%"}}>
                                                        <h5 className="text-secondary text-left" style={{fontSize:"16px",fontFamily:"Franklin-Gothic-Medium",marginLeft:"105px",marginTop:"5px"}}>EMAIL</h5>
                                                        <p className="text-left" style={{height:"44px",width:"197px","font-size":"16px",marginLeft:"102px",fontFamily:"Franklin-Gothic-Book-Regular"}}>{this.state.personalDetails.Email}</p>
                                                    </div>:<div> </div>}
                                                </div>
                                            </div>
                                            <div className="column" style={{width:"90%"}} >
                                                <div className="row" style={{width:"50%"}}>
                                                    <div style={{float:"right",width:"50%"}}>
                                                        <h5 className="text-secondary text-left" style={{"font-size":"16px",fontFamily:"Franklin-Gothic-Medium",marginLeft:"35px",marginTop:"-2px"}}>PHONE NUMBER</h5>
                                                        <p className="text-left" style={{"font-size":"16px",marginLeft:"35px",fontFamily:"Franklin-Gothic-Book-Regular"}}>+1 123 1234</p>
                                                    </div>
                                                    <div style={{float:"right",width:"50%"}}>
                                                        <h5 className="text-secondary text-left" style={{height:"44px",width:"193px","font-size":"16px",fontFamily:"Franklin-Gothic-Medium",marginLeft:"105px",marginTop:"-2px"}}>EMERGANCY CONTACT</h5>
                                                        <p className="text-left" style={{"font-size":"16px",marginLeft:"105px",fontFamily:"Franklin-Gothic-Book-Regular",marginTop:"-19px"}}>+1 123 1234</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-11" style={{"margin-left": "10px"}}>
                        <div style={{width: "100%"}}>
                            <div style={{marginLeft: "19px",marginTop:"1px", color: "white", "font-family": "DIN-Light", "font-size" : "30px"}}><br/>Job Details
                                <button type="button" className="btn btn-success btn-fill" style={{"font-family": "DIN-Light", "font-size" : "16px",width: "238px",backgroundColor:"#A1DF99",marginTop:"-86px",color:"black",borderRadius:"194px", height: "56px", marginLeft:"760px"}}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-11 ml-xl-10" >
                        <div className="card card-circle-chart" style={{"borderRadius" :"1px",marginLeft: "33px", width : "1000px", minHeight : "500px"}}>  {/*for information inside white box*/}
                            <div className="card-header">
                                <div className="card-content" style={{minHeight: 120, width:"500px", marginLeft: 0}}>
                                    {this.state.jobDetails === null ?
                                        <div className="row" style={{paddingBottom: 8}}>
                                            <div className="text-center" align="center">
                                                <p> Your Job details are here</p>
                                            </div>
                                            <div className="text-left">
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row" style={{float: "left", paddingLeft: "10px", width:"850px"}}>
                                                <div style={{float: "left", width : "850px"}}>
                                                    <p className="text-left" style={{"font-size":"30px", marginLeft:"55px","font-family": "DIN-Light"}}>Work</p>
                                                    <div className="col-sm-4" style={{height: "80px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary" style={{"font-size":"16px", marginRight:"58px",marginLeft:"8px",fontFamily:"Franklin-Gothic-Medium",position:"relative"}}>COMPANY NAME</p>
                                                            <p className="text-left" style={{"font-size":"16px",fontFamily:"Franklin-Gothic-Book-Regular", marginLeft:"35px",marginRight:"34px",marginTop:"-4px"}}>{this.state.jobDetails.Name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"60px",fontFamily:"Franklin-Gothic-Medium"}}>JOINING DATE</p>
                                                            <p className="text-left" style={{fontFamily:"Franklin-Gothic-Book-Regular",fontSize:"16px", marginLeft:"154px",height:"44px",width:"167px"}}>{this.state.personalDetails.Hire_date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80x"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{fontFamily:"Franklin-Gothic-Medium","font-size":"16px", marginLeft:"136px"}}>DURATION</p>
                                                            <p className="text-left" style={{ marginLeft:"134px",fontFamily:"Franklin-Gothic-Book-Regular",fontSize:"16px", height:"44px",width:"167px"}}>12 January 2018</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px", marginLeft: "5px"}}>
                                                        <div className="row" style={{height: "80px"}}>
                                                            <div style={{float: "left", paddingLeft: 10}}>
                                                                <div style={{float: "left", paddingLeft: 10}}>
                                                                    <p className="text-secondary text-left" style={{"font-size":"16px",marginTop:"28px", marginLeft:"36px", marginRight:"55px",fontFamily:"Franklin-Gothic-Medium"}}>WORK ADDRESS</p>
                                                                    <p className="text-left" style={{"font-size":"16px", fontFamily:"Franklin-Gothic-Book-Regular", marginLeft:"35px",marginRight:"34px",marginTop:"-4px"}}>{this.state.jobDetails.Address}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{float: "left", paddingLeft: "10px", width:"850px"}}>
                                                <div style={{float: "left", paddingLeft: "10px", width : "850px"}}>
                                                    <br/><br/><p className="text-left" style={{fontFamily: "DIN-Light",fontSize:"30px", marginLeft:"50px",marginTop:"38px"}}>Payment</p>
                                                    <div className="col-sm-4">
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"27px",marginTop:"7px", marginRight:"55px",fontFamily:"Franklin-Gothic-Medium"}}>PAYMENT METHOD</p>
                                                            <p className="text-left" style={{"font-size":"16px",fontFamily:"Franklin-Gothic-Book-Regular", marginLeft:"28px",marginRight:"34px",marginTop:"-4px"}}>Bitcoin(BTC)</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"54px",marginTop:"7px", marginRight:"55px",fontFamily:"Franklin-Gothic-Medium"}}>SALARY</p>
                                                            <p className="text-left" style={{"font-size":"16px", marginLeft:"54px",fontFamily:"Franklin-Gothic-Book-Regular",marginTop:"-4px"}}>${this.state.personalDetails.Payroll_amt}/month</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"144px",marginTop:"7px", marginRight:"55px",fontFamily:"Franklin-Gothic-Medium"}}>TAXES</p>
                                                            <p className="text-left" style={{"font-size":"16px", marginLeft:"144px",fontFamily:"Franklin-Gothic-Book-Regular",marginTop:"-4px"}}>$123</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const List = connect(mapStateToProps)(User);

export default List;
