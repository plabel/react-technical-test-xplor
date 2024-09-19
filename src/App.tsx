import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import MessagesPane from "./MessagesPane";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { baseUrl, defaultUri } from "./const";
import { Issue, UriContextType, TimelineEvent } from "./types";
import useFetch from "./useFetch";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import UriContext from "./UriContext";

function App() {
  const [uri, setUri] = useState<string>(defaultUri);
  const issue: UseInfiniteQueryResult<Issue, any> = useFetch<Issue>({ url: `${baseUrl}${uri}` });
  const timelineEvents: UseInfiniteQueryResult<TimelineEvent[], any> = useFetch<TimelineEvent[]>(
    { url: issue.data?.timeline_url },
    { enabled: issue.isFetched },
  );
  const uriContextObj: UriContextType = {
    uri,
    setUri,
    timelineEvents,
    issue,
  };

  return (
    <UriContext.Provider value={uriContextObj}>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Box component="aside" sx={{ width: 300 }}>
            <Sidebar />
          </Box>
          <Box component="main" sx={{ flex: 1 }}>
            <MessagesPane />
          </Box>
        </Box>
      </CssVarsProvider>
    </UriContext.Provider>
  );
}

export default App;
