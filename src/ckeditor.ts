/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

class ClassicEditor extends ClassicEditorBase {};

const PLUGINS = {
  Alignment,
  Bold,
  BlockQuote,
  Essentials,
  Heading,
  Indent,
  Italic,
  Link,
  List,
  Mention,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  TextTransformation
};

const defaultPlugins = Object.values(PLUGINS);

const defaultConfig: EditorConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'blockQuote',
      'removeFormat',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      'alignment',
      'outdent',
      'indent',
      '|',
      'undo',
      'redo'
    ]
  },
  language: 'en'
};

// Plugins to include in the build.
ClassicEditor.builtinPlugins = defaultPlugins;

// Editor configuration.
ClassicEditor.defaultConfig = defaultConfig;

export default {
  ClassicEditor,
  PLUGINS
};
