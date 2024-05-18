import { EnrollmentStatusEnum } from "../enums/create-student-enums";

export interface Student {
    id: number;
    fullName: string;
    dateOfBirth: Date;
    gender: string;
    registrationNumber: string;
    photoUrl?: string;

    contactInformation: {
        address: string;
        email: string;
        phoneNumber: string;
        parentOrGuardian: string;
        parentPhoneNumber: string;
    };

    academicInformation: {
        course: string;
        currentSemester: number;
        enrollmentDate: Date;
        academicHistory?: string[];
    };

    grades: {
        subjects: {
            name: string;
            teacher: string;
            grade: number;
        }[];
        overallAverage: number;
    };

    otherInformation?: {
        notes: string[];
        extracurricularActivities?: string[];
    };

    administrativeInformation: {
        enrollmentStatus: EnrollmentStatusEnum;
        academicAdvisor: string;
    };
}
