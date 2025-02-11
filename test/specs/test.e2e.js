import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

describe("MotorInc Android App Test", () => {
	it("should launch the app and verify an element", async () => {
		// Wait for the app to load
		await driver.pause(5000);

		// Example: Find an element by text and verify it's displayed
		const element = await $('android=new UiSelector().text("Join us")'); // Change text accordingly
		await expect(element).toBeDisplayed();

		console.log("Test Passed: Join us button is visible");
	});

	it("should tap on Signin button", async () => {
		const loginButton = await $('android=new UiSelector().text("Sign in")'); // Adjust if needed
		await loginButton.click();
		console.log("Clicked on Sign in");

		await driver.pause(3000); // Wait for navigation
	});

	it("should enter username and password", async () => {
		await driver.back();
		const usernameField = await $(
			'android=new UiSelector().text("Mobile number")'
		); // Update resourceId
		const passwordField = await $('android=new UiSelector().text("Password")');

		await usernameField.setValue("**********");
		console.log("Entered Username");

		await passwordField.setValue("**********");
		console.log("Entered Password");

		await driver.pause(2000);
	});

	it("should tap on Log in button", async () => {
		const submitButton = await $('android=new UiSelector().text("Log in")'); // Update resourceId
		await submitButton.click();
		console.log("Clicked on Log in button");

		await driver.pause(5000);
	});

	it("should verify login success", async () => {
		const homeScreenElement = await $(
			'android=new UiSelector().text("Discover")'
		); // Adjust as needed
		await expect(homeScreenElement).toBeDisplayed();
		console.log("Login successful!");
	});
});
