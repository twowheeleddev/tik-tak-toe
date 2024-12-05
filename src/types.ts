// Types for the players' data
export type Players = {
  player1: string;
  player2: string;
};

// Props for the TitlePage component
export type TitlePageProps = {
  onStartGame: (player1: string, player2: string) => void;
  addRealGame: (newGame: GameResult) => void;
};

// Props for the Board component
export type GameBoardProps = {
  player1: string;
  player2: string;
  onGameEnd: (board: string[], winner: string | null) => void;
  onPlayAgain: () => void | Promise<void>;
  onReturnHome: () => void | Promise<void>;
};

// Props for individual squares
export type SquareProps = {
  value: string;
  onClick: () => void;
};

export type GameResult = {
  id: number;
  board: string[];
  winner: string | null;
  players: { player1: string; player2: string };
  winningLine: number[] | null;
};
