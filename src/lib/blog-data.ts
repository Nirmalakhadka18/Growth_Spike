export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    authorRole: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "future-of-seo-2026",
        title: "The Future of SEO: What to Expect in 2026",
        excerpt: "Discover the emerging trends in search engine optimization, from AI-driven search to voice search dominance.",
        content: `
      <p>Search Engine Optimization is constantly evolving. In 2026, we are seeing a major shift towards AI-generated answers and zero-click searches.</p>
      <h2>The Rise of AI Search</h2>
      <p>With search engines integrating LLMs directly into results, optimizing for "answers" rather than just keywords is crucial. Content must be authoritative, direct, and structured for machines to parse easily.</p>
      <h2>Voice Search is King</h2>
      <p>As smart devices proliferate, voice search queries are becoming longer and more conversational. Long-tail keywords are more important than ever.</p>
      <h2>User Experience (UX) Signals</h2>
      <p>Core Web Vitals are now a baseline. The real differentiator is engagement. If users bounce quickly, your rankings drop. We need to build sticky, engaging experiences.</p>
    `,
        date: "Feb 1, 2026",
        author: "Sarah Jenkins",
        authorRole: "SEO Specialist",
        tags: ["SEO", "Trends", "AI"]
    },
    {
        slug: "content-marketing-roi",
        title: "Measuring Content Marketing ROI: A Comprehensive Guide",
        excerpt: "Stop guessing and start measuring. Learn how to track the true impact of your content marketing efforts.",
        content: `
      <p>Content marketing is effective, but proving its ROI can be tricky. Here is how to set up a robust tracking framework.</p>
      <h2>Define Your KPIs</h2>
      <p>Are you looking for brand awareness (traffic) or conversions (leads)? Different goals require different metrics.</p>
      <h2>Attribution Models</h2>
      <p>First-touch, last-touch, or multi-touch? Understanding where your content fits in the funnel helps you assign value correctly.</p>
    `,
        date: "Jan 28, 2026",
        author: "Mike Ross",
        authorRole: "Content Strategist",
        tags: ["Content", "Marketing", "Analytics"]
    },
    {
        slug: "social-media-algorithms-explained",
        title: "Cracking the Code: Social Media Algorithms Explained",
        excerpt: "Understand how the major platforms prioritize content and how you can get better reach organically.",
        content: `
      <p>Social media platforms want one thing: to keep users on their app.</p>
      <h2>Engagement is Key</h2>
      <p>Likes are good, comments are better, shares are gold. Create content that sparks conversation.</p>
      <h2>Video Dominance</h2>
      <p>Short-form video continues to outperform static images. If you aren't doing reels, you are missing out.</p>
    `,
        date: "Jan 15, 2026",
        author: "Jessica Pearson",
        authorRole: "Social Media Manager",
        tags: ["Social Media", "Algorithm", "Growth"]
    }
];
