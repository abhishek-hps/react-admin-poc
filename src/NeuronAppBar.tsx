// NeuronAppBar.tsx
import { AppBar } from "react-admin";
import { Box, Typography, IconButton, Switch, Tabs, Tab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

export interface NeuronAppBarProps {
  onMenuClick: () => void;
}

const NeuronAppBar = ({ onMenuClick }: NeuronAppBarProps) => {
  return (
    <div
   
      style={{
        backgroundColor: "red",
      
        height: 64,
        position: "fixed",
       
        width:'100%'
      }}
    >
      
        {/* Left: Hamburger + Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* <IconButton onClick={onMenuClick} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" sx={{ color: "#9f7aea", fontWeight: "bold" }}>
            HUSK.
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Husk Power Systems
          </Typography>
        </Box>

       

        {/* Right: Flag + Profile + Switch */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
            <img src="https://flagcdn.com/in.svg" alt="India" width={24} />
            <Typography sx={{ color: "white", fontSize: 14 }}>India</Typography>
          </Box>
          <IconButton>
            <PersonIcon sx={{ color: "white" }} />
          </IconButton>
          <Switch />
      
   
    </div>
  );
};

export default NeuronAppBar;
