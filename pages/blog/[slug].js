import { fetchEntries, fetchPost } from '@utils/contentfulPosts'

export default function Post({ post }) {
  return <h1>{post.title}</h1>
}

export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug)

  return { props: { post: post.fields } }
}

export async function getStaticPaths() {
  const posts = await fetchEntries()

  return {
    paths:
      posts?.map((post) => ({
        params: {
          slug: post.fields.slug,
        },
      })) || [],
    fallback: true,
  }
}
