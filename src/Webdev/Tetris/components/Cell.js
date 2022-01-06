import { StyledCell } from './styles/StyledCell';
import { TETRONIMOS } from '../Tetronimos'

const Cell = ({ type }) => {
    return(
        <StyledCell type={'L'} color={TETRONIMOS['L']}>cell</StyledCell>
    )
}

export default Cell;