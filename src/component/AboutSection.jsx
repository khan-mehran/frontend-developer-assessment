import React from 'react';

const AboutSection = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-content text-center">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                        maxime aliquid pariatur ipsa provident iste voluptatum, assumenda
                        possimus repellat doloribus libero rerum perferendis ipsum. Maxime
                        architecto sint culpa suscipit?
                    </p>
                </div>
                <div className="row py-3">
                    <div className="col-md-4">
                        <div className="card text-center mt-3">
                            <div className="card-img pt-3">
                                <img src="computer.png" alt="computer" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Online</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    Card subtitle
                                </h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mt-3">
                            <div className="card-img pt-3">
                                <img src="contract.png" alt="contract" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Contract</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    Card subtitle
                                </h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mt-3">
                            <div className="card-img pt-3">
                                <img src="parternship.png" alt="parternship" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Parntership</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    Card subtitle
                                </h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;