import Paper from '@material-ui/core/Paper'
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	paper: {
		position: 'relative',
		// margin: '35px',
		display: 'flex',
		alignItems: 'center',
		justifyItems: 'center',
		height: '350px',
		width: '400px',
		// paddingLeft: '200px',
		// paddingRight: '200px',
		overflow: 'hidden',
	},
	H1: {
		// float: 'right',
		marginBottom: '25px',
		// color: '#21EF8B',
	},
	H2: {
		// float: 'right',
		color: 'inherit',
	},
	Image: {
		margin: '15px',
		position: 'static',
		height: '80%',
	},
	TextWrap: {
		justifyContent: 'center',
		// margin: '20px',
		// marginRight: '30px',
		// color: '#FFFFFF',
	},
})

class StyledPaper extends React.Component {
	render() {
		const { classes, image, children, headline } = this.props
		return (
			<Paper className={classes.paper} elevation={15}>
				<img src={image} className={classes.Image} />
				<div className={classes.TextWrap}>
					<Typography variant="h3" className={classes.H1}>
						{headline}
					</Typography>
					<Typography variant="h6" className={classes.H2}>
						{children}
					</Typography>
				</div>
			</Paper>
		)
	}
}

StyledPaper.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StyledPaper)
