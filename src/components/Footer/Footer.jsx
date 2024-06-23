import { Link } from 'react-router-dom';
import logo from '/logo.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#202942] text-gray-300">
  <aside>
    <img className='w-16 h-16' src={logo} alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Comfortable</a>
    <a className="link link-hover">Extra Security</a>
    <a className="link link-hover">Best Price</a>
    <a className="link link-hover">Strategic Location</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <Link to='/contact-us'className="link link-hover">Contact</Link>
    <Link to='/user-profile' className="link link-hover">Profile</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;
