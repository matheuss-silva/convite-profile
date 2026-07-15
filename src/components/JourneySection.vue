<template>
  <section class="journey gf-section" aria-label="Trajetória">
    <div class="gf-container">
      <div ref="target" class="reveal" :class="{ 'is-visible': isVisible }">
        <p class="gf-eyebrow journey__eyebrow">Trajetória</p>
        <h2 class="journey__title">{{ texts.journeyTitle }}</h2>
        <hr class="gf-divider" />
        <p class="journey__text">{{ texts.journeyText }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { texts } = invitationData
const { target, isVisible } = useScrollAnimation()
</script>

<style scoped>
.journey {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
  text-align: center;
}

.journey__eyebrow {
  text-align: center;
}

.journey__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.7rem, 6vw, 2.4rem);
  color: var(--color-white);
  margin-top: 0.75rem;
}

.journey__text {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-white-secondary);
  max-width: 480px;
  margin: 0 auto;
}
</style>
