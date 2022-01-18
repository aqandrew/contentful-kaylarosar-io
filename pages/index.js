import Head from 'next/head'

import { siteName } from 'config'
import { fetchCategories, fetchPosts } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import PostPreview from '@components/PostPreview'

export default function Home({ categories, posts }) {
  return (
    <div className="container">
      <Head>
        <title>{siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <h2>Categories</h2>
        <ul>
          {categories.map((c) => {
            return (
              <li key={c.title}>
                <h3>{c.title}</h3>
              </li>
            )
          })}
        </ul>

        <h2>Posts</h2>
        <ul className="posts">
          {posts.map((p) => {
            // TODO Grab date from post metadata
            return <PostPreview key={p.title} {...p} />
          })}
        </ul>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const categoriesRes = await fetchCategories()
  const categories = categoriesRes.map((c) => {
    return c.fields
  })

  const postsRes = await fetchPosts()
  const posts = postsRes.map((p) => {
    return p.fields
  })

  return {
    props: {
      categories,
      posts,
    },
  }
}
