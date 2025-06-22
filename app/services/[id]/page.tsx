'use client';
import { notFound } from 'next/navigation';
import { servicesData } from '../servicesData';
import {
  Container,
  Title,
  Text,
  List,
  Button,
  ThemeIcon,
  rem,
  SimpleGrid,
  Paper,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './service.module.css';
import Link from 'next/link';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = servicesData.find((s) => s.id === params.id);
  if (!service) return notFound();

  const features = service.features.map((feature) => (
    <List.Item
      key={feature}
      icon={
        <ThemeIcon size={24} radius="xl" variant="gradient">
          <IconCheck style={{ width: rem(16), height: rem(16) }} stroke={3} />
        </ThemeIcon>
      }
    >
      {feature}
    </List.Item>
  ));

  const process = service.process.map((step) => (
    <List.Item key={step}>{step}</List.Item>
  ));

  return (<>
    <HeaderMenu />
    <div className={classes.wrapper}>
      <Container size="lg" py="xl">
        <div className={classes.header}>
          <Title order={1} className={classes.title}>
            {service.title}
          </Title>
          <Text className={classes.subtitle}>{service.subtitle}</Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: 50 }} mt="xl">
          <div>
            <Text className={classes.description}>{service.description}</Text>

            <Title order={3} mt="xl" mb="md" className={classes.sectionTitle}>
              What You Get
            </Title>
            <List spacing="sm" size="sm" mb="md" withPadding>
              {features}
            </List>

            <Title order={3} mt="xl" mb="md" className={classes.sectionTitle}>
              Our Process
            </Title>
            <List type="ordered" spacing="sm" size="sm" withPadding>
              {process}
            </List>
          </div>
          <Paper withBorder radius="md" p="xl" className={classes.sticky}>
            <Title order={4}>Ready to get started?</Title>
            <Text size="sm" mt="xs" mb="md">
              Let&apos;s build something amazing together.
            </Text>
            <Button
              component={Link}
              href={service.cta}
              fullWidth
              size="md"
              radius="xl"
              variant="gradient"
            >
              {service.ctaText}
            </Button>
          </Paper>
        </SimpleGrid>
      </Container>
    </div>
    <Footer />
  </>
  );
} 