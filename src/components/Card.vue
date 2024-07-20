<script setup>
  const props = defineProps([
    "accent",
    "image",
    "student",
    "status",
    "summary",
    "testimonial"
  ])
</script>
<template>
  <article class="card flow rounded-xl p-8 border border-solid mx-auto w-screen mb-6">
    <div class="flex gap-8">
      <img :src=props.image class="inline rounded-full w-[28px] h-[28px]" />
      <div class="flex flex-1 flex-col">
        <h1 class="inline text-[0.8125rem] font-semi-bold tracking-tight">{{props.student}}</h1>
        <h2 class="inline text-[0.625rem] tracking-tight">{{props.status}}</h2>
      </div>
    </div>
    <p class="font-semibold text-[1.125rem] tracking-tight leading-tight pb-8">{{props.summary}}</p>
    <p class="testimonial text-[0.75rem] tracking-tight">{{props.testimonial}}</p>
  </article>
</template>
<style scoped>
  article {
    display: flex;
    flex-direction: column;
  }

  .card[data-accent="violet"] {
    background: var(--clr-primary-violet);
    color: var(--clr-neutral-gray);
  }

  .card[data-accent="grayblue"] {
    background: var(--clr-primary-grayblue);
    color: var(--clr-primary-white);
  }

  .card[data-accent="white"] {
    background: var(--clr-primary-white);
    color: var(--clr-primary-grayblue);
  }

  .card[data-accent="blackblue"] {
    background: var(--clr-primary-blackblue);
    color: var(--clr-primary-white);

    .testimonial {
      color: var(--clr-neutral-gray);
    }
  }
</style>
