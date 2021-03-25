import React, { Component } from 'react'
import axios from 'axios';
import { ChatRoomList } from '../components/ChatRoomList'
import { SearchBar } from '../components/SearchBar'


export default class MainContainer extends Component {
    state = {
        chatRooms: [],
        initialChatRooms: []
    }
    filterList(event){
       
        
        var updatedList = this.state.initialChatRooms;
        console.log(updatedList)
        updatedList = updatedList.filter((chat) =>{
            
          return chat.roomName.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
  
        this.setState({chatRooms: updatedList});
      }
    componentDidMount() {
        console.log("mounted")
        axios.get(`http://35.174.114.134:3000/interceptor/chatrooms`)
            .then(res => {
                const chatRooms = res.data;
                this.setState({ chatRooms:chatRooms,initialChatRooms:chatRooms});
            })
    }
    render() {

        let {chatRooms} = this.state;
        const hasChatRooms = () => {
            if(chatRooms.length === 0){
                return <div className="card m-5 text-lg cursor-pointer border border-gray-400 rounded-lg">

                <h2>No ChatRooms Found</h2>
              </div>
            }else{
                return <ChatRoomList chatRooms={chatRooms} />
            }
        }

        return (
            <div class="">
              <div className="container mx-auto"> 

              <input type="search" class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" placeholder="Search by ChatRoom Name..."  onChange={this.filterList.bind(this)}/>
              </div>
              <h2>chat room list</h2>
                {hasChatRooms()}
            </div>
        )
    }
}
