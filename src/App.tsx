import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import MessagesPane from "./MessagesPane";
import Sidebar from "./Sidebar";
import { UriContext } from "./UriContext";
import { useState } from "react";
import { defaultUri } from "./const";
import { UriContextType } from "./types";

function App() {
  const [uri, setUri] = useState<string>(defaultUri);
  const uriContextObj: UriContextType = {
    uri,
    setUri,
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
            <MessagesPane />
          </Box>
        </Box>
      </CssVarsProvider>
    </UriContext.Provider>
  );
}

export default App;
