const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

async function fetchEntries(content_type) {
  const entries = await client.getEntries({
    content_type,
  })

  if (entries.items) {
    return entries.items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchPosts() {
  return fetchEntries('post')
}

export async function fetchCategories() {
  return fetchEntries('category')
}

export async function fetchPost(slug) {
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  })

  return entries.items[0]
}

export default { fetchPosts }
