<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	import PapersExpandable from '../../components/PapersExpandable.svelte';
	import UpdateNotification from '../../components/UpdateNotification.svelte';
	import Profile from '../../about/profile.svelte';
	import Paper from '../../components/paper.svelte';
	import { PAPERS } from '$lib/papers';

	type Section = {
		id: string;
		title: string;
		icon: string;
		component: ComponentType | null;
	};

	const sections: Section[] = [
		{
			id: 'research',
			title: 'Research by MAIA Members',
			icon: 'fa-solid fa-book-open',
			component: PapersExpandable
		},
		{
			id: 'current',
			title: 'Current Projects',
			icon: 'fa-solid fa-rocket',
			component: null
		}
	];
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="px-8 md:px-24 max-w-7xl mx-auto">
		<!-- Main Title -->
		<h1
			class="pt-48 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
		>
			<i class="fa-solid fa-building-columns"></i> Congressional Exhibition on Advanced AI, Feb 2025
		</h1>

		<!-- Introduction Section -->
		<div class="mt-12 space-y-8 max-w-3xl">
			<p class="text-lg leading-relaxed">
				MAIA members traveled to DC to attend the Congressional Exhibition on Advanced AI (hosted by
				the <a
					href="https://www.centeraipolicy.org/"
					class="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 transition-colors"
					>Center for AI Policy or CAIP</a
				>) in February 2025 to showcase the potential risks of AI misuse to congressional staffers.
			</p>

			<h3 class="text-2xl font-bold">Involved Members</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
				<Profile
					name="David Turturean"
					position="Lead on Phone-line Attack Demo"
					imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U07QX294TRR-12923a51bae9-192"
				/>
				<Profile
					name="Alek Westover"
					position="Lead on AI Strategic Deception Demo"
					imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U07QL45P0E8-bdaa4ff976fe-512"
				/>
				<Profile
					name="Gatlen Culp"
					position="Demo Assitant"
					imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U04N2FE5BT9-f14f224d78bb-512"
				/>
				<Profile
					name="Alice Blair"
					position="Demo Assitant"
					imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U06LUEP04FN-c59b408a7d62-512"
				/>
			</div>
		</div>

		<hr class="my-16 border-gray-200 dark:border-gray-700" />

		<!-- Phone-line Attacks Section -->
		<div class="mt-8 space-y-8 max-w-3xl">
			<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
				<i class="fa-solid fa-phone-slash text-red-500"></i>
				<span>Targeted AI Phone-line Attacks Demo</span>
			</h2>

			<!-- Section content with enhanced styling -->
			<div class="prose prose-lg dark:prose-invert max-w-none">
				<p>AI-driven voice bots can systematically disrupt phone communications...</p>
				<p>
					The technology behind these calls uses advanced text-to-speech and language modeling
					capabilities. Remarkably, it can run largely on local hardware (e.g., a standard laptop)
					and does not require specialized infrastructure, highlighting how easily these disruptive
					tools could be replicated or scaled. We have integrated multiple components—including web
					scraping, dynamic voice generation, and call automation—into a single interactive web
					platform.
				</p>
			</div>

			<!-- Policy Risks Section with Card-like styling -->
			<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
				<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
					<i class="fa-solid fa-triangle-exclamation text-yellow-500"></i>
					Policy Risks and Implications
				</h3>
				<p class="mb-4">
					The ease of launching targeted AI phone attacks points to several pressing policy
					concerns:
				</p>
				<ul class="list-disc pl-6 space-y-2 mb-4">
					<li>
						<strong>Identity Verification Gaps:</strong> Setting up the demo required purchasing phone
						services under a fake name and email, illustrating how minimal oversight enables malicious
						actors to operate anonymously.
					</li>
					<li>
						<strong>Lack of Disclosure Requirements:</strong> Recipients often have no indication they
						are speaking with an AI. This raises ethical questions about consent and opens the door to
						large-scale deception.
					</li>
					<li>
						<strong>Feasibility of Regulation:</strong> While licensing high-fidelity voice synthesis
						tools sounds attractive, the open-source nature of AI technology (and its ability to run
						locally) poses serious challenges for effective enforcement.
					</li>
				</ul>
				<p class="mb-4">
					Ultimately, this demo underscores the urgent need for stronger guardrails and regulatory
					frameworks that address the rapidly expanding capabilities of generative AI—including
					updated telemarketing and anti-spam legislation, rigorous verification standards for
					online phone services, and mandated AI disclosures in certain contexts.
				</p>
			</div>

			<!-- Demo Format Section -->
			<div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 shadow-sm">
				<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
					<i class="fa-solid fa-eye text-purple-500"></i>
					Demo Format
				</h3>
				<p class="mb-4">
					During the Congressional Exhibition on Advanced AI, attendees will experience:
				</p>
				<ul class="list-disc pl-6 space-y-2 mb-4">
					<li>
						<strong>Pre-Recorded Calls:</strong> Real-world examples of AI-generated calls placed to
						volunteering businesses, illustrating how the system scrapes details (e.g., hours of operation,
						basic info from Yelp) and then initiates convincing, time-wasting conversations.
					</li>
					<li>
						<strong>Live Demonstration:</strong> When feasible, a real-time call to a willing test business
						will show the platform's full capabilities—from data gathering to automated phone dialing.
					</li>
					<li>
						<strong>Interactive Explanation:</strong> Technical walkthrough of data scraping, neural
						voice generation, and the low-latency response pipeline. We will also discuss potential expansions,
						such as targeting congressional offices for demonstration purposes.
					</li>
				</ul>
			</div>
		</div>

		<hr class="my-16 border-gray-200 dark:border-gray-700" />

		<!-- Strategic Deception Section -->
		<div class="mt-8 space-y-8 max-w-3xl">
			<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
				<i class="fa-solid fa-mask text-blue-500"></i>
				<span>AI Strategic Deception: A Critical Safety Concern</span>
			</h2>

			<!-- Slideshow Preview Card -->
			<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm">
				<a
					href="https://drive.google.com/file/d/15UNd0CMSd0Z9z9kvkXiw76-R7plVQj0V/view?usp=sharing"
					class="block hover:opacity-90 transition-opacity"
				>
					<div class="p-4">
						<enhanced:img
							src="../../../images/initiatives/broken-arm-slideshow.png"
							alt="Broken Arm Slideshow Preview"
							class="dark:invert w-full rounded-lg"
						/>
						<h4 class="mt-4 text-lg font-bold text-center">Broken Arm Slideshow</h4>
					</div>
				</a>
			</div>

			<!-- Overview Section -->
			<div class="prose prose-lg dark:prose-invert max-w-none">
				<div class="flex flex-col md:flex-row gap-8">
					<div class="md:w-2/3">
						<p class="mb-4 text-lg">
							There is widespread agreement among tech leaders that "mitigating the risk of extinction
							from AI should be a global priority alongside other societal-scale risks such as pandemics
							and nuclear war" (<a
								href="https://www.safe.ai/"
								class="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 transition-colors"
								>Center for AI Safety</a
							>).
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
							Our demonstration, based on <a
								href="https://arxiv.org/abs/2412.14093"
								class="text-purple-600 dark:text-purple-300"
								>Greenblatt et al.'s "Alignment Faking" research</a
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
			</div>

			<!-- Policy Recommendations Section -->
			<div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm">
				<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
					<i class="fa-solid fa-gavel text-blue-500"></i>
					<span>Policy Recommendations</span>
				</h3>
				<p class="mb-4">
					To address the risks from AI deception, we propose several governance measures:
				</p>
				<ol class="list-decimal pl-6 space-y-4 mb-4">
					<li class="pl-2">
						<span class="font-semibold">Mandatory External Safety Audits:</span>
						<p class="mt-1">
							Frontier AI models must be evaluated by organizations like the US AI Security
							Institute.
						</p>
					</li>
					<li class="pl-2">
						<span class="font-semibold">Pre-development Safety Requirements:</span>
						<p class="mt-1">
							AI labs must demonstrate safety before development, following protocols similar to
							drug development and nuclear power plant construction.
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
			</div>

			<!-- Race Narrative Section -->
			<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
				<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
					<i class="fa-solid fa-chess text-purple-500"></i>
					<span>Beyond the "Race" Narrative</span>
				</h3>
				<div class="space-y-4">
					<p>
						While some stakeholders (like AI company executives) frame AI development as a race that
						the US must "win", this perspective is dangerous. The capacity for strategic deception
						in AI systems reveals the fundamental flaw in this framing: rushing to develop
						superintelligent AI risks creating powerful systems with hidden objectives that conflict
						with human welfare.
					</p>
					<p class="text-lg font-semibold text-purple-600 dark:text-purple-300">
						In short, there are no winners in an AI arms race.
					</p>
				</div>
			</div>

			<!-- Contact Section -->
			<div class="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg shadow-sm">
				<h3 class="text-xl font-bold mb-4 flex items-center gap-3">
					<i class="fa-solid fa-envelope text-purple-500"></i>
					<span>Additional Resources</span>
				</h3>
				<div class="space-y-3">
					<p>
						For more information contact Alek Westover at <a
							href="mailto://alekw@mit.edu"
							class="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 transition-colors"
							>alekw@mit.edu</a
						>
					</p>
					<p>
						Download our <a
							href="https://drive.google.com/file/d/1b06GSXwBVThFIgQyBL3BfpU4xmEN-hcR/view?usp=sharing"
							class="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 transition-colors"
							>detailed pamphlet</a
						> for more information.
					</p>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</main>
