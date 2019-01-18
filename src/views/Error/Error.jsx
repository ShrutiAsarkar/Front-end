import React from "react";

// react plugin used to create charts
import axios from 'axios';
import {Link} from "react-router-dom";

// function that returns a color based on an interval of numbers



class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.IsEmpty=true;
    //console.log("post data id:",this.props.match.params.id);

  }
  static handleSubmit() {
    console.log("clicked");
  }

  componentDidMount(){
    /*fetch('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/dashboard',{mode:'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
    /*.then((response) =>{
console.log(response.data);


    })
    .catch((error) =>{
      console.error("Error",error);
    });

  /*axios({
    url:'http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/dashboard',
    //url: 'https://02b60a22-3448-4c5a-b6f3-fe957cbea5bd.mock.pstmn.io/api/dashboard',
    method: 'get',
    headers: {
     // 'X-api-key': '49b18264b4984d46b63e737b09e00243',
      'Access-Control-Allow-Origin':"*",
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response.data);
      // let arr=response.data.toString();
      // console.log(JSON.parse(JSON.stringify(arr)));
      // let contentKeys = Object.keys(JSON.parse(JSON.stringify(arr)));
      // var allNames = contentKeys.map((t) =>
      //   console.log(t[1])
        //data.content[t].map((e) => (<div>{e.name}</div>))
      // )
      // console.log(allNames)


      /*for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log("checking:",arr[i].length>0? "full":"empty");
      }*/

    /*  })
      .catch(err => {
        console.log(err);
      });*/
  }
  render() {
    return (
      <div className="content" style={{marginTop: 30, marginLeft: 25, marginRight: 25}}>
        <div className="row">
          <div className="col-xs-12 col-md-9">
            <p>OOps!!Something went wrong....!</p>


          </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
