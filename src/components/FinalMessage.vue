<template>
  <section class="final-message" aria-label="Mensagem final">
    <img
      :src="photos.final"
      :style="{ objectPosition: photoPositions.final || 'center' }"
      alt="Fotografia final da formanda com a família"
      loading="lazy"
      class="final-message__image"
    />
    <div class="final-message__gradient" aria-hidden="true"></div>

    <div ref="target" class="reveal-stagger final-message__content" :class="{ 'is-visible': isVisible }">
      <p class="final-message__quote">{{ texts.finalQuote }}</p>
      <p class="final-message__text">{{ texts.finalMessage }}</p>

      <hr class="gf-divider" />

      <h2 class="final-message__name">{{ graduate.name }}</h2>
      <p class="final-message__course">{{ graduate.course }}</p>

      <p class="final-message__signature gf-script">{{ texts.finalSignatureQuote }}</p>
    </div>
  </section>
</template>

<script setup>
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { texts, graduate, photos, photoPositions } = invitationData
const { target, isVisible } = useScrollAnimation()
</script>

<style scoped>
.final-message {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: #000;
}

.final-message__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.final-message__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 5, 5, 0.96) 0%,
    rgba(0, 0, 0, 0.92) 5%,
    rgba(0, 0, 0, 0.81) 11%,
    rgba(0, 0, 0, 0.68) 17%,
    rgba(0, 0, 0, 0.53) 22%,
    rgba(0, 0, 0, 0.41) 28%,
    rgba(0, 0, 0, 0.32) 33%,
    rgba(0, 0, 0, 0.3) 36%,
    rgba(0, 0, 0, 0.3) 64%,
    rgba(0, 0, 0, 0.34) 69%,
    rgba(0, 0, 0, 0.44) 75%,
    rgba(0, 0, 0, 0.56) 81%,
    rgba(0, 0, 0, 0.7) 86%,
    rgba(0, 0, 0, 0.82) 92%,
    rgba(0, 0, 0, 0.9) 97%,
    rgba(5, 5, 5, 0.92) 100%
  );
  pointer-events: none;
}

.final-message__content {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 0 var(--side-padding) calc(3.5rem + var(--safe-bottom));
}

.final-message__quote {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.6rem, 6.5vw, 2.3rem);
  color: var(--color-champagne);
  margin-bottom: 0.75rem;
}

.final-message__text {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--color-white-secondary);
  max-width: 440px;
  margin: 0 auto;
}

.final-message__name {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(1.8rem, 7vw, 2.4rem);
  color: var(--color-white);
}

.final-message__course {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.85rem;
  color: var(--color-white-secondary);
  margin-top: 0.3rem;
}

.final-message__signature {
  margin-top: 1.5rem;
  font-size: 1.6rem;
  color: var(--color-gold-light);
}
</style>
