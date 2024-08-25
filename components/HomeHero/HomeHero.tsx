import { Title, Text, Button, Container } from '@mantine/core';
import classes from './HeroText.module.css';
import { Dots } from './Dots';
import { useRouter } from 'next/navigation';

export function HomeHero() {
  const router = useRouter();
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.subTitle}>AI-Powered Development</Title>
        <Title className={classes.title}>
          Your{' '}
          <Text component="span" className={classes.highlight} inherit>
            strategic ally
          </Text>{' '}
          in driving{' '}
          <Text component="span" className={classes.highlight} inherit>
            digital innovation
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Elevate your software projects with AI, identifying and eliminating unproductive habits
            along the way.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={() => {
              router.push('/request');
            }}
          >
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Quick Connect
          </Button>
        </div>
      </div>
    </Container>
  );
}
