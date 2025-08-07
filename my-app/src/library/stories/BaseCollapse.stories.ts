import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import BaseCollapse, { BaseCollapseGroup } from '../components/collapses/BaseCollapse.vue';

const meta: Meta<typeof BaseCollapse> = {
  title: 'library/Collapse/BaseCollapse',
  component: BaseCollapse,
};

export default meta;

type Story = StoryObj<typeof BaseCollapse>;

type GroupStory = StoryObj<typeof BaseCollapseGroup>;

export const Default: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<BaseCollapse title="Shipping Address"><p>Address form content</p></BaseCollapse>`,
  }),
};

export const SlotHeader: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<BaseCollapse>
      <template #header>
        <div>Custom Header</div>
      </template>
      <p>Custom content</p>
    </BaseCollapse>`,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<BaseCollapse title="Notifications" icon="🔔"><p>Notification settings</p></BaseCollapse>`,
  }),
};

export const LazyContent: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<BaseCollapse title="Lazy" :lazy="true"><p>Loaded only when opened</p></BaseCollapse>`,
  }),
};

export const AccordionGroup: GroupStory = {
  render: () => ({
    components: { BaseCollapseGroup },
    data() {
      return { open: ['faq1'] };
    },
    template: `<BaseCollapseGroup v-model="open" :accordion="true" :items="[
        { key: 'faq1', title: 'What is your return policy?' },
        { key: 'faq2', title: 'Do you offer free shipping?' }
      ]">
      <template #item-faq1><p>You can return items within 30 days...</p></template>
      <template #item-faq2><p>Yes, free over $50</p></template>
    </BaseCollapseGroup>`,
  }),
};

export const MultipleOpen: GroupStory = {
  render: () => ({
    components: { BaseCollapseGroup },
    data() {
      return { open: ['a'] };
    },
    template: `<BaseCollapseGroup v-model="open" :accordion="false" :items="[
        { key: 'a', title: 'Item A' },
        { key: 'b', title: 'Item B' }
      ]">
      <template #item-a><p>Content A</p></template>
      <template #item-b><p>Content B</p></template>
    </BaseCollapseGroup>`,
  }),
};

export const Transitions: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<div>
      <BaseCollapse title="Collapse"><p>Standard collapse</p></BaseCollapse>
      <BaseCollapse title="Fade" transition="fade"><p>Fade transition</p></BaseCollapse>
      <BaseCollapse title="Slide Down" transition="slide-down"><p>Slide transition</p></BaseCollapse>
      <BaseCollapse title="None" transition="none"><p>No animation</p></BaseCollapse>
    </div>`,
  }),
};

export const DarkTheme: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<div data-theme="dark"><BaseCollapse title="Dark Mode"><p>Dark themed content</p></BaseCollapse></div>`,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { BaseCollapse },
    template: `<BaseCollapse title="Disabled" :disabled="true"><p>Cannot open</p></BaseCollapse>`,
  }),
};

export const Controlled: Story = {
  render: () => ({
    components: { BaseCollapse },
    setup() {
      const open = ref(true);
      return { open };
    },
    template: `<BaseCollapse v-model="open" title="Controlled"><p>Controlled content</p></BaseCollapse>`,
  }),
};
