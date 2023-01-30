import React from "react";
import { Repository } from "../types/repository";

interface ExploreRepositoriesProprs {
  repositories: Repository[];
}

export const ExploreRepositoriesComponent: React.FunctionComponent<
  ExploreRepositoriesProprs
> = ({ repositories }) => {
  return (
    <>
      {repositories.map((repository: any) => (
        <div key={repository.node.id}>
          <p>{repository.node.name}</p>
          <p>{repository.node.viewerSubscription}</p>
        </div>
      ))}
    </>
  );
};

export const ExploreRepositories = React.memo(ExploreRepositoriesComponent);
export default ExploreRepositories;
