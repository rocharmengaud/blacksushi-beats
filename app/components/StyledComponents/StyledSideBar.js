import { styled } from '@mui/system';
import { Drawer } from '@mui/material';

const StyledSidebar = styled(Drawer)`
  && {
    width: 300px;

    .MuiDrawer-paper {
      width: 300px;
      background-color: #f9f9f9;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default StyledSidebar;
