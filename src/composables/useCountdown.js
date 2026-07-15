import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export function useCountdown(targetDateTime) {
  const now = ref(new Date())
  let timerId = null

  const target = new Date(targetDateTime)

  onMounted(() => {
    timerId = setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onBeforeUnmount(() => {
    if (timerId) clearInterval(timerId)
  })

  const diff = computed(() => Math.max(0, target.getTime() - now.value.getTime()))

  const isPast = computed(() => diff.value <= 0)

  const days = computed(() => Math.floor(diff.value / (1000 * 60 * 60 * 24)))
  const hours = computed(() =>
    Math.floor((diff.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  )
  const minutes = computed(() =>
    Math.floor((diff.value % (1000 * 60 * 60)) / (1000 * 60))
  )
  const seconds = computed(() => Math.floor((diff.value % (1000 * 60)) / 1000))

  const pad = (n) => String(n).padStart(2, '0')

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast,
    padded: computed(() => ({
      days: pad(days.value),
      hours: pad(hours.value),
      minutes: pad(minutes.value),
      seconds: pad(seconds.value)
    }))
  }
}
