"use client"
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Illustration } from './Illustration';
import classes from './ComingSoon.module.css';
import { useRouter } from 'next/navigation';

export function ComingSoon() {
    const router = useRouter()
    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <Illustration className={classes.image} />
                <div className={classes.content}>
                    <Title className={classes.title}>Exciting Things Are on the Horizon!</Title>
                    <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                        We're working on an amazing things with innovative features and a sleek design. Stay tuned for updates, and be the first to know when we go live!
                    </Text>
                    <Group justify="center" onClick={() => router.push('/')}>
                        <Button size="md">Take me back to home page</Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}