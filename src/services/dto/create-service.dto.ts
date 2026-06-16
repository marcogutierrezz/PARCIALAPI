import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ example: 'Diseño de logo profesional' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Diseño', enum: ['Diseño', 'Desarrollo', 'Marketing', 'Redacción'] })
  @IsString()
  category: string;

  @ApiProperty({ example: 'Logo vectorial en alta resolución con hasta 3 revisiones.' })
  @IsString()
  description: string;

  @ApiProperty({ example: 150 })
  @IsNumber()
  @Min(0)
  price: number;
}
