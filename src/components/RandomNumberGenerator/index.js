import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  btnClick = () => {
    this.setState({random: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {random} = this.state
    return (
      <div className="mainBg">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button className="btn" type="button" onClick={this.btnClick}>
              Generate
            </button>
          </div>
          <p className="number">{random}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
