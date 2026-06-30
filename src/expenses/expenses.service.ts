import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto) {
    const expense = this.expenseRepository.create(createExpenseDto);

    return await this.expenseRepository.save(expense);
  }

  async findAll() {
    return await this.expenseRepository.find();
  }
  async findOne(id: number) {
    return await this.expenseRepository.findOneBy({ id });
  }
  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    await this.expenseRepository.update(id, updateExpenseDto);
    return await this.findOne(id);
  }
  async remove(id: number) {
    return await this.expenseRepository.delete(id);
  }
}
