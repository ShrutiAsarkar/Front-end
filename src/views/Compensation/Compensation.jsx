import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";
import title from "../../assets/ic_title.png";
import company from "../../assets/ic_company_name.png";
import radio from "../../assets/radio.png";
import oval from "../../assets/Oval.png";

const mapStateToProps = state => {
  return { data: state };
};
class Compensation extends React.Component {
  constructor(props) {
    super(props);
    console.log("In compensation",this.props.data);
  }
  state={
    title:"",
    amount:"",
    emp_type:"",
    freq:30
  };
  handleTitle(e){
    this.setState({title:e.target.value});
    console.log(this.state.title);
  }
  handleAmount(e){
    this.setState({amount:e.target.value});
    console.log(this.state.amount);
  }
  async handleSubmit(){
    store.dispatch({type:'updateCompensation',payload:this.state});
    let isCreated = await axios.post(this.props.data.backendUrl + '/employees/create', {
      data:{
        id: this.props.data.id,
        employee: this.props.data.employeeDetails,
        compensation: this.state
      }
    })
      .then(function (response) {
        if(response) {
            console.log("success", response);
            return true;
        }
      })
      .catch(function (response) {
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
                      fontFamily: "DIN-Light",
                      fontSize: "30px",
                      color: "#000000"}}>Add People</p>
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
                  <div class="row" style={{marginTop:30}}>
                  </div>


                  <div class="row"  style={{marginTop:30,marginLeft:70}}>
                    <div class="form-group col-xs-6 ">
                        <img src={title} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >TITLE</label><br/>
                      <input type="text" value={this.state.title} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"7%",marginTop:"6px",
                          boxSizing: "border-box",fontFamily:"Franklin Book",fontSize:16,color:"#626262",width: 300,padding: 10}}
                             name="title" onChange={this.handleTitle.bind(this)}/>

                    </div><br/>

                    <div class="form-group  col-xs-6  ">

                        <img src={title} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >AMOUNT</label><br/>
                      <div class="dropdown">
                        <input type="number" value={this.state.amount} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"7%",marginTop:"6px",
                            boxSizing: "border-box",fontFamily:"Franklin Book",fontSize:16,color:"#626262",width: 300,padding: 10}}
                              name="amount" onChange={this.handleAmount.bind(this)}/>

                      </div>

                    </div><br/><br/>

                    <div class="form-group col-xs-6 " style={{marginTop:"4%"}}>
                        <img src={title} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >EMPLOYEE TYPE</label><br/>

                        <div style={{height:40,width:500,marginLeft:"7%",marginTop:"6px",}}>
                            <select  style={{height:40,width:300}}>
                                <option value="Orange">Full-Time</option>
                                <option value="Radish">Part-Time</option>
                            </select>
                            <p> </p>
                        </div>
                        <br/>

                    </div><br/>

                    <div class="form-group col-xs-6 " style={{marginTop:"4%"}}>
                        <img src={company} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}>
                        PER</label><br/>
                        <div style={{height:40,width:500,marginLeft:"7%",marginTop:"6px",}}>
                            <select  style={{height:40,width:300}}>
                                <option value="Orange">Month</option>
                                <option value="Radish">Week</option>
                            </select>
                            <p> </p>
                        </div>
                        <br/>
                    </div><br/>


                  </div>
                      <div  align="center" style={{marginTop:"7%"}}>
                          <button type="button" className="btn  btn-fill  btn-lg"   style={{backgroundColor:"#A1DF99",width:140,height:45}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"DIN-Medium",fontSize:16,color:"#000000"}}>PROCEED</span></button>
                      </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>




    )
  }
}
const List = connect(mapStateToProps)(Compensation);

export default List;
