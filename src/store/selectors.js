import { GAME_STATUS } from '../constants/game';

export const selectCurrentPlayer = (state) => state.currentPlayer;
export const selectStatus = (state) => state.status;
export const selectField = (state) => state.field;
export const selectWinningCombo = (state) => state.winningCombo;

export const selectIsGameActive = (state) => state.status === GAME_STATUS.PLAYING;
