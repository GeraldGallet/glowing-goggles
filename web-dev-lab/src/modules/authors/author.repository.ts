import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorModel, CreateAuthorModel } from './author.model';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  async findAll(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  async findById(id: string): Promise<AuthorModel | null> {
    return this.authorRepository.findOneBy({ id });
  }

  async create(author: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.save(author);
  }

  async update(
    id: string,
    author: Partial<CreateAuthorModel>,
  ): Promise<AuthorModel | null> {
    await this.authorRepository.update(id, author);
    return this.authorRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
