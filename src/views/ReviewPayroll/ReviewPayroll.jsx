import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import radio from "../../assets/radio.png";
import oval from "../../assets/Oval.png";

const mapStateToProps = state => {
  return { data: state };
};
class ReviewPayroll extends React.Component {
  constructor(props){
    super(props);
    console.log("In ReviewPayroll",this.props.data);
  }

  async handleSubmit(e){
      let isCreated = await axios.post(this.props.data.backendUrl + '/payroll/create', {
          data:{
              id: this.props.data.payroll.data.id,
              payrollName: this.props.data.payroll.payrollName,
              totalAmt: this.props.data.payroll.data.totalAmt,
              empData: this.props.data.payroll.empData
          }
      })
          .then(function (response) {
              //handle success
              if(response) {
                  console.log("success", response);
                  return true;
              }
          })
          .catch(function (response) {
              //handle error
              console.log("error",response);
              return false;
          });
      if(isCreated){
          this.props.history.push('/dashboard/' + this.props.data.id);
      }
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
                      fontFamily: "DIN-Regular",
                      fontSize: "30px",
                      color: "#000000"}}>Run Payroll</p>
                  <div style={{minHeight:600,marginTop:30}}>
                    <div className="row" align="center" style={{paddingBottom: 8,marginLeft:"20%"}}>
                        <div className="row">
                            <div className="col-md-4" style={{width:420}}>
                                <img src={oval} style={{marginLeft:"4%"}} />
                                <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:'3%'}}>&nbsp;EMPLOYEE DETAILS </span>
                            </div>
                            <div className="col-md-4" style={{width:299}}>
                                <img src={radio} style={{marginLeft:"6%"}} />
                                <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; COMPENSATION </span>
                            </div>
                        </div>


                    </div>

                    <div style={{marginTop:"5%"}}>
                    Please preview these numbers before you submit for payroll. Your employees will be paid in their choosen wallet in 3 working days.
                  </div><br/>
                  <div className="alert alert-warning">

                    <strong><i className="material-icons">add_alert</i>  Your account will be debited with amount ${this.props.data.payroll.data.totalAmt} for this payroll. The amount will be processed in 3 days.</strong>
                  </div>
                  <div style={{marginTop:40}}>
                    <table class="table table-bordered">

                      <thead className="thead-light" style={{width:900,marginTop:"5%",marginLeft:"5%",marginRight:"5%"}}>

                      <tr style={{fontFamily:"Franklin Gathic Medium",fontSize:12,color:"#D3D3D3"}}>
                        <th>EMPLOYEES</th>
                        <th>HOURS</th>
                        <th>GROSS PAY</th>
                        <th> TAXES</th>
                        <th>BENEFITS</th>
                        <th>SUB TOTAL </th>


                      </tr>
                      </thead>
                      <tbody style={{textAlign: "left"}}>
                      {this.props.data.payroll.empData.map((dynamicComponent, i) => {
                          console.log(dynamicComponent);
                          return(
                              <tr id={i}>
                                  <td><span style={{fontFamily:"Franklin Gothic Medium",fontSize:19,color:"#232323"}}>{dynamicComponent.name}</span><br/><br/><span style={{fontFamily:"Franklin Book",fontSize:16,color:"#232323"}}>{dynamicComponent.designation}</span></td>
                                  <td style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#232323"}} >{dynamicComponent.hours}</td>
                                  <td style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#232323"}}>{dynamicComponent.payAmt}</td>
                                  <td style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#232323"}}>{dynamicComponent.taxes}</td>
                                  <td style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#232323"}}>{dynamicComponent.benefits}</td>
                                  <td style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#232323"}}>{dynamicComponent.subTotal}</td>
                              </tr>
                          )
                      })}
                      </tbody>
                    </table>
                      <p style={{position:"absolute",right:30}}><span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#232323"}}>Total Payroll</span> &nbsp;&nbsp;  <span style={{fontFamily:"Franklin Gothic Medium",fontSize:26,color:"#232323"}}> ${this.props.data.payroll.data.totalAmt}</span></p>
                  </div>
                  <div className="row" style={{marginTop:30,marginLeft:70}}>
                    <div className="form-group col-xs-6 ">
                    </div>
                  </div>
                </div>
                <div align="center" style={{marginBottom:"7%"}}>
                    <button type="button" className="btn btn-fill  btn-lg"   style={{backgroundColor:"#A1DF99"}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>SUBMIT PAYROLL</span></button>
                  <Link to={{pathname: "/addPayroll"}}>
                      <button type="button" className="btn btn-fill  btn-lg"   style={{backgroundColor:"#DADADA",marginLeft:"2%"}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>GO BACK</span></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const List = connect(mapStateToProps)(ReviewPayroll);

export default List;
