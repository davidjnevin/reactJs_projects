import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

// const getLocalStorage = () => {
// 	let list = localStorage.getItem("list");
// 	if (list) {
// 		return JSON.parse(localStorage.getItem("list"));
// 	} else {
// 		list = [];
// 	}
// };

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (items) => {
	localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {

	const [items, setItems] = useState(defaultList);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			id: nanoid(),
			completed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success("Item added successfully");
	};

	const removeItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success("Item removed successfully");
	};

	const editItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				const newItem = { ...item, completed: !item.completed };
				return newItem;
			}
			return item;
		});
		setItems(newItems);
		setLocalStorage(newItems);
		toast.info("Item edited successfully");
	};

	return <section className="section-center">
		<ToastContainer position="top-center" />
		<Form addItem={addItem} />
		<Items items={items} removeItem={removeItem} editItem={editItem} />
	</section>;
};

export default App;
