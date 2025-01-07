import { articles } from "../../data/Data"
import Image from 'next/image'
import Link from 'next/link'
 

const News = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Recent News</h1>
    <div className="space-y-12">
      {articles.map((article) => (
        <article key={article.id} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">{article.title}</h2>
            <p className="text-gray-600">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
  )
}

export default News
