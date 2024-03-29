module.exports = {
  siteMetadata: {
    title: `yonifra.com - development blog`,
    name: `Yoni`,
    siteUrl: `https://www.yonifra.com`,
    description: `A development blog by Yoni Fraimorice`,
    hero: {
      heading: `Yet another dev blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yonifra`,
      },
      {
        name: `github`,
        url: `https://github.com/yonifra`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/yonifra`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
