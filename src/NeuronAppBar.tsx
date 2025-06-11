// NeuronAppBar.tsx
import { Box, Typography, IconButton, Switch } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AppBar } from 'react-admin';

const NeuronAppBar = () => {
  return (
    <AppBar position='fixed'>
     
      <Box
        sx={{
         
          display: 'flex',
          width:'100%',
          alignItems: 'center',
          justifyContent:'space-between',
          alignContent:'space-between'

        }}
      >
        {/* Left Section: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
          <Typography variant="h6" sx={{ color: '#9f7aea', fontWeight: 'bold' }}>
            HUSK.
          </Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Husk Power Systems
          </Typography>
        </Box>

       

        {/* Right Section: Flag + User + Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="https://flagcdn.com/in.svg" alt="India" width={24} />
            <Typography sx={{ color: 'white' }}>India</Typography>
          </Box>
          <IconButton>
            <PersonIcon sx={{ color: 'white' }} />
          </IconButton>
          <Switch />
        </Box>
      </Box>
    </AppBar>
  );
};

export default NeuronAppBar;
