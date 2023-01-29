import React from "react";

interface ExploreNavsProps {
  title: string;
}

export const ExploreNavs: React.FunctionComponent<ExploreNavsProps> = ({
  title,
}) => {
  return (
    <div>
      <p>
        Hello <b>{title}</b>!
      </p>
    </div>
  );
};

export default ExploreNavs;
