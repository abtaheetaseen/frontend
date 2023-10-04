import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-left" data-aos="fade-left">
                    <div className="hero-left-wrapper">
                        <h1 className="hero-heading">
                            Bringing class to cuisine...
                        </h1>
                        <p className="hero-info">
                            We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine dining environment.
                        </p>
                        <div className="button-wrapper">
                            <NavLink to="/cuisine" className="primary-btn">Explore Cuisine</NavLink>
                        </div>
                    </div>
                </div>

                <div className="hero-right" data-aos="fade-right">
                    <div className="hero-img-wrapper">
                        <img src="./images/herobg.avif" alt="hero" width="100px" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
