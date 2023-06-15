import { Body, Param, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';

@Controller('/api/students')
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
  async create(@Body() data: StudentEntity) {
    this.studentService.create(data);

    return {
      "message": "Estudante cadastrado com sucesso",
      "data": data
    };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data) {
    data.id = id;
    
    await this.studentService.update(data);

    return {
      "message": "Estudante atualizado com sucesso",
      "data": data
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Body() data) {
    await this.studentService.delete(id);

    return {
      "message": "Estudante removido com sucesso",
    }
  }
}

