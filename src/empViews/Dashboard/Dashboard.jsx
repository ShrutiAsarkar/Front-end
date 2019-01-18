import React from "react";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";
import {store} from '../../index.js';
import uphold from '../../assets/uphold.jpg';


const mapStateToProps = state => {
    return { data: state };
};
function updateID(id) {
    store.dispatch({type:'updateData',payload:id});
}

class Dashboard extends React.Component {

    state={
        assetCards:[],
        totalAssets:null,
        transactionList:[],
        arr:[]
    };

    constructor(props){
        super(props);
        this.IsEmpty=true;
        console.log("user id:",this.props.data.id);
        console.log("dashboard state data:",this.props.data);
        updateID(this.props.match.params.id);
    }


    static handleSubmit() {
        console.log("clicked");
    }

    async componentDidMount(){
        await axios.post(this.props.data.backendUrl + '/dashboard',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    data: {userId: this.props.data.id},
                    userId: this.props.data.id,
                    assetCards: response.data.assetCards,
                    userName: response.data.userName,
                    totalAssets: response.data.totalAssets,
                    data1:response.data.data1
                });
                store.dispatch({type:'updateUser',payload:response.data.userName});
            },this.forceUpdate())
            .catch(error => {
                console.log(error);
            });
    }
    render() {


        return (
            <div className="content" style={{marginTop: 18, marginLeft: 70, marginRight: 70}}>
                <div className="row">

                    <div style={{marginTop: 18, marginLeft: 500, marginRight: 70}}>
                        Welcome to Uphold! Where would you like to begin?
                    </div>
                    <div className="container-fluid bg-grey">
                        <div className="row">
                            <div className="col-sm-4">
                                <span className="glyphicon glyphicon-globe logo"></span>
                            </div>
                            <div className="col-sm-8">
                                <p>Available balance</p>
                               <p>Rs 0.00INR </p>
                            </div>
                        </div>
                    </div>

                </div>
                    {this.state.assetCards.map((dynamicComponent, i) => {
                            let pic= dynamicComponent.currency.toLowerCase();
                            console.log("component:",pic);
                            return(
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 md-3">
                                        <div className="card" style={{"border-radius" :"1px" , width:"300px",height:"175px",boxShadow: 'none',backgroundImage:"url("+require('../../assets/uphold-images/cards/vintage/'+dynamicComponent.currency.toLowerCase()+'.jpg')+")",backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                                            <div className="card-header text-center" >
                                                        <h4 className="card-title"
                                                            style={{color: 'white', textAlign: 'start', paddingLeft: 10, marginBottom: 0}}>

                                                        </h4>
                                                    </div>
                                                    <div className="card-content" style={{color: 'white',height: 100,align:'center',fontSize:20}}>
                                                           {dynamicComponent.currency}<br/>
                                                            {dynamicComponent.amt}<br/><br/>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            )
                        })}
                </div>

        );
    }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;

