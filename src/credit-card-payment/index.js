var React = require('react');
var ReactDOM = require('react-dom');

var app = require('./CreditCardPayment.jsx').default;

var container = document.createElement('div');

ReactDOM.render(React.createElement(app), container);

//=======
document.body.style.margin = '0';
document.body.style.display = 'flex';
document.body.style.height = '100vh';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

document.body.appendChild(container);
