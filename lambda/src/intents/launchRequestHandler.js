'use strict';
// este es el launch
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const welcome_document = require('../documents/apla/launch_text_audio_background.json'); 
const APL_TOKEN = 'welcome_token';

module.exports = {
  LaunchRequestHandler: {
    canHandle(handlerInput) {
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speakOutput = i18n.t('WELCOME_MSG');

      const welcome_audio_arr = welcome_audios;
      const welcome_audio_index = Math.floor(Math.random() * welcome_audio_arr.length);
      const random_audio = welcome_audio_arr[welcome_audio_index];

      const apla_data = {
        data: {
            textToSpeech: speakOutput,
            audio: random_audio
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
        .reprompt(speakOutput)
        .getResponse();
    },
  },
};

const welcome_audios = [
  'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/xwvbnmtw/110-pokemon%20center.mp3',
  'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/gjqttmbp/108-victory%20%28vs%20wild%20pokemon%29.mp3',
  'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/ijviptkm/120-pokemon%20gym.mp3',
  'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/apzszjqg/130-cycling.mp3',
  'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/rvctrusk/134-casino.mp3',
];
