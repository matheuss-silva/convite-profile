<template>
  <section class="son-tribute gf-section" aria-label="Homenagem ao filho">
    <figure
      ref="target"
      class="reveal-scale son-tribute__figure gf-photo-frame"
      :class="{ 'is-visible': isVisible }"
    >
      <img
        :src="photos.son"
        :style="{ objectPosition: photoPositions.son || 'center' }"
        alt="A formanda segurando seu filho no colo"
        loading="lazy"
        class="son-tribute__image"
      />
    </figure>

    <div class="gf-container">
      <div
        ref="contentTarget"
        class="reveal-stagger son-tribute__content"
        :class="{ 'is-visible': isContentVisible }"
      >
        <hr class="gf-divider" />
        <h2 class="son-tribute__title">{{ texts.sonTitle }}</h2>

        <p class="son-tribute__text">
          <span
            v-for="(fragment, index) in fragments"
            :key="index"
            :class="{ 'son-tribute__highlight': fragment.highlight }"
            >{{ fragment.text }}</span
          >
        </p>

        <p class="son-tribute__signature gf-script">{{ texts.sonSignature }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { buildHighlightFragments } from '../utils/highlightText.js'

const { texts, photos, photoPositions } = invitationData
const { target, isVisible } = useScrollAnimation()
const { target: contentTarget, isVisible: isContentVisible } = useScrollAnimation()

const fragments = computed(() =>
  buildHighlightFragments(texts.sonMessage, texts.sonHighlights)
)
</script>

<style scoped>
.son-tribute {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.son-tribute__figure {
  position: relative;
  margin: 0 0 var(--space-lg);
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.son-tribute__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.son-tribute__content {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.son-tribute__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.son-tribute__text {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: clamp(1rem, 4vw, 1.1rem);
  line-height: 1.85;
  color: var(--color-white-secondary);
}

.son-tribute__highlight {
  color: var(--color-gold-light);
  font-weight: 500;
}

.son-tribute__signature {
  margin-top: var(--space-md);
  font-size: 1.7rem;
  color: var(--color-gold-light);
}

@media (min-width: 640px) {
  .son-tribute__figure {
    aspect-ratio: 4 / 5;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
  }
}
</style>
