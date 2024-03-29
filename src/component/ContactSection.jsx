import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim()) {
            setError('Please fill out all fields.');
        } else {
            setError('');
            alert('Form submitted successfully');
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="about-content text-center">
                    <h2>Contact Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                        maxime aliquid pariatur ipsa provident iste voluptatum, assumenda
                        possimus repellat doloribus libero rerum perferendis ipsum. Maxime
                        architecto sint culpa suscipit?
                    </p>
                </div>
                <div className="contact-form-container pt-2">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputText1"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-dark px-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
