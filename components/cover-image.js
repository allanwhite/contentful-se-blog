import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  // deprecated by <picture> here
  // const image = (
  //   <img
  //     src={`${url}?w=2400&h=1200&fit=thumb&fm=webp&q=50`}
  //     alt={`Cover Image for ${title}`}
  //     loading='lazy'
  //     className={cn('shadow-small', {
  //       'hover:shadow-medium transition-shadow duration-200': slug,
  //     })}
  //   />
  // )
  const image = (
    <picture>
    <source
      srcSet={`${url}?w=1600&h=800&fit=thumb&fm=webp&q=40 1x, ${url}?w=2400&h=1200&fit=thumb&fm=webp&q=50 2x`}
      src={`${url}?w=1200&h=600&fit=thumb&fm=webp&q=5`}
      media='(min-width: 40em)'
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
    <img
      src={`${url}?w=1200&h=600&fit=thumb&fm=webp&q=5`}
      alt={`Cover Image for ${title}`}
      loading='lazy'
    />
    </picture>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
