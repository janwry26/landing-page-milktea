import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import logo from '../assets/logo.png';
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const handleLinkClick = (event) => {
		showNavbar();
		window.location.href = event.target.href;
	  };
	  

	return (
		
		<header>
			<div className="logo">
                <img src={logo} alt="navbar-pic"/>
            </div>
			<nav ref={navRef}>
				<a href="#home" onClick={handleLinkClick}>Home</a>
				<a href="#topic" onClick={handleLinkClick}>Topic</a>
				<a href="#team" onClick={handleLinkClick}>Team</a>
				<a href="#about" onClick={handleLinkClick}>About</a>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;