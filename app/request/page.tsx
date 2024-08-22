'use client';
import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Checkbox, Grid, Select, Textarea, TextInput } from '@mantine/core';
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCalendarTime, IconCheck, IconSitemap } from '@tabler/icons-react';
import image from '../../assests/icons/computer.svg';
import classes from './request.module.css';
import {
  IconArmchair,
  IconAt,
  IconBuildingSkyscraper,
  IconMail,
  IconPhone,
  IconUserScan,
} from '@tabler/icons-react';
import { useState } from 'react';
import { DateTimePicker } from '@mantine/dates';
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
export default function Request() {
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
  return (
    <>
      <HeaderMenu />
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <form onSubmit={handleSubmit}>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput
                    size="sm"
                    required
                    placeholder="Name"
                    label="Full Name"
                    type="text"
                    name="name"
                    error={formErrors.name}
                    value={formState.name}
                    onChange={handleInputChange}
                    leftSection={<IconUserScan size={18} />}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    size="sm"
                    placeholder="Email"
                    label="Email"
                    required
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                    leftSection={<IconMail size={18} />}
                  />
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput
                    mt="md"
                    size="sm"
                    placeholder="Phone Number"
                    label="Phone Number"
                    required
                    type="text"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleInputChange}
                    error={formErrors.phoneNumber}
                    leftSection={<IconPhone size={18} />}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    mt="md"
                    size="sm"
                    placeholder="Company name"
                    label="Company name"
                    name="skypeId"
                    value={formState.skypeId}
                    onChange={handleInputChange}
                    leftSection={<IconBuildingSkyscraper size={18} />}
                  />
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span={6}>
                  <Select
                    size="sm"
                    mt="md"
                    label="Services Interested In"
                    required
                    placeholder="Preferred serive"
                    data={[
                      {
                        group: 'Development',
                        items: [
                          'Website Development',
                          'Mobile App Development',
                          'E-commerce Solutions',
                        ],
                      },
                      { group: 'Designing', items: ['UI/UX Design', 'SEO & Digital Marketing'] },
                      {
                        group: 'Others',
                        items: ['Custom Applications', 'Maintenance & Support'],
                      },
                    ]}
                    leftSection={<IconSitemap size={18} />}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <DateTimePicker
                    clearable
                    size="sm"
                    mt="md"
                    // defaultValue={new Date()}
                    required
                    label="Preferred date and time"
                    placeholder="Preferred date and time"
                    leftSection={<IconCalendarTime size={18} />}
                  />
                </Grid.Col>
              </Grid>
              <Grid mt="md" mb="md">
                <Grid.Col span={12}>
                  <Textarea
                    size="sm"
                    placeholder="Your comment"
                    label="Specific Requirements or Questions"
                    autosize
                    minRows={2}
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                  />
                </Grid.Col>
              </Grid>
              <Checkbox
                defaultChecked
                size="xs"
                required
                label="I agree to the Privacy Policy and consent to having my information stored for the
                  purpose of processing my demo request."
              />
              <Grid m="8px" mb="md" mt="40px" justify="flex-end">
                <Button size="sm" type="submit">
                  Submit Application
                </Button>
              </Grid>
            </form>
          </div>
          <Image src={image.src} className={classes.image} alt="voxq" />
        </div>
      </Container>
      <Footer />
    </>
  );
}
