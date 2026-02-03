import { Container } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none">
                    <p>Last updated: February 3, 2026</p>

                    <h2>1. Introduction</h2>
                    <p>Welcome to GrowthSpike. We respect your privacy and are committed to protecting your personal data.</p>

                    <h2>2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
                    <ul>
                        <li>Identity Data (Name, Company)</li>
                        <li>Contact Data (Email address)</li>
                        <li>Technical Data (IP address, browser type)</li>
                    </ul>

                    <h2>3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li>To provide the services you requested (consultations).</li>
                        <li>To manage our relationship with you.</li>
                        <li>To improve our website and services.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.</p>

                    <h2>5. Contact Us</h2>
                    <p>If you have any questions about this privacy policy, please contact us at privacy@growthspike.com.</p>
                </div>
            </div>
        </div>
    );
}
