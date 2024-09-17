import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import MessagesPane from "./MessagesPane";
import Sidebar from "./Sidebar";
import { UriContext } from "./UriContext";
import { useState } from "react";
import { baseUrl, defaultUri } from "./const";
import { Issue, UriContextType, Comment } from "./types";
import useFetch from "./useFetch";
import { UseInfiniteQueryResult } from "@tanstack/react-query";

function App() {
  const [uri, setUri] = useState<string>(defaultUri);
  const issue: UseInfiniteQueryResult<Issue, any> = useFetch<Issue>({ url: `${baseUrl}${uri}` });
  const comments: UseInfiniteQueryResult<Comment[], any> = useFetch<Comment[]>({ url: issue.data?.comments_url }, { enabled: issue.isFetched });
  const uriContextObj: UriContextType = {
    uri,
    setUri,
    comments
  }

  return (
    <UriContext.Provider value={uriContextObj}>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Box component="aside" sx={{ width: 300 }}>
            <Sidebar />
          </Box>
          <Box component="main" sx={{ flex: 1 }}>
            <MessagesPane issue={issue} comments={comments} />
          </Box>
        </Box>
      </CssVarsProvider>
    </UriContext.Provider>
  );
}

export default App;
