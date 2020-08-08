import React, { Component } from 'react';
import './inputForm.css';

class InputFrom extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
        };
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.inputValue !== ""){
            if(this.state.inputValue.length > 50){
                const splittedMsg = this.splitMsg(this.state.inputValue, 50);
                if(splittedMsg.length === 1){
                    alert("Invalid Input");
                }else{
                    this.props.updateTweet(splittedMsg);
                }
            }else{
                this.props.updateTweet([this.state.inputValue]);
            }
        }else{
            alert("Please type in your message");
        }
    }

    splitMsg(msg, size) {
        let splittedMsg = [];

        //Split string to words array
        const words = msg.split(/\s+/);

        //Fit words in line of size 50
        let line = "";
        for(let i = 0; i < words.length; i++){
            //last word
            if(i === words.length - 1){
                line += `${words[i]} `;
                splittedMsg.push(line);
            }
            else{
                if(line.length + words[i].length < size){
                    line += `${words[i]} `;
                }else{
                    splittedMsg.push(line);
                    line = `${words[i]} `;
                }
            }
        }

        //Append part indicators
        splittedMsg = splittedMsg.map((msg,index) => `${index+1}/${splittedMsg.length} ${msg}`);

        return splittedMsg;
    }
    returnTrue(msg) {
        return true;
    }

    render() {
        return (
            <div>
                <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                    <textarea className="status-bar" 
                        value={this.state.value} 
                        onChange={this.handleChange.bind(this)}
                        placeholder="What's on your mind?"
                    />
                    </label>
                    <input className="send-btn" type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}

export default InputFrom;
