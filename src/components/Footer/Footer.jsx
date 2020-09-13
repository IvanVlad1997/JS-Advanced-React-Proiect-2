import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <Link to='/about'>Despre</Link>
                    <Link to='/terms'>Termeni și condiții</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="mailto:ivanvlad97@yahoo.ro">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            ivanvlad97@yahoo.ro
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40761532885</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="https://github.com/IvanVlad1997">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            IvanVlad1997
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/vlad-gabriel-ivan-6b679b1b6/">
                            <LinkedIn className="mr-1 footer-icon"/>
                            IvanVlad
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Ivan Vlad, 2020
            </div>
        </footer>
    );
}

export default Footer;