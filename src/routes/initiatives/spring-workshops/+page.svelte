<script lang="ts">
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	import Profile from '../../about/profile.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import Link from '../../../components/Link.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import ImageWithCaption from '../../../components/ImageWithCaption.svelte';
	import VideoWithCaption from '../../../components/VideoWithCaption.svelte';
	import { PEOPLE, getSortedPeopleByProject, getPersonProjectRole, type Person } from '$lib/people';

	// Get people involved in the workshop projects
	const workshopTeam = getSortedPeopleByProject('spring-workshops');

	// Create a type for media items
	type MediaItem = {
		type: 'image' | 'video';
		src: string;
		alt: string;
		caption: string;
	};

	const MEDIA_ITEMS: MediaItem[] = [
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/workshop-group.jpg',
			alt: 'Workshop participants gathered together',
			caption: 'Team picture from one of our technical workshops'
		},
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/campfire.jpg',
			alt: 'Students gathered around a campfire',
			caption: 'Evening discussions and connections around the campfire'
		},
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/speaker-session.jpg',
			alt: 'Student organizer giving an introductory speech',
			caption: 'Student organizer giving the introductory speech at a workshop'
		},
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/nature-walk.jpg',
			alt: 'Participants on a nature walk',
			caption: 'Workshop participants taking a refreshing nature walk between sessions'
		},
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/workshop-discussion.jpg',
			alt: 'Small group discussion',
			caption: 'Collaborative discussions on technical AI safety challenges'
		},
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/campfire-2.jpg',
			alt: 'People making smores around campfire',
			caption: 'Building community and sharing ideas over s\'mores'
		},
		{
			type: 'image',
			src: '/images/initiatives/spring-workshops/nature.jpg',
			alt: 'Image of a lake and trees',
			caption: 'The beautiful retreat setting where our workshops took place'
		}
	];
</script>

<svelte:head>
	<title>MAIA - Spring AI Workshops</title>
	<meta name="description" content="MIT AI Alignment (MAIA) spring technical and policy workshops." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black text-gray-800 dark:text-maia_white">
	<Navbar />
	<div class="relative">
		<!-- Hero Image -->
		<div class="absolute inset-0 h-[700px]">
			<img
				src="/images/initiatives/spring-workshops/nature.jpg"
				alt="Workshop location surrounded by nature"
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
				<i class="fa-solid fa-tree"></i> Technical & Policy Workshops, Spring 2025
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8 max-w-5xl">
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
					{#each workshopTeam as person}
						<Profile
							personId={person.id}
							subtitle={getPersonProjectRole(person, 'spring-workshops')}
							showExpandButton={true}
						/>
					{/each}
				</div>

				<!-- Overview -->
				<div class="flex flex-col md:flex-row gap-8">
					<div class="md:w-2/3">
						<p class="text-lg leading-relaxed">
							This April, the <Link href="https://www.linkedin.com/company/harvard-ai-safety-team/"
								>AI Safety Student Team</Link
							> and <Link href="https://www.linkedin.com/company/mit-ai-alignment/"
								>MIT AI Alignment</Link
							> had the incredible opportunity to organize three immersive weekend workshops - two focused on technical AI safety and one on AI policy - bringing together around 150 students and 20 speakers.
						</p>
						<p class="mt-4 text-lg leading-relaxed">
							Set in a beautiful retreat location about an hour outside Cambridge, these workshops created a space for participants to disconnect from daily routines, engage in deep thinking, and build community through shared experiences - from intensive technical discussions to singing around the campfire.
						</p>
						<p class="mt-4 text-lg leading-relaxed">
							We're grateful to all the students who joined us from Harvard, MIT, Brown, Columbia,
							and many other institutions. Special thanks to our exceptional speakers from <Link
								href="https://www.linkedin.com/company/anthropicresearch/">Anthropic</Link
							>, <Link href="https://www.linkedin.com/company/openai/">OpenAI</Link>,
							<Link href="https://www.linkedin.com/company/metr-evals/">METR</Link>,
							<Link href="https://www.linkedin.com/company/rand-corporation/">RAND</Link>, and
							<Link href="https://www.linkedin.com/company/theuniversityoftexasataustin-/"
								>The University of Texas at Austin</Link
							>, along with
							<Link href="https://www.linkedin.com/company/harvard-university/"
								>Harvard University</Link
							> and many others, who shared valuable insights and catalyzed meaningful discussions.
						</p>
						<p class="mt-4 text-lg leading-relaxed">
							Here's to shaping a future where AI empowers us all, and doing it with care!
						</p>
					</div>

					<!-- Highlight Picture -->
					<div class="md:w-1/3">
						<ImageWithCaption
							src="/images/initiatives/spring-workshops/workshop-discussion.jpg"
							alt="Workshop highlights"
							caption="Participants engaging in AI safety discussions"
						/>
					</div>
				</div>

				<!-- Workshop Photos Gallery -->
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
			</div>

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Workshop Focus Areas Section -->
			<SectionHeader
				icon="fa-solid fa-landmark"
				iconColor="blue-500"
				text="AI Technical & Policy Topics"
			/>

			<div class="mt-8 space-y-8">
				<p class="text-lg leading-relaxed">
					The three workshops covered a range of critical topics in both technical AI safety and policy:
				</p>

				<ul class="list-disc list-inside space-y-4 ml-4">
					<li class="text-lg">Technical approaches to AI alignment and safety</li>
					<li class="text-lg">Governance frameworks for advanced AI systems</li>
					<li class="text-lg">Interpretability and transparency in neural networks</li>
					<li class="text-lg">Policy interventions for managing AI risks</li>
					<li class="text-lg">
						Collaborative approaches between industry, academia, and government
					</li>
					<li class="text-lg">Student-led initiatives in AI safety research and governance</li>
				</ul>

				<p class="text-lg leading-relaxed mt-8">
					Through hands-on technical sessions, expert panels, and collaborative discussions, participants
					developed practical skills and deeper understanding of the challenges in ensuring AI
					benefits humanity from both technical and policy perspectives.
				</p>
			</div>
		</div>
	</div>
	<Footer />
</main>
