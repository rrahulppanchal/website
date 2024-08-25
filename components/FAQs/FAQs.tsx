import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'Approach',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Approach',
    description: 'What is your approach to ensuring software quality?',
    content:
      'We implement comprehensive quality assurance processes, including rigorous testing, code reviews, and adherence to best practices, to ensure the highest standards in software quality.',
  },

  {
    id: 'Process',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Process',
    description: 'What is your process for handling post-launch support and maintenance?',
    content:
      'We offer comprehensive post-launch support and maintenance, including bug fixes, performance monitoring, and updates, to ensure the software continues to operate smoothly and meets evolving needs.',
  },

  {
    id: 'Delivery',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Delivery',
    description: 'How do you handle project requirements and scope changes?',
    content:
      'We manage project requirements and scope changes through detailed planning and flexible methodologies, ensuring adjustments are efficiently integrated while maintaining project goals and deadlines.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      {/* <Avatar src={image} radius="xl" size="lg" /> */}
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}
export function FAQs() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained" defaultValue="Bender Bending Rodríguez">
      {items}
    </Accordion>
  );
}
