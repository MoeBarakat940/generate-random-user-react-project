
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
function App() {

  const [profilePic, setProfilePic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU");
  const [gender, setGender] = useState("");
  const [fNAme, setFNAme] = useState("");
  const [LNAme, setLName] = useState("");
  const [age, setAge] = useState("");
  

  
  const fetchData = () => {
    Axios.get('https://randomuser.me/api/').then((res) => {
      setFNAme(res.data['results'][0]['name']['first']);
      setLName(res.data['results'][0]['name']['last'])
      setGender(res.data['results'][0]['gender']);
      setProfilePic(res.data['results'][0]['picture']['large']);
      setAge(res.data['results'][0]['dob']['age']);
    })
  }
  return (
    <div className="App">
      
      <div className='main'>
      <div className='box1'>
        <div className='pfp'>
          <img src={profilePic}/>
        </div>
      <div className='pName'>
        <p>Name: {fNAme} {LNAme}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
      </div>
      
      </div>
      
      <button onClick={fetchData}>Generate</button>
     
    </div>
  );
}

export default App;
