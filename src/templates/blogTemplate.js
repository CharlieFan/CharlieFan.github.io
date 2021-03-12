import React from "react";
import { graphql } from "gatsby";
import BaseLaylout from "../components/BaseLaylout";
import { Link } from "gatsby";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;

    return (
        <BaseLaylout>
            <div className="blog-post-container">
                <div className="mb-2">
                    <Link
                        className="block w-8 h-4 border border-gray-400 rounded-full bg-none bg-color-white text-center"
                        to="/"
                    >
                        <svg
                            className="m-auto h-full"
                            viewBox="0 0 1024 1024"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M180.864 277.5808c-16.25088 12.288-16.25088 36.7104 0 48.9984L321.9456 433.31072c20.23424 15.3088 49.2544 0.87552 49.2544-24.4992V343.04h201.77408c118.48192 0 214.53312 89.3952 214.53312 199.68 0 110.27968-96.0512 199.68-214.53312 199.68H240.64a30.72 30.72 0 0 0-30.72 30.72v20.48a30.72 30.72 0 0 0 30.72 30.72h332.33408C740.06528 824.32 875.52 698.24512 875.52 542.72s-135.45472-281.6-302.54592-281.6H371.2V195.34848c0-25.37472-29.02016-39.808-49.2544-24.4992L180.864 277.5808z"
                                fill="#353535"
                                p-id="1128"
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className="blog-post">
                    <div className="text-xs">
                        <span className="text-gray-500 mr-4">
                            {frontmatter.date}
                        </span>

                        <span className="text-gray-400">
                            Topic: {frontmatter.topic}
                        </span>
                    </div>

                    <h1 className="py-5 text-lg text-gray-900">
                        {frontmatter.title}
                    </h1>

                    <div
                        className="text-md text-gray-700"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </BaseLaylout>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                topic
            }
        }
    }
`;
