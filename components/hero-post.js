import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 pr-2 text-4xl-scale article-title">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="link">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg spaced-out">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}
