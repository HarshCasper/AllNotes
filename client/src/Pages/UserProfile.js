import React from "react";
import Media from "../Components/Media/Media";
import usersData from "../Data/profileData.json";

import "../Styles/UserProfile.css";


var usersList = usersData.users;
var statsList = usersData.stats;

function Profile() {
  return (
    <div className="container home">
      <div
        className="row justify-content-center"
        style={{ marginBottom: "40px", marginTop: "100px" }}
      >
        <div className="mb-5 col-12 col-md-4  ">
          {usersList.map((post) => {
            return (
              <div key={post.id} className="name-insti">
                <h3>{post.name}</h3>
                <h5>{post.institute}</h5>
              </div>
            );
          })}
          {usersList.map((post) => {
            return (
              <div key={post.id} className=" mt-5 mb-2 profile-pic  ">
                <img
                  className="mypic"
                  src= {post.profile_pic}
                  alt="profile pic"
                />
              </div>
            );
          })}

          
          {statsList.map((post) => {
            return (
              <div key={post.id} className="follow3 col-auto">
                <span>
                  <button className="follow1">
                    <a className="links" href="#">
                      {post.following} Following
                    </a>
                  </button>
                  <button className="follow2">
                    <a className="links" href="#">
                      {post.followers} Followers
                    </a>
                  </button>
                </span>
              </div>
            );
          })}
          

          
          {usersList.map((post) => {
            return (
              <div  key={post.id} className="mt-3 card card-body bg-light quote1">
              <blockquote class="blockquote">
                <p class="mb-0">
                  "{post.bio}"
                </p>
              </blockquote>
            </div>
            );
          })}
          <div className="mt-3 stats">
            {statsList.map((post) => {
              return (
                <ul
                  key={post.id}
                  className="mt-1 list-unstyled justify-content-center col-auto align-self-center"
                >
                  <li className="mb-2">
                    <i class="fa fa-thumbs-up fa-lg">&nbsp;</i>  Total Upvotes:{" "}
                    <span> &nbsp;&nbsp; {post.total_upvotes} </span>
                  </li>
                  <li className="mb-2">
                    <i class="fa fa-bookmark fa-lg">&nbsp;</i> Notes Shared:
                    <span> &nbsp;&nbsp; {post.notes_shared}</span>
                  </li>
                  <li className="mb-2">
                    <i class="fa fa-trophy fa-lg">&nbsp;</i> Contributed To:
                    <span> &nbsp;&nbsp; {post.contributed_to} </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div
          className="mb-5 mt-15 offset-md-1 col-12 col-md-7"
          style={{ marginTop: "100px" }}
        >
          <Media />
        </div>
      </div>
    </div>
  );
}

export default Profile;
