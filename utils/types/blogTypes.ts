export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: string;
    seo: {
      title: string;
      description: string;
      keywords: string;
    };
    content: string;
    faqs?: { title: string; content: string }[];
  }
  
  export interface BlogListingProps {
    blogs: BlogPost[];
  }
  
  export interface BlogPostProps {
    blog: BlogPost;
  }
  