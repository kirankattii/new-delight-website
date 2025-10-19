import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogsData from '@/utils/blogsData.json';
import { BlogPost } from '@/utils/types/blogTypes';
import FaqSection from '@/components/FaqSection';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b: BlogPost) => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found | Delight Eco Farms',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords,
    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      type: 'article',
      url: `https://www.delightecofarms.com/blogs/${blog.slug}`,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      authors: [blog.author],
      publishedTime: blog.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.image],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogsData.map((blog: BlogPost) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b: BlogPost) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat relative">
        {blog.image && (
          <div className="relative h-80 md:h-64 lg:h-100 w-full overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}
      </section>

       {/* Blog Image */}
      
      {/* Blog Content Section */}
      <section className="new-section-padding ">
        <div className="new-container mx-auto">
          <article className="max-w-4xl mx-auto px-2 md:px-4 md:py-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Posted by {blog.author} on {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </header>

           

            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="[&>h2]:text-2xl [&>h2]:font-medium [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>p]:text-gray-700 [&>ul]:space-y-4 [&>ul]:text-gray-700 [&>li]:flex [&>li]:items-start [&_table]:w-full [&_table]:border [&_table]:border-gray-200 [&_th]:bg-gray-50 [&_th]:text-gray-900 [&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 [&_td]:border-t [&_td]:border-gray-200 [&_thead_tr]:border-b [&_tbody_tr:nth-child(even)]:bg-gray-50 overflow-x-auto"
              />
            </div>

            {blog.faqs && blog.faqs.length > 0 && (
              <div className="mt-10">
                <FaqSection title="Frequently Asked Questions" items={blog.faqs} columns={1} />
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
}
