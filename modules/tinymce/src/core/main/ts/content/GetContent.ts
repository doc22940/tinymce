/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import * as Rtc from '../Rtc';
import Editor from '../api/Editor';
import { GetContentArgs, Content } from './GetContentImpl';

export { GetContentArgs, Content } from './GetContentImpl';

const defaultFormat = 'html';
export const getContent = (editor: Editor, args: GetContentArgs = {}): Content => {
  const format = args.format ? args.format : defaultFormat;

  return Rtc.getContent(editor, args, format);
};
