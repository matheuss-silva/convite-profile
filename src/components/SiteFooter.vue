<template>
  <footer
    ref="target"
    class="site-footer reveal-stagger"
    :class="{ 'is-visible': isVisible }"
  >
    <hr class="gf-divider" />
    <p class="site-footer__name">{{ graduate.name }}</p>

    <button type="button" class="site-footer__top" @click="scrollToTop">
      <ArrowUp :size="16" aria-hidden="true" />
      Voltar ao topo
    </button>

    <a
      class="site-footer__credit"
      href="https://www.instagram.com/__.matheus.s/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Desenvolvido por Matheus Silva
    </a>
  </footer>
</template>

<script setup>
import { ArrowUp } from "lucide-vue-next";
import { invitationData } from "../config/invitation.js";
import { useScrollAnimation } from "../composables/useScrollAnimation.js";

const { graduate, texts } = invitationData;
const { target, isVisible } = useScrollAnimation();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.site-footer {
  position: relative;
  z-index: 3;
  margin-top: -4rem;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0) 0,
    rgba(10, 10, 10, 0.5) 2rem,
    var(--color-bg-secondary) 4rem
  );
  padding: calc(var(--space-xl) + 2rem) var(--side-padding)
    calc(var(--space-lg) + var(--safe-bottom));
  text-align: center;
}

.site-footer__name {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-champagne);
}

.site-footer__year {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.85rem;
  color: var(--color-gray);
  margin-top: 0.2rem;
}

.site-footer__note {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--color-gray);
  margin-top: 1rem;
}

.site-footer__top {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: var(--space-md);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.65rem 1.3rem;
  color: var(--color-gold-light);
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}

.site-footer__top:hover {
  background: var(--color-gold);
  color: #050505;
}

.site-footer__credit {
  display: block;
  margin-top: var(--space-lg);
  color: var(--color-gray);
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.site-footer__credit:hover,
.site-footer__credit:focus-visible {
  color: var(--color-gold-light);
}
</style>
