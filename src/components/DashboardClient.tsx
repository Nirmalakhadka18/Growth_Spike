"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Users,
    ArrowUpRight,
    MessageSquare,
    Clock,
    MoreHorizontal,
    Search,
    LayoutDashboard,
    Settings,
    LogOut
} from "lucide-react";
import Link from "next/link";

interface Lead {
    id: number;
    name: string;
    email: string;
    company: string;
    status: string;
    date: string;
    message: string;
}

export default function DashboardClient({ leads }: { leads: Lead[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeView, setActiveView] = useState("dashboard"); // 'dashboard', 'inquiries', 'clients'

    const filteredLeads = leads.filter((lead) => {
        // 1. Search Filter
        const matchesSearch =
            lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.company.toLowerCase().includes(searchQuery.toLowerCase());

        if (!matchesSearch) return false;

        // 2. View Filter
        if (activeView === 'inquiries') {
            // Show only 'New' or 'Contacted' leads
            return lead.status === 'New' || lead.status === 'Contacted';
        }
        if (activeView === 'clients') {
            // Show only 'Qualified' or 'Closed' (simulating clients)
            return lead.status === 'Qualified' || lead.status === 'Closed';
        }

        // 'dashboard' view shows everything (or you could customize this)
        return true;
    });

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-background hidden md:block">
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <span className="font-bold text-xl tracking-tight text-primary">GrowthSpike Admin</span>
                </div>
                <nav className="p-4 space-y-2">
                    <Button
                        variant={activeView === 'dashboard' ? "secondary" : "ghost"}
                        className={`w-full justify-start ${activeView === 'dashboard' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveView('dashboard')}
                    >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </Button>
                    <Button
                        variant={activeView === 'inquiries' ? "secondary" : "ghost"}
                        className={`w-full justify-start ${activeView === 'inquiries' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveView('inquiries')}
                    >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Inquiries
                    </Button>
                    <Button
                        variant={activeView === 'clients' ? "secondary" : "ghost"}
                        className={`w-full justify-start ${activeView === 'clients' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveView('clients')}
                    >
                        <Users className="mr-2 h-4 w-4" />
                        Clients
                    </Button>
                    <div className="pt-8">
                        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-500 hover:bg-red-400/10" asChild>
                            <Link href="/">
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Link>
                        </Button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm sticky top-0 z-10">
                    <div className="flex items-center text-muted-foreground text-sm">
                        <span className="text-foreground font-medium">Dashboard</span>
                        <span className="mx-2">/</span>
                        <span className="capitalize">{activeView}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search leads..."
                                className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-4 text-sm outline-none focus:ring-1 focus:ring-primary"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                            A
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight capitalize">{activeView} Overview</h1>
                        <p className="text-muted-foreground">Manage your incoming consultation requests.</p>
                    </div>

                    {/* Stats Grid - Show in all views for now */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{leads.length}</div>
                                <p className="text-xs text-muted-foreground">Real-time Data</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">New Requests</CardTitle>
                                <MessageSquare className="h-4 w-4 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{leads.filter(l => l.status === 'New').length}</div>
                                <p className="text-xs text-muted-foreground">Requires attention</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                                <Clock className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">--</div>
                                <p className="text-xs text-muted-foreground">Calculated periodically</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                                <ArrowUpRight className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">--</div>
                                <p className="text-xs text-muted-foreground">Set up analytics for data</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Leads Table */}
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Recent Inquiries</CardTitle>
                            <CardDescription>
                                Showing {filteredLeads.length} items.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border border-border">
                                <div className="w-full text-sm text-left">
                                    <div className="border-b border-border bg-muted/50 p-4 font-medium grid grid-cols-12 gap-4">
                                        <div className="col-span-3">Name</div>
                                        <div className="col-span-3">Company</div>
                                        <div className="col-span-2">Status</div>
                                        <div className="col-span-2">Date</div>
                                        <div className="col-span-2 text-right">Actions</div>
                                    </div>
                                    {filteredLeads.map((lead) => (
                                        <div key={lead.id} className="border-b border-border p-4 grid grid-cols-12 gap-4 items-center hover:bg-muted/5 transition-colors">
                                            <div className="col-span-3">
                                                <div className="font-medium">{lead.name}</div>
                                                <div className="text-xs text-muted-foreground">{lead.email}</div>
                                            </div>
                                            <div className="col-span-3 text-muted-foreground">{lead.company}</div>
                                            <div className="col-span-2">
                                                <StatusBadge status={lead.status} />
                                            </div>
                                            <div className="col-span-2 text-muted-foreground text-xs">{lead.date}</div>
                                            <div className="col-span-2 text-right">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                    {filteredLeads.length === 0 && (
                                        <div className="p-8 text-center text-muted-foreground">
                                            {leads.length > 0 ? "No leads found directly matching your filter." : "No leads found. Check your JSON file."}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles = {
        New: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        Contacted: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        Qualified: "bg-green-500/10 text-green-500 border-green-500/20",
        Closed: "bg-muted text-muted-foreground border-border",
    };

    return (
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles] || styles.Closed}`}>
            {status}
        </span>
    );
}
