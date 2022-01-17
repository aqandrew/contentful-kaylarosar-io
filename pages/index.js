import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import PostPreview from '@components/PostPreview'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Starter</title>
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}</style>
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
