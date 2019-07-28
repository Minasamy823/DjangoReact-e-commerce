import React, {Component} from 'react';
import axios from 'axios';


// this file for the first page of the site, gonna hold all the
// products
// export default class Products extends Component {
//   state={
//     data:[]
//   }
//
//   var parseString = require('xml2js').parseString;
//
//   axios.get(`http://www.cbr.ru/scripts/XML_daily.asp`)
//     .then(response => {
//        parseString(response.data, function (err, result) {
//         console.log(result); // returns a json array
//         this.events = result // nothing happens
//     });
//   })
// }

  // var convert = require('xml-js');
  // var xml =
  // 'http://www.cbr.ru/scripts/XML_daily.asp';
  // var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
  // console.log(result1);

// componentWillMount(){
//
//      axios.get('http://127.0.0.1:8000/shop/')
//      .then(response=>response.data)
//      .then((data)=> {
//       this.setState({data:data })
//       console.log(this.state.data)
//     })
// }

  render(){

    return(
      <div>
        {this.state.data.map((data, index)=>(
          <img src={data.image}/>

        ))}
      </div>

    );
  }
}
