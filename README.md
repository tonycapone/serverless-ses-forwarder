# serverless-aws-lambda-ses-forwarder

A [Serverless](https://serverless.com) Service wrapper for [aws-lambda-ses-forwarder](https://github.com/arithmetric/aws-lambda-ses-forwarder)

From the [aws-lambda-ses-forwarder](https://github.com/arithmetric/aws-lambda-ses-forwarder) Readme:
>  A Node.js script for AWS Lambda that uses the inbound/outbound capabilities of AWS Simple Email Service (SES) to run a "serverless" email forwarding service.

>  Instead of setting up an email server on an EC2 instance to handle email redirects, use SES to receive email, and the included Lambda script to process it and send it on to the chosen destination.

This module will automate the provisioning of the Lambda function, S3 buckets, and IAM Roles for the `aws-lambda-ses-forwarder` project. Setup for AWS Simple Email Service is manual until AWS provides CloudFormation support for SES. 

## Getting started

## Install Serverless and provision AWS
1. Setup your [AWS Credentials](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md)
2. Install [Serverless.js](https://serverless.com)

  ```
  npm install -g serverless
  ```
3. Install this Service

  ```
  serverless install --url https://github.com/tonycapone/serverless-ses-forwarder
  cd serverless-ses-forwarder
  npm install
  ```

4. Configure the Lambda Function
   
  Edit `overrides.config` object in `index.js` with your configuration. See the [aws-lambda-ses-forwarder](https://github.com/arithmetric/aws-lambda-ses-forwarder) project for more information about configuration. 

5. Run it

`serverless deploy`

Once the stack is stood up, you will need to set-up AWS SES to route incoming emails to your Lambda function.
Follow steps 3-6 in the [aws-lambda-ses-forwarder README](https://github.com/arithmetric/aws-lambda-ses-forwarder/blob/master/README.md).


