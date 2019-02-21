/**
    src/pages/index.js
    Blog page component definition
*/

import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import HeaderImg from '../Untitled1.svg'

export default class IndexPage extends React.Component {
  render () {
    const {data} = this.props;
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section class="is-bold">
          <div class="hero-body">
            <div class="container">
              <div class="columns ">
                <div class="column is-half is-flex-desktop flexcenter">
                  <div class="level-item is-flex horizontal-direct headlinebg ">
                    <h1 class="headertext inline-block">
                      Creating <strong>Smarter</strong> Techology
                    </h1>
                    <h2 class="subheadertext">
                      Through <i>innovative</i> products
                    </h2>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="level-item">
                  <img src={HeaderImg} class="headart" />
                    {/* <Img fluid={data.imageOne.childImageSharp.sizes} class="headimg"/>  */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <h1 class="headertext inline-block">
                      Creating <strong>Smarter</strong> Techology
                    </h1>
      </Layout>
    );
  }
}


IndexPage.propTypes = {
  data: PropTypes.shape ({
    allMarkdownRemark: PropTypes.shape ({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: file(relativePath: { eq: "head.jpg" }) { 
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
