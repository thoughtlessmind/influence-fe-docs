import React from "react"
import { createStyles, makeStyles } from "@material-ui/core"
import Pill from "./Pill"

const Pills = props => {
	const classes = useStyles()
	return (
		<div>
			<div>
				<Pill type={"Purple"}>Purple Pill</Pill>
				<Pill type={"Yellow"}>Yellow Pill</Pill>
			</div>
		</div>
	)
}

const useStyles = makeStyles(theme =>
	createStyles({
		
	})
)

export default Pills
