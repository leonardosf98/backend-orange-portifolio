import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Project as ProjectModel } from '@prisma/client';
import { CreateProjectBody } from 'src/dtos/CreateProjectBody';
import { ProjectService } from 'src/project/project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get(':id')
  @ApiTags('Project')
  async getProjectById(@Param('id') id: string): Promise<ProjectModel | null> {
    return this.projectService.project({ id: id });
  }

  @Get('/tag/:id')
  @ApiTags('Project')
  async getProjectByTag(
    @Param('id') id: string,
    @Query('page') page: string,
  ): Promise<ProjectModel[] | null> {
    return this.projectService.getProjectsByTag(
      { id: Number(id) },
      Number(page),
    );
  }

  @Post('add')
  @ApiTags('Project')
  async addProject(@Body() data: CreateProjectBody) {
    return this.projectService.createProject(data);
  }
}
