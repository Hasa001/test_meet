import {StreamVideoClient } from '@stream-io/video-react-sdk';
const apiKey = 'mvxc2ac3sygv'; // the API key can be found in the "Credentials" section
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSGFyc2hpdCJ9.kWcdQM0kEKBW6bGO8NMbOAMc4P-v-ALeRAobeGZXIKM'
const userId = 'Harshit'; // the user id can be found in the "Credentials" section
const callId = 'firstcall'; // the call id can be found in the "Credentials" section

const user = {
  id: userId,
  name: username,
  image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);

export {client,call}