import React, { Component } from 'react';
import './post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="messages-container">
                <ul className="messages">
                    {this.props.tweets.map((tweet, index) => (
                        <li key={index}>{tweet}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Post;
