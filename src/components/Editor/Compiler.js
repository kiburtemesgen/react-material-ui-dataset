import { Box } from "@mui/system";
import React from "react";
import Editor from "./Editor";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RunOptions from "./RunOptions";
import RunButtons from "./RunButtons";
import { HelpOutlineOutlined } from "@mui/icons-material";

const Compiler = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
            backgroundColor: "#2c3a47",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: '1px solid grey'
        }}
      >
        <Box sx={{color: '#c6cbcf'}}>definitions /1_simple_examples/dataset_2_with_ref.sql</Box>
        <button
          style={{
            color: "white",
            backgroundColor: "grey",
            padding: "4px 8px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Save
        </button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Item sx={{ width: "70%", backgroundColor: "#2c3a47", paddingTop: '15px' }}>
          <Editor></Editor>
        </Item>

        <Item
          sx={{
            width: "30%",
            backgroundColor: "#2c3a47",
            borderLeft: "1px solid grey",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Item
              sx={{
                color: "#c6cbcf",
                textAlign: "center",
                padding: '10px',
                width: "50%",
                fontWeight: 'bold',
                borderBottom: '2px solid white'
              }}
            >
              Outline
            </Item>
            <Item
              sx={{
                color: "#c6cbcf",
                textAlign: "center",
                width: "50%",
                padding: '10px',

           
              }}
            >
              Documentation
            </Item>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "spaceBetween",
            }}
          >
            <Box
              sx={{
                padding: "0 10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <HelpOutlineOutlined
                style={{ color: "#cfa304" }}
              ></HelpOutlineOutlined>
              <Item
                sx={{
                  color: "#cfa304",
                  padding: "5px",
                }}
              >
                No Compilation issue
              </Item>
            </Box>

            <Box
              sx={{
                padding: "0 10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  padding: "5px 0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    color: "white",
                    backgroundColor: "#24c8d1",
                    padding: "0 4px",
                    marginRight: "5px",
                    borderRadius: "10px",
                  }}
                >
                  table
                </Box>
                <Item
                  sx={{
                    color: "#c6cbcf",
                    padding: "5px",
                  }}
                >
                  dataset_2_with_ref
                </Item>
              </Box>
              <MoreHorizIcon style={{ color: "grey" }} />
            </Box>

            <RunOptions title="Dependencies"></RunOptions>
            <RunOptions title="Compiler"></RunOptions>
            <RunOptions title="Query"></RunOptions>

            <RunButtons />
          </Box>
        </Item>
      </Box>
    </Box>
  );
};

export default Compiler;

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        ...sx,
      }}
      {...other}
    />
  );
}
