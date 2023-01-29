import React from "react";
import axios from "axios";
import { exploreQuery } from "./explorer-query";

export const useExplore = (username: string, token: string) => {
  const [user, setUser] = React.useState("");
  const [repositories, setRepositories] = React.useState([]);

  const explore = React.useCallback(() => {
    axios
      .post(
        "https://api.github.com/graphql",
        { query: exploreQuery(username) },
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
        setUser(name);
        setRepositories(repos);
      });
  }, [username, token]);

  React.useEffect(() => {
    username && token && explore();
  }, [explore, username, token]);

  return { user, repositories };
};
