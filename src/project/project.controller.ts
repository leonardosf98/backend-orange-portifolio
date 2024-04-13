import { Controller, Get, Param } from '@nestjs/common';
import { Project as ProjectModel } from '@prisma/client';
import { ProjectService } from 'src/project/project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get(':id')
  async getProjectById(@Param('id') id: string): Promise<ProjectModel | null> {
    return this.projectService.project({ project_id: Number(id) });
  }
}
