'use client';
import { notFound } from 'next/navigation';
import { servicesData } from '../servicesData';
import { Container, Title, Text, List, Button, Group, Grid, Image, Box } from '@mantine/core';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';


export default function ServicePage({ params }: { params: { id: string } }) {
    const service = servicesData.find((s) => s.id === params.id);
    if (!service) return notFound();

    return (<>
        <HeaderMenu />
        <Container size="md" py="xl" mt="80px">
          <Grid gutter={{ base: 40, md: 60 }} align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Title order={1} mb="xs">{service.title}</Title>
              <Text size="lg" fw={500} mb="sm">{service.subtitle}</Text>
              <Text mb="md">{service.description}</Text>
              <Title order={3} mt="lg" mb="xs">What You Get:</Title>
              <List spacing="xs" mb="md">
                  {service.features.map((feature, i) => (
                      <List.Item key={i}>{feature}</List.Item>
                  ))}
              </List>
              <Title order={3} mt="lg" mb="xs">Our Process:</Title>
              <List spacing="xs" mb="xl">
                  {service.process.map((step, i) => (
                      <List.Item key={i}>{step}</List.Item>
                  ))}
              </List>
              <Group>
                  <Button component="a" href={service.cta} size="md" radius="xl">
                      {service.ctaText}
                  </Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={service.icon} alt={service.title} w={260} h={260} fit="contain" />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
    </>
    );
} 