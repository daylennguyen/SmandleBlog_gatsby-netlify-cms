/**
    src/pages/index.js
    Blog page component definition
*/
import AOS from "aos";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import ServicesPage from "../components/ServicesPage";
import HeaderImg from "../Untitled1.svg";
import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (AOS.refresh() === undefined) {
      AOS.init();
    }
  }
  render() {
    const { data } = this.props;
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section class="landing">
          <div class="hero-body">
            <div class="container">
              <div
                class="columns "
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
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
              <div class="level-item learn-container">
                <a
                  onClick={() => {
                    document
                      .querySelector(".ServicesPage-serv-1")
                      .scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  <Icon
                    className="home-downarrow"
                    path={mdiChevronDown}
                    size={2.3}
                  />
                </a>
              </div>
            </div>
          </div>
          <section>
            <div class="level-item seperator-1" />
          </section>
        </section>
        <section>
          <div class="level-item">
            {/* <h1 class="sec-title">Our Services</h1> */}
            <ServicesPage />
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
