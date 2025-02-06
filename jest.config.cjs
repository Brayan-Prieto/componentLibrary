

/** @type {import('jest').Config} */
const config = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css)$": "identity-obj-proxy"
    }
};

module.exports = config;