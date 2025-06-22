import {
  Title,
  Text,
  Button,
  Container,
  useMantineTheme,
  Modal,
  Grid,
  TextInput,
  Textarea,
} from '@mantine/core';
import classes from './HeroText.module.css';
import { Dots } from './Dots';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import {
  IconArmchair,
  IconAt,
  IconBuildingSkyscraper,
  IconMail,
  IconPhone,
  IconUserScan,
  IconRobot,
  IconBrain,
  IconCpu,
} from '@tabler/icons-react';

interface FormState {
  name: string;
  email: string;
  phoneNumber: string;
  skypeId: string;
  designation: string;
  company: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phoneNumber?: string;
  name?: string;
}

export function HomeHero() {
  const router = useRouter();
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phoneNumber: '',
    skypeId: '',
    designation: '',
    company: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!formState.email && !formState.phoneNumber && !formState.name) {
      errors.email = 'Email is required';
      errors.phoneNumber = 'Phone Number is required';
      errors.name = 'Name is required';
    } else {
      if (formState.email && !validateEmail(formState.email)) {
        errors.email = 'Invalid email address';
      }
      if (formState.phoneNumber && !validatePhoneNumber(formState.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number';
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      console.log('Form Submitted:', formState);
    }
  };
  return (
    <>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.subTitle}>AI Agents & Solutions</Title>
          <Title className={classes.title}>
            Building the <Text component="span" className={classes.highlight} inherit>future</Text> with <Text component="span" className={classes.highlight} inherit>AI-driven</Text> software
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              We specialize in developing advanced AI agents, automation tools, and intelligent solutions that transform businesses. Harness the power of machine learning, natural language processing, and custom AI to accelerate your digital journey.
            </Text>
          </Container>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '32px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconRobot size={28} color={theme.colors.blue[6]} />
              <Text size="md">AI Agents</Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconBrain size={28} color={theme.colors.blue[6]} />
              <Text size="md">Machine Learning</Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconCpu size={28} color={theme.colors.blue[6]} />
              <Text size="md">Automation</Text>
            </div>
          </div>

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
              Request AI Demo
            </Button>
            <Button className={classes.control} size="lg" onClick={open}>
              See AI in Action
            </Button>
          </div>
        </div>
      </Container>
      <Modal
        opened={opened}
        onClose={close}
        title={<Title order={3}>Quick Connect</Title>}
        centered
        size="lg"
      >
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                size="md"
                placeholder="Name"
                label="Full Name*"
                type="text"
                name="name"
                error={formErrors.name}
                value={formState.name}
                onChange={handleInputChange}
                leftSection={<IconUserScan size={20} />}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                size="md"
                placeholder="Email"
                label="Email*"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                error={formErrors.email}
                leftSection={<IconMail size={20} />}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                mt="md"
                size="md"
                placeholder="Phone Number"
                label="Phone Number*"
                type="text"
                name="phoneNumber"
                value={formState.phoneNumber}
                onChange={handleInputChange}
                error={formErrors.phoneNumber}
                leftSection={<IconPhone size={20} />}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                mt="md"
                size="md"
                placeholder="Skype/Google Id"
                label="Skype/Google Id"
                name="skypeId"
                value={formState.skypeId}
                onChange={handleInputChange}
                leftSection={<IconAt size={20} />}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                mt="md"
                size="md"
                placeholder="Product Manager"
                label="Designation"
                name="designation"
                value={formState.designation}
                onChange={handleInputChange}
                leftSection={<IconArmchair size={20} />}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                mt="md"
                size="md"
                placeholder="Company"
                label="ABC Pvt"
                name="company"
                value={formState.company}
                onChange={handleInputChange}
                leftSection={<IconBuildingSkyscraper size={20} />}
              />
            </Grid.Col>
          </Grid>
          <Grid mt="md" mb="md">
            <Grid.Col span={12}>
              <Textarea
                size="md"
                placeholder="Your comment"
                label="Message"
                autosize
                minRows={2}
                name="message"
                value={formState.message}
                onChange={handleInputChange}
              />
            </Grid.Col>
          </Grid>
          <Grid m="8px" mb="md" justify="flex-end">
            <Button size="md" type="submit">
              Submit Application
            </Button>
          </Grid>
        </form>
      </Modal>
    </>
  );
}
