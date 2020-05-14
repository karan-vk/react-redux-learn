import React from 'react'
const person = (props) => {
    return(
 <div> 

 <p>my name is {props.name} I am  {props.age} old {props.children}</p>
 <p></p>
      
 </div>
       );
        
    

}
export default person