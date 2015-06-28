var React = require('react');
var HelloForm = require('./hello-world-form/helloform');

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);

React.render(
  <HelloForm />,
  document.getElementById('hello-form')
);
