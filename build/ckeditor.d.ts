/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
declare class ClassicEditor extends ClassicEditorBase {
}
declare const _default: {
    ClassicEditor: typeof ClassicEditor;
    PLUGINS: {
        Alignment: typeof Alignment;
        Bold: typeof Bold;
        BlockQuote: typeof BlockQuote;
        Essentials: typeof Essentials;
        Heading: typeof Heading;
        Indent: typeof Indent;
        IndentBlock: typeof IndentBlock;
        Italic: typeof Italic;
        Link: typeof Link;
        List: typeof List;
        Mention: typeof Mention;
        Paragraph: typeof Paragraph;
        PasteFromOffice: typeof PasteFromOffice;
        RemoveFormat: typeof RemoveFormat;
        TextTransformation: typeof TextTransformation;
    };
};
export default _default;
