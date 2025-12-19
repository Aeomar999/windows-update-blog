module.exports = [
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx <module evaluation>", "default");
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx", "default");
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$FilteredFeed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$FilteredFeed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$FilteredFeed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx <module evaluation>", "default");
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx", "default");
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$NewsletterSignup$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$NewsletterSignup$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$NewsletterSignup$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "page-module__8tsuCa__grid",
  "hero": "page-module__8tsuCa__hero",
  "heroContent": "page-module__8tsuCa__heroContent",
  "sectionTitle": "page-module__8tsuCa__sectionTitle",
  "subtitle": "page-module__8tsuCa__subtitle",
  "title": "page-module__8tsuCa__title",
});
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$FilteredFeed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/FilteredFeed.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$NewsletterSignup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/components/NewsletterSignup.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.module.css [app-rsc] (css module)");
;
;
;
;
;
function Home() {
    const recentArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentArticles"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: "All Microsoft Updates. One Place."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "The latest news, security patches, and feature updates across Windows, Cloud, AI, and Developer tools."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$FilteredFeed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    initialArticles: recentArticles
                }, void 0, false, {
                    fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IDEAS$2f$UpdateHub$2f$windows$2d$update$2d$blog$2f$src$2f$components$2f$NewsletterSignup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/IDEAS/UpdateHub/windows-update-blog/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6306a62f._.js.map