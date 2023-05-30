import { styled } from '@mui/system';
import { TableRow } from '@mui/material';

const StyledTableRow = styled(TableRow)`
  && {
    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    &:hover {
      background-color: #ffcccc;
    }
  }
`;

export default StyledTableRow;
