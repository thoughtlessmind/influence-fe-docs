import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles, Typography } from "@material-ui/core"

const Pill = props => {
	const classes = useStyles()
	return (
		<Typography
			{...props}
			display="inline"
			className={clsx(classes.genralStyle, classes[props.type])}
		>
			{props.children}
		</Typography>
	)
}

const useStyles = makeStyles(theme =>
	createStyles({
		genralStyle: {
			borderRadius: "999px",
			fontSize: "10px",
			padding: "4px 6px",
			fontWeight: "500",
			color: "rgba(9,30,66,.74)"
		},
		Purple: {
			backgroundColor: "#fbcffc"
		},
		Yellow: {
			backgroundColor: "#fafba4"
		}
	})
)

export default Pill
