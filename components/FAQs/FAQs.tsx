import { Accordion, Container, Grid, Image, Title } from '@mantine/core';
import image from '../../assests/icons/faq.svg';
import classes from './FaqWithImage.module.css';

export function FAQs() {
  return (
    <>
      <div className={classes.wrapper}>
        <Container size="xl">
          <Grid id="faq-grid" gutter={50} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={image.src} alt="Frequently Asked Questions" />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              {/* <Title order={2} ta="left" className={classes.title}>
                Frequently Asked Questions
              </Title> */}

              <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                  <Accordion.Control>
                    What is your approach to ensuring software quality?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We implement comprehensive quality assurance processes, including rigorous
                    testing, code reviews, and adherence to best practices, to ensure the highest
                    standards in software quality.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account">
                  <Accordion.Control>
                    What is your process for handling post-launch support and maintenance?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We offer comprehensive post-launch support and maintenance, including bug fixes,
                    performance monitoring, and updates, to ensure the software continues to operate
                    smoothly and meets evolving needs.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                  <Accordion.Control>
                    How do you handle project requirements and scope changes?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We manage project requirements and scope changes through detailed planning and
                    flexible methodologies, ensuring adjustments are efficiently integrated while
                    maintaining project goals and deadlines.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-agents">
                  <Accordion.Control>
                    What are AI agents and how can they help my business?
                  </Accordion.Control>
                  <Accordion.Panel>
                    AI agents are intelligent software entities that can autonomously perform tasks, make decisions, and interact with users or systems. They can automate repetitive processes, provide insights, and enhance productivity across various business functions.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-security">
                  <Accordion.Control>
                    How secure is the data handled by your AI solutions?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We prioritize data security by implementing industry-standard encryption, secure data storage, and strict access controls. Our AI solutions are designed to comply with relevant data protection regulations and best practices.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-integration">
                  <Accordion.Control>
                    Can your AI agents integrate with our existing software?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Yes, our AI agents are built with interoperability in mind and can be integrated with a wide range of existing software platforms, APIs, and workflows to maximize value and minimize disruption.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-industries">
                  <Accordion.Control>
                    What industries benefit most from AI-driven solutions?
                  </Accordion.Control>
                  <Accordion.Panel>
                    AI-driven solutions are beneficial across many industries, including healthcare, finance, retail, manufacturing, logistics, and customer service. We tailor our solutions to meet the unique needs of each sector.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-ethics">
                  <Accordion.Control>
                    How do you ensure ethical use of AI in your projects?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We adhere to ethical AI principles, including transparency, fairness, and accountability. Our development process includes regular audits and reviews to ensure responsible and unbiased AI deployment.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-deployment">
                  <Accordion.Control>
                    How quickly can an AI agent be deployed for my use case?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Deployment timelines vary depending on complexity, but we strive for rapid prototyping and agile development. Many standard AI agents can be deployed within a few weeks.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="ai-support">
                  <Accordion.Control>
                    What support do you offer after deploying an AI solution?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We provide ongoing support, monitoring, and optimization services to ensure your AI solution continues to deliver value and adapts to changing business needs.
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </>
  );
}
