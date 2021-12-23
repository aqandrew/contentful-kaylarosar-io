function Post({ date, image, title }) {
  // let { file, description } = image

  return (
    <li className="post">
      {/* TODO Add image to post preview */}
      {/* <img alt={description} src={`https:${file.url}`} /> */}
      {/* <div className="description">{description}</div> */}
      <h2>{title}</h2>
      {/* TODO Add date to post preview */}
      {/* <h3>{date.substring(0, 10)}</h3> */}
    </li>
  )
}

export default Post
