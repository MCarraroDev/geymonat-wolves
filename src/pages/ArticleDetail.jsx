import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getArticleBySlug } from '@/config/articles'
import { getMemberById } from '@/config/team'
import colors from '@/config/colors'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

const ArticleDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = getArticleBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center px-4"
        style={{ backgroundColor: colors.dark }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">Articolo non trovato</h1>
        <button
          onClick={() => navigate('/media')}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
        >
          Torna a Media
        </button>
      </div>
    )
  }

  const authors = article.authors.map(id => getMemberById(id))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div
      className="w-full min-h-screen pb-32"
      style={{ backgroundColor: colors.dark }}
    >
      {/* Cover Image */}
      {article.coverImage && (
        <div
          className="w-full overflow-hidden bg-white/5"
          style={{
            aspectRatio: '4/3',
            maxHeight: '60vh'
          }}
        >
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Header */}
      <div
        className="w-full py-20 md:py-32 px-6 md:px-12"
        style={{
          background: `linear-gradient(180deg, ${colors.primary}15 0%, ${colors.dark} 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: colors.white,
                  border: `1px solid rgba(255,255,255,0.1)`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          >
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/70">
            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="text-sm font-medium">{formatDate(article.date)}</span>
            </div>

            {/* Authors */}
            <div className="flex items-center gap-2">
              <User size={18} />
              <div className="flex flex-wrap gap-2">
                {authors.map((author, index) => (
                  <span key={author.id} className="text-sm text-white/70">
                    <span
                      onClick={() => navigate(`/team/${author.slug}`)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {author.fullName}
                    </span>
                    {index < authors.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-8">
        <article
          className="prose prose-lg prose-invert max-w-none"
          style={{
            '--tw-prose-body': 'rgba(255,255,255,0.8)',
            '--tw-prose-headings': 'white',
            '--tw-prose-bold': 'white',
            '--tw-prose-links': colors.primary,
            '--tw-prose-quotes': 'rgba(255,255,255,0.7)',
          }}
        >
          <div className="text-white/80 text-lg leading-relaxed space-y-6">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-3xl font-bold text-white mt-12 mb-6 pb-3 border-b border-white/10"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-2xl font-bold text-white mt-8 mb-4"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-white/80 text-lg leading-loose mb-6" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="text-white font-bold" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 text-white/80" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside space-y-2 text-white/80" {...props} />
                ),
                a: ({ node, href, ...props }) => {
                  if (href?.startsWith('/')) {
                    return <Link to={href} className="text-yellow-400 hover:text-white transition-colors" style={{ textDecoration: 'none' }} {...props} />
                  }
                  return <a href={href} className="text-yellow-400 hover:text-white transition-colors underline" target="_blank" rel="noopener noreferrer" {...props} />
                },
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ArticleDetail
