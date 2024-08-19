// ArticleModal.tsx
import React from 'react'

type Article = {
  id: number
  title: string
  image: string
  date: string
  publisher: string
  location: string
  description: string
}

type ArticleModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  article: Article | null
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onRequestClose,
  article,
}) => {
  if (!isOpen || !article) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <button
          className="absolute right-4 top-4 p-2 text-6xl text-gray-200 hover:text-gray-700"
          onClick={onRequestClose}
        >
          &times;
        </button>

        <img
          src={article.image}
          alt={article.title}
          className="h-64 w-full rounded-t-lg object-cover"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {article.title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Published by {article.publisher} - {article.date} -{' '}
            {article.location}
          </p>
          <p className="mt-4 text-gray-600">{article.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleModal
