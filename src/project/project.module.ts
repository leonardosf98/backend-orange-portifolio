import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from 'src/project/project.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectController],
  providers: [PrismaService, ProjectService],
})
export class ProjectModule {}
