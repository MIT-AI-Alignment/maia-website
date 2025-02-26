<script lang="ts">
    import { PEOPLE, type Person } from '$lib/people';
    
    // Allow passing either a personId or individual properties
    export let personId: string | undefined = undefined;
    export let name: string | undefined = undefined;
    export let position: string | undefined = undefined;
    export let subtitle: string | undefined = undefined;
    export let imageUrl: string | undefined = undefined;
    
    // Basic contact info
    export let email: string | undefined = undefined;
    export let mitEmail: string | undefined = undefined;
    
    // Social media and professional profiles
    export let github: string | undefined = undefined;
    export let gitlab: string | undefined = undefined;
    export let linkedin: string | undefined = undefined;
    export let personalPage: string | undefined = undefined;
    export let twitter: string | undefined = undefined;
    export let instagram: string | undefined = undefined;
    export let medium: string | undefined = undefined;
    
    // Messaging platforms
    export let slack: string | undefined = undefined;
    export let signal: string | undefined = undefined; // Kept for backward compatibility but not used
    
    // Academic profiles
    export let googleScholar: string | undefined = undefined;
    export let orcid: string | undefined = undefined;
    export let arxiv: string | undefined = undefined;
    export let openreview: string | undefined = undefined;
    
    // Contact preferences
    export let contactPreferences: Record<string, string> | undefined = undefined;
    
    // Display options - these can be overridden by props
    export let showSocials = true; // Default to showing social icons
    export let showAllContacts = false;
    export let showAllSocials = false; // New option to show all social links
    
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
        // signal is no longer used
        googleScholar = googleScholar || person?.googleScholar;
        orcid = orcid || person?.orcid;
        arxiv = arxiv || person?.arxiv;
        openreview = openreview || person?.openreview;
        contactPreferences = contactPreferences || person?.contactPreferences;
        
        // Apply default visibility settings from person object if they exist
        // Only apply if the props weren't explicitly set (still undefined)
        if (person?.contactPreferences) {
            // Check if showAllSocials was not explicitly set
            if (showAllSocials === false && person.contactPreferences.showAllSocials === 'true') {
                showAllSocials = true;
            }
            
            // Check if showAllContacts was not explicitly set
            if (showAllContacts === false && person.contactPreferences.showAllContacts === 'true') {
                showAllContacts = true;
            }
        }
    }
    
    // Group social media links for display
    const socialLinks = showAllSocials ? [
        // Ordered: Website, Email (MIT preferred), LinkedIn, Google Scholar, GitHub, then others
        { platform: 'personalPage', icon: 'fa-solid fa-globe', url: personalPage, title: 'Personal Website' },
        { platform: 'email', icon: 'fa-solid fa-envelope', url: mitEmail ? `mailto:${mitEmail}` : (email ? `mailto:${email}` : undefined), title: mitEmail ? 'MIT Email' : 'Email' },
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin', url: linkedin, title: 'LinkedIn' },
        { platform: 'googleScholar', icon: 'fa-solid fa-graduation-cap', url: googleScholar, title: 'Google Scholar' },
        { platform: 'github', icon: 'fa-brands fa-github', url: github, title: 'GitHub' },
        { platform: 'gitlab', icon: 'fa-brands fa-gitlab', url: gitlab, title: 'GitLab' },
        { platform: 'twitter', icon: 'fa-brands fa-x-twitter', url: twitter, title: 'Twitter/X' },
        { platform: 'instagram', icon: 'fa-brands fa-instagram', url: instagram, title: 'Instagram' },
        { platform: 'medium', icon: 'fa-brands fa-medium', url: medium, title: 'Medium' }
    ] : [
        // Ordered: Website, Email (MIT preferred), LinkedIn, Google Scholar
        { platform: 'personalPage', icon: 'fa-solid fa-globe', url: personalPage, title: 'Personal Website' },
        { platform: 'email', icon: 'fa-solid fa-envelope', url: mitEmail ? `mailto:${mitEmail}` : (email ? `mailto:${email}` : undefined), title: mitEmail ? 'MIT Email' : 'Email' },
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin', url: linkedin, title: 'LinkedIn' },
        { platform: 'googleScholar', icon: 'fa-solid fa-graduation-cap', url: googleScholar, title: 'Google Scholar' }
    ];
    
    // Group messaging platforms
    const messagingPlatforms = [
        { platform: 'slack', icon: 'fa-brands fa-slack', value: slack, title: 'Slack' }
        // Signal removed from here
    ];
    
    // Group email addresses
    const emailAddresses = [
        { platform: 'email', icon: 'fa-solid fa-envelope', value: email, title: 'Personal Email' },
        { platform: 'mitEmail', icon: 'fa-solid fa-graduation-cap', value: mitEmail, title: 'MIT Email' }
    ];
    
    // Group academic profiles
    const academicProfiles = [
        { platform: 'googleScholar', icon: 'fa-solid fa-graduation-cap', value: googleScholar, title: 'Google Scholar' },
        { platform: 'orcid', icon: 'fa-solid fa-id-card', value: orcid, title: 'ORCID' },
        { platform: 'arxiv', icon: 'fa-solid fa-file-pdf', value: arxiv, title: 'arXiv' },
        { platform: 'openreview', icon: 'fa-solid fa-book-open', value: openreview, title: 'OpenReview' }
    ];
</script>

<div class="flex flex-col basis-full sm:basis-1/2 lg:basis-1/3 mb-8">
    {#if name && imageUrl}
        <div class="flex">
            <img src={imageUrl} alt={name} class="rounded-lg h-24 w-24 object-cover">
            <div class="flex flex-col ml-4 mr-4">
                <p class="text-2xl font-heading font-[550]">{name}</p>
                {#if subtitle}
                    <p class="text-sm text-purple-600 dark:text-purple-300">{subtitle}</p>
                {:else if position}
                    <p class="text-sm text-purple-600 dark:text-purple-300">{position}</p>
                {/if}
                
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
                    </div>
                {/if}
            </div>
        </div>
        
        {#if showAllContacts}
            <div class="mt-4 text-sm">
                <!-- Messaging Platforms -->
                {#if messagingPlatforms.some(p => p.value)}
                    <div class="mb-3">
                        <p class="font-semibold mb-1">Messaging:</p>
                        <ul class="text-xs space-y-1">
                            {#each messagingPlatforms as platform}
                                {#if platform.value}
                                    <li class="flex items-center">
                                        <i class={`${platform.icon} w-5 text-center mr-2`}></i>
                                        <span class="font-medium mr-2">{platform.title}:</span> 
                                        <span>{platform.value}</span>
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </div>
                {/if}
                
                <!-- Email Addresses -->
                {#if emailAddresses.some(e => e.value)}
                    <div class="mb-3">
                        <p class="font-semibold mb-1">Email:</p>
                        <ul class="text-xs space-y-1">
                            {#each emailAddresses as email}
                                {#if email.value}
                                    <li class="flex items-center">
                                        <i class={`${email.icon} w-5 text-center mr-2`}></i>
                                        <span class="font-medium mr-2">{email.title}:</span>
                                        <a href="mailto:{email.value}" class="text-blue-600 dark:text-blue-400 hover:underline">{email.value}</a>
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </div>
                {/if}
                
                <!-- Academic Profiles -->
                {#if academicProfiles.some(p => p.value)}
                    <div class="mb-3">
                        <p class="font-semibold mb-1">Academic:</p>
                        <ul class="text-xs space-y-1">
                            {#each academicProfiles as profile}
                                {#if profile.value}
                                    <li class="flex items-center">
                                        <i class={`${profile.icon} w-5 text-center mr-2`}></i>
                                        <span class="font-medium mr-2">{profile.title}:</span>
                                        {#if profile.value.startsWith('http')}
                                            <a href={profile.value} target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">{profile.value.split('/').pop()}</a>
                                        {:else}
                                            <span>{profile.value}</span>
                                        {/if}
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        {/if}
    {:else}
        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p class="text-red-500">Error: Missing required data (name and imageUrl)</p>
        </div>
    {/if}
</div>