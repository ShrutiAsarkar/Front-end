import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";
import tax from "../../assets/ic_tax.png";
import company from "../../assets/ic_company_name.png";
import radio from "../../assets/radio.png";
import radio1 from "../../assets/radio-normal.png";
import oval from "../../assets/Oval.png";



const mapStateToProps = state => {
  return { data: state };
};
class Taxinfo extends React.Component {
  constructor(props) {
    super(props);
    console.log("In Taxinfo state:",this.props.data);

  }
  state = {
    federalEin:"",
    eddAccountNumber:"",
    companyType:"",
    suiRate:"",
    depositSchedule:"",
    ettRate:"",
  };


  handleFederalEin(e){
    this.setState({federalEin:e.target.value});

  }
  handleEddAccNum(e){
    this.setState({eddAccountNumber:e.target.value});

  }
  handleCompanytype(e){
    this.setState({companyType:e.target.value});
  }
  handleSuiRate(e){
    this.setState({suiRate:e.target.value});
  }
  handleDepositSchedule(e){
    this.setState({depositSchedule:e.target.value});
  }
  handleEttRate(e){
    this.setState({ettRate:e.target.value});
  }
  handleSubmit(){
    store.dispatch({type:'updateTaxInfo',payload:this.state});
  }


  render() {
    return (
    <div className="container-fluid">
      <div>
      </div>

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
                      color: "#000000"}}>Set up Company</p>                <div style={{minHeight:600,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8,alignSelf:'center',marginLeft:70}}>
                      <div className="row">
                          <div className="col-md-4" style={{width:390,marginLeft:"8%"}}>
                              <img src={oval} style={{marginLeft:"-4%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:'3%'}}>&nbsp;COMPANY INFO </span>
                          </div>
                          <div className="col-md-4" style={{width:200,marginLeft:"-4%"}}>
                              <img src={radio} style={{marginLeft:"1%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; TAX INFO </span>
                          </div>
                          <div className="col-md-4" style={{width:200,marginLeft:"-4%"}}>
                              <img src={radio1} style={{marginLeft:"1%"}} />
                              <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; PAY SCHEDULE </span>
                          </div>

                      </div>

                  </div>
                  <div className="row" style={{marginTop:"7%",marginLeft:70}}>
                    <div className="form-group col-xs-6 " style={{marginBottom:70}}>
                      <p style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:"-4%"}}>FEDERAL TAX SETUP</p><br/>
                        <img src={company} style={{marginLeft:"-4%"}} /><label className="control-label "style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}>FEDERAL
                      EIN NUMBER*</label><br/>
                      <input type="text"  value={this.state.federalEin} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                          boxSizing: "border-box",width: 300,padding: 10,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                          name="federalEin" onChange={this.handleFederalEin.bind(this)}   placeholder="XX XXXX-1234"/>

                    </div>

                    <div className="form-group  col-xs-6  " style={{marginBottom:70}}>
                        <p style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:"-4%"}}>CALIFORNIA TAX SETUP</p><br/>
                        <img src={company} style={{marginLeft:"-4%"}} /><label className="control-label" style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}> EDD ACCOUNT
                        NUMBER</label><br/>
                      <input type="number"  value={this.state.eddAccountNumber} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                          boxSizing: "border-box",width: 300,padding: 10, fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                          name="eddAccountNumber" onChange={this.handleEddAccNum.bind(this)}   placeholder="XX XXXX-1234"/>

                    </div>

                    <div className="form-group col-xs-6 " style={{marginBottom:30}}>
                        <img src={company} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}>
                        COMPANY TYPE</label><br/>
                        <div style={{height:40,width:500,marginLeft:"5%",marginTop:"6px",}}>
                            <select  style={{height:40,width:300}}>
                                <option value="Orange">s-corp</option>
                                <option value="Radish">c-corp</option>
                                <option value="Cherry">LLC</option>
                            </select>
                            <p> </p>
                        </div>
                        <br/>

                    </div>

                    <div className="form-group  col-xs-6  " style={{marginBottom:30}}>

                        <img src={tax} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}} >EMPLOYER SUI RATE</label><br/>
                      <input type="number"  value={this.state.suiRate} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                          boxSizing: "border-box",width: 300,padding: 10,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                         name="suiRate" onChange={this.handleSuiRate.bind(this)}    placeholder="E.g. 3.400%"/>

                    </div>
                    <br/><br/>



                    <div className="form-group  col-xs-6  ">
                        <img src={tax} style={{marginLeft:"-4%"}} /><label className="control-label " style={{marginLeft:"3%",fontFamily:"Franklin Book",fontSize:16,color:"#6464646"}}>EMPLOYER ETT
                      RATE*</label><br/>
                      <input type="number" value={this.state.ettRate} style={{background: "#FDFDFD",
                          border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                          boxSizing: "border-box",width: 300,padding: 10,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                           name="ettRate" onChange={this.handleEttRate.bind(this)}  placeholder="E.g. 0.1%"/>

                    </div>
                    <br/><br/>


                  </div>

                </div>
                <div align="center" style={{marginBottom:"7%"}}>
                  <Link to={{pathname: "/paySchedule"}}>
                      <button type="button" className="btn  btn-fill  btn-lg"   style={{backgroundColor:"#A1DF99",width:140,height:45}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"DIN-Medium",fontSize:16,color:"#000000"}}>PROCEED</span></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    )
  }
}
const List = connect(mapStateToProps)(Taxinfo);

export default List;
