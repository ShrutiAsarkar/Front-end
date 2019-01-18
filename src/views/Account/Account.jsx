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
        personalDetails:{},
        companyDetails:{}

    };

    async componentDidMount(){
        await axios.post(this.props.data.backendUrl + '/user/employer/account',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    personalDetails:response.data.personalDetails,
                    companyDetails:response.data.companyDetails
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
                            <div style={{marginLeft: "24px",marginTop:"-44px", color: "white", "font-family": "DIN-Light", "font-size" : "30px"}}>Your details
                                <button type="button" className="btn btn-success btn-fill" style={{"font-family": "DIN-Light", "font-size" : "16px",width: "200px",backgroundColor:"#A1DF99",marginTop:"-86px",color:"black",borderRadius:"194px", height: "50px", marginLeft:"805px"}}><span>Edit</span></button>
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
                                                <p> set up company to show your overview here</p>
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
                                                        <button className="btn btn-default" type="button" data-toggle="dropdown" style={{fontFamily:"DIN-Medium",marginLeft:"-5px",fontSize:"14px",background: "#000000",paddingTop:"20px",marginTop:"-3px", color: "white"}}><span style={{fontFamily:"DIN", fontSize:"14px",color:"#FFFFFF"}}> Employer Profile</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column" style={{width:"90%"}} >
                                                <div className="row" style={{width:"50%"}}>
                                                    <div style={{float:"right",width:"50%"}}>
                                                        <h5 className="text-secondary text-left" style={{"font-size":"16px",fontFamily:"Franklin-Gothic-Medium",marginLeft:"35px",marginTop:"5px",color:"#646464"}}>BIRTHDAY</h5>
                                                        <p className="text-left" style={{"font-size":"16px",marginLeft:"35px",fontFamily:"Franklin Book",color:"#000000"}}>{this.state.personalDetails.birthdate}</p>
                                                    </div>
                                                    {this.state.personalDetails !== null ?
                                                        <div style={{float:"right",width:"50%"}}>
                                                            <h5 className="text-secondary text-left" style={{fontSize:"16px",fontFamily:"Franklin-Gothic-Medium",marginLeft:"105px",marginTop:"5px",color:"#646464"}}>EMAIL</h5>
                                                            <p className="text-left" style={{height:"44px",width:"197px","font-size":"16px",marginLeft:"102px",fontFamily:"Franklin Book",color:"#000000"}}>{this.state.personalDetails.email}</p>
                                                        </div>:<div> </div>}
                                                </div>
                                            </div>
                                            <div className="column" style={{width:"90%"}} >
                                                <div className="row" style={{width:"50%"}}>

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
                            <div style={{marginLeft: "24px",marginTop:"1px", color: "white", "font-family": "DIN-Light", "font-size" : "30px"}}><br/>Company Details
                                <button type="button" className="btn btn-success btn-fill" style={{"font-family": "DIN-Light", "font-size" : "16px",width: "200px",backgroundColor:"#A1DF99",marginTop:"-86px",color:"black",borderRadius:"194px", height: "50px", marginLeft:"800px"}}><span>Edit</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-11 ml-xl-10" >
                        <div className="card card-circle-chart" style={{"borderRadius" :"1px",marginLeft: "33px", width : "1000px", minHeight : "300px"}}>  {/*for information inside white box*/}
                            <div className="card-header">
                                <div className="card-content" style={{minHeight: 200, width:"500px", marginLeft: 0}}>
                                    {this.state.companyDetails === null ?
                                        <div className="row" style={{paddingBottom: 8}}>
                                            <div className="text-center" align="center">
                                                <p> Your company details will be displayed here</p>
                                            </div>
                                            <div className="text-left">
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row" style={{float: "left", paddingLeft: "10px", width:"850px"}}>
                                                <div style={{float: "left", width : "850px"}}>
                                                    <p className="text-left" style={{"font-size":"30px", marginLeft:"55px","font-family": "DIN-Light"}}>Company</p>
                                                    <div className="col-sm-4" style={{height: "80px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary" style={{"font-size":"16px", marginRight:"55px",marginLeft:"36px",fontFamily:"Franklin Gothic Medium",color:"#646464"}}>COMPANY NAME</p>
                                                            <p className="text-left" style={{"font-size":"16px",fontFamily:"Franklin-Gothic-Book-Regular", marginLeft:"35px",marginRight:"34px",marginTop:"-4px",color:"#000000"}}>{this.state.companyDetails.Name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"45%",fontFamily:"Franklin Gothic Medium",color:"#646464"}}>PHONE</p>
                                                            <p className="text-left" style={{fontFamily:"Franklin-Gothic-Book-Regular",fontSize:"16px", marginLeft:"43%",height:"44px",width:"167px",color:"#000000"}}>{this.state.companyDetails.phone}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80x",width:"700px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary" style={{fontFamily:"Franklin Gothic Medium","font-size":"16px", marginLeft:"35%",color:"#646464"}}>No of Employees</p>
                                                            <p className="text-left" style={{"font-size":"16px",fontFamily:"Franklin Book", marginLeft:"54px",color:"#000000"}}>{this.state.companyDetails.empNo}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px", marginLeft: "5px"}}>
                                                        <div className="row" style={{height: "80px"}}>
                                                            <div style={{float: "left", paddingLeft: 10}}>
                                                                <div style={{float: "left", paddingLeft: 10}}>
                                                                    <p className="text-secondary text-left" style={{"font-size":"16px",marginTop:"28px", marginLeft:"36px", marginRight:"55px",fontFamily:"Franklin Gothic Medium",color:"#646464"}}>WORK ADDRESS</p>
                                                                    <p className="text-left" style={{"font-size":"16px", fontFamily:"Franklin Book", marginLeft:"35px",marginRight:"34px",marginTop:"-4px",color:"#000000"}}>{this.state.companyDetails.address}</p>
                                                                </div>
                                                            </div>
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
