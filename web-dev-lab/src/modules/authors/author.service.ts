import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { CreateAuthorModel } from './author.model';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  findAll() {
    return this.authorRepository.findAll();
  }

  findById(id: string) {
    return this.authorRepository.findById(id);
  }

  create(author: CreateAuthorModel) {
    return this.authorRepository.create(author);
  }

  update(id: string, author: Partial<CreateAuthorModel>) {
    return this.authorRepository.update(id, author);
  }

  delete(id: string) {
    return this.authorRepository.delete(id);
  }
}
