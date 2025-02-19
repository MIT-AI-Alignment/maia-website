<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	import PapersExpandable from '../../components/PapersExpandable.svelte';
	import UpdateNotification from '../../components/UpdateNotification.svelte';
	import Profile from '../../about/profile.svelte';
	import Paper from '../../components/paper.svelte';
	import { PAPERS } from '$lib/papers';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import ContentCard from '../../../components/ContentCard.svelte';
	import Link from '../../../components/Link.svelte';

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
	<div class="relative">
		<!-- Hero Image -->
		<div class="absolute inset-0 h-[400px]">
			<img
				src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-maia_white/70 to-maia_white dark:via-maia_black/70 dark:to-maia_black"
			/>
		</div>

		<!-- Content -->
		<div class="px-8 md:px-24 max-w-7xl mx-auto relative">
			<!-- Main Title -->
			<h1
				class="pt-[450px] text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
			>
				<i class="fa-solid fa-building-columns"></i> Congressional Exhibition on Advanced AI, Feb 2025
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8 max-w-5xl">
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
				<p class="text-lg leading-relaxed">
					MAIA members traveled to DC to attend the Congressional Exhibition on Advanced AI (hosted
					by the <Link href="https://www.centeraipolicy.org/">Center for AI Policy or CAIP</Link>) in February 2025 to showcase the potential risks of AI misuse to congressional
					staffers.
				</p>
			</div>

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Phone-line Attacks Section -->
			<div class="mt-8 space-y-8 max-w-3xl">
				<SectionHeader
					icon="fa-solid fa-phone-slash"
					iconColor="red-500"
					text="AI Phone-line Attacks: Automated Social Engineering"
				/>

				<!-- Overview Section -->
				<ContentCard bgColor="transparent" darkBgColor="transparent">
					<div class="flex flex-col md:flex-row gap-8">
						<div class="md:w-full">
							<p class="mb-4 text-lg">
								Our demo showcases how AI systems can be used to automate social engineering attacks
								through phone calls, representing a scalable threat to businesses and individuals.
							</p>
							<p class="mb-4">
								Using publicly available data and advanced language models, we demonstrate how
								malicious actors could deploy AI systems to conduct convincing, automated phone
								conversations for various purposes including scams, social engineering, or
								denial-of-service attacks.
							</p>
						</div>
					</div>
				</ContentCard>

				<!-- Policy Risks Section -->
				<ContentCard>
					<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
						<i class="fa-solid fa-gavel text-amber-500"></i>
						<span>Policy Risks and Implications</span>
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
							are speaking with an AI. This raises ethical questions about consent and opens the door
							to large-scale deception.
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
				</ContentCard>

				<!-- Demo Format Section -->
				<ContentCard>
					<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
						<i class="fa-solid fa-eye text-blue-500"></i>
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
							<strong>Live Demonstration:</strong> When feasible, a real-time call to a willing test
							business will show the platform's full capabilities—from data gathering to automated phone
							dialing.
						</li>
						<li>
							<strong>Interactive Explanation:</strong> Technical walkthrough of data scraping, neural
							voice generation, and the low-latency response pipeline. We will also discuss potential
							expansions, such as targeting congressional offices for demonstration purposes.
						</li>
					</ul>
				</ContentCard>
			</div>

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Strategic Deception Section -->
			<div class="mt-8 space-y-8 max-w-3xl">
				<SectionHeader
					icon="fa-solid fa-mask"
					iconColor="blue-500"
					text="AI Strategic Deception: A Critical Safety Concern"
				/>

				<!-- Overview Section -->
				<ContentCard bgColor="transparent" darkBgColor="transparent">
					<div class="flex flex-col md:flex-row gap-8">
						<div class="md:w-2/3">
							<p class="mb-4 text-lg">
								There is widespread agreement among tech leaders that "mitigating the risk of
								extinction from AI should be a global priority alongside other societal-scale risks
								such as pandemics and nuclear war" (<Link href="https://www.safe.ai/">Center for AI Safety</Link>).
							</p>
							<p class="mb-4">
								This concern is shared by the public—a 2024 survey found that 63% of Americans
								support a ban on smarter-than-human AI.
							</p>
							<p class="mb-4">
								Our demo highlights a key factor contributing to this risk: AI systems can engage in
								strategic deception.
							</p>
							<p class="mb-4">
								This shouldn't be surprising— deception is a common human behavior, and as AI
								systems become more capable than humans at reasoning, they will clearly be capable
								of deception.
							</p>
							<p class="mb-4">
								Our demonstration, based on <Link href="https://arxiv.org/abs/2412.14093">Greenblatt et al.'s "Alignment Faking" research</Link>, provides evidence of a current AI model concealing its true preferences when it
								detects human oversight; that is, AI systems have both capability and propensity to
								act deceptively.
							</p>
						</div>
						<div class="md:w-1/3">
							<Paper
								textSize="sm"
								{...PAPERS.find(
									(paper) => paper.title === 'Alignment faking in large language models'
								)}
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
								src="../../../images/initiatives/broken-arm-slideshow.png"
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
				</ContentCard>

				<!-- Race Narrative Section -->
				<ContentCard>
					<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
						<i class="fa-solid fa-chess text-red-500"></i>
						<span>Beyond the "Race" Narrative</span>
					</h3>
					<div class="space-y-4">
						<p>
							While some stakeholders (like AI company executives) frame AI development as a race
							that the US must "win", this perspective is dangerous. The capacity for strategic
							deception in AI systems reveals the fundamental flaw in this framing: rushing to
							develop superintelligent AI risks creating powerful systems with hidden objectives
							that conflict with human welfare.
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
							For more information contact Alek Westover at <Link href="mailto://alekw@mit.edu">alekw@mit.edu</Link>
						</p>
						<p>
							Download our <Link href="https://drive.google.com/file/d/1b06GSXwBVThFIgQyBL3BfpU4xmEN-hcR/view?usp=sharing">detailed pamphlet</Link> for more information.
						</p>
					</div>
				</ContentCard>
			</div>
		</div>
	</div>
	<Footer />
</main>
