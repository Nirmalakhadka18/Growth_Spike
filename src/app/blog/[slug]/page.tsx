import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | GrowthSpike Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Button variant="ghost" className="mb-8 pl-0 group text-muted-foreground hover:text-foreground" asChild>
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                </Button>

                <article>
                    <div className="space-y-6 text-center text-foreground mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-8 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="bg-muted p-2 rounded-full">
                                    <User className="h-4 w-4" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-medium text-foreground">{post.author}</p>
                                    <p className="text-xs">{post.authorRole}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-muted p-2 rounded-full">
                                    <Calendar className="h-4 w-4" />
                                </div>
                                <p className="text-sm">{post.date}</p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full aspect-[21/9] rounded-2xl mb-12 border border-border overflow-hidden relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary">
                        <p className="lead text-xl text-muted-foreground mb-8">
                            {post.excerpt}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Share this article</h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon">
                                    <Share2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
