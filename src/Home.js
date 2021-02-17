import React from 'react'
import Count from './Count'
import userImage from './images/logo.jpeg'
import team from './images/person.jpg'

import { Link } from 'react-router-dom'
import './App.css'


function Home() {
    return (
      <div className="app">
        <main>
          <section className="banner">
            <div className="info">
              <div className="container">
                <img src={userImage} alt="" className="logo" />
                <div className="content">
                  <h1>SnapKnow is coming soon</h1>
                  <p>Welcome to Snapknow! Snap! Learn! Grow!</p>
                  <p>
                    The educational app that teaches everything you need to know
                    in a fun and easy way
                  </p>
                  <p>
                    You can learn about things captured with your phone camera
                    or import from your phone gallery.
                  </p>
                  <p>
                    Learning has never been so much fun, If you want to know
                    more about an object just snap it!
                  </p>
                </div>
                <div className="icons">
                  <div className="f">
                    <i className="icon-facebook"></i>
                  </div>
                  <div className="t">
                    <i className="icon-twitter"></i>
                  </div>
                  <div className="p">
                    <i className="icon-pinterest"></i>
                  </div>
                  <div className="b">
                    <i className="icon-behance"></i>
                  </div>
                  <div className="r">
                    <i className="icon-reddit"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <Count />
            </div>
          </section>

          <section className="features">
            <div className="image"></div>
            <div className="container">
              <h2>Amazing Features</h2>
              <div className="feature-box">
                <div className="feature">
                  <h3>Easy Set Up</h3>
                  <p>
                    SnapKnow App is build with an intuitive and user friendly
                    interface
                  </p>
                </div>
                <div className="feature">
                  <h3>On The Go</h3>
                  <p>
                    SnapKnow can be used at a anytime and anywhere, with
                    SnapKnmow you can learn new things while being active or
                    busy.
                  </p>
                </div>
                <div className="feature">
                  <h3>Social Connect</h3>
                  <p>
                    Users can connect with each other and share the knowledge
                    that they’ve gained amidst other social interactions .
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="team">
            <h2>Team Members</h2>
            <div className="container">
              <div className="members">
                <div className="member">
                  <div className="image">
                    <img src={team} alt="" />
                  </div>
                  <h6>Andrew Gabriel</h6>
                </div>
                <div className="member">
                  <div className="image">
                    <img src={team} alt="" />
                  </div>
                  <h6>Andrew Gabriel</h6>
                </div>
                <div className="member">
                  <div className="image">
                    <img src={team} alt="" />
                  </div>
                  <h6>Andrew Gabriel</h6>
                </div>
                <div className="member">
                  <div className="image">
                    <img src={team} alt="" />
                  </div>
                  <h6>Andrew Gabriel</h6>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>
            <Link to="/policy">Terms and condition</Link>
          </p>
        </footer>
      </div>
    );
}

export default Home
