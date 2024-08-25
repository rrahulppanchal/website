import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import {
  IconTruck,
  IconCertificate,
  IconCoin,
  IconDeviceDesktopAnalytics,
  IconDeviceMobile,
  IconTournament,
  IconMessageUser,
} from '@tabler/icons-react';
import classes from './FeaturesAsymmetrical.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconDeviceDesktopAnalytics,
    title: 'Web-Based Solutions',
    description:
      'Web-based solutions scale with your business, offering secure, adaptable, and efficient applications for a robust digital presence.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Mobile-Based Solutions',
    description:
      'Mobile-based solutions deliver versatile, responsive apps that enhance user experience and support your business growth on every device.',
  },
  {
    icon: IconTournament,
    title: 'IoT-Based Solutions',
    description:
      'IoT-based solutions connect and optimize devices to streamline operations, enhance data insights, and drive innovation across industries.',
  },
  {
    icon: IconMessageUser,
    title: 'Chat-Based Support',
    description:
      'Chat-based support offers real-time assistance through messaging, enhancing customer service with instant, personalized responses and efficient problem-solving.',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="xl">
      <SimpleGrid cols={{ base: 1, sm: 4 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
