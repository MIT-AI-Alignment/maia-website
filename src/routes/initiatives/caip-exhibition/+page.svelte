<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	import PapersExpandable from '../../components/PapersExpandable.svelte';
	import UpdateNotification from '../../components/UpdateNotification.svelte';
	import Profile from '../../about/profile.svelte';

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
	<div class="px-8 md:px-24">
		<h1 class="pt-48 text-4xl md:text-4xl lg:text-5xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-building-columns"></i> Congressional Exhibition on Advanced AI, Feb 2025
		</h1>
		<div class="mt-8 space-y-6 max-w-3xl">
			<p class="mb-4">
				MAIA members traveled to DC to attend the Congressional Exhibition on Advanced AI (hosted by
				the <a href="https://www.centeraipolicy.org/" class="text-purple-600 dark:text-purple-300">Center for AI Policy or CAIP</a>) in February
				2025 to showcase the potential risks of AI misuse to congressional staffers. David Turturean
				created and led a demonstration on flooding phone-lines with targeted attacks. Alek Westover
				held a booth discussing AI's capability for strategic deception and its safety implications.
			</p>
			<h3 class="text-xl font-bold mb-4">Involved Members</h3>
			<div class="flex my-6 flex-wrap">
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
		<hr />

		<h2 class="pt-12 text-2xl md:text-2xl lg:text-2xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-phone-slash"></i> Targeted AI Phone-line Attacks Demo
		</h2>
		<hr />
		<h2 class="pt-12 text-2xl md:text-2xl lg:text-2xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-mask"></i> AI Strategic Deception: A Critical Safety Concern
		</h2>
		<div class="mt-8 space-y-6 max-w-3xl">
			<a href="https://drive.google.com/file/d/15UNd0CMSd0Z9z9kvkXiw76-R7plVQj0V/view?usp=sharing">
				<div class="flex flex-col p-1">
					<enhanced:img
						src="../../../images/initiatives/broken-arm-slideshow.png"
						alt="Broken Arm Slideshow Preview"
						class="dark:invert"
					/>
					<h4 class="mt-3 mb-1 text-12 font-bold">Broken Arm Slideshow</h4>
				</div>
			</a>
		</div>

		<div class="mt-8 space-y-6 max-w-3xl">
			<section>
				<p class="mb-4">
					There is widespread agreement among tech leaders that "mitigating the risk of extinction
					from AI should be a global priority alongside other societal-scale risks such as pandemics
					and nuclear war" (<a href="https://www.safe.ai/" class="text-purple-600 dark:text-purple-300">Center for AI Safety</a>).
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
					Our demonstration, based on <a href="https://arxiv.org/abs/2412.14093" class="text-purple-600 dark:text-purple-300">Greenblatt et al.'s "Alignment Faking" research</a>, provides evidence of a current AI model concealing its true preferences when it detects
					human oversight; that is, AI systems have both capability and propensity to act
					deceptively.
				</p>
			</section>

			<section>
				<h3 class="text-xl font-bold mb-4">
					<i class="fa-solid fa-gavel"></i> Policy Recommendations
				</h3>
				<p class="mb-2">
					To address the risks from AI deception, we propose several governance measures:
				</p>
				<ol class="list-decimal pl-6 space-y-2">
					<li>
						Mandatory external safety audits of frontier AI models, conducted by organizations like
						the US AI Security Institute.
					</li>
					<li>
						Requirements for AI labs to demonstrate safety before development, similar to protocols
						in drug development and nuclear power plant construction.
					</li>
					<li>
						International coordination on AI development standards, following frameworks like those
						used for nuclear non-proliferation.
					</li>
				</ol>
			</section>

			<section>
				<h3 class="text-xl font-bold mb-4">
					<i class="fa-solid fa-chess"></i> Beyond the "Race" Narrative
				</h3>
				<p class="mb-4">
					While some stakeholders (like AI company executives) frame AI development as a race that
					the US must "win", this perspective is dangerous. The capacity for strategic deception in
					AI systems reveals the fundamental flaw in this framing: rushing to develop
					superintelligent AI risks creating powerful systems with hidden objectives that conflict
					with human welfare. Such a scenario would inevitably lead to confrontation between
					humanity and AI—a conflict we cannot win.
				</p>
				<p class="mb-4">In short, there are no winners in an AI arms race.</p>
			</section>

			<section class="mt-8">
				<p>
					For more information contact Alek Westover at <a href="mailto://alekw@mit.edu" class="text-purple-600 dark:text-purple-300">alekw@mit.edu</a>
				</p>

				<p>
					<a href="https://drive.google.com/file/d/1b06GSXwBVThFIgQyBL3BfpU4xmEN-hcR/view?usp=sharing" class="text-purple-600 dark:text-purple-300">Pamphlet</a>
				</p>
			</section>
		</div>
	</div>
	<Footer />
</main>
