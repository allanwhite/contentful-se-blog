import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import PostSubhead from '../components/post-subhead'
import {EventNote} from '../public/icons/all-icons.js'

export default function PostHeader({ title, subhead, coverImage, date, author }) {
  return (
    <>
      <header className="mb-12">
      <PostTitle>{title}</PostTitle>
      {subhead ? (
        <PostSubhead>{subhead}</PostSubhead>
      ) : (
        ''
      )}
      </header>
      <aside className="flex flex-col md:flex-row justify-start items-left md:items-center text-left mb-10 mt-10">
        <div className="article-author mb-4 md:mb-0 mr-8">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        {/* <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div> */}
        <div className="text-lg spaced-out">
          <EventNote className='icon-inline mr-1' />
          <DateComponent dateString={date} />
        </div>
      </aside>
      <div className="mb-8 md:mb-16 sm:mx-0 rounded-md overflow-hidden">
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  )
}
