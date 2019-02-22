/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Trello and Product page and Development Blog, Trello?
//
/*
    Google Definition Card;
    Currently hardcoded the definition of innovation
    within a material ui-component
    @auth Daylen Nguyen
    @date Jan 25th 2019
*/

import PropTypes from "prop-types";

import React from "react";
import InnovationCard from "../components/Services-Sect/InnovationCard";
import ServiceCards from "./Services-Sect/ServiceCards";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  serv: {
    width: "100%",
    background: "#DAF1F3",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minWidth: "850px",
  },
  landingpage: {
    clear: "both",
    display: "flex",
  },
  two: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  definition: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  H1: {
    margin: "50px",
  },
  what: {
    height: "100%",
    position: "relative",
    display: "block",
    marginBottom: "100px",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "64px",
    background: "#242038",
    color: theme.palette.secondary.main,
    position: "relative",
    bottom: "0px",
  },
  team: {
    position: "relative",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    background: "#242038",
  },
  HeaderTeam: {
    position: "relative",
    display: "flex",
    width: "100%",
    color: "#21EF8B",
    margin: "100px",
    alignText: "center",
    justifyContent: "center",
  },
});
class ServicesPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.serv}>
        <div className={classes.two} data-aos="zoom-out">
          <Typography variant="h1" className={classes.H1}>
            Our Services
          </Typography>
        </div>
        <ServiceCards />
        <div className={classes.definition}>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="10000"
          >
            <Typography variant="h2" className={classes.H1}>
              What do we do?
            </Typography>
          </div>
          <div
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="10000"
          >
            <InnovationCard />
          </div>
        </div>
      </div>
    );
  }
}

ServicesPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ServicesPage);
