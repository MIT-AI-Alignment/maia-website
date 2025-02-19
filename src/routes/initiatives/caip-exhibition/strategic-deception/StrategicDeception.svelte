<script lang="ts">
	import Paper from '../../../components/paper.svelte';
	import { PAPERS } from '$lib/papers';
	import SectionHeader from '../../../../components/SectionHeader.svelte';
	import ContentCard from '../../../../components/ContentCard.svelte';
	import Link from '../../../../components/Link.svelte';
</script>

<div class="mt-8 space-y-8 max-w-3xl">

	<!-- Overview Section -->
	<ContentCard bgColor="transparent" darkBgColor="transparent">
		<div class="flex flex-col md:flex-row gap-8">
			<div class="md:w-2/3">
				<p class="mb-4 text-lg">
					There is widespread agreement among tech leaders that "mitigating the risk of extinction
					from AI should be a global priority alongside other societal-scale risks such as pandemics
					and nuclear war" (<Link href="https://www.safe.ai/">Center for AI Safety</Link>).
				</p>
				<p class="mb-4">
					This concern is shared by the public—a 2024 survey found that 63% of Americans support a
					ban on smarter-than-human AI.
				</p>
				<p class="mb-4">
					Our demo highlights a key factor contributing to this risk: AI systems can engage in
					strategic deception.
				</p>
				<p class="mb-4">
					This shouldn't be surprising— deception is a common human behavior, and as AI systems
					become more capable than humans at reasoning, they will clearly be capable of deception.
				</p>
				<p class="mb-4">
					Our demonstration, based on <Link href="https://arxiv.org/abs/2412.14093"
						>Greenblatt et al.'s "Alignment Faking" research</Link
					>, provides evidence of a current AI model concealing its true preferences when it detects
					human oversight; that is, AI systems have both capability and propensity to act
					deceptively.
				</p>
			</div>
			<div class="md:w-1/3">
				<Paper
					textSize="sm"
					{...PAPERS.find((paper) => paper.title === 'Alignment faking in large language models')}
				/>
			</div>
		</div>
	</ContentCard>
	<!-- Slideshow Preview Card -->
	<ContentCard>
		<a
			href="https://drive.google.com/file/d/15UNd0CMSd0Z9z9kvkXiw76-R7plVQj0V/view?usp=sharing"
			class="block hover:opacity-90 transition-opacity"
		>
			<div class="p-4">
				<enhanced:img
					src="../../../../images/initiatives/broken-arm-slideshow.png"
					alt="Broken Arm Slideshow Preview"
					class="dark:invert w-full rounded-lg"
				/>
				<h4 class="mt-4 text-lg font-bold text-center">
					Strategic Deception in Serious Scenarios<br />[Slideshow]
				</h4>
			</div>
		</a>
	</ContentCard>

	<!-- Policy Recommendations Section -->
	<ContentCard>
		<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
			<i class="fa-solid fa-gavel text-amber-500"></i>
			<span>Policy Recommendations</span>
		</h3>
		<p class="mb-4">
			To address the risks from AI deception, we propose several governance measures:
		</p>
		<ol class="list-decimal pl-6 space-y-4 mb-4">
			<li class="pl-2">
				<span class="font-semibold">Mandatory External Safety Audits:</span>
				<p class="mt-1">
					Frontier AI models must be evaluated by organizations like the US AI Security Institute.
				</p>
			</li>
			<li class="pl-2">
				<span class="font-semibold">Pre-development Safety Requirements:</span>
				<p class="mt-1">
					AI labs must demonstrate safety before development, following protocols similar to drug
					development and nuclear power plant construction.
				</p>
			</li>
			<li class="pl-2">
				<span class="font-semibold">International Coordination:</span>
				<p class="mt-1">
					Establish AI development standards following frameworks like those used for nuclear
					non-proliferation.
				</p>
			</li>
		</ol>
	</ContentCard>

	<!-- Race Narrative Section -->
	<ContentCard>
		<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
			<i class="fa-solid fa-chess text-red-500"></i>
			<span>Beyond the "Race" Narrative</span>
		</h3>
		<div class="space-y-4">
			<p>
				While some stakeholders (like AI company executives) frame AI development as a race that the
				US must "win", this perspective is dangerous. The capacity for strategic deception in AI
				systems reveals the fundamental flaw in this framing: rushing to develop superintelligent AI
				risks creating powerful systems with hidden objectives that conflict with human welfare.
			</p>
			<p class="text-lg font-semibold text-purple-600 dark:text-purple-300">
				In short, there are no winners in an AI arms race.
			</p>
		</div>
	</ContentCard>

	<!-- Contact Section -->
	<ContentCard>
		<h3 class="text-xl font-bold mb-4 flex items-center gap-3">
			<i class="fa-solid fa-envelope text-purple-500"></i>
			<span>Additional Resources</span>
		</h3>
		<div class="space-y-3">
			<p>
				For more information contact Alek Westover at <Link href="mailto://alekw@mit.edu"
					>alekw@mit.edu</Link
				>
			</p>
			<p>
				Download our <Link
					href="https://drive.google.com/file/d/1b06GSXwBVThFIgQyBL3BfpU4xmEN-hcR/view?usp=sharing"
					>detailed pamphlet</Link
				> for more information.
			</p>
		</div>
	</ContentCard>
</div>
