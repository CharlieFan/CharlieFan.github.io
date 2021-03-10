module.exports = {
  siteMetadata: {
    title: "charlie-fan-blog",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
