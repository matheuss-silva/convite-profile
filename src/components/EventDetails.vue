<template>
  <section class="event-details gf-section" aria-label="Informações da formatura">
    <div class="gf-container">
      <div ref="target" class="reveal-stagger event-details__inner" :class="{ 'is-visible': isVisible }">
        <p class="gf-eyebrow event-details__eyebrow">{{ event.title }}</p>
        <hr class="gf-divider" />

        <h2 class="event-details__name">{{ graduate.name }}</h2>
        <p class="event-details__course">{{ graduate.course }}</p>

        <p class="event-details__date">{{ formattedDate }}</p>
        <p class="event-details__weekday">{{ event.weekday }}, às {{ formattedTime }}</p>

        <hr class="gf-divider" />

        <p class="event-details__venue">{{ event.venue }}</p>
        <p v-if="event.address" class="event-details__address">{{ event.address }}</p>
        <p class="event-details__city">{{ event.city }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { graduate, event } = invitationData
const { target, isVisible } = useScrollAnimation()

const formattedDate = computed(() => {
  const [year, month, day] = event.date.split('-')
  return `${day}.${month}.${year}`
})

const formattedTime = computed(() => `${event.startTime.replace(':', 'h')}`)
</script>

<style scoped>
.event-details {
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-xl);
  text-align: center;
}

.event-details__eyebrow {
  text-align: center;
}

.event-details__name {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 7vw, 2.6rem);
  color: var(--color-white);
  margin-top: 1.5rem;
}

.event-details__course {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.95rem;
  color: var(--color-white-secondary);
  margin-top: 0.4rem;
}

.event-details__date {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(2.4rem, 11vw, 3.6rem);
  color: var(--color-gold-light);
  margin-top: var(--space-md);
  letter-spacing: 0.02em;
}

.event-details__weekday {
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: var(--color-champagne);
  margin-top: 0.5rem;
}

.event-details__venue {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--color-white);
}

.event-details__address,
.event-details__city {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.9rem;
  color: var(--color-white-secondary);
  margin-top: 0.3rem;
}
</style>
