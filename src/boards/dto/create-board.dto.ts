import {IsNotEmpty} from 'class-validator';

class CreateBoardDto {
  @IsNotEmpty() title: string;
  @IsNotEmpty() description: string;
}

export default CreateBoardDto;