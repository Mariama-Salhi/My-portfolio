import React, { useState, useEffect } from "react";
import "./Api.css";
import githubIcon from "/images/github-icon.png";
import linkedinIcon from "/images/linkedin-icon.png";
import instagramIcon from "/images/instagram-icon.png";
import myPhoto from "/images/my-photo.png";
import myPhoto2 from "/images/my-photo2.png";


function Api() {
  const [aboutMeData, setAboutMeData] = useState(null);

  useEffect(() => {
    fetch("https://react-2dc9c-default-rtdb.firebaseio.com/About%20me.json")
      .then((response) => response.json())
      .then((data) => setAboutMeData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
<div className="api-container">
  {aboutMeData && (
    <>
    <img  class="left-image" src={myPhoto} alt="My Photo" />
    <img  class="right-image" src={myPhoto2} alt="My Photo" />
    
    <h2>About Me</h2>
    
    
     {/* <h2>{aboutMeData.name}</h2> */}
      
      <p>{aboutMeData.description}</p>
      <ul className="social-media-list">
        {aboutMeData.socialMedia.map((social) => (
          <li key={social.name}>
            {social.name === "GitHub" && (
              <img src={githubIcon} alt={social.name} className="social-media-icon"/>
            )}
            {social.name === "LinkedIn" && (
              <img src={linkedinIcon} alt={social.name} className="social-media-icon"/>
            )}
            {social.name === "Instagram" && (
              <img src={instagramIcon} alt={social.name} className="social-media-icon"/>
            )}
          </li>
        ))}
         
      </ul>
    </>
  )}
</div>
);
}

export default Api;
