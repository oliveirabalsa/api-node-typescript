import { getRepository } from 'typeorm';
import { Products } from '../entity/Products';
import { Request, Response, NextFunction } from 'express';

export class ProductsController {

  private userRepository = getRepository(Products);

  async all(request: Request, response: Response, next: NextFunction) {
      return this.userRepository.find();
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
}
}