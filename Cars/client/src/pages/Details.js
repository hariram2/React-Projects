import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component{
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

                <div className="main-container col1-layout wow bounceInUp animated">
                    <div className="main">
                        <div className="col-main">
                    
                            <div className="product-view wow bounceInUp animated" itemscope="" itemtype="http://schema.org/Product" itemid="#product_base">
                                <div id="messages_product_view"></div>
                        
                                <div className="product-essential container">
                                    <div className="row">
                                        <form action="#" method="post" id="product_addtocart_form">
                                    
                                            <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                                                <div className="new-label new-top-left">Hot</div>
                                                <div className="sale-label sale-top-left">-15%</div>
                                                <div className="product-image">
                                                    <div className="product-full"> <img id="product-zoom1" src="assets/products-images/p46.jpg" data-zoom-image="assets/products-images/p46.jpg" alt="product-image" /> </div>
                                                    <div className="more-views">
                                                        <div className="slider-items-products">
                                                            <div id="gallery_02" className="product-flexslider hidden-buttons product-img-thumb">
                                                                <div className="slider-items slider-width-col4 block-content">
                                                                    <div className="more-views-items">
                                                                        <a data-image="assets/products-images/p1.jpg" data-zoom-image="assets/products-images/p1.jpg"> <img id="product-zoom0" src="assets/products-images/p1.jpg" alt="product-image" /> </a>
                                                                    </div>
                                                                    <div className="more-views-items">
                                                                        <a data-image="assets/products-images/p2.jpg" data-zoom-image="assets/products-images/p2.jpg"> <img id="product-zoom1" src="assets/products-images/p2.jpg" alt="product-image" /> </a>
                                                                    </div>
                                                                    <div className="more-views-items">
                                                                        <a data-image="assets/products-images/p3.jpg" data-zoom-image="assets/products-images/p3.jpg"> <img id="product-zoom2" src="assets/products-images/p3.jpg" alt="product-image" /> </a>
                                                                    </div>
                                                                    <div className="more-views-items">
                                                                        <a data-image="assets/products-images/p4.jpg" data-zoom-image="assets/products-images/p4.jpg"> <img id="product-zoom3" src="assets/products-images/p4.jpg" alt="product-image" /> </a>
                                                                    </div>
                                                                    <div className="more-views-items">
                                                                        <a data-image="assets/products-images/p5.jpg" data-zoom-image="assets/products-images/p5.jpg"> <img id="product-zoom4" src="assets/products-images/p5.jpg" alt="product-image" /> </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="toll-free"><a><i className="fa fa-phone"></i> +1 800 789 0000</a></div>
                                                <div className="ask-question"><a onClick="ShowMe();"><i className="fa fa-question"></i> Ask a Question</a></div>
                                                <div className="request-call"><a onClick="ShowMe1();"><i className="fa fa-money"></i> Finance Calculator</a></div>
                                            </div>
                                        
                                            <div className="product-shop col-lg- col-sm-7 col-xs-12">
                                                <div className="brand">XPERIA</div>
                                                <div className="product-name">
                                                    <h1>Gorgeous Mercedes-Benz E-className All-Terrain Luxury </h1>
                                                </div>
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{width:"60%"}} className="rating"></div>
                                                    </div>
                                                    <p className="rating-links"> <a>1 Review</a> <span className="separator">|</span> <a>Add Your Review</a> </p>
                                                </div>
                                                <div className="price-block">
                                                    <div className="price-box">

                                                        <p className="special-price"> <span className="price-label">Special Price</span> <span id="product-price-48" className="price">$70,000.00 - $90,000.00 </span> </p>
                                                    </div>
                                                </div>

                                                <div className="spec-row" id="summarySpecs">
                                                    <h2>Specifications</h2>
                                                    <table width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td className="label-spec"> Mileage <span className="coln">:</span></td>
                                                                <td className="value-spec"> 17 kmpl </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="label-spec"> Engine Displ. <span className="coln">:</span></td>
                                                                <td className="value-spec"> 259kw </td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td className="label-spec"> Transmission <span className="coln">:</span></td>
                                                                <td className="value-spec"> Automatic </td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td className="label-spec"> Fuel Type <span className="coln">:</span></td>
                                                                <td className="value-spec"> Diesel </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="label-spec"> Model <span className="coln">:</span></td>
                                                                <td className="value-spec"> 2019 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="label-spec"> Power Windows <span className="coln">:</span></td>
                                                                <td className="value-spec"> Yes </td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td className="label-spec"> Airbags <span className="coln">:</span></td>
                                                                <td className="value-spec"> Available </td>
                                                            </tr>
                                                            <tr className="odd">
                                                                <td className="label-spec"> ABS <span className="coln">:</span></td>
                                                                <td className="value-spec"> Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="label-spec"> Central Locking <span className="coln">:</span></td>
                                                                <td className="value-spec"> Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="label-spec"> Fog Lamps <span className="coln">:</span></td>
                                                                <td className="value-spec"> Front </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="email-addto-box">
                                                    <ul className="add-to-links">
                                                        <li> <a className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a></li>
                                                        <li><a className="link-compare" href="compare.html"><span>Add to Compare</span></a></li>
                                                    </ul>
                                                    <p className="email-friend"><a className=""><span>Email to a Friend</span></a></p>
                                                </div>
                                                <div className="social">
                                                    <ul className="link">
                                                        <li className="fb">
                                                            <a></a>
                                                        </li>
                                                        <li className="tw">
                                                            <a></a>
                                                        </li>
                                                        <li className="googleplus">
                                                            <a></a>
                                                        </li>
                                                        <li className="rss">
                                                            <a></a>
                                                        </li>
                                                        <li className="pintrest">
                                                            <a></a>
                                                        </li>
                                                        <li className="linkedin">
                                                            <a></a>
                                                        </li>
                                                        <li className="youtube">
                                                            <a></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <ul className="shipping-pro">
                                                    <li>Free Servicing</li>
                                                    <li>Free Monthly Checkup</li>
                                                    <li>Extended Warrenty</li>
                                                </ul>
                                            </div>
                                    
                                        </form>
                                    </div>
                                </div>
                            
                                <div className="product-collateral container">
                                    <ul id="product-detail-tab" className="nav nav-tabs product-tabs">
                                        <li className="active"> <a href="#product_tabs_description" data-toggle="tab"> Vehicle Overview </a> </li>
                                        <li><a href="#product_tabs_tags" data-toggle="tab">Technical Specification</a></li>
                                        <li> <a href="#product_tabs_custom" data-toggle="tab">Accessories</a> </li>
                                        <li> <a href="#reviews_tabs" data-toggle="tab">Reviews</a> </li>
                                        <li> <a href="#product_tabs_custom1" data-toggle="tab">Custom Tab1</a> </li>
                                    </ul>
                                    <div id="productTabContent" className="tab-content">
                                        <div className="tab-pane fade in active" id="product_tabs_description">
                                            <div className="std">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
                                                    adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies
                                                    massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat
                                                    vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant
                                                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis,
                                                    a dapibus enim lorem nec augue.</p>
                                                <p> Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                    Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                    Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel
                                                    tellus non nunc mattis lobortis.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product_tabs_tags">
                                            <div className="spec-row" id="summarySpecs">
                                                <table width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td className="label-spec"> Mileage <span className="coln">:</span></td>
                                                            <td className="value-spec"> 17 kmpl </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Engine Displ. <span className="coln">:</span></td>
                                                            <td className="value-spec"> 259kw </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Transmission <span className="coln">:</span></td>
                                                            <td className="value-spec"> Automatic </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Fuel Type <span className="coln">:</span></td>
                                                            <td className="value-spec"> Diesel </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Model <span className="coln">:</span></td>
                                                            <td className="value-spec"> 2019 </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Power Windows <span className="coln">:</span></td>
                                                            <td className="value-spec"> Yes </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Airbags <span className="coln">:</span></td>
                                                            <td className="value-spec"> Available </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> ABS <span className="coln">:</span></td>
                                                            <td className="value-spec"> Yes </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Central Locking <span className="coln">:</span></td>
                                                            <td className="value-spec"> Yes </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Fog Lamps <span className="coln">:</span></td>
                                                            <td className="value-spec"> Front </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="reviews_tabs">
                                            <div className="woocommerce-Reviews">
                                                <div>
                                                    <h2 className="woocommerce-Reviews-title">2 reviews for <span>Bacca Bucci Men's Running Shoes</span></h2>
                                                    <ol className="commentlist">
                                                        <li className="comment">
                                                            <div> <img alt="" src="assets/images/member1.png" className="avatar avatar-60 photo"/>
                                                                <div className="comment-text">
                                                                    <div className="ratings">
                                                                        <div className="rating-box">
                                                                            <div style={{width:"100%"}} className="rating"></div>
                                                                        </div>
                                                                    </div>
                                                                    <p className="meta"> <strong>John Doe</strong> <span>–</span> April 19, 2018 </p>
                                                                    <div className="description">
                                                                        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Lorem
                                                                            ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                                        <p>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada
                                                                            feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    
                                                        <li className="comment">
                                                            <div> <img alt="" src="assets/images/member2.png" className="avatar avatar-60 photo"/>
                                                                <div className="comment-text">
                                                                    <div className="ratings">
                                                                        <div className="rating-box">
                                                                            <div style={{width:"100%"}} className="rating"></div>
                                                                        </div>
                                                                    </div>
                                                                    <p className="meta"> <strong>Stephen Smith</strong> <span>–</span> June 02, 2018 </p>
                                                                    <div className="description">
                                                                        <p>Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    
                                                    </ol>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className="comment-respond"> <span className="comment-reply-title">Add a review </span>
                                                            <form action="#" method="post" className="comment-form" novalidate>
                                                                <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                                                                <div className="comment-form-rating">
                                                                    <label id="rating">Your rating</label>
                                                                    <p className="stars"> <span> <a className="star-1">1</a> <a className="star-2">2</a> <a className="star-3">3</a> <a className="star-4">4</a> <a className="star-5">5</a> </span> </p>
                                                                </div>
                                                                <p className="comment-form-comment">
                                                                    <label>Your review <span className="required">*</span></label>
                                                                    <textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
                                                                </p>
                                                                <p className="comment-form-author">
                                                                    <label for="author">Name <span className="required">*</span></label>
                                                                    <input id="author" name="author" type="text" value="" size="30" required/>
                                                                </p>
                                                                <p className="comment-form-email">
                                                                    <label for="email">Email <span className="required">*</span></label>
                                                                    <input id="email" name="email" type="email" value="" size="30" required/>
                                                                </p>
                                                                <p className="form-submit">
                                                                    <input name="submit" type="submit" id="submit" className="submit" value="Submit"/>
                                                                </p>
                                                            </form>
                                                        </div>
                                                
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product_tabs_custom">
                                            <div className="spec-row" id="summarySpecs">
                                                <table width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td className="label-spec"> Air Conditioner <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> AntiLock Braking System <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Power Steering <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Power Windows <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> CD Player <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Leather Seats <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Central Locking <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="label-spec"> Power Door Locks <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Brake Assist <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="label-spec"> Driver Airbag <span className="coln">:</span></td>
                                                            <td className="value-spec"> <i className="fa fa-check-circle"></i> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product_tabs_custom1">
                                            <div className="product-tabs-content-inner clearfix">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc.
                                                    Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies
                                                    posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="box-additional">
                                
                                    <div className="related-pro container">
                                        <div className="slider-items-products">
                                            <div className="new_title center">
                                                <h2>Related Products</h2>
                                            </div>
                                            <div id="related-slider" className="product-flexslider hidden-buttons">
                                                <div className="slider-items slider-width-col4 products-grid">
                                                    <div className="item">
                                                        <div className="item-inner">
                                                            <div className="item-img">
                                                                <div className="item-img-info">
                                                                    <a href="product-detail.html" title="Retis lapen casen" className="product-image"><img src="assets/products-images/p36.jpg" alt="Retis lapen casen"/></a>
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
                                                                    <div className="item-title"><a href="product-detail.html" title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                                    <a href="product-detail.html" title="Retis lapen casen" className="product-image"><img src="assets/products-images/p35.jpg" alt="Retis lapen casen"/></a>
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
                                                                    <div className="item-title"><a href="product-detail.html" title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                                    <a href="product-detail.html" title="Retis lapen casen" className="product-image"><img src="assets/products-images/p34.jpg" alt="Retis lapen casen"/></a>
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
                                                                    <div className="item-title"><a href="product-detail.html" title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                                    <a href="product-detail.html" title="Retis lapen casen" className="product-image"><img src="assets/products-images/p33.jpg" alt="Retis lapen casen"/></a>
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
                                                                    <div className="item-title"><a href="product-detail.html" title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                                    <a href="product-detail.html" title="Retis lapen casen" className="product-image"><img src="assets/products-images/p31.jpg" alt="Retis lapen casen"/></a>
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
                                                                    <div className="item-title"><a href="product-detail.html" title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
                                                                    <a href="product-detail.html" title="Retis lapen casen" className="product-image"><img src="assets/products-images/p32.jpg" alt="Retis lapen casen"/></a>
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
                                                                    <div className="item-title"><a href="product-detail.html" title="Retis lapen casen">Gorgeous Mercedes-Benz E-className All-Terrain Luxury</a> </div>
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
export default Details