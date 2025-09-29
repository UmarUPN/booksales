import "./styles/ProductList.css";

export default function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best-Selling Books You Can’t Miss</h1>
            <p className="lead text-body-secondary">
              Discover a lineup of best-selling books that have captivated millions of readers around the world. From emotionally rich stories to eye-opening insights, this collection features top picks that have proven to inspire, entertain, and challenge perspectives. Don’t miss the chance to explore the titles that are making waves in the literary world.
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/A Part of You.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    <strong><i>A Part of You</i></strong> has a dramatic book cover design that emphasizes the intense emotions that characters are dealing with together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/The Crown of Light.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    <strong><i>The Crown of Light</i></strong> sets itself up as a fantasy-romance hybrid through its strategic use of images.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/Crossing all Boundaries.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    Fantasy readers love to find familiar elements in strange or fantastical settings. <strong><i>Crossing all Boundaries</i></strong> by Suzanne Nemec is equal measures easy to understand and intriguing mystery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/Deadly Silence.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    Rebecca Zanetti’s <strong><i>Deadly Silence</i></strong> book cover manages to walk the line between suspense, horror, and romance while wearing a floor-length dress. Thank God she ditched the heels!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/Meeting Derek Masters.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    We’re a little biased in favor of wax seals, but they are so effective on layered book covers like <strong><i>Meeting Derek Masters</i></strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/Harborwood.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    It’s hard to go wrong with a romantic walk on the beach, but that’s only one reason why <strong><i>Harborwood</i></strong> looks magical.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/With This Bling.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    L.B. Gregg’s <strong><i>With This Bling</i></strong> has a delightfully flashy, ready-to-go cover design that promises to take readers on a romantic adventure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/A Bloodline’s Echo.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    This cover entirely agrees with and engages the novel’s title, <strong><i>A Bloodline’s Echo</i></strong>. Readers get a chance to meet the main character right away and can quickly observe that this is a young adult novel that deals with magic and romance galore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="700"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                      href="src/assets/images/Laila.jpg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                <div className="card-body">
                  <p className="font-style card-text">
                    <strong><i>Laila</i></strong> by Salimah Dhanani works on several levels to create intrigue and magic out of thin air! Having a picture of the central protagonist on the front cover can be important for several reasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}