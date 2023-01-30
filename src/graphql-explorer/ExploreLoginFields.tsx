import { TextField } from "@mui/material";
import React from "react";
import { useDebounce } from "usehooks-ts";

interface ExploreLoginFieldsProps {
  onUserChange: Function;
  onTokenChange: Function;
}

export const ExploreLoginFields: React.FunctionComponent<
  ExploreLoginFieldsProps
> = ({ onUserChange, onTokenChange }) => {
  const [user, setUser] = React.useState("");
  const [token, setToken] = React.useState("");
  const debouncedUser = useDebounce(user, 300);
  const debouncedToken = useDebounce(token, 300);

  const userChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setUser(event.target.value);
  const tokenChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setToken(event.target.value);

  React.useEffect(() => {
    onUserChange(debouncedUser);
  }, [debouncedUser, onUserChange]);

  React.useEffect(() => {
    onTokenChange(debouncedToken);
  }, [debouncedToken, onTokenChange]);

  return (
    <>
      <TextField
        label="Git username"
        variant="standard"
        value={user}
        onChange={userChange}
      />
      <TextField
        label="Personal access token"
        variant="standard"
        value={token}
        onChange={tokenChange}
      />
    </>
  );
};
