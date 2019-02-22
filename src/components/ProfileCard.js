import Paper from '@material-ui/core/Paper'
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	profiletext: {
		width: '83.5%',
		color: '#21EF8B',
		transition: theme.transitions.create(['color'], {
			duration: theme.transitions.duration.complex*2,
		}),
		'&:hover': {
			color: theme.palette.primary.main
		},
	},
	media: {
		height: '333px',
		borderRadius: '2%',
	},
	headshot: {
		width: '250px',
		margin: 0,
	},
	teamcard: {
		background: '#332D4F',
		display: 'flex',
		margin: '50px',
		marginTop: '0',
		padding: '20px',
		paddingBottom:'0',
		boxShadow: '0px 0px 10px #21EF8B',
	},
	bio: {
		width: '100%',
		background: '#393359',
		margin: '5px'
	},
	txt: {
		margin:'7px'
	}
})

class ProfileCard extends React.Component {
	render() {
		const { classes, img, imgtag, name, title } = this.props
		return (
			<div data-aos="fade-in">
				<Card className={classes.teamcard}>
					<div className={classes.headshot}>
						<CardMedia className={classes.media} image={img} title={imgtag} />
					</div>
					<CardContent className={classes.profiletext} color='inherit'><div className={classes.txt}>
						<Typography variant="h3" color="inherit" className={classes.name}>
							{name}
						</Typography>
						<Typography variant="h5" color="inherit" className={classes.title}>
							{title}
						</Typography></div>
						<Card className={classes.bio}>
							<CardContent>
								<Typography variant="h6" color="inherit" className={classes.name}>
									Sequi provident minima omnis et et sed excepturi ut. Placeat et ipsum et. Alias
								<br />
									ducimus perspiciatis suscipit est. Dicta sit rerum praesentium ad. Qui ullam illo
								<br />
									sapiente. Reiciendis aut ut sequi dolores et qui autem ipsum. Cum quis quo aut
								<br />
									dignissimos est. Enim et pariatur possimus et possimus sit dolorem. Aut expedita
								<br />
									laborum harum asperiores rerum accusamus debitis doloremque. Facilis repellat totam
								<br />
									tempore. Culpa recusandae id quo magni. Aspernatur voluptatem alias magni est.
							</Typography>
							</CardContent>
						</Card>
					</CardContent>
				</Card>
			</div>
		)
	}
}

ProfileCard.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfileCard)
