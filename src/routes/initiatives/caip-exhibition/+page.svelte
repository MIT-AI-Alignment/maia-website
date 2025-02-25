<script lang="ts">
	import StrategicDeception from './strategic-deception/StrategicDeception.svelte';
	import PhoneLineAttacks from './phone-lines/PhoneLineAttacks.svelte';
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	import Profile from '../../about/profile.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import Link from '../../../components/Link.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import ImageWithCaption from '../../../components/ImageWithCaption.svelte';
	import VideoWithCaption from '../../../components/VideoWithCaption.svelte';

	// Create a type for media items
	type MediaItem = {
		type: 'image' | 'video';
		src: string;
		alt: string;
		caption: string;
	};

	const MEDIA_ITEMS: MediaItem[] = [
		{
			type: 'video',
			src: 'https://drive.google.com/file/d/1HAMlY-cNGfm0ODQUy2gQklq3RGRwvwnt/preview',
			alt: "Representative Foster's Introductory Speech",
			caption: 'Opening remarks from Representative Bill Foster'
		},
		{
			type: 'image',
			src: '/images/initiatives/caip-exhibition/intro-panorama.jpeg',
			alt: 'Wide view of the Intro Speech at the Exhibition',
			caption: 'Wide view of the Intro Speech'
		},
		{
			type: 'video',
			src: 'https://drive.google.com/file/d/1wNzazRLN36qQI6HMdGm8ATqXfXlGq3J1/preview',
			alt: 'MAIA Congressional Exhibition Walkthrough',
			caption: 'Video walkthrough of the Exhibition'
		},
		{
			type: 'video',
			src: 'https://drive.google.com/file/d/1X_vKrQtqJ_iaWzChgKsCmgp_aF5_Lfa5/preview',
			alt: 'Exhibition Panorama',
			caption: 'Panoramic video of the Exhibition'
		},
		{
			type: 'video',
			src: 'https://drive.google.com/file/d/1EFrAzf6jNfShOCknYReO2TmBhYb4sWjZ/preview',
			alt: 'CAIP Intro Speech',
			caption: 'Introductory speech from the Center for AI Policy (CAIP)'
		}
	];
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="relative">
		<!-- Hero Image -->
		<div class="absolute inset-0 h-[700px]">
			<!-- <img
				src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover"
			/> -->
			<img
				src="/images/initiatives/caip-exhibition/intro-panorama.jpeg"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-maia_white/70 to-maia_white dark:via-maia_black/70 dark:to-maia_black"
			/>
		</div>

		<!-- Content -->
		<div class="px-8 md:px-24 max-w-7xl mx-auto relative">
			<BackLink />

			<!-- Main Title -->
			<h1
				class="pt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
			>
				<i class="fa-solid fa-building-columns"></i> Congressional Exhibition on Advanced AI, Feb 2025
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8 max-w-5xl">
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
					<Profile
						name="David Turturean"
						position="Phone-line Attacks - Lead"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U07QX294TRR-12923a51bae9-192"
					/>
					<Profile
						name="Gatlen Culp"
						position="Phone-line Attacks"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U04N2FE5BT9-f14f224d78bb-512"
					/>
					<Profile
						name="Alek Westover"
						position="Strategic Deception - Lead"
						imageUrl="/images/people/alek-westover.jpg"
					/>
					<Profile
						name="Alice Blair"
						position="Strategic Deception"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U06LUEP04FN-c59b408a7d62-512"
					/>
				</div>

				<!-- Overview and Team Picture -->
				<div class="flex flex-col md:flex-row gap-8">
					<div class="md:w-2/3">
						<p class="text-lg leading-relaxed">
							MAIA members traveled to DC to attend the Congressional Exhibition on Advanced AI
							(hosted by the <Link href="https://www.centeraipolicy.org/"
								>Center for AI Policy or CAIP</Link
							>, supported by <Link href="https://foster.house.gov/"
								>Congressman Bill Foster of Illinois</Link
							>) in February 2025 to showcase the potential risks of AI misuse to congressional
							staffers.
						</p>
						<p class="mt-4 text-lg leading-relaxed">
							Our team presented two demonstrations highlighting critical AI safety concerns:
							automated phone-line attacks that could enable mass social engineering, and strategic
							deception capabilities in advanced AI systems that pose significant alignment
							challenges.
						</p>
					</div>

					<!-- Team Picture -->
					<div class="md:w-1/3">
						<ImageWithCaption
							src="/images/initiatives/caip-exhibition/maia-team.jpg"
							alt="MAIA Team at the Congressional Exhibition on Advanced AI"
							caption="MAIA team at the Congressional Exhibition (Feb 2025)"
						/>
					</div>
				</div>

				<!-- Exhibition Photos & Videos Gallery -->
				<div class="w-full overflow-x-auto mt-8 pb-4">
					<div class="flex flex-row gap-6" style="min-width: max-content;">
						{#each MEDIA_ITEMS as item}
							<div class="flex-shrink-0">
								{#if item.type === 'image'}
									<ImageWithCaption
										src={item.src}
										alt={item.alt}
										caption={item.caption}
										height="280px"
										width="auto"
										showShadow={true}
									/>
								{:else if item.type === 'video'}
									<VideoWithCaption
										videoUrl={item.src}
										alt={item.alt}
										caption={item.caption}
										height="280px"
										aspectRatio="portrait"
										showShadow={true}
									/>
								{/if}
							</div>
						{/each}
					</div>
					<div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
						<i class="fa-solid fa-arrow-left"></i> Scroll to see more media
						<i class="fa-solid fa-arrow-right"></i>
					</div>
				</div>
				<p>(More media to be released when CAIP releases their footage)</p>
			</div>

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Phone-line Attacks Section -->
			<SectionHeader
				icon="fa-solid fa-phone-slash"
				iconColor="red-500"
				text="Targeted Phone-line Attacks: Automated Social Engineering & Manipulation using Public Information"
			/>
			<div class="flex justify-end -mt-4 mb-4">
				<Link href="./phone-lines">
					<span class="flex items-center gap-2">
						See full demo <i class="fa-solid fa-arrow-right"></i>
					</span>
				</Link>
			</div>
			<PhoneLineAttacks />

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Strategic Deception Section -->
			<SectionHeader
				icon="fa-solid fa-mask"
				iconColor="blue-500"
				text="AI Strategic Deception: A Critical Safety Concern"
			/>
			<div class="flex justify-end -mt-4 mb-4">
				<Link href="./strategic-deception">
					<span class="flex items-center gap-2">
						See full demo <i class="fa-solid fa-arrow-right"></i>
					</span>
				</Link>
			</div>
			<StrategicDeception />
		</div>
	</div>
	<Footer />
</main>
