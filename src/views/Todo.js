import React, { Component } from 'react'
import { redirect } from 'react-router';
import CheckboxList from '../components/CheckboxList'

export default class Todo extends Component {
    constructor() {
      super();
      this.state = {
        // myList: []
        redirect:false

      }
    }
  
  
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const text=e.target.myText.value
    //     this.setState({myList: this.state.myList.concat([text])})

      

  render(){
    return (
      <div>

        <form onSubmit={this.props.handleToDoSubmit}>
            <input placeholder='Add To Do Item Here' name='myText'/>
            <button type='submit'>Add</button>

        </form>




        {/* <center> */}
          <CheckboxList myList = {this.props.myList} deleteToDo={this.props.deleteToDo} />
        {/* </center> */}


      </div>
    )
  }
};
