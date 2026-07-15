<template>
  <section class="family-tribute gf-section" aria-label="Homenagem à família">
    <figure
      ref="target"
      class="reveal-scale family-tribute__figure gf-photo-frame"
      :class="{ 'is-visible': isVisible }"
    >
      <img
        :src="photos.family"
        :style="{ objectPosition: photoPositions.family || 'center' }"
        alt="A formanda reunida com toda a sua família"
        loading="lazy"
        class="family-tribute__image"
      />
    </figure>

    <div class="gf-container">
      <div
        ref="contentTarget"
        class="reveal-stagger family-tribute__content"
        :class="{ 'is-visible': isContentVisible }"
      >
        <p class="family-tribute__quote">
          Essa conquista é
          <span class="family-tribute__highlight">{{ texts.familyQuoteHighlight }}</span
          >.
        </p>
        <hr class="gf-divider" />
        <p class="family-tribute__text">{{ texts.familyMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { texts, photos, photoPositions } = invitationData
const { target, isVisible } = useScrollAnimation()
const { target: contentTarget, isVisible: isContentVisible } = useScrollAnimation()
</script>

<style scoped>
.family-tribute {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.family-tribute__figure {
  margin: 0 0 var(--space-lg);
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.family-tribute__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.family-tribute__content {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.family-tribute__quote {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(2rem, 8vw, 3rem);
  color: var(--color-champagne);
  line-height: 1.25;
}

.family-tribute__highlight {
  color: var(--color-gold);
}

.family-tribute__text {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-white-secondary);
}

@media (min-width: 640px) {
  .family-tribute__figure {
    aspect-ratio: 16 / 10;
    border-radius: 4px;
  }
}
</style>
