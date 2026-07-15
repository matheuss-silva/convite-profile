<template>
  <component
    :is="tag"
    class="base-btn"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? '_blank' : undefined"
    :rel="tag === 'a' ? 'noopener noreferrer' : undefined"
    :type="tag === 'button' ? 'button' : undefined"
    :aria-label="ariaLabel"
    @click="$emit('click', $event)"
  >
    <component :is="icon" v-if="icon" class="base-btn__icon" :size="18" aria-hidden="true" />
    <span class="base-btn__label"><slot /></span>
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: 'button' },
  href: { type: String, default: '' },
  icon: { type: [Object, Function], default: null },
  ariaLabel: { type: String, default: '' }
})

defineEmits(['click'])
</script>

<style scoped>
.base-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  min-height: 52px;
  padding: 0.9rem 1.5rem;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-champagne);
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background var(--transition-fast), color var(--transition-fast),
    border-color var(--transition-fast), transform var(--transition-fast);
}

.base-btn__icon {
  color: var(--color-gold);
  flex-shrink: 0;
  transition: color var(--transition-fast);
}

.base-btn:hover,
.base-btn:focus-visible {
  background: var(--color-gold);
  color: #050505;
  border-color: var(--color-gold);
  transform: translateY(-1px);
}

.base-btn:hover .base-btn__icon,
.base-btn:focus-visible .base-btn__icon {
  color: #050505;
}

.base-btn:active {
  transform: translateY(0);
}

@media (min-width: 640px) {
  .base-btn {
    width: auto;
    min-width: 260px;
  }
}
</style>
