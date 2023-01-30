import React from "react";
import { ExploreLoginFields } from "./ExploreLoginFields";
import ExploreNavs from "./ExploreNavs";
import ExploreRepositories from "./ExploRepositories";
import { useExplore } from "./useExplore";

export const ExplorePage = () => {
  const [userName, setUserName] = React.useState("");
  const [token, setToken] = React.useState("");
  const [searchString, setSearchString] = React.useState("");
  const [itemPerPage, setItemPerPage] = React.useState(5);

  const { user, repositories, repoCount } = useExplore(
    userName,
    token,
    searchString,
    itemPerPage
  );

  const onUserChange = (usr: string) => setUserName(usr);
  const onTokenChange = (token: string) => setToken(token);
  const onSearchChange = (search: string) => setSearchString(search);
  const onItemPerPageChange = (iPP: number) => setItemPerPage(iPP);

  return (
    <div>
      {!user ? (
        <ExploreLoginFields
          onUserChange={onUserChange}
          onTokenChange={onTokenChange}
        />
      ) : (
        <>
          <ExploreNavs
            title={user}
            onSearchChange={onSearchChange}
            onItemPerPageChange={onItemPerPageChange}
            pageCount={repoCount}
          />
          <ExploreRepositories repositories={repositories} />
        </>
      )}
    </div>
  );
};

export default ExplorePage;
