import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";
import calender from "../../assets/ic_cale.png";
import company from "../../assets/ic_company_name.png";
import radio from "../../assets/radio.png";
import radio1 from "../../assets/radio-normal.png";
import oval from "../../assets/Oval.png";
import axios from "axios";


const mapStateToProps = state => {
  return { data: state };
};

class PaySchedule extends React.Component {
  constructor(props) {
    super(props);
   // console.log("paySchedule:",props.location.data);
      this.toggle = this.toggle.bind(this);
    console.log("In Payschedule:",this.props.data);
  }
  state={
    payPeriod:"",
    firstPayDate:"",
    dayOfMonth:"",
      dropdownOpen: false
  };
handlePayPriod(e){
  this.setState({payPeriod:e.target.value});
 // console.log(this.state.payPeriod);
}
handleFirstPayDate(e){
  this.setState({firstPayDate:e.target.value});
  // console.log(this.state.firstPayDate);
}

async handleSubmit(){
    await axios.post(this.props.data.backendUrl + '/companies/create',{
        user: this.props.data.id,//set user id from redux,
        data: this.props.data //redux company object
    })
        .then(response => {
            if(response){
                console.log("successful");
                this.props.history.push('/dashboard/'+this.props.data.id);
            }
        })
        .catch(error => {
            console.log(error);
        });

}
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor: 'white', paddingLeft: 10, marginTop: 30, marginLeft: 70, marginRight: 70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                  <p align="center" style={{
                      marginLeft: "35.00%",
                      marginRight: "35.00%",
                      marginTop: "5%",
                      fontFamily: "DIN-Light",
                      fontSize: "30px",
                      color: "#000000"}}>Set up Company</p>
                  <div style={{minHeight: 600, marginTop: 30}}>
                  <div className="row" align="center" style={{paddingBottom: 8, alignSelf: 'center',marginLeft:70}}>
                      <div className="row">
                          <div className="col-md-4" style={{width:390,marginLeft:"8%"}}>
                              <img src={oval} style={{marginLeft:"-4%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:'3%'}}>&nbsp;COMPANY INFO </span>
                          </div>
                          <div className="col-md-4" style={{width:200,marginLeft:"-4%"}}>
                              <img src={oval} style={{marginLeft:"1%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; TAX INFO </span>
                          </div>
                          <div className="col-md-4" style={{width:200,marginLeft:"-4%"}}>
                              <img src={radio} style={{marginLeft:"1%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; PAY SCHEDULE </span>
                          </div>

                      </div>

                  </div>
                  <div class="row" style={{marginTop:"7%",marginLeft:70}}>
                    <div class="form-group col-xs-6 ">
                        <img src={calender} style={{marginLeft:"-4%"}} /><label className="control-label "style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}>PAY PERIOD
                        </label><br/>
                        <div style={{height:40,width:500,marginLeft:"5%",marginTop:"6px",}}>
                            <select  style={{height:40,width:300}}>
                                <option value="Orange">Weekly</option>
                                <option value="Radish">Monthly</option>
                                <option value="Cherry">Bi-monthly</option>
                            </select>
                            <p> </p>
                        </div>
                        <br/>

                    </div>
                    <br/>

                    <div class="form-group  col-xs-6  ">

                        <img src={calender} style={{marginLeft:"-4%"}} /><label className="control-label "style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}>
                        FIRST PAY DATE</label><br/>
                      <div class="dropdown">
                        <input type="date" value={this.state.firstPayDate} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"5%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,padding: 10, fontSize: 15}}
                        name="firstPayDate" onChange={this.handleFirstPayDate.bind(this)}/>

                      </div>

                    </div>
                    <br/><br/>


                    <br/>


                  </div>

                </div>
                <div align="center" style={{marginBottom:"7%"}}>
                      <button type="button" className="btn  btn-fill  btn-lg"   style={{backgroundColor:"#A1DF99",width:200,height:45}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"DIN-Medium",fontSize:16,color:"#000000"}}>SAVE AND PROCEED</span></button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    );
  }
}
const List = connect(mapStateToProps)(PaySchedule);

export default List;
