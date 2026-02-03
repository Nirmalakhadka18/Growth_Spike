import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | GrowthSpike Digital Marketing",
    description: "Insights, trends, and strategies from our team of digital marketing experts.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <section className="bg-muted/30 py-20 mb-12 border-b border-border">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Marketing Insights
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Latest news, tips, and strategies to help you navigate the digital landscape.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-48 bg-muted w-full relative group overflow-hidden">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {post.tags.slice(0, 1).map(tag => (
                                        <span key={tag} className="bg-background/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold rounded-md shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User className="h-3 w-3 mr-1" />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <Button variant="ghost" className="w-full justify-between" asChild>
                                    <Link href={`/blog/${post.slug}`}>
                                        Read Article <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
