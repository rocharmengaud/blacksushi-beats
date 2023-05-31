import { Table, TableBody, TableContainer, TableHead, Paper } from '@mui/material';

import BeatRow from './BeatRow';
import CartSideBar from './CartSideBar';

import StyledTableRow from './StyledComponents/StyledTableRow';
import StyledTableCell from './StyledComponents/StyledTableCell';

const BeatTable = ({
  beats,
  selectTrack,
  currentTrack,
  cart,
  setCart,
  addToCart,
  removeFromCart,
  isInCart,
  getButtonLabel,
  handleSidebarClose,
  sidebarOpen,
}) => {
  // console.log(isInCart(beats[0]));
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Bpm</StyledTableCell>
              <StyledTableCell>Genre</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Play</StyledTableCell>
              <StyledTableCell>Buy the beat</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {beats.map((beat) => (
              <BeatRow
                key={beat.title}
                beat={beat}
                selectTrack={selectTrack}
                currentTrack={currentTrack}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isInCart={isInCart}
                getButtonLabel={getButtonLabel}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CartSideBar open={sidebarOpen} onClose={handleSidebarClose} cart={cart} anchor="right" setCart={setCart} />
    </>
  );
};

export default BeatTable;
