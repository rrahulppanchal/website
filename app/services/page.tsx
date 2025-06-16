'use client';
import Link from 'next/link';
import { servicesData } from './servicesData';
import { Container, Title, Text, Card, Group, Button, SimpleGrid, Image, Box } from '@mantine/core';

export default function ServicesPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="lg">Our Services</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
        {servicesData.map((service) => (
          <Card key={service.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <Image src={service.icon} alt={service.title} w={60} h={60} fit="contain" />
            </Box>
            <Title order={3} mb="xs">{service.title}</Title>
            <Text fw={500} mb="xs">{service.subtitle}</Text>
            <Text mb="md" lineClamp={3}>{service.description}</Text>
            <Group justify="flex-end">
              <Button component={Link} href={`/services/${service.id}`} size="sm" radius="xl">
                Learn More
              </Button>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
} 