var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Axios = require('axios');

function Header(props) {
    return (
        <div className="header"><h2 className="center">Account</h2></div>
    )
}

function Footer(props) {
    return (
        <div className="footer">
            <ul className="footer-link">
                <li>
                    <NavLink to="/auction" exact activeClassName="active">
                        <img src={require("../src/logo/trial-hammer.png")}/><br/>Auction
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/history" exact activeClassName="active">
                        <img src={require("../src/logo/history.png")}/><br/>History
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/credits" exact activeClassName="active">
                        <img src={require("../src/logo/wallet.png")}/><br/>Credits
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/account" exact activeClassName="active">
                        <img src={require("../src/logo/account.png")}/><br/>Account
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

function Loading(props) {
    return (
        <div className="loading">
            <b>Loading </b>
            <span className="icon icon-black"/>
        </div>
    )
}

function DisplayAccount(props) {
    return (
        <div className="loading">
            <b>No Account Found </b>
        </div>
    )
}

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            auctionList: []
        }
        this.handleLoader = this.handleLoader.bind(this);
    }

    componentDidMount() {
        setTimeout(this.handleLoader, 3000);

    }

    handleLoader() {
        var encodedURI = 'https://api.github.com/search/repositories?q=stars:%3E1+language:Javascript&sort=stars&order=desc&type=Repositories';

        Axios.get(encodedURI).then(function(response) {
            console.log(response.data.items);
            this.setState(function() {
                return {
                    loading: false
                }
            })
        }.bind(this));
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="body">
                    {this.state.loading? <div className="center-middle"><Loading /></div>:<div className="center-middle"><DisplayAccount /></div>}
                </div>
                <Footer />
            </div>
        )
    }
}


module.exports = Account;
