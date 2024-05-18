import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EnrollmentStatusEnum } from 'src/backend/students/utils/enums/create-student-enums';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    dateOfBirth: Date;

    @Prop({ required: false })
    gender: string;

    @Prop({ required: true })
    registrationNumber: string;

    @Prop({ default: null })
    photoUrl?: string;

    @Prop({ required: true })
    contactInformation: {
        address: string;
        email?: string;
        phoneNumber?: string;
        parentOrGuardian: string;
        parentPhoneNumber: string;
    };

    @Prop({ required: true })
    academicInformation: {
        course: string;
        currentSemester?: number;
        enrollmentDate: Date;
        academicHistory?: string[];
    };

    @Prop({ required: true })
    grades: {
        subjects: {
            name: string;
            teacher: string;
            grade: number;
        }[];
        overallAverage: number;
    };

    @Prop()
    otherInformation?: {
        notes: string[];
        extracurricularActivities?: string[];
    };

    @Prop({ required: true })
    administrativeInformation: {
        enrollmentStatus: EnrollmentStatusEnum;
        academicAdvisor: string;
    };
}

export const StudentSchema = SchemaFactory.createForClass(Student);
