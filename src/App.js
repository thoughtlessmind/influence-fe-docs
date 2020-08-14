import React from "react"
import MainContainer from "./containers/MainContainer"
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme/theme'


function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<MainContainer />
			</div>
		</ThemeProvider>
	)
}

export default App
