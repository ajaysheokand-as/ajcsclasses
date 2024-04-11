import React from 'react'

export const Banner = () => {
  return (
    
    <section className="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
              <h6>Greetings!!</h6>
              <h2>To all aspiring minds!</h2>
              <p>Welcome to our online platform, where possibilities are endless and learning is limitless. Let's embark on this educational odyssey together." The digital world is your classroom, and every click is a lesson waiting to be learned. Let's embrace the journey of discovery together.</p>
              <div className="main-button-red">
                  <div className="scroll-to-section"><a target='_blank' href="https://wa.me/+919896996916?text='Hi, I am interested in free counselling'">Connect For Free Counselling</a></div>
              </div>
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>
  )
}
