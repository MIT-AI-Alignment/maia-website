# MAIA Website Library

This directory contains shared code and data structures used throughout the MAIA website.

## People Data Structure

This directory contains the centralized data structure for managing information about individuals associated with the MAIA website.

## Usage

Import the necessary types and data from `$lib/people.ts`:

```typescript
import { PEOPLE, getPeopleByProject, getPersonProjectRole, type Person } from '$lib/people';
```

## Schema

The `Person` type includes the following fields:

```typescript
type Person = {
  id: string;                  // Unique identifier (kebab-case of name)
  name: string;                // Full name
  position?: string;           // Current position/role
  imageUrl: string;            // Profile picture URL
  
  // Contact information
  email?: string;              // Primary email
  mitEmail?: string;           // MIT email if applicable
  
  // Social media and professional profiles
  github?: string;             // GitHub username or URL
  gitlab?: string;             // GitLab username or URL
  linkedin?: string;           // LinkedIn URL
  personalPage?: string;       // Personal website URL
  twitter?: string;            // Twitter/X handle or URL
  instagram?: string;          // Instagram URL
  medium?: string;             // Medium URL or handle
  
  // Messaging platforms
  slack?: string;              // Slack email or handle
  // Note: Signal is no longer collected
  
  // Academic profiles
  googleScholar?: string;      // Google Scholar profile
  orcid?: string;              // ORCID identifier
  arxiv?: string;              // arXiv identifier
  openreview?: string;         // OpenReview profile
  
  // Project information
  projects?: string[];         // List of project IDs the person is involved with
  projectRoles?: Record<string, string>; // Project-specific roles (projectId -> role)
  projectOrder?: Record<string, number>; // Order in which to display person in project (projectId -> order)
  
  // Display preferences
  contactPreferences?: {       // Control how contact info is displayed
    showAllSocials?: string;   // "true" to show all social media links by default
    showAllContacts?: string;  // "true" to show all contact details by default
  };
  
  // Status information
  isActive?: boolean;          // Whether the person is currently active
  isAdvisor?: boolean;         // Whether the person is an advisor
  isExec?: boolean;            // Whether the person is an executive
  joinDate?: string;           // When they joined MAIA (YYYY-MM format)
};
```

## Helper Functions

The following helper functions are available:

- `getActiveExecs()`: Returns all active executives
- `getInactiveExecs()`: Returns all inactive executives
- `getAdvisors()`: Returns all advisors
- `getPeopleByProject(projectId: string)`: Returns all people involved in a specific project
- `getSortedPeopleByProject(projectId: string)`: Returns all people involved in a specific project, sorted by their `projectOrder`
- `getPersonProjectRole(person: Person, projectId: string)`: Returns a person's role in a specific project

## Examples

### Getting People by Project

```typescript
// Get people involved in the phone line attacks project (unsorted)
const phoneLineTeam = getPeopleByProject('phone-line-attacks');

// Get people involved in the phone line attacks project (sorted by projectOrder)
const sortedPhoneLineTeam = getSortedPeopleByProject('phone-line-attacks');
```

### Displaying Project-Specific Roles

```typescript
<Profile
  personId="john-doe"
  subtitle={getPersonProjectRole(PEOPLE["john-doe"], 'phone-line-attacks')}
/>
```

## Profile Component

The `Profile` component in `src/routes/about/profile.svelte` can be used to display a person's information. It can be used in two ways:

### 1. Using personId (Recommended)

You can simply pass a `personId` to automatically fetch all the person's data from the `PEOPLE` database:

```svelte
<Profile
  personId="gatlen-culp"
  subtitle="Custom subtitle" <!-- Optional: Override the position -->
/>
```

### 2. Using Individual Properties

Alternatively, you can pass individual properties:

```svelte
<Profile
  name={person.name}
  position={person.position}
  subtitle={getPersonProjectRole(person, 'phone-line-attacks')}
  imageUrl={person.imageUrl}
  personalPage={person.personalPage}
  email={person.email}
  linkedin={person.linkedin}
  googleScholar={person.googleScholar}
  github={person.github}
  showAllContacts={true}
  showAllSocials={true}
/>
```

### Display Options

The Profile component accepts the following display options:

- `showSocials`: Whether to show social media links (default: `true`)
- `showAllContacts`: Whether to show all contact information (default: `false`)
- `showAllSocials`: Whether to show all social media links or just the default ones (default: `false`)
- `showExpandButton`: Whether to show an expand/collapse button for additional contact information (default: `false`)

By default, the Profile component displays social icons in the following order: Personal Website, Email (MIT email is prioritized if available), LinkedIn, and Google Scholar. To show additional social media icons (GitHub, GitLab, Twitter, Instagram, Medium), set `showAllSocials` to `true`.

When `showExpandButton` is set to `true`, a visually distinctive purple chevron icon will appear alongside the social icons if the person has additional contact information. Clicking this icon will expand the profile to show all contact details and social links. The expanded content appears in a floating card with a consistent purple color scheme throughout, including section headers, borders, icons, and links.

The dropdown has a minimum width of 280px and can expand up to 400px to accommodate longer content. Text within the dropdown will wrap naturally for better readability, ensuring that even long email addresses or URLs are fully visible. The dropdown also features a smooth roll-down/up animation when opened or closed for a more polished user experience.

**Note:** For email contacts, the component will prioritize displaying MIT email addresses in the social icons. If a person doesn't have an MIT email, their personal email will be shown instead. Academic profile links like Google Scholar, arXiv, and OpenReview are properly formatted to display clean, readable identifiers rather than full URLs.

#### Person-specific Display Preferences

When using the `personId` parameter, the Profile component will automatically apply the person's display preferences defined in their `contactPreferences` field:

```typescript
"john-doe": {
  // ... other fields ...
  contactPreferences: {
    showAllSocials: "true",    // Always show all social media links for this person
    showAllContacts: "true"    // Always show all contact details for this person
  }
}
```

These preferences will be applied automatically when using the `personId` parameter, but can still be overridden by explicitly setting the display options:

```svelte
<!-- Uses John's preferences from the PEOPLE database -->
<Profile personId="john-doe" />

<!-- Overrides John's preferences to hide all contacts -->
<Profile personId="john-doe" showAllContacts={false} />
```

### Example: Displaying Team Members

```svelte
{#each getPeopleByProject('project-id') as person}
  <Profile
    personId={person.id}
    subtitle={getPersonProjectRole(person, 'project-id')}
  />
{/each}
```

### Adding a New Person

To add a new person to the database, add a new entry to the `PEOPLE` object in `people.ts`:

```typescript
"john-doe": {
  id: "john-doe",
  name: "John Doe",
  position: "Project Lead",
  imageUrl: "/images/people/john-doe.jpg",
  email: "johndoe@example.com",
  mitEmail: "johndoe@mit.edu",
  personalPage: "https://johndoe.com",
  linkedin: "https://linkedin.com/in/johndoe",
  googleScholar: "John Doe",
  github: "https://github.com/johndoe",
  twitter: "https://twitter.com/johndoe",
  bio: "John is a researcher focusing on AI safety.",
  projects: ["project-id"],
  projectRoles: {
    "project-id": "Project Lead Developer"
  },
  isActive: true,
  isExec: false,
  isAdvisor: false,
  joinDate: "2023-09",
  contactPreferences: {
    showAllSocials: "true",
    showAllContacts: "true"
  }
}
```

### Project-Specific Roles

For pages that display people in the context of a specific project, you can use the `projectRoles` field and the `getPersonProjectRole` helper function to display their project-specific role instead of their general MAIA position:

```svelte
{#each getPeopleByProject('project-id') as person}
  <Profile
    personId={person.id}
    subtitle={getPersonProjectRole(person, 'project-id')}
  />
{/each}
```

### Controlling Display Order

To control the order in which people are displayed in a project, use the `projectOrder` field:

```typescript
"john-doe": {
  // ... other fields ...
  projects: ["project-id"],
  projectRoles: {
    "project-id": "Project Lead"
  },
  projectOrder: {
    "project-id": 1  // Will be displayed first in this project
  }
},
"jane-smith": {
  // ... other fields ...
  projects: ["project-id"],
  projectRoles: {
    "project-id": "Researcher"
  },
  projectOrder: {
    "project-id": 2  // Will be displayed second in this project
  }
}
```

Then use `getSortedPeopleByProject` to get the people in the correct order:

```svelte
{#each getSortedPeopleByProject('project-id') as person}
  <Profile
    personId={person.id}
    subtitle={getPersonProjectRole(person, 'project-id')}
  />
{/each}
```