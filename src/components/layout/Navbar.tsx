"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "About", href: "/#about" },
        { name: "Blog", href: "/blog" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Rocket className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">GrowthSpike</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild>
                                <Link href="/#contact">Get Started</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 pb-2">
                            <Button className="w-full" asChild>
                                <Link href="/#contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
