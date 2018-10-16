module.exports = function (api) {

    const target = "nestle";
    api.cache(false);
    //console.log(process.env);
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
