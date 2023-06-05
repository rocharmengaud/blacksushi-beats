import { TableCell } from '@mui/material';
import StyledTableRow from './StyledComponents/StyledTableRow';

const BeatRow = ({ beat, selectTrack, currentTrack, addToCart, removeFromCart, isInCart, getButtonLabel }) => {
  // console.log(isInCart(beat));
  return (
    <StyledTableRow key={beat.title}>
      <TableCell>{beat.title}</TableCell>
      <TableCell>{beat.bpm}</TableCell>
      <TableCell>{beat.genre}</TableCell>
      <TableCell>${beat.price}</TableCell>
      <TableCell>
        <button onClick={() => selectTrack(beat)} className="hover:text-red-700 focus:outline-none">
          Select
        </button>
      </TableCell>
      <TableCell>
        <button
          onClick={() => (isInCart(beat) ? removeFromCart(beat) : addToCart(beat))}
          className={`hover:text-red-700 focus:outline-none ${beat === currentTrack ? 'text-red-500 underline' : ''}`}
        >
          {getButtonLabel(beat)}
        </button>
      </TableCell>
    </StyledTableRow>
  );
};

export default BeatRow;
