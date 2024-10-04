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
              </Accordion>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </>
  );
}
