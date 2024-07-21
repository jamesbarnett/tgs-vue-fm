<script setup>
  const props = defineProps([
    "accent",
    "image",
    "gridarea",
    "student",
    "status",
    "summary",
    "testimonial"
  ])
</script>
<template>
  <article class="card flow rounded-xl p-8 mx-auto w-full mb-6 md:mb-0">
    <div class="flex gap-8">
      <img :src=props.image class="inline rounded-full w-[28px] h-[28px]" />
      <div class="flex flex-1 flex-col">
        <h1 class="inline text-[0.8125rem] font-medium">{{props.student}}</h1>
        <h2 class="inline text-[0.6875rem]">{{props.status}}</h2>
      </div>
    </div>
    <p class="quote relative z-[2] font-semibold text-[1.25rem] leading-tight pb-8 md:pb-0">{{props.summary}}</p>
    <p class="testimonial relative z-[2] text-[0.8125rem] font-medium">{{props.testimonial}}</p>
  </article>
</template>
<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
  }

  .card[data-accent="violet"]::before {
    background-image: url("/images/bg-pattern-quotation.svg");
    content: "";
    position: absolute;
    top: 0;
    right: 7%;
    width: 102px;
    height: 104px;
    z-index: -1;
  }

  @media (min-width: 768px) {
    .card[data-gridarea="a"] {
      grid-area: a;
    }
    .card[data-gridarea="b"] {
      grid-area: b;
    }
    .card[data-gridarea="c"] {
      grid-area: c;
    }
    .card[data-gridarea="d"] {
      grid-area: d;
    }
    .card[data-gridarea="e"] {
      grid-area: e;
    }
    .card[data-accent="violet"]::before {
      background-image: url("/images/bg-pattern-quotation.svg");
      content: "";
      position: absolute;
      top: 0;
      right: 15%;
      width: 102px;
      height: 104px;
      z-index: -1;
    }
  }

  .card[data-accent="violet"] {
    background: var(--clr-primary-violet);
    color: var(--clr-primary-white);
    h2 {
      color: var(--clr-neutral-gray);
    }
    .testimonial {
      color: var(--clr-neutral-gray);
    }
  }

  .card[data-accent="grayblue"] {
    background: var(--clr-primary-grayblue);
    color: var(--clr-neutral-grayblue);
    h2 {
      color: var(--clr-neutral-gray);
    }
    .testimonial {
      color: var(--clr-neutral-gray);
    }
  }

  .card[data-accent="white"] {
    background: var(--clr-primary-white);
    color: var(--clr-primary-grayblue);

    h2 {
      color: var(--clr-neutral-gray);
    }
    .testimonial {
      color: var(--clr-neutral-gray);
    }
  }

  .card[data-accent="blackblue"] {
    background: var(--clr-primary-blackblue);
    color: var(--clr-primary-white);

    h2 {
      color: var(--clr-neutral-gray);
    }
    .testimonial {
      color: var(--clr-neutral-gray);
    }
  }
</style>
