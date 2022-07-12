import { useAuth0 } from "@auth0/auth0-react";
import React, { ShowIf } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <ShowIf condition={user.preferred_username}>
            <h4>{user.preferred_username}</h4>
        </ShowIf>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;