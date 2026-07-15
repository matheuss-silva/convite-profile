<template>
  <section class="parents-tribute gf-section" aria-label="Homenagem aos pais">
    <figure
      ref="target"
      class="reveal-scale parents-tribute__figure gf-photo-frame"
      :class="{ 'is-visible': isVisible }"
    >
      <img
        :src="photos.parents"
        :style="{ objectPosition: photoPositions.parents || 'center' }"
        alt="A formanda ao lado de seu pai e sua mãe"
        loading="lazy"
        class="parents-tribute__image"
      />
    </figure>

    <div class="gf-container">
      <div
        ref="contentTarget"
        class="reveal-stagger parents-tribute__content"
        :class="{ 'is-visible': isContentVisible }"
      >
        <hr class="gf-divider" />
        <h2 class="parents-tribute__title">{{ texts.parentsTitle }}</h2>

        <p class="parents-tribute__text">{{ texts.parentsMessage }}</p>
        <p class="parents-tribute__text">{{ texts.parentsSecondaryMessage }}</p>

        <p class="parents-tribute__signature gf-script">{{ texts.parentsSignature }}</p>
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
.parents-tribute {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.parents-tribute__figure {
  margin: 0 0 var(--space-lg);
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.parents-tribute__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.parents-tribute__content {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.parents-tribute__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.parents-tribute__text {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(1.1rem, 4vw, 1.3rem);
  line-height: 1.75;
  color: var(--color-white-secondary);
  margin-bottom: 1.25rem;
}

.parents-tribute__signature {
  margin-top: var(--space-md);
  font-size: 1.7rem;
  color: var(--color-gold-light);
}

@media (min-width: 640px) {
  .parents-tribute__figure {
    aspect-ratio: 16 / 10;
    border-radius: 4px;
  }
}
</style>
