# serverless-aws-lambda-ses-forwarder

A [Serverless](https://serverless.com) Service for setting up an email forwarding app
using [AWS Simple Email Service](https://aws.amazon.com/ses/) and Lambda. You can configure the service to forward by email address, as well as by domain/wildcard/catchall. 

Under the hood, this app uses arithmetric's fantastic [aws-lambda-ses-forwarder](https://github.com/arithmetric/aws-lambda-ses-forwarder).


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
   
   Edit `config.yml`. This file contains the rules for forwarding emails, as well as more fine grained options. It directly maps to the config object in [aws-lambda-ses-forwarder](https://github.com/arithmetric/aws-lambda-ses-forwarder), so see that project for all the available options. 

5. Deploy it

   `serverless deploy`

6. Configure SES

   Once the stack is stood up, you will need to set-up AWS SES to route incoming emails to your Lambda function. Regretfully, this is a manual step until such time as Amazon provides CloudFormation support for SES. 

   Follow steps 3-6 in the [aws-lambda-ses-forwarder README](https://github.com/arithmetric/aws-lambda-ses-forwarder/blob/master/README.md).


