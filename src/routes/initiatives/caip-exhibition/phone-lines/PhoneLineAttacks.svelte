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

<div class="mt-8 space-y-8">
	<!-- Overview Section -->
	<ContentCard bgColor="transparent" darkBgColor="transparent">
		<div class="flex flex-col md:flex-row gap-8">
			<div class="md:w-full">
				<h2 class="text-3xl font-bold mb-6">The Weaponization of AI-Driven Voice Emulation</h2>
				<p class="mb-4 text-lg">
					Advanced AI-driven voice emulation represents a significant security threat when combined with automated calling systems. Our demonstration showcases how malicious actors could leverage state-of-the-art text-to-speech (TTS) technology and Large Language Models (LLMs) to generate synthetic voices capable of conducting human-like conversations at scale.
				</p>
				<p class="mb-4">
					This proof-of-concept system demonstrates the full attack chain: from scraping publicly available business data across targeted areas, to aggregating context from sources like Google and Yelp, to conducting real-time adaptive conversations. The platform can automatically place calls to businesses and government offices, highlighting the urgent need for protective measures against such potential attacks.
				</p>
			</div>
		</div>
	</ContentCard>

	<ContentCardsMasonry columns="4">
		<!-- Technical Capabilities Section -->
		<ContentCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-microchip text-green-500"></i>
				<span>Technical Capabilities</span>
			</h3>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				<li>
					<strong>Real-Time Voice Synthesis:</strong> Integration of ElevenLabs' text-to-speech API with OpenAI's models enables instant, dynamic voice generation with human-like qualities.
				</li>
				<li>
					<strong>Automated Intelligence Gathering:</strong> Sophisticated backend system that builds detailed target profiles by aggregating data from multiple public sources.
				</li>
				<li>
					<strong>Scalable Infrastructure:</strong> End-to-end pipeline utilizing Twilio for mass deployment of convincing automated calls.
				</li>
				<li>
					<strong>Conversation Monitoring:</strong> Real-time transcript analysis for adaptive dialogue management and interaction optimization.
				</li>
			</ul>
		</ContentCard>

		<!-- Social Engineering Risks Section -->
		<ContentCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-triangle-exclamation text-red-500"></i>
				<span>Social Engineering Risks</span>
			</h3>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				<li>
					<strong>Communication Channel Flooding:</strong> Potential for thousands of automated calls to overwhelm businesses, financial institutions, or government offices across targeted areas.
				</li>
				<li>
					<strong>Public Perception Manipulation:</strong> Near-perfect voice imitation enabling spread of disinformation through trusted voices.
				</li>
				<li>
					<strong>Critical Infrastructure Exploitation:</strong> Potential disruption of essential services and emergency communication systems.
				</li>
				<li>
					<strong>Democratic Process Interference:</strong> Risk of overwhelming Congressional offices with fake constituent calls, distorting policy feedback channels.
				</li>
			</ul>
		</ContentCard>

		<!-- Policy Recommendations Section -->
		<ContentCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-gavel text-amber-500"></i>
				<span>Policy Recommendations</span>
			</h3>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				<li>
					<strong>Mandatory Watermarking:</strong> Implement digital watermarking for synthetic voices to ensure traceability.
				</li>
				<li>
					<strong>Verification Protocols:</strong> Develop robust systems to verify voice communication authenticity, especially in critical sectors.
				</li>
				<li>
					<strong>Regulatory Framework:</strong> Establish comprehensive legal measures to deter and penalize malicious use of AI voice technology.
				</li>
				<li>
					<strong>Balanced Approach:</strong> Create policies that protect against harmful uses while supporting beneficial AI development.
				</li>
			</ul>
		</ContentCard>

		<!-- Demo Format Section -->
		<ContentCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-eye text-blue-500"></i>
				<span>Demo Format</span>
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
