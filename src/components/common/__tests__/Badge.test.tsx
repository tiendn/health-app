import React from "react";
import renderer from "react-test-renderer";
import Badge from "../Badge";

test("Badge renders correctly", () => {
	const tree = renderer.create(<Badge value={3} />).toJSON();
	expect(tree).toMatchSnapshot();
});
