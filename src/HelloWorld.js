import React from 'react';
import logo from './compooter.png';

function Hello() {
    return (
        <div className="Hello World!">

        </div>
    );
}
const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
  function changeBackground(e) {
    e.target.style.background = 'red';
  }

  function reverseBackground(e) {
    e.target.style.background = 'white';
  }
  return (
    //<button onClick={sayHello}>Click me!</button>
    <img src={logo} onClick={sayHello} 
    onMouseEnter={changeBackground} 
    onMouseLeave={reverseBackground} 
    alt='click here'/>
  );
};

export default HelloWorld;