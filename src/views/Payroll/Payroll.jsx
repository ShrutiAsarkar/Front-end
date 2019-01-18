import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";


const mapStateToProps = state => {
  return { data: state };
};

class Payroll extends React.Component {
  constructor(props) {
    super(props);
    this.user="";
    this.new=[];
    console.log("In Payroll:",this.props.data);

  }
  //data=[];
  state={
    data:null,
    arr:[]
  };

  async componentDidMount(){
    console.log("In payrolls:",this.props);
    await axios.post(this.props.data.backendUrl + '/payroll/list',{
        user: this.props.data.id
      })
      .then(response => {
        console.log(response);
        this.setState({data:response.data});
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
                <div className="card card-circle-chart" style={{"borderRadius" :"1px" , minWidth:"680px"}}>
                  <div className="card-header">
                    <div className="card-title">
                        <p style={{fontFamily:"Franklin Gothic Medium",fontSize:26,color:"#000000"}}> Payrolls </p>
                    </div>
                  </div>
                  <div className="card-content" style={{minHeight: 150, marginLeft: 0}}>
                    <div style={{position: "absolute",top: 0, right: 60}}>
                      <Link to={{pathname: "/addPayroll"}}>
                          <button type="button" className="btn  btn-fill" style={{backgroundColor:"#A1DF99"}}><span style={{fontFamily:"DIN",fontSize:14,color:"#000000"}}>+ Add</span></button>
                      </Link>
                    </div>
                      <div style={{marginTop:"5%"}}>

                      {this.state.data ?
                      <div><p className="text-left"> </p>

                          <table className="table" style={{width:900,paddingTop: 20,paddingRight:20,marginLeft:"5%",marginRight:"5%"}}>
                          <thead className="thead-light">
                          <tr style={{fontFamily:"Franklin Gathic Medium",fontSize:12,color:"#000000"}}>
                            <th>Name</th>
                            <th>Total Amount</th>
                            <th>Last Pay Date</th>
                            <th></th>
                          </tr>
                          </thead>
                          <tbody style={{textAlign: "left"}}>
                          {this.state.data.map((dynamicComponent, i) => {
                            console.log(dynamicComponent);
                            return(
                              <tr>
                                <td style={{fontFamily:"Franklin Gathic Medium",fontSize:16,color:"#oooooo"}}>{dynamicComponent.name}</td>
                                  <td style={{fontFamily:"Franklin Gathic Medium",fontSize:16,color:"#oooooo"}}>{dynamicComponent.total_amt}</td>
                                {/*<td>{dynamicComponent.last_pay_date}</td>*/}
                                <td></td>
                                  <td><Link to={{ pathname: "/confirmation/" + dynamicComponent.id }}>View Payroll</Link></td>
                              </tr>
                            )
                          })}
                          </tbody>
                        </table>
                      </div>
                      :
                      <div className="row" style={{paddingBottom: 8}}>
                        <div className="text-center" align="center">
                          <p style={{align:"center"}}> No  payrolls found. You can add payrolls.</p>
                        </div>
                      </div>
                    }
                      </div>
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
const List = connect(mapStateToProps)(Payroll);

export default List;
