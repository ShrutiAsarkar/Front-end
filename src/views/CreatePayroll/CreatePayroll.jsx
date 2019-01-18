import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {store} from "../../index";
import radio from "../../assets/radio.png";
import radio1 from "../../assets/radio-normal.png";
import paystub from "../../assets/ic_paystub.png";

const mapStateToProps = state => {
  return { data: state };
};
class CreatePayroll extends React.Component {
  constructor(props) {
    super(props);
    console.log("In Payroll",this.props.data);

  }
  state={
      data:{},
      tableData:[],
      empReceived:[]
  };
  async componentDidMount(){
      axios.post(this.props.data.backendUrl + '/employee/payroll/eligible/list',{
          user: this.props.data.id
      })
      .then(response => {
          this.setState({empReceived:response.data});
          this.state.empReceived.map((employee, i) => {
            employee.id = i;
            this.state.tableData.push(employee);
          });
      })
      .catch(error => {
          console.log(error);
      });
  }

    handlePayrollName(e){
        this.state.data.payrollName = e.target.value.toString();
        //e.target.value
    }
  handleHours(id, e){
    this.state.tableData[id].hours = parseInt(e.target.value);
    //e.target.value
  }

  handleTaxes(id, e){
    this.state.tableData[id].taxes = parseInt(e.target.value);
  }

  handleBenefits(id, e){
      this.state.tableData[id].benefits = parseInt(e.target.value);
  }

  handleSubmit(e){
    // this.setState({data:{id:this.props.data.id}});
      this.state.data.id = this.props.data.id;
    console.log(this.state);
    store.dispatch({type:'updatePayroll',payload:this.state});
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
                      color: "#000000"}}>Add Payroll</p>
                  <div style={{minHeight:600,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8,marginLeft:"28%"}}>
                      <div className="row">
                          <div className="col-md-4" style={{width:420}}>
                              <img src={radio} style={{marginLeft:"4%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:'3%'}}>&nbsp;HOURS AND EARNINGS </span>
                          </div>
                          <div className="col-md-4" style={{width:299}}>
                              <img src={radio1} style={{marginLeft:"6%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; REVIEW AND SUBMIT </span>
                          </div>
                      </div>
                  </div>

                  <div>
                      <center>
                          <p style={{marginTop:"3%",marginLeft:"5%",marginRight:"5%"}}>
                            <img src={paystub} style={{marginRight:"1%"}}/>
                            <span style={{fontFamily:"Franklin Gothic Regular",fontSize:16,color:"#000000"}}>
                                Payroll Name
                            </span>
                            <input type="text" style={{background: "#FDFDFD", border: "1px solid #979797",
                              fontSize:16, boxSizing: "border-box", marginLeft:"6px"}}
                               onChange={(e) => this.handlePayrollName(e)}/>
                          </p>
                      </center>
                    <table class="table table-bordered" style={{width:900,marginTop:"5%",marginLeft:"5%",marginRight:"5%"}}>

                      <thead className="thead-light">
                      <tr style={{fontFamily:"Franklin Gathic Medium",fontSize:12,color:"#D3D3D3"}}>
                        <th>EMPLOYEES</th>
                        <th>HOURS</th>
                        <th>GROSS PAY</th>
                        <th>TAXES</th>
                        <th>BENEFITS</th>
                        <th>SUB TOTAL </th>
                      </tr>
                      </thead>
                      <tbody style={{textAlign: "left"}}>
                      {this.state.empReceived.map((dynamicComponent, i) => {
                          console.log(dynamicComponent);
                          return(
                              <tr id={i}>
                                  <td> <span style={{fontFamily:"Franklin Gothic Medium",fontSize:19,color:"#232323"}}>{dynamicComponent.name}</span><br/><br/><span style={{fontFamily:"Franklin Book",fontSize:16,color:"#232323"}}>{dynamicComponent.designation}</span></td>
                                  <td><input type="number" maxLength="4" style={{width: 80,height:40,background: "#FDFDFD",
                                      border: "1px solid #979797",
                                      boxSizing: "border-box",fontSize:16}} onChange={(e) => this.handleHours(i, e)} /></td>
                                  <td>{dynamicComponent.payAmt}</td>
                                  <td><input type="number" maxLength="4" style={{width: 80,height:40,background: "#FDFDFD",
                                      border: "1px solid #979797",fontSize:16,
                                      boxSizing: "border-box"}} onChange={(e) => this.handleTaxes(i, e)}/></td>
                                  <td><input type="number" maxLength="4" style={{width: 80,height:40,background: "#FDFDFD",
                                      border: "1px solid #979797",fontSize:16,
                                      boxSizing: "border-box"}} onChange={(e) => this.handleBenefits(i, e)}/></td>
                                  <td> - </td>
                              </tr>
                          )
                      })}
                      </tbody>
                    </table>
                  </div>
                      <div align="center" style={{marginTop:"17%"}}>
                          <Link to={{pathname: "/reviewPayroll"}}>
                              <button type="button" className="btn  btn-fill  btn-md"   style={{backgroundColor:"#A1DF99"}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"DIN-Medium",fontSize:16,color:"#000000"}}>SAVE AND PROCEED</span></button>
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

const List = connect(mapStateToProps)(CreatePayroll);

export default List;
