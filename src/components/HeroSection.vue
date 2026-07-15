<template>
  <section class="hero" aria-label="Abertura do convite">
    <img
      :src="photos.cover"
      :style="{ objectPosition: photoPositions.cover || 'center' }"
      alt="Retrato da formanda em traje de formatura"
      class="hero__image"
      fetchpriority="high"
    />
    <div class="hero__gradient hero__gradient--top" aria-hidden="true"></div>
    <div class="hero__gradient hero__gradient--bottom" aria-hidden="true"></div>

    <div class="hero__overlay">
      <div class="hero__content">
        <p class="hero__eyebrow gf-hero-in-1">Convite de Formatura</p>
        <h1 class="hero__name gf-hero-in-2">{{ graduate.name }}</h1>
        <p class="hero__course gf-hero-in-3">{{ graduate.course }}</p>
      </div>

      <div class="hero__scroll gf-hero-in-4">
        <p class="hero__scroll-text">{{ texts.slideHint }}</p>
        <ChevronDown class="gf-scroll-cue" :size="22" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { invitationData } from '../config/invitation.js'

const { graduate, texts, photos, photoPositions } = invitationData
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background: #000;
}

.hero__image {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__gradient {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
}

.hero__gradient--top {
  top: 0;
  height: 35%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), transparent);
}

.hero__gradient--bottom {
  bottom: 0;
  height: 55%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.92) 0%,
    rgba(0, 0, 0, 0.87) 15%,
    rgba(0, 0, 0, 0.72) 31%,
    rgba(0, 0, 0, 0.53) 46%,
    rgba(0, 0, 0, 0.32) 62%,
    rgba(0, 0, 0, 0.15) 77%,
    rgba(0, 0, 0, 0.03) 92%,
    transparent 100%
  );
}

.hero__overlay {
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: calc(1.5rem + var(--safe-bottom));
}

.hero__content {
  width: 100%;
  text-align: center;
  padding: 0 var(--side-padding);
}

.hero__eyebrow {
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--color-gold-light);
  margin-bottom: 0.9rem;
}

.hero__name {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(2.4rem, 9vw, 4.2rem);
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: 0.6rem;
}

.hero__course {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: clamp(0.9rem, 3vw, 1.05rem);
  color: var(--color-white-secondary);
}

.hero__scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 var(--side-padding);
  text-align: center;
}

.hero__scroll-text {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-white-secondary);
  opacity: 0.85;
  line-height: 1.5;
}

.hero__scroll :deep(svg) {
  color: var(--color-gold-light);
}
</style>
