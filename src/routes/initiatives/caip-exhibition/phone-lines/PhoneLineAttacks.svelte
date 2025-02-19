<script lang="ts">
	import type { ComponentType } from 'svelte';
	import PapersExpandable from '../../../components/PapersExpandable.svelte';
	import ContentCard from '../../../../components/ContentCard.svelte';
	import ContentCardsMasonry from '../../../../components/ContentCardsMasonry.svelte';

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

<div class="mt-8 space-y-8 max-w-3xl">

	<!-- Overview Section -->
	<ContentCard bgColor="transparent" darkBgColor="transparent">
		<div class="flex flex-col md:flex-row gap-8">
			<div class="md:w-full">
				<p class="mb-4 text-lg">
					Our demo showcases how AI systems can be used to automate social engineering attacks
					through phone calls, representing a scalable threat to businesses and individuals.
				</p>
				<p class="mb-4">
					Using publicly available data and advanced language models, we demonstrate how malicious
					actors could deploy AI systems to conduct convincing, automated phone conversations for
					various purposes including scams, social engineering, or denial-of-service attacks.
				</p>
			</div>
		</div>
	</ContentCard>

	<ContentCardsMasonry columns="2">
		<!-- Policy Risks Section -->
		<ContentCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-gavel text-amber-500"></i>
				<span>Policy Risks and Implications</span>
			</h3>
			<p class="mb-4">
				The ease of launching targeted AI phone attacks points to several pressing policy concerns:
			</p>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				<li>
					<strong>Identity Verification Gaps:</strong> Setting up the demo required purchasing phone services
					under a fake name and email, illustrating how minimal oversight enables malicious actors to operate
					anonymously.
				</li>
				<li>
					<strong>Lack of Disclosure Requirements:</strong> Recipients often have no indication they are
					speaking with an AI. This raises ethical questions about consent and opens the door to large-scale
					deception.
				</li>
				<li>
					<strong>Feasibility of Regulation:</strong> While licensing high-fidelity voice synthesis tools
					sounds attractive, the open-source nature of AI technology (and its ability to run locally) poses
					serious challenges for effective enforcement.
				</li>
			</ul>
			<p class="mb-4">
				Ultimately, this demo underscores the urgent need for stronger guardrails and regulatory
				frameworks that address the rapidly expanding capabilities of generative AI—including updated
				telemarketing and anti-spam legislation, rigorous verification standards for online phone
				services, and mandated AI disclosures in certain contexts.
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
					<strong>Pre-Recorded Calls:</strong> Real-world examples of AI-generated calls placed to volunteering
					businesses, illustrating how the system scrapes details (e.g., hours of operation, basic info
					from Yelp) and then initiates convincing, time-wasting conversations.
				</li>
				<li>
					<strong>Live Demonstration:</strong> When feasible, a real-time call to a willing test business
					will show the platform's full capabilities—from data gathering to automated phone dialing.
				</li>
				<li>
					<strong>Interactive Explanation:</strong> Technical walkthrough of data scraping, neural voice
					generation, and the low-latency response pipeline. We will also discuss potential expansions,
					such as targeting congressional offices for demonstration purposes.
				</li>
			</ul>
		</ContentCard>
	</ContentCardsMasonry>
</div>
