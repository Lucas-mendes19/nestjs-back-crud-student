import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentEntity])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})

export class StudentModule {}
