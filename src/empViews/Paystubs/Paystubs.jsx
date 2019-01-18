import React from "react";
import axios from "axios";
import {store} from "../../index";
import connect from "react-redux/es/connect/connect";



const mapStateToProps = state => {
    return { data: state };
};


class Paystubs extends React.Component {

    state={
        employee:null,
        //paymentdata:{employee: null,
            transactionList :[]
        //}

    };
  constructor(props) {
    super(props);
    this.IsEmpty = false;
      console.log("user id paystub:",this.props.data.id);
    console.log("post data id:", this.props.match.params);

  }

  static handleSubmit() {
    console.log("clicked");
  }

  async componentDidMount() {
      await axios.post(this.props.data.backendUrl + '/payment', {
          user: this.props.data.id
      })
          .then(response => {
              console.log("emp.......:",response.data);
              this.setState({
                  employee: response.data.employee,
                  transactionList: response.data.transactionList

              });
              console.log("transitionlist",this.state.transactionList);
              store.dispatch({type:'updateUser',payload:response.data.userName});
          },this.forceUpdate())
          .catch(error => {
              console.log(error);
          });
  }

  render() {
    return (
      <div className="content" style={{marginTop: 30, marginLeft: 70, marginRight: 70}}>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-circle-chart" style={{"borderRadius" :"1px"}}>
                  <div className="card-header">
                    <div className="card-title">
                      <p style={{fontFamily:"DIN-Light",fontSize:"30px",marginLeft:"30px"}}> Payments </p>
                    </div>
                  </div>
                  <div className="card-content" style={{minHeight: 120, marginLeft: 0}}>
                    {this.IsEmpty ?

                      <div className="row" style={{paddingBottom: 8}}>
                        <div className="text-center" align="center">
                          <p> set up company to show your overview here</p>
                        </div>
                        <div className="text-left">
                        </div>
                      </div> :
                      <div>
                          <p className="text-left" style={{fontFamily:"Franklin-Gothic-Book-Regular",marginLeft:"30px"}}>
                              {/*You got paid on <strong>2nd November</strong>.Your next payday is on*/}
                       {/*<strong> 1st December.</strong><br/>*/}
                        You are receiving your payments in your <strong>USD</strong> wallet by default.</p>
                        <table className="table" style={{marginTop:"25px",marginLeft:"30px",width:"850px"}}>
                          <thead className="thead-light" style={{fontFamily:"Franklin-Gothic-Book-Medium",fontSize:"16px"}}>
                          <tr>
                            <th>Pay Date</th>
                            <th> CURRENCY </th>
                            <th>AMOUNT</th>
                            <th> </th>
                          </tr>

                          </thead>
                          <tbody style={{textAlign: "left"}}>
                          {this.state.transactionList.map((dynamicComponent, i) => {
                              console.log(dynamicComponent);
                              return(
                                  <tr>
                                      <td>{dynamicComponent.Date}</td>
                                      <td>{dynamicComponent.currency}</td>
                                      <td>{dynamicComponent.Amount}</td>

                                      <td>
                                          <button type="button" className="btn btn-success btn-fill" style={{backgroundColor:"#A1DF99",color:"black",width:"150px"}}>VIEW PAYSTUB</button>
                                      </td>

                                  </tr>
                              )
                          })}
                          </tbody>
                        </table>
                      </div>}
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

const Paystub = connect(mapStateToProps)(Paystubs);

export default Paystub;
