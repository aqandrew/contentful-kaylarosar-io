import Head from 'next/head'

import { siteName } from 'config'
import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import PostPreview from '@components/PostPreview'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>{siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
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
  const res = await fetchEntries()
  const posts = res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}
