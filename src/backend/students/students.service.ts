import { Injectable } from '@nestjs/common';
import { CreateStudentDTO } from './utils/dto/create-student.dto';
import { UpdateStudentDto } from './utils/dto/update-student.dto';
import { StudentRepository } from './db/mongo/repository/mongo-student-repository';

@Injectable()
export class StudentsService {
  constructor(
    private readonly studentsService: StudentRepository
  ) { }

  async create(createStudentDto: CreateStudentDTO) {
    return 'This action adds a new student';
  }

  async findAll() {
    return `This action returns all students`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  async remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
