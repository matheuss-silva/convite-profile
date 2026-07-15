<template>
  <section class="action-buttons gf-section" aria-label="Ações do convite">
    <div class="gf-container">
      <div ref="target" class="reveal action-buttons__inner" :class="{ 'is-visible': isVisible }">
        <p class="gf-eyebrow action-buttons__eyebrow">{{ texts.buttonsTitle }}</p>
        <hr class="gf-divider" />

        <div class="action-buttons__list">
          <BaseButton tag="a" :href="event.mapsUrl" :icon="MapPin">
            Localização
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin } from 'lucide-vue-next'
import BaseButton from './BaseButton.vue'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const { texts, event } = invitationData
const { target, isVisible } = useScrollAnimation()
</script>

<style scoped>
.action-buttons {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.action-buttons__eyebrow {
  text-align: center;
}

.action-buttons__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: var(--space-lg);
  align-items: center;
}
</style>
