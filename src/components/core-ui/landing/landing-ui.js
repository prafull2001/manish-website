
import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import Typed from 'react-typed';
import { headerData } from '../../../data/headerData';
import './landing.css';

import {
    FaLinkedin, FaInstagram, FaMedium
} from 'react-icons/fa';
import { contactsData } from '../../../data/contactsData';

function LandingUI({ theme, drawerOpen, classes }) {


    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className='lcl--content'>
                        
                        {contactsData.instagram && (
                            <a
                                href={contactsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social instagram-icon'
                                    style={{ color: theme.secondary }}
                                    aria-label='instagram'
                                />
                            </a>
                        )}

                        {contactsData.linkedIn && (
                            <a
                                href={contactsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social linkedin-icon'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}

                        {contactsData.medium && (
                            <a
                                href={contactsData.medium}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaMedium
                                    className='landing--social medium-icon'
                                    style={{ color: theme.secondary }}
                                    aria-label='medium'
                                />
                            </a>
                        )}
                        
                        
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Full-stack Architect ',
                                ' Cloud Architect ',
                                ' Data Expert ',
                                ' Fintech Expert ',
                                ' Perpetual Learner ',
                                ' Mentor ',
                                ' Dad ',
                                ' Birder ']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className={classes.resumeBtn}>
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <button className={classes.contactBtn}>
                                    Contact
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingUI;