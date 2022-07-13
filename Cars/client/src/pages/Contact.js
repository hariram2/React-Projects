import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <header>
                    <div className="header-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xs-12 col-sm-6 col-md-6">
                                    <div className="assetBlock">
                                        <div style={{height:"20px",overflow:"hidden"}} id="slideshow">
                                            <p style={{display:"block"}}>Hot days! - <span>50%</span> Get ready for summer! </p>
                                            <p style={{display:"none"}}>Save up to <span>40%</span> Hurry limited offer!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-lg-6 col-xs-12 col-sm-6 col-md-6 call-us"><i className="fa fa-clock-o"></i> Mon - Fri : 09am to 06pm <i className="fa fa-phone"></i> +1 800 789 0000</div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div id="header">
                                <div className="header-container">
                                    <div className="header-logo">
                                        <Link to="/" className="logo">
                                            <div>
                                                <img src="assets/images/moto-logo.webp" alt="Car Store"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="header__nav">

                                        <div className="fl-header-right">
                                            <div className="fl-links">
                                                <div className="no-js">
                                                    <a title="" className="clicker"></a>
                                                    <div className="fl-nav-links">
                                                        <h3>My Acount</h3>
                                                        <ul className="links">
                                                            <li><Link to="/login" title="My Account">Login</Link></li>
                                                            <li><Link to="/register" title="Wishlist">Register</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            {/* <div className="collapse navbar-collapse">
                                                <form className="navbar-form" role="search">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search"/>
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="search-btn"> 
                                                                <span className="glyphicon glyphicon-search"> 
                                                                    <i className="fa fa-bars"></i>
                                                                    <span className="sr-only">Search</span>                                                
                                                                </span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div> */}
                                    
                                        </div>
                                        <div className="fl-nav-menu">
                                            <nav>
                                                <div className="mm-toggle-wrap">
                                                    <div className="mm-toggle"><i className="fa fa-bars"></i><span className="mm-label">Menu</span> </div>
                                                </div>
                                                <div className="nav-inner">
                                                
                                                    <ul id="nav" className="hidden-xs">
                                                        <li className="active"> <Link to="/" className="level-top"><span>Home</span></Link></li>
                                                        <li className="level0 parent drop-menu"> <a className="level-top"><span>Listing</span></a>
                                                            <ul className="level1">
                                                                <li className="level1 first"><Link to="/grid"><span>Car Grid</span></Link></li>
                                                                <li className="level1 nav-10-2">
                                                                    <Link to="/list"> <span>Car List</span> </Link>
                                                                </li>
                                                                <li className="level1 first parent"><Link to="/details"><span>Car Detail</span></Link> </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu hidden-sm"> <Link to="/about" className="level-top"><span>About Us</span></Link> </li>
                                                        <li className="mega-menu hidden-sm"> <Link to="/contact" className="level-top"><span>Contact Us</span></Link> </li>
                                                    </ul>
                                                
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="page-title">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-container col2-right-layout">
                    <div className="main container">
                        <div className="row">
                            <div className="col-main col-sm-9 wow bounceInUp animated animated" style={{visibility:"visible"}}>
                                <div id="messages_product_view"></div>
                                <form action="" id="contactForm" method="post">
                                    <div className="static-contain">
                                        <fieldset className="group-select">
                                            <ul>
                                                <li id="billing-new-address-form">
                                                    <fieldset className="">
                                                        <ul>
                                                            <li>
                                                                <div className="customer-name">
                                                                    <div className="input-box name-firstname">
                                                                        <label for="name"><em className="required">*</em>Name</label>
                                                                        <br/>
                                                                        <input name="name" id="name" title="Name" value="john doe" className="input-text required-entry" type="text"/>
                                                                    </div>
                                                                    <div className="input-box name-firstname">
                                                                        <label for="email"><em className="required">*</em>Email</label>
                                                                        <br/>
                                                                        <input name="email" id="email" title="Email" value="john.doe@example.com" className="input-text required-entry validate-email" type="text"/>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <label for="telephone">Telephone</label>
                                                                <br/>
                                                                <input name="telephone" id="telephone" title="Telephone" value="" className="input-text" type="text"/>
                                                            </li>
                                                            <li>
                                                                <label for="comment"><em className="required">*</em>Comment</label>
                                                                <br/>
                                                                <textarea name="comment" id="comment" title="Comment" className="required-entry input-text" cols="5" rows="3"></textarea>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </li>
                                        
                                                <div className="buttons-set">
                                                    <button type="submit" title="Submit" className="button submit"><span><span>Submit</span></span></button>
                                                </div>
                                            </ul>
                                        </fieldset>
                                    </div>
                                </form>
                            </div>
                            <aside className="col-right sidebar col-sm-3 wow bounceInUp animated animated" style={{visibility:"visible"}}>
                                <div className="block block-company">
                                    <div className="block-title">Company</div>
                                    <div className="block-content">
                                        <ol id="recently-viewed-items">
                                            <li className="item odd"><Link to="/about">About Us</Link></li>
                                            <li className="item even"><a href="#">Sitemap</a></li>
                                            <li className="item  odd"><a href="#">Terms of Service</a></li>
                                            <li className="item last"><a href="#">Search Terms</a></li>
                                            <li className="item last"><Link to="/contact"><strong>Contact Us</strong></Link></li>
                                        </ol>
                                    </div>
                                </div>
                            </aside>
                        
                        </div>
                
                    </div>
                
                </div>
              

            </React.Fragment>
        )
           
    }
}
export default Contact