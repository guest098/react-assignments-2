import React, { useState } from "react";
import './ProfileList.css';
import logo from '../images/image2.jpg';
import logo1 from '../images/image2.webp';
const profileData=[
  {
    id:1,
    image:logo,
    name:'Jeffrey Abrams',
    age:51,
    profession:'Film Director, Producer',
    rate:'€14/hour',
    location:'New York, United States',
    description:'Abrams was born in New York City and raised in Los Angeles.',
    status:'Online',
    lastseen:null
  },
  {
    id:2,
    image:logo1,
    name:'Baltasar Kormakur',
    age:52,
    profession:'Actor, Film Director',
    rate:'€9/hour',
    location:'Reykjavik, Iceland',
    description:'Icelandic actor, theater and film director, and film producer.',
    status:'Offline',
    lastseen:'17 minutes ago'
  }
]
const ProfileCard=({profile})=>{
  const [isStared,setIsStared]=useState(false);
  const handleClick=()=>{
    if(profile.id===2){
      setIsStared(!isStared);
    }
  };
  return (
      <div className="card">
         <div className="profile-image">
          <img src={profile.image} alt={profile.name}/>
             {profile.id===2 && (<div className={`star-below-image ${isStared ? "gold":""}`}onClick={handleClick}>★</div>)}
         </div>
         <h3>{profile.profession}</h3>
         <p className="rate">{profile.rate}</p> 
         <div className="profile-info">      
          <div className="profile-details">
          <p className="name">{profile.name}, {profile.age}</p>
          <p className="location">
            <span className="location-icon">
              <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
            </span>
            {profile.location}
          </p>
          <p className="description">{profile.description}</p>
         </div>
         <div className="buttons">
          <button className="btn-outline">VIEW CV</button><br/>
          <button className="btn-primary">MAKE OFFER</button>
         </div>
         <div className="status">
          {profile.status==="Online"?(<h3 className="onlinetext"><span className="online">●&nbsp;</span>Online</h3>):(<span className="offline">Last Seen:{profile.lastseen}</span>)}
         </div>
         </div>
         </div>
  );
};
const ProfileList=()=>{
     return (
        <div className="profile-list">
          {profileData.map(profile=>(
            <ProfileCard key={profile.id} profile={profile}/>
          ))}
        </div>
     );
};
export default ProfileList;