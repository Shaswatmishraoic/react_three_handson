import React, { Component } from 'react';
import './Newform.css'
import Displayform from './Displayform';

class Newform extends Component{
    constructor(){
        super();
        this.state = {
            Name : '',
            Dept : '',
            Rating : '' ,
            clicked: true,
            EmpData : []
        }
    }
    changeHandle = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    toggleFunc = () => {
        this.setState({clicked : !this.state.clicked})
    }
    clickHandle = (e) =>{
        e.preventDefault();
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            rate: this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({
            EmpData: this.state.EmpData,
            Name:'',
            Dept:'',
            Rating:'',
            clicked: false
        })
    }
    render(){
        return(
             <>
              <h1>EMPLOYEE FEEDBACK FORM</h1>
              {this.state.clicked ?
                <form>
                <div className='one'>
               <label htmlFor='name'>Name:</label>
               <input className='go' type='text' id='name' name='Name' value={this.state.Name} onChange={this.changeHandle} required/>
               </div>
               <div className='two'>
               <label htmlFor='dept'>Department:</label>
               <input className='go' type='text' id='dept' name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/>
               </div>
               <div className='three'>
               <label htmlFor='rating'>Rating:</label>
               <input className='go' type='number' id='rating' name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/>
               </div>
               <button type='button' onClick={this.clickHandle}>Submit</button>
                </form>
                : 
                <Displayform value={this.state.EmpData} toggleFunc={this.toggleFunc}/>
              }
              
            </>
        )
    }
}
export default Newform;