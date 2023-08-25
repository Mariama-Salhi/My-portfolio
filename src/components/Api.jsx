import React from "react";
import "./Api.css";
import githubIcon from "/images/github-icon.png";
import linkedinIcon from "/images/linkedin-icon.png";
import instagramIcon from "/images/instagram-icon.png";
import myPhoto from "/images/my-photo.png";
import myPhoto2 from "/images/my-photo2.png";

function Api() {
  const aboutMeData = {
    description:
    "Passionate tech enthusiast and creative developer. I blend technical expertise with artistic vision to bring digital experiences to life. My creativity shines in designing intuitive, visually stunning interfaces that deliver exceptional user experiences. Transforming ideas into reality through code is my forte. Need a fresh perspective? Let's create together! Im ready  ",
    socialMedia: [
      { name: "GitHub" },
      { name: "LinkedIn" },
      { name: "Instagram" },
    ],
  };
  
  return (
    <div className="api-container">
      <>
        <img class="left-image" src={myPhoto} alt="My Photo" />
        <img class="right-image" src={myPhoto2} alt="My Photo" />

        <h2>About Me</h2>
        

        <p>{aboutMeData.description}</p>
        <ul className="social-media-list">
          {aboutMeData.socialMedia.map((social) => (
            <li key={social.name}>
              {social.name === "GitHub" && (
                <img
                  src={githubIcon}
                  alt={social.name}
                  className="social-media-icon"
                />
              )}
              {social.name === "LinkedIn" && (
                <img
                  src={linkedinIcon}
                  alt={social.name}
                  className="social-media-icon"
                />
              )}
              {social.name === "Instagram" && (
                <img
                  src={instagramIcon}
                  alt={social.name}
                  className="social-media-icon"
                />
              )}
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default Api;



