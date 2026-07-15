import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useScrollAnimation(options = {}) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!target.value) return

    if (typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px'
      }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { target, isVisible }
}
