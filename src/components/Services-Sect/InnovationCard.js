/*
    Google Definition Card;
    Currently hardcoded the definition of innovation
    within a material ui component
    
    @auth Daylen Nguyen
    @date Jan 25th 2019
    
*/

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    margin: '50px',
    minWidth: 275, //
    boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    // raised: 'true',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard (props) {
  const {classes} = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent color="inherit">
        <Typography className={classes.title} color="inherit" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2" color="inherit">
          in{bull}no{bull}vate
        </Typography>
        <Typography className={classes.pos} color="inherit">
          verb
        </Typography>
        <Typography component="p" color="inherit">
          make changes in something established, especially by introducing new methods, ideas, or
          products.
          <br />
          {'"technological innovations designed to save energy"'}
        </Typography>
      </CardContent>
      <CardActions />
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (SimpleCard);
