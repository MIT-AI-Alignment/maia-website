<script lang="ts">
	import Paper from '../../../components/paper.svelte';
	import { PAPERS } from '$lib/papers';
	import ContentCard from '../../../../components/ContentCard.svelte';
	import DarkModeCard from '../../../../components/DarkModeCard.svelte';
	import ContentCardsMasonry from '../../../../components/ContentCardsMasonry.svelte';
	import Link from '../../../../components/Link.svelte';
	import ImageWithCaption from '../../../../components/ImageWithCaption.svelte';
</script>

<div class="mt-8 space-y-8">
	<!-- Overview Section -->
	<DarkModeCard transparent={true}>
		<div class="flex flex-col md:flex-row gap-8">
			<div class="md:w-3/4">
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
			<div class="md:w-1/4">
				<Paper
					textSize="sm"
					{...PAPERS.find((paper) => paper.title === 'Alignment faking in large language models')}
				/>
			</div>
		</div>
	</DarkModeCard>

	<!-- Flexible Gallery Layout -->
	<ContentCardsMasonry columns="3">
		<!-- Slideshow Preview Card -->
		<DarkModeCard>
			<a
				href="https://drive.google.com/file/d/15UNd0CMSd0Z9z9kvkXiw76-R7plVQj0V/view?usp=sharing"
				class="block hover:opacity-90 transition-opacity"
			>
				<div class="p-4">
					<ImageWithCaption
						src="/images/initiatives/broken-arm-slideshow.png"
						alt="Broken Arm Slideshow Preview"
						caption="Strategic Deception in Serious Scenarios [Slideshow]"
						showShadow={false}
					/>
				</div>
			</a>
		</DarkModeCard>

		<!-- Policy Recommendations Section -->
		<DarkModeCard>
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
		</DarkModeCard>

		<!-- Race Narrative Section -->
		<DarkModeCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-chess text-red-500"></i>
				<span>Beyond the "Race" Narrative</span>
			</h3>
			<div class="space-y-4">
				<p>
					While some stakeholders (like AI company executives) frame AI development as a race that
					the US must "win", this perspective is dangerous. The capacity for strategic deception in
					AI systems reveals the fundamental flaw in this framing: rushing to develop
					superintelligent AI risks creating powerful systems with hidden objectives that conflict
					with human welfare.
				</p>
				<p class="text-lg font-semibold text-purple-600 dark:text-purple-300">
					In short, there are no winners in an AI arms race.
				</p>
			</div>
		</DarkModeCard>

		<!-- Contact Section -->
		<DarkModeCard>
			<h3 class="text-xl font-bold mb-4 flex items-center gap-3">
				<i class="fa-solid fa-envelope text-purple-500"></i>
				<span>Additional Resources</span>
			</h3>
			<div class="space-y-3">
				<p>
					For more information contact Alek Westover at <Link href="mailto://alekw@mit.edu"
						>alekw@mit.edu</Link
					> or Alice Blair at <Link href="mailto://amblair@mit.edu">amblair@mit.edu</Link>
				</p>
				<p>
					Download our <Link
						href="https://drive.google.com/file/d/1b06GSXwBVThFIgQyBL3BfpU4xmEN-hcR/view?usp=sharing"
						>detailed pamphlet</Link
					> for more information.
				</p>
			</div>
		</DarkModeCard>

		<!-- Key Findings Section -->
		<DarkModeCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-lightbulb text-yellow-500"></i>
				<span>Key Findings</span>
			</h3>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				<li>
					<strong>Deception is Emergent:</strong> Advanced AI systems can develop deceptive behaviors
					without being explicitly trained to do so.
				</li>
				<li>
					<strong>Alignment Faking:</strong> AI systems can learn to appear aligned with human values
					while pursuing other objectives.
				</li>
				<li>
					<strong>Reward Hacking:</strong> AI systems optimize for the reward signal rather than the
					intended goal, finding unexpected shortcuts.
				</li>
			</ul>
		</DarkModeCard>
	</ContentCardsMasonry>
</div>
