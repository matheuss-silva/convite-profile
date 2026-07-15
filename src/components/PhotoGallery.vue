<template>
  <section class="gallery gf-section" aria-label="Galeria de fotografias">
    <div class="gf-container">
      <div ref="target" class="reveal" :class="{ 'is-visible': isVisible }">
        <p class="gf-eyebrow gallery__eyebrow">Galeria</p>
        <hr class="gf-divider" />
      </div>
    </div>

    <div
      ref="trackTarget"
      class="gallery__track reveal-grid"
      :class="{ 'is-visible': isTrackVisible }"
      role="list"
    >
      <button
        v-for="(photo, index) in photos"
        :key="photo"
        type="button"
        role="listitem"
        class="gallery__item gf-photo-frame gf-photo-frame--subtle"
        :aria-label="`Ampliar fotografia ${index + 1}`"
        @click="openLightbox(index)"
      >
        <img :src="photo" :alt="`Fotografia ${index + 1} da formanda`" loading="lazy" />
      </button>
    </div>

    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="activeIndex !== null"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da fotografia"
          @mousedown.self="closeLightbox"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <button type="button" class="lightbox__close" aria-label="Fechar" @click="closeLightbox">
            <X :size="22" aria-hidden="true" />
          </button>

          <button
            type="button"
            class="lightbox__nav lightbox__nav--prev"
            aria-label="Fotografia anterior"
            @click="showPrev"
          >
            <ChevronLeft :size="26" aria-hidden="true" />
          </button>

          <img :src="photos[activeIndex]" :alt="`Fotografia ${activeIndex + 1} ampliada`" class="lightbox__image" />

          <button
            type="button"
            class="lightbox__nav lightbox__nav--next"
            aria-label="Próxima fotografia"
            @click="showNext"
          >
            <ChevronRight :size="26" aria-hidden="true" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const photos = invitationData.photos.gallery
const { target, isVisible } = useScrollAnimation()
const { target: trackTarget, isVisible: isTrackVisible } = useScrollAnimation({ threshold: 0.1 })

const activeIndex = ref(null)
let touchStartX = 0

const openLightbox = (index) => {
  activeIndex.value = index
}

const closeLightbox = () => {
  activeIndex.value = null
}

const showPrev = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length
}

const showNext = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % photos.length
}

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].clientX
}

const handleTouchEnd = (e) => {
  const delta = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(delta) < 40) return
  if (delta > 0) showPrev()
  else showNext()
}

const handleKeydown = (e) => {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') showPrev()
  if (e.key === 'ArrowRight') showNext()
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }
})

watch(activeIndex, (value) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = value !== null ? 'hidden' : ''
})
</script>

<style scoped>
.gallery {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.gallery__eyebrow {
  text-align: center;
}

.gallery__track {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: var(--space-lg) var(--side-padding) 0.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.gallery__track::-webkit-scrollbar {
  height: 4px;
}

.gallery__item {
  flex: 0 0 78%;
  scroll-snap-align: center;
  aspect-ratio: 3 / 4;
  border: none;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  background: var(--color-card);
  box-shadow: 0 12px 30px var(--color-shadow);
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__image {
  max-width: 92vw;
  max-height: 86vh;
  object-fit: contain;
}

.lightbox__close {
  position: absolute;
  top: calc(1rem + var(--safe-top));
  right: 1rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-champagne);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-champagne);
}

.lightbox__nav--prev {
  left: 0.75rem;
}

.lightbox__nav--next {
  right: 0.75rem;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity var(--transition-fast);
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (min-width: 720px) {
  .gallery__track {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: visible;
    padding: var(--space-lg) var(--side-padding) 0;
  }

  .gallery__item {
    flex: none;
  }

  .gallery__item:nth-child(4n + 1) {
    grid-row: span 2;
    aspect-ratio: 3 / 5;
  }
}
</style>
