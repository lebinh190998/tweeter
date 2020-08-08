import React, { Component } from 'react';
import InputForm from '../inputForm/inputForm';
import Post from '../post/post';
import './tweeter.css';

class Tweeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }

    updateTweet(msg) {
        this.setState({
            tweets: msg
        })
    }

    render() {
        return (
            <div className="tweeter">
                <div className="tweeter-header">
                    <InputForm updateTweet={this.updateTweet.bind(this)}/>
                </div>
                <div className="tweeter-body">
                    {this.state.tweets.length > 0 &&  <Post tweets={this.state.tweets}/>}
                </div>
            </div>
        );
    }
}

export default Tweeter;
