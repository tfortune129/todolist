import React, { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Signin from './Signin'
import Signup from './Signup'
import Todo from './views/Todo'




export default class App extends Component {

  constructor(){
    super();
    this.state = {
      myList: []
    }
  }

  addToDo = (e) => {
    e.preventDefault();
    const text = e.target.myText.value
    this.setState({myList: this.state.myList.concat([text])})
  };

  deleteToDo = (indexToDelete) =>{
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1)
    this.setState({myList: copy})

  };

  render() {
    return (

      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/todo' element={<Todo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo} />} />
          </Routes>

        </div>
      
      </BrowserRouter>
    )
  }
}


