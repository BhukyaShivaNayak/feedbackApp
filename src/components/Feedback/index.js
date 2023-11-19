import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedbackStatus: true}

  givenFeedback = () => {
    this.setState({
      feedbackStatus: false,
    })
  }

  render() {
    const {feedbackStatus} = this.state

    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {feedbackStatus ? (
          <div className="card">
            <h1>
              How Satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-item">
                  <button
                    className="button"
                    type="button"
                    onClick={this.givenFeedback}
                  >
                    <img
                      src={eachItem.imageUrl}
                      className="emoji"
                      alt={eachItem.name}
                    />
                  </button>
                  <p className="status">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card">
            <div className="feedback-card">
              <div className="upper">
                <img
                  src={loveEmojiUrl}
                  className="love-emoji"
                  alt="love emoji"
                />
                <h1>Thank You!</h1>
              </div>
              <p className="description">
                We will use your feedback to improve our customer service
                support
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
