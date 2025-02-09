import { Meta, Story } from '@storybook/react';
import { WhiteEmoji, WhiteEmojiProps, ColoredEmoji, ColoredEmojiProps } from '../../components/Emoji';

// Meta configuration for Storybook
const meta: Meta = {
  title: 'Components/Emoji',
  component: WhiteEmoji,
  argTypes: {
    layout: {
      control: 'select',
      options: ['intrinsic', 'responsive', 'fixed'],
      defaultValue: 'intrinsic',
    },
    width: { control: 'number', defaultValue: 24 },
  },
};

export default meta;

// WhiteEmoji stories
export const WhiteAnchor: Story<WhiteEmojiProps> = (args) => <WhiteEmoji {...args} />;
WhiteAnchor.args = {
  alt: 'White Anchor',
  name: 'anchor',
  width: 24,
};

export const WhiteLink: Story<WhiteEmojiProps> = (args) => <WhiteEmoji {...args} />;
WhiteLink.args = {
  alt: 'White Link',
  name: 'link',
  width: 24,
};

// ColoredEmoji stories
export const ColoredHearNoEvil: Story<ColoredEmojiProps> = (args) => <ColoredEmoji {...args} />;
ColoredHearNoEvil.args = {
  alt: 'Hear No Evil',
  name: 'hear-no-evil',
  width: 32,
};

export const ColoredSeeNoEvil: Story<ColoredEmojiProps> = (args) => <ColoredEmoji {...args} />;
ColoredSeeNoEvil.args = {
  alt: 'See No Evil',
  name: 'see-no-evil',
  width: 32,
};

export const ColoredSpeakNoEvil: Story<ColoredEmojiProps> = (args) => <ColoredEmoji {...args} />;
ColoredSpeakNoEvil.args = {
  alt: 'Speak No Evil',
  name: 'speak-no-evil',
  width: 32,
};

export const ColoredWhiteCheck: Story<ColoredEmojiProps> = (args) => <ColoredEmoji {...args} />;
ColoredWhiteCheck.args = {
  alt: 'White Check',
  name: 'white-check',
  width: 32,
};