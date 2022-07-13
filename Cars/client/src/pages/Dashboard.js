import React from 'react';
import { Link } from 'react-router-dom';




class Dashboard extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className="uc__page_s">
                    <div className="page-wrapper chiller-theme toggled">
                        <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
                            <i className="fa fa-bars"></i>
                        </Link>
                        <nav id="sidebar" className="sidebar-wrapper">
                            <div className="sidebar-content">
                                <div className="sidebar-brand">
                                    <Link to="#">Used Cars Portal</Link>
                                    {/* <div id="close-sidebar">
                                        <i className="fa fa-times"></i>
                                    </div> */}
                                </div>
                                <div className="sidebar-header">
                                    <div className="user-pic">
                                    <img className="img-responsive img-rounded" src="https://azouaoui-med.github.io/angular-pro-sidebar/demo/assets/img/user.jpg"
                                        alt="User picture"/>
                                    </div>
                                    <div className="user-info">
                                    <span className="user-name">Jhon
                                        <strong>Smith</strong>
                                    </span>
                                    {/* <span className="user-role"></span> */}
                                    <span className="user-status">
                                        <i className="fa fa-circle"></i>
                                        <span>Administrator</span>
                                    </span>
                                    </div>
                                </div>
            
                        
                            <div className="sidebar-menu">
                                <ul>
                                    <li className="header-menu">
                                        <span>General</span>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link to="#">
                                            <i className="fa fa-tachometer"></i>
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link to="/admin/gridbackend">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span>Pages</span>
                                            {/* <span className="badge badge-pill badge-danger">3</span> */}
                                        </Link>
                                        <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="#">Products</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Orders</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Credit cart</Link>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link to="#">
                                            <i className="fa fa-server"></i>
                                            <span>Components</span>
                                        </Link>
                                        <div className="sidebar-submenu">
                                            <ul>
                                                <li>
                                                <Link to="#">General</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Panels</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Tables</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Icons</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Forms</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link to="#">
                                            <i className="fa fa-area-chart"></i>
                                            <span>Charts</span>
                                        </Link>
                                        <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="#">Pie chart</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Line chart</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Bar chart</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Histogram</Link>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link to="#">
                                            <i className="fa fa-globe"></i>
                                            <span>Maps</span>
                                        </Link>
                                        <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="#">Google maps</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Open street map</Link>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li className="header-menu">
                                        <span>Extra</span>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-book"></i>
                                            <span>Documentation</span>
                                            <span className="badge badge-pill badge-primary">Beta</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-calendar"></i>
                                            <span>Calendar</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-folder"></i>
                                            <span>Examples</span>
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                        
                            </div>
                        
                            <div className="sidebar-footer">
                                <Link to="#">
                                    <i className="fa fa-bell"></i>
                                    <span className="badge badge-pill badge-warning notification">3</span>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-envelope"></i>
                                    <span className="badge badge-pill badge-success notification">7</span>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-cog"></i>
                                    <span className="badge-sonar"></span>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-power-off"></i>
                                </Link>
                            </div>
                        </nav>
                        
                        <main className="page-content uc__p_content">

                            <header class="header">
                                <Link to="" class="logo">
                                    <div><img src="assets/images/moto-logo.webp" style={{marginTop:"35px",width:"180px"}} alt="Car Store"/></div>
                                </Link>
                                <input class="menu-btn" type="checkbox" id="menu-btn" />
                                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                                <ul class="menu">
                                    <li><Link to="#!"><i class="fa fa-cog" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#!"><i class="fa fa-bell-o" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#careers"><i class="fa fa-user" aria-hidden="true" style={{paddingRight:"5px"}}></i>Sign in</Link></li>
                                </ul>
                            </header>

                            <div className="uc__ad_h">
                                <div class="container-fluid py-4">
                                    <div class="row">
                                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                            <Link to="#!">
                                                <div class="card">
                                                    <div class="card-img uc-i21">
                                                       <i class="fa fa-first-order" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="card-content">
                                                        <h2 class="big-title">Total Products</h2>
                                                        <h3 class="medium-title">10</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                            <Link to="#!">
                                                <div class="card">
                                                    <div class="card-img uc-i22">
                                                       <i class="fa fa-automobile" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="card-content">
                                                        <h2 class="big-title">Today Orders</h2>
                                                        <h3 class="medium-title">3</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                            <Link to="#!">
                                                <div class="card">
                                                    <div class="card-img uc-i23">
                                                        <i class="fa fa-server" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="card-content">
                                                        <h2 class="big-title">Updated Cars</h2>
                                                        <h3 class="medium-title">32</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                            <Link to="#!">
                                                <div class="card">
                                                    <div class="card-img uc-i24">
                                                         <i class="fa fa-user" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="card-content">
                                                        <h2 class="big-title">Users</h2>
                                                        <h3 class="medium-title">12</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </main>
                        
                    </div>
                </section>

            </React.Fragment>
        )
           
    }
}
export default Dashboard;