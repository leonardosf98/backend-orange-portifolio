import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from 'src/project/project.service';
import { PrismaService } from 'prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './../uploads/project-images',
    }),
  ],
  controllers: [ProjectController],
  providers: [PrismaService, ProjectService],
})
export class ProjectModule {}
