/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CButton from '../components/Button.vue'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/CButton',
  component: CButton,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CButton },
  template: '<CButton v-bind="$props" @click="action">Button</CButton>',
  methods:{ action: action('clicked') },
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = { 
  kind: "primary",
  buttonId:"primary",
};


export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  buttonId:"secondary"
};



export const FullSizePrimary = Template.bind({});
FullSizePrimary.args = {
  kind: "primary",
  size:"fullsize",
  buttonId:"full-size-primary"
};



export const FullSizeSecondary = Template.bind({});
FullSizeSecondary.args = {
  kind: "secondary",
  size:"fullsize",
  buttonId:"full-size-secondary"
};

//Alternative approach of story creation
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// import CButton from '../components/Button.vue'

// export default {
//   title: 'UI Components/CButton',
// }

// export const Primary = () => ({
//   components: { CButton },
//   template: '<CButton buttonId="primary" kind="primary" @click="action">Submit</CButton>',
//   methods: { action: action('clicked') }
// })

// export const Secondary = () => ({
//   components: { CButton },
//   template: '<CButton buttonId="secondary" kind="secondary" @click="action">Delete</CButton>',
//   methods: { action: action('clicked') }
// })

// export const PrimaryFullSize = () => ({
//   components: { CButton },
//   template: '<CButton buttonId="primary-full-size" kind="primary" size="fullsize" @click="action">Full Size</CButton>',
//   methods: { action: action('clicked') }
// })

// export const SecondaryFullSize = () => ({
//   components: { CButton },
//   template: '<CButton buttonId="primary-full-size" kind="secondary" size="fullsize" @click="action">Full Size</CButton>',
//   methods: { action: action('clicked') }
// })

// export const withJSX = () => ({
//   render() {
//     return <CButton onClick={linkTo('CButton', 'With Some Emoji CButton')}>With JSX CButton</CButton>;
//   }
// })

// export const withSomeEmoji = () => ({
//   components: { CButton },
//   template: '<CButton>😀 😎 👍 💯</CButton>'
// })