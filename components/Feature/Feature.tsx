import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import {
  IconBrain,
  IconCloud,
  IconDeviceLaptop,
  IconDevices,
  IconSignature,
  IconDeviceImacCog,
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
    icon: IconBrain,
    title: 'AI/ML Solutions',
    description:
      'Leverage advanced AI agents and machine learning to automate, predict, and optimize your business processes for the future.',
  },
  {
    icon: IconCloud,
    title: 'Cloud Consulting',
    description:
      'Modernize and scale with secure, intelligent cloud solutions—enabling seamless AI integration and data-driven growth.',
  },
  {
    icon: IconDevices,
    title: 'Web & Mobile Solutions',
    description:
      'Build smart, responsive web and mobile applications powered by AI for superior user experiences and business agility.',
  },
  {
    icon: IconSignature,
    title: 'UI/UX Design',
    description:
      'Design intuitive, AI-enhanced interfaces that delight users and drive engagement across all platforms.',
  },
  {
    icon: IconDeviceImacCog,
    title: 'Support & Maintenance',
    description:
      'Keep your AI-powered systems running smoothly with proactive support, monitoring, and continuous improvement.',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="xl">
      <SimpleGrid cols={{ base: 1, sm: 5 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
