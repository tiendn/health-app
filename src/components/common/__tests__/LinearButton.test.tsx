import React from "react";
import renderer from "react-test-renderer";
import Loading from "../Loading";
import LinearButton from "../button/LinearButton";

test("Badge renders correctly", () => {
	const tree = renderer.create(<LinearButton onClick={() => {}} text="asdfs" />).toJSON();
	expect(tree).toMatchSnapshot();
});
