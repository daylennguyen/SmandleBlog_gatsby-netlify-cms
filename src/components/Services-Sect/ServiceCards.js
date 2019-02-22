/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Trello and Product page and Development Blog, Trello?
//
//
import PropTypes from "prop-types";
import React from "react";
import HorizontalSpaceEven from "../General/HorizontalSpaceEven";
import TallServiceCard from "./TallServiceCard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minWidth: "850px",
  },
  main: {
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
    margin: "100px",
  },
  card: {
    maxWidth: "300px",
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
    // bottom: '0px',
    alignText: "center",
    justifyContent: "center",
  },
});

// We want to pass down state through props
// settings_input_antenna
// IoT Innovations LLC
// mail
// Contact
// linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.6) 100%)

function Services(props) {
  const { classes } = props;
  return (
    <HorizontalSpaceEven>
      <TallServiceCard
        name="unde et repellendus"
        img="/img/product-api-creator.svg"
        del="350"
      >
        Ut sed qui ipsum quaerat consequatur molestiae. Ipsa ipsa aut aut. Et
        mollitia
        <br />
        dolore fugit quasi.
        <br />
        Sed cumque eaque omnis repudiandae a officiis vel neque. Iste harum nemo
        <br />
        recusandae tempore labore molestiae aspernatur tempora. Blanditiis
        explicabo minus
        <br />
        tempore et. Minima quo quasi recusandae vitae est. Aut nobis tempore
        adipisci a
        <br />
        sint ex aut.
        <br />
      </TallServiceCard>
      <TallServiceCard
        name="unde et repellendus"
        img="/img/product-api-management.svg"
        del="450"
      >
        Ut sed qui ipsum quaerat consequatur molestiae. Ipsa ipsa aut aut. Et
        mollitia
        <br />
        dolore fugit quasi.
        <br />
        Sed cumque eaque omnis repudiandae a officiis vel neque. Iste harum nemo
        <br />
        recusandae tempore labore molestiae aspernatur tempora. Blanditiis
        explicabo minus
        <br />
        tempore et. Minima quo quasi recusandae vitae est. Aut nobis tempore
        adipisci a
        <br />
        sint ex aut.
        <br />
      </TallServiceCard>
      <TallServiceCard
        name="unde et repellendus"
        img="/img/product-mobile-api-gateway.svg"
        del="550"
      >
        Ut sed qui ipsum quaerat consequatur molestiae. Ipsa ipsa aut aut. Et
        mollitia
        <br />
        dolore fugit quasi.
        <br />
        Sed cumque eaque omnis repudiandae a officiis vel neque. Iste harum nemo
        <br />
        recusandae tempore labore molestiae aspernatur tempora. Blanditiis
        explicabo minus
        <br />
        tempore et. Minima quo quasi recusandae vitae est. Aut nobis tempore
        adipisci a
        <br />
        sint ex aut.
        <br />
      </TallServiceCard>
      <TallServiceCard
        name="unde et repellendus"
        img="/img/product-mobile-api-gateway.svg"
        del="650"
      >
        Ut sed qui ipsum quaerat consequatur molestiae. Ipsa ipsa aut aut. Et
        mollitia
        <br />
        dolore fugit quasi.
        <br />
        Sed cumque eaque omnis repudiandae a officiis vel neque. Iste harum nemo
        <br />
        recusandae tempore labore molestiae aspernatur tempora. Blanditiis
        explicabo minus
        <br />
        tempore et. Minima quo quasi recusandae vitae est. Aut nobis tempore
        adipisci a
        <br />
        sint ex aut.
        <br />
      </TallServiceCard>
    </HorizontalSpaceEven>
  );
}
{
  /* <div className={classes.definition}>
<Typography variant="h2" className={classes.H1}>
  What do we do?
</Typography>
<InnovationCard />
</div> */
}
Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
