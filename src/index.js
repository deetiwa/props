import React from "react";
import  ReactDOM  from "react-dom";
// import App from './App';
import Heading from "./Heading";
// import '.index.css';
import {add , sub, mul, div } from "./Calc";


let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle ={};

if(curDate >=1 && curDate <12)
{
    greeting = 'Good Morning';
    cssStyle.color = "green";
}
else if (curDate >=12 && curDate <19)
{
  greeting = 'Good Afternoon';
  cssStyle.color = "orange";
}
else
{
  greeting = 'Good Night';
  cssStyle.color = "black";
}

ReactDOM.render
(
  <>
  <div>
   <h1> Hello, Good Morning!! <span style={cssStyle}> { greeting } </span></h1>
   
   </div>
   </>,
   document.getElementById('root')
   );

// How to make Component

ReactDOM.render(
  <>
  <Heading />
  <p>Best Place of Indore </p>
  <ol>
    <li>Rajwada</li>
    <li>Chhapan</li>
    <li>Indore Zoo</li>
    <li>Khajrana</li>
  </ol>
  </>,
document.getElementById('root')
);

// How to perform sum, divi, sub, multi

 ReactDOM.render (
   <>
     <ul>
       <li>Sum of two number{add(40,4)}</li>
       <li>Sub of two number{sub(40,4)}</li>
      <li>Multi of two number{mul(40,4)}</li>
      <li>Divided of two number{div(40,4)}</li>
    </ul>
  </>,
   document.getElementById('root')
);

// // Props

// ReactDOM.render(
//   <>
//   <div className="cards">
//     <div className="card">
//       <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="mypic" className="crad_img" />
//       <div className="card_info">
//         <span className="card_category">A Netflix  Original Series</span> 
//         <h3 className="card_title">Dark</h3>
//         <a href="https://www.netflix.com/in/title/80990668?source=35" target="blank">
//           <button>Watch Now</button>
//         </a>
//       </div>
//     </div>
//   </div>
//   </>,
//    document.getElementById('root')
//  );
