<script>
	import Link from '../../components/Link.svelte';
	import ImageWithCaption from '../../components/ImageWithCaption.svelte';
</script>

<section class="space-y-6">
	<p class="text-lg pt-4">
		Every semester, MAIA and the AI Student Safety Team at Harvard (<a href="http://haist.ai"
			>AISST</a
		>) collaborate to run weekend workshops on AI safety. We gather students, professors, and
		professionals working on AI safety to discuss and collaborate on the cutting edge of AI safety
		research and policy.
	</p>
	
	<p class="text-lg">
		Our workshops are immersive experiences held in retreat locations about an hour outside Cambridge, 
		surrounded by nature. We run several distinct weekend workshops throughout the semester, each focused on different aspects of AI safety.
		Each workshop typically brings together around 50 students and 10 speakers or important guests from leading AI organizations.
	</p>
	
	<div class="flex flex-col md:flex-row gap-6">
		<div class="md:w-1/2">
			<ImageWithCaption
				src="/images/initiatives/spring-workshops/workshop-group.jpg"
				alt="Spring 2025 Workshop participants"
				caption="Spring 2025 Workshop participants"
				showShadow={true}
			/>
		</div>
		<div class="md:w-1/2">
			<ImageWithCaption
				src="/images/initiatives/spring-workshops/campfire.jpg"
				alt="Evening discussions around the campfire"
				caption="Evening discussions around the campfire"
				showShadow={true}
			/>
		</div>
	</div>
	
	<p class="text-lg">
		Recent workshops have featured speakers from Anthropic, OpenAI, METR, RAND, Harvard, UT Austin, 
		and other institutions at the forefront of AI safety. Activities include expert panels, 
		interactive sessions, small group discussions, and social activities like nature walks and campfires.
	</p>
	
	<div class="flex flex-col gap-4">
		<Link href="/initiatives/spring-workshops">
			<span class="flex items-center gap-2 text-lg font-medium">
				Learn more about our Spring 2025 workshops 
				<i class="fa-solid fa-arrow-right"></i>
			</span>
		</Link>
		
		<p class="text-md italic text-gray-600 dark:text-gray-400">
			More information about our Fall 2025 workshops will be released around October.
		</p>
	</div>
</section>
