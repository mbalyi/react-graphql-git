import React from "react";
import axios from "axios";
import { exploreQuery } from "./explorer-query";

export const useExplore = (
  username: string,
  token: string,
  searchString: string,
  itemPerPage: number
) => {
  const [user, setUser] = React.useState("");
  const [repositories, setRepositories] = React.useState([]);
  const [repoCount, setRepoCount] = React.useState(0);

  const explore = React.useCallback(() => {
    axios
      .post(
        "https://api.github.com/graphql",
        { query: exploreQuery(username, searchString, itemPerPage) },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((result) => {
        const name = result.data.data.viewer.name;
        const repos = result.data.data.search.edges;
        const repositoryCount = result.data.data.search.repositoryCount;
        setUser(name);
        setRepositories(repos);
        setRepoCount(repositoryCount);
      });
  }, [username, token, searchString, itemPerPage]);

  React.useEffect(() => {
    username && token && explore();
  }, [explore, username, token]);

  return { user, repositories, repoCount };
};
