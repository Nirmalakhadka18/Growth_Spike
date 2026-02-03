'use server'

import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/leads.json');

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    const newLead = {
        id: Date.now(),
        name,
        email,
        company: company || 'N/A',
        message,
        status: 'New',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    };

    try {
        // Read existing data
        const fileData = await fs.readFile(dataFilePath, 'utf-8');
        const leads = JSON.parse(fileData);

        // Add new lead - prepend to show first
        leads.unshift(newLead);

        // Write back to file
        await fs.writeFile(dataFilePath, JSON.stringify(leads, null, 2));

        // Revalidate dashboard so it shows the new lead
        revalidatePath('/dashboard');

        return { success: true };
    } catch (error) {
        console.error('Failed to save lead:', error);
        return { success: false, error: 'Failed to save data' };
    }
}
