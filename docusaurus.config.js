module.exports = {
  title: "Jasen Wang",
  tagline: "Learn, serve, do",
  url: "https://www.jasenwang.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "Cerasys", // Usually your GitHub org/user name.
  projectName: "jasenWebsite", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Jasen Wang",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Jasen",
          items: [
            {
              label: "Jasen",
              to: "docs/jasen/",
            },
            {
              label: "Style Guide",
              to: "docs/style/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/jasen.wang.9",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/jhwang14635/",
            },
            {
              label: "Buy me a coffee",
              href: "https://www.buymeacoffee.com/jasen",
            },
          ],
        },
        /*
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
        */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jasen Wang. Built with many, many, burritos. 🌯`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
