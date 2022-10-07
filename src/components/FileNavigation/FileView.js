import TreeView from "@mui/lab/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StyledTreeItem from "./StyledTreeItem";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";




export function FileView() {
    return (
      <TreeView
        aria-label="tree"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
      >
        <StyledTreeItem nodeId="1" labelText={<Box sx={{color: '#c6cbcf'}}>datafrom_demo</Box>}>
          <StyledTreeItem
            labelText={<Box sx={{color: '#c6cbcf'}}>dataset_1</Box>}
            labelIcon={VisibilityIcon}
          ></StyledTreeItem>
          <StyledTreeItem
            labelText={<Box sx={{color: '#c6cbcf'}}>dataset_5_from_script_builder</Box>}
            labelIcon={VisibilityIcon}
          ></StyledTreeItem>
          <StyledTreeItem
            labelText={<Box sx={{color: '#c6cbcf'}}>dataset_3_incremental_data</Box>}
            labelIcon={VisibilityIcon}
          ></StyledTreeItem>
          <StyledTreeItem
            labelText={<Box sx={{color: '#c6cbcf'}}>dataset_4_incremental_snapshote</Box>}
            labelIcon={VisibilityIcon}
          ></StyledTreeItem>
          <StyledTreeItem
            labelText={<Box sx={{color: '#c6cbcf'}}>reporting_gb</Box>}
            labelIcon={VisibilityIcon}
          ></StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId="2" labelText={<Box sx={{color: '#c6cbcf'}}>datafrom_set2</Box>}>
          <StyledTreeItem></StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    );
  }