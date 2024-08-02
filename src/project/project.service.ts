import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Project, Prisma } from '@prisma/client';
import { CreateProjectBody } from 'src/dtos/CreateProjectBody';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async project(
    projectWhereUniqueInput: Prisma.ProjectWhereUniqueInput,
  ): Promise<Project | null> {
    return this.prisma.project.findFirst({
      where: projectWhereUniqueInput,
      include: { tags: true },
    });
  }
  async getProjectsByTag(
    tag: Prisma.TagWhereUniqueInput,
    page,
  ): Promise<Project[] | null> {
    return this.prisma.project.findMany({
      where: {
        tags: {
          some: {
            id: tag.id,
          },
        },
      },
      take: 10,
      skip: page,
    });
  }
  async projects(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProjectWhereUniqueInput;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }): Promise<Project[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createProject(data: CreateProjectBody): Promise<Project> {
    const tagIds = data.tags.map((item) => ({ id: item }));
    console.log(tagIds);
    return this.prisma.project.create({
      data: {
        ...data,
        author: {
          connect: {
            id: Number(data.author),
          },
        },
        tags: { connect: tagIds },
      },
    });
  }

  async updateProject(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> {
    const { data, where } = params;
    return this.prisma.project.update({
      data,
      where,
    });
  }

  async deleteProject(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({
      where,
    });
  }
}
