import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component{
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
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='uc__let_tab wow bounceInUp animated animated'>
                    <section className="elementor-section elementor-top-section elementor-element elementor-element-6e06052 elementor-section-full_width qodef-elementor-content-grid qodef-btt-light elementor-section-height-default elementor-section-height-default" data-id="6e06052" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b53f00f" data-id="b53f00f" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-cc656e2 elementor-widget elementor-widget-shiftup_core_interactive_link_showcase" data-id="cc656e2" data-element_type="widget" data-widget_type="shiftup_core_interactive_link_showcase.default">
                                        <h6 className="qodef-tagline"> Tehnical specification</h6>
                                        <div className="elementor-widget-container">
                                            <div className="qodef-shortcode qodef-m qodef-interactive-link-showcase qodef-layout--list qodef--init">
                                                
                                                <div className="qodef-m-items">
                                                    <a className="qodef-m-item qodef-e qodef--active" target="_self">
                                                        <span className="qodef-e-title">Range</span>
                                                        <span className="qodef-e-title-overlay">Range </span>
                                                    </a>
                                                    <a className="qodef-m-item qodef-e" target="_self">
                                                        <span className="qodef-e-title">Acceleration</span>
                                                        <span className="qodef-e-title-overlay">Acceleration </span>
                                                    </a>
                                                    <a className="qodef-m-item qodef-e" target="_self">
                                                        <span className="qodef-e-title">Total power</span>
                                                        <span className="qodef-e-title-overlay">Total power </span>
                                                    </a>
                                                    <a className="qodef-m-item qodef-e" target="_self">
                                                        <span className="qodef-e-title">Charging</span>
                                                        <span className="qodef-e-title-overlay">Charging </span>
                                                    </a>
                                                    <a className="qodef-m-item qodef-e" target="_self">
                                                        <span className="qodef-e-title">Interior</span>
                                                        <span className="qodef-e-title-overlay">Interior </span>
                                                    </a>
                                                </div>
                                                <div className="qodef-m-content">
                                                    <div className="qodef-m-text-item qodef--active">
                                                        <h4 className="qodef-e-title">Total Power Up to 750 hp</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> <br/>
                                                        <h4 className="qodef-e-title">Power consumption</h4>
                                                        <ul>
                                                            <li>Fermentum posuere urna nec tinci</li>
                                                            <li>Gravida in fermentum et sollicitudin</li>
                                                            <li>Malesuada fames ac turpis egestas</li>
                                                        </ul>
                                                        <a className="qodef-shortcode qodef-m  qodef-button qodef-layout--filled  qodef-html--link " href="https://shiftup.qodeinteractive.com/blog-left-sidebar/" target="_self">
                                                            <span className="qodef-m-text">View More</span></a>
                                                    </div>
                                                    <div className="qodef-m-text-item">
                                                        <h4 className="qodef-e-title">Technology &amp; Automation
                                                        </h4>
                                                        <p>Maecenas nec feugiat neque. Morbi vitae dui luctus, faucibus magna et, mollis lorem.</p> <br/>
                                                        <h4 className="qodef-e-title">Long-term investments</h4>
                                                        <ul>
                                                            <li>Nulla ac enim sed neque</li>
                                                            <li>Gravida in fermentum et sollicitudin</li>
                                                        </ul>
                                                        <a className="qodef-shortcode qodef-m  qodef-button qodef-layout--filled  qodef-html--link " href="https://shiftup.qodeinteractive.com/product/brake-discs/" target="_self">
                                                            <span className="qodef-m-text">View More</span></a>
                                                    </div>
                                                    <div className="qodef-m-text-item">
                                                        <h4 className="qodef-e-title">Innovative solutions</h4>
                                                        <p>Nulla a ligula eu nisl blandit porttitor. Nulla vehicula porttitor tellus ut molestie. Duis pharetra.</p> <br/>
                                                        <h4 className="qodef-e-title">Streamline complex ecosystems</h4>
                                                        <ul>
                                                            <li>Fermentum posuere urna nec tincidunt</li>
                                                            <li>Fusce dapibus consectetur ante</li>
                                                            <li>Malesuada fames ac turpis egestas</li>
                                                        </ul>
                                                        <a className="qodef-shortcode qodef-m  qodef-button qodef-layout--filled  qodef-html--link " href="https://shiftup.qodeinteractive.com/blog-right-sidebar/" target="_self">
                                                            <span className="qodef-m-text">View More</span></a>
                                                    </div>
                                                    <div className="qodef-m-text-item">
                                                        <h4 className="qodef-e-title">Newest available technologies</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> <br/>
                                                        <h4 className="qodef-e-title">Power consumption</h4>
                                                        <ul>
                                                            <li>Fermentum posuere urna nec tincidunt</li>
                                                            <li>Gravida in fermentum et sollicitudin</li>
                                                        </ul>
                                                        <a className="qodef-shortcode qodef-m  qodef-button qodef-layout--filled  qodef-html--link " href="https://shiftup.qodeinteractive.com/portfolio-item/design-2021-02/" target="_self"> <span className="qodef-m-text">View More</span></a>
                                                    </div>
                                                    <div className="qodef-m-text-item">
                                                        <h4 className="qodef-e-title">More effective strategy</h4>
                                                        <p>Donec ultricies, risus in sodales vestibulum, velit lorem varius dolor, ut pulvinar nisl mi nec tortor.</p> <br/>
                                                        <h4 className="qodef-e-title">Advanced digital state</h4>
                                                        <ul>
                                                            <li>Fermentum posuere urna nec tincidunt</li>
                                                            <li>Maecenas fermentum ligula sed</li>
                                                            <li>Malesuada fames ac turpis egestas</li>
                                                        </ul>
                                                        <a className="qodef-shortcode qodef-m  qodef-button qodef-layout--filled  qodef-html--link " href="https://shiftup.qodeinteractive.com/shop/" target="_self"> <span className="qodef-m-text">View More</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="uc__aft_img">
                    <section className="elementor-section elementor-top-section elementor-element elementor-element-4c462a4 elementor-section-full_width qodef-btt-light elementor-section-height-default elementor-section-height-default qodef-elementor-content-no" data-id="4c462a4" data-element_type="section">
                        <div className="container">
                            <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-43745be" data-id="43745be" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-4ea1228 elementor-widget elementor-widget-shiftup_core_image_section_info" data-id="4ea1228" data-element_type="widget" data-widget_type="shiftup_core_image_section_info.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-shortcode qodef-m qodef-image-section-info qodef-layout--info-on-image qodef-image-default qodef--right qodef--has-appear qodef--appear">
                                                    <div className="qodef-m-inner clear">
                                                        <div className="qodef-m-image">
                                                            <img width="1180" height="649" src="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/11/h3-img1.jpg" className="attachment-full size-full" alt="j" loading="lazy" srcset="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/11/h3-img1.jpg 1180w, https://shiftup.qodeinteractive.com/wp-content/uploads/2021/11/h3-img1-800x440.jpg 800w, https://shiftup.qodeinteractive.com/wp-content/uploads/2021/11/h3-img1-300x165.jpg 300w, https://shiftup.qodeinteractive.com/wp-content/uploads/2021/11/h3-img1-1024x563.jpg 1024w, https://shiftup.qodeinteractive.com/wp-content/uploads/2021/11/h3-img1-768x422.jpg 768w" sizes="(max-width: 1180px) 100vw, 1180px"/></div>
                                                        <div className="qodef-m-content" style={{padding:"16.5% 6% 16.5% 15%"}}>
                                                            <div className="qodef-m-content-inner" style={{padding:"16.5% 6% 16.5% 15%"}}>
                                                                <h2 className="qodef-m-title">Certified Technicians</h2>
                                                                <div className="qodef-m-text" style={{color:"#000",marginTop:"20px",fontWeight:"550",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam sit amet turpis id eleifend. Morbi sit amet ipsum sit amet erat mollis ultricies in sit amet massa. Maecenas
                                                                    hendrerit dignissim.</div>
                                                                <div className="qodef-m-button">
                                                                    <a className="qodef-shortcode qodef-m  qodef-button qodef-layout--filled  qodef-html--link " href="https://shiftup.qodeinteractive.com/blog-right-sidebar/" target="_self" style={{color:"#FFFFFF;font-size: 15px"}}> <span className="qodef-m-text">View more</span></a>
                                                                </div>
                                                            </div>
                                                            <span className="qodef-m-square qodef-top"></span>
                                                            <span className="qodef-m-square qodef-bottom"></span>
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
                </section>
                
            </React.Fragment>
        )
           
    }
}
export default About