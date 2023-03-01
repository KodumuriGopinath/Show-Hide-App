// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShow: false, lastIsShow: false}

  firstButtonClicked = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  lastButtonClicked = () => {
    this.setState(prevState => ({lastIsShow: !prevState.lastIsShow}))
  }

  render() {
    const {isShow} = this.state
    const {lastIsShow} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.firstButtonClicked}
            >
              Show/Hide Firstname
            </button>
            {isShow ? <p className="last-text-para">Joe</p> : null}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.lastButtonClicked}
            >
              Show/Hide Lastname
            </button>
            {lastIsShow ? <p className="last-text-para">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
