import {Injectable, NotFoundException} from '@nestjs/common';
import {Board, BoardStatus} from './board.model';
import {v1 as uuid} from 'uuid';
import CreateBoardDto from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];
  
  getAllBoards() {
    return this.boards;
  }
  
  getBoardById(id: string) {
    const board = this.boards.find(board => board.id === id);
    if (!board) throw new NotFoundException(`Cannot find board with id "${id}"`);
    return board;
  }
  
  createBoard(createBoardDto: CreateBoardDto) {
    const newBoard: Board = {
      id: uuid(),
      title: createBoardDto.title,
      description: createBoardDto.description,
      status: BoardStatus.PUBLIC
    };
    this.boards.push(newBoard);
    return newBoard;
  }
  
  deleteBoard(id: string) {
    const found = this.getBoardById(id);
    if (!found) return;
    this.boards = this.boards.filter(board => board.id !== id);
  }
  
  updateBoardStatus(id: string, status: BoardStatus) {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
