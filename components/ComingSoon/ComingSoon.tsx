"use client"
import { Container, Title, Text, Button, Group, Image, SimpleGrid } from '@mantine/core';
import { Illustration } from './Illustration';
import classes from './ComingSoon.module.css';
import { useRouter } from 'next/navigation';
import image from "@/assests/icons/working.svg"

export function ComingSoon() {
    const router = useRouter()
    return (
        <Container className={classes.root} size="lg">
            <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
                <Image src={image.src} className={classes.mobileImage} alt="voxq" />
                <div>
                    <Title className={classes.title}>Coming Soon...</Title>
                    <Text c="dimmed" size="lg">
                        We're working on something truly exciting! Our team is building amazing things with innovative features and a sleek, user-friendly design that will redefine your experience.
                    </Text>
                    <br />
                    <Text c="dimmed" size="lg">
                        Stay tuned for updates, and be the first to know when we go live! By subscribing to our updates, you’ll get an inside look at what’s coming and ensure you’re ready to dive into our new features as soon as they launch.
                    </Text>
                    <Button variant="outline" size="md" mt="xl" className={classes.control} onClick={() => router.push('/')}>
                        Get back to home page
                    </Button>
                </div>
                <Image src={image.src} className={classes.desktopImage} alt="voxq" />
            </SimpleGrid>
        </Container>
    );
}