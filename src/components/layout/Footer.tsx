import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Rocket className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">GrowthSpike</span>
                        </div>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Helping businesses scale through data-driven digital marketing strategies.
                            We turn clicks into long-term customers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">SEO Optimization</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Content Marketing</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Paid Advertising</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Social Media</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Careers</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} GrowthSpike Marketing. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
