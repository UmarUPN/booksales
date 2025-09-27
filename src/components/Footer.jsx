import "../assets/styles/footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                    <strong>BookSales</strong> <i>YOUR DIGITAL BOOKSTORE</i> is committed to making book discovery and purchasing easier for readers everywhere. We offer a curated selection of titles across genres, from fiction and self-development to academic and business books. Our mission is to connect readers with the stories and knowledge that inspire, educate, and empower.
                </p>
                </div>

                <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                    <li><a href="#">Fiction</a></li>
                    <li><a href="#">Non-Fiction</a></li>
                    <li><a href="#">Self Development</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Education</a></li>
                </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Contribute</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; 2025 All Rights Reserved by
                    <a href="#" className="text-decoration-none"> BookSales</a>.
                    </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                    <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}