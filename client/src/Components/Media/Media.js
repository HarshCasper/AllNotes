import React from "react";
import { Media } from "reactstrap";
import usersData from "../../Data/profileData.json";
import "./Media.css";

var notesList = usersData.notes;

const Example = () => {
  return (
    <div className="container">
      <div className="row">
        {notesList.map((post) => {
          return (
            <div key={post.id} className="col-12">
              <Media>
                {/* <Media left href="#">
              <Media
                object
                data-src="holder.js/64x64"
                alt="Generic placeholder image"
              />
            </Media> */}
                <Media body>
                  <Media heading>
                    {post.topic} . <small>{post.subject}</small>
                  </Media>
                  {post.description}
                  <br />
                  <a className="view-more" href="#">
                    {" "}
                    View More{" "}
                    <span className="fa fa-arrow-right fa-lg"> </span>
                  </a>
                </Media>
              </Media>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Example;
