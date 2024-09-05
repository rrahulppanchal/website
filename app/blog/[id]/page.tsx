import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { Title, Text, Button, Container, Avatar } from '@mantine/core';
import { Dots } from './Dots';
import classes from './Blog.module.css';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  date: Date | string;
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  let posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) => res.json());
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  let post = await fetch(`https://api.vercel.app/blog/${params.id}`).then((res) => res.json());
  return (
    <main>
      <HeaderMenu />
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>{post.title}</Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              {post.title}
            </Text>
          </Container>

          {/* <div className={classes.controls}>
            <Button className={classes.control} size="lg" variant="default" color="gray">
              Book a demo
            </Button>
            <Button className={classes.control} size="lg">
              Purchase a license
            </Button>
          </div> */}
        </div>
      </Container>
      <Container size="md">
        <Container p="0px" my="md">
          <Avatar />
        </Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo neque quasi voluptatem
          aut rem, ipsum sit perferendis beatae, ipsa dolores odit! Debitis, nihil, placeat
          excepturi aliquid odio consectetur exercitationem repellat hic dignissimos voluptatum
          tempore consequuntur deleniti possimus laudantium explicabo totam. Numquam cumque, eaque
          quas repudiandae dolorem culpa accusamus at quaerat, modi perferendis vitae. Dolore,
          soluta? Blanditiis, magnam sit saepe ab nemo fugit? Voluptatum tempore quas est minus
          suscipit quisquam beatae rem nulla accusamus possimus blanditiis, ut at adipisci natus
          deserunt distinctio reprehenderit praesentium! Quis culpa praesentium obcaecati vitae esse
          optio est reiciendis recusandae laudantium, omnis dolore maiores quae corporis eaque.
          Ipsum at, minus fugit incidunt impedit dolores repellat similique assumenda sint in ex
          alias aspernatur, iusto vero atque vel nisi soluta ea eos perferendis delectus magnam
          beatae autem. Quia, perferendis. Aut architecto dolor repudiandae, enim, omnis, voluptas
          earum cumque illum dolore eligendi quo minima quidem adipisci nihil blanditiis ad
          aspernatur quam harum nobis excepturi doloremque consequuntur error ea dolores. Unde
          aspernatur atque et asperiores incidunt nam, voluptate laborum laudantium nulla qui
          repellendus eaque aut non accusantium error cupiditate eligendi perferendis amet debitis
          iure ut ratione nisi? Nulla nam omnis mollitia repellat sit officiis, inventore delectus
          quam facilis vel non nisi maxime eos beatae laborum, autem perspiciatis consequuntur cum
          tempore magni officia ea fuga! Est accusantium assumenda officiis itaque eaque dolorum
          distinctio perferendis odit esse nemo cum, veritatis non officia fuga praesentium
          doloribus beatae quasi velit quae. Ea delectus recusandae deserunt voluptas itaque
          explicabo adipisci inventore earum cum, porro dicta enim debitis! Fugiat illum nostrum
          explicabo quam nihil. Blanditiis placeat commodi ipsam, accusamus, est excepturi eius
          vitae perspiciatis ipsum facere rerum iste ipsa odit ab dolor, consequatur saepe neque
          eveniet ducimus! Obcaecati sapiente vero ad sunt molestiae eos perferendis alias tempore
          voluptatem impedit minima quae aperiam veritatis modi consectetur, itaque accusantium vel
          iusto est non quis quisquam! Fugiat eveniet sed earum voluptas, amet, nisi velit officiis
          exercitationem tempora, explicabo blanditiis itaque sunt accusamus ducimus nesciunt quis
          vero saepe officia minima in minus quae. Sequi aperiam recusandae totam qui dolore,
          repellat at neque porro dolorum vero fugiat excepturi ipsa maiores commodi, odit nisi
          voluptatum eum illo modi perferendis mollitia. Voluptatem, enim sunt laborum optio, autem
          doloribus mollitia possimus ullam quisquam suscipit temporibus at repellendus ea pariatur,
          voluptas provident praesentium sit exercitationem quas quos cupiditate. Repudiandae
          blanditiis cupiditate repellendus exercitationem assumenda optio nostrum? Natus delectus
          vero qui accusantium suscipit recusandae praesentium corrupti possimus cum commodi
          deserunt fugit nostrum non, velit quidem, dolore doloribus quos incidunt optio id
          voluptatem? Neque similique asperiores voluptate minima incidunt, praesentium alias odit
          repellat voluptates error sunt, id fuga molestias nobis nisi magnam, modi nostrum quam
          sint necessitatibus consectetur ipsum quod atque. Deserunt, reiciendis doloribus, mollitia
          tempore eius laborum culpa obcaecati dolores, officiis dolorum nobis pariatur. Soluta ex
          mollitia sapiente impedit enim pariatur quasi! Animi nobis omnis aspernatur minus mollitia
          ab nostrum ullam, quam eaque sapiente molestiae provident cumque esse, quia facere,
          adipisci neque veritatis non impedit voluptatem. Itaque adipisci, id quam voluptates vero
          odit sunt corrupti odio.
        </p>
        <div dangerouslySetInnerHTML={{ __html: 'lorem500' }}></div>
      </Container>
      <Footer />
    </main>
  );
}
