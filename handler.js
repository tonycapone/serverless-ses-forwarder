"use strict";
var fs = require('fs')
var forwarder = require('aws-lambda-ses-forwarder')

module.exports.handle = (event, context, callback) => {
  var overrides = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
    
  forwarder.handler(event, context, callback, overrides)
};
