import posts from '@/data/blog.json';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    authorRole: string;
    tags: string[];
    image: string;
}

export const blogPosts: BlogPost[] = posts;
