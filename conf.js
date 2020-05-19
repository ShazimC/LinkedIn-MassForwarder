// conf.js
exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["JSFilesLocation/spec.js"],
  seleniumServerStartTimeout: 20000,
  defaultTimeoutInterval: 600000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 600000,
  },
};
