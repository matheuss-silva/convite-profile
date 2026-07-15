<template>
  <section class="opening-quote gf-section" aria-label="Frase de abertura">
    <div class="gf-container">
      <div ref="target" class="reveal" :class="{ 'is-visible': isVisible }">
        <hr class="gf-divider" />
        <p class="opening-quote__text">
          <span
            v-for="(fragment, index) in fragments"
            :key="index"
            :class="{ 'opening-quote__highlight': fragment.highlight }"
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
  buildHighlightFragments(texts.openingQuote, texts.openingQuoteHighlights)
)
</script>

<style scoped>
.opening-quote {
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
}

.opening-quote__text {
  font-family: var(--font-serif);
  font-weight: 400;
  font-style: italic;
  font-size: clamp(1.5rem, 5.5vw, 2.2rem);
  line-height: 1.5;
  color: var(--color-champagne);
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}

.opening-quote__highlight {
  color: var(--color-gold-light);
  font-style: normal;
}
</style>
