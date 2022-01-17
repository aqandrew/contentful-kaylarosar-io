import { fetchEntries, fetchPost } from '@utils/contentfulPosts'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Post({ post, category }) {
  return (
    <>
      {post ? <h1>{post.title}</h1> : null}
      {category ? <p>Category: {category.title}</p> : null}
      {post ? documentToReactComponents(post.body) : null}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = (await fetchPost(params.slug)).fields
  const category = post.category.fields

  return { props: { post, category } }
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
