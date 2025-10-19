import { Metadata } from 'next';
import blogsData from '@/utils/blogsData.json';
import { BlogPost } from '@/utils/types/blogTypes';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Sustainable Farming Blog | Eco Farms Blog',
  description: 'Expert insights on sustainable farming, coffee plantation management, farmland investment strategies, and eco-friendly living in Sakleshpur, Karnataka.',
  keywords: 'sustainable farming blogs, coffee plantations sakleshpur, farmland investment, eco-friendly living, sakleshpur blogs, western ghats farming',
  alternates: {
    canonical: 'https://www.delightecofarms.com/blogs',
  },
  openGraph: {
    title: 'Sustainable Farming Blog | Eco Farms Blog',
    description: 'Expert insights on sustainable farming, coffee plantation management, farmland investment strategies, and eco-friendly living in Sakleshpur, Karnataka.',
    type: 'website',
    url: 'https://www.delightecofarms.com/blogs',
    images: [
      {
        url: '/imgs/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Delight Eco Farms Blogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainable Farming Blog | Eco Farms Blog',
    description: 'Expert insights on sustainable farming, coffee plantation management, farmland investment strategies, and eco-friendly living in Sakleshpur, Karnataka.',
    images: ['/imgs/og.jpg'],
  },
};

export default function BlogsPage() {
  const blogs: BlogPost[] = [...(blogsData as BlogPost[])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover lg:bg-center blog-header">
        <div className="text-white text-center px-5 h-[400px] lg:h-[400px] flex flex-col justify-center items-center">
          <h1 
            className="text-4xl lg:text-center lg:text-5xl lg:mx-auto header-text"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Insights & Inspiration for<br />
            Sustainable Living
          </h1>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="p-5 md:mb-10">
        <div className="new-container mx-auto">
          <div className="text-center header-text-2 font-medium mb-12" data-aos="fade-up" data-aos-duration="500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.id} 
                blog={blog} 
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
