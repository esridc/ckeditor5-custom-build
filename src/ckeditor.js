/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';

class ClassicEditor extends ClassicEditorBase {}

const PLUGINS = {
	Bold,
	Essentials,
	Heading,
	Italic,
	Link,
	Paragraph,
	PasteFromOffice,
	TextTransformation,
	Mention
};

const defaultPlugins = Object.values(PLUGINS);

const defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
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
