import React from "react";
// import "./Person.css";
import styled from 'styled-components'

const StyleDiv =  styled.div `
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
text-align: center;
padding: 50px;


@media (min-width:1000px){

    width: 450px;

}`


const person = (props) => {
  
  return (
    // <div className="Person" style={style}>
      <StyleDiv>
      <p onClick={props.click}>
        my name is {props.name} I am {props.age} old {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      </StyleDiv>
  );
};
export default person;
