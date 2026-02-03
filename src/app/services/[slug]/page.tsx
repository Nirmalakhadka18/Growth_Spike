import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, BarChart3, Globe, Zap, TrendingUp, Users } from "lucide-react";
import { Metadata } from "next";

// Helper to render the correct icon
const icons = {
    Globe: Globe,
    BarChart3: BarChart3,
    Users: Users,
    Zap: Zap,
    TrendingUp: TrendingUp,
    CheckCircle2: CheckCircle2,
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | GrowthSpike Services`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = icons[service.iconName];

    return (
        <div className="min-h-screen bg-background pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Button variant="ghost" className="mb-8 pl-0 group text-muted-foreground hover:text-foreground" asChild>
                    <Link href="/#services">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>
                </Button>

                <article>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-4 rounded-2xl">
                            <Icon className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {service.title}
                        </h1>
                    </div>

                    <p className="text-xl text-muted-foreground mb-12 border-l-4 border-primary pl-6">
                        {service.description}
                    </p>

                    <div className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-li:marker:text-primary">
                        <div dangerouslySetInnerHTML={{ __html: service.content }} />
                    </div>

                    <div className="mt-16 bg-muted/30 p-8 rounded-2xl border border-border text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to upgrade your {service.title}?</h3>
                        <p className="text-muted-foreground mb-6">Book a consultation today and we will build a custom strategy for you.</p>
                        <Button size="lg" asChild>
                            <Link href="/#contact">Get Started</Link>
                        </Button>
                    </div>
                </article>
            </div>
        </div>
    );
}
