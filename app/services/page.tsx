'use client';
import Link from 'next/link';
import { servicesData } from './servicesData';
import {
  Container,
  Title,
  Text,
  Group,
  Button,
  SimpleGrid,
  Image,
  Paper,
  ThemeIcon,
} from '@mantine/core';
import classes from './Services.module.css';
import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/HeaderMenu';

export default function ServicesPage() {
  const items = servicesData.map((service) => (
    <Paper
      component={Link}
      href={`/services/${service.id}`}
      key={service.id}
      withBorder
      radius="md"
      className={classes.card}
    >
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'blue', to: 'cyan' }}
      >
          <service.icon  />
      </ThemeIcon>
      <Title order={3} mt="md" c="#212529">
        {service.title}
      </Title>
      <Text size="sm" c="dimmed" mt="sm">
        {service.subtitle}
      </Text>
      <Text size="sm" mt="md" c="#212529" lineClamp={4}>
        {service.description}
      </Text>
    </Paper>
  ));

  return (<><HeaderMenu/>
    <div className={classes.wrapper}>
      <Container size="lg" py="xl">
        <Title order={1} className={classes.title} ta="center">
          Our Services
        </Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          We offer a wide range of services to help you build and grow your business. From custom
          software development to UI/UX design, we have you covered.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={50}>
          {items}
        </SimpleGrid>

        <Group justify="center" mt="xl">
          <Button component={Link} href="/contact-us" size="lg" radius="xl">
            Get in Touch
          </Button>
        </Group>
      </Container>
    </div>
      <Footer />
    </>
  );
} 