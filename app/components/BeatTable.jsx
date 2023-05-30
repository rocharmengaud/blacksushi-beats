import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, List, ListItemText } from '@mui/material';
import { Close } from '@mui/icons-material';
import StyledTableRow from './StyledComponents/StyledTableRow';
import StyledTableCell from './StyledComponents/StyledTableCell';
import StyledSidebar from './StyledComponents/StyledSideBar';
import SidebarContent from './StyledComponents/SideBarContent';
import StyledListItem from './StyledComponents/StyledItemList';
import RemoveButton from './StyledComponents/RemoveButton';

const BeatTable = ({ beats, selectTrack, currentTrack }) => {
  const [cart, setCart] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const addToCart = (beat) => {
    setCart([...cart, beat]);
    setSidebarOpen(true); // Open the sidebar when a beat is added to the cart
  };

  const removeFromCart = (beat) => {
    const updatedCart = cart.filter((item) => item !== beat);
    setCart(updatedCart);
  };

  const isInCart = (beat) => cart.includes(beat);

  const getButtonLabel = (beat) => {
    return isInCart(beat) ? 'Remove from cart' : 'Add to cart';
  };

  const handleButtonClick = (beat) => {
    isInCart(beat) ? removeFromCart(beat) : addToCart(beat);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

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
              <StyledTableRow key={beat.title}>
                <TableCell>{beat.title}</TableCell>
                <TableCell>{beat.bpm}</TableCell>
                <TableCell>{beat.genre}</TableCell>
                <TableCell>${beat.price}</TableCell>
                <TableCell>
                  <button
                    onClick={() => selectTrack(beat)}
                    className={`hover:text-red-700 focus:outline-none ${beat === currentTrack ? 'text-red-500 underline' : ''}`}
                  >
                    Select
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => handleButtonClick(beat)}
                    className={`hover:text-red-700 focus:outline-none ${beat === currentTrack ? 'text-red-500 underline' : ''}`}
                  >
                    {getButtonLabel(beat)}
                  </button>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledSidebar anchor="right" open={sidebarOpen} onClose={handleSidebarClose}>
        <SidebarContent>
          <h2>Cart</h2>
          {cart.length > 0 ? (
            <>
              <List>
                {cart.map((beat) => (
                  <StyledListItem key={beat.title}>
                    <ListItemText primary={beat.title} />
                    <RemoveButton className="remove-button" onClick={() => removeFromCart(beat)}>
                      <Close />
                    </RemoveButton>
                  </StyledListItem>
                ))}
              </List>
              <p>Total: ${cart.reduce((total, beat) => total + beat.price, 0)}</p>
            </>
          ) : (
            <p>No items in cart</p>
          )}
        </SidebarContent>
      </StyledSidebar>
    </>
  );
};

export default BeatTable;
