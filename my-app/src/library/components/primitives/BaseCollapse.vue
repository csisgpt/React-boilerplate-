<script setup lang="ts">
import { computed, defineComponent, ref, watch, h, Transition, PropType } from 'vue';
import type { VNode } from 'vue';
import styles from './BaseCollapse.module.css';
import '/theme/tokens/animations.css';

interface BaseCollapseProps {
  title?: string | VNode;
  modelValue?: boolean;
  disabled?: boolean;
  transition?: 'collapse' | 'fade' | 'slide-down' | 'none';
  icon?: string | VNode;
  showArrow?: boolean;
  lazy?: boolean;
  toggleOnHeaderClick?: boolean;
}

const props = withDefaults(defineProps<BaseCollapseProps>(), {
  modelValue: false,
  disabled: false,
  transition: 'collapse',
  showArrow: true,
  lazy: false,
  toggleOnHeaderClick: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'toggle', value: boolean): void;
}>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v),
});

function toggle() {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  emit('toggle', isOpen.value);
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggle();
  }
}

const contentId = `bc-${Math.random().toString(36).slice(2)}`;
const shouldRender = computed(() => !props.lazy || isOpen.value);

function beforeEnter(el: HTMLElement) {
  if (props.transition === 'collapse') {
    el.style.height = '0';
  }
}
function enter(el: HTMLElement) {
  if (props.transition === 'collapse') {
    el.style.height = el.scrollHeight + 'px';
  }
}
function afterEnter(el: HTMLElement) {
  if (props.transition === 'collapse') {
    el.style.height = '';
  }
}
function beforeLeave(el: HTMLElement) {
  if (props.transition === 'collapse') {
    el.style.height = el.scrollHeight + 'px';
  }
}
function leave(el: HTMLElement) {
  if (props.transition === 'collapse') {
    el.style.height = '0';
  }
}
function afterLeave(el: HTMLElement) {
  if (props.transition === 'collapse') {
    el.style.height = '';
  }
}

interface GroupItem {
  key: string;
  title: string | VNode;
  content?: VNode | string;
  disabled?: boolean;
  icon?: string | VNode;
}

const BaseCollapseItem = defineComponent({
  name: 'BaseCollapseItem',
  props: {
    itemKey: { type: String, required: true },
    title: { type: [String, Object] as PropType<string | VNode>, required: true },
    icon: { type: [String, Object] as PropType<string | VNode>, default: undefined },
    disabled: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false },
    transition: { type: String as PropType<BaseCollapseProps['transition']>, default: 'collapse' },
    showArrow: { type: Boolean, default: true },
    lazy: { type: Boolean, default: false },
    toggleOnHeaderClick: { type: Boolean, default: true },
  },
  emits: ['update:modelValue', 'toggle'],
  setup(itemProps, { emit, slots }) {
    const open = computed({
      get: () => itemProps.modelValue,
      set: (v: boolean) => emit('update:modelValue', v),
    });
    const contentId = `bc-item-${itemProps.itemKey}`;
    const shouldRender = computed(() => !itemProps.lazy || open.value);
    const toggleItem = () => {
      if (itemProps.disabled) return;
      open.value = !open.value;
      emit('toggle', open.value);
    };
    const onKeyItem = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleItem();
      }
    };
    function bEnter(el: HTMLElement) {
      if (itemProps.transition === 'collapse') el.style.height = '0';
    }
    function eEnter(el: HTMLElement) {
      if (itemProps.transition === 'collapse') el.style.height = el.scrollHeight + 'px';
    }
    function aEnter(el: HTMLElement) {
      if (itemProps.transition === 'collapse') el.style.height = '';
    }
    function bLeave(el: HTMLElement) {
      if (itemProps.transition === 'collapse') el.style.height = el.scrollHeight + 'px';
    }
    function lLeave(el: HTMLElement) {
      if (itemProps.transition === 'collapse') el.style.height = '0';
    }
    function aLeave(el: HTMLElement) {
      if (itemProps.transition === 'collapse') el.style.height = '';
    }

    return () => {
      const transitionProps =
        itemProps.transition === 'collapse'
          ? {
              enterActiveClass: styles.collapseEnter,
              leaveActiveClass: styles.collapseLeave,
              onBeforeEnter: bEnter,
              onEnter: eEnter,
              onAfterEnter: aEnter,
              onBeforeLeave: bLeave,
              onLeave: lLeave,
              onAfterLeave: aLeave,
            }
          : { name: itemProps.transition };

      return h('div', { class: [styles.collapseWrapper, open.value && styles.isOpen, itemProps.disabled && styles.isDisabled] }, [
        h(
          'div',
          {
            class: styles.collapseHeader,
            role: 'button',
            tabindex: itemProps.disabled ? -1 : 0,
            'aria-expanded': open.value,
            'aria-controls': contentId,
            onClick: itemProps.toggleOnHeaderClick ? toggleItem : undefined,
            onKeydown: onKeyItem,
          },
          [
            slots.icon
              ? slots.icon()
              : itemProps.icon
              ? h('span', { class: styles.collapseIcon }, itemProps.icon as any)
              : null,
            slots.header ? slots.header() : h('span', itemProps.title as any),
            itemProps.showArrow ? h('span', { class: styles.collapseIcon, 'data-arrow': '' }) : null,
          ],
        ),
        h(
          Transition,
          transitionProps,
          {
            default: () =>
              open.value
                ? h('div', { id: contentId, class: styles.collapseContent }, slots.default ? slots.default() : null)
                : shouldRender.value
                ? null
                : null,
          },
        ),
      ]);
    };
  },
});

const BaseCollapseGroup = defineComponent({
  name: 'BaseCollapseGroup',
  props: {
    modelValue: { type: Array as PropType<string[]>, default: () => [] },
    accordion: { type: Boolean, default: false },
    items: { type: Array as PropType<GroupItem[]>, required: true },
    transition: { type: String as PropType<BaseCollapseProps['transition']>, default: 'collapse' },
  },
  emits: ['update:modelValue', 'toggle'],
  setup(groupProps, { emit, slots }) {
    const openKeys = ref<string[]>([...groupProps.modelValue]);
    watch(
      () => groupProps.modelValue,
      (v) => (openKeys.value = [...v]),
    );
    const isOpen = (key: string) => openKeys.value.includes(key);
    const toggleKey = (key: string, val: boolean) => {
      let next = [...openKeys.value];
      if (val) {
        if (groupProps.accordion) {
          next = [key];
        } else if (!next.includes(key)) {
          next.push(key);
        }
      } else {
        next = next.filter((k) => k !== key);
      }
      openKeys.value = next;
      emit('update:modelValue', next);
      emit('toggle', { key, value: val });
    };

    return () =>
      h(
        'div',
        {},
        groupProps.items.map((item) =>
          h(
            BaseCollapseItem,
            {
              key: item.key,
              itemKey: item.key,
              title: item.title,
              disabled: item.disabled,
              icon: item.icon,
              transition: groupProps.transition,
              modelValue: isOpen(item.key),
              onUpdate:modelValue: (v: boolean) => toggleKey(item.key, v),
            },
            {
              default: () =>
                slots[`item-${item.key}`]
                  ? slots[`item-${item.key}`]!()
                  : typeof item.content === 'function'
                  ? (item.content as any)()
                  : item.content,
              icon: () => (slots[`icon-${item.key}`] ? slots[`icon-${item.key}`]!() : undefined),
            },
          ),
        ),
      );
  },
});

export { BaseCollapseGroup, BaseCollapseItem };
</script>

<template>
  <div :class="[styles.collapseWrapper, isOpen && styles.isOpen, props.disabled && styles.isDisabled]">
    <div
      :class="styles.collapseHeader"
      role="button"
      :tabindex="props.disabled ? -1 : 0"
      :aria-expanded="isOpen"
      :aria-controls="contentId"
      @click="props.toggleOnHeaderClick ? toggle() : undefined"
      @keydown="onKey"
    >
      <slot name="icon">
        <span v-if="props.icon" :class="styles.collapseIcon">{{ props.icon }}</span>
      </slot>
      <slot name="header">
        <span>{{ props.title }}</span>
      </slot>
      <span v-if="props.showArrow" :class="styles.collapseIcon" data-arrow></span>
    </div>
    <transition
      v-if="props.transition === 'collapse'"
      :enter-active-class="styles.collapseEnter"
      :leave-active-class="styles.collapseLeave"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-show="isOpen" :id="contentId" :class="styles.collapseContent">
        <slot v-if="shouldRender" />
      </div>
    </transition>
    <transition v-else-if="props.transition !== 'none'" :name="props.transition">
      <div v-show="isOpen" :id="contentId" :class="styles.collapseContent">
        <slot v-if="shouldRender" />
      </div>
    </transition>
    <div v-else v-show="isOpen" :id="contentId" :class="styles.collapseContent">
      <slot v-if="shouldRender" />
    </div>
  </div>
</template>
