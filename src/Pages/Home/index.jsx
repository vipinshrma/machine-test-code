import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import SimpleTable from "../../components/Table";

const useStyles = makeStyles({
	main: {
		padding: "40px",
	},
});

export default function Home() {
	// const [isEdit, setIsEdit] = useState(true);
	const [editField, setEditField] = useState("");
	const [selectedField, setSelectedField] = useState(null);
	const [data, setData] = useState([
		{
			parentsSiblings: "Kyle Musk",
			gender: "M",
			Birth: "21 aug 2020",
			BirthLocation: "Sao Tome and Principe",
			Death: "23 Feburary 2021",
			DeathLocation: "Salt lack city",
			Marriage: "1999",
			spouse: "Robert Musk",
			isChild: false,
			id: 1,
			child: [
				{
					parentsSiblings: "Kyle Musk",
					gender: "M",
					Birth: "21 aug 2020",
					BirthLocation: "Sao Tome and Principe",
					Death: "23 Feburary 2021",
					DeathLocation: "Salt lack city",
					Marriage: "1999",
					spouse: "Robert Musk",
					isChild: true,
					id: 2,
				},
			],
		},
		{
			parentsSiblings: "Elone Musk",
			gender: "F",
			Birth: "21 aug 2021",
			BirthLocation: "Sao Tome and Principe",
			Death: "23 Feburary 2022",
			DeathLocation: "New York  city",
			Marriage: "200",
			spouse: "John Musk",
			id: 3,
			child: [
				{
					parentsSiblings: "John Doe",
					gender: "M",
					Birth: "21 oct 2020",
					BirthLocation: "New York",
					Death: "23 Feburary 2022",
					DeathLocation: "San fancisco",
					Marriage: "2000",
					spouse: "Unknown",
					isChild: true,
					id: 4,
				},
			],
		},
	]);
	const cellSelectHandler = (field, idx) => {
		setEditField(field);
		setSelectedField(idx);
	};
	const onCellBlurHandler = () => {
		setEditField("");
		setSelectedField(null);
	};
	const cellValueChangeHandler = (e, idx) => {
		let newArr = data?.map((item, index) => {
			if (item.id === idx) {
				item = {
					...item,
					[e.target.name]: e.target.value,
				};
			}
			// if (item.child) {
			// }
			return item;
		});
		setData([...newArr]);
	};
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<SimpleTable
				editField={editField}
				data={data}
				selectedField={selectedField}
				cellSelectHandler={cellSelectHandler}
				onCellBlurHandler={onCellBlurHandler}
				cellValueChangeHandler={cellValueChangeHandler}
			/>
		</div>
	);
}
