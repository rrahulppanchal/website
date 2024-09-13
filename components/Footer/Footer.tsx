'use client';
import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import image from '../../assests/icons/logo.svg';

const data = [
  {
    title: 'Company',
    links: [
      { label: 'About us', link: '/about', owns: true },
      { label: 'Career', link: '/jobs', owns: true },
      { label: 'Contact us', link: '/contact-us', owns: true },
      { label: 'Privacy Policy', link: '/privacy-policy', owns: true },
    ],
  },
  {
    title: 'Project',
    links: [
      // { label: 'Products', link: '#', owns: true },
      { label: 'Our work', link: '#', owns: true },
      // { label: 'Releases', link: '#', owns: true },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Follow on Linkedin', link: 'https://www.linkedin.com/company/lumosify', owns: false },
      // { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '/news-letter', owns: true },
      { label: 'Blogs', link: '/blog', owns: true },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        target={link.owns ? '_self' : '_blank'}
        className={classes.link}
        component="a"
        href={link.link}
      // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image className={classes.logo} src={image.src} height="50px" alt="logo" />
          <Text size="xs" c="dimmed" className={classes.description} ml="md">
            Innovating Tomorrow, Today
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          ©{currentYear} VoxQ. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ColorSchemeToggle />
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
