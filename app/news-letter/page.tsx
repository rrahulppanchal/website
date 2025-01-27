"use client"
import { Text, Title, TextInput, Button, Image, Container } from '@mantine/core';
import image from '../../assests/icons/email-banner.svg';
import classes from './NewsLetter.module.css';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import { sendMail } from '@/lib/send-mail';
import { serviceRequestEmail } from '@/utils/service-request-email';

export default function NewsLetter() {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent("hello world")}`;

    const onMailSend = async () => {
        const response = await sendMail({
            email: "rahulpanchaloff@gmail.com",
            subject: 'Service Requested',
            html: serviceRequestEmail("rahulpanchaloff@gmail.com", "test", "98232323232", "dewd", "test", "saas", "Asdasds"),
        });
        if (response?.messageId) {
            console.log('Application Submitted Successfully.');
        } else {
            console.error('Failed To send application.');
        }   
    };

    return (
        <>
            <HeaderMenu />
            <Container size="lg">
                <div className={classes.wrapper}>
                    <div className={classes.body}>
                        <Title className={classes.title}>Wait a minute...</Title>
                        <Text fw={500} fz="lg" mb={5}>
                            Subscribe to our newsletter!
                        </Text>
                        <Text fz="sm" c="dimmed">
                            You will never miss important product updates, latest news and community QA sessions. Our
                            newsletter is once a week, every Sunday.
                        </Text>

                        <div className={classes.controls}>
                            <TextInput
                                placeholder="Your email"
                                classNames={{ input: classes.input, root: classes.inputWrapper }}
                            />
                            <Button className={classes.control} onClick={() => { onMailSend() }}>Subscribe</Button>
                        </div>
                    </div>
                    <Image src={image.src} className={classes.image} />
                </div>
            </Container>
            <Footer />
        </>
    );
}