module.exports = {
  title: "龙芯杯指北",
  tagline: "What I cannot create, I do not understand.",
  url: "https://nscscc.fkynjyq.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "fky2015", // Usually your GitHub org/user name.
  projectName: "roadmap-of-nscscc", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "龙芯杯指北",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "install-vivado",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
         {to: 'contributors', label: '贡献者指南', position: 'right'},
        {
          href: "https://github.com/fky2015/roadmap-of-nscscc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "官方网站",
          items: [
            {
              label: "龙芯杯官方网站",
              href: "http://www.nscscc.org/",
            },
          ],
        },
        {
          title: "参考文档",
          items: [
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "北理工 MIPS 相关系列实验（小学期）",
              href: "https://github.com/bit-mips/bitmips_experiments_doc",
            },
            {
              label: "针对参加龙芯杯的若干建议",
              href: "https://github.com/Silverster98/bit_nscscc_suggestion",
            },
            {
              label: "GitHub",
              href: "https://github.com/fky2015/roadmap-of-nscscc",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Beijing Institute of Technology. Built with Docusaurus.`,
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
            "https://github.com/fky2015/roadmap-of-nscscc/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/fky2015/roadmap-of-nscscc/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
