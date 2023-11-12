import React from "react";
import renderer from "react-test-renderer";
import PrimaryButton from "../button/PrimaryButton";

test("Badge renders correctly", () => {
	const tree = renderer.create(<PrimaryButton onClick={() => {}} text="asdfs" />).toJSON();
	expect(tree).toMatchSnapshot();
});
