import { Dispatch, SetStateAction } from "react";

export type UriContextType = {
    uri: string;
    setUri: Dispatch<SetStateAction<string>>;
}