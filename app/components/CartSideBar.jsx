import React from 'react';
import StyledListItem from './StyledComponents/StyledItemList';
import { List, ListItemText } from '@mui/material';
import RemoveButton from './StyledComponents/RemoveButton';
import { Close } from '@mui/icons-material';
import SidebarContent from './StyledComponents/SideBarContent';
import StyledSidebar from './StyledComponents/StyledSideBar';

const CartSideBar = ({ open, onClose, cart, setCart }) => {
  const removeFromCart = (beat) => {
    const updatedCart = cart.filter((item) => item !== beat);
    setCart(updatedCart);
  };

  return (
    <StyledSidebar anchor="right" open={open} onClose={onClose}>
      <SidebarContent>
        <h2>Shopping Cart</h2>
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
  );
};

export default CartSideBar;
