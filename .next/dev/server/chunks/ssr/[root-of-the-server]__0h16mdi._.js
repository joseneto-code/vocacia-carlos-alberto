module.exports = [
"[next]/internal/font/google/inter_fe8b9d92.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_fe8b9d92-module__LINzvG__className",
  "variable": "inter_fe8b9d92-module__LINzvG__variable",
});
}),
"[next]/internal/font/google/inter_fe8b9d92.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe8b9d92$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_fe8b9d92.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe8b9d92$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe8b9d92$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe8b9d92$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/playfair_display_fa003182.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "playfair_display_fa003182-module__E_H7JW__className",
  "variable": "playfair_display_fa003182-module__E_H7JW__variable",
});
}),
"[next]/internal/font/google/playfair_display_fa003182.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$playfair_display_fa003182$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/playfair_display_fa003182.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$playfair_display_fa003182$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Playfair Display', 'Playfair Display Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$playfair_display_fa003182$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$playfair_display_fa003182$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/lib/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "site",
    ()=>site,
    "whatsappLink",
    ()=>whatsappLink
]);
const site = {
    name: "Advocacia Carlos Alberto",
    lawyer: "Dr. Carlos Alberto",
    oab: "OAB/MS 28343",
    url: "https://henriquecarlosalberto.adv.br",
    // Telefone usado para chamadas e WhatsApp (formato internacional, sem símbolos)
    whatsapp: "556784458320",
    phoneDisplay: "+55 67 8445-8320",
    whatsappMessage: "olá, vim pelo site e gostaria de falar com um advogado criminal",
    email: "carlosjsjr.jus@gmail.com",
    address: {
        line1: "R. Melânio García Barbosa, 300 - Sl 2 - Centro",
        line2: "Maracaju - MS, 79150-011",
        maps: "https://www.google.com/maps?q=R.+Mel%C3%A2nio+Garc%C3%ADa+Barbosa+300+Sl+2+Centro+Maracaju+MS+79150-011",
        embed: "https://www.google.com/maps?q=R.+Mel%C3%A2nio+Garc%C3%ADa+Barbosa+300+Sl+2+Centro+Maracaju+MS+79150-011&output=embed"
    }
};
function whatsappLink(message = site.whatsappMessage) {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe8b9d92$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_fe8b9d92.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$playfair_display_fa003182$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/playfair_display_fa003182.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url),
    title: {
        default: 'Advogado Cível e Criminal em Maringá | Atendimento 24 Horas - Dr. Carlos Alberto',
        template: '%s | Advocacia Carlos Alberto'
    },
    description: 'Advocacia cível e criminal em Maringá-PR. Atendimento imediato para casos cíveis e criminais, com defesa estratégica e sigilo profissional.',
    keywords: [
        'advogado cível Maringá',
        'advogado criminal Maringá',
        'defesa criminal Maringá',
        'direito civil Maringá',
        'audiência de custódia Maringá',
        'habeas corpus Maringá',
        'advogado tribunal do júri',
        'advogado cível e criminal'
    ],
    authors: [
        {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].lawyer
        }
    ],
    generator: 'v0.app',
    icons: {
        icon: '/images/dr-carlos-alberto.png'
    },
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
        title: 'Advogado Cível e Criminal em Maringá | Atendimento 24 Horas',
        description: 'Atendimento imediato para casos cíveis e criminais em Maringá-PR, com defesa estratégica e sigilo profissional.',
        images: [
            {
                url: '/images/dr-carlos-alberto.png',
                width: 1200,
                height: 630,
                alt: 'Dr. Carlos Alberto, advogado cível e criminal em Maringá'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Advogado Cível e Criminal em Maringá | Atendimento 24 Horas',
        description: 'Atendimento imediato para casos cíveis e criminais em Maringá-PR.',
        images: [
            '/images/dr-carlos-alberto.png'
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
};
const viewport = {
    colorScheme: 'dark',
    themeColor: '#383838'
};
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].lawyer,
    image: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url}/images/dr-carlos-alberto.png`,
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url,
    telephone: `+${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].whatsapp}`,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email,
    address: {
        '@type': 'PostalAddress',
        streetAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].address.line1,
        addressLocality: 'Maringá',
        addressRegion: 'PR',
        addressCountry: 'BR'
    },
    areaServed: 'Maringá, PR',
    priceRange: '$$',
    knowsAbout: 'Direito Penal'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt-BR",
        className: `dark ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe8b9d92$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$playfair_display_fa003182$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} bg-background`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "font-sans antialiased",
            children: [
                children,
                ("TURBOPACK compile-time value", "development") === 'production' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Analytics"], {}, void 0, false, {
                    fileName: "[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx",
                    lineNumber: 110,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(jsonLd)
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs <module evaluation>", "Analytics");
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs", "Analytics");
}),
"[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/montana/LP - Dr Carlos Alberto/SITE/LANDING PAGE/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$montana$2f$LP__$2d$__Dr__Carlos__Alberto$2f$SITE$2f$LANDING__PAGE$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0h16mdi._.js.map