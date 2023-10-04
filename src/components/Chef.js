import React from 'react'

const Chef = () => {
  return (
    <section className="our-team">
        <h1 className="heading" data-aos="fade-left">~A R T I S T I C~ Chef</h1>
        <center><h3 className="sub-heading" data-aos="fade-right">Experienced & Liveliness</h3></center>

        <div className="our-chef">
            <div className="chef-item">
                <div className="chef-image">
                    <img src="./images/chefff1.jpg" alt="chef3" />
                </div>

                <div className="chef-info">
                    <div className="chef-name">
                        <h3 className="chef-info">Ali Ahsan</h3>
                        <p className="chef-text">Executive Chef</p>
                    </div>
                </div>
            </div>

            <div className="chef-item">
                <div className="chef-image">
                    <img src="./images/chef2bg.jpg" alt="chef2" />
                </div>

                <div className="chef-info">
                    <div className="chef-name">
                        <h3 className="chef-info">Alex Jacks</h3>
                        <p className="chef-text">Executive Sous Chef</p>
                    </div>
                </div>
            </div>

            <div className="chef-item">
                <div className="chef-image">
                    <img src="./images/chefff3.jpg" alt="chef3" />
                </div>

                <div className="chef-info">
                    <div className="chef-name">
                        <h3 className="chef-info">Carolin Adams</h3>
                        <p className="chef-text">Chef de Cuisine</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Chef
