import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "@fontsource/space-mono";

//This component displays the user account details
//All user details are taken from the searchBar and are displayed below
function Details({ results, loading }) {
  return (
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div>
          <div className="userDemographicsContainer">
            <img
              src={results.account.avatar_url}
              alt="https://pixabay.com/get/g19915a7c7b0f690265f8b274c710036b7f97a8113258ba99a72845844b462ba54c483ab23c1032611249324904d8367998c36c6ebd0c78f22aad627a5744c7ec2c9f0f8a53c512a5059f28d88e23bea8_640.png"
              className="userPhoto"
            />
            <div className="userDataBox">
              <a className="userName">{results.account.name}</a>
              <a className="userID"></a>
              <a className="userJoinedData">
                Joined: {results.account.created_at}
              </a>
            </div>
          </div>
          <p className="userAboutMe">{results.account.bio}</p>
          <div className="userGithubDataBox">
            <div className="gitDataTitle">
              Repos
              <a className="number">{results.account.public_repos}</a>
            </div>
            <div className="gitDataTitle">
              Followers
              <a className="number">{results.account.followers}</a>
            </div>
            <div className="gitDataTitle">
              Following
              <a className="number">{results.account.following}</a>
            </div>
          </div>
        </div>
      )}
      <br />
    </div>
  );
}

export default Details;
