<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import Button from '../../../components/Button.svelte';

	const deckUrl = '/merch/maia-playing-cards-v0.pdf';
	const initialCardCount = 6;
	let showAllCards = false;
	const cardTitles = [
		'MAIA card back',
		'Linear Probes',
		'RLHF',
		'Debate',
		'Red Teaming',
		'Activation Patching',
		'Constitutional AI',
		'Activation Steering',
		'Sparse Autoencoders',
		'Untrusted Monitoring',
		'Deliberative Alignment',
		'Attribution Graphs',
		'Chain-of-Thought Monitoring',
		'Natural Language Autoencoders',
		'Google DeepMind',
		'OpenAI',
		'Anthropic',
		'Redwood Research',
		'Alignment Research Center',
		'MATS',
		'Epoch AI',
		'Center for AI Safety',
		'UK AI Security Institute',
		'METR',
		'Apollo Research',
		'Constellation',
		'AI Futures Project',
		'AlexNet',
		'AlphaGo',
		'Attention Is All You Need',
		'GPT-2',
		'Scaling Laws',
		'ChatGPT',
		'Reasoning Models',
		'DeepSeek-R1',
		'The MechaHitler Incident',
		'OpenClaw',
		'Mythos & Glasswing',
		'The Hugging Face Breach',
		'Recursive Self-Improvement',
		'Power-Seeking',
		'Reward Hacking',
		'Scheming',
		'Goal Misgeneralization',
		'Prompt Injection',
		'Sycophancy',
		'Unfaithful Chain of Thought',
		'Jailbreaks',
		'Self-Exfiltration & Sabotage',
		'Alignment Faking',
		'Gradual Disempowerment',
		'Emergent Misalignment',
		'Situational Awareness',
		'The Shoggoth',
		'The Paperclip Maximizer',
		'MAIA: MIT AI Alignment',
	];
	const openingCardImages = ['playing-cards-back.png', 'playing-cards-linear-probes.png', 'playing-cards-rlhf.png'];
	const cards = cardTitles.map((title, index) => ({
		image: index < openingCardImages.length ? openingCardImages[index] : `playing-cards-page-${String(index + 1).padStart(2, '0')}.png`,
		caption: title,
		alt: index === 0 ? 'Purple MAIA logo on the back of a playing card' : index === cardTitles.length - 1 ? 'MAIA introduction and guide to the four suits' : `${title} AI safety playing card`
	}));
	const designs = [
		{ image: 'cpw-shirt-spring-2026.png', title: 'CPW ’26 T-shirt', label: 'Spring 2026 · Design artwork', alt: 'Purple character with a CPW 26 MAIA laptop and a playful wall of words' },
		{ image: 'pixel-shoggoth-shirt-design.png', title: 'Pixel shoggoth T-shirt', label: 'Fall 2026 · Design artwork', alt: 'Purple pixel-art shoggoth with MIT AI Alignment lettering on a black background' },
		{ image: 'beaver-shoggoth-shirt-design.png', title: 'Beaver and shoggoth T-shirt', label: 'Fall 2026 · Design artwork', alt: 'A purple MIT beaver riding a shoggoth above MIT AI Alignment lettering' },
		{ image: 'cityscape-sticker-design.png', title: 'Cityscape sticker', label: 'Fall 2026 · Design artwork', alt: 'A friendly purple AI creature among city buildings and a MAIA computer screen' },
		{ image: 'maia-pen-spring-2026.jpg', title: 'MAIA pen', label: 'Spring 2026 · Photo', alt: 'A purple MAIA pen with a white MAIA logo, held in a hand' }
	];
</script>

<PageLayout
	title="MAIA Merch"
	description="Explore MAIA's shirts, stickers, and pens, plus the V0 draft of our AI safety playing cards."
	heroTitle="MAIA Merch"
>
	<svelte:fragment slot="hero-content">
		<p class="max-w-2xl text-lg text-maia-950/80 dark:text-maia-100/80">
			Things we've made for the MAIA community.
		</p>
	</svelte:fragment>

	<SectionContainer title="MAIA playing cards" icon="fas fa-layer-group">
		<div class="mb-5 flex flex-wrap items-center gap-3 not-prose">
			<span class="rounded-full bg-maia-500/10 px-3 py-1 text-sm font-semibold text-maia-700 dark:text-maia-300">V0 draft</span>
			<span class="text-sm text-maia-950/60 dark:text-maia-100/60">August 28, 2026 · 56-page PDF · 748 KB</span>
		</div>
		<p>
			A deck of playing cards that doubles as a small guide to AI safety. The suits explore
			techniques, organizations, milestones, and failure modes, with short explanations and references.
		</p>
		<p class="text-sm text-maia-950/70 dark:text-maia-100/70">Created by David Zhang.</p>
		<p>
			This is an early V0 draft. We hope to keep iterating on the content and design, and we'd love
			to hear what you think could be clearer or better.
		</p>

		<div id="playing-card-gallery" class="not-prose grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 my-8 max-w-4xl mx-auto">
			{#each cards.slice(0, showAllCards ? cards.length : initialCardCount) as card}
				<figure class="m-0">
					<a href={deckUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open the full PDF: ${card.caption}`}>
						<img src={`/merch/${card.image}`} alt={card.alt} width="643" height="900" loading="lazy" class="w-full max-w-[260px] mx-auto rounded-xl shadow-lg" />
					</a>
					<figcaption class="mt-3 text-center text-sm text-maia-950/70 dark:text-maia-100/70">{card.caption}</figcaption>
				</figure>
			{/each}
		</div>
		<div class="not-prose mb-8 text-center">
			<button type="button" aria-expanded={showAllCards} aria-controls="playing-card-gallery" on:click={() => showAllCards = !showAllCards} class="rounded-lg border border-maia-500/40 px-5 py-2.5 font-medium text-maia-700 dark:text-maia-300 hover:bg-maia-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maia-500">
				{showAllCards ? 'Show fewer cards' : 'Show all cards'}
			</button>
		</div>

		<div class="not-prose flex flex-wrap items-center gap-4">
			<Button text="View the deck" icon="fas fa-arrow-up-right-from-square" type="purple" href={deckUrl} target="_blank" rel="noopener noreferrer" />
			<a href={deckUrl} download="maia-playing-cards-v0.pdf" class="font-medium text-maia-700 dark:text-maia-300 underline underline-offset-4 hover:no-underline">Download PDF</a>
		</div>

	</SectionContainer>

	<SectionContainer title="Shirts, stickers, and pens" icon="fas fa-shirt">
		<p>A few designs and a pen from our Spring and Fall 2026 merch.</p>
		<div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
			{#each designs as design}
				<figure class="m-0">
					<a href={`/merch/${design.image}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${design.title}`}>
						<img src={`/merch/${design.image}`} alt={design.alt} loading="lazy" class="w-full h-72 object-contain rounded-xl bg-white p-3" />
					</a>
					<figcaption class="mt-3 text-center">
						<span class="block font-medium">{design.title}</span>
						<span class="text-sm text-maia-950/60 dark:text-maia-100/60">{design.label}</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</SectionContainer>
</PageLayout>
