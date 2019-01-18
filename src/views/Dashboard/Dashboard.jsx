import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from '../../index.js';
import uphold from '../../assets/uphold.jpg';
import business from '../../assets/business.png';
import people from '../../assets/people.png';
import employees from '../../assets/ic_employees.png';
import calender from '../../assets/ic_calendar.png';
import location from '../../assets/ic_location.png';
import prof from '../../assets/download.png';


const mapStateToProps = state => {
    return { data: state };
};
function updateID(id) {
    store.dispatch({type:'updateData',payload:id});
}

class Dashboard extends React.Component {

    state={
        data:{userId:null},
        userId:null,
        userName:null,
        assetCards:[],
        totalAssets:null
    };

    constructor(props){
        super(props);
        this.IsEmpty=true;
        updateID(this.props.match.params.id);
    }


    static handleSubmit() {
        console.log("clicked");
    }

    async componentDidMount(){
        await axios.post(this.props.data.backendUrl + '/dashboard',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    data:{userId: this.props.data.id},
                    userId: this.props.data.id,
                    assetCards: response.data.assetCards,
                    userName: response.data.userName,
                    totalAssets: response.data.totalAssets
                });
                store.dispatch({type:'updateUser',payload:response.data.userName});
            },this.forceUpdate())
            .catch(error => {
                console.log(error);
            });
    }
    render() {


        return (
            <div className="content" style={{marginTop: "-2%", marginLeft: "5.5%", marginRight: "5%"}}>
                <div className="row">
                    <div className="col-xs-9 col-md-8">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="card card-circle-chart" style={{"borderRadius" :"1px" , minWidth:"680px"}}>
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h3 style={{"fontFamily": "DIN-Light"}}> Payroll Overview </h3>
                                        </div>
                                    </div>
                                    <div id={"payrollOverview"} className="card-content" align='center' style={{minHeight: 90, marginLeft: 180}}>

                                        { this.state.payrollOverview === null ?

                                            <div className="row" style={{paddingBottom: 8}}>
                                                <div className="text-center" align="center">
                                                    <p><i style={{"fontFamily":"Franklin Gothic Medium","font-size":"20px",color:"#777777"
                                                    }}> Set up company to show your overview here</i></p>
                                                </div>
                                                <div className="text-left">
                                                </div>
                                            </div> : <div className="Employees" style={{marginLeft: "-700px",marginTop : "-1%"}}>
                                                <span style={{fontFamily :"Franklin Book",fontSize:44,color:"#000000"}}> {this.state.companyOverview.empNo ? this.state.companyOverview.empNo : 0}</span>
                                                <p style={{fontFamily :"Franklin Book",fontSize:16,color:"#000000"}}>EMPLOYEES</p>
                                                <div style={{marginLeft : "440px",marginTop : "-110px"}}>
                                                    <h2>{this.state.payrollOverview.yeartotal ? "$" + this.state.payrollOverview.yearTotal : "$0"}</h2>
                                                    <p style={{fontFamily :"Franklin Book",fontSize:16,color:"#000000"}}>THIS YEAR</p>
                                                </div>
                                                <div style={{marginLeft : "840px",marginTop : "-105px"}}>
                                                    <h2>{this.state.payrollOverview.monthTotal ? "$" + this.state.payrollOverview.monthTotal : "$0"}</h2>
                                                    <p style={{fontFamily :"Franklin Book",fontSize:16,color:"#000000"}}>THIS MONTH</p>
                                                </div>
                                            </div> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-3">
                                <div className="card card-circle-chart" style={{"borderRadius" :"1px" , minWidth:"680px",minHeight:"350px"}}>
                                    <div className="card-header">
                                        <div className="card-title" style={{marginBottom: 0}}>
                                            <h3 style = {{"fontFamily":"DIN-Light"}}>Company</h3>
                                        </div>
                                    </div>
                                    <div id={"businessOverview"} className="card-content" style={{minHeight : 130}}>
                                        {this.state.companyOverview === null ?
                                            <div className="row" style={{paddingBottom: 6}}>
                                                <div className="text-center">
                                                    <img src={business} alt="business" style={{marginLeft : "200px",marginTop :"10px"}} /><br/>
                                                    <p style={{color:"#777777",fontSize:"20px", marginLeft : "200px",marginTop :"15px"}}><i style={{"font-family":"Franklin Gothic Medium"}}> You don't have your company set up.</i>
                                                    </p>
                                                </div>
                                                <br/><br/>
                                                <Link to={{pathname: "/setupCompany/"+this.state.userId}}>
                                                    <button type="button" className="btn btn-default btn-fill" onClick={Dashboard.handleSubmit.bind(this)} style={{"border-radius": "194px","background-color":"#FCBC28 " , marginTop : "140px", marginLeft : "-300px",height :"50px", width:"230px"}}><span style={{color:'black',"font-family":"DIN-Light"}}>SET UP COMPANY</span></button>

                                                </Link>
                                                <div className="text-left">
                                                    <h6 style={{margin: 0}}> </h6>
                                                </div>
                                            </div>:
                                            <p className="text-left" style={{marginLeft:"2%",marginTop:"1%"}}>{

                                                <div>
                                                <div className="row">

                                                    <div className="col-md-4" style={{marginLeft:"2%"}}>
                                                        <p style={{fontFamily:"Franklin Gothic Medium",fontSize:23,color:"#000000"}}>{this.state.companyOverview.companyName}&nbsp;&nbsp;&nbsp;&nbsp;
                                                        </p>
                                                    </div>
                                                </div><br/>
                                                <div className="row">

                                                    <div className="col-md-4" style={{marginLeft:"2%"}}>

                                                        <p> <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#646464"}}><img src={location} style={{height:"15px"}}/>&nbsp;COMPANY ADDRESS</span></p>
                                                        <span style={{fontFamily:"Franklin Book",fontSize:16,color:"#000000"}}> { this.state.companyOverview.address}</span><br/>
                                                    </div>
                                                    <div className="col-md-4" style={{marginLeft:"5%"}}>
                                                        <p>    <span style={{fontFamily:"Franklin Gothic Medium",fontSize:"16px",color:"#646464",marginLeft:"1%"}}> <img src={calender} />&nbsp;PAY PERIOD</span></p>
                                                        <br/><br/>
                                                    </div>
                                                    <div>
                                                        <p>   <span style={{marginLeft:0,fontFamily:"Franklin Gothic Medium",fontSize:"16",color:"#646464"}}><img src={employees} />&nbsp;EMPLOYEES</span><br/>
                                                            <span style={{marginLeft:"30%"}}>{ this.state.companyOverview.empNo}</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            }</p> }
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-12 mt-3">
                                <div className="card card-circle-chart" style={{"border-radius" :"1px" , minWidth:"680px"}}>
                                    <div className="card-header">
                                        <div className="card-title" style={{marginBottom: 0}}>
                                            <h3 style = {{"fontFamily":"DIN-Light"}}> People </h3>
                                        </div>
                                    </div>
                                    <div id={"employeeOverview"} className="card-content" style={{minHeight: 10, marginLeft: 20}}>
                                        {this.state.employeeOverview === null?

                                            <div className="row" style={{paddingBottom: 8}}>
                                                <div className="text-center" >
                                                    <img src={people} alt="people" style={{marginBottom :"30px",marginLeft : "100px"}} /><br/>
                                                    <p style={{ "margin-bottom":"20px",marginLeft:"200px"}}><i style={{color:"#777777",fontSize:"20px","font-family":"Franklin Gothic Medium","margin-left":"-75px"}}>You can add employees after setting up your company</i></p>
                                                </div>
                                                <div className="text-left">
                                                </div>
                                            </div>:<div>{<div>
                                                   {this.state.employeeOverview.map((dynamicComponent, i) => {
                                                       return(
                                                           <div className="row" style={{borderBottom:"1px solid #979797",marginBottom:"30px"}}>
                                                               <br/><br/>
                                                               <img src={prof} style={{width:"76px",height:"72px"}} />
                                                               <div className="col">
                                                                   <span style={{fontFamily:"Franklin Gothic Medium",fontSize:20,color:"#000000"}}> {dynamicComponent.name}</span><br/><p style={{fontFamily:"Franklin Book",fontSize:16,color:"#000000"}} >{dynamicComponent.designation}</p>
                                                               </div>
                                                                <div className="col">
                                                                    <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#646464"}}> JOINED</span><br/><p style={{fontFamily:"Franklin Book",fontSize:16,color:"#000000"}} >12 JANUARY 2012</p>
                                                                </div>
                                                                <div className="col">
                                                                    <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#646464"}}> SALARY</span><br/><p style={{fontFamily:"Franklin Book",fontSize:16,color:"#000000"}} >${dynamicComponent.payAmt}per month</p>
                                                                </div>
                                                                <br/><br/><br/><br/>

                                                           </div>
                                                       )
                                                   })}

                                               </div>

                                            }
                                                <button type="button" className="btn btn-default btn-fill" style={{"border-radius": "194px","background-color":"#FCBC28 " , marginBottom : "20px", marginLeft : "5%",height :"50px", width:"230px"}}><span style={{color:'black',"font-family":"DIN-Light"}}>Add Employees</span></button>

                                            </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-3">
                        <div className="row">
                            <div className="col-md-14 ml-5 ">
                                <div className="card" style={{"border-radius" :"1px" , minWidth:"300px",height:"175px", marginLeft:"15px", boxShadow: 'none', backgroundSize: 'cover', backgroundImage: "url("+uphold+")"}}>
                                    <div className="card-header text-center">
                                        <h4 className="card-title"
                                            style={{color: 'white', textAlign: 'start'}}>
                                            Total Assets<br/>
                                            {this.state.totalAssets}
                                        </h4>
                                    </div>
                                    <div className="card-content" style={{"border-radius" :"1px"}}>
                                        <h4 style={{margin: 0, color: 'white', fontWeight: 'bolder', textAlign: 'start', paddingLeft: 60}}>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.assetCards.map((dynamicComponent, i) => {
                            console.log("component:",dynamicComponent);
                            return(
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-12 mt-3 ml-5 " >
                                                <div className="card" style={{"border-radius" :"1px" , minWidth:"300px",height:"175px",boxShadow: 'none', backgroundImage:"url("+require('../../assets/uphold-images/cards/vintage/'+dynamicComponent.currency.toLowerCase()+'.jpg')+")",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                                                    <div className="card-header text-center" >
                                                        <h4 className="card-title"
                                                            style={{color: 'white', textAlign: 'start', paddingLeft: 10, marginBottom: 0}}>

                                                        </h4>
                                                    </div>
                                                    <div className="card-content" style={{color: 'white',height: 100,align:'center',fontSize:20}}>
                                                           {dynamicComponent.currency}<br/>
                                                            {dynamicComponent.amt}<br/><br/>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>

        );
    }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;

