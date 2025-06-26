import { notFound } from 'next/navigation';
import { projectsData } from '../projectsData';
import { Container, Title, Text, Image, Badge, Button } from '@mantine/core';
import classes from '../OurWork.module.css';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[parseInt(params.id, 10)];
  if (!project) return notFound();

  return (
    <>
      <HeaderMenu />
      <Container size="sm" className={classes.wrapper}>
        <Image src={project.image} alt={project.title} height={240} radius="md" mb="md" />
        <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
          {project.category}
        </Badge>
        <Title order={2} className={classes.title} mt="md">{project.title}</Title>
        <Text className={classes.description} mt="md">{project.description}</Text>
        <Button mt="xl" component={Link} href="/our-work">Back to Our Work</Button>
      </Container>
      <Footer />
    </>
  );
} 