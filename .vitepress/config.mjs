import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "JSCore Documentation",
    description: "The Minecraft-aware JavaScript runtime, do as you will.",
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            // { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: {
            "/dev/": [
                {
                    text: "Getting Started",
                    items: [
                        {
                            text: "Introduction to JSCore and YarnWrap",
                            link: "/dev/getting-started/introduction-to-jscore-and-yarnwrap",
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
                    items: [
                        {
                            text: "Using Runnables",
                            link: "/dev/listening-to-events/using-runnables.md",
                        },
                        {
                            text: "Running Non-blocking Code",
                            link: "/dev/listening-to-events/running-non-blocking-code.md",
                        },
                        {
                            text: "Event Providers",
                            link: "/dev/listening-to-events/event-providers.md",
                        },
                    ],
                },
            ],
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/FabricCore/jscore-book",
            },
        ],
    },
});
