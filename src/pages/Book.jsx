import "../assets/styles/carousel.css";

export default function Book() {
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg
                    aria-hidden="true"
                    className="bd-placeholder-img"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            href="src/assets/images/banner1.jpg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                </div>
                <div className="carousel-item">
                    <svg
                    aria-hidden="true"
                    className="bd-placeholder-img"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            href="src/assets/images/banner2.jpg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                </div>
                <div className="carousel-item">
                    <svg
                    aria-hidden="true"
                    className="bd-placeholder-img"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            href="src/assets/images/banner3.jpg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                </div>
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!-- Marketing messaging and featurettes ================================================== -->
            <!-- Wrap the rest of the page in another container to center all the content. --> */}
            <div className="container marketing">
                {/* <!-- Three columns of text below the carousel --> */}
                <div className="row">
                    <h2 className="sect-title text-center">Get to know Famous Authors</h2>
                    <p className="sect-title-subtitle text-muted text-center">Discover the minds behind the masterpieces.</p>
                <div className="col-lg-4">
                    <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle mb-4"
                    height="240"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="240"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            href="src/assets/images/Gabriel García Márque.jpg"
                            width="240"
                            height="240"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                    <h2 className="fw-normal">Gabriel García Márquez</h2>
                    <p>
                    A Nobel Prize-winning author who brought magical realism to life through works like “One Hundred Years of Solitude” and “Love in the Time of Cholera”
                    </p>
                    <p>
                    <a className="btn btn-warning" href="#">View details &raquo;</a>
                    </p>
                </div>
                {/* <!-- /.col-lg-4 --> */}
                <div className="col-lg-4">
                    <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle mb-4"
                    height="240"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="240"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            href="src/assets/images/Tere Liye.avif"
                            width="240"
                            height="240"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                    <h2 className="fw-normal">Tere Liye</h2>
                    <p>
                    A prolific Indonesian writer with dozens of best-selling novels that explore themes of family, love, and life philosophy
                    </p>
                    <p>
                    <a className="btn btn-warning" href="#">View details &raquo;</a>
                    </p>
                </div>
                {/* <!-- /.col-lg-4 --> */}
                <div className="col-lg-4">
                    <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle mb-4"
                    height="240"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="240"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            href="src/assets/images/Yuval Noah Harari.jpg"
                            width="240"
                            height="240"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                    <h2 className="fw-normal">Yuval Noah Harari</h2>
                    <p>
                    A global historian and author who reshaped our understanding of humanity through books like “Sapiens,” “Homo Deus,” and “21 Lessons for the 21st Century”
                    </p>
                    <p>
                    <a className="btn btn-warning" href="#">View details &raquo;</a>
                    </p>
                </div>
                {/* <!-- /.col-lg-4 --> */}
                </div>
                {/* <!-- /.row -->
                <!-- START THE FEATURETTES --> */}
                <hr className="featurette-divider" />
                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">
                    First featurette heading.
                    <span className="text-body-secondary">It’ll blow your mind.</span>
                    </h2>
                    <p className="lead">
                    Some great placeholder content for the first featurette here.
                    Imagine some exciting prose here.
                    </p>
                </div>
                <div className="col-md-5">
                    <svg
                    aria-label="Placeholder: 500x500"
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="500"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>Placeholder</title>
                    <rect
                        width="100%"
                        height="100%"
                        fill="var(--bs-secondary-bg)"
                    ></rect>
                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                        500x500
                    </text>
                    </svg>
                </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">
                    Oh yeah, it’s that good.
                    <span className="text-body-secondary">See for yourself.</span>
                    </h2>
                    <p className="lead">
                    Another featurette? Of course. More placeholder content here to
                    give you an idea of how this layout would work with some actual
                    real-world content in place.
                    </p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg
                    aria-label="Placeholder: 500x500"
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="500"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>Placeholder</title>
                    <rect
                        width="100%"
                        height="100%"
                        fill="var(--bs-secondary-bg)"
                    ></rect>
                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                        500x500
                    </text>
                    </svg>
                </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">
                    And lastly, this one.
                    <span className="text-body-secondary">Checkmate.</span>
                    </h2>
                    <p className="lead">
                    And yes, this is the last block of representative placeholder
                    content. Again, not really intended to be actually read, simply
                    here to give you a better view of what this would look like with
                    some actual content. Your content.
                    </p>
                </div>
                <div className="col-md-5">
                    <svg
                    aria-label="Placeholder: 500x500"
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="500"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>Placeholder</title>
                    <rect
                        width="100%"
                        height="100%"
                        fill="var(--bs-secondary-bg)"
                    ></rect>
                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                        500x500
                    </text>
                    </svg>
                </div>
                </div>
                <hr className="featurette-divider" />
                {/* <!-- /END THE FEATURETTES --> */}
            </div>
        </>
    )
}