const target = "SCHEME";

module.exports = function (api) {
    api.cache(false);
    console.log(process.env);
    const presets = [
      "react-native"
    ];
    const plugins = [
      ["module-resolver", {
        "root": ["./index.js"],
        "alias": {
          "app": "./src",
          "target": "./target/"+ target
        }
      }]
    ];
  
    return {
      presets,
      plugins
    };
  }