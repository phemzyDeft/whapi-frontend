import React from 'react';
import {MdOutlineWhatshot} from 'react-icons/md'
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import './Footer.css';
import {Link} from 'react-scroll';
import {Link as Tag} from 'react-router-dom';


function Footer(props) {
    return (
        <div className='footer text-white py-5' style={{background: "var(--primary-color)"}}>
            <div className="container-fluid">
                  <div className=".row top">
                    <div className="logo">
                    <MdOutlineWhatshot  className='icon'/>
                      <h2 className='pt-1'>Whapi</h2>
                    </div>
                    {/* <div className="offset-lg-2"></div> */}
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <BsFillArrowUpCircleFill className='icon-to-top'/>
                    </Link>               
                    
                  </div>

                <div className="row text-center">
                    <div className="col-12 col-lg-5 col-md-6 py-2">
                      <p className="text" style={{fontSize: "14px", textAlign: "start"}}>
                      Whapi.io is in no way affiliated with, authorized, maintained, sponsored or endorsed by WhatsApp or any of its affiliates or subsidiaries. This is an independent and unofficial software. Do not use this service to send spam or bulk messages. Use at your own risk.
                      </p>
                    </div>
                    <div className="col-12 col-lg-2 col-md-6 py-2">
                        <h3 style={{fontSize: "20px"}}>Navigation</h3>
                        <p><Tag to='/'>Home</Tag></p>
                        <p><Tag to='/recovery'>Data</Tag></p>
                        <p><Tag to='/cloud'>Cloud</Tag></p>
                        <p><Tag to='/contact'>Contact</Tag></p>
                    </div>
                    <div className="col-12 col-lg-2 col-md-6 py-2">
                        <h3 style={{fontSize: "20px"}}>My Account</h3>
                        <p><Tag to='/'>Home</Tag></p>
                        <p><Tag to='/recovery'>Data</Tag></p>
                        <p><Tag to='/cloud'>Cloud</Tag></p>
                        <p><Tag to='/contact'>Contact</Tag></p>
                    </div>
                    <form action="/" autoComplete='off' className='col-12 col-lg-3 col-md-6 py-2'>
                        <h3 style={{fontSize: "20px"}}>Join Our Team</h3>
                        <input type="email" name="email" id="" placeholder='input email' />
                        <FiSend className="mail" style={{color: "var(--primary-color)"}}/>

                        <div className="social-group">
                            <TiSocialTwitter className='social-icon'/>
                            <TiSocialLinkedin className='social-icon'/>
                            <TiSocialFacebook className='social-icon'/>
                            {/* <FiInstagram className='social-icon'/> */}
                            <IoLogoWhatsapp className='social-icon'/>
                            <IoLogoWhatsapp className='social-icon'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;