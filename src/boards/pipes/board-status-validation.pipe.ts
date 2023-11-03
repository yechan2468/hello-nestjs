import {ArgumentMetadata, BadRequestException, PipeTransform} from "@nestjs/common";
import {BoardStatus} from '../board.model';
import {BoardsService} from '../boards.service';

class BoardStatusValidationPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toString().toUpperCase();
    if (!BoardStatus.hasOwnProperty(value))
      throw new BadRequestException(`Cannot use "${value}" as a board status name. Use ${Object.keys(BoardStatus).join(', ')} instead.`)
    return undefined;
  }
}

export default BoardStatusValidationPipe;