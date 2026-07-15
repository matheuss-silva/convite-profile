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

      <div class="final-message__confirmation">
        <BaseButton
          tag="a"
          :href="confirmationUrl"
          :icon="MessageCircle"
          aria-label="Confirmar presença pelo WhatsApp"
        >
          {{ texts.confirmationButton }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import BaseButton from './BaseButton.vue'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { texts, graduate, event, photos, photoPositions } = invitationData
const { target, isVisible } = useScrollAnimation()

const confirmationUrl = computed(
  () => `https://wa.me/${event.whatsapp}?text=${encodeURIComponent(texts.confirmationMessage)}`
)
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
    rgba(0, 0, 0, 0.4) 75%,
    rgba(0, 0, 0, 0.48) 81%,
    rgba(0, 0, 0, 0.58) 86%,
    rgba(0, 0, 0, 0.7) 92%,
    rgba(0, 0, 0, 0.78) 97%,
    rgba(5, 5, 5, 0.84) 100%
  );
  pointer-events: none;
}

.final-message__content {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 0 var(--side-padding) calc(1.5rem + var(--safe-bottom));
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

.final-message__confirmation {
  width: min(100%, 300px);
  margin: 1.75rem auto 0;
}

.final-message__confirmation :deep(.base-btn) {
  animation: confirmation-glow 3.2s ease-in-out infinite;
}

.final-message__confirmation :deep(.base-btn__icon) {
  animation: confirmation-icon 3.2s ease-in-out infinite;
  transform-origin: center;
}

@keyframes confirmation-glow {
  0%,
  55%,
  100% {
    border-color: var(--color-border);
    box-shadow: 0 0 0 0 rgba(223, 197, 142, 0);
  }
  68% {
    border-color: var(--color-gold-light);
    box-shadow: 0 0 0 0 rgba(223, 197, 142, 0.38);
  }
  86% {
    border-color: var(--color-gold-light);
    box-shadow:
      0 0 0 11px rgba(223, 197, 142, 0),
      0 0 24px rgba(197, 164, 109, 0.2);
  }
}

@keyframes confirmation-icon {
  0%,
  65%,
  92%,
  100% {
    transform: translateY(0) rotate(0);
  }
  72% {
    transform: translateY(-2px) rotate(-7deg) scale(1.08);
  }
  80% {
    transform: translateY(0) rotate(6deg) scale(1.08);
  }
  87% {
    transform: translateY(-1px) rotate(-3deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .final-message__confirmation :deep(.base-btn),
  .final-message__confirmation :deep(.base-btn__icon) {
    animation: none;
  }
}
</style>
