var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Axios = require('axios');
var Modal = require('./modal');
var FontAwesome = require('react-fontawesome');

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function Thumbnail(props) {
  return (
    <div>
      <Card className="card">
        <CardImg className="card-avatar" src={props.imageUrl} alt="Card image cap" />
        <CardBlock className="card-description">
          <CardTitle><a href={props.htmlUrl}>{props.name}</a></CardTitle>
          <CardSubtitle><img src={require('../src/logo/coin.png')} /> Retail Price HKD$ {props.price}</CardSubtitle>
          <CardText><img src={require('../src/logo/time.png')} /> current time <Modal buttonLabel={<FontAwesome name='chevron-right' className="right"/>} buttonTitle={props.name}/></CardText>
        </CardBlock>
      </Card>
    </div>
  )
}

function Header(props) {
    return (
        <div className="header"><h2 className="center">Auctions</h2></div>
    )
}

function Footer(props) {
    return (
        <div className="footer">
            <ul className="footer-link">
                <li>
                    <NavLink to="/auction" exact activeClassName="active">
                        <img src={require("../src/logo/trial-hammer.png")} /><br/>Auction
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

function DisplayAuctionList(props) {
    return (
        <ul className="display">
            {
                props.auctionList.map((auctionItem, index) => (
                    <li className="auctionItem" key={auctionItem.name + index}>
                        <Thumbnail imageUrl={auctionItem.owner.avatar_url} htmlUrl={auctionItem.owner.html_url} name={auctionItem.name}/>
                    </li>
                ))
            }
            {props.loading && <div className="loading-footer"><Loading /></div>}
        </ul>
    )
}

class Auction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loadingList: false,
            auctionList: [],
            message: 'not at bottom'
        }
        this.handleLoader = this.handleLoader.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // add event listener to dewtect scroll event
        window.addEventListener("scroll", this.handleScroll);
        setTimeout(this.handleLoader, 3000);

    }

    componentWillUnmount() {
        // remove scroll event listener
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleLoader() {
        var encodedURI = 'https://api.github.com/search/repositories?q=stars:%3E1+language:Javascript&sort=stars&order=desc&type=Repositories';

        Axios.get(encodedURI).then(function(response) {
            var currentData = this.state.auctionList;
            var newData = response.data.items;
            // combine the previous data with new data
            currentData = currentData.concat(newData)
            this.setState(function() {
                return {
                    loading: false,
                    loadingList: false,
                    auctionList: currentData
                }
            })
        }.bind(this));
    }

    // detecting scroll events
    handleScroll() {
        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        var windowBottom = windowHeight + window.pageYOffset;
        console.log(windowBottom, docHeight);
        if (windowBottom >= docHeight) {

            this.setState({
                message: 'bottom reached',
                loadingList: true
            });
            setTimeout(this.handleLoader, 5000);
        } else {
            this.setState({
                message: 'not at bottom',
                loadingList: false
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Header status={this.state.message}/>
                <div className="body">
                    {this.state.loading? <div className="center-middle"><Loading /></div>:<DisplayAuctionList auctionList={this.state.auctionList} loading={this.state.loadingList} />}
                </div>
                <Footer />
            </div>
        )
    }
}


module.exports = Auction;
