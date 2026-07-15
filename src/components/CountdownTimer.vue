<template>
  <section class="countdown gf-section" aria-label="Contagem regressiva">
    <div class="gf-container">
      <div ref="target" class="reveal-stagger countdown__inner" :class="{ 'is-visible': isVisible }">
        <h2 class="countdown__title">{{ isPast ? texts.countdownTitleToday : texts.countdownTitle }}</h2>

        <div v-if="!isPast" class="countdown__grid" role="timer" aria-live="polite">
          <div class="countdown__unit">
            <span class="countdown__number">{{ padded.days }}</span>
            <span class="countdown__label">Dias</span>
          </div>
          <span class="countdown__sep" aria-hidden="true">·</span>
          <div class="countdown__unit">
            <span class="countdown__number">{{ padded.hours }}</span>
            <span class="countdown__label">Horas</span>
          </div>
          <span class="countdown__sep" aria-hidden="true">·</span>
          <div class="countdown__unit">
            <span class="countdown__number">{{ padded.minutes }}</span>
            <span class="countdown__label">Minutos</span>
          </div>
          <span class="countdown__sep" aria-hidden="true">·</span>
          <div class="countdown__unit">
            <span class="countdown__number">{{ padded.seconds }}</span>
            <span class="countdown__label">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { useCountdown } from '../composables/useCountdown.js'

const { texts, event } = invitationData
const { target, isVisible } = useScrollAnimation()
const { padded, isPast } = useCountdown(`${event.date}T${event.startTime}:00`)
</script>

<style scoped>
.countdown {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
  text-align: center;
}

.countdown__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-style: italic;
  font-size: clamp(1.4rem, 5.5vw, 1.9rem);
  color: var(--color-champagne);
  margin-bottom: var(--space-lg);
}

.countdown__grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: nowrap;
}

.countdown__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 56px;
}

.countdown__number {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 8vw, 2.6rem);
  color: var(--color-white);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.countdown__label {
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.6rem;
  color: var(--color-gray);
  margin-top: 0.5rem;
}

.countdown__sep {
  color: var(--color-gold);
  font-size: 1.5rem;
  opacity: 0.7;
  padding-bottom: 1rem;
}

@media (min-width: 480px) {
  .countdown__unit {
    min-width: 72px;
  }
}
</style>
