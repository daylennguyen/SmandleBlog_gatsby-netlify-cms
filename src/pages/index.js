/**
    src/pages/index.js
    Blog page component definition
*/

import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div class="container is-fluid flex">
          <div class="notification">
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.
          <Img fluid={data.imageOne.childImageSharp.fluid} />

          </div>
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: file(relativePath: { eq: "head_opt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
