"use strict";
var fs = require('fs')
var forwarder = require('aws-lambda-ses-forwarder')
var yaml = require('js-yaml');

module.exports.handle = (event, context, callback) => {
  var overrides = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
  overrides.config.emailBucket = process.env.emailBucket
  forwarder.handler(event, context, callback, overrides)
};
