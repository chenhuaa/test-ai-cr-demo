<template>
  <div class="wrapper">
    <div class="inner" :style="{'--quantity': data.length}">
      <div class="card" v-for="(val, key) in data" :key="key" :style="{'--index': key, '--color-card': val}">
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  '142, 249, 252', '142, 252, 204', '142, 252, 157', '215, 252, 142', '252, 252, 142',
  '252, 208, 142', '252, 142, 142', '252, 142, 239', '204, 142, 252', '142, 202, 252'
])
</script>
<style scoped>
  .wrapper {
    width: 600px;
    height: 400px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .inner {
    --w: 100px;
    --h: 150px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite; /* */
  }

  /* 用户明确要求减少动画 */
  @media (prefers-reduced-motion: reduce) {
    .inner {
      animation: none;
    }
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }
  
  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }
  
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #0000
      radial-gradient(
        circle,
        rgba(var(--color-card), 0.2) 0%,
        rgba(var(--color-card), 0.6) 80%,
        rgba(var(--color-card), 0.9) 100%
      );
  }
</style>
