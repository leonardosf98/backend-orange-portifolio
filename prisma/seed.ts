import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando tags
  const tags = await prisma.tag.createMany({
    data: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Angular' },
      { name: 'Vue.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'GraphQL' },
      { name: 'API REST' },
      { name: 'Backend' },
      { name: 'Frontend' },
      { name: 'Full Stack' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'PHP' },
      { name: 'Ruby' },
      { name: 'DevOps' },
      { name: 'CI/CD' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Bitbucket' },
      { name: 'Jenkins' },
      { name: 'Elasticsearch' },
      { name: 'Redis' },
      { name: 'API' },
      { name: 'Computação em Nuvem' },
      { name: 'Serverless' },
      { name: 'Microserviços' },
      { name: 'Firebase' },
      { name: 'Azure' },
      { name: 'Heroku' },
      { name: 'DigitalOcean' },
      { name: 'GCP' },
      { name: 'Banco de Dados' },
      { name: 'Análise de Dados' },
      { name: 'Segurança' },
      { name: 'Testes' },
      { name: 'Testes Unitários' },
      { name: 'Testes de Integração' },
      { name: 'Frameworks JavaScript' },
      { name: 'Desenvolvimento Front End' },
      { name: 'Desenvolvimento Back End' },
      { name: 'Engenharia de Software' },
      { name: 'Desenvolvimento Web' },
      { name: 'Desenvolvimento Mobile' },
    ],
  });

  // Criando um usuário
  const user = await prisma.user.create({
    data: {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'securepassword',
    },
  });

  // Criando um projeto e associando tags a ele
  const project = await prisma.project.create({
    data: {
      name: 'Awesome Project',
      link: 'https://github.com/johndoe/awesome-project',
      description: 'This is an awesome project.',
      author: { connect: { id: user.id } },
      tags: {
        connect: [{ id: 1 }, { id: 4 }, { id: 6 }],
      },
    },
  });

  console.log({ user, project, tags });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
