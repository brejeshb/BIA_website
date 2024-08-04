import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate  } from 'react-router-dom';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn',  link:'https://www.linkedin.com/company/smubia/' },
  { icon: <InstagramIcon />, name: 'Instagram', link: 'https://www.instagram.com/smu.bia/'},
  { icon: <EmailIcon />, name: 'Email', link: 'mailto:%20bia@sa.smu.edu.sg' },
];

export default function SideBar() {
    const history = useNavigate();
    const handleActionClick = (link) => {
      if (link.startsWith('http') || link.startsWith('mailto')) {
        window.open(link, '_blank');
      } else {
        history.push(link);
      }}
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position:'fixed', width:'9%', right:'5%',bottom:'2%'}}>
        <SpeedDial 
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<ShareOutlinedIcon />}      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action.link)}
          />

        ))}
      </SpeedDial>
    </Box>
  );
}