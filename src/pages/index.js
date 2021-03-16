import * as React from "react";
import { Link, graphql } from "gatsby";
import BaseLayout from "../components/BaseLaylout";

const ListItem = ({ data }) => {
    const overview = data.node;
    console.log(overview);

    /** Render: */
    return (
        <li className="mb-4">
            <div>
                <span className="text-xs text-gray-500 mr-4">
                    {overview.frontmatter.date}
                </span>
                <span className="text-xs text-gray-400">
                    {overview.frontmatter.topic}
                </span>
            </div>

            <h6 className="py-1 text-base text-gray-800">
                <Link className="bg-none" to={overview.frontmatter.slug}>
                    {overview.frontmatter.title}
                </Link>
            </h6>

            <p className="text-sm mb-2">{overview.excerpt}</p>

            <Link
                className="text-xs bg-none text-blue-400 underline"
                to={overview.frontmatter.slug}
            >
                Read More
            </Link>
        </li>
    );
};

// markup
const IndexPage = ({ data }) => {
    // const
    console.log(data.allMarkdownRemark);
    const blogs = data.allMarkdownRemark.edges;

    /** Render: */
    return (
        <BaseLayout>
            <main>
                <h1 className="pb-5 text-2xl text-gray-900">Articles</h1>

                <ul>
                    {blogs.map((blog, index) => (
                        <ListItem key={index} data={blog} />
                    ))}
                </ul>
            </main>
        </BaseLayout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        topic
                    }
                }
            }
        }
    }
`;
