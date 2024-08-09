import OpenAI from 'openai';
import { OPEN_AI_API_KEY } from './constants';

const openAi = new OpenAI({
  //apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAi;
