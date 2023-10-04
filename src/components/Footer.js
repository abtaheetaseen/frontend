import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-col1">
                    <div className="footer-logo">
                        <img src="./images/sandlogo.png" alt='logoimg'/>
                    </div>
                    <p className="footer-desc">
                        Where every flavor tells a story
                    </p>
                </div>

                <div className="footer-col3">
                    <h3 className="footer-text-tittle">
                        Links
                    </h3>
                    <ol className="footer-text">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cuisine">Cuisine</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Book Table</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        
                    </ol>
                </div>
            </div>
        </div>

        <div className="another-footer">
            <h4>SANDWICH  SLINGER</h4>
        </div>
        
    </footer>
    </>
  )
}

export default Footer
