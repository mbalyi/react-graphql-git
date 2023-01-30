import React from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "usehooks-ts";

interface ExploreNavsProps {
  title: string;
  pageCount: number;
  onSearchChange: Function;
  onItemPerPageChange: Function;
}

export const ExploreNavs: React.FunctionComponent<ExploreNavsProps> = ({
  title,
  pageCount,
  onSearchChange,
  onItemPerPageChange,
}) => {
  const [searchString, setSearchString] = React.useState("");
  const [itemPerPage, setItemPerPage] = React.useState(5);

  const searchStringChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setSearchString(event.target.value);
  const itemPerPageChange = (event: { target: { value: any } }) =>
    setItemPerPage(Number(event.target.value));

  const debouncedSearchString = useDebounce(searchString, 300);
  const debouncedItemPerPage = useDebounce(itemPerPage, 100);

  React.useEffect(() => {
    onSearchChange(debouncedSearchString);
  }, [debouncedSearchString, onSearchChange]);

  React.useEffect(() => {
    onItemPerPageChange(debouncedItemPerPage);
  }, [debouncedItemPerPage, onItemPerPageChange]);

  return (
    <div>
      <p>
        Hello <b>{title}</b>!
      </p>
      <TextField
        label="Search"
        variant="standard"
        value={searchString}
        onChange={searchStringChange}
      />
      <TextField
        label="Show"
        variant="standard"
        type="number"
        value={itemPerPage}
        onChange={itemPerPageChange}
      />
      <p>Total: {pageCount}</p>
    </div>
  );
};

export default ExploreNavs;
