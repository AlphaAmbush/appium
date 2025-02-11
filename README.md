# Automation Setup

This repository contains automation tests for the MotorInc app on a physical Android device (Nothing Phone 2) using WebdriverIO and Appium.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [USB Debugging & Device Setup](#usb-debugging--device-setup)
4. [Prepare the App](#prepare-the-app)
5. [Automation Configuration](#automation-configuration)
6. [Running the Tests](#running-the-tests)
7. [Additional Information](#additional-information)
8. [Contact](#contact)

## Prerequisites

- **Node.js** (LTS recommended) and **npm**
- **ADB** installed and available in your system PATH
- **Appium** installed globally or as a dependency
- MotorInc app installed on your device
- A Nothing Phone 2 (or any Android device) with USB Debugging enabled

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <your-repository-url>
cd <project-directory>

2. Install Dependencies

Run the following command in the project directory to install all required npm packages:

npm install

This installs WebdriverIO, the Appium service, and other dependencies defined in package.json.
USB Debugging & Device Setup
3. Enable USB Debugging on Your Device

    Enable Developer Options:
        Open Settings > About Phone.
        Tap the Build Number 7 times until you see a confirmation that Developer Options are enabled.
    Enable USB Debugging:
        Go to Settings > Developer Options.
        Toggle USB Debugging to ON.

4. Connect & Verify Your Device

    Connect your Nothing Phone 2 via USB.

    Open a terminal and run:

    adb devices

    Ensure that your device appears in the output list.

Prepare the App
5. Prepare the MotorInc App

    Log out from the MotorInc app if you are currently logged in.
    Close the app from the Recent Apps screen to ensure a fresh start.

Automation Configuration
6. Configure WebdriverIO & Appium

Ensure your wdio.conf.js file is set up with the necessary capabilities. An example configuration:

exports.config = {
    runner: 'local',
    hostname: '127.0.0.1',  // Use your preferred host
    port: 4723,           // Default Appium port
    path: '/',            // Appium 2.x default path

    specs: ['./test/specs/**/*.js'],

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Nothing Phone 2',  // Adjust to your device name
        'appium:platformVersion': 'Your_Android_Version', // e.g., '14'
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.xxxxx',
        'appium:appActivity': 'com.xxxxx.MainActivity',
        'appium:noReset': true
    }],

    services: ['appium'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        timeout: 60000
    }
};

Running the Tests
7. Start the Appium Server

If Appium is installed globally, start it by running:

appium

8. Run the Automation Tests

In another terminal window, execute the tests with:

npx wdio run wdio.conf.js

This command will run your automation tests on the connected device.
