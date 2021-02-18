import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <aside className="mb-12 md:mb-6">
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-2xl-scale mb-3 article-title">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="link">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 spaced-out">
        <DateComponent dateString={date} />
      </div>
      <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </aside>
  )
}
