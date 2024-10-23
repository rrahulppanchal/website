import { Carousel } from '@mantine/carousel';
import { ActionIcon, AspectRatio, Avatar, Button, Card, Container, Divider, Image, SimpleGrid, Skeleton, Text, Title } from '@mantine/core';
const child = <Skeleton height={240} radius="md" animate={false} />;
import classes from './Testimonials.module.css';
import { IconAdjustments, IconExternalLink } from '@tabler/icons-react';

const mockdata = [
  {
    name: 'Sarah M. – New York, USA',
    title: 'Exceptional E-commerce Platform Development',
    description: `“Our experience with VoxQ was nothing short of exceptional. Their team built our e-commerce platform from the ground up, and the results were exactly what we envisioned. The attention to detail and willingness to go the extra mile made all the difference. We would highly recommend them for any web development needs.”`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'Raj K. – Bangalore, India',
    title: 'Outstanding Custom CRM Solution',
    description: `“I had the pleasure of working with team Rahul for a custom CRM solution, and I was thoroughly impressed with their technical expertise and communication. They not only delivered a highly functional product but also guided us through best practices for scaling the system. Fantastic team and great work!”`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'Emily W. – London, UK',
    title: 'Impressive Corporate Website Redesign',
    description: `“Rahul helped us redesign our corporate website, and the result was beyond our expectations. Their UX/UI expertise really showed through in the final product, making our site more user-friendly and visually appealing. The project was delivered on time and within budget. Highly recommended!”`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'John P. – Melbourne, Australia',
    title: 'Robust SaaS Platform for Start-ups',
    description: `“The developers at VoxQ truly understand the unique challenges of web-based SaaS solutions. They built a robust platform for our start-up and integrated multiple third-party services seamlessly. I’ve already recommended them to other founders in my network, and I’ll definitely be working with them again.”`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'Sophie L. – Toronto, Canada',
    title: 'Seamless Legacy System Migration to Cloud',
    description: `“We had a complex project that involved migrating a legacy system to the cloud, and VoxQ handled it flawlessly. Their deep understanding of cloud infrastructure and attention to data integrity was impressive. It was a pleasure working with such a professional and skilled team!”`,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    date: 'August 18, 2022',
  },
  {
    name: 'Andreas H. – Berlin, Germany',
    title: 'Top-notch Mobile App Development',
    description: `“Team Rahul delivered a top-notch mobile app for our company, complete with all the features we needed and then some. Their agile development approach and transparent communication made the whole process smooth. I highly recommend them for any mobile development projects.”`,
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
