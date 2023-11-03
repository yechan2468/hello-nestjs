import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {BoardsService} from './boards.service';
import {Board, BoardStatus} from './board.model';
import CreateBoardDto from './dto/create-board.dto';
import BoardStatusValidationPipe from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {
  }
  
  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }
  
  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoardById(id);
  }
  
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }
  
  @Delete('/:id')
  deleteBoard(@Param('id') id: string) {
    this.boardService.deleteBoard(id);
  }
  
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus
  ){
    return this.boardService.updateBoardStatus(id, status);
  }
}
