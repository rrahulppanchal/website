import { Carousel } from '@mantine/carousel';
import { ActionIcon, AspectRatio, Avatar, Button, Card, Container, Divider, Image, SimpleGrid, Skeleton, Text, Title } from '@mantine/core';
const child = <Skeleton height={240} radius="md" animate={false} />;
import classes from './Testimonials.module.css';
import { IconAdjustments, IconExternalLink } from '@tabler/icons-react';

const mockdata = [
  {
    name: 'Sarah M. – New York, USA',
    title: 'Exceptional E-commerce Platform Development',
    description: `"Our experience with VoxQ was nothing short of exceptional. Their team built our e-commerce platform from the ground up, and the results were exactly what we envisioned. The attention to detail and willingness to go the extra mile made all the difference. We would highly recommend them for any web development needs."`,
    image:
      '',
    date: 'August 18, 2022',
  },
  {
    name: 'Raj K. – Bangalore, India',
    title: 'Outstanding Custom CRM Solution',
    description: `"I had the pleasure of working with team Rahul for a custom CRM solution, and I was thoroughly impressed with their technical expertise and communication. They not only delivered a highly functional product but also guided us through best practices for scaling the system. Fantastic team and great work!"`,
    image:
      '', date: 'August 18, 2022',
  },
  {
    name: 'Emily W. – London, UK',
    title: 'Impressive Corporate Website Redesign',
    description: `"Rahul helped us redesign our corporate website, and the result was beyond our expectations. Their UX/UI expertise really showed through in the final product, making our site more user-friendly and visually appealing. The project was delivered on time and within budget. Highly recommended!"`,
    image:
      '', date: 'August 18, 2022',
  },
  {
    name: 'John P. – Melbourne, Australia',
    title: 'Robust SaaS Platform for Start-ups',
    description: `"The developers at VoxQ truly understand the unique challenges of web-based SaaS solutions. They built a robust platform for our start-up and integrated multiple third-party services seamlessly. I've already recommended them to other founders in my network, and I'll definitely be working with them again."`,
    image:
      "", date: 'August 18, 2022',
  },
  {
    name: 'Sophie L. – Toronto, Canada',
    title: 'Seamless Legacy System Migration to Cloud',
    description: `"We had a complex project that involved migrating a legacy system to the cloud, and VoxQ handled it flawlessly. Their deep understanding of cloud infrastructure and attention to data integrity was impressive. It was a pleasure working with such a professional and skilled team!"`,
    image:
      "", date: 'August 18, 2022',
  },
  {
    name: 'Andreas H. – Berlin, Germany',
    title: 'Top-notch Mobile App Development',
    description: `"Team Rahul delivered a top-notch mobile app for our company, complete with all the features we needed and then some. Their agile development approach and transparent communication made the whole process smooth. I highly recommend them for any mobile development projects."`,
    image:
      '', date: 'August 18, 2022',
  },
];

export function Testimonials() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" className={classes.card}>
      <div className={classes.headTitle}>
        <div className={classes.avatar}>
          <Avatar
            src={article.image}
            alt={article.name}
            radius="xl"
            size={56}
          />
        </div>
        <div>
          <div className={classes.name}>{article.name.split('–')[0].trim()}</div>
          <div className={classes.location}>{article.name.split('–')[1]?.trim()}</div>
        </div>
      </div>
      <Divider my="md" size="sm" />
      <div className={classes.title}>{article.title}</div>
      <div className={classes.quote}>{article.description}</div>
    </Card>
  ));
  return (
    <Container py="xl" size="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">{cards}</SimpleGrid>
      <Button
        className={classes.button}
        variant="gradient"
        mt={20}
        size='xl'
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        See More
      </Button>
    </Container>
  );
}
