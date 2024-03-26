import React, { useState } from "react";
import { VideoCall } from "./VideoCall.jsx";
import   {StreamVideoClient} from '@stream-io/video-react-sdk';
export default function App() {
  const [callId, setCallId] = useState('');
  const [username, setUsername] = useState('');
  const [showVideoCall, setShowVideoCall] = useState(false);
  const[call,setCall] =useState(null);
  const[client,setClient] =useState(null)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const apiKey = 'mvxc2ac3sygv'; // the API key can be found in the "Credentials" section
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSGFyc2hpdCJ9.kWcdQM0kEKBW6bGO8NMbOAMc4P-v-ALeRAobeGZXIKM'
    const userId = 'Harshit'; // the user id can be found in the "Credentials" section

    const user = {
   id: userId,
   name: username,
   image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
     };

const client = new StreamVideoClient({ apiKey, user, token });
setClient(client);
const call = client.call('default', callId);
setCall(call);
call.join({ create: true });
    setShowVideoCall(true);
  }

  return (
    <div>
      {!showVideoCall ? (
        <form >
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Call Id" 
            name="callId" 
            value={callId} 
            onChange={(e)=> setCallId(e.target.value)} 
          />
          <button type="submit" onClick={handleFormSubmit}>Join Call</button>
        </form>
      ) : null}
      {showVideoCall && <VideoCall call={call} client={client} />}
    </div>
  );
}
