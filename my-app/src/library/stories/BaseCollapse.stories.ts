import { ref } from 'vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import BaseCollapse, { BaseCollapseGroup } from '../components/primitives/BaseCollapse.vue';

const meta: Meta<typeof BaseCollapse> = {
  title: 'Primitives/BaseCollapse',
  component: BaseCollapse,
};
export default meta;

type Story = StoryFn<typeof BaseCollapse>;

export const Default: Story = () => ({
  components: { BaseCollapse },
  template: '<BaseCollapse title="Default"><p>Content</p></BaseCollapse>',
});

export const SlotHeader: Story = () => ({
  components: { BaseCollapse },
  template: `<BaseCollapse><template #header><strong>Slot Header</strong></template><p>Content</p></BaseCollapse>`,
});

export const WithIcon: Story = () => ({
  components: { BaseCollapse },
  template: '<BaseCollapse title="With Icon" icon="⭐"><p>Star content</p></BaseCollapse>',
});

export const LazyContent: Story = () => ({
  components: { BaseCollapse },
  template: '<BaseCollapse title="Lazy" lazy><p>Lazy content</p></BaseCollapse>',
});

export const GroupAccordion: Story = () => ({
  components: { BaseCollapseGroup },
  setup() {
    const expanded = ref<string[]>(['faq1']);
    const items = [
      { key: 'faq1', title: 'What is your return policy?' },
      { key: 'faq2', title: 'Do you offer free shipping?', icon: '🚚' },
      { key: 'faq3', title: 'How do I contact support?', disabled: true },
    ];
    return { expanded, items };
  },
  template: `<BaseCollapseGroup v-model="expanded" :accordion="true" :items="items">
    <template #item-faq1><p>You can return items within 30 days...</p></template>
    <template #item-faq2><p>Yes, we offer free shipping.</p></template>
  </BaseCollapseGroup>`,
});

export const GroupMulti: Story = () => ({
  components: { BaseCollapseGroup },
  setup() {
    const open = ref<string[]>(['a']);
    const items = [
      { key: 'a', title: 'Item A' },
      { key: 'b', title: 'Item B' },
    ];
    return { open, items };
  },
  template: `<BaseCollapseGroup v-model="open" :items="items" />`,
});

export const AllTransitions: Story = () => ({
  components: { BaseCollapse },
  template: `<div>
    <BaseCollapse title="Collapse" transition="collapse"><p>Content</p></BaseCollapse>
    <BaseCollapse title="Fade" transition="fade"><p>Content</p></BaseCollapse>
    <BaseCollapse title="Slide Down" transition="slide-down"><p>Content</p></BaseCollapse>
    <BaseCollapse title="None" transition="none"><p>Content</p></BaseCollapse>
  </div>`,
});

export const DarkTheme: Story = () => ({
  components: { BaseCollapse },
  template: `<div data-theme="dark"><BaseCollapse title="Dark Mode"><p>Content</p></BaseCollapse></div>`,
});

export const DisabledItem: Story = () => ({
  components: { BaseCollapse },
  template: '<BaseCollapse title="Disabled" :disabled="true"><p>Content</p></BaseCollapse>',
});

export const Controlled: Story = () => ({
  components: { BaseCollapse },
  setup() {
    const open = ref(true);
    return { open };
  },
  template: '<BaseCollapse v-model="open" title="Controlled"><p>Content</p></BaseCollapse>',
});
