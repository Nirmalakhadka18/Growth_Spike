"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)] dark:bg-grid-slate-400/[0.05]" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              Scale Your Business With <br />
              <span className="text-primary">Data-Driven Marketing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-[700px] text-lg text-muted-foreground md:text-xl"
            >
              We combine creative strategy with technical expertise to turn your visitors into loyal customers. No fluff, just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="#contact">
                  Start Your Growth <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="#services">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive marketing solutions designed to cover every aspect of your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full"
                >
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    {/* Dynamic Icon Rendering */}
                    {service.iconName === 'Globe' && <Globe className="h-10 w-10 text-primary" />}
                    {service.iconName === 'BarChart3' && <BarChart3 className="h-10 w-10 text-primary" />}
                    {service.iconName === 'Users' && <Users className="h-10 w-10 text-primary" />}
                    {service.iconName === 'Zap' && <Zap className="h-10 w-10 text-primary" />}
                    {service.iconName === 'TrendingUp' && <TrendingUp className="h-10 w-10 text-primary" />}
                    {service.iconName === 'CheckCircle2' && <CheckCircle2 className="h-10 w-10 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Why Us Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Why Choose GrowthSpike?
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe in transparency, data, and partnership. Unlike other agencies, we don&apos;t hide behind jargon. We show you the numbers that matter.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated Account Manager for every client",
                  "Bi-weekly performance reporting",
                  "Month-to-month contracts available",
                  "Custom strategy tailored to your industry"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-6 rounded-2xl text-center space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm font-medium text-muted-foreground">Client Retention</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl text-center space-y-2">
                <div className="text-4xl font-bold text-primary">250+</div>
                <div className="text-sm font-medium text-muted-foreground">Projects Launched</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl text-center space-y-2">
                <div className="text-4xl font-bold text-primary">5x</div>
                <div className="text-sm font-medium text-muted-foreground">Average ROI</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl text-center space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm font-medium text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Spike Your Growth?
              </h2>
              <p className="text-lg text-muted-foreground">
                Book a free 30-minute strategy call with our experts. We&apos;ll audit your current digital presence and propose a roadmap for growth.
              </p>
              <div className="hidden lg:block space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <span>We analyze your current performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <span>Map out a 90-day growth plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <span>Execute and iterate for maximum ROI</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto lg:mx-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
