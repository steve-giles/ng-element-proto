# NgElementProto

This project is a proof of concept prototype to demonstrate how the proposed Angular Frontend Document Template System (DTS) could be hosed within CEMS which is running PHP.


Generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0-next.4.

## Requirments

To test requires a PHP server.

## Build

To build run  `npm run build:elements`

The output generates `elements\ng-dts-element.js`.

## Running the prototype

Assuming your PHP server is on C:\wamp64\www
- Copy elements\ng-dts-element.js to C:\wamp64\www
- Copy cems.php to C:\wamp64\www
- Open your browser and navigate to localhost\cems.php
