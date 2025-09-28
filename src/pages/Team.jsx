import "./styles/Team.css";

export default function Team() {
    return (
        <div className="py-5">
            <div className="container">
                {/* <!-- Section Header --> */}
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="text-muted">Dedicated professionals working together to achieve excellence</p>
                    </div>
                </div>

                {/* <!-- Team Members --> */}
                <div className="row g-4">
                    {/* <!-- Team Member 1 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member text-center p-4">
                            <img src="https://randomuser.me/api/portraits/women/64.jpg" alt="Team Member 1" className="mb-4 shadow"/>
                            <h5 className="mb-1">Sarah Johnson</h5>
                            <p className="text-muted mb-3">CEO & Founder</p>
                            <p className="small mb-3">Leading our company's vision and strategy with over 15 years of
                                experience.</p>
                            <div className="team-social-links">
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Team Member 2 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member text-center p-4">
                            <img src="src/assets/images/pp.webp" alt="Team Member 2" className="mb-4 shadow"/>
                            <h5 className="mb-1">Umar Mukhtar</h5>
                            <p className="text-muted mb-3">Fullstack Web Developer</p>
                            <p className="small mb-3">Turning ideas into interactive, scalable web platforms.</p>
                            <div className="team-social-links">
                                <a href="mailto:el.mochtaar@gmail.com"><i className="far fa-envelope"></i></a>
                                <a href="https://github.com/UmarUPN" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="https://www.instagram.com/el_mochtaar/" target="_blank"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Team Member 3 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member text-center p-4">
                            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Team Member 3" className="mb-4 shadow"/>
                            <h5 className="mb-1">Emily Martinez</h5>
                            <p className="text-muted mb-3">Design Director</p>
                            <p className="small mb-3">Creating beautiful and intuitive designs that users love.</p>
                            <div className="team-social-links">
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Team Member 4 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member text-center p-4">
                            <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Team Member 4" className="mb-4 shadow"/>
                            <h5 className="mb-1">David Wilson</h5>
                            <p className="text-muted mb-3">Marketing Manager</p>
                            <p className="small mb-3">Developing strategies that connect our brand with audiences.</p>
                            <div className="team-social-links">
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}