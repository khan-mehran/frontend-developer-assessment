import React from 'react';

const HomeSection = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="hero">
                    <div className="row">
                        <div className="col-md-6 mt-3 hero-content" id="hero_text">
                            <h1 className="title">
                                <span>Everything</span> is now <span>Digital</span>
                            </h1>
                            <hr />
                            <h5>Make your bussiness online</h5>
                        </div>
                        <div className="col-md-6 text-end" id="hero_img">
                            <img src="3.png" alt="hero-banner" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;