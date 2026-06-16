import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServicesService } from '../services/services.service';

@ApiTags('Public')
@Controller('public')
export class PublicController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('services')
  @ApiOperation({ summary: 'Listar todos los servicios disponibles (sin autenticación)' })
  async findAll() {
    const services = await this.servicesService.findAll();
    return services.map((s) => ({
      title: s.title,
      category: s.category,
      price: s.price,
      freelancer: s.provider.name,
    }));
  }
}
