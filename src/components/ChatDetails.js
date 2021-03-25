import React, { Component } from 'react'
import axios from 'axios';

export default class ChatDetails extends Component {
  state = {
    chats: []
  }

  componentDidMount() {
    var chatroomID = this.props.match.params.id
    axios.get(`http://35.174.114.134:3000/interceptor/chat?chatroom=${chatroomID}`)
      .then(res => {
        console.log(res)
        const chats = res.data.message;
        this.setState({ chats });
      })
  }
  render() {
    let { chats } = this.state;
    let chatroom = this.props.match.params.id;
console.log(chats.length)
    const chatlist = () => {
      if (chats.length === 0) {
        return <div className="card m-5 text-lg cursor-pointer border border-gray-400 rounded-lg">

          <h2>No chats has been found for {chatroom}</h2>
        </div>
      } else {
      return  chats.map(message =>

          <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
            <div class="m-3">
              <h2 class="text-lg mb-2">User: {message.from.split('.')[0]}
                <span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">{message.delay_stamp}</span></h2>
              <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{message.body}.</p>
            </div>
          </div>
        )
      }
    }
    return (
      <div class="container mt-4 mx-auto">
        <h2>chats list from: {chatroom}</h2>
        {chatlist()}
      </div>
    )
  }
}

