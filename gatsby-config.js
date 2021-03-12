module.exports = {
    siteMetadata: {
        title: "charlie-fan-blog",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/content/posts`,
            },
        },
        `gatsby-transformer-remark`,
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
    ],
};
