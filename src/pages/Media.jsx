import { useNavigate } from 'react-router-dom'
import { getArticlesByDate } from '@/config/articles'
import { getMemberById } from '@/config/team'
import colors from '@/config/colors'
import { Calendar, User, ArrowRight } from 'lucide-react'

const Media = () => {
  const navigate = useNavigate()
  const articles = getArticlesByDate()

  // Formatta data in italiano
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
      className="w-full min-h-screen py-24 px-6 md:px-12"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ color: colors.yellow }}
          >
            Media
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Notizie, articoli e aggiornamenti dai Geymonat Wolves
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => {
            const authors = article.authors.map(id => getMemberById(id))

            return (
              <article
                key={article.id}
                onClick={() => navigate(`/media/${article.slug}`)}
                className="group cursor-pointer rounded-xl border transition-all hover:border-white/30 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.08)'
                }}
              >
                {/* Cover Image */}
                {article.coverImage && (
                  <div
                    className="w-full overflow-hidden bg-white/5"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-4 md:p-5">
                  {/* Article Header */}
                  <div className="flex flex-col gap-2 mb-3">
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Calendar size={14} />
                      <span className="text-xs">{formatDate(article.date)}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full"
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
                  </div>

                  {/* Title */}
                  <h2 className="text-base md:text-lg font-semibold text-white mb-2 leading-tight line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/50 text-sm mb-3 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/5">
                    {/* Authors */}
                    <div className="flex items-center gap-1.5 text-xs">
                      <User size={14} className="text-white/40" />
                      <div className="flex flex-wrap gap-1">
                        {authors.map((author, index) => (
                          <span key={author.id} className="text-white/60">
                            <span
                              onClick={(e) => {
                                e.stopPropagation()
                                navigate(`/team/${author.slug}`)
                              }}
                              className="hover:text-white transition-colors cursor-pointer"
                            >
                              {author.fullName}
                            </span>
                            {index < authors.length - 1 && <span>, </span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More */}
                    <div
                      className="flex items-center gap-1 font-semibold transition-all group-hover:gap-2"
                      style={{ color: colors.yellow }}
                    >
                      <span className="text-xs">Leggi</span>
                      <ArrowRight size={14} className="transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-xl">Nessun articolo disponibile</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Media
