import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentEntity } from "./student.entity";
import { Repository } from "typeorm";

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentEntity)
        private readonly studentRepository: Repository<StudentEntity>
    ) {}

    async list() {
        return await this.studentRepository.find();

        // return students;
    }

    async create(studentEntity: StudentEntity) {
        await this.studentRepository.save(studentEntity);
    }

    async update(studentEntity: StudentEntity) {
        await this.studentRepository.save(studentEntity);
    }

    async delete(id: string) {
       await this.studentRepository.delete(id);
    }
}