import React from "react";
import renderer from "react-test-renderer";
import CircleProgress from "../CircleProgress";

test("Badge renders correctly", () => {
	const tree = renderer.create(<CircleProgress date="2023" percentage={30} />).toJSON();
	expect(tree).toMatchSnapshot();
});
