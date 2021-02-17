import React from 'react'
class Example extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 172800 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
      let day = Math.floor(secs / (24 * 60 *60))

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
      "d": day,
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      this.startTimer()
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return(
          <div className="counter">
                <div className="card">
                  <h3>{this.state.time.d}</h3>
                  <span>days</span>
                </div>
                <div className="card">
                  <h3>{this.state.time.h}</h3>
                  <span>hours</span>
                </div>
                <div className="card">
                  <h3>{this.state.time.m}</h3>
                  <span>min</span>
                </div>
                <div className="card">
                  <h3>{this.state.time.s}</h3>
                  <span>sec</span>
                </div>
              </div>

    );
  }
}

export default Example