import React, { Component } from "react";
import './Ball.css';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answer: [],
        };
    }

    _handleChange = (answer) => {
        this.setState({
            question: answer,
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { question } = this.state;
        const answerData = await GetData(`https://8ball.delegator.com/magic/JSON/${ question }`);
        this.setState({
            answer: [...this.state.answer, answerData],
            question: "",
    })}


    
    render() {
        const { question } = this.state;
        return (
          <div>
            <div id="content">
                <h1>Magic 8 ball</h1>
                <p id="info">Type your question and click on the Magic 8 Ball</p>
                    <input value={question} type="text" id="question" onChange={(event) => {
                        this._handleChange(event.target.value);
                      }}
                    />
                    <button type="submit" onClick={this._handleSubmit}>Search
                </button>
                <div id="eight-ball" class="eight-ball">
                <div class="answer">
                <p id="eight">8</p>
                <p id="answer"></p>
                </div>
                </div>
            </div>
          </div>
        );
      }
    }

    const GetData = async (url) => {
        const response = await fetch(url);
        const data = response.json();
        return data;
    }  
    
    export default SearchForm;