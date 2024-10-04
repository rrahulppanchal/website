import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '../../assests/icons/computer.svg';
import classes from './HeroBullets.module.css';

export function WhoWeAre() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            We focused on <br />
            <span className={classes.highlight}>SUPERIOR</span> quality and achievement.
          </Title>
          <Text c="dimmed" mt="md">
            Committed to upholding the highest standards, we focus on delivering outstanding results
            and ensuring complete satisfaction by meticulously addressing every detail of our work.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Detailed Project Planning</b> – Meticulous planning guarantees precision and
              superior results.
            </List.Item>
            <List.Item>
              <b>Transparent Communication</b> – Clear and open dialogue to align with expectations
              and standards.
            </List.Item>
            <List.Item>
              <b>Client Feedback Integration</b> – Actively incorporating feedback for continuous
              refinement and satisfaction.
            </List.Item>
            <List.Item>
              <b>Strict Compliance</b> – Adherence to industry regulations and best practices for
              excellence.
            </List.Item>
          </List>

          {/* <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group> */}
        </div>
        <Image src={image.src} className={classes.image} alt="voxq" />
      </div>
    </Container>
  );
}
