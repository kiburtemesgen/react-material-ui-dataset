import * as React from "react";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FileComponent from "./FileComponent";
import StyledTreeItem from "./StyledTreeItem";




export function FileNavigation() {
  return (
    <TreeView
      aria-label="tree"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      // defaultEndIcon={<div style={{ width: 24 }} />}
      // sx={{ height: 264, flexGrow: 1, maxWidth: 700, overflowY: "auto" }}
    >
      <StyledTreeItem nodeId="1" labelText={<Box sx={{color: '#c6cbcf'}}>models</Box>} labelIcon={FolderIcon}>
        <StyledTreeItem
          nodeId="2"
          labelText={
            <Box sx={{color: '#c6cbcf'}}>1_simple_examples</Box>
          }
          labelIcon={FolderIcon}
          color="grey"
          bgColor="#2b3a47"
        >
          <StyledTreeItem
            nodeId="3"
            labelText={
              <FileComponent
                language="SQL"
                label="dataset_1"
                bgColor="#4ca173"
              />
            }
          ></StyledTreeItem>
          <StyledTreeItem
            nodeId="4"
            labelText={
              <FileComponent
                language="SQL"
                label="dataset_1_with_ref"
                bgColor="#4ca173"
              />
            }
          ></StyledTreeItem>
        </StyledTreeItem>

        <StyledTreeItem
          nodeId="5"
          labelText={
            <Box sx={{color: '#c6cbcf'}}>2_advanced_examples</Box>
          }
          labelIcon={FolderIcon}
          color="grey"
          bgColor="#2b3a47"
        >
          <StyledTreeItem
            nodeId="6"
            labelText={
              <FileComponent
                language="SQL"
                label="dataset_3_increa.."
                bgColor="#4ca173"
              />
            }
          ></StyledTreeItem>
          <StyledTreeItem
            nodeId="7"
            labelText={
              <FileComponent
                language="JS"
                label="dataset_4_increase..."
                bgColor="#f0db4f"
              />
            }
          ></StyledTreeItem>
        </StyledTreeItem>

        <StyledTreeItem
          nodeId="9"
          labelText={
            <Box sx={{color: '#c6cbcf'}}>3_operations_and_as...</Box>
          }
          labelIcon={FolderIcon}
        >
          <StyledTreeItem
            nodeId="10"
            labelText={
              <FileComponent
                language="ops"
                label="grant_acess"
                bgColor="#24c8d1"
              />
            }
          ></StyledTreeItem>
          <StyledTreeItem
            nodeId="11"
            labelText={
              <FileComponent
                language="assert"
                label="simple_assertion"
                bgColor="#ed9145"
              />
            }
          ></StyledTreeItem>
        </StyledTreeItem>
      </StyledTreeItem>

      <StyledTreeItem nodeId="12" labelText={<Box sx={{color: '#c6cbcf'}}>model_2</Box>} labelIcon={FolderIcon} />
    </TreeView>
  );
}
