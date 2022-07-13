import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

function Gridapp() {
    const [listOfUsers, setListOfUsers] = useState([]);

  
    useEffect(() => {
      Axios.get("http://localhost:3001/api/getUsers").then((response) => {
        setListOfUsers(response.data)
      });
    }, []);
  
 
  
    return (
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
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul>
                                    <li className="home"> <Link to="/" title="Go to Home Page">Home</Link> <span>&rsaquo; </span> </li>
                                    <li className="category1599"> <Link to="/grid" title="">New Car</Link> <span>&rsaquo; </span> </li>
                                    <li className="category1600"> <Link to="/grid" title="">Audi</Link> <span>&rsaquo; </span> </li>
                                    <li className="category1601"> <strong>Sedans</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-title">
                    <h2>PRODUCT LISTING</h2>
                </div>
            </div>

            <section className="main-container col2-left-layout bounceInUp animated">
                <div className="container">
                    <div className="row">
                        <div className="col-main col-sm-9 col-sm-push-3 product-grid">
                            <div className="pro-coloumn">
                                <article className="col-main">

                                    <div className="toolbar">
                                        <div className="sorter">
                                            <div className="view-mode"> <span title="Grid" className="button button-active button-grid">&nbsp;</span><a title="List" className="button-list">&nbsp;</a> </div>
                                        </div>
                                        <div id="sort-by">
                                            <label className="left">Sort By: </label>
                                            <ul>
                                                <li><a>Position<span className="right-arrow"></span></a>
                                                    <ul>
                                                        <li><a>Name</a></li>
                                                        <li><a>Price</a></li>
                                                        <li><a>Position</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <a className="button-asc left" title="Set Descending Direction"><span className="top_arrow"></span></a> </div>
                                    </div>

                                    <div className="category-products">
                                        <ul className="products-grid">
                                                {listOfUsers.map((user) => {
                                                return (
                                                    <div> 
                                                        <li className="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
                                                            <div className="item-inner">
                                                                <div className="item-img">
                                                                    <div className="item-img-info">
                                                                        <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p3.jpg" alt="Retis lapen casen" /></a>
                                                                        <div className="item-box-hover">
                                                                            <div className="box-inner">
                                                                                <div className="add_cart">
                                                                                    <button className="button btn-cart" type="button"></button>
                                                                                </div>
                                                                                <div className="product-detail-bnt"><a className="button detail-bnt"><span>Quick View</span></a></div>
                                                                                <div className="actions"><span className="add-to-links"><a className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-info">
                                                                    <div className="info-inner">
                                                                        <div className="item-title"><a title="Retis lapen casen">{user.name}</a> </div>
                                                                        <div className="item-content">
                                                                            <div className="rating">
                                                                                <div className="ratings">
                                                                                    <div className="rating-box">
                                                                                        <div className="rating" style={{width:"80%"}}></div>
                                                                                    </div>
                                                                                    <p className="rating-links"><a>1 Review(s)</a> <span className="separator">|</span> <a>Add Review</a> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-price">
                                                                                <div className="price-box"><span className="regular-price"><span className="price">${user.price}</span> </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="other-info">
                                                                                <div className="col-km"><i className="fa fa-tachometer"></i> {user.Kilometer}km</div>
                                                                                <div className="col-engine"><i className="fa fa-gear"></i> {user.cartype}</div>
                                                                                <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> {user.year}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </div>
                                            );
                                        })}
                                                </ul>
                                            </div>
                                    <div className="toolbar bottom">
                                        <div id="sort-by">
                                            <label className="left">Sort By: </label>
                                            <ul>
                                                <li><a>Position<span className="right-arrow"></span></a>
                                                    <ul>
                                                        <li><a>Name</a></li>
                                                        <li><a>Price</a></li>
                                                        <li><a>Position</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <a className="button-asc left" title="Set Descending Direction"><span className="top_arrow"></span></a> </div>
                                            <div className="pager">
                                                <div id="limiter">
                                                    <label>View: </label>
                                                    <ul>
                                                        <li><a>15<span className="right-arrow"></span></a>
                                                            <ul>
                                                                <li><a>20</a></li>
                                                                <li><a>30</a></li>
                                                                <li><a>35</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pages">
                                                    <label>Page:</label>
                                                    <ul className="pagination">
                                                        <li><a>&laquo;</a></li>
                                                        <li className="active"><a>1</a></li>
                                                        <li><a>2</a></li>
                                                        <li><a>3</a></li>
                                                        <li><a>4</a></li>
                                                        <li><a>5</a></li>
                                                        <li><a>&raquo;</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </article>
                            </div>
                        
                        </div>
                        <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
                            <div className="section-filter">
                                <div className="b-filter__inner bg-grey">
                                    <h2>Find your right car</h2>
                                    <form className="b-filter">
                                        <div className="btn-group bootstrap-select" style={{width:"100%"}}>
                                            <select className="selectpicker" data-width="100%" tabindex="-98">
                                                <option>Select Make</option>
                                                <option>Make 1</option>
                                                <option>Make 2</option>
                                                <option>Make 3</option>
                                            </select>
                                        </div>
                                        <div className="btn-group bootstrap-select" style={{width:"100%"}}>
                                            <select className="selectpicker" data-width="100%" tabindex="-98">
                                                <option>Select Car Status</option>
                                                <option>Status 1</option>
                                                <option>Status 2</option>
                                                <option>Status 3</option>
                                            </select>
                                        </div>
                                        <div className="btn-group bootstrap-select" style={{width:"100%"}}>
                                            <select className="selectpicker" data-width="100%" tabindex="-98">
                                                <option>Select Model</option>
                                                <option>Model 1</option>
                                                <option>Model 2</option>
                                                <option>Model 3</option>
                                            </select>
                                        </div>
                                        <div className="btn-group bootstrap-select" style={{width:"100%"}}>
                                            <select className="selectpicker" data-width="100%" tabindex="-98">
                                                <option>Select All Locations</option>
                                                <option>Location 1</option>
                                                <option>Location 2</option>
                                                <option>Location 3</option>
                                            </select>
                                        </div>
                                        <div className="btn-group bootstrap-select" style={{width:"100%"}}>
                                            <select className="selectpicker" data-width="100%" tabindex="-98">
                                                <option>Select Year</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                            </select>
                                        </div>
                                        <div className="ui-filter-slider">
                                            <div className="sidebar-widget-body m-t-10">
                                                <div className="price-range-holder"> <span className="min-max"> <span className="pull-left">$200.00</span> <span className="pull-right">$800.00</span> </span>
                                                    <input type="text" className="price-slider" value="" style={{display:"block"}} />
                                                </div>
                                            
                                            </div>
                                        </div>
                                        <div>
                                            <div className="b-filter__btns">
                                                <button className="btn btn-lg btn-primary">search vehicle</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="side-nav-categories">
                                <div className="block-title"> Categories </div>
                                <div className="box-content box-category">
                                    <ul>
                                        <li> <a className="active" href="grid.html">AUDIO</a> <span className="subDropdown minus"></span>
                                            <ul className="level0_415" style={{display:"block"}} >
                                                <li> 
                                                    <Link to="/grid"> Amplifiers </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Installation Parts‎ </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Speakers </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid">Stereos </Link> 
                                                    <span className=""></span>
                                                    <li> 
                                                        <Link to="/grid">Subwoofers </Link> 
                                                        <span className=""></span>
                                                    </li>
                                                </li>
                                            </ul>
                                        </li>
                                    
                                        <li> <Link to="/grid">BODY PARTS</Link> <span className="subDropdown plus"></span>
                                            <ul className="level0_455" style={{display:"none"}}>
                                                <li> 
                                                    <Link to="/grid"> Bumpers </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Doors  </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Fenders </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Griles </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid">Hoods </Link> <span className=""></span>
                                                </li>
                                        
                                            </ul>
                                        </li>

                                        <li> <a>EXTERIOR</a> <span className="subDropdown plus"></span>
                                            <ul className="level0_482" style={{display:"none"}}>
                                                <li> 
                                                    <Link to="/grid"> Bed Accessories </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid">Body Kits </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid">Custom Griles </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Car Covers </Link> <span className=""></span>
                                                </li>
                                        
                                                <li> 
                                                    <Link to="/grid"> Off-Road Bumpers</Link> <span className=""></span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li> <Link to="/grid">INTERIOR</Link> <span className="subDropdown plus"></span>
                                            <ul className="level0_482" style={{display:"none"}}>
                                                <li> <Link to="/grid"> Custom Gauges </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Dash Kits </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Seat Covers </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Steering Wheels </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Sun Shades</Link> <span className=""></span></li>
                                            </ul>
                                        </li>
                                        <li> <Link to="/grid">LIGHTING</Link> <span className="subDropdown plus"></span>
                                            <ul className="level0_482" style={{display:"none"}}>
                                                <li> <Link to="/grid"> Fog Lights </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Headlights </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> LED Lights </Link> <span className=""></span></li>
                                                <li> <Link to="/grid">Off-Road Lights </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Signal Lights</Link> <span className=""></span></li>
                                            </ul>
                                        </li>
                                        <li> <Link to="/grid">PERFORMANCE</Link> <span className="subDropdown plus"></span>
                                            <ul className="level0_482" style={{display:"none"}}>
                                                <li> <Link to="/grid"> Air Intake Systems </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Brakes </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Exhaust Systems </Link> <span className=""></span></li>
                                                <li> <Link to="/grid">Power Adders </Link> <span className=""></span></li>
                                                <li> <Link to="/grid"> Racing Gear</Link> <span className=""></span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="custom-slider">
                                <div>
                                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li className="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="1" className=""></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="item active"><img src="assets/images/slide3.jpg" alt="slide3"/>
                                                <div className="carousel-caption">
                                                    <h3><a title=" Sample Product">50% OFF</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    <a className="link">Buy Now</a></div>
                                            </div>
                                            <div className="item"><img src="assets/images/slide1.jpg" alt="slide1"/>
                                                <div className="carousel-caption">
                                                    <h3><a title=" Sample Product">Hot collection</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                            <div className="item"><img src="assets/images/slide2.jpg" alt="slide2"/>
                                                <div className="carousel-caption">
                                                    <h3><a title=" Sample Product">Summer collection</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span className="sr-only">Previous</span> </a>
                                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span className="sr-only">Next</span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="block block-list block-cart">
                                <div className="block-title"> My Cart </div>
                                <div className="block-content">
                                    <div className="summary">
                                        <p className="amount">There is <a>1 item</a> in your cart.</p>
                                        <p className="subtotal"> <span className="label">Cart Subtotal:</span> <span className="price">$299.00</span> </p>
                                    </div>
                                    <div className="ajax-checkout">
                                        <button type="button" title="Checkout" className="button button-checkout" onClick=""> <span>Checkout</span> </button>
                                    </div>
                                    <p className="block-subtitle">Recently added item(s)</p>
                                    <ul id="cart-sidebar" className="mini-products-list">
                                        <li className="item">
                                            <div className="item-inner">
                                                <a className="product-image"><img src="assets/products-images/p1.jpg" width="80" alt="product" /></a>
                                                <div className="product-details">
                                                    <div className="access"> <a className="btn-remove1">Remove</a>
                                                        <a href="" title="Edit item" className="btn-edit">
                                                            <i className="icon-pencil"></i><span className="hidden">Edit item</span></a>
                                                    </div>
                                            

                                                    <strong>1</strong> x <span className="price">$299.00</span>
                                                    <p className="product-name"><a>Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a></p>
                                                </div>
                                            
                                            </div>
                                        </li>
                                        <li className="item  last1">
                                            <div className="item-inner">
                                                <a className="product-image"><img src="assets/products-images/p2.jpg" width="80" alt="product" /></a>
                                                <div className="product-details">
                                                    <div className="access"> <a className="btn-remove1">Remove</a>
                                                        <a href="" title="Edit item" className="btn-edit">
                                                            <i className="icon-pencil"></i><span className="hidden">Edit item</span></a>
                                                    </div>
                                                    <strong>1</strong> x <span className="price">$299.00</span>
                                                    <p className="product-name"><a>Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a></p>
                                                </div>
                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block block-compare">
                                <div className="block-title"> Compare Products </div>
                                <div className="block-content">
                                    <ol id="compare-items">
                                        <li className="item odd">
                                            <a className="btn-remove1" onClick=""></a>
                                            <a className="product-name">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </li>
                                        <li className="item odd">
                                            <a className="btn-remove1" onClick=""></a>
                                            <a className="product-name">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </li>
                                        <li className="item odd">
                                            <a className="btn-remove1" onClick=""></a>
                                            <a className="product-name">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </li>

                                    </ol>

                                    <div className="ajax-checkout">
                                        <button type="button" title="Compare" className="button button-compare" onClick=""><span>Compare</span></button>
                                        <button className="button button-clear"><span>Clear</span></button>
                                    </div>
                                
                                </div>
                    
                            </div>
                        </aside>
                    
                    </div>
                
                </div>
            
            </section>
    </React.Fragment>
  
      
    );
  }

  export default Gridapp;