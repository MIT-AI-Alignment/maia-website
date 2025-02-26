<script lang="ts">
	import { PEOPLE, type Person } from '$lib/people';
	import IconChevronDown from '~icons/ph/caret-down-bold';
	import Link from '../../components/Link.svelte';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Allow passing either a personId or individual properties
	export let personId: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let position: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let imageUrl: string | undefined = undefined;

	// Contact info and profiles
	export let email: string | undefined = undefined;
	export let mitEmail: string | undefined = undefined;
	export let github: string | undefined = undefined;
	export let gitlab: string | undefined = undefined;
	export let linkedin: string | undefined = undefined;
	export let personalPage: string | undefined = undefined;
	export let twitter: string | undefined = undefined;
	export let instagram: string | undefined = undefined;
	export let medium: string | undefined = undefined;
	export let slack: string | undefined = undefined;
	export let signal: string | undefined = undefined; // Kept for backward compatibility but not used
	export let googleScholar: string | undefined = undefined;
	export let orcid: string | undefined = undefined;
	export let arxiv: string | undefined = undefined;
	export let openreview: string | undefined = undefined;

	// Contact preferences and display options
	export let contactPreferences: Record<string, string> | undefined = undefined;
	export let showSocials = true; // Default to showing social icons
	export let showAllContacts = false;
	export let showAllSocials = false; // New option to show all social links
	export let showExpandButton = false; // New option to show expand button

	// If personId is provided, use it to get the person data
	let person: Person | undefined = undefined;
	if (personId) {
		person = PEOPLE[personId];

		// Use person data if individual props aren't provided
		name = name || person?.name;
		position = position || person?.position;
		imageUrl = imageUrl || person?.imageUrl;
		email = email || person?.email;
		mitEmail = mitEmail || person?.mitEmail;
		github = github || person?.github;
		gitlab = gitlab || person?.gitlab;
		linkedin = linkedin || person?.linkedin;
		personalPage = personalPage || person?.personalPage;
		twitter = twitter || person?.twitter;
		instagram = instagram || person?.instagram;
		medium = medium || person?.medium;
		slack = slack || person?.slack;
		googleScholar = googleScholar || person?.googleScholar;
		orcid = orcid || person?.orcid;
		arxiv = arxiv || person?.arxiv;
		openreview = openreview || person?.openreview;
		contactPreferences = contactPreferences || person?.contactPreferences;

		// Apply default visibility settings from person object if they exist
		if (person?.contactPreferences) {
			if (showAllSocials === false && person.contactPreferences.showAllSocials === 'true') {
				showAllSocials = true;
			}
			if (showAllContacts === false && person.contactPreferences.showAllContacts === 'true') {
				showAllContacts = true;
			}
		}
	}

	// Define all profile links with consistent structure
	const allLinks = [
		// Basic contact
		{
			platform: 'personalPage',
			icon: 'fa-solid fa-globe',
			url: personalPage,
			title: 'Personal Website',
			category: 'basic',
			priority: 1
		},
		{
			platform: 'email',
			icon: 'fa-solid fa-envelope',
			url: mitEmail ? `mailto:${mitEmail}` : email ? `mailto:${email}` : undefined,
			title: mitEmail ? 'MIT Email' : 'Email',
			category: 'basic',
			priority: 2
		},
		{
			platform: 'linkedin',
			icon: 'fa-brands fa-linkedin',
			url: linkedin,
			title: 'LinkedIn',
			category: 'basic',
			priority: 3
		},

		// Social and code
		{
			platform: 'github',
			icon: 'fa-brands fa-github',
			url: github,
			title: 'GitHub',
			category: 'social',
			priority: 4
		},
		{
			platform: 'gitlab',
			icon: 'fa-brands fa-gitlab',
			url: gitlab,
			title: 'GitLab',
			category: 'social',
			priority: 5
		},
		{
			platform: 'twitter',
			icon: 'fa-brands fa-x-twitter',
			url: twitter,
			title: 'Twitter/X',
			category: 'social',
			priority: 6
		},
		{
			platform: 'instagram',
			icon: 'fa-brands fa-instagram',
			url: instagram,
			title: 'Instagram',
			category: 'social',
			priority: 7
		},
		{
			platform: 'medium',
			icon: 'fa-brands fa-medium',
			url: medium,
			title: 'Medium',
			category: 'social',
			priority: 8
		},

		// Academic
		{
			platform: 'googleScholar',
			icon: 'fa-solid fa-graduation-cap',
			url: googleScholar,
			title: 'Google Scholar',
			category: 'academic',
			priority: 9
		},
		{
			platform: 'orcid',
			icon: 'fa-solid fa-id-card',
			url: orcid,
			title: 'ORCID',
			category: 'academic',
			priority: 10
		},
		{
			platform: 'arxiv',
			icon: 'fa-solid fa-file-pdf',
			url: arxiv,
			title: 'arXiv',
			category: 'academic',
			priority: 11
		},
		{
			platform: 'openreview',
			icon: 'fa-solid fa-book-open',
			url: openreview,
			title: 'OpenReview',
			category: 'academic',
			priority: 12
		},

		// Messaging
		{
			platform: 'slack',
			icon: 'fa-brands fa-slack',
			url: slack,
			title: 'Slack',
			category: 'messaging',
			priority: 13
		}
	];

	// Filter links for display based on showAllSocials
	const socialLinks = showAllSocials
		? allLinks.filter(
				(link) => link.url && (link.category === 'basic' || link.category === 'social')
			)
		: allLinks.filter((link) => link.url && link.category === 'basic');

	// Group links by category for the expanded view
	const linksByCategory = {
		messaging: allLinks.filter((link) => link.url && link.category === 'messaging'),
		academic: allLinks.filter((link) => link.url && link.category === 'academic'),
		email: [
			{
				platform: 'email',
				icon: 'fa-solid fa-envelope',
				url: email ? `mailto:${email}` : undefined,
				title: 'Personal Email',
				category: 'email'
			},
			{
				platform: 'mitEmail',
				icon: 'fa-solid fa-graduation-cap',
				url: mitEmail ? `mailto:${mitEmail}` : undefined,
				title: 'MIT Email',
				category: 'email'
			}
		].filter((link) => link.url)
	};

	// Check if there's additional information to show
	const hasAdditionalInfo =
		linksByCategory.messaging.length > 0 ||
		linksByCategory.academic.length > 0 ||
		linksByCategory.email.length > 0 ||
		(showAllSocials === false &&
			allLinks.filter((link) => link.url && link.category === 'social').length > 0);

	// Toggle function for expand button
	function toggleExpandInfo() {
		showAllContacts = !showAllContacts;
		if (!showAllSocials && showAllContacts) {
			showAllSocials = true;
		}
	}

	// Helper function to format link display text
	function formatLinkText(platform: string, value: string): string {
		if (!value) return '';

		if (platform === 'arxiv') {
			return value.startsWith('http') ? value.split('/').pop() || value : value;
		}
		if (platform === 'openreview') {
			return value.includes('?id=') ? value.split('?id=').pop() || value : value.split('/').pop() || value;
		}
		if (platform === 'googleScholar') {
			return value.includes('user=')
				? value.split('user=')[1]?.split('&')[0] || value
				: value.split('/').pop() || value;
		}
		if (value.startsWith('http')) {
			return value.split('/').pop() || value;
		}
		return value;
	}

	// Helper function to format link URL
	function formatLinkUrl(platform: string, value: string): string {
		if (!value) return '';

		if (platform === 'arxiv' && !value.startsWith('http')) {
			return `https://arxiv.org/abs/${value}`;
		}
		return value;
	}
</script>

<div class="flex flex-col basis-full sm:basis-1/2 lg:basis-1/3 mb-8">
	{#if name && imageUrl}
		<div class="flex">
			<img src={imageUrl} alt={name} class="rounded-lg h-24 w-24 object-cover" />
			<div class="flex flex-col ml-4 mr-4">
				<p class="text-2xl font-heading font-[550]">{name}</p>
				<p class="text-sm text-purple-600 dark:text-purple-300">{subtitle || position}</p>

				{#if showSocials}
					<div class="flex flex-wrap gap-2 mt-2">
						{#each socialLinks as link}
							{#if link.url}
								<a
									href={link.url}
									target={link.platform === 'email' ? '' : '_blank'}
									rel={link.platform === 'email' ? '' : 'noopener noreferrer'}
									class="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-300"
									title={link.title}
								>
									<i class={link.icon}></i>
								</a>
							{/if}
						{/each}

						{#if showExpandButton && hasAdditionalInfo}
							<button
								class="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full w-[1.25rem] h-[1.25rem] flex items-center justify-center transition-transform duration-200"
								title="Show more information"
								on:click={toggleExpandInfo}
								style="transform: {showAllContacts ? 'rotate(180deg)' : 'rotate(0deg)'}"
							>
								<i class="fa-solid fa-chevron-down text-xs"></i>
							</button>
						{/if}
					</div>
				{/if}
			</div>
		</div>

		{#if showAllContacts}
			<div
				transition:slide={{ duration: 300, easing: cubicOut }}
				class="mt-4 text-sm bg-white dark:bg-gray-800 p-4 rounded-md border border-purple-600 dark:border-purple-300 shadow-xl z-10 relative overflow-hidden min-w-[280px] max-w-[400px] w-auto"
			>
				<!-- Display each category of links -->
				{#each Object.entries(linksByCategory) as [category, links]}
					{#if links.length > 0}
						<div class="mb-4">
							<p
								class="font-semibold mb-2 text-center text-purple-600 dark:text-purple-300 pb-1 border-b border-purple-600 dark:border-purple-300"
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</p>
							<ul class="text-xs space-y-2">
								{#each links as link}
									<li class="grid grid-cols-[2rem_1fr] items-center">
										<i class={`${link.icon} text-center text-purple-600 dark:text-purple-300`}></i>
										<div class="break-words">
											<span class="font-medium mr-2">{link.title}</span>
											{#if link.platform === 'email' || link.platform === 'mitEmail'}
												{#if link.url}
													<Link href={link.url} className="break-all inline-block">
														{link.url.replace('mailto:', '')}
													</Link>
												{/if}
											{:else if link.url}
												<Link
													href={formatLinkUrl(link.platform, link.url)}
													className="break-all inline-block"
												>
													{formatLinkText(link.platform, link.url)}
												</Link>
											{/if}
										</div>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	{:else}
		<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
			<p class="text-red-500">Error: Missing required data (name and imageUrl)</p>
		</div>
	{/if}
</div>
