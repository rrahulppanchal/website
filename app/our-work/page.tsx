"use client"

import { Footer } from "@/components/Footer/Footer";
import { HeaderMenu } from "@/components/Header/HeaderMenu";
import { Container, Title, Text, SimpleGrid, Card, Image, Badge } from "@mantine/core";
import classes from "./OurWork.module.css"
import { projectsData } from "./projectsData";

export default function OurWorkPage() {
    const cards = projectsData.map((project, idx) => (
        <Card key={project.title} p="md" radius="md" component="a" href={`/our-work/${idx}`} className={classes.card}>
          <Card.Section>
            <Image src={project.image} alt={project.title} height={180} />
          </Card.Section>
    
          <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
            {project.category}
          </Badge>
    
          <Text className={classes.title_card} fw={500}>
            {project.title}
          </Text>
    
          <Text fz="sm" c="dimmed" lineClamp={4}>
            {project.description}
          </Text>
        </Card>
      ));

    return (
        <>
            <HeaderMenu />
            <Container size="lg" className={classes.wrapper}>
                <Title order={1} className={classes.title} ta="center">Our Work</Title>
                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Check out some of our recent projects. We are proud of the work we do.
                </Text>

                <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} mt="xl">
                    {cards}
                </SimpleGrid>
            </Container>
            <Footer />
        </>
    );
}