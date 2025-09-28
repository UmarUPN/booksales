import "./styles/Contact.css";

export default function Contact() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="contact-wrapper">
                <div className="row g-0">
                    <div className="col-md-5">
                    <div className="contact-info h-100">
                        <h3 className="mb-4">Get in touch</h3>
                        <p className="mb-4">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>

                        <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h6 className="mb-0">Address</h6>
                            <p className="mb-0">Kec. Gedangan, Kabupaten Sidoarjo,<br/>Jawa Timur 61254</p>
                        </div>
                        </div>

                        <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div>
                            <h6 className="mb-0">Phone</h6>
                            <p className="mb-0">+62 831-4697-8084</p>
                        </div>
                        </div>

                        <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h6 className="mb-0">Email</h6>
                            <p className="mb-0">el.mochtaar@gmail.com</p>
                        </div>
                        </div>

                        <div className="social-links">
                        <h6 className="mb-3">Follow Us</h6>
                        <a href="mailto:el.mochtaar@gmail.com" className="social-icon"><i className="far fa-envelope"></i></a>
                        <a href="https://wa.me/6283146978084" target="_blank" className="social-icon"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://github.com/UmarUPN" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/el_mochtaar/" target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-md-7">
                    <div className="contact-form">
                        <h3 className="mb-4">Send us a message</h3>
                        <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="John"/>
                            </div>
                            <div className="col-md-6 mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Doe"/>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="john@example.com"/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input type="text" className="form-control" placeholder="How can we help?"/>
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-submit btn-warning">Send Message</button>
                        </form>

                        <div className="map-container mt-4">
                        {/* <img src="/api/placeholder/800/200" alt="Map" style="width: 100%; height: 100%; object-fit: cover;"> */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.89750722990556!2d112.72983911605492!3d-7.386783931226247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e557a676c8af%3A0xf3af60d1036dd8ab!2sIDESIGN!5e0!3m2!1sid!2sid!4v1757496768347!5m2!1sid!2sid"
                            style={{ border: 0, width: '100%', height: '100%', objectFit: 'cover' }} allowfullscreen="" loading="lazy">
                        </iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}