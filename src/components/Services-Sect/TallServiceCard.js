/*
    Google Definition Card;
    Currently hardcoded the definition of innovation
    within a material ui component
    
    @auth Daylen Nguyen
    @date Jan 25th 2019
    
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
	card: {
		maxWidth: '300px',
		boxShadow: '0px 0px 10px #21EF8B',

	},
}

function SimpleCard(props) {
	const { classes, name, children, img, del } = props
	return (
		<div data-aos='zoom-in-up' data-aos-delay={del ? del : 500}>
			<Card className={classes.card}>
				<CardContent>
					<img src={img} />
					<Typography variant="h5" gutterBottom>
						{name}
					</Typography>
					<Typography variant="body1" gutterBottom>
						{children}
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
