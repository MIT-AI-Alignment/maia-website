// Define the Person type with all possible fields
export type Person = {
	id: string; // Unique identifier (kebab-case of name)
	name: string; // Full name
	position?: string; // Current position/role
	imageUrl: string; // Profile picture URL

	// Contact information
	email?: string; // Primary email
	mitEmail?: string; // MIT email if applicable
	workEmail?: string; // Work email
	spamEmail?: string; // Spam email

	// Social media and professional profiles
	github?: string; // GitHub username or URL
	gitlab?: string; // GitLab username or URL
	linkedin?: string; // LinkedIn URL
	personalPage?: string; // Personal website URL
	twitter?: string; // Twitter/X handle or URL
	facebook?: string; // Facebook URL
	instagram?: string; // Instagram URL
	medium?: string; // Medium URL or handle

	// Messaging platforms
	slack?: string; // Slack email or handle
	discord?: string; // Discord handle
	whatsapp?: string; // WhatsApp phone number
	imessage?: string; // iMessage phone number or email

	// Academic profiles
	googleScholar?: string; // Google Scholar profile
	orcid?: string; // ORCID identifier
	arxiv?: string; // arXiv identifier
	openreview?: string; // OpenReview profile

	// Other information
	phoneNumber?: string; // Phone number
	location?: string; // Location
	bio?: string; // Short biography

	// Contact preferences
	contactPreferences?: Record<string, string>; // Platform -> preference description

	// Project information
	projects?: string[]; // List of project IDs the person is involved with
	projectRoles?: Record<string, string>; // Project-specific roles (projectId -> role)
	projectOrder?: Record<string, number>; // Order in which to display person in project (projectId -> order)

	// Status information
	isActive?: boolean; // Whether the person is currently active
	isAdvisor?: boolean; // Whether the person is an advisor
	isExec?: boolean; // Whether the person is an executive
	isOrg?: boolean; // Whether the person is an organizer
	joinDate?: string; // When they joined MAIA (YYYY-MM format)
};

// Main people database
export const PEOPLE: Record<string, Person> = {
	// Executives
	'ionel-chiosa': {
		id: 'ionel-chiosa',
		name: 'Ionel Chiosa',
		position: 'Director',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07A579UA5D-0d8bc847926d-512',
		mitEmail: 'ichiosa@mit.edu',
		linkedin: 'https://www.linkedin.com/in/ionelchiosa/',
		isExec: true,
		isActive: true
	},
	'ryan-baylon': {
		id: 'ryan-baylon',
		name: 'Ryan Baylon',
		position: 'Operations',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U09C7BJ7X51-g40282930bcd-512',
		mitEmail: 'rfbaylon@gmail.com',
		linkedin: 'https://www.linkedin.com/in/ryan-f-baylon/',
		personalPage: 'https://ryanbaylon.neocities.org',
		isExec: true,
		isActive: true,
	},
	'felix-tudose': {
		id: 'felix-tudose',
		name: 'Felix Tudose',
		position: 'Board Member',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U09DYAN0R24-a041db176925-512',
		isExec: true,
		isActive: true,
	},
	'brianna-adewinmbi': {
		id: 'brianna-adewinmbi',
		name: 'Brianna Adewinmbi',
		position: 'Board Member',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U09FAM14ZFE-7d16a01e5baa-512',
		isExec: true,
		isActive: true,
	},

	// ORGANIZERS 
	'atticus-wang': {
		id: 'atticus-wang',
		name: 'Atticus Wang',
		position: 'Board Member',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U05TF6CE28K-gcaa68241fce-512',
		isExec: false,
		isOrg: true,
		isActive: true,
	},

	// ADVISORS
	'max-tegmark': {
		id: 'max-tegmark',
		name: 'Professor Max Tegmark',
		position: 'Faculty Advisor',
		imageUrl:
			'https://www.vbqspeakers.com/wp-content/uploads/2022/10/Max-Tegmark-Keynote-Speaker.jpg',
		personalPage: 'https://space.mit.edu/home/tegmark/',
		isAdvisor: true,
		isActive: true
	},
	'eleni-shor': {
		id: 'eleni-shor',
		name: 'Eleni Shor',
		position: 'Student Advisor',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U040KLXL7NK-88e0aed77925-192',
		// email: 'eleni.shor@proton.me',
		isExec: false,
		isActive: false,
		isAdvisor: true
	},
	'asher-parker-sartori': {
		id: 'asher-parker-sartori',
		name: 'Asher Parker Sartori',
		position: 'Student Advisor',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U05Q6J86544-7e9e371eb5f6-192',
		// mitEmail: 'aparkersartori@gmail.com',
		isAdvisor: true,
		isActive: true
	},

	// PAST EXECS/ ORGANIZERS
		'daria-ivanova': {
		id: 'daria-ivanova',
		name: 'Daria Ivanova',
		position: 'Deputy Director',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07P4HG9HHD-a4c9c78c57f2-192',
		// mitEmail: 'divanova@mit.edu',
		isExec: false,
		isActive: true
	},
	'sam-prieto-lima': {
		id: 'sam-prieto-lima',
		name: 'Samuel Prieto Lima',
		position: 'Academic Coordinator',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U063WMLHLNT-481134342f1c-512',
		isExec: false,
		isActive: true,
	},
	'kaivu-hariharan': {
		id: 'kaivu-hariharan',
		name: 'Kaivu Hariharan',
		position: '',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U040TKYD3QE-dbf946acd13c-512',
		// mitEmail: 'kaivu@mit.edu',
		isExec: false,
		isActive: true
	},
	'misha-gerovitch': {
		id: 'misha-gerovitch',
		name: 'Misha Gerovitch',
		position: '',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U04BP33K5FF-8efc14b37ea3-192',
		// mitEmail: 'mgerov@mit.edu',
		isExec: false,
		isActive: true
	},
	// 'emre-yavuz': {
	// 	id: 'emre-yavuz',
	// 	name: 'Emre Yavuz',
	// 	position: 'Operations Director; Workshops and Socials Co-Lead',
	// 	imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07SY97CP6V-bb515f01bed7-192',
	// 	email: 'y.emreyavuz@outlook.com.tr',
	// 	isExec: true,
	// 	isActive: true
	// },
	'duru-ozer': {
		id: 'duru-ozer',
		name: 'Duru Ozer',
		position: 'AI Safety Fundamentals Co-Lead; Workshops Co-Lead',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07PXQ78WQZ-4273ee2db04d-192',
		mitEmail: 'duru@mit.edu',
		isExec: false,
		isActive: true
	},
	'gatlen-culp': {
		id: 'gatlen-culp',
		name: 'Gatlen Culp',
		position: 'Board Member',
		imageUrl: '/images/people/gatlen-culp.png',

		// Contact information
		email: 'GatlenCulp@gmail.com',
		mitEmail: 'gculp@mit.edu',

		// Social media and professional profiles
		github: 'https://github.com/GatlenCulp',
		gitlab: 'https://gitlab.com/GatlenCulp',
		linkedin: 'https://www.linkedin.com/in/gatlen-culp/',
		personalPage: 'https://gatlen.notion.site',
		instagram: 'https://www.instagram.com/gatl0n/',
		medium: '@gatlenculp',

		// Messaging platforms
		slack: 'GatlenCulp@gmail.com',

		// Academic profiles
		googleScholar: 'https://scholar.google.com/citations?user=_rnqEboAAAAJ&hl=en',
		orcid: 'https://orcid.org/0000-0001-5704-6251',
		arxiv: 'GatlenCulp',
		openreview: 'https://openreview.net/profile?id=~Gatlen_Culp1',

		// Display preferences
		contactPreferences: {
			showAllSocials: 'false',
			showAllContacts: 'false'
		},

		// Project information
		isExec: false,
		isActive: true,
		projects: ['phone-line-attacks'],
		projectRoles: {
			'phone-line-attacks': 'Phone-line Attacks'
		},
		projectOrder: {
			'phone-line-attacks': 2 // Second in the phone-line attacks project
		}
	},
	'jen-ben-arye': {
		id: 'jen-ben-arye',
		name: 'Jen Ben Arye',
		position: '',
		// mitEmail: 'jen_ben@mit.edu',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07R37ZFM9S-bcc7a7d4a31c-192',
		isExec: false,
		isActive: true
	},
	'tara-rezaei-kheirkhah': {
		id: 'tara-rezaei-kheirkhah',
		name: 'Tara Rezaei Kheirkhah',
		position: '',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U0524UVD1J4-b15bb5cabe16-192',
		// mitEmail: 'tarark@mit.edu',
		isExec: false,
		isActive: true
	},



	// CAIP Exhibition Team Members
	'david-turturean': {
		id: 'david-turturean',
		name: 'David Turturean',
		position: 'Board Member',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07QX294TRR-12923a51bae9-192',

		// Contact information
		// mitEmail: 'davidct@mit.edu',
		isExec: false,
		isActive: true,
		projects: ['phone-line-attacks'],
		projectRoles: {
			'phone-line-attacks': 'Phone-line Attacks - Lead'
		},
		projectOrder: {
			'phone-line-attacks': 1 // First in the phone-line attacks project
		}
	},
	'alek-westover': {
		id: 'alek-westover',
		name: 'Alek Westover',
		position: 'Strategic Deception - Lead',
		imageUrl: '/images/people/alek-westover.jpg',

		// Contact information
		// mitEmail: 'alekw@mit.edu',

		isActive: true,
		projects: ['strategic-deception'],
		projectRoles: {
			'strategic-deception': 'Strategic Deception - Lead'
		},
		projectOrder: {
			'strategic-deception': 1 // First in the strategic deception project
		}
	},
	'alice-blair': {
		id: 'alice-blair',
		name: 'Alice Blair',
		position: 'Strategic Deception',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U06LUEP04FN-c59b408a7d62-512',

		isActive: true,
		projects: ['strategic-deception'],
		projectRoles: {
			'strategic-deception': 'Strategic Deception'
		},
		projectOrder: {
			'strategic-deception': 2 // Second in the strategic deception project
		}
	},
	'riya-tyagi': {
		id: 'riya-tyagi',
		name: 'Riya Tyagi',
		position: 'Board Member',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U07QK7455PB-4d530d106a81-512',
		isExec: false,
		isActive: true,
	},
	'sebastian-prasanna': {
		id: 'sebastian-prasanna',
		name: 'Sebastian Prasanna',
		position: 'Board Member',
		imageUrl: 'https://ca.slack-edge.com/T040KLU5EHM-U083B4BFX5H-ab118c5ba1b8-512',
		linkedin:'https://www.linkedin.com/in/sebastian-prasanna-6b3910301/',
		isExec: false,
		isActive: true,
	},
};

// Helper functions to get filtered lists of people
export const getActiveExecs = () =>
	Object.values(PEOPLE).filter((person) => person.isExec && person.isActive);

export const getInactiveExecs = () =>
	Object.values(PEOPLE).filter((person) => person.isExec && !person.isActive);

export const getAdvisors = () => Object.values(PEOPLE).filter((person) => person.isAdvisor);

export const getOrganizers = () => Object.values(PEOPLE).filter((person) => person.isOrg);

export const getPeopleByProject = (projectId: string) =>
	Object.values(PEOPLE).filter((person) => person.projects?.includes(projectId));

// For backward compatibility with existing code
export const ACTIVE_EXECS = getActiveExecs();
export const TEMP_LEAVE_EXECS = getInactiveExecs();

// Helper function to get a person's role in a specific project
export function getPersonProjectRole(person: Person, projectId: string): string | undefined {
	return person.projectRoles?.[projectId];
}

// Helper function to get a person's contact preference for a platform
export function getContactPreference(person: Person, platform: string): string | undefined {
	return person.contactPreferences?.[platform];
}

// Helper function to get people by project and sort them by their project order
export function getSortedPeopleByProject(projectId: string): Person[] {
	const people = getPeopleByProject(projectId);
	
	// Sort people by their project order (if specified)
	return people.sort((a, b) => {
		const orderA = a.projectOrder?.[projectId] ?? 999; // Default to a high number if not specified
		const orderB = b.projectOrder?.[projectId] ?? 999;
		return orderA - orderB;
	});
}
