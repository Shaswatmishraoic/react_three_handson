import React, {Component} from 'react';
import './Newform.css'
class Displayform extends Component{
  constructor(props){
    super(props);
    console.log(this.props.value)
  }
  render(){
    return(
      <>
        <h1>Data</h1>
        <div className='r'>
        { 
          this.props.value.map((item, index)=>{
            return(
              <div className='shows'>
              <span className='show' key={index}> Name:{item.name} || Department:{item.dept} || Rating:{item.rate}</span>
              </div>
            )
          })
        }
        </div>
        <button className='back' onClick={this.props.toggleFunc}>Go Back</button>
      </>
    )
  }
}
export default Displayform;