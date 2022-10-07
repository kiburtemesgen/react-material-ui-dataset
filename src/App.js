// import "./App.css";
import { Box, Container, Grid } from "@mui/material";

import { FileNavigation } from "./components/FileNavigation/FileNavigation";

import Compiler from "./components/Editor/Compiler";
import Result from "./components/Result/Result";
import ConfigFile from "./components/FileNavigation/ConfigFile";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{}}></Box>
          <Grid container spacing={0}>
            <Grid style={{ backgroundColor: "#596e7a" }} item xs={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#596e7a",
                }}
              >
                <h1 style={{ color: "white", paddingLeft: "10px" }}>Files</h1>
                <ConfigFile label="dataform" />
                <ConfigFile label="package-lock" />
                <ConfigFile label="package" />

                <FileNavigation />
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Compiler />
              <Result />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
