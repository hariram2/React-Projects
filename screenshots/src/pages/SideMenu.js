import React, { useEffect, createRef } from 'react';
import '../style.css';
import { Link } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";

function SideMenu() {
    const ref_menu = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
      type: "image/jpeg",
      quality: 1.0
    });
  
    const download = (image, { name = "img", extension = "jpg" } = {}) => {
      const a = document.createElement("a");
      a.href = image;
      a.download = createFileName(extension, name);
      a.click();
    };
  
    const downloadScreenshot = () => takeScreenShot(ref_menu.current).then(download);

    useEffect(() => {
        let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
        });
        }

        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".bx-menu");
        console.log(sidebarBtn);
        sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        });

    },[])
  return (
    <div>
        <button className='screen__btn' onClick={downloadScreenshot}>Download screenshot</button>
        <div ref={ref_menu}>
            <div className="sidebar">
                <div className="logo-details">
                <i className='bx bxl-bitcoin'></i>
                <span className="logo_name">Menu</span>
                </div>
                <ul className="nav-links">
                <li>
                    <Link to="/screenshots">
                    <i className='bx bx-home'></i>
                    <span className="link_name">Home</span>
                    </Link>
                    <ul className="sub-menu blank">
                    <li><Link className="link_name" to="/screenshots">Home</Link></li>
                    </ul>
                </li>
                <li>
                    <div className="icon-link">
                    <Link to="/screenshots">
                        <i className='bx bx-bulb'></i>
                        <span className="link_name">Solutions</span>
                    </Link>
                    <i className='bx bxs-chevron-down arrow'></i>
                    </div>
                    <ul className="sub-menu">
                    <li><Link className="link_name" to="/screenshots">Solutions</Link></li>
                    <li><Link to="/screenshots">Payments API</Link></li>
                    <li><Link to="/screenshots">Accounts APi</Link></li>
                    <li><Link to="/screenshots">Finance API</Link></li>
                    </ul>
                </li>
                <li>
                    <div className="icon-link">
                    <Link to="/screenshots">
                        <i className='bx bx-news'></i>
                        <span className="link_name">Posts</span>
                    </Link>
                    <i className='bx bxs-chevron-down arrow'></i>
                    </div>
                    <ul className="sub-menu">
                    <li><Link className="link_name" to="/screenshots">Posts</Link></li>
                    <li><Link to="/screenshots">Recent</Link></li>
                    <li><Link to="/screenshots">Trending</Link></li>
                    <li><Link to="/screenshots">Most Visited</Link></li>
                    </ul>
                </li>
                <li>
                    <div className="icon-link">
                    <Link to="/screenshots">
                        <i className='bx bx-file-find'></i>
                        <span className="link_name">Insights</span>
                    </Link>
                    <i className='bx bxs-chevron-down arrow'></i>
                    </div>
                    <ul className="sub-menu">
                    <li><Link className="link_name" to="/screenshots">Insights</Link></li>
                    <li><Link to="/screenshots">Money Movement</Link></li>
                    <li><Link to="/screenshots">Enterprise Spotlight</Link></li>
                    <li><Link to="/screenshots">Financial Burnout</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/screenshots">
                    <i className='bx bxs-credit-card' ></i>
                    <span className="link_name">Pricing</span>
                    </Link>
                    <ul className="sub-menu blank">
                    <li><Link className="link_name" to="/screenshots">Pricing</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/screenshots">
                    <i className='bx bx-bar-chart'></i>
                    <span className="link_name">Chart</span>
                    </Link>
                    <ul className="sub-menu blank">
                    <li><Link className="link_name" to="/screenshots">Chart</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/screenshots">
                    <i className='bx bx-compass'></i>
                    <span className="link_name">Explore</span>
                    </Link>
                    <ul className="sub-menu blank">
                    <li><Link className="link_name" to="/screenshots">Explore</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/screenshots">
                    <i className='bx bx-cog'></i>
                    <span className="link_name">Setting</span>
                    </Link>
                    <ul className="sub-menu blank">
                    <li><Link className="link_name" to="/screenshots">Setting</Link></li>
                    </ul>
                </li>
                <li>
                    <div className="profile-details">
                    <div className="profile-content">
                        <img src="https://github.com/Sacsam005/dropdown-menu/blob/master/image/profile.png?raw=true" alt="profileImg" />
                    </div>
                    <div className="name-job">
                        <div className="profile_name">John Doe</div>
                        <div className="job">Crypto Expert</div>
                    </div>
                    <i className='bx bx-log-out'></i>
                    </div>
                </li>
                </ul>
            </div>
            <section className="home-section">
                <div className="home-content">
                <i className='bx bx-menu'></i>
                {/* <span className="text">Crypto App</span> */}
                </div>
            </section>
        </div>
    </div>
  )
}

export default SideMenu