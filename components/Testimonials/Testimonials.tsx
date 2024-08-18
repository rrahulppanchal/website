import { Carousel } from '@mantine/carousel';
import { Skeleton } from '@mantine/core';
const child = <Skeleton height={240} radius="md" animate={false} />;
export function Testimonials() {
  return (
    <Carousel withIndicators height={240}>
      <Carousel.Slide>{child}</Carousel.Slide>
      <Carousel.Slide>{child}</Carousel.Slide>
    </Carousel>
  );
}
