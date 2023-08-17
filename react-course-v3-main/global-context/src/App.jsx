import './App.css'
import { useGlobalContext } from './context'

function App() {
	const { name } = useGlobalContext();
	console.log(name);
	return (
		<>
			<div>
				<h1>React App</h1>
			</div>
		</>
	)
}

export default App
