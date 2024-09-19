import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import { ChangeEvent, useContext } from "react";
import { UriContextType } from "./types";
import FormControl from "@mui/joy/FormControl";
import Divider from "@mui/joy/Divider";
import UriContext from "./UriContext";
import UserList from "./UserList";
import validateInputValue from "./helpers/validateInputValue";

export default function Sidebar() {
  const { uri, setUri }: UriContextType = useContext(UriContext);
  const error: boolean = !validateInputValue(uri);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUri(event.target.value);
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: "sticky",
        transition: "transform 0.4s, width 0.4s",
        height: "100dvh",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <FormControl error={error}>
        <Input value={uri} onChange={changeHandler} />
      </FormControl>
      <Divider></Divider>
      <UserList></UserList>
    </Sheet>
  );
}
