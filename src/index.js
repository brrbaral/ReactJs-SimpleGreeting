// var React=require('react');;
// var ReactDOM=require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let  currentDate=new Date().getHours()
let greeting="";
const cssStyle={};

if(currentDate>=1 && currentDate<12){
  greeting="Good Morning";
  cssStyle.color='green';
}
else if(currentDate>=12 && currentDate <20){
  greeting="Good AFternoon";
  cssStyle.color='orange'
}else{
  greeting="Good Night";
  cssStyle.color='black';
}
console.log(currentDate)
ReactDOM.render(
  <div>
  <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  </div>,
  document.getElementById('root'));
