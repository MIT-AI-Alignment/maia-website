<script lang="ts">
	import Profile from './profile.svelte';
	import ExpandableCard from '../../components/ExpandableCard.svelte';
	import { getOrganizers } from '$lib/people';

	const orgs = getOrganizers().filter((person) => !person.imageUrl.startsWith('data:image/svg+xml'));

	// Source: MAIA Constitution V0, organizational structure by semester (tab t.t1nl8qzfwqno).
	const pastTeams = [
		{
			semester: 'Spring 2026',
			leadershipTitle: 'Executive board',
			leadership: [
				{ name: 'Ionel Chiosa', role: 'Director' },
				{ name: 'Felix Tudose', role: 'Deputy Director' },
				{ name: 'Ionut Gabriel Stan', role: 'Exec Board Member' },
				{ name: 'Jurgis Kemeklis', role: 'Exec Board Member' },
				{ name: 'Anna Krolik', role: 'Exec Board Member' },
				{ name: 'Nixon Hanna', role: 'Exec Board Member' },
				{ name: 'Ryan Baylon', role: 'Exec Board Member' }
			],
			organizers: [
				'Anooshka Pendyal', 'Daniel Wu', 'David Turturean', 'David Zhang',
				'Elliott Slaughter', 'Emily Yu', 'Gatlen Culp', 'Jacob Brinton',
				'Neha Muramalla', 'Nikhil Vemuri', 'Reshma Kosaraju', 'Talha Ashraf',
				'Zsófia Keresztély'
			],
			note: 'The organizer list may be incomplete.'
		},
		// Spring '23 Member Handbook: 1GYxauVYyONTP28e5p1l0i5BajzFxdfkDaDy7eL6bpyY.
		{
			semester: 'Spring 2023',
			leadershipTitle: 'Leadership and advising',
			leadership: [
				{ name: 'Alexandra Bates', role: 'Co-Director' },
				{ name: 'Kaivu Hariharan', role: 'Co-Director' },
				{ name: 'Eleni Shor', role: 'Co-Director' },
				{ name: 'Eric Gan', role: 'Governance Director' },
				{ name: 'Shreya Mogulothu', role: 'Events Director' },
				{ name: 'Uzay Girit', role: 'Outreach Director' },
				{ name: 'Jiahai Feng', role: 'Workshops Director' },
				{ name: 'Ben Wright', role: 'Curriculum Director' },
				{ name: 'Gatlen Culp', role: 'Operations Director' },
				{ name: 'Julian Yocum', role: 'Research Director' },
				{ name: 'Kuhan Jeyapragasan', role: 'CBAI Advisor' }
			],
			organizers: [],
			note: 'Leadership recorded in the Spring 2023 member handbook. A complete organizer roster has not yet been confirmed.'
		}
	];
</script>

<p class="text-sm text-gray-600 dark:text-gray-400">Fall 2026</p>
<div class="flex my-6 flex-wrap">
	{#each orgs as org}
		<Profile personId={org.id} showSocials={true} showExpandButton={true} />
	{/each}
</div>

<div id="past-teams" class="not-prose scroll-mt-28 mt-10">
	<h3 class="text-xl font-semibold mb-4">Past teams</h3>
	<div class="space-y-3">
		{#each pastTeams as team}
			<ExpandableCard>
				<svelte:fragment slot="summary">
					<span class="font-semibold">{team.semester}</span>
				</svelte:fragment>
				<div class="grid gap-8 {team.organizers.length ? 'md:grid-cols-2' : ''}">
					<div>
						<h4 class="font-semibold mb-3">{team.leadershipTitle}</h4>
						<ul class="grid gap-3 {team.organizers.length ? '' : 'sm:grid-cols-2'}">
							{#each team.leadership as person}
								<li>
									<span class="block">{person.name}</span>
									<span class="text-sm text-gray-600 dark:text-gray-400">{person.role}</span>
								</li>
							{/each}
						</ul>
					</div>
					{#if team.organizers.length > 0}
					<div>
						<h4 class="font-semibold mb-3">Organizers</h4>
						<ul class="space-y-2">
							{#each team.organizers as name}
								<li>{name}</li>
							{/each}
						</ul>
					</div>
					{/if}
				</div>
				<p class="text-sm text-gray-600 dark:text-gray-400 mt-5">{team.note}</p>
			</ExpandableCard>
		{/each}
	</div>
	<p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
		Earlier semester rosters will be added as they are confirmed.
	</p>
</div>
