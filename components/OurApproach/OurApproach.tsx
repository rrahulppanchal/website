import { Image, Container, Title, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '../../assests/icons/working.svg';
import classes from '../WhoWeAre/HeroBullets.module.css';

export function OurApproach() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
          Merging innovation with expertise for outstanding outcomes.
          </Title>
          <Text c="dimmed" mt="md">
          Our approach is built on a foundation of innovation, collaboration, and a commitment to excellence.
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
              <b>AI-Driven Delivery</b> – We supercharge our processes with AI, streamlining project management and accelerating results.
            </List.Item>
            <List.Item>
              <b>Rapid Turnaround</b> – Get to market faster with our efficient workflows and nimble teams.
            </List.Item>
            <List.Item>
              <b>Expert Teamwork</b> – Work with seasoned pros committed to understanding your business and exceeding your expectations.
            </List.Item>
            <List.Item>
              <b>Remote-Ready</b> – Wherever you are, our digital-first team collaborates seamlessly to deliver exceptional solutions.
            </List.Item>
          </List>
        </div>
        <Image src={image.src} className={classes.image} alt="Our Approach" />
      </div>
    </Container>
  );
} 