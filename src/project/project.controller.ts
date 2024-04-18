import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Project as ProjectModel } from '@prisma/client';
import { ProjectService } from 'src/project/project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get(':id')
  @ApiTags('Project')
  async getProjectById(@Param('id') id: string): Promise<ProjectModel | null> {
    return this.projectService.project({ project_id: id });
  }

  @Post('add')
  @ApiTags('Project')
  @UseInterceptors(FileInterceptor('project_image'))
  async addProject(@UploadedFile() file: Express.Multer.File, @Body() data) {
    const tagList = data.project_tags.split(',');
    data = {
      ...data,
      project_tags: {
        create: tagList.map((tag: string) => ({
          tag_name: tag,
          project_id: undefined,
        })),
      },
    };
    data.project_image = file.path;
    return this.projectService.createProject(data);
  }
}
