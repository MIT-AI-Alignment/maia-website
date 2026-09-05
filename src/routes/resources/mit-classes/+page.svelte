<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import ExpandableCard from '../../../components/ExpandableCard.svelte';

	type Course = {
		number: string;
		title: string;
		note: string;
		prereqs?: string;
		description: string;
		link: string;
	};

	const foundationalClasses: Course[] = [
		{
			number: '18.06',
			title: 'Linear Algebra',
			note: 'Undergrad · Spring · 4-0-8 units',
			prereqs: 'Calculus II (GIR)',
			description:
				'Basic subject on matrix theory and linear algebra, emphasizing topics useful in other disciplines, including systems of equations, vector spaces, determinants, eigenvalues, singular value decomposition, and positive definite matrices. Applications to least-squares approximations, stability of differential equations, networks, Fourier transforms, and Markov processes. Uses linear algebra software.',
			link: 'https://catalog.mit.edu/search/?P=18.06'
		},
		{
			number: '18.C06',
			title: 'Linear Algebra and Optimization',
			note: 'Undergrad · Fall · 5-0-7 units',
			prereqs: 'Calculus II (GIR)',
			description:
				'Introductory course in linear algebra and optimization, assuming no prior exposure to linear algebra and starting from the basics, including vectors, matrices, eigenvalues, singular values, and least squares. Covers the basics in optimization including convex optimization, linear/quadratic programming, gradient descent, and regularization, building on insights from linear algebra. Offered in the fall as an alternative to 18.06 (which now runs in the spring); credit cannot be received for both.',
			link: 'https://catalog.mit.edu/search/?P=18.C06'
		},
		{
			number: '18.05',
			title: 'Introduction to Probability and Statistics',
			note: 'Undergrad · Spring · 4-0-8 units',
			prereqs: 'Calculus II (GIR)',
			description:
				'A unified introduction to probability, Bayesian inference, and frequentist statistics. Topics include: combinatorics, random variables, (joint) distributions, covariance, central limit theorem; Bayesian updating, odds, posterior prediction; significance tests, confidence intervals, bootstrapping, regression. Students also develop computational skills and statistical thinking by using R to simulate, analyze, and visualize data.',
			link: 'https://catalog.mit.edu/search/?P=18.05'
		},
		{
			number: '18.600',
			title: 'Probability and Random Variables',
			note: 'Undergrad · Fall, Spring · 4-0-8 units',
			prereqs: 'Calculus II (GIR)',
			description:
				'Probability spaces, random variables, distribution functions. Binomial, geometric, hypergeometric, Poisson distributions. Uniform, exponential, normal, gamma and beta distributions. Conditional probability, Bayes theorem, joint distributions. Chebyshev inequality, law of large numbers, and central limit theorem.',
			link: 'https://catalog.mit.edu/search/?P=18.600'
		}
	];

	const mlClasses: Course[] = [
		{
			number: '6.3900',
			title: 'Introduction to Machine Learning',
			note: 'Undergrad · Fall, Spring · 4-0-8 units',
			prereqs: '(6.1000 or 6.1210) and (18.03 or 18.06)',
			description:
				'Introduction to the principles and algorithms of machine learning from an optimization perspective. Topics include linear and non-linear models for supervised, unsupervised, and reinforcement learning, with a focus on gradient-based methods and neural-network architectures. Previous experience with algorithms may be helpful.',
			link: 'https://catalog.mit.edu/search/?P=6.3900'
		},
		{
			number: '6.7960',
			title: 'Deep Learning',
			note: 'Grad · Fall · 3-0-9 units',
			prereqs: '18.05 and (6.3720, 6.3900, or 6.C01)',
			description:
				'Fundamentals of deep learning, including both theory and applications. Topics include neural net architectures (MLPs, CNNs, RNNs, graph nets, transformers), geometry and invariances in deep learning, backpropagation and automatic differentiation, learning theory and generalization in high-dimensions, and applications to computer vision, natural language processing, and robotics.',
			link: 'https://catalog.mit.edu/search/?P=6.7960'
		},
		{
			number: '6.7900',
			title: 'Machine Learning ("Grad ML")',
			note: 'Grad · Fall · 3-0-9 units',
			prereqs: '18.06 and (6.3700, 6.3800, or 18.600); 6.3900 or other ML experience recommended',
			description:
				'Principles, techniques, and algorithms in machine learning from the point of view of statistical inference; representation, generalization, and model selection; and methods such as linear/additive models, active learning, boosting, support vector machines, non-parametric Bayesian methods, hidden Markov models, Bayesian networks, and convolutional and recurrent neural networks.',
			link: 'https://catalog.mit.edu/search/?P=6.7900'
		},
		{
			number: '6.7920',
			title: 'Reinforcement Learning: Foundations and Methods',
			note: 'Grad · Fall · 4-0-8 units',
			prereqs: '6.3700 or permission of instructor; mathematical maturity is necessary',
			description:
				'Examines reinforcement learning (RL) as a methodology for approximately solving sequential decision-making under uncertainty, with foundations in optimal control and machine learning. Core topics include: dynamic programming, finite and infinite horizon Markov Decision Processes, value and policy iteration, Monte Carlo methods, temporal differences, Q-learning, stochastic approximation, and bandits. Also covers approximate dynamic programming, including value-based methods and policy space methods. Focus is mathematical, but is supplemented with computational exercises.',
			link: 'https://catalog.mit.edu/search/?P=6.7920'
		}
	];

	const aiSafetyClasses: Course[] = [
		{
			number: 'Harvard CS 2881r',
			title: 'AI Safety',
			note: 'Grad seminar · Fall 2026 · Taught by Boaz Barak',
			prereqs:
				'Comfort with proofs, probability, and information theory; undergraduate ML (e.g., 6.3900); Python experience training neural networks',
			description:
				'A graduate course on technical and societal AI safety, with lectures, readings, and a group experiment. In-person attendance is required; see the course page for admission requirements.',
			link: 'https://boazbk.github.io/mltheoryseminar/'
		}
	];

	type ClassGroup = {
		title: string;
		note?: string;
		classes: Course[];
	};

	// New recommendations checked against MIT's 2026–27 catalog, September 2026.
	const programming: Course = {
		number: '6.100A',
		title: 'Introduction to Computer Science Programming in Python',
		note: 'Undergrad · Fall, Spring · 6 units',
		prereqs: 'None',
		description:
			'Build a programming foundation through Python, algorithms, testing, and debugging.',
		link: 'https://catalog.mit.edu/search/?P=6.100A'
	};
	const calculus: Course = {
		number: '18.02',
		title: 'Calculus (multivariable)',
		note: 'Undergrad · Fall, Spring · 12 units',
		prereqs: 'Calculus I (GIR)',
		description:
			'Study partial derivatives, gradients, optimization, and multiple integrals—the mathematical tools used throughout machine learning.',
		link: 'https://catalog.mit.edu/search/?P=18.02'
	};
	const probability: Course = {
		number: '6.3700',
		title: 'Introduction to Probability',
		note: 'Undergrad · Fall, Spring · 12 units',
		prereqs: 'Calculus II (GIR)',
		description:
			'Learn probabilistic modeling, inference, and random processes. Credit cannot also be received for 18.600.',
		link: 'https://catalog.mit.edu/search/?P=6.3700'
	};
	const languageModels: Course = {
		number: '6.4610',
		title: 'Natural Language Processing',
		note: 'Undergrad · Fall · 15 units',
		prereqs: '6.3900, (6.3700 or 6.3800), and (18.06 or 18.C06)',
		description: 'Study statistical and neural language models, with a substantial final project.',
		link: 'https://catalog.mit.edu/search/?P=6.4610'
	};
	const ethicsClasses: Course[] = [
		{
			number: '6.C40 / 24.C40',
			title: 'Ethics of Computing',
			note: 'Undergrad · Fall · 12 units',
			prereqs: 'None',
			description:
				'Examine AI alignment, existential risk, privacy, fairness, and the ethical choices involved in building computing systems.',
			link: 'https://computing.mit.edu/cross-cutting/common-ground-for-computing-education/common-ground-subjects/c40-ethics-of-computing/'
		},
		{
			number: '6.3950',
			title: 'AI, Decision Making, and Society',
			note: 'Undergrad · Fall · 12 units',
			prereqs: 'None; corequisite: 6.1200, 6.3700, 6.3800, 18.05, or 18.600',
			description:
				'Examine how data-driven decisions affect society, including feedback loops and unintended consequences.',
			link: 'https://catalog.mit.edu/search/?P=6.3950'
		}
	];

	// Harvard SEAS 2026–27 listings; teaching page used for CS 2680 prerequisites.
	const harvardTechnical: Course[] = [
		{
			number: 'Harvard CS 1810',
			title: 'Machine Learning',
			note: 'Spring 2027 · Finale Doshi-Velez',
			prereqs:
				'Multivariable calculus, linear algebra, probability, complexity theory, and Python programming',
			description:
				'A probabilistic introduction to supervised and unsupervised learning, neural networks, and inference.',
			link: 'https://my.harvard.edu/?hq=148156'
		},
		{
			number: 'Harvard CS 1840',
			title: 'Introduction to Reinforcement Learning',
			note: 'Fall 2026 · Kiante Brantley',
			description:
				'Study how agents learn through interaction, including reinforcement-learning problem formulations, algorithms, and theory.',
			link: 'https://my.harvard.edu/?hq=220124'
		},
		{
			number: 'Harvard CS 2680',
			title: 'Modern AI Systems: Agents and Systems Optimization',
			note: 'Fall 2026 · Juncheng Yang',
			prereqs:
				'At least one of Harvard CS 61, CS 1610, or CS 2620; proficiency in Python and PyTorch',
			description:
				'Build and evaluate AI agents, then examine serving, caching, quantization, and other systems-level performance trade-offs.',
			link: 'https://juncheng.seas.harvard.edu/teaching'
		},
		{
			number: 'Harvard CS 2822R',
			title: 'Topics in Machine Learning: Effective AI Support in Human+AI Settings',
			note: 'Fall 2026 · Finale Doshi-Velez',
			description:
				'Investigate whether AI systems improve human outcomes through readings, discussion, and a semester-long project.',
			link: 'https://my.harvard.edu/?hq=156936'
		}
	];
	const harvardEthics: Course[] = [
		{
			number: 'Harvard CS 1050',
			title: 'Privacy and Technology',
			note: 'Fall 2026 · Jim Waldo',
			prereqs: 'The course listing describes it as accessible to students across disciplines',
			description:
				'Examine privacy, surveillance, database anonymity, and the policy and ethical questions raised by technology.',
			link: 'https://my.harvard.edu/?hq=125407'
		},
		{
			number: 'Harvard CS 1261',
			title: 'Privacy, Fairness, and Validity Through the Lens of Theoretical CS',
			note: 'Spring 2027 · Cynthia Dwork',
			description:
				'Explore mathematical foundations of algorithmic fairness, differential privacy, and statistical validity.',
			link: 'https://my.harvard.edu/?hq=226548'
		}
	];

	const groups: ClassGroup[] = [
		{ title: 'Programming', classes: [programming] },
		{ title: 'Multivariable calculus', classes: [calculus] },
		{
			title: 'Linear algebra and optimization',
			note: 'Choose an appropriate route, not both: 18.06 and 18.C06 are alternatives and cannot both receive credit.',
			classes: foundationalClasses.slice(0, 2)
		},
		{
			title: 'Probability and statistics',
			note: 'These are alternative foundations, not a required sequence. In particular, 6.3700 and 18.600 cannot both receive credit.',
			classes: [...foundationalClasses.slice(2), probability]
		},
		{
			title: 'Machine learning, deep learning, and language models',
			classes: [...mlClasses, languageModels, ...harvardTechnical]
		},
		{ title: 'Ethics and societal impacts', classes: [...ethicsClasses, ...harvardEthics] },
		{
			title: 'AI Safety Classes',
			note: 'Check Harvard course admission requirements and MIT cross-registration rules before applying.',
			classes: aiSafetyClasses
		}
	];
</script>

<PageLayout
	title="MIT & Harvard Classes"
	description="MIT and Harvard classes relevant to AI safety."
	heroIcon="fas fa-chalkboard-teacher"
	heroTitle="MIT & Harvard Classes"
	centerTitle={true}
>
	<SectionContainer title="Classes" icon="fas fa-chalkboard-teacher">
		<p class="mb-6">
			Use these subjects to build the skills relevant to the work you want to do. You do not need to
			take every course: choose suitable foundations, then explore technical research or ethics and
			policy. Advanced coursework is not a prerequisite for joining MAIA.
		</p>
		<p class="text-sm mb-6">
			MIT recommendations follow the 2026–27 catalog. Harvard terms follow its
			<a href="https://seas.harvard.edu/computer-science/courses"
				>Fall 2026 and Spring 2027 listings</a
			>, checked September 5, 2026. Check current course pages for prerequisites, schedules, and
			enrollment restrictions.
		</p>
		<p class="text-sm mb-6">
			MIT first-year undergraduates cannot cross-register at Harvard. Eligible students need
			instructor, Harvard registrar, and MIT advisor approval; a listing here does not guarantee a
			place. See <a
				href="https://registrar.mit.edu/registration-academics/registration-information/cross-registration/harvard"
				>MIT’s Harvard cross-registration guidance</a
			>.
		</p>
		{#each groups as group}
			<h3 class="text-xl font-heading font-[550] mt-8 mb-4">{group.title}</h3>
			{#if group.note}
				<p class="text-sm text-maia-600 dark:text-maia-400 -mt-2 mb-4">{group.note}</p>
			{/if}
			<div class="not-prose flex flex-col gap-4">
				{#each group.classes as course}
					<ExpandableCard>
						<svelte:fragment slot="summary">
							<span class="font-semibold">{course.number}</span>
							<span class="text-maia-600 dark:text-maia-400">{course.title}</span>
						</svelte:fragment>
						<p class="text-sm text-maia-600 dark:text-maia-400 mb-2">
							{course.note}
						</p>
						<p class="text-sm mb-3">{course.description}</p>
						{#if course.prereqs}<p class="text-sm text-maia-600 dark:text-maia-400 mb-3">
								<span class="font-semibold">Prerequisites:</span>
								{course.prereqs}
							</p>{/if}
						<a
							href={course.link}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-maia-600 dark:text-maia-400 underline hover:no-underline"
						>
							Course page <i class="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
						</a>
					</ExpandableCard>
				{/each}
			</div>
		{/each}
	</SectionContainer>
</PageLayout>
