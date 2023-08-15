import { useState } from "react";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
	const [colors, setColors] = useState(new Values('#f15025').all(10));

	const addColor = (color) => {
		try {
			const colors = new Values(color).all(10);
			setColors(colors);
		} catch (error) {
			toast.error(error.message);
		};
	};

	return (
		<section>
			<Form addColor={addColor} />
			<ColorList colors={colors} />
			<ToastContainer position="top-center" />
		</section>
	);
};
export default App;
