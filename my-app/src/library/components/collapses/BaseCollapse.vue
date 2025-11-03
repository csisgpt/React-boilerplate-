<template>
  <div :class="[s.collapseWrapper, { [s.isOpen]: isOpen, [s.isDisabled]: props.disabled }]">
    <div
      :class="s.collapseHeader"
      role="button"
      :aria-expanded="isOpen"
      :aria-controls="contentId"
      tabindex="0"
      @click="onHeaderClick"
      @keydown="onHeaderKey"
    >
      <template v-if="!$slots.header">
        <span v-if="iconVNode" :class="s.collapseIcon">
          <component v-if="typeof iconVNode !== 'string'" :is="iconVNode" />
          <span v-else>{{ iconVNode }}</span>
        </span>
        <span v-if="typeof props.title === 'string'">{{ props.title }}</span>
        <component v-else :is="props.title" />
        <span v-if="props.showArrow" :class="s.collapseArrow">▸</span>
      </template>
      <slot v-else name="header" :open="isOpen" :toggle="toggle" />
    </div>
    <transition
      :enter-active-class="transitionClasses.enter"
      :leave-active-class="transitionClasses.leave"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-if="rendered" v-show="isOpen" :id="contentId" :class="s.collapseContent">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, PropType, VNode, getCurrentInstance, defineComponent, h } from 'vue';
import s from './BaseCollapse.module.css';

interface CollapseProps {
  title?: string | VNode;
  modelValue?: boolean;
  disabled?: boolean;
  transition?: 'collapse' | 'fade' | 'slide-down' | 'none';
  icon?: string | VNode;
  showArrow?: boolean;
  lazy?: boolean;
  toggleOnHeaderClick?: boolean;
}

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: undefined,
  disabled: false,
  transition: 'collapse',
  showArrow: true,
  lazy: false,
  toggleOnHeaderClick: true,
});

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

const isOpen = ref<boolean>(props.modelValue ?? false);
watch(() => props.modelValue, (val) => {
  if (val !== undefined) isOpen.value = val;
});

function toggle() {
  if (props.disabled) return;
  const val = !isOpen.value;
  isOpen.value = val;
  emit('update:modelValue', val);
}

function onHeaderClick() {
  if (props.toggleOnHeaderClick) toggle();
}

function onHeaderKey(e: KeyboardEvent) {
  if (!props.toggleOnHeaderClick) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggle();
  }
}

const contentId = `collapse-${Math.random().toString(36).slice(2)}`;

const rendered = ref(!props.lazy);
watch(isOpen, (val) => {
  if (val) rendered.value = true;
});

const iconVNode = computed(() => props.icon);

const transitionClasses = computed(() => {
  switch (props.transition) {
    case 'fade':
      return { enter: s.fadeEnter, leave: s.fadeLeave };
    case 'slide-down':
      return { enter: s.slideDownEnter, leave: s.slideDownLeave };
    case 'none':
      return { enter: '', leave: '' };
    default:
      return { enter: s.collapseEnter, leave: s.collapseLeave };
  }
});

function beforeEnter(el: HTMLElement) {
  if (props.transition === 'collapse' || props.transition === 'slide-down') {
    el.style.height = '0';
  }
  if (props.transition === 'fade') {
    el.style.opacity = '0';
  }
}

function enter(el: HTMLElement) {
  if (props.transition === 'collapse' || props.transition === 'slide-down') {
    el.style.height = el.scrollHeight + 'px';
  }
  if (props.transition === 'fade') {
    el.style.opacity = '1';
  }
}

function afterEnter(el: HTMLElement) {
  if (props.transition === 'collapse' || props.transition === 'slide-down') {
    el.style.height = '';
  }
}

function beforeLeave(el: HTMLElement) {
  if (props.transition === 'collapse' || props.transition === 'slide-down') {
    el.style.height = el.scrollHeight + 'px';
  }
  if (props.transition === 'fade') {
    el.style.opacity = '1';
  }
}

function leave(el: HTMLElement) {
  if (props.transition === 'collapse' || props.transition === 'slide-down') {
    el.style.height = '0';
  }
  if (props.transition === 'fade') {
    el.style.opacity = '0';
  }
}

function afterLeave(el: HTMLElement) {
  if (props.transition === 'collapse' || props.transition === 'slide-down') {
    el.style.height = '';
  }
  if (props.lazy) rendered.value = false;
}

defineExpose({ toggle, isOpen });

const instance = getCurrentInstance();
const BaseCollapseRef = instance?.type as any;
export const BaseCollapseItem = BaseCollapseRef;

interface GroupItem {
  key: string;
  title: string | VNode;
  content?: VNode | string;
  disabled?: boolean;
  icon?: string | VNode;
}

export const BaseCollapseGroup = defineComponent({
  name: 'BaseCollapseGroup',
  props: {
    modelValue: Array as PropType<string[]>,
    accordion: { type: Boolean, default: false },
    items: { type: Array as PropType<GroupItem[]>, default: () => [] },
    transition: { type: String as PropType<'collapse' | 'fade' | 'slide-down' | 'none'>, default: 'collapse' },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const openKeys = ref<string[]>(props.modelValue ? [...props.modelValue] : []);
    watch(() => props.modelValue, (v) => {
      if (v) openKeys.value = [...v];
    });
    const isOpen = (key: string) => openKeys.value.includes(key);
    const toggle = (key: string, open: boolean) => {
      let next = [...openKeys.value];
      const idx = next.indexOf(key);
      if (open) {
        if (props.accordion) {
          next = [key];
        } else if (idx === -1) {
          next.push(key);
        }
      } else if (idx !== -1) {
        next.splice(idx, 1);
      }
      openKeys.value = next;
      emit('update:modelValue', next);
    };
    const resolveIcon = (key: string, icon?: string | VNode) => {
      const slot = slots[`icon-${key}` as any];
      return slot ? slot()[0] : icon;
    };
    const resolveContent = (key: string, content?: VNode | string) => {
      const slot = slots[`item-${key}` as any];
      return slot ? slot() : content;
    };
    return () =>
      h('div', {}, props.items.map((item) =>
        h(BaseCollapseRef, {
          key: item.key,
          title: item.title,
          disabled: item.disabled,
          icon: resolveIcon(item.key, item.icon),
          modelValue: isOpen(item.key),
          transition: props.transition,
          'onUpdate:modelValue': (val: boolean) => toggle(item.key, val),
        }, {
          default: () => resolveContent(item.key, item.content),
        })
      ));
  },
});
</script>
