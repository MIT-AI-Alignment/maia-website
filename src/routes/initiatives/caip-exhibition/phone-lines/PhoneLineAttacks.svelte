<script lang="ts">
	import type { ComponentType } from 'svelte';
	import PapersExpandable from '../../../components/PapersExpandable.svelte';
	import ContentCard from '../../../../components/ContentCard.svelte';
	import ContentCardsMasonry from '../../../../components/ContentCardsMasonry.svelte';
	import Link from '../../../../components/Link.svelte';

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

	// Audio demo files
	const audioDemos = [
		// {
		// 	title: 'Congressional Demo Call',
		// 	description: 'Example of an AI-generated call targeting congressional offices',
		// 	file: '/src/audio/congressional-demo.mp3',
		// 	icon: 'fa-solid fa-landmark'
		// },
		{
			title: 'Emergency Services Demo',
			description: 'Demonstration of potential attacks on emergency service lines',
			file: '/src/audio/emergency-call-demo.mp3',
			icon: 'fa-solid fa-ambulance'
		}
	];
</script>

<div class="mt-8 space-y-8">
	<!-- Overview Section -->
	<ContentCard bgColor="transparent" darkBgColor="transparent">
		<div class="flex flex-col md:flex-row gap-8">
			<div class="md:w-full">
				<p class="mb-4 text-lg">
					Advanced AI-driven voice emulation represents a significant security threat when combined
					with automated calling systems. Our demonstration showcases how malicious actors could
					leverage state-of-the-art text-to-speech (TTS) technology and Large Language Models (LLMs)
					to generate synthetic voices capable of conducting human-like conversations at scale.
				</p>
				<p class="mb-4">
					This proof-of-concept system demonstrates the full attack chain: from scraping publicly
					available business data across targeted areas, to aggregating context from sources like
					Google and Yelp, to conducting real-time adaptive conversations. The platform can
					automatically place calls to businesses and government offices, highlighting the urgent
					need for protective measures against such potential attacks.
				</p>
			</div>
		</div>
	</ContentCard>

	<!-- Audio Demos Section -->
	<ContentCard>
		<h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
			<i class="fa-solid fa-headphones text-purple-500"></i>
			<span>Audio Demonstrations</span>
		</h2>
		<p class="mb-6">
			Listen to examples of AI-generated voice calls that demonstrate the capabilities and potential
			risks of this technology:
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each audioDemos as demo}
				<div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
					<div class="flex items-center gap-3 mb-3">
						<i class="{demo.icon} text-2xl text-purple-500"></i>
						<h3 class="text-xl font-bold">{demo.title}</h3>
					</div>
					<p class="mb-4 text-gray-700 dark:text-gray-300">{demo.description}</p>
					<div class="audio-player w-full">
						<audio controls class="w-full">
							<source src={demo.file} type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio>
					</div>
				</div>
			{/each}
		</div>
	</ContentCard>

	<ContentCardsMasonry columns="3">
		<!-- Technical Capabilities Section -->
		<ContentCard>
			<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
				<i class="fa-solid fa-microchip text-green-500"></i>
				<span>Technical Capabilities</span>
			</h3>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				<li>
					<strong>Real-Time Voice Synthesis:</strong> Integration of ElevenLabs' text-to-speech API with
					OpenAI's models enables instant, dynamic voice generation with human-like qualities.
				</li>
				<li>
					<strong>Automated Intelligence Gathering:</strong> Sophisticated backend system that builds
					detailed target profiles by aggregating data from multiple public sources.
				</li>
				<li>
					<strong>Scalable Infrastructure:</strong> End-to-end pipeline utilizing Twilio for mass deployment
					of convincing automated calls.
				</li>
				<li>
					<strong>Conversation Monitoring:</strong> Real-time transcript analysis for adaptive dialogue
					management and interaction optimization.
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
					<strong>Communication Channel Flooding:</strong> Potential for thousands of automated calls
					to overwhelm businesses, financial institutions, or government offices across targeted areas.
				</li>
				<li>
					<strong>Public Perception Manipulation:</strong> Near-perfect voice imitation enabling spread
					of disinformation through trusted voices.
				</li>
				<li>
					<strong>Critical Infrastructure Exploitation:</strong> Potential disruption of essential services
					and emergency communication systems.
				</li>
				<li>
					<strong>Democratic Process Interference:</strong> Risk of overwhelming Congressional offices
					with fake constituent calls, distorting policy feedback channels.
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
					<strong>Mandatory Watermarking:</strong> Implement digital watermarking for synthetic voices
					to ensure traceability.
				</li>
				<li>
					<strong>Verification Protocols:</strong> Develop robust systems to verify voice communication
					authenticity, especially in critical sectors.
				</li>
				<li>
					<strong>Regulatory Framework:</strong> Establish comprehensive legal measures to deter and
					penalize malicious use of AI voice technology.
				</li>
				<li>
					<strong>Balanced Approach:</strong> Create policies that protect against harmful uses while
					supporting beneficial AI development.
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

		<!-- Contact Information Section -->
		<ContentCard>
			<h3 class="text-xl font-bold mb-4 flex items-center gap-3">
				<i class="fa-solid fa-envelope text-purple-500"></i>
				<span>Contact Information</span>
			</h3>
			<div class="space-y-3">
				<p>
					For inquiries about this demonstration, please contact David Turturean at 
					<Link href="mailto:davidct@mit.edu">davidct@mit.edu</Link>
					or Gatlen Culp at
					<Link href="mailto:gculp@mit.edu">gculp@mit.edu</Link>
				</p>
			</div>
		</ContentCard>
	</ContentCardsMasonry>
</div>
