var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.js');
require('./index.css');
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
