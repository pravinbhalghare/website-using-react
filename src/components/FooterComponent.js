import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container-fluid">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Sr.no- 15 ,near Chintamani Dyanpeeth,<br />
		              Opposite to Shree Balaji height,<br />
		              Ambegoan BK. Pune-46<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 7391959286<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 8208324061<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:ajinkyabalghare@gmail.com">
                         ajinkyabhalghare@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">Follow us.</div>
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://plus.google.com/u/1/113599041249300820449"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/nikhil-karkra-73a15319/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/karkra_nikhil"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Pravin Bhalghare</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;