'use client';
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Modal,
  TextInput,
  Grid,
  Textarea,
  Title,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconAt,
  IconUserScan,
  IconMail,
  IconPhone,
  IconArmchair,
  IconBuildingSkyscraper,
} from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import { useState } from 'react';
import image from '../../assests/icons/logo.svg';
import { useRouter } from 'next/navigation';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

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

export function HeaderMenu() {
  const router = useRouter();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
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
      errors.email = 'Either Email is required';
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

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <Image
            className={classes.logo}
            src={image.src}
            height="45px"
            alt="logo"
            onClick={() => {
              router.push('/');
            }}
          />

          {/* <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
          </Group> */}

          <Group visibleFrom="sm">
            <Button
              variant="default"
              onClick={() => {
                router.push('/request');
              }}
            >
              Request Demo
            </Button>
            <Button onClick={open}>Quick connect</Button>
          </Group>

          {/* <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" /> */}
          <Button
            onClick={() => {
              router.push('/request');
            }}
          >
            Request Demo
          </Button>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {/* <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" /> */}

          <Group justify="center" grow pb="xl" px="md">
            <Button
              variant="default"
              onClick={() => {
                router.push('/request');
              }}
            >
              Request Demo
            </Button>
            <Button onClick={open}>Quick connect</Button>
          </Group>
        </ScrollArea>
      </Drawer>
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
    </Box>
  );
}
