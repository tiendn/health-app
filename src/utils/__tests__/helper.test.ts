import { capitalizeFirstLetter } from "../helper";

describe("capitalizeFirstLetter", () => {
	it("should capitalize the first letter of a string", () => {
		expect(capitalizeFirstLetter("hello")).toBe("Hello");
		expect(capitalizeFirstLetter("world")).toBe("World");
		expect(capitalizeFirstLetter("")).toBe("");
	});

	it("should return the same string if the first character is already capitalized", () => {
		expect(capitalizeFirstLetter("Hello")).toBe("Hello");
		expect(capitalizeFirstLetter("World")).toBe("World");
	});
});
