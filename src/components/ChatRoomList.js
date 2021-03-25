import React from 'react'
import { useHistory } from 'react-router-dom';

export const ChatRoomList = (props) => {
    const history = useHistory();
    const handleClick = (roomName) => history.push(`/details/${roomName}`);
    return (
        <div class="container mx-auto" >
            
            {props.chatRooms.map(x => 
            <div className="bg-green-100 rounded-lg border shadow-lg p-10" onClick={()=>handleClick(x.roomName)}>
                <h2 className="font-bold">
                Room Name: {x.roomName}    
                </h2>
                <p>
                Room STopic: {x.subject} 
                </p>
            </div>)}
        </div>
    )
}
