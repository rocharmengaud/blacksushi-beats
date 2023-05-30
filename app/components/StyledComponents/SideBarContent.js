import { styled } from '@mui/system';
import { List } from '@mui/material';

const SidebarContent = styled(List)`
  && {
    padding: 20px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      margin-top: 20px;
      font-weight: bold;
    }

    .remove-button {
      color: red;
    }
  }
`;

export default SidebarContent;
