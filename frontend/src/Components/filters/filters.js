import React, {Component} from 'react';

export default class filters extends Component{


  state = {
    s : "s"
  }

  handleChange =(event)=>{
    this.setState({s: event.target.value})
  }

  handleSubmit=(event)=> {
    alert('Your favorite flavor is: ' + this.state.s);
    event.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.s} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <p> {this.state.s} </p>
      </form>
      </div>
    )
  }
}
