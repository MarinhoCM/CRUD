import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDTO } from './utils/dto/create-student.dto';
import { UpdateStudentDto } from './utils/dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService
  ) { }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDTO) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  async findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
