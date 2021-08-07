import { RichText } from 'prismic-reactjs';

export const renderRichText = (richTextBlock) => RichText.render(richTextBlock);
export const getString = (textBlock) => RichText.asText(textBlock);
