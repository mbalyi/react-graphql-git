import React from "react";
import { ExploreLoginFields } from "./ExploreLoginFields";
import ExploreNavs from "./ExploreNavs";
import { useExplore } from "./useExplore";

export const ExplorePage = () => {
  const [userName, setUserName] = React.useState("");
  const [token, setToken] = React.useState("");

  const { user, repositories } = useExplore(userName, token);

  const onUserChange = (usr: string) => setUserName(usr);
  const onTokenChange = (token: string) => setToken(token);

  return (
    <div>
      {!user ? (
        <ExploreLoginFields
          onUserChange={onUserChange}
          onTokenChange={onTokenChange}
        />
      ) : (
        <>
          <ExploreNavs title={user} />
          {repositories.map((repository: any) => (
            <div key={repository.node.id}>
              <p>{repository.node.name}</p>
              <p>{repository.node.viewerSubscription}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ExplorePage;
