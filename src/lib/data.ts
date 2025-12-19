export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    group?: string; // e.g., "Windows", "Modern Work", "Cloud", "Hardware"
}

export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string; // matches Category.name
    tags: string[];
}

export const categories: Category[] = [
    // core os
    { id: '1', name: 'Windows 11', slug: 'windows-11', description: 'Latest news and updates for Windows 11', group: 'Windows' },
    { id: '2', name: 'Windows 10', slug: 'windows-10', description: 'Support and updates for Windows 10', group: 'Windows' },
    { id: '3', name: 'Windows Server', slug: 'windows-server', description: 'Server OS updates and features', group: 'Windows' },

    // browsers & web
    { id: '4', name: 'Microsoft Edge', slug: 'microsoft-edge', description: 'Updates and features for the Edge browser', group: 'Web' },
    { id: '5', name: 'Bing', slug: 'bing', description: 'Search and AI chat updates', group: 'Web' },

    // productivity
    { id: '6', name: 'Office 365', slug: 'office-365', description: 'Productivity suite updates (Word, Excel, PowerPoint)', group: 'Modern Work' },
    { id: '7', name: 'Microsoft Teams', slug: 'microsoft-teams', description: 'Collaboration and meeting features', group: 'Modern Work' },
    { id: '8', name: 'OneDrive', slug: 'onedrive', description: 'Cloud storage updates', group: 'Modern Work' },

    // cloud & dev
    { id: '9', name: 'Azure', slug: 'azure', description: 'Cloud computing services and features', group: 'Cloud' },
    { id: '10', name: 'Visual Studio', slug: 'visual-studio', description: 'IDE updates for VS and VS Code', group: 'Developer' },
    { id: '11', name: 'Power Platform', slug: 'power-platform', description: 'Power BI, Power Apps, and Automate', group: 'Cloud' },
    { id: '12', name: '.NET', slug: 'dotnet', description: 'Framework updates and language features', group: 'Developer' },

    // hardware (gaming + surface)
    { id: '13', name: 'Xbox', slug: 'xbox', description: 'Console updates, Game Pass, and accessories', group: 'Gaming' },
    { id: '14', name: 'Surface', slug: 'surface', description: 'Firmware and drivers for Surface devices', group: 'Hardware' },

    // general
    { id: '15', name: 'Security', slug: 'security', description: 'Critical security patches across all products', group: 'General' },
    { id: '16', name: 'Microsoft 365 Admin', slug: 'm365-admin', description: 'Updates for IT admins', group: 'Modern Work' },
];

export const articles: Article[] = [
    {
        id: '1',
        title: 'Windows 11 Moment 5 Update Released',
        slug: 'windows-11-moment-5-update',
        excerpt: 'The latest feature drop for Windows 11 brings improvements to Copilot, Widgets, and accessibility features.',
        content: `<p>Microsoft has officially started rolling out the "Moment 5" update...</p>`,
        date: '2025-02-28',
        author: 'Windows Team',
        category: 'Windows 11',
        tags: ['KB5035942', 'Feature Drop', 'Copilot'],
    },
    {
        id: '2',
        title: 'Critical Security Update for Edge Browser',
        slug: 'critical-security-update-edge',
        excerpt: 'A zero-day vulnerability in Chromium has been patched. Update immediately.',
        content: `<p>A critical security vulnerability (CVE-2025-1002)...</p>`,
        date: '2025-03-01',
        author: 'Security Response',
        category: 'Microsoft Edge',
        tags: ['Security', 'Zero-day', 'Chromium'],
    },
    {
        id: '3',
        title: 'Office LTSC 2024 Now Available',
        slug: 'office-ltsc-2024-preview',
        excerpt: 'Commercial preview of the next Long-Term Servicing Channel release.',
        content: `<p>Organizations that require a locked-in feature set...</p>`,
        date: '2025-03-05',
        author: 'Office Team',
        category: 'Office 365',
        tags: ['LTSC', 'Enterprise', 'Preview'],
    },
    {
        id: '4',
        title: 'Xbox March Update: New Game Hubs',
        slug: 'xbox-march-update-2025',
        excerpt: 'The Xbox App on PC gets new Game Hubs and easier navigation.',
        content: `<p>Jump back into your games faster with the new Game Hubs...</p>`,
        date: '2025-03-10',
        author: 'Xbox Team',
        category: 'Xbox',
        tags: ['Gaming', 'PC', 'App'],
    },
    {
        id: '5',
        title: 'Azure OpenAI Service Adds GPT-5 Preview',
        slug: 'azure-openai-gpt5-preview',
        excerpt: 'Select enterprise customers can now access the latest frontier model.',
        content: `<p>We are excited to announce the private preview of GPT-5...</p>`,
        date: '2025-03-15',
        author: 'Azure Team',
        category: 'Azure',
        tags: ['AI', 'Cloud', 'Enterprise'],
    },
    {
        id: '6',
        title: 'Visual Studio Code 1.98 Release',
        slug: 'vscode-1-98-release',
        excerpt: 'Native Copilot chat improvements and better Python profiling.',
        content: `<p>The February 2025 release of VS Code is here...</p>`,
        date: '2025-02-25',
        author: 'VS Code Team',
        category: 'Visual Studio',
        tags: ['Developer', 'IDE', 'Open Source'],
    },
    {
        id: '7',
        title: 'Surface Pro 10 Firmware Update',
        slug: 'surface-pro-10-firmware',
        excerpt: 'Improves battery life and fixes a webcam stability issue.',
        content: `<p>A new firmware update is available for Surface Pro 10 devices...</p>`,
        date: '2025-03-02',
        author: 'Surface Team',
        category: 'Surface',
        tags: ['Drivers', 'Firmware', 'Hardware'],
    },
    {
        id: '8',
        title: 'New Teams Client Rollout Completed',
        slug: 'new-teams-rollout-complete',
        excerpt: 'The faster, lighter Teams app is now the default for all users.',
        content: `<p>We have completed the rollout of the new Microsoft Teams...</p>`,
        date: '2025-03-08',
        author: 'Teams Team',
        category: 'Microsoft Teams',
        tags: ['Collaboration', 'Performance'],
    },
];

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
    const category = categories.find(c => c.slug === categorySlug);
    if (!category) return [];
    return articles.filter(article => article.category === category.name);
}

export function getRecentArticles(limit: number = 20): Article[] {
    return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}
