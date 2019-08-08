import React, {Component} from 'react';
import axios from 'axios';
import { Container, Card, Icon, Image, Item, Button } from 'semantic-ui-react'

export default class products extends Component{

  state = {
    data: [],
    search: '',
    search_data:[]

  }


  // componentWillMount(){
  //
  //      axios.get('http://127.0.0.1:8000/shop/')
  //       .then((res)=> {
  //        this.setState({data:res.data.results});
  //        console.log(this.state.data);
  //
  //      })}



   search = () => {
      const {search} = this.state;
      axios.get('http://127.0.0.1:8000/shop/?search={search}')
     .then((res)=> {
      this.setState({search_data : res.data.results});
      console.log(this.state.search_data);
    })}


    searchchangehandler = (event) => {
      this.setState({search: this.refs.search.value},
        () => {
          if (this.state.search && this.state.search.lenght > 0)
              this.search()
}
        )}
















  render() {
    const {data} = this.state;

    return(

      // <Container>

            <input
                refs= "search"
                placeholder="search"
                value={this.state.search}
                onChange={this.searchchangehandler}
            />

      //   <Item.Group divided>
      //
      // {data.map(pro =>{
      //   return(
      //
      //
      //     <Item key={pro.id}>
      //           <Item.Image src={pro.image} />
      //           <Item.Content>
      //             <Item.Header as="a">{pro.title}</Item.Header>
      //             <Item.Meta>
      //               <span className="cinema">{pro.supplier}</span>
      //             </Item.Meta>
      //             <Item.Description>{pro.description}</Item.Description>
      //             <Item.Extra>
      //               <Button
      //                 primary
      //                 floated="right"
      //                 icon
      //                 labelPosition="right">
      //                 Add to cart
      //                 <Icon name="cart plus" />
      //               </Button>
      //             </Item.Extra>
      //           </Item.Content>
      //         </Item>
      //   )
      // })}
      //     </Item.Group>
      // </Container>


)}
}
