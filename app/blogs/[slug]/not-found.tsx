import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/blogs" 
          className="inline-block bg-app-green-1 text-white px-6 py-3 rounded-lg hover:bg-app-green-2 transition-colors duration-200"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
