import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer id="contact">
                <div className="footer-child">
                    <h4 className="foot-h4">First footer title</h4>
                    <ul className="ul-footer">
                    <li><a href="#l">under title</a></li>
                    <li><a href="#l">under title</a></li>
                    <li><a href="#l">under title</a></li>
                    </ul>
                </div>
                <div className="footer-child">
                    <h4 className="foot-h4">second footer title</h4>
                    <ul className="ul-footer">
                    <li><a href="#l">under title</a></li>
                    <li><a href="#l">under title</a></li>
                    <li><a href="#l">under title</a></li>
                    </ul>
                </div>
                <div className="social-links footer-child">
                    <h4 className="foot-h4">social links</h4>
                    <ul className="ul-footer">
                    <li>
                        <a href="#l">
                        <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#l">
                        <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#l">
                        <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer