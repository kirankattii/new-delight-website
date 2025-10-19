'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/utils/types/blogTypes';

interface BlogCardProps {
  blog: BlogPost;
  delay?: number;
  compact?: boolean; // smaller typography for tight layouts
  lgClamp3?: boolean; // on large screens clamp excerpt to 3 lines
  readMoreText?: string; // custom label
}

export default function BlogCard({ blog, delay = 0, compact = false, lgClamp3 = false, readMoreText = 'Continue reading' }: BlogCardProps) {
  const titleClasses = compact
    ? 'text-lg md:text-lg font-medium mb-2 line-clamp-2 h-22'
    : 'text-xl font-medium mb-2 line-clamp-2 h-22';

  const excerptTypography = compact
    ? 'text-gray-600 mb-4 text-sm md:text-[15px]'
    : 'text-gray-600 mb-4';

  const clampClasses = lgClamp3
    ? 'line-clamp-4 md:line-clamp-4 lg:line-clamp-3'
    : 'line-clamp-3';

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="relative w-full h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h2 className={titleClasses}>
          {blog.title}
        </h2>
        <p className={`${excerptTypography} ${clampClasses} h-20`}>
          {blog.excerpt.length > 100 
            ? `${blog.excerpt.substring(0, 110)}...` 
            : blog.excerpt
          }
        </p>
        <Link 
          href={`/blogs/${blog.slug}`} 
          className="text-app-green-1 hover:text-app-green-2 transition-colors duration-200 flex items-center gap-1"
        >
          {readMoreText}
          <svg 
            className="w-4 h-4" 
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
      </div>
    </div>
  );
}
