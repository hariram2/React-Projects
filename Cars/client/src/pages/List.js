import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component{
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

                <section className="main-container col2-left-layout bounceInUp animated">
                    <div className="container">
                        <div className="row">
                            <div className="col-main col-sm-9 col-sm-push-3 product-grid">
                                <div className="pro-coloumn">
                                    <article className="col-main">
                                        <div className="toolbar">
                                            <div className="sorter">
                                                <div className="view-mode"><Link to="/grid" title="List" className="button-grid">&nbsp;</Link> <span title="list" className="button button-active button-list">&nbsp;</span> </div>
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
                                                <a className="button-asc left" title="Set Descending Direction"><span className="top_arrow"></span></a> 
                                            </div>
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
                                        <div className="category-products">
                                            <ol className="products-list" id="products-list">
                                                <li className="item first">
                                                    <div className="product-image">
                                                        <a title="HTC Rhyme Sense"> <img className="small-image" src="assets/products-images/p1.jpg" alt="HTC Rhyme Sense"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="HTC Rhyme Sense">HTC Rhyme Sense</a></h2>
                                                        <div className="ratings">
                                                            <div className="rating-box">
                                                                <div style={{width:"50%"}} className="rating"></div>
                                                            </div>
                                                            <p className="rating-links"> <a href="#/review/product/list/id/167/category/35/">1 Review(s)</a> <span className="separator">|</span> <a href="#review-form">Add Your Review</a> </p>
                                                        </div>
                                                        <div className="desc std">
                                                            <p>Sed volutpat ac massa eget lacinia. Aenean volutpat lacus at dolor blandit </p>
                                                            <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, tincidunt mi. Vivamus dictum nec... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box">
                                                            <p className="old-price"> <span className="price-label"></span> <span id="old-price-212" className="price"> $442.99 </span> </p>
                                                            <p className="special-price"> <span className="price-label"></span> <span id="product-price-212" className="price"> $222.99 </span> </p>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item even">
                                                    <div className="product-image">
                                                        <a title="Microsoft Natural Keyboard"> <img className="small-image" src="assets/products-images/p2.jpg" alt="Microsoft Natural Keyboard"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="Microsoft Natural Keyboard">Microsoft Natural Keyboard</a></h2>
                                                        <div className="desc std">
                                                            <p>Sed volutpat ac massa eget lacinia. Suspendisse non purus semper, tellus vel, tristique urna. Aenean volutpat lacus at dolor blandit. </p>
                                                            <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, tincidunt mi. Vivamus dignissimm ... <a className="link-learn" title="">Learn More</a></p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-159"> <span className="price">$99.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item odd">
                                                    <div className="product-image">
                                                        <a title="30&quot; Flat-Panel HD Monitor"> <img className="small-image" src="assets/products-images/p3.jpg" alt="30&quot; Flat-Panel HD Monitor"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="30&quot; Flat-Panel HD Monitor">30" Flat-Panel HD Monitor</a></h2>
                                                        <div className="desc std">Computer games, digital photo editing and graphic applications will astound you on this huge 30" flat-panel monitor.
                                                            <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, tincidunt mi. </p>
                                                            <p>Phasellus consequat id purus in convallis. Nulla quis... <a className="link-learn" title="">Learn More</a></p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-157"> <span className="price">$699.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item even">
                                                    <div className="product-image">
                                                        <a title="19&quot; Widescreen LCD Monitor"> <img className="small-image" src="assets/products-images/p4.jpg" alt="19&quot; Widescreen LCD Monitor"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="19&quot; Widescreen LCD Monitor">19" Widescreen LCD Monitor</a></h2>
                                                        <div className="desc std">2 ms response time; 10,000:1 contrast ratio; 300 cd/m² brightness; 1440 x 900 maximum resolution; DVI-D and 15-pin D-sub inputs
                                                            <p>Phasellus consequat id purus pretium enimnec, tristique... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-156"> <span className="price">$399.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item odd">
                                                    <div className="product-image">
                                                        <a title="Seagate 250GB HD "> <img className="small-image" src="assets/products-images/p5.jpg" alt="Seagate 250GB HD "/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="Seagate 250GB HD ">Seagate 250GB HD </a></h2>
                                                        <div className="desc std">1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                                                            <p>Maecenas vehicula volutpat elit, in interdum lacus faucibus sit amet. </p>
                                                            <p>Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu, tincidunt mi. Vivamus dignissim nisl. Donec eget feugiat ante. Integerarcu libero, dictum nec congue sed, faucibus ... <a className="link-learn"
                                                                    title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-155"> <span className="price">$99.00</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item even">
                                                    <div className="product-image">
                                                        <a title="Seagate 500GB HD"> <img className="small-image" src="assets/products-images/p6.jpg" alt="Seagate 500GB HD"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="Seagate 500GB HD">Seagate 500GB HD</a></h2>
                                                        <div className="desc std">1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                                                            <p>Aenean volutpat lacus at dolor blandit, vitae lobortisante semper. Ut bibendum metusfringilla, in interdum lacus faucibus sit amet. </p>
                                                            <p> Donec eget feugiat ante. Integerarcu libero... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-154"> <span className="price">$299<span className="sub">.00</span></span>
                                                            </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item odd">
                                                    <div className="product-image">
                                                        <a title="Intel Core 2 Extreme QX9775"> <img className="small-image" src="assets/products-images/p7.jpg" alt="Intel Core 2 Extreme QX9775"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="Intel Core 2 Extreme QX9775">Intel Core 2 Extreme QX9775</a></h2>
                                                        <div className="desc std">Intel Core 2 Extreme QX9775 Processor BX80574QX9775 - 45nm, 3.20GHz, 12MB Cache, 1600MHz FSB,
                                                            <p>Vivamus dignissim nisl eu euismod ullamcorper. Donec pellentesque diam id est tristique vestibulum. Donec eget feugiat ante. Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus. </p>
                                                            <p>Phasellus consequat... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-153"> <span className="price">$2,049.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item even">
                                                    <div className="product-image">
                                                        <a title="24&quot; Widescreen LCD Monitor"> <img className="small-image" src="assets/products-images/p8.jpg" alt="24&quot; Widescreen LCD Monitor"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="24&quot; Widescreen LCD Monitor">24" Widescreen LCD Monitor</a></h2>
                                                        <div className="desc std">5 ms response time; 10,000:1 contrast ratio; 400 cd/m² brightness; 1920 x 1200 maximum resolution; DVI-D and 15-pin D-sub inputs
                                                            <p> tellus vel, tristique urna. </p>
                                                            <p>Phasellus consequat id purus in convallis. Nulla quis nunc auctor, pretium enimnec, tristique magna... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-152"> <span className="price">$699.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item odd">
                                                    <div className="product-image">
                                                        <a title="Logitech Optical Trackman"> <img className="small-image" src="assets/products-images/p9.jpg" alt="Logitech Optical Trackman"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="Logitech Optical Trackman">Logitech Optical Trackman</a></h2>
                                                        <div className="desc std">Our most advanced trackball yet. Save space and eliminate desktop clutter.
                                                            <p>Donec eget feugiat ante. Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus. </p>
                                                            <p>Vivamus vitae arcu faucibus, dictum magna vel, adipiscing... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-160"> <span className="price">$79.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item last even">
                                                    <div className="product-image">
                                                        <a title="Logitech diNovo Edge Keyboard"> <img className="small-image" src="assets/products-images/p10.jpg" alt="Logitech diNovo Edge Keyboard"/> </a>
                                                    </div>
                                                    <div className="product-shop">
                                                        <h2 className="product-name"><a title="Logitech diNovo Edge Keyboard">Logitech diNovo Edge Keyboard</a></h2>
                                                        <div className="ratings">
                                                            <div className="rating-box">
                                                                <div style={{width:"80%"}} className="rating"></div>
                                                            </div>
                                                            <p className="rating-links"> <a href="#/review/product/list/id/167/category/35/">1 Review(s)</a> <span className="separator">|</span> <a href="#/review/product/list/id/167/category/35/#review-form">Add Your Review</a> </p>
                                                        </div>
                                                        <div className="desc std">Li-Ion powered.
                                                            <p>Sed volutpat ac massa eget lacinia. Suspendisse non purus semper, vitae lobortisante semper. </p>
                                                            <p>Integerarcu libero, dictum nec congue sed, faucibus sit... <a className="link-learn" title="">Learn More</a> </p>
                                                        </div>
                                                        <div className="price-box"> <span className="regular-price" id="product-price-161"> <span className="price">$239.99</span> </span>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="button btn-cart ajx-cart" title="Buy Now" type="button"><span>Buy Now</span></button>
                                                            <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="button link-compare"><span>Add to Compare</span></a>                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
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
                                            <li> <Link className="active" to="/grid">AUDIO</Link> <span className="subDropdown minus"></span>
                                                <ul className="level0_415" style={{display:"block"}}>
                                                    <li> <Link to="/grid"> Amplifiers </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid"> Installation Parts‎ </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid"> Speakers </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid">Stereos </Link> <span className=""></span>
                                                        <li> <Link to="/grid">Subwoofers </Link> <span className=""></span></li>

                                                
                                                    </li>
                                                </ul>
                                            

                                            </li>
                                        
                                            <li> <Link to="/grid">BODY PARTS</Link> <span className="subDropdown plus"></span>
                                                <ul className="level0_455" style={{display:"none"}}>
                                                    <li> 
                                                        <Link to="/grid"> Bumpers </Link> <span className=""></span>
                                                    </li>
                                            
                                                    <li> <Link to="/grid"> Doors  </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid"> Fenders </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid"> Griles </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid">Hoods </Link> <span className=""></span>

                                                
                                                    </li>
                                                </ul>
                                            </li>
                                        
                                            <li> <a href="#.html">EXTERIOR</a> <span className="subDropdown plus"></span>
                                                <ul className="level0_482" style={{display:"none"}}>
                                                    <li> <Link to="/grid"> Bed Accessories </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li> <Link to="/grid">Body Kits </Link> <span className=""></span>

                                                
                                                    </li>
                                            
                                                    <li><Link to="/grid">Custom Griles </Link> <span className=""></span></li>
                                            
                                                    <li> <Link to="/grid"> Car Covers </Link> <span className=""></span></li>
                                            
                                                    <li> <Link to="/grid"> Off-Road Bumpers</Link> <span className=""></span></li>
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
                                                    <a className="product-image"><img src="assets/products-images/p1.jpg" width="80" alt="product"/></a>
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
                                                    <a className="product-image"><img src="assets/products-images/p2.jpg" width="80" alt="product"/></a>
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
        )
           
    }
}
export default List