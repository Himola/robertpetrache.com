import { Blog } from '@components/sections';
import { Nav, Page } from '@components/common';

export default function Home({ articles }) {
  return (
    <Page
      title='Robert Petrache | Blog'
      description="Robert's thoughts on Software Development, DevOps, Cloud Computing and Tech in general."
      url='https://robertpetrache.com/blog'
      keywords='Robert, Petrache, web developer, software engineer,Blogger, Bucuresti, Harare software developer, software development blog, React Developer, React Blog'
      image='https://robertpetrache.com/images/banner.jpg'
      canonicalURL='https://robertpetrache.com/blog'
    >
      <Nav className='fixed border-b bg-white bg-opacity-75 py-3 backdrop-blur dark:bg-slate-900 dark:bg-opacity-90' />
      <Blog articles={articles} />
    </Page>
  );
}

export async function getStaticProps() {
  const { NEXT_PUBLIC_DEV_TO_USERNAME } = process.env;
  const res = await fetch(
    `https://dev.to/api/articles?username=${NEXT_PUBLIC_DEV_TO_USERNAME}&state=fresh`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
