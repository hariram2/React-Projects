import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="page">

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

                    <div className="content">
                        <div className="container-fluid">
                            {/* <div className="container">
                                <div className="row">
                                    <div className="section-filter">
                                        <div className="b-filter__inner bg-grey">
                                            <h2>Find your right car</h2>
                                            <form className="b-filter">
                                                <div className="btn-group bootstrap-select" style={{width:"100%"}}>
                                                    <select className="selectpicker" data-width="100%" tabindex="-98">
                                                        <option>Select Make</option>
                                                        <option>BMW</option>
                                                        <option>MG</option>
                                                        <option>KIA</option>
                                                        <option>Volkswagen</option>
                                                        <option>Ford</option>
                                                        <option>Audi</option>
                                                        <option>Honda</option>
                                                        <option>Benz</option>
                                                        <option>Hyundai</option>
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
                                                        <option>Mumbai</option>
                                                        <option>Chennai</option>
                                                        <option>Hyderabad</option>
                                                        <option>Pune</option>
                                                        <option>Bengaluru</option>
                                                        <option>Cochin</option>
                                                        <option>Goa</option>
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
                                </div>
                            </div> */}
                            <div className="row">
                            
                                <div className="home-slider5">
                                    <div id="thmg-slideshow" className="thmg-slideshow">
                                        <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container'>
                                            <div id='rev_slider_4' className='rev_slider fullwidthabanner'>
                                                <ul>
                                                    <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='assets/images/slide-img1.jpg'><img src='assets/images/slide-img1.jpg' data-bgfit='cover' data-bgrepeat='no-repeat' alt="banner" />
                                                        <div className="container">
                                                            <div className="content_slideshow">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-sm-3 col-md-3 "> &nbsp; </div>
                                                                    <div className="col-lg-9 col-sm-9 col-md-9">
                                                                        <div className="info">
                                                                            <div className='tp-caption ExtraLargeTitle sft  tp-resizeme' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"2",whiteSpace:"nowrap"}}><span>Top Brands 2019</span> </div>
                                                                            <div className='tp-caption LargeTitle sfl  tp-resizeme' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"3",whiteSpace:"nowrap"}}><span style={{fontWeight:"normal",display:"block"}}>Modern-classNameic</span> incredible </div>
                                                                            <div className='tp-caption Title sft  tp-resizeme' data-endspeed='500' data-speed='500' data-start='1450' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4",whiteSpace:"nowrap"}}>Get 40% OFF on selected items.</div>
                                                                            <div className='tp-caption sfb  tp-resizeme' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4",whiteSpace:"nowrap"}}><Link to="" className="buy-btn">Book Appointment</Link> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='assets/images/slide-img2.jpg'><img src='assets/images/slide-img2.jpg' data-bgfit='cover' data-bgrepeat='no-repeat' alt="banner" />
                                                        <div className="container">
                                                            <div className="content_slideshow">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-sm-3 col-md-3">&nbsp;</div>
                                                                    <div className="col-lg-9 col-sm-9 col-md-9">
                                                                        <div className="info">
                                                                            <div className='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"2",whiteSpace:"nowrap"}}><span>Top Brands 2018</span> </div>
                                                                            <div className='tp-caption LargeTitle sfl  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"3",whiteSpace:"nowrap"}}><span style={{fontWeight:"normal",display:"block"}}>Modern-classNameic</span> Decorative </div>
                                                                            <div className='tp-caption Title sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1450' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4",whiteSpace:"nowrap"}}>Get 40% OFF on selected items.</div>
                                                                            <div className='tp-caption sfb  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4",whiteSpace:"nowrap"}}><a className="buy-btn">Book Appointment</a> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="tp-bannertimer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                
                    <section className="uc__welcome">
                        <div className="section_mod-a section-bg-2">
                            <div className="bg-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="main-block text-center wow bounceInUp" data-wow-duration="2s">
                                                <div className="main-block__label">welcome to</div>
                                                <div className="decor-1 center-block"></div>
                                                <h1 className="main-block__title"><strong>Autozone</strong>The Online Autos World</h1>
                                                <div className="decor-2"><i className="icon fa fa-caret-down"></i></div>
                                            </div>
                                            <div className="wrap-link-img">
                                                <ul className="link-img link-img_mod-a list-inline wow bounceInLeft" data-wow-duration="2s">
                                                    <li className="link-img__item">
                                                        <Link to="" className="link-img__link"><img className="img-responsive" src="assets/images/1.png" height="250" width="170" alt="Foto"/>
                                                            <div className="link-img__wrap-title"><span className="link-img__title">all brands</span></div>
                                                        </Link>
                                                    </li>
                                                    <li className="link-img__item">
                                                        <Link to="" className="link-img__link"><img className="img-responsive" src="assets/images/2.png" height="250" width="170" alt="Foto"/>
                                                            <div className="link-img__wrap-title"><span className="link-img__title">FREE SUPPORT</span></div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="link-img link-img_mod-b list-inline wow bounceInRight" data-wow-duration="2s">
                                                    <li className="link-img__item">
                                                        <Link to="" className="link-img__link"><img className="img-responsive" src="assets/images/3.png" height="250" width="170" alt="Foto"/>
                                                            <div className="link-img__wrap-title"><span className="link-img__title">DEALERSHIP</span></div>
                                                        </Link>
                                                    </li>
                                                    <li className="link-img__item">
                                                        <Link to="" className="link-img__link"><img className="img-responsive" src="assets/images/4.png" height="250" width="170" alt="Foto"/>
                                                            <div className="link-img__wrap-title"><span className="link-img__title">AFFORDABLE</span></div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                
                                    </div>
            

                                    <div className="row">
                                        <div class="uc__circlee">
                                            <div className="tt-promo-02-layout">
                                                <Link to="" className="tt-item">
                                                    <div className="box-icon">
                                                        <div className="tt-line-dotted tt-right"></div>
                                                        <i className="icon-2"><img src="http://demo2.themelexus.com/carutos/wp-content/uploads/2019/10/painting-works.svg" /></i>
                                                    </div>
                                                    <h6 className="tt-title">View Our Inventory</h6>
                                                </Link>
                                                <div className="tt-item-smal">
                                                    <div className="box-icon">
                                                        {/* <i className="icon-right-arrow"></i> */}
                                                        <i className="fa fa-long-arrow-right"></i>
                                                    </div>
                                                </div>
                                                <Link to="" className="tt-item">
                                                    <div className="box-icon">
                                                        <div className="tt-line-dotted tt-left"></div>
                                                        <div className="tt-line-dotted tt-right"></div>
                                                        <i className="icon-3"><img src="http://demo2.themelexus.com/carutos/wp-content/uploads/2019/10/tire-and-wheel-services.svg" /></i>
                                                    </div>
                                                    <h6 className="tt-title">Value Your Trade-In</h6>
                                                </Link>
                                                <div className="tt-item-smal">
                                                    <div className="box-icon">
                                                    <i className="fa fa-long-arrow-right"></i>
                                                    </div>
                                                </div>
                                                <Link to="" className="tt-item">
                                                    <div className="box-icon">
                                                        <div className="tt-line-dotted tt-left"></div>
                                                        <div className="tt-line-dotted tt-right"></div>
                                                        <i className="icon-financing"><img src="http://demo2.themelexus.com/carutos/wp-content/uploads/2019/10/electrical-system.svg" /></i>
                                                    </div>
                                                    <h6 className="tt-title">Get Easy Financing</h6>
                                                </Link>
                                                <div className="tt-item-smal">
                                                    <div className="box-icon">
                                                        <i className="fa fa-long-arrow-right"></i>
                                                    </div>
                                                </div>
                                                <Link to="" className="tt-item">
                                                    <div className="box-icon">
                                                        <div className="tt-line-dotted tt-left"></div>
                                                        <i className="icon-payment"><img src="http://demo2.themelexus.com/carutos/wp-content/uploads/2019/10/maintenance-packages.svg" /></i>
                                                    </div>
                                                    <h6 className="tt-title">Make A Payment</h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
             
                    <section className="uc__services">
                        <div className="wrap-section-border wow bounceInUp" data-wow-duration="2s">
                            <section className="section_mod-b section-bg section-bg_primary">
                                <div className="bg-inner border-section-top border-section-top_mod-a">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <h2 className="ui-title-block ui-title-block_mod-a text-center">Our Services</h2>
                                                <div className="ui-subtitle-block_mod-a">we are offering vehicle services 24/7</div>
                                                
                                            
                                                    <div className="top-cate">
                                                        <div className="featured-pro container">
                                                            <div>
                                                                <div className="slider-items-products">
                                                                    <div className="new_title">
                                                                        <h2>popular Cars </h2>
                                                                    </div>
                                                                    <div id="top-categories" className="product-flexslider hidden-buttons">
                                                                        <div className="slider-items slider-width-col4 products-grid">
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/c_1.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Sedans</div>
                                                                                </div>
                                                                            </div>
                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/car-type2.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Trucks</div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/car_22.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">SUVS</div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/c_2.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Convertibles</div>
                                                                                </div>
                                                                            </div>
                                                                            

                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/c_4.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Hybrids</div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/car_011.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Hatchbacks</div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/c_3.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Coupes</div>
                                                                                </div>
                                                                            </div>
                                                                            

                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/car-type8.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Wagons</div>
                                                                                </div>
                                                                            </div>
                                                                            

                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/car-type10.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Luxury</div>
                                                                                </div>
                                                                            </div>
                                                                            

                                                                        
                                                                            <div className="item">
                                                                                <div className="pro-img"><img src="assets/images/car-type12.png" alt="Retis lapen casen"/>
                                                                                    <div className="pro-info">Pickup</div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                        
                                        </div>
                                    
                                        <div className="border-section-bottom"></div>
                                    </div>
                                
                                </div>
                            
                            </section>
                    
                        </div>
                    </section>


                    <div id="top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 uc__img_s">
                                    <Link to="" data-scroll-goto="1"> <img src="assets/images/speakers.png" alt="promotion-banner1"/> </Link>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 uc__img_s">
                                    <Link to="" data-scroll-goto="2"> <img src="assets/images/schedule.png" alt="promotion-banner2"/> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

      

                    <section className="wow bounceInUp animated">
                        <div className="hot_deals slider-items-products container">
                            <div className="new_title">
                                <h2>Deals of the Week</h2>
                                <div className="box-timer">
                                    <div className="countbox_1 timer-grid"></div>
                                </div>
                            </div>
                            <div id="hot_deals" className="product-flexslider hidden-buttons">
                                <div className="slider-items slider-width-col4 products-grid">
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p1.jpg" alt="Retis lapen casen"/></a>
                                                    <div className="new-label new-top-left">Used</div>
                                                    <div className="sale-label sale-top-left">-15%</div>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$49000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 4875km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Automatic</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2018</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p2.jpg" alt="Retis lapen casen"/></a>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$39000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 847km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2018</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p3.jpg" alt="Retis lapen casen"/></a>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$ 99000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i>687km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2019</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                         
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p12.jpg" alt="Retis lapen casen"/></a>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$59000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 10587km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2017</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p8.jpg" alt="Retis lapen casen"/></a>
                                                    <div className="new-label new-top-left">New</div>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$47000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 0km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2019</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p6.jpg" alt="Retis lapen casen"/></a>
                                                    <div className="new-label new-top-left">New</div>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$67000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 847km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Semi</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2016</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="brand-logo wow bounceInUp animated">
                        <div className="container">
                            <div className="row">
                                <div className="home-banner col-lg-2 hidden-md col-xs-12 hidden-sm"> </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                    <div className="testimonials-section">
                                        <div className="offer-slider parallax parallax-2">
                                            <ul className="bxslider">
                                                <li>
                                                    <div className="avatar"><img src="assets/images/member1.png" alt="Image"/></div>
                                                    <div className="testimonials">Perfect Themes and the best of all that you have many options to choose! Very fast responding! I highly recommend this theme and these people!</div>
                                                    <div className="clients_author">Smith John <span>Happy Customer</span> </div>
                                                </li>
                                                <li>
                                                    <div className="avatar"><img src="assets/images/member2.png" alt="Image"/></div>
                                                    <div className="testimonials">Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated.</div>
                                                    <div className="clients_author">Sahara Anderson <span>Happy Customer</span> </div>
                                                </li>
                                                <li>
                                                    <div className="avatar"><img src="assets/images/member3.png" alt="Image"/></div>
                                                    <div className="testimonials">Our support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them! </div>
                                                    <div className="clients_author">Stephen Smith <span>Happy Customer</span> </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className=" wow bounceInUp animated">
                        <div className="best-pro slider-items-products container">
                            <div className="new_title">
                                <h2>Best Seller Cars</h2>
                            </div>
                            <div id="best-seller" className="product-flexslider hidden-buttons">
                                <div className="slider-items slider-width-col4 products-grid">
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p13.jpg" alt="Retis lapen casen"/></a>
                                                    <div className="new-label new-top-left">Hot</div>
                                                    <div className="sale-label sale-top-left">-15%</div>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$49000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 4875km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Automatic</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2018</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p14.jpg" alt="Retis lapen casen"/></a>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$39000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 847km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2018</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p15.jpg" alt="Retis lapen casen"/></a>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$99000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i>687km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2019</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p16.jpg" alt="Retis lapen casen"/></a>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$59000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 10587km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2017</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p17.jpg" alt="Retis lapen casen"/></a>
                                                    <div className="new-label new-top-left">New</div>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$47000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 0km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Manual</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2019</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="item-img">
                                                <div className="item-img-info">
                                                    <a title="Retis lapen casen" className="product-image"><img src="assets/products-images/p18.jpg" alt="Retis lapen casen"/></a>
                                                    <div className="new-label new-top-left">New</div>
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
                                                    <div className="item-title"><a title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                            <div className="price-box"><span className="regular-price"><span className="price">$67000.00</span> </span>
                                                            </div>
                                                        </div>
                                                        <div className="other-info">
                                                            <div className="col-km"><i className="fa fa-tachometer"></i> 847km</div>
                                                            <div className="col-engine"><i className="fa fa-gear"></i> Semi</div>
                                                            <div className="col-date"><i className="fa fa-calendar" aria-hidden="true"></i> 2016</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="latest-blog wow bounceInUp animated animated container">
                        <div className="blog-home-inner">
                            <div className="blog-title">
                                <h2>Latest Blog post</h2>
                            </div>
                        
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4 blog-post">
                                    <div className="blog_inner">
                                        <div className="blog-img">
                                            <a> <img src="assets/images/blog-img1.jpg" alt="blog image"/> </a>
                                        </div>
                                    
                                        <div className="blog-info">
                                            <div className="post-date"> <span className="entry-date">14  Jan, 2019</span> </div>
                                            <ul className="post-meta">
                                                <li><i className="fa fa-user"></i>Posted by <a>admin</a> </li>
                                                <li><i className="fa fa-comments"></i><a>4 comments</a> </li>
                                            </ul>
                                            <h3><a>Powerful and flexible premium Ecommerce themes</a></h3>
                                            <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec...</p>
                                        </div>
                                    </div>
                            
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4 blog-post">
                                    <div className="blog_inner">
                                        <div className="blog-img">
                                            <a> <img src="assets/images/blog-img2.jpg" alt="blog image"/> </a>
                                        </div>
                                    
                                        <div className="blog-info">
                                            <div className="post-date"> <span className="entry-date">23  Dec, 2018</span> </div>
                                            <ul className="post-meta">
                                                <li><i className="fa fa-user"></i>Posted by <a>admin</a> </li>
                                                <li><i className="fa fa-comments"></i><a>8 comments</a> </li>
                                            </ul>
                                            <h3><a>Awesome template with lot's of features on the board!</a></h3>
                                            <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac felis erat sed elit bibendum ...</p>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4 blog-post">
                                    <div className="blog_inner">
                                        <div className="blog-img">
                                            <a> <img src="assets/images/blog-img3.jpg" alt="blog image"/> </a>
                                        </div>
                                
                                        <div className="blog-info">
                                            <div className="post-date"> <span className="entry-date">23  Dec, 2018</span> </div>
                                            <ul className="post-meta">
                                                <li><i className="fa fa-user"></i>Posted by <a>admin</a> </li>
                                                <li><i className="fa fa-comments"></i><a>8 comments</a> </li>
                                            </ul>
                                            <h3><a>Awesome template with lot's of features on the board!</a></h3>
                                            <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac felis erat sed elit bibendum ...</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="logo-brand container">
                        <div className="brand-title">
                            <h2>Popular Brands</h2>
                        </div>
                        <div className="slider-items-products">
                            <div id="brand-slider" className="product-flexslider hidden-buttons">
                                <div className="slider-items slider-width-col6">
                                
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand1.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand2.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand3.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand4.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand5.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand6.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand1.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand2.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand3.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand4.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand5.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="logo-item">
                                            <a><img src="assets/images/brand6.png" alt="Image"/></a>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
           
    }
}
export default Home;