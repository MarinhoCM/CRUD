import { Injectable } from '@nestjs/common';
import { CreateStudentDTO } from './utils/dto/create-student.dto';
import { UpdateStudentDto } from './utils/dto/update-student.dto';

@Injectable()
export class StudentsService {
  create(createStudentDto: CreateStudentDTO) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
