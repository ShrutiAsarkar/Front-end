import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";
import company from "../../assets/ic_company_name.png";
import phone from "../../assets/ic_phone.png";
import title from "../../assets/ic_title.png";
import location from "../../assets/ic_location.png";
import radio from "../../assets/radio.png";
import radio1 from "../../assets/radio-normal.png";
import oval from "../../assets/Oval.png";




const mapStateToProps = state => {
  return { data: state };
};

class SetupCompany extends React.Component {
  constructor(props){
    super(props);
    console.log("In Setupcompany",this.props.data);
  }
  state = {
    companyName: "",
    companyPhone: "",
    line1: "",
    line2: "",
    city: "",
    state1: "",
    zip: "",
    name:"",
    position:"",
    email:"",
    phone:"",
    companyAddress: {
      line1: "",
      line2: "",
      city: "",
      state1: "",
      zip: "",
    },
    companySignatory: {
      name:"",
      position:"",
      email:"",
      phone:""
    }
  };
  handleSubmit() {
    const sign = this.state.companySignatory;
    sign.name = this.state.name;
    sign.email = this.state.email;
    sign.position = this.state.position;
    sign.phone = this.state.phone;
    this.setState({companySignatory:sign});
    const add = this.state.companyAddress;
    add.line1 = this.state.line1;
    add.line2 = this.state.line2;
    add.state1 = this.state.state1;
    add.city = this.state.city;
    add.zip = this.state.zip;
    this.setState({companyAddress:add});
    store.dispatch({type:'updateCompany',payload:this.state});
  }
  handleCompany(e){
    //return { type: "CHANGE_COMPANY", payload: name }
    this.setState({companyName: e.target.value});
    //console.log(this.state.companyName);
  }
  handleCompanyPhone(e){
    this.setState({companyPhone:e.target.value});
    //console.log(this.state.companyPhone);
  }

  handleCompanyAddress1(e){
    this.setState({line1:e.target.value});
    //console.log(this.state.line1);
  }
  handleCompanyAddress2(e){
    this.setState({line2:e.target.value});
    //console.log(this.state.line2);
  }
  handleAddressCity(e){
    this.setState({city:e.target.value});
    // console.log(this.state.city);
  }
  handleAddressState(e){
    this.setState({state1:e.target.value});
    //console.log(this.state.State1);
  }
  handleAddressZip(e){
    this.setState({zip:e.target.value});
    //console.log(this.state.zip);
  }
  handleName(e) {
    this.setState({name:e.target.value});
    //console.log(this.state.name);
  }
  handlePosition(e){
    this.setState({position:e.target.value});
    //console.log(this.state.position);
  }
  handleEmail(e){
    this.setState({email:e.target.value});
    // console.log(this.state.email);
  }
  handlePhone(e){
    this.setState({phone:e.target.value});
    //console.log(this.state.phone);
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
                    color: "#000000"}}>Set up Company</p>
                <form>
                  <div style={{minHeight:600,marginTop:30}}>
                    <div className="row" align="center" style={{paddingBottom: 8,alignSelf:'center',marginLeft:70}}>
                        <div className="row">
                            <div className="col-md-4" style={{width:390,marginLeft:"8%"}}>
                                <img src={radio} style={{marginLeft:"-4%"}} />
                                <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000",marginLeft:'3%'}}>&nbsp;COMPANY INFO </span>
                            </div>
                            <div className="col-md-4" style={{width:200,marginLeft:"-4%"}}>
                                <img src={radio1} style={{marginLeft:"1%"}} />
                                <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; TAX INFO </span>
                            </div>
                            <div className="col-md-4" style={{width:200,marginLeft:"-4%"}}>
                                <img src={radio1} style={{marginLeft:"1%"}} />
                                <span style={{fontFamily:"Franklin Gothic Medium",fontSize:16,color:"#000000"}}>&nbsp; PAY SCHEDULE </span>
                            </div>

                        </div>
                    </div>
                    <div className="row" style={{marginTop:"7%"}}>
                      <div className="form-group col-xs-6 ">
                        <img src={company}  style={{marginLeft:"15%"}}/>
                        <label className="control-label " style={{marginLeft:"3%",fontFamily:"Franklin  Book",fontSize:16,color:"#646464"}}>COMPANY NAME</label>
                        <input type="text" style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"24%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,padding: 10,fontFamily:"Franklin Book",color:"#626262",fontSize: 16}}
                               name="companyName"  value={this.state.companyName} placeholder="Company Name" onChange={this.handleCompany.bind(this)}/>
                        <p style={{marginLeft:"24%",marginTop:10}}> your company name</p><br/>
                      </div>

                      <div className="form-group  col-xs-6 ">
                          <img src={phone} style={{marginLeft:"5%"}} />
                        <label className="control-label " style={{marginLeft:6,fontFamily:"Franklin  Book",fontSize:16,color:"#646464"}}>COMPANY PHONE*</label><br/>
                        <input type="number" value={this.state.companyPhone} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"14%",marginTop:"6px",
                            boxSizing: "border-box",fontFamily:"Franklin Book",fontSize:16,color:"#626262",width: 300,padding: 10}}
                               name="companyPhone" onChange={this.handleCompanyPhone.bind(this)}/>
                        <p style={{marginLeft:"14%",marginTop:10}}>company phone</p><br/>

                      </div>
                      <br/><br/>
                    </div>
                    <div className="row" style={{marginTop:20,marginLeft:70}}>

                      <div className="form-group col-xs-6">
                          <img src={location} style={{marginLeft:"-4%"}} />
                        <label className="control-label" style={{marginLeft:"5%",fontFamily:"Franklin Book",fontSize:16,color:"#646464"}}>COMPANY ADDRESS</label><br/>
                        <input type="text" value={this.state.line1} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                            boxSizing: "border-box",marginRight:90,width: 300,padding: 10, fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                               name="line1"   onChange={this.handleCompanyAddress1.bind(this)} placeholder="Address Line 1 "/><br/><br/>
                        <input type="text" value={this.state.line2} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,marginRight:90,padding: 10,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                               name="line2"   onChange={this.handleCompanyAddress2.bind(this)} placeholder="Address Line 2 "/><br/><br/>
                        <input type="text" value={this.state.city} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,padding: 10,marginRight:90,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                               name="city"  onChange={this.handleAddressCity.bind(this)} placeholder="City"/><br/><br/>
                        <input type="text" value={this.state.State1} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,marginRight:90,fontFamily:"Franklin Book",fontSize:16,color:"#626262",padding: 10}}
                               name="State1"   onChange={this.handleAddressState.bind(this)} placeholder="State "/><br/><br/>
                        <input type="text" value={this.state.zip} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,padding: 10, marginRight:90,fontSize: 15}}
                               name="zip" onChange={this.handleAddressZip.bind(this)} placeholder="Zip"/><br/>
                        <p style={{marginLeft:"6%",marginTop:10}}>where your company is located.You can add <br/>
                          multiple addresses later.</p>
                      </div>
                      <div className="form-group col-xs-6">
                          <img src={title} style={{marginLeft:"-4%"}} />
                        <label className="control-label" style={{marginLeft:8,fontFamily:"Franklin Book",fontSize:16,color:"#646464"}}>COMPANY SIGNATORY</label><br/>
                        <input type="text" value={this.state.name} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",marginTop:"6px",
                            boxSizing: "border-box",width: 300,padding: 10,fontFamily:"Franklin Book",fontSize:16,color:"#626262",marginRight:90}}
                               name="name" onChange={this.handleName.bind(this)}/><br/>
                        <p style={{marginLeft:"6%",marginTop:10}}>Person's name</p><br/>
                        <input type="text" value={this.state.position} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",
                            boxSizing: "border-box",width: 300,marginTop:-14,padding: 10,fontFamily:"Franklin Book",fontSize:16,color:"#626262",marginRight:90}}
                               name="position" onChange={this.handlePosition.bind(this)}/><br/>
                        <p style={{marginLeft:"6%",marginTop:10}}>Position</p><br/>
                        <input type="text"  value={this.state.email} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",
                            boxSizing: "border-box",width: 300,marginTop:-14,padding: 10,marginRight:90,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                               name="email" onChange={this.handleEmail.bind(this)}/><br/>
                        <p style={{marginLeft:"6%",marginTop:10}}>Email</p><br/>
                        <input type="text" value={this.state.phone} style={{background: "#FDFDFD",
                            border: "1px solid #979797",marginLeft:"6%",
                            boxSizing: "border-box",width: 300,marginTop:-14,padding: 10, marginRight:90,fontFamily:"Franklin Book",fontSize:16,color:"#626262"}}
                               name="phone" onChange={this.handlePhone.bind(this)}/><br/>
                        <p style={{marginLeft:"6%",marginTop:10}}>Phone</p><br/>
                        <br/><br/>
                      </div>
                    </div>
                  </div>
                  <div align="center" style={{marginBottom:"7%",marginTop:"7%"}}>
                    <Link to={{pathname: "/taxinfo"}}>
                        <button type="button" className="btn  btn-fill  btn-lg"   style={{backgroundColor:"#A1DF99",width:140,height:45}} onClick={this.handleSubmit.bind(this)}><span style={{fontFamily:"DIN-Medium",fontSize:16,color:"#000000"}}>PROCEED</span></button>
                    </Link>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>

      </div>





    );
  }
}

const List = connect(mapStateToProps)(SetupCompany);

export default List;
