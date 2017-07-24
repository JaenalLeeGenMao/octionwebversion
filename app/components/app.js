var React = require('react');
var Login = require('./login');
var Auction = require('./auction');
var History = require('./History');
var Credits = require('./Credits');
var Account = require('./Account');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/auction" component={Auction}/>
                        <Route exact path="/history" component={History}/>
                        <Route exact path="/credits" component={Credits}/>
                        <Route exact path="/account" component={Account}/>
                        <Route render={function() {
                            return (
                                <div className="body">
                                    <img src='http://i.imgur.com/6bgtvrg.jpg'/>
                                    <code>Page not found</code>
                                </div>
                            )
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;
