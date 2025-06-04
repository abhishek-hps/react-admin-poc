import { Box, Typography, Tabs, Tab, Avatar, Switch, Menu, MenuItem, IconButton } from '@mui/material';
import { useState } from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import PersonIcon from '@mui/icons-material/Person';

const NeuronHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(2); // Example: 2 = "Customer Details"

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 1.5,
        ml:2,
        mr:2,
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e2633',
      }}
    >
      {/* Left: Logo */}
      <Typography variant="h6" sx={{ color: '#9f7aea', fontWeight: 'bold' }}>
        HUSK.
      </Typography>

      

      {/* Right: Country, Profile, Toggle */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src="https://flagcdn.com/in.svg" alt="India" width={24} style={{ marginRight: 4 }} />
          <Typography variant="body2" sx={{ color: 'white' }}>India</Typography>
        </Box>

        <IconButton onClick={handleMenuOpen}>
          <PersonIcon sx={{ color: 'white' }} />
        </IconButton>
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleMenuClose}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>

        <Switch color="default" />
      </Box>
    </Box>
  );
};

export default NeuronHeader;
