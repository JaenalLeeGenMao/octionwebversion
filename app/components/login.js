var React = require('react');
var Link = require('react-router-dom').Link;
var Modal = require('./modal');
var Carousel = require('nuka-carousel');

// <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
// <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
// <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
// <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
// <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
// <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>

class Login extends React.Component {
    render () {
        return (
            <div>
                <div className="pull-right">
                    <Link className="link" to="/auction">SKIP</Link>
                </div>
                <Carousel className="carousel" width="90%" style={{'marginLeft': '5%'}}>
                    <img src="http://www.fleetinglife.com/wp-content/uploads/2014/03/fleeting-life-logo-correct-white-background-white-earth.jpg"/>
                    <img src="http://www.diaryofamidlifemummy.com/wp-content/uploads/2016/03/new-header-2.jpg"/>
                    <img src="http://static1.squarespace.com/static/572b5e852eeb81370a180f1b/t/572b828cd210b8719ae98ffc/1499718166265/?format=1000w"/>
                    <img src="https://static1.squarespace.com/static/59410c09d1758e924699d386/t/594113321b631bb2a49a5c0f/1498737413076/"/>
                    <img src="http://helloimdavid.com/wp-content/uploads/2013/02/DM_hero2.jpg"/>
                    <img src="http://cdn.shopify.com/s/files/1/0834/5717/t/11/assets/logo.png?9439146869164771690"/>
                    <img src="https://i1.wp.com/www.dubmentality.com/wp-content/uploads/2016/01/img_0490.png"/>
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/2d/b0/70/2db070d95f550377a1b8fb114320433b.png"/>
                    <img src="http://static1.squarespace.com/static/55da33fce4b0dfd798043b96/t/565ef284e4b06736c02d3c40/1494073304390/"/>
                </Carousel>
                <Link className="button" to="/">SIGN UP</Link>
                <Link className="button" to="/">LOG IN</Link>
                <div className="inline">
                    <p className="link"><Modal buttonLabel={"Terms of condition"} buttonTitle={"Terms of condition"}/></p>
                    &nbsp;and&nbsp;
                    <p className="link"><Modal buttonLabel={"Privacy policy"} buttonTitle={"Privacy policy"}/></p>
                </div>
            </div>
        )
    }
}

module.exports = Login;
