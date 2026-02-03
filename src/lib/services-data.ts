import { BarChart3, Globe, Zap, CheckCircle2, TrendingUp, Users, LucideIcon } from "lucide-react";

export interface Service {
    slug: string;
    title: string;
    description: string;
    content: string;
    iconName: "Globe" | "BarChart3" | "Users" | "Zap" | "TrendingUp" | "CheckCircle2";
}

export const services: Service[] = [
    {
        slug: "seo-optimization",
        title: "SEO Optimization",
        description: "Rank higher on search engines and attract organic traffic with our proven SEO strategies.",
        content: `
      <h2>Dominate Search Results</h2>
      <p>Search Engine Optimization is the backbone of sustainable online growth. Our team uses the latest signals and white-hat techniques to ensure your brand appears exactly where your customers are looking.</p>
      
      <h3>Our Process</h3>
      <ul>
        <li><strong>Audit & Analysis:</strong> We dig deep into your current site architecture and content.</li>
        <li><strong>Keyword Research:</strong> Identifying high-value opportunities your competitors missed.</li>
        <li><strong>On-Page Optimization:</strong> Perfecting titles, meta tags, and internal linking.</li>
        <li><strong>Authority Building:</strong> Earning high-quality backlinks from reputable sources.</li>
      </ul>
      
      <p>Stop paying for every click. Build an asset that drives traffic 24/7.</p>
    `,
        iconName: "Globe"
    },
    {
        slug: "paid-advertising",
        title: "Paid Advertising",
        description: "Maximize ROI with targeted PPC campaigns on Google, Facebook, and LinkedIn.",
        content: `
      <h2>Instant Visibility, Measurable Results</h2>
      <p>Paid advertising (PPC) puts your brand in front of ready-to-buy customers immediately. We manage campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, and TikTok.</p>
      
      <h3>Why Choose Us?</h3>
      <p>We don't just "set it and forget it". We obsessively A/B test ad copy, creatives, and landing pages to lower your Cost Per Acquisition (CPA) and increase your Return on Ad Spend (ROAS).</p>
      
      <ul>
        <li>Precision Targeting</li>
        <li>Retargeting Campaigns</li>
        <li>Shopping Ads</li>
        <li>Lead Gen Forms</li>
      </ul>
    `,
        iconName: "BarChart3"
    },
    {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Build a loyal community and engage your audience with compelling social content.",
        content: `
      <h2>Turn Followers into Brand Advocates</h2>
      <p>Social media isn't just about posting pretty pictures. It's about building a community and a voice for your brand. We handle everything from strategy and content creation to community management.</p>
      
      <h3>Platforms We Master</h3>
      <ul>
        <li><strong>Instagram & TikTok:</strong> Short-form video and visual storytelling.</li>
        <li><strong>LinkedIn:</strong> B2B thought leadership and networking.</li>
        <li><strong>Twitter/X:</strong> Real-time engagement and customer support.</li>
      </ul>
    `,
        iconName: "Users"
    },
    {
        slug: "content-strategy",
        title: "Content Strategy",
        description: "Create valuable content that educates, entertains, and converts your target audience.",
        content: `
      <h2>Content That Converts</h2>
      <p>Content is the fuel for your marketing engine. We create data-driven content strategies that map to every stage of the buyer's journey.</p>
      
      <p>From blog posts and whitepapers to video scripts and email newsletters, we ensure every word serves a purpose: moving your customer closer to a purchase.</p>
    `,
        iconName: "Zap"
    },
    {
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization",
        description: "Turn more visitors into customers by optimizing your website's user experience.",
        content: `
      <h2>Make Every Visitor Count</h2>
      <p>Traffic is useless if it doesn't convert. CRO is the science of removing friction and persuading visitors to take action.</p>
      
      <h3>What We Optimize</h3>
      <ul>
        <li>Landing Page Layouts</li>
        <li>Call-to-Action (CTA) Placement</li>
        <li>Checkout Flows</li>
        <li>Form Usability</li>
      </ul>
      
      <p>We use heatmaps, user recordings, and A/B testing tools to make data-backed decisions.</p>
    `,
        iconName: "TrendingUp"
    },
    {
        slug: "analytics-reporting",
        title: "Analytics & Reporting",
        description: "Transparent reporting that shows you exactly where your budget is going and the results achieved.",
        content: `
      <h2>Data You Can Understand</h2>
      <p>Marketing shouldn't be a black box. We provide custom dashboards that show you the metrics that actually matter to your bottom line.</p>
      
      <p>No vanity metrics. Just clear, actionable insights on your ROI, Customer Lifetime Value (LTV), and Attribution.</p>
    `,
        iconName: "CheckCircle2"
    }
];
