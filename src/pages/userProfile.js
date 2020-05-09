import React, { Fragment } from "react";

const userProfile = () => {

  const currentUser = window.localStorage.getItem("email");
  const data = {currentUser};

  const config = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type":"application/JSON" 
    },
    body: JSON.stringify(data)
  }

  fetch("https://upo24.sse.codesandbox.io/user/profile", config)
  .then(response => response.json());
  

  return(
    <Fragment>
      <div className="container">
      <h2>Profile Page</h2> 
      </div>
    </Fragment>
  )
};

export default userProfile;

