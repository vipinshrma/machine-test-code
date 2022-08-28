import React from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Tooltip,
} from "@mui/material";
import Input from "../Input/Index";
import Select from "../Select/index";
import { genderOptions } from "../../utils/common";
import Typography from "../TypoGraphy";

export default function SimpleTable({
	editField,
	data,
	selectedField,
	cellSelectHandler,
	onCellBlurHandler,
	cellValueChangeHandler,
}) {
	const renderDataFn = (renderData) => {
		return renderData?.map((item, index) => {
			return (
				<>
					<TableRow>
						<TableCell
							onClick={() => cellSelectHandler("parentsSiblings", item.id)}
							style={{ paddingLeft: item.isChild && "30px" }}
						>
							{editField === "parentsSiblings" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="parentsSiblings"
									placeholder={"Parents And Siblings"}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
									value={item.parentsSiblings}
								/>
							) : (
								<Tooltip title={item.parentsSiblings}>
									<Typography size="14px" label={item.parentsSiblings} />
								</Tooltip>
							)}
						</TableCell>
						<TableCell onClick={() => cellSelectHandler("gender", item.id)}>
							{editField === "gender" && selectedField === item.id ? (
								<Select
									label={"Gender"}
									options={genderOptions}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
									name="gender"
									value={item.gender}
								/>
							) : (
								<Typography size="14px" label={item.gender} />
							)}
						</TableCell>
						<TableCell onClick={() => cellSelectHandler("Birth", item.id)}>
							{editField === "Birth" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="Birth"
									placeholder={"Birth"}
									value={item.Birth}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
								/>
							) : (
								<Typography size="14px" label={item.Birth} />
							)}
						</TableCell>
						<TableCell
							onClick={() => cellSelectHandler("BirthLocation", item.id)}
						>
							{editField === "BirthLocation" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="BirthLocation"
									placeholder={"Birth Location"}
									value={item.BirthLocation}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
								/>
							) : (
								<Typography size="14px" label={item.BirthLocation} />
							)}
						</TableCell>
						<TableCell onClick={() => cellSelectHandler("Death", item.id)}>
							{editField === "Death" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="Death"
									placeholder={"Death"}
									value={item.Death}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
								/>
							) : (
								<Typography size="14px" label={item.Death} />
							)}
						</TableCell>
						<TableCell
							onClick={() => cellSelectHandler("DeathLocation", item.id)}
						>
							{editField === "DeathLocation" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="DeathLocation"
									value={item.DeathLocation}
									placeholder={"Death Location"}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
								/>
							) : (
								<Typography size="14px" label={item.DeathLocation} />
							)}
						</TableCell>
						<TableCell onClick={() => cellSelectHandler("Marriage", item.id)}>
							{editField === "Marriage" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="Marriage"
									placeholder={"Marriage"}
									value={item.Marriage}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
								/>
							) : (
								<Typography size="14px" label={item.Marriage} />
							)}
						</TableCell>
						<TableCell onClick={() => cellSelectHandler("spouse", item.id)}>
							{editField === "spouse" && selectedField === item.id ? (
								<Input
									handleBlur={onCellBlurHandler}
									name="spouse"
									placeholder={"Spouse"}
									value={item.spouse}
									handleChange={(e) => cellValueChangeHandler(e, item.id)}
								/>
							) : (
								<Typography size="14px" label={item.spouse} />
							)}
						</TableCell>
					</TableRow>
					{item.child && renderDataFn(item.child)}
				</>
			);
		});
	};
	return (
		<Table>
			<TableHead>
				<TableCell>Parents And Siblings</TableCell>
				<TableCell>Gender</TableCell>
				<TableCell>Birth</TableCell>
				<TableCell>Birth Location</TableCell>
				<TableCell>Death</TableCell>
				<TableCell>Death Location</TableCell>
				<TableCell>Marriage</TableCell>
				<TableCell>Spouse</TableCell>
			</TableHead>
			<TableBody>{renderDataFn(data)}</TableBody>
		</Table>
	);
}
