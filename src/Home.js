import React from 'react'
import Count from './Count'
import userImage from './images/bg.jpg'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div className="app">
      <div id="content-wrap">
        <main className="row">
          <header className="site-header">
            <div className="logo">
              <a href="index.html">Advent.</a>
            </div>
          </header>

          <div id="main-content" className="twelve columns">
            <h1>Coming Soon</h1>

            <p> Welcome to Snapknow! Snap! Learn! Grow!</p>
            <p>
              The educational app that teaches everything you need to know in a
              fun and easy way. You can learn about things captured with your
              phone camera or import from your phone gallery. Learning has never
              been so much fun, If you want to know more about an object just
              snap it!
            </p>

            <hr />

            <Count />

            <div id="mc-signup">
              <form id="mc-form" className="group">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />

                <input
                  type="submit"
                  value="Get Notified"
                  name="subscribe"
                  className="button"
                />

                <label
                  htmlFor="mce-EMAIL"
                  className="subscribe-message"
                ></label>
              </form>
            </div>
          </div>

          <div className="modal-toggles">
            <ul>
              <li className="about-us">
                <a href="#mod-about">More about us</a>
              </li>
              <li className="location">
                <a href="#mod-map">Our Location</a>
              </li>
            </ul>
          </div>
        </main>
      </div>

      <div className="features">
        <h2>Amazing Features</h2>
        <div className="feature-box">
          <div className="feature">
            <h3>Easy Set Up</h3>
            <p>
              SnapKnow App is build with an intuitive and user friendly
              interface
            </p>
            <hr />
          </div>
          <div className="feature">
            <h3>On The Go</h3>
            <p>
              SnapKnow can be used at a anytime and anywhere, with SnapKnmow you
              can learn new things while being active or busy.
            </p>
            <hr />
          </div>
          <div className="feature">
            <h3>Social Connect</h3>
            <p>
              Users can connect with each other and share the knowledge that t
              hey’ve gained amidst other social interactions .
            </p>
            <hr />
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Team Members</h2>
        <div className="feature-box">
          <div className="feature">
            <h3>Easy Set Up</h3>
            <p>
              SnapKnow App is build with an intuitive and user friendly
              interface
            </p>
            <hr />
          </div>
          <div className="feature">
            <h3>On The Go</h3>
            <p>
              SnapKnow can be used at a anytime and anywhere, with SnapKnmow you
              can learn new things while being active or busy.
            </p>
            <hr />
          </div>
          <div className="feature">
            <h3>Social Connect</h3>
            <p>
              Users can connect with each other and share the knowledge that t
              hey’ve gained amidst other social interactions .
            </p>
            <hr />
          </div>
        </div>
      </div>

      <div className="team">
        <h2>Team</h2>
        <div className="team-box">
          <div className="single-member">
            <div className="member">
              <img src={userImage} alt="" />
            </div>
            <h3>Easy Set Up</h3>
          </div>
          <div className="single-member">
            <div className="member">
              <img src={userImage} alt="" />
            </div>
            <h3>Easy Set Up</h3>
          </div>
          <div className="single-member">
            <div className="member">
              <img src={userImage} alt="" />
            </div>
            <h3>Easy Set Up</h3>
          </div>
          <div className="single-member">
            <div className="member">
              <img src={userImage} alt="" />
            </div>
            <h3>Easy Set Up</h3>
          </div>
        </div>
      </div>

      <div className="footer">
        <p><Link to="/policy">Terms and conditions</Link></p>
        <div>
          <i className="fas fa-envelope"></i>
          <i className="fas fa-rss"></i>
          <i className="fas fa-laptop-code"></i>
          <i className="fas fa-bolt"></i>
        </div>
      </div>

    </div>
    )
}

export default Home
