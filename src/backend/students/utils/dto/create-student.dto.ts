import { Type } from "class-transformer";
import {
    ArrayNotEmpty, IsArray,
    IsDateString, IsEnum,
    IsNotEmpty, IsNumber,
    IsOptional, IsString,
    Max, Min,
    ValidateNested
} from "class-validator";
import { EnrollmentStatusEnum } from "../enums/create-student-enums";

export class ContactInformationDTO {
    @IsString()
    @IsNotEmpty()
    address: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    email?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    phoneNumber?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    parentOrGuardian?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    parentPhoneNumber?: string;
};

export class AcademicInformationDTO {
    @IsNotEmpty()
    @IsString()
    course: string;

    @IsNotEmpty()
    @IsString()
    currentSemester?: number;

    @IsNotEmpty()
    @IsString()
    enrollmentDate: Date;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    academicHistory?: string[];
}

export class SubjectDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    teacher: string;

    @IsNumber()
    @IsArray()
    @ArrayNotEmpty()
    grade: number;
}

export class GradesDTO {
    @IsArray()
    @IsOptional()
    @ArrayNotEmpty()
    @ValidateNested()
    subjects?: SubjectDTO[];

    @IsNumber()
    @Min(0)
    @Max(100)
    overallAverage: number;
}

export class OtherInformationDTO {
    @IsArray()
    @IsNotEmpty()
    notes: string[];

    @IsString()
    @IsOptional()
    extracurricularActivities?: string[];
}


export class AdministrativeInformationDTO {
    @IsEnum({ enum: EnrollmentStatusEnum, default: EnrollmentStatusEnum.active })
    @IsNotEmpty()
    enrollmentStatus: EnrollmentStatusEnum;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    academicAdvisor?: string;
}

export class CreateStudentDTO {
    @IsString()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: Date;

    @IsOptional()
    @IsString()
    gender?: string;

    @IsString()
    @IsNotEmpty()
    registrationNumber: string;

    @IsOptional()
    photoUrl?: string;

    @ValidateNested({ each: true })
    @Type(() => ContactInformationDTO)
    contactInformation: ContactInformationDTO;

    @ValidateNested({ each: true })
    @Type(() => AcademicInformationDTO)
    academicInformation: AcademicInformationDTO;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => GradesDTO)
    grades?: GradesDTO;

    @ValidateNested({ each: true })
    @Type(() => OtherInformationDTO)
    otherInformation?: OtherInformationDTO;

    @ValidateNested({ each: true })
    @Type(() => AdministrativeInformationDTO)
    administrativeInformation: AdministrativeInformationDTO;
}
