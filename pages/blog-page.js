import Link from 'next/link';
import Layout from '../components/Layout';
import { getAllPostsData } from '../lib/posts';

const Blog = ({ posts }) => {
  return (
    <Layout title='Blog'>
      <ul className='m-5'>
        {posts && posts.map((post) => (
          <li key={post.id}>
            <span>{post.id}</span>
            :{" "}
            <Link href={`/posts/${post.id}`} className="text-blue-400 hover:underline">
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
        Blog page
     </Layout>
  )
}

export default Blog

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
