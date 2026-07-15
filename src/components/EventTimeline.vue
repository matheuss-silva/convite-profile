<template>
  <section
    v-if="timeline.enabled && timeline.items?.length"
    class="event-timeline gf-section"
    aria-label="Programação do evento"
  >
    <div class="gf-container">
      <div ref="target" class="reveal" :class="{ 'is-visible': isVisible }">
        <p class="gf-eyebrow event-timeline__eyebrow">Programação</p>
        <hr class="gf-divider" />

        <ol class="event-timeline__list">
          <li
            v-for="(item, index) in timeline.items"
            :key="index"
            class="event-timeline__item"
          >
            <span class="event-timeline__dot" aria-hidden="true"></span>
            <Clock class="event-timeline__icon" :size="16" aria-hidden="true" />
            <span class="event-timeline__time">{{ item.time }}</span>
            <span class="event-timeline__title">{{ item.title }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Clock } from 'lucide-vue-next'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { timeline } = invitationData
const { target, isVisible } = useScrollAnimation()
</script>

<style scoped>
.event-timeline {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
  text-align: center;
}

.event-timeline__eyebrow {
  text-align: center;
}

.event-timeline__list {
  list-style: none;
  margin: var(--space-lg) 0 0;
  padding: 0;
  position: relative;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.event-timeline__list::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: var(--color-border);
}

.event-timeline__item {
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  padding: 0.9rem 0 0.9rem 2rem;
}

.event-timeline__dot {
  position: absolute;
  left: 2px;
  top: 1.15rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 0 3px var(--color-bg);
}

.event-timeline__icon {
  display: none;
}

.event-timeline__time {
  font-family: var(--font-serif);
  font-weight: 500;
  color: var(--color-gold-light);
  font-size: 1.05rem;
  min-width: 52px;
}

.event-timeline__title {
  font-family: var(--font-sans);
  font-weight: 300;
  color: var(--color-white-secondary);
  font-size: 0.9rem;
}
</style>
