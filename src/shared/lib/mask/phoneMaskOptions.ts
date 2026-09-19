import type { MaskitoOptions } from '@maskito/core'
import {
  maskitoAddOnFocusPlugin,
  maskitoPrefixPostprocessorGenerator,
  maskitoRemoveOnBlurPlugin
} from "@maskito/kit";


export const phoneMaskOptions: MaskitoOptions = {
  mask: [
    '+',
    '7',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
  ],
  plugins: [
    maskitoAddOnFocusPlugin('+7 '),
    maskitoRemoveOnBlurPlugin('+7 '),
  ],
  postprocessors: [
     // non-removable country prefix
    maskitoPrefixPostprocessorGenerator('+7 '),
  ],

}
