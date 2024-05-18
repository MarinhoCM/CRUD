import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from '../../../utils/interfaces/create-student-interface';
import { CreateStudentDTO } from '../../../utils/dto/create-student.dto';


@Injectable()
export class StudentRepository {
    constructor(
        @InjectModel('Student') private studentModel: Model<Student>
    ) { }

    async create(createStudent: CreateStudentDTO) {
        const student = new this.studentModel(createStudent);
        try {
            student.save()
        } catch (error) {
            return {
                success: false, message: `
                Erro ao tentar realizar cadastro de aluno.
                Error: ${error}
            `}
        }
    }

    async getAllStudents() {
        return await this.studentModel
            .find({}, { __v: false })
            .sort({ name: +1 })
            .exec();
    }

    async getStudentById(StudentId: string) {
        return await this.studentModel
            .find({ _id: StudentId }, { __v: false })
            .sort({ name: +1 })
            .exec();
    }

    async updateStudent(StudentInfos: object) {
        return await this.studentModel.findOneAndUpdate(StudentInfos);
    }
}

