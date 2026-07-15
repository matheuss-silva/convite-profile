<template>
  <section class="main-story gf-section" aria-label="Texto central do convite">
    <div class="gf-container">
      <div ref="target" class="reveal main-story__inner" :class="{ 'is-visible': isVisible }">
        <hr class="gf-divider" />
        <p class="main-story__text">
          <span
            v-for="(fragment, index) in fragments"
            :key="index"
            :class="{ 'main-story__highlight': fragment.highlight }"
            >{{ fragment.text }}</span
          >
        </p>
        <hr class="gf-divider" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { buildHighlightFragments } from '../utils/highlightText.js'

const { texts } = invitationData
const { target, isVisible } = useScrollAnimation()

const fragments = computed(() =>
  buildHighlightFragments(texts.centralMessage, texts.centralHighlights)
)
</script>

<style scoped>
.main-story {
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
}

.main-story__inner {
  max-width: var(--reading-max-width);
  margin: 0 auto;
  text-align: center;
}

.main-story__text {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(1.35rem, 5vw, 2.05rem);
  line-height: 1.65;
  color: var(--color-white-secondary);
}

.main-story__highlight {
  color: var(--color-gold-light);
  font-style: italic;
}
</style>
