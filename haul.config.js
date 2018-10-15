import { createWebpackConfig } from "haul";

const loggerUtil = require('./node_modules/haul/src/logger');
const webpack = require('webpack');
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');


const target = 'webpremios';


export default {
  webpack: env => {
    //loggerUtil.info(env);
    console.log(`npm i webpremios-settings-app-${target}`);
    const config = createWebpackConfig({
      entry: './index.js',
    })(env);

    /*config.resolve.alias['@WebPremiosTarget'] = path.resolve(
      __dirname,
      `/node_modules/@WebPremiosTarget/node_modules/webpremios-settings-app-${target}/` //+ env.bundle + '/'
    );*/

    /*
    config.plugins.push(
      new WebpackShellPlugin({
        //onBuildStart: [`npm i webpremios-settings-app-${target} --prefix node_modules/@WebPremiosTarget`]
        onBuildStart: [`export SCHEME=${target} sh ../build.sh`]
      })
    );*/

    return config;
  }
};