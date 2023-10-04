import React from 'react'

const WelcomeSection = () => {
  return (
    <section className="welcome" id="about">
        <h1 className="heading" data-aos="fade-left">
            Welcome to SAND & SLING
        </h1>
        <center><h3 className="sub-heading" data-aos="fade-right"> ~ Luxury & Quality ~ </h3></center>

        <div className="box-container">
            <div className="box">
                <div className="image">
                    <img src="./images/welcome1.jpg" alt="professional" />
                </div>

                <div className="content">
                    <h3>PROFESSIONAL LEVEL</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto adipisci dolore asperiores repudiandae dolores vero possimus cumque repellendus nostrum nesciunt rem labore inventore sequi, nihil autem cum soluta molestiae reiciendis?</p>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="./images/welcome2.jpg" alt="freshFood" />
                </div>

                <div className="content">
                    <h3>THE FRESHNESS</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto adipisci dolore asperiores repudiandae dolores vero possimus cumque repellendus nostrum nesciunt rem labore inventore sequi, nihil autem cum soluta molestiae reiciendis?</p>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="./images/welcome3.jpg" alt="relaxed" />
                </div>

                <div className="content">
                    <h3>RELAXED ATMOSPHERE</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto adipisci dolore asperiores repudiandae dolores vero possimus cumque repellendus nostrum nesciunt rem labore inventore sequi, nihil autem cum soluta molestiae reiciendis?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WelcomeSection
