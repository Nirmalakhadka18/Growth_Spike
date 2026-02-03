import DashboardClient from "@/components/DashboardClient";
import fs from 'fs/promises';
import path from 'path';

// Define the Lead type based on our JSON structure
interface Lead {
    id: number;
    name: string;
    email: string;
    company: string;
    status: string;
    date: string;
    message: string;
}

async function getLeads(): Promise<Lead[]> {
    const filePath = path.join(process.cwd(), 'src/data/leads.json');
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export default async function DashboardPage() {
    const leads = await getLeads();
    return <DashboardClient leads={leads} />;
}
