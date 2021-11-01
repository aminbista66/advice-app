import React, { Component } from 'react'
import axios  from 'axios'
import './App.css';


export class App extends Component {
  super(){}
  
  state = {advice:'', id:''}

  componentDidMount(){
    this.fetchAdvice()

  }
  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice, id} = response.data.slip;
        this.setState({advice, id})
        console.log(response)
      })
      .catch((error) =>{
        console.log(error)
      })
      }
  render(){
    const {advice} = this.state;
    return <>
    <body>
      
<div className="card">

   <div className="text">
      {advice}
   </div>
   <div className="btn" onClick={this.fetchAdvice}><span>New</span></div>
</div>
    </body>

    
    </>
  }      


}
export default App
