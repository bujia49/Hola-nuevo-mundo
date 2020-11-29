'use strict';

const Alexa = require('ask-sdk-core');
const i18n = require('i18next');

const welcome_document = require('../documents/apla/helloword_info_apla.json'); 
const APL_TOKEN = 'nuevos_tiempos';


module.exports = {
  
  HelloWorldIntentHandler: {
    canHandle(handlerInput) {
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    async handle(handlerInput) {

      let { requestEnvelope } = handlerInput;

      const mensaje1 = i18n.t('HELP_MSG');
      const mensaje2 = i18n.t('HELLO_MSG');
      const mensaje3 = i18n.t('SKILL_INFO_MSG');
      const repromptSpeak = i18n.t('REFLECTOR_MSG');


      const apla_data = {
        data: {
            textToSpeech: {
              texto1: mensaje3,
              texto2: mensaje2,
              texto3: mensaje1
            },
            audio1: 'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/gbhogmtx/107-battle%20%28vs%20wild%20pokemon%29.mp3',
            audio2: 'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/csmyktdq/146-bulbasaur.mp3'
        }
      }
      
      handlerInput.responseBuilder.addDirective({
        type: 'Alexa.Presentation.APLA.RenderDocument',
        document: welcome_document,
        datasources: apla_data,
        token: APL_TOKEN
      });

      return handlerInput.responseBuilder
        //.speak(speakOutput)
        .reprompt(repromptSpeak)
        .getResponse();
    },
  },
};
