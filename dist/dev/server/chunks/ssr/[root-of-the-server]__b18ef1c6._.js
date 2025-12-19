module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles,
    "categories",
    ()=>categories,
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticlesByCategory",
    ()=>getArticlesByCategory,
    "getRecentArticles",
    ()=>getRecentArticles
]);
const categories = [
    // core os
    {
        id: '1',
        name: 'Windows 11',
        slug: 'windows-11',
        description: 'Latest news and updates for Windows 11',
        group: 'Windows'
    },
    {
        id: '2',
        name: 'Windows 10',
        slug: 'windows-10',
        description: 'Support and updates for Windows 10',
        group: 'Windows'
    },
    {
        id: '3',
        name: 'Windows Server',
        slug: 'windows-server',
        description: 'Server OS updates and features',
        group: 'Windows'
    },
    // browsers & web
    {
        id: '4',
        name: 'Microsoft Edge',
        slug: 'microsoft-edge',
        description: 'Updates and features for the Edge browser',
        group: 'Web'
    },
    {
        id: '5',
        name: 'Bing',
        slug: 'bing',
        description: 'Search and AI chat updates',
        group: 'Web'
    },
    // productivity
    {
        id: '6',
        name: 'Office 365',
        slug: 'office-365',
        description: 'Productivity suite updates (Word, Excel, PowerPoint)',
        group: 'Modern Work'
    },
    {
        id: '7',
        name: 'Microsoft Teams',
        slug: 'microsoft-teams',
        description: 'Collaboration and meeting features',
        group: 'Modern Work'
    },
    {
        id: '8',
        name: 'OneDrive',
        slug: 'onedrive',
        description: 'Cloud storage updates',
        group: 'Modern Work'
    },
    // cloud & dev
    {
        id: '9',
        name: 'Azure',
        slug: 'azure',
        description: 'Cloud computing services and features',
        group: 'Cloud'
    },
    {
        id: '10',
        name: 'Visual Studio',
        slug: 'visual-studio',
        description: 'IDE updates for VS and VS Code',
        group: 'Developer'
    },
    {
        id: '11',
        name: 'Power Platform',
        slug: 'power-platform',
        description: 'Power BI, Power Apps, and Automate',
        group: 'Cloud'
    },
    {
        id: '12',
        name: '.NET',
        slug: 'dotnet',
        description: 'Framework updates and language features',
        group: 'Developer'
    },
    // hardware (gaming + surface)
    {
        id: '13',
        name: 'Xbox',
        slug: 'xbox',
        description: 'Console updates, Game Pass, and accessories',
        group: 'Gaming'
    },
    {
        id: '14',
        name: 'Surface',
        slug: 'surface',
        description: 'Firmware and drivers for Surface devices',
        group: 'Hardware'
    },
    // general
    {
        id: '15',
        name: 'Security',
        slug: 'security',
        description: 'Critical security patches across all products',
        group: 'General'
    },
    {
        id: '16',
        name: 'Microsoft 365 Admin',
        slug: 'm365-admin',
        description: 'Updates for IT admins',
        group: 'Modern Work'
    }
];
const articles = [
    {
        id: '1',
        title: 'Windows 11 Moment 5 Update Released',
        slug: 'windows-11-moment-5-update',
        excerpt: 'The latest feature drop for Windows 11 brings improvements to Copilot, Widgets, and accessibility features.',
        content: `<p>Microsoft has officially started rolling out the "Moment 5" update...</p>`,
        date: '2025-02-28',
        author: 'Windows Team',
        category: 'Windows 11',
        tags: [
            'KB5035942',
            'Feature Drop',
            'Copilot'
        ]
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
        tags: [
            'Security',
            'Zero-day',
            'Chromium'
        ]
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
        tags: [
            'LTSC',
            'Enterprise',
            'Preview'
        ]
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
        tags: [
            'Gaming',
            'PC',
            'App'
        ]
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
        tags: [
            'AI',
            'Cloud',
            'Enterprise'
        ]
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
        tags: [
            'Developer',
            'IDE',
            'Open Source'
        ]
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
        tags: [
            'Drivers',
            'Firmware',
            'Hardware'
        ]
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
        tags: [
            'Collaboration',
            'Performance'
        ]
    }
];
function getArticleBySlug(slug) {
    return articles.find((article)=>article.slug === slug);
}
function getArticlesByCategory(categorySlug) {
    const category = categories.find((c)=>c.slug === categorySlug);
    if (!category) return [];
    return articles.filter((article)=>article.category === category.name);
}
function getRecentArticles(limit = 20) {
    return [
        ...articles
    ].sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/context/PreferencesContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreferencesProvider",
    ()=>PreferencesProvider,
    "usePreferences",
    ()=>usePreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const PreferencesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function PreferencesProvider({ children }) {
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('updateHub_preferences');
        if (saved) {
            try {
                setSelectedCategories(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse preferences', e);
            }
        } else {
        // Default to all if nothing saved? Or none? Let's default to none so they can customize.
        }
        setIsLoading(false);
    }, []);
    // Save to localStorage on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading) {
            localStorage.setItem('updateHub_preferences', JSON.stringify(selectedCategories));
        }
    }, [
        selectedCategories,
        isLoading
    ]);
    const toggleCategory = (slug)=>{
        setSelectedCategories((prev)=>prev.includes(slug) ? prev.filter((c)=>c !== slug) : [
                ...prev,
                slug
            ]);
    };
    const selectAll = ()=>{
        setSelectedCategories(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((c)=>c.slug));
    };
    const clearAll = ()=>{
        setSelectedCategories([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PreferencesContext.Provider, {
        value: {
            selectedCategories,
            toggleCategory,
            selectAll,
            clearAll,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/context/PreferencesContext.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function usePreferences() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PreferencesContext);
    if (context === undefined) {
        throw new Error('usePreferences must be used within a PreferencesProvider');
    }
    return context;
}
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/context/CommunityContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommunityProvider",
    ()=>CommunityProvider,
    "useCommunity",
    ()=>useCommunity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CommunityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Initial seed data
const SEED_POSTS = [
    {
        id: '1',
        title: 'Windows 11 KB5035942 fails to install',
        content: 'Has anyone else had trouble installing the latest update? It hangs at 98% for me.',
        author: 'AlexDoe',
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
        category: 'Windows 11',
        likes: 12,
        comments: [
            {
                id: 'c1',
                author: 'TechSupport',
                content: 'Try running the update troubleshooter.',
                date: new Date().toISOString()
            }
        ],
        likedByMe: false
    },
    {
        id: '2',
        title: 'New Edge vertical tabs are amazing',
        content: 'Just switched to vertical tabs and I can never go back. Great for productivity!',
        author: 'SarahSmith',
        date: new Date(Date.now() - 3600000 * 5).toISOString(),
        category: 'Microsoft Edge',
        likes: 45,
        comments: [],
        likedByMe: false
    }
];
function CommunityProvider({ children }) {
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('updateHub_community_posts');
        if (saved) {
            try {
                setPosts(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse community posts', e);
                setPosts(SEED_POSTS);
            }
        } else {
            setPosts(SEED_POSTS);
        }
        setIsLoading(false);
    }, []);
    // Save to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading) {
            localStorage.setItem('updateHub_community_posts', JSON.stringify(posts));
        }
    }, [
        posts,
        isLoading
    ]);
    const addPost = (title, content, category)=>{
        const newPost = {
            id: Date.now().toString(),
            title,
            content,
            category,
            author: 'You',
            date: new Date().toISOString(),
            likes: 0,
            comments: [],
            likedByMe: false
        };
        setPosts((prev)=>[
                newPost,
                ...prev
            ]);
    };
    const addComment = (postId, content)=>{
        setPosts((prev)=>prev.map((post)=>{
                if (post.id !== postId) return post;
                const newComment = {
                    id: Date.now().toString(),
                    author: 'You',
                    content,
                    date: new Date().toISOString()
                };
                return {
                    ...post,
                    comments: [
                        ...post.comments,
                        newComment
                    ]
                };
            }));
    };
    const toggleLike = (postId)=>{
        setPosts((prev)=>prev.map((post)=>{
                if (post.id !== postId) return post;
                const isLiked = !post.likedByMe;
                return {
                    ...post,
                    likedByMe: isLiked,
                    likes: isLiked ? post.likes + 1 : post.likes - 1
                };
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommunityContext.Provider, {
        value: {
            posts,
            addPost,
            addComment,
            toggleLike,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/context/CommunityContext.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function useCommunity() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CommunityContext);
    if (context === undefined) {
        throw new Error('useCommunity must be used within a CommunityProvider');
    }
    return context;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b18ef1c6._.js.map