import { Body, Param, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import { v4 as uuidv4 } from 'uuid';

@Controller('/api/student')
export class StudentController { 
  constructor(private studentService: StudentService) {}

  @Get()
  async list() {
    const studentList = await this.studentService.list();

    return {
      "count": studentList.length,
      "data": studentList
    };
  }

  @Post()
  async create(@Body() data) {
    const studentEntity = new StudentEntity();
    studentEntity.id = uuidv4();
    studentEntity.name = data.name;
    studentEntity.birthDate = data.birthDate;
    studentEntity.cpf = data.cpf;
    studentEntity.address = data.address;

    this.studentService.create(studentEntity);

    return {
      "message": "estudante cadastrado com sucesso",
      "data": studentEntity
    };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data) {
    data.id = id;
    
    await this.studentService.update(data);

    return {
      "message": "estudante atualizado com sucesso",
      "data": data
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Body() data) {
    await this.studentService.delete(id);

    return {
      "message": "estudante removido com sucesso",
    }
  }
}

