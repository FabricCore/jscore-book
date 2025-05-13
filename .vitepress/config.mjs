import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "JSCore Documentation",
    description: "The Minecraft-aware JavaScript runtime, do as you will.",
    head: [["link", { rel: "icon", href: "/favicon.png" }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            // { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: {
            "/player/": [
                {
                    text: "Basic Setup",
                    collapsed: true,
                    items: [
                        {
                            text: "Quick Start",
                            link: "/player/basic-setup/quick-start",
                        },
                        {
                            text: "Troubleshooting",
                            link: "/player/basic-setup/troubleshooting",
                        },
                        {
                            text: "FAQ",
                            link: "/player/basic-setup/faq",
                        },
                    ],
                },
            ],
            "/dev/": [
                {
                    text: "Quick Links",
                    collapsed: false,
                    items: [
                        {
                            text: "Yarnwrap Index",
                            link: "https://fabriccore.github.io/yarnwrap",
                        },
                        {
                            text: "Package Repository",
                            link: "https://github.com/FabricCore/repo",
                        },
                    ],
                },
                {
                    text: "Getting Started",
                    collapsed: false,
                    items: [
                        {
                            text: "Introduction to JSCore",
                            link: "/dev/getting-started/introduction-to-jscore",
                        },
                        {
                            text: "The Init System",
                            link: "/dev/getting-started/init-system",
                        },
                        {
                            text: "The JSCore Bootstrap",
                            link: "/dev/getting-started/jscore-bootstrap",
                        },
                    ],
                },
                {
                    text: "Using Commands",
                    collapsed: false,
                    items: [
                        {
                            text: "Your First Command",
                            link: "/dev/using-commands/first-command",
                        },
                        {
                            text: "Taking Arguments",
                            link: "/dev/using-commands/taking-arguments",
                        },
                        {
                            text: "Creating Subcommands",
                            link: "/dev/using-commands/creating-subcommands",
                        },
                    ],
                },
                {
                    text: "Listening to Events",
                    collapsed: false,
                    items: [
                        {
                            text: "Using Runnables",
                            link: "/dev/listening-to-events/using-runnables",
                        },
                        {
                            text: "Running Non-blocking Code",
                            link: "/dev/listening-to-events/running-non-blocking-code",
                        },
                        {
                            text: "Event Providers",
                            link: "/dev/listening-to-events/event-providers",
                        },
                    ],
                },
                {
                    text: "Best Practices",
                    collapsed: false,
                    items: [
                        {
                            text: "Code Structuring",
                            link: "/dev/best-practices/code-structuring"
                        },
                        {
                            text: "Common Packages",
                            link: "/dev/best-practices/common-packages"
                        },
                    ]
                },
                {
                    text: "Example Projects",
                    collapsed: false,
                    items: [
                        {
                            text: "Example Project - EmojiChat",
                            link: "/dev/example-projects/emojichat"
                        }
                    ]
                }
            ],
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/FabricCore",
            },
            {
                icon: "matrix",
                link: "https://matrix.to/#/!qrUQMTxUReiPipzwhb:matrix.org?via=matrix.org"
            },
            {
                icon: "discord",
                link: "https://discord.gg/XfSZ5tc7Sk",
            },
        ],
    },
});
