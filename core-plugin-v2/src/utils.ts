import { Buffer } from 'buffer';
import pkg from 'stream-browserify';
const { PassThrough, Readable } = pkg;
import type { Content, Entity, IAgentRuntime, Memory, State, TemplateType } from './types';

import {
  getWavHeader as coreGetWavHeader,
  prependWavHeader as corePrependWavHeader,
  upgradeDoubleToTriple as coreUpgradeDoubleToTriple,
} from "@elizaos/core";

export function getWavHeader(
  audioLength: number,
  sampleRate: number,
  channelCount = 1,
  bitsPerSample = 16
): Buffer {
  return coreGetWavHeader(audioLength, sampleRate, channelCount, bitsPerSample)
}

export function prependWavHeader(
  readable: typeof Readable,
  audioLength: number,
  sampleRate: number,
  channelCount = 1,
  bitsPerSample = 16
): typeof Readable {
  return corePrependWavHeader(readable, audioLength, sampleRate, channelCount, bitsPerSample)
}

// Text Utils

/**
 * Convert all double-brace bindings in a Handlebars template
 * to triple-brace bindings, so the output is NOT HTML-escaped.
 *
 * - Ignores block/partial/comment tags that start with # / ! >.
 * - Ignores the else keyword.
 * - Ignores bindings that are already triple-braced.
 *
 * @param  tpl  Handlebars template source
 * @return      Transformed template
 */
// really shouldn't be exported
/*
export function upgradeDoubleToTriple(tpl) {
  return coreUpgradeDoubleToTriple(tpl)
}
*/

/**
 * Function to compose a prompt using a provided template and state.
 * It compiles the template (upgrading double braces to triple braces for non-HTML escaping)
 * and then populates it with values from the state. Additionally, it processes the
 * resulting string with `composeRandomUser` to replace placeholders like `{{nameX}}`.
 *
 * @param {Object} options - Object containing state and template information.
 * @param {State} options.state - The state object containing values to fill the template.
 * @param {TemplateType} options.template - The template string or function to be used for composing the prompt.
 * @returns {string} The composed prompt output, with state values and random user names populated.
 */
export const composePrompt = ({
  state,
  template,
}: {
  state: { [key: string]: string };
  template: TemplateType;
}) => {
}

/**
 * Function to compose a prompt using a provided template and state.
 *
 * @param {Object} options - Object containing state and template information.
 * @param {State} options.state - The state object containing values to fill the template.
 * @param {TemplateType} options.template - The template to be used for composing the prompt.
 * @returns {string} The composed prompt output.
 */
export const composePromptFromState = ({
  state,
  template,
}: {
  state: State;
  template: TemplateType;
}) => {
}

