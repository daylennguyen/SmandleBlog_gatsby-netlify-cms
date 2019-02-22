import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
const styles = {
	cards: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
}
function HorizontalSpaceEven(props) {
	const { classes, children } = props
	return <div className={classes.cards}>{children}</div>
}
HorizontalSpaceEven.propTypes = { classes: PropTypes.object.isRequired }
export default withStyles(styles)(HorizontalSpaceEven)
