import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";

const mapStateToProps = state => {
  return { data: state };
};

class BankAccount extends React.Component {
  constructor(props) {
    super(props);
  }
  state={
    routingNum:"",
    accountNum:"",
    recurFunding:"",
    accType:""
  };
  handleroutingNum(e){
    this.setState({routingNum:e.target.value});
  }
  handleAccountNum(e){
    this.setState({accountNum:e.target.value});
  }
  async handleSubmit(){
    store.dispatch({type:'updateBankAccount',payload:this.state});
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

  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor: 'white', paddingLeft: 10, marginTop: 30, marginLeft: 70, marginRight: 70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop: 20}}>Set up Company</h4>
                <div style={{height: 650, marginTop: 30}}>
                  <div className="row" align="center" style={{paddingBottom: 8, alignSelf: 'center',marginLeft:70}}>
                    <form align="center">
                      <label className="radio-inline" style={{marginLeft: 40, marginRight: 60}}>
                        <Link to="/setupCompany" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />COMPANY
                          INFO</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight: 60}}>
                        <Link to="/taxInfo" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />TAX INFO</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight: 60}}>
                        <Link to="/paySchedule" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />PAY SCHEDULE</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight: 60}}>
                        <Link to="/bankAccount" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} checked/>BANK
                          ACCOUNT</Link>
                      </label>
                    </form>
                  </div>
                  <div class="row" style={{marginTop:30}}>
                  </div>


                  <div class="row" style={{marginTop:30,marginLeft:70}}>
                    <div class="form-group col-xs-6 ">
                      <i class="material-icons">account_balance</i><label class="control-label ">ROUTING
                      NUMBER</label><br/>
                      <input type="number" value={this.state.routingNum} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                          name="routingNum" onChange={this.handleroutingNum.bind(this)}   placeholder=" -------------------"/>
                      <p><br/> Include any leading zeros if they exist.</p><br/>

                    </div>
                    <br/>

                    <div class="form-group  col-xs-6  ">

                      <i class="material-icons">account_balance</i><label class="control-label ">ACCOUNT
                      NUMBER</label><br/>
                      <div class="dropdown">
                        <input type="number" value={this.state.accountNum} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                          name="accountNum" onChange={this.handleAccountNum.bind(this)}     placeholder=" "/>

                      </div>
                      <p><br/> Include any leading zeros if they exist.</p><br/>

                    </div>
                    <br/><br/>

                    <div class="form-group col-xs-6 ">
                      <i class="material-icons">account_balance</i><label class="control-label ">ACCOUNT
                      TYPE</label><br/>

                      <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select
                          <span class="caret"></span></button>
                        <ul class="dropdown-menu">

                        </ul>
                      </div>
                      <p><br/> Include any leading zeros if they exist.</p><br/>

                    </div>
                    <br/>

                    <div class="form-group col-xs-6 ">
                      <i class="material-icons">account_balance</i><label class="control-label ">RECURRING
                      FUNDING</label><br/><br/>
                      <p>Fund your account if your balance goes below $1000 </p>
                      <div class="btn-group">
                        <button type="button" class="btn btn-success">Yes</button>
                        <button type="button" class="btn btn-default">No</button>
                      </div>

                    </div>
                    <br/>


                  </div>

                </div>
                <div align="center" style={{marginBottom:10}}>
                  <button type="button" class="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>SAVE AND PROCEED</button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}
const List = connect(mapStateToProps)(BankAccount);

export default List;
