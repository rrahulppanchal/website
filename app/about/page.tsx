"use client"
import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Overlay, Container, Title, Button, Text, List } from '@mantine/core';
import classes from './about.module.css';


export default function About() {
  return (
    <>
      <HeaderMenu />
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>Innovating Tomorrow, Today</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Empowering businesses worldwide with innovative and cutting-edge software solutions.
          </Text>

          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Career
          </Button>
        </Container>
      </div>
      <Container size="md" mt="md" mb="md">
        <div>
          <Title order={3}>About Us</Title>
          <Text fz="md" lh="md">
            At VoxQ, we are a global software development company committed to delivering cutting-edge solutions that drive business success. We offer a wide range of software services, from custom development and product innovation to consultation and support. Our expertise spans various industries, enabling us to cater to the unique needs of clients across the globe.
          </Text>
        </div>
        <div>
          <Title order={3}>Our Mission</Title>
          <Text fz="md" lh="md">
            Our mission is to empower businesses by providing them with advanced software solutions that enhance efficiency, foster growth, and pave the way for innovation. We believe in the power of technology to transform the way businesses operate, and we’re dedicated to delivering that transformation with every project we undertake.
          </Text>
        </div>
        <div>
          <Title order={3}>Our Products</Title>
          <Text fz="md" lh="md">
            In addition to offering tailored software development services, we also provide our own suite of products, designed with the needs of modern businesses in mind. These include:

          </Text>
          <List>
            <List.Item>CRM Solutions: Streamline your customer relationship management with our intuitive, feature-rich CRM platform. Designed to simplify communication, improve customer retention, and drive sales growth, our CRM is the go-to tool for businesses looking to elevate their customer experience.</List.Item>
            <List.Item>CMS Solutions: Our content management systems empower businesses to easily manage and organize their digital content. With flexibility, security, and ease of use at its core, our CMS enables companies to create seamless digital experiences for their audiences.</List.Item>
          </List>
          <Text>
            And we’re not stopping there! Our team is continuously innovating and working on new products to meet the ever-evolving demands of the tech world. Stay tuned for upcoming releases that will further revolutionize how businesses operate.
          </Text>
        </div>
        <div>
          <Title order={3}>Our Team</Title>
          <Text fz="md" lh="md">
            We are proud to have a fully remote team of expert software developers located across India. This diverse and talented group of professionals collaborates closely to deliver the best possible outcomes for our clients. By leveraging the strengths of remote work, we bring together a wide range of skills, perspectives, and experiences to create solutions that are innovative, effective, and scalable.
          </Text>
        </div>
        <div>
          <Title order={3}>Our Vision for the Future</Title>
          <Text fz="md" lh="md">
          As a forward-thinking company, we are not just focused on the present but are also invested in shaping the future of technology. We are constantly exploring new ideas, experimenting with cutting-edge technologies, and working on products that will set new industry standards.
          </Text>
        </div>
      </Container>
      <Footer />
    </>
  );
}
