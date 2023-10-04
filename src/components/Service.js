import React from 'react'

const Service = () => {
  return (
    <div className="container">
        <div className="whyus-wrapper">
            <div className="whyus-left">
                <h2 className="whyus-tittle" data-aos="fade-left">
                    Why Choose Our Cuisine
                </h2>
                <p className="whyus-text" data-aos="fade-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dicta expedita atque molestiae vel voluptates, ut quia, dolores tempora fuga perferendis sequi iusto optio fugiat excepturi consequatur modi quaerat enim rem.
                </p>
            </div>

            <div className="whyus-right">
                <div className="whyus-items-wrapper">
                    <div className="whyus-item">
                        <div className="whyus-item-icon">
                            <img src="./images/qualityfoodicon.png" alt="qualityfoodicon" />
                        </div>
                        <p className="whyus-item-text">
                            Quality Food 
                        </p>
                    </div>

                    <div className="whyus-item">
                        <div className="whyus-item-icon">
                            <img src="./images/cuisineicon.png" alt="cuisineicon" />
                        </div>
                        <p className="whyus-item-text">
                            Classic Taste
                        </p>
                    </div>

                    <div className="whyus-item">
                        <div className="whyus-item-icon">
                            <img src="./images/cheficon.png" alt="cheficon" />
                        </div>
                        <p className="whyus-item-text">
                            Stylish Chef
                        </p>
                    </div>

                    <div className="whyus-item">
                        <div className="whyus-item-icon">
                            <img src="./images/environicon.png" alt="environicon" />
                        </div>
                        <p className="whyus-item-text">
                            Environment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
