import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import '../assets/css/contactUs.css';
import { useState } from 'react';
import SuccessAlert from '../SuccessAlert/SuccessAlert';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
    
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/connect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to send message. Please try again later.');
            }
    
            const data = await response.json();
            console.log(data);
    
            if (response.status === 201) {
                setSuccessMessage('Your message has been sent successfully!');
                setName('');
                setEmail('');
            } else {
                setError('Failed to send message. Please try again later.');
            }
        } catch (error) {
            setError('Error: ' + error.message);
        }
    };
    
    return (
        <section className="registration-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 part">
                        <div className="section-title text-left text-white">
                            <h2 className="text-white">
                                Connect with Us! <br />
                                Join Our Learning Community
                            </h2>
                            <p>
                                Are you curious about blank cassettes? You might notice a wide range of prices, with some as low as 17 cents each. Let’s delve into the world of knowledge together and explore the possibilities!
                            </p>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-4 col-md-6">
                        <div className="course-form-section">
                            {successMessage && <SuccessAlert message={successMessage} type="success" />}
                            {error && <SuccessAlert message={error} type="danger" />}

                            <form className="course-form-area contact-page-form course-form text-right" id="myForm" onSubmit={handleSubmit}>
                                <div className="form-group col-md-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onFocus={(e) => e.target.placeholder = ''}
                                        onBlur={(e) => e.target.placeholder = 'Name'}
                                    />
                                </div>

                                <div className="form-group col-md-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={(e) => e.target.placeholder = ''}
                                        onBlur={(e) => e.target.placeholder = 'Email Address'}
                                    />
                                </div>

                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn text-uppercase">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
