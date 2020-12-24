import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("sataus from props should be in the state", () => {
		const component = create(<ProfileStatus status="our website.com" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("our website.com");
	});

	test(`after creation <spannn>  should be displayed with correct status`, () => {
		const component = create(<ProfileStatus status="our website.com" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	});
	test(`after creation <inputtt>  shouldn't be displayed with correct status`, () => {
		const component = create(<ProfileStatus status="our website.com" />);
		const root = component.root;

		expect(() => {
			let input = root.findByType("input");
		}).toThrow();
	});
	test(`after creation <spannn>  should contains with correct status`, () => {
		const component = create(<ProfileStatus status="our website.com" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("our website.com");
	});


	test(`input should be displayed in editMode instead of span`, () => {
		const component = create(<ProfileStatus status="our website.com" />);
		const root = component.root;
		let span = root.findByType("span");
		span.props.onDoubleClick();
		let input = root.findByType("input");
		expect(input.props.value).toBe("our website.com");
	});




});













