import { Carousel } from '@mantine/carousel';
import { ActionIcon, AspectRatio, Avatar, Button, Card, Container, Divider, Image, SimpleGrid, Skeleton, Text, Title } from '@mantine/core';
const child = <Skeleton height={240} radius="md" animate={false} />;
import classes from './Testimonials.module.css';
import { IconAdjustments, IconExternalLink } from '@tabler/icons-react';

const mockdata = [
  {
    name: 'johndoe',
    title: 'One of the best UI libraries I have come across.',
    description: `I am a senior Frontend Developer and wanted to use something new instead of Material UI and came across this, it has been well thought of all the different scenarios you and come across, and the hooks are just pure love :) Thank you so much for this.`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'johndoe',
    title: 'You nailed it!',
    description: `I am a senior Frontend Developer and wanted to use something new instead of Material UI and came across this, it has been well thought of all the different scenarios you and come across, and the hooks are just pure love :) Thank you so much for this.`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'johndoe',
    title: 'Thank you mantine 💘',
    description: `I am a senior Frontend Developer and wanted to use something new instead of Material UI and came across this, it has been well thought of all the different scenarios you and come across, and the hooks are just pure love :) Thank you so much for this.`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'johndoe',
    title: 'Absurdly good',
    description: `I am a senior Frontend Developer and wanted to use something new instead of Material UI and came across this, it has been well thought of all the different scenarios you and come across, and the hooks are just pure love :) Thank you so much for this.`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
];

export function Testimonials() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      {/* <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio> */}
      {/* <Text c="dimmed" size="xs" tt="uppercase" fw={700} >
        {article.date}
      </Text> */}
      <div className={classes.headTitle}>
        <div className={classes.headTitleContent}>
          <Avatar
            component="a"
            // href={article.image}
            target="_blank"
            src={article.image}
            alt="it's me"
          />
          <Text className={classes.title} >
            {article.name}
          </Text>
        </div>
        <ActionIcon
          component="a"
          href="https://mantine.dev"
          variant="filled"
          color="gray"
          aria-label="Open in a new tab"
          onClick={(event) => event.preventDefault()}
        >
          <IconExternalLink style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </div>
      <Divider my="md" size="sm" />
      <Title order={4}>{article.title}</Title>
      <Text>
        {article.description}
      </Text>
    </Card>
  ));
  return (
    <Container py="xl" size="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      <div style={{ display: 'flex' }}>
        <Button
          variant="gradient"
          m='auto'
          mt={20}
          size='xl'
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          See More
          <IconExternalLink style={{ width: '50%', height: '50%', marginLeft: '12px' }} stroke={1.5} />
        </Button>
      </div>
    </Container>
  );
}
