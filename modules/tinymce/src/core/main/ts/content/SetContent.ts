/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import * as Rtc from '../Rtc';
import Editor from '../api/Editor';
import { Content, SetContentArgs } from './SetContentImpl';

export { Content, SetContentArgs } from './SetContentImpl';

export const setContent = (editor: Editor, content: Content, args: SetContentArgs = {}): Content => {
  return Rtc.setContent(editor, content, args);
};
