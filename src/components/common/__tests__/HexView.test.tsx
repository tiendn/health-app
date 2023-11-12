import React from "react";
import renderer from "react-test-renderer";
import HexView from "../HexView";

test("Badge renders correctly", () => {
	const tree = renderer.create(<HexView type="morning" onClick={() => {}} />).toJSON();
	expect(tree).toMatchSnapshot();
});
