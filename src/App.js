
import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
const [userDetails,setUserDetails]=useState();

const user=async()=>{
  try {
    const userDetail=await axios.get("https://randomuser.me/api")
  console.log(userDetail.data.results[0]);
    setUserDetails(userDetail.data.results[0]);
  } catch (error) {
    console.log(error)
  }
}

console.log(userDetails);

useEffect(() => {
  user();
},[])


  return (
    <div className="App">
{userDetails && <img src={userDetails.picture.large}/>}
    </div>
  );
}

export default App;
