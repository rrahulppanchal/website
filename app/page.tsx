'use client';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';
import { FeaturesAsymmetrical } from '@/components/Feature/Feature';
import { HomeHero } from '@/components/HomeHero/HomeHero';
import { WhoWeAre } from '@/components/WhoWeAre/WhoWeAre';
import { HomeStats } from '@/components/HomeStates/HomeStates';
import { Skeleton, Container } from '@mantine/core';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { FAQs } from '@/components/FAQs/FAQs';
import { OurApproach } from '@/components/OurApproach/OurApproach';
const child = <Skeleton height={140} radius="md" animate={false} />;

const features = [
  {
    icon: IconReceiptOff,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: IconFileCode,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: IconCircleDotted,
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: IconFlame,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];
export default function HomePage() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));
  return (
    <>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <HeaderMenu />

      <HomeHero />
      <FeaturesAsymmetrical />
      <Container size="xl">
        <div className={classes.centeredTitleWrapper}>
          <div className={classes.multiColorTitle}>
            <span className={classes.word1}>Who</span>{' '}
            <span className={classes.word2}>we are</span>{' '}
          </div>
          <div className={classes.subtitle}>
            Learn more about our mission, values, and the passionate team driving our vision forward.
          </div>
        </div>
      </Container>
      <WhoWeAre />
      <Container size="xl">
        <div className={classes.centeredTitleWrapper}>
          <div className={classes.multiColorTitle}>
            <span className={classes.word1}>Our</span>{' '}
            <span className={classes.word2}>Approach</span>
          </div>
          <div className={classes.subtitle}>
            Discover our unique process and strategies that set us apart in delivering exceptional results.
          </div>
        </div>
      </Container>
      <OurApproach />
      {/* <HomeStats /> */}
      {/* <Container my="md">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        </Grid>
      </Container> */}
      <Container size="xl">
        <div className={classes.centeredTitleWrapper}>
          <div className={classes.multiColorTitle}>
            <span className={classes.word2}>Testimonials</span>
          </div>
          <div className={classes.subtitle}>
            Hear from our clients and partners about their experiences working with us.
          </div>
        </div>
      </Container>
      <Testimonials />
      <Container size="xl">
        <div className={classes.centeredTitleWrapper}>
          <div className={classes.multiColorTitle}>
            <span className={classes.word2}>FAQs</span>
          </div>
          <div className={classes.subtitle}>
            Find answers to the most common questions about our services and process.
          </div>
        </div>
      </Container>
      <Container size="xl">
        <FAQs />
      </Container>
      <Footer />
    </>
  );
}
