import Link from 'next/link'

export default function PostPreview({ date, image, title, slug }) {
  // let { file, description } = image

  return (
    <li className="post">
      {/* TODO Add image to post preview */}
      {/* <img alt={description} src={`https:${file.url}`} /> */}
      {/* <div className="description">{description}</div> */}
      <Link href={`/blog/${slug}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
      {/* TODO Add date to post preview */}
      {/* <h3>{date.substring(0, 10)}</h3> */}
    </li>
  )
}
