import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.usersRepository.count();
    if (count > 0) return;

    await this.usersRepository.save([
      { email: 'ana@freelance.com', name: 'Ana García', password: '123456' },
      { email: 'carlos@freelance.com', name: 'Carlos López', password: '123456' },
    ]);

    console.log('Seed completado: 2 freelancers insertados.');
  }
}
