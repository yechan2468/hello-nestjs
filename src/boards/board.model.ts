const BoardStatus = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
} as const;
type BoardStatus = typeof BoardStatus[keyof typeof BoardStatus];

interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export {Board, BoardStatus};