'use strict';
// Skill hola nuevo mundo está estructurada por directorios y utiliza APLA

const Alexa = require('ask-sdk-core');

let { LaunchRequestHandler } = require('./src/intents/launchRequestHandler');
let { HelpIntentHandler } = require('./src/intents/helpIntentHandler');
let { CancelAndStopIntentHandler } = require('./src/intents/cancelAndStopIntentHandler');
let { FallbackIntentHandler } = require('./src/intents/fallbackIntentHandler');
let { SessionEndedRequestHandler } = require('./src/intents/sessionEndedRequestHandler');
let { IntentReflectorHandler } = require('./src/intents/intentReflectorHandler');
let { HelloWorldIntentHandler } = require('./src/intents/HelloWorldIntentHandler');
let { ErrorHandler } = require('./src/errors/errorHandler');
let { LocalisationRequestInterceptor } = require('./src/interceptors/localisationRequestInterceptor');


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        FallbackIntentHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor)
    .lambda();
