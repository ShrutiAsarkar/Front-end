import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";
import title from "../../assets/ic_title.png";
import calender from "../../assets/ic_cale.png";
import radio1 from "../../assets/radio-normal.png";
import oval from '../../assets/Oval.png';
import radio from '../../assets/radio.png';



const mapStateToProps = state => {
  return { data: state };
};
class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("In EmployeeDetails",this.props.data);
  }

  state={
    companyId:"",
    name:"",
    email:"",
    hireDate:"",
  };

  handleName(e){
    this.setState({name:e.target.value});
    console.log(this.state.name);
  }
  handleEmail(e){
    this.setState({email:e.target.value});
    console.log(this.state.email);
  }
  handleHireDate(e){
    this.setState({hireDate:e.target.value});
    console.log(this.state.hireDate);
  }
  handleSubmit(){
    console.log("emp details:",this.state);
    this.setState({companyId:this.props.data.id});
    store.dispatch({type:'update_employeeDetails',payload:this.state});
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor:'white',paddingLeft:10,marginTop:30,marginLeft:70,marginRight:70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                  <p align="center" style={{
                      marginLeft: "35.00%",
                      marginRight: "35.00%",
                      marginTop: "5%",
                      fontFamily: "DIN-Light",
                      fontSize: "30px",
                      color: "#000000"}}>Add People</p>
                  <div style={{minHeight:600,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8,marginLeft:"20%"}}>
                      <div className="row">
                          <div className="col-md-4" style={{width:420}}>
                              <img src={radio} style={{marginLeft:"4%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:'3%'}}>&nbsp;EMPLOYEE DETAILS </span>
                          </div>
                          <div className="col-md-4" style={{width:299}}>
                              <img src={radio1} style={{marginLeft:"6%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; COMPENSATION </span>
                          </div>
                      </div>

                  </div>
                  <div className="row" style={{marginTop:"7%",marginLeft:70}}>
                    <div className="form-group col-xs-6 ">
                        <img src={title} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >NAME</label><br/>
                      <input type="text"  value={this.state.name} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"7%",marginTop:"6px",
                          boxSizing: "border-box",fontFamily:"Franklin Book",fontSize:16,color:"#626262",width: 300,padding: 10}}
                         name="name" onChange={this.handleName.bind(this)}/>

                    </div>
                    <br/>

                    <div className="form-group  col-xs-6  ">

                        <img src={title} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >EMPLOYEE EMAIL</label><br/>

                      <input type="email"  value={this.state.email} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"7%",marginTop:"6px",
                          boxSizing: "border-box",fontFamily:"Franklin Book",fontSize:16,color:"#626262",width: 300,padding: 10}}
                          name="email" onChange={this.handleEmail.bind(this)}/>

                    </div>
                    <br/><br/><br/><br/><br/>

                    <div className="form-group col-xs-6 "style={{marginTop:"4%"}}>
                        <img src={calender} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >HIRE DATE</label><br/>
                      <input type="date" value={this.state.hireDate} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"7%",marginTop:"6px",
                          boxSizing: "border-box",fontFamily:"Franklin Book",fontSize:16,color:"#626262",width: 300,padding: 10}}
                          name="hireDate" onChange={this.handleHireDate.bind(this)}/>


                    </div>


                  </div>
                      <div align="center" style={{marginTop:"7%"}}>
                          <Link to={{pathname: "/compensation",
                              data:this.state.data }}>
                              <button type="button" className="btn  btn-fill  btn-lg"   style={{backgroundColor:"#A1DF99",width:140,height:45}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"DIN-Medium",fontSize:16,color:"#000000"}}>PROCEED</span></button>
                          </Link>
                      </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
const List = connect(mapStateToProps)(EmployeeDetails);

export default List;
