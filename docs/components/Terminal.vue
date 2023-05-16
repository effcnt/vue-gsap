<template>
  <section class="terminal-wrapper">
    <div class="terminal">
      <span class="line"></span>
      <span style="user-select: none"> $ </span>
      <span class="content"> pnpm add gsap vue-gsap </span>
    </div>
  </section>
</template>

<style scoped>
.terminal-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4rem;
}
.terminal {
  width: 100%;
  height: 100%;
  background: #1e1e20;
  color: var(--vp-c-text-dark-1);
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}
</style>
