<template>
  <section class="transition-photo gf-section" aria-label="Fotografia de transição">
    <figure ref="target" class="reveal transition-photo__figure" :class="{ 'is-visible': isVisible }">
      <img
        :src="photos.transition"
        :style="{ objectPosition: photoPositions.transition || 'center' }"
        alt="Retrato da formanda antes das informações da cerimônia"
        loading="lazy"
        class="transition-photo__image"
      />
      <div class="transition-photo__gradient transition-photo__gradient--top" aria-hidden="true"></div>
      <div class="transition-photo__gradient transition-photo__gradient--bottom" aria-hidden="true"></div>
      <p class="transition-photo__caption gf-script">{{ texts.transitionText }}</p>
    </figure>
  </section>
</template>

<script setup>
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { texts, photos, photoPositions } = invitationData
const { target, isVisible } = useScrollAnimation()
</script>

<style scoped>
.transition-photo {
  padding-top: var(--space-lg);
  padding-bottom: var(--space-lg);
}

.transition-photo__figure {
  position: relative;
  margin: 0;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.transition-photo__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.transition-photo__gradient {
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
}

.transition-photo__gradient--top {
  top: 0;
  height: 26%;
  background: linear-gradient(
    to bottom,
    rgba(5, 5, 5, 1) 0%,
    rgba(5, 5, 5, 0.94) 15%,
    rgba(5, 5, 5, 0.78) 31%,
    rgba(5, 5, 5, 0.58) 46%,
    rgba(5, 5, 5, 0.35) 62%,
    rgba(5, 5, 5, 0.16) 77%,
    rgba(5, 5, 5, 0.03) 92%,
    transparent 100%
  );
}

.transition-photo__gradient--bottom {
  bottom: 0;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(5, 5, 5, 1) 0%,
    rgba(5, 5, 5, 0.94) 15%,
    rgba(5, 5, 5, 0.78) 31%,
    rgba(5, 5, 5, 0.58) 46%,
    rgba(5, 5, 5, 0.35) 62%,
    rgba(5, 5, 5, 0.16) 77%,
    rgba(5, 5, 5, 0.03) 92%,
    transparent 100%
  );
}

.transition-photo__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1.75rem;
  z-index: 2;
  text-align: center;
  font-size: 2.1rem;
  color: var(--color-gold-light);
}
</style>
