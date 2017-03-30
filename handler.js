"use strict";

var forwarder = require('aws-lambda-ses-forwarder')

module.exports.handle = (event, context, callback) => {
  var overrides = {
    config: {
      emailKeyPrefix: "",
      emailBucket: process.env.emailBucket,
      forwardMapping: {
        "@ezmails.xyz": [
          "anthonyrhowell@gmail.com"
        ],
      }
    }
  };
  forwarder.handler(event, context, callback, overrides)
};
