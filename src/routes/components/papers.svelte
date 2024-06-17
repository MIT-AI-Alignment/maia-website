<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import Paper from './paper.svelte';
  import '@splidejs/svelte-splide/css/core';
  import IconArrowRightBold from '~icons/ph/arrow-right-bold';
  import IconArrowLeftBold from '~icons/ph/arrow-left-bold';

  let innerWidth = 0
  let innerHeight = 0
  
  $: condition = innerWidth < 768
</script>

<svelte:window bind:innerWidth bind:innerHeight />


<Splide aria-label="Research images/papers" options={{ perPage: condition ? 3 : 5, gap: '1rem'}} hasTrack={ false }  on:arrowsUpdated={ e => { console.log( e )}} class="relative">
    <SplideTrack>
  <SplideSlide>
    <Paper
      altText="Research Paper 1"
      imgSrc="../../images/papers/paper1.png"
      tags={[{title: "NeurIPS 2022", color: "bg-blue-200 dark:bg-blue-800"}, {title: "Adversarial Attacks", color: "bg-red-200 dark:bg-red-800"}]}
      title="Robust Feature-Level Adversaries are Interpretability Tools"
      authors={["Stephen Casper"]}
      link="https://arxiv.org/abs/2110.03605"
    />
  </SplideSlide>
  <SplideSlide>
    <Paper
      altText="Research Paper 2"
      imgSrc="../../images/papers/paper2.png"
      tags={[{title: "RLHF", color: "bg-green-200 dark:bg-green-800"}]}
      title="Open Problems and Fundamental Limitations of RLHF"
      authors={["Stephen Casper", "Tony Wang", "Eric J. Michaud"]}
      link="https://arxiv.org/abs/2307.15217"
    />
  </SplideSlide>
  <SplideSlide>
    <Paper
      altText="Research Paper 3"
      imgSrc="../../images/papers/paper3.png"
      tags={[{title: "Adversarial Attacks", color: "bg-red-200 dark:bg-red-800"}]}
      title="Adversarial Policies Beat Superhuman Go AIs"
      authors={["Tony Wang"]}
      link="https://arxiv.org/pdf/2211.00241.pdf"
    />
  </SplideSlide>
  <SplideSlide>
    <Paper
      altText="Research Paper 4"
      imgSrc="../../images/papers/paper4.png"
      tags={[{title: "NeurIPS 2023", color: "bg-blue-200 dark:bg-blue-800"}, {title: "Scaling Laws", color: "bg-purple-200 dark:bg-purple-800"}]}
      title="The Quantization Model of Neural Scaling"
      authors={["Eric J. Michaud", "Uzay Girit"]}
      link="https://arxiv.org/abs/2303.13506"
    />
  </SplideSlide>
  <SplideSlide>
    <Paper
      altText="Research Paper 5"
      imgSrc="../../images/papers/paper5.png"
      tags={[{title: "NeurIPS 2023", color: "bg-blue-200 dark:bg-blue-800"}, {title: "Mech Interp", color: "bg-orange-200 dark:bg-orange-800"}]}
      title="Forbidden Facts: An Investigation of Competing Objectives in Llama-2"
      authors={["Tony Wang", "Kaivu Hariharan"]}
      link="https://arxiv.org/pdf/2312.08793.pdf"
    />
  </SplideSlide>
  <SplideSlide>
    <Paper
      altText="Research Paper 6"
      imgSrc="../../images/papers/paper6.png"
      tags={[{title: "NeurIPS 2023", color: "bg-blue-200 dark:bg-blue-800"}, {title: "Adversarial Attacks", color: "bg-red-200 dark:bg-red-800"}]}
      title="Red Teaming Deep Neural Networks with Feature Synthesis Tools"
      authors={["Stephen Casper", "Kaivu Hariharan"]}
      link="https://arxiv.org/pdf/2302.10894.pdf"
    />
  </SplideSlide>
  <SplideSlide>
    <Paper
      altText="Research Paper 7"
      imgSrc="../../images/papers/paper7.png"
      tags={[{title: "OpenAI", color: "bg-rose-200 dark:bg-rose-800"}, {title: "Governance", color: "bg-sky-200 dark:bg-sky-800"}]}
      title="Building an early warning system for LLM-aided biological threat creation"
      authors={["Neil Choudhury"]}
      link="https://openai.com/research/building-an-early-warning-system-for-llm-aided-biological-threat-creation"
    />
  </SplideSlide>
</SplideTrack>
<div class="splide__arrows invisible md:visible">
    <button class="splide__arrow splide__arrow--prev transition-opacity disabled:opacity-0 absolute left-[-50px] top-1/3 bg-slate-100 h-8 w-8 rounded-full flex items-center justify-center border border-solid border-black"><IconArrowLeftBold/></button>
    <button class="splide__arrow splide__arrow--next transition-opacity disabled:opacity-0 absolute right-[-50px] top-1/3  bg-slate-100 h-8 w-8 rounded-full flex items-center justify-center border border-solid border-black"><IconArrowRightBold/></button>
  </div>
</Splide>

