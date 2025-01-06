import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/Data';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <Link
        href="/news"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg
          className="mr-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to News
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>

          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

