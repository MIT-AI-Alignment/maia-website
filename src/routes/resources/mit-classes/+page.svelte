<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import ExpandableCard from '../../../components/ExpandableCard.svelte';

	type Course = {
		number: string;
		title: string;
		note: string;
		prereqs: string;
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
			note: 'Grad seminar · Fall · Taught by Boaz Barak',
			prereqs:
				'Comfort with proofs, probability, and information theory; undergraduate ML (e.g., 6.3900); Python experience training neural networks',
			description:
				'A graduate seminar on challenges in the alignment and safety of artificial intelligence, covering both technical questions and broader societal impacts of AI. Combines lectures, readings, and homework spanning theoretical and practical perspectives on AI safety.',
			link: 'https://boazbk.github.io/mltheoryseminar/'
		}
	];

	type ClassGroup = {
		title: string;
		note?: string;
		classes: Course[];
	};

	const groups: ClassGroup[] = [
		{ title: 'Foundational Classes', classes: foundationalClasses },
		{ title: 'ML Classes', classes: mlClasses },
		{
			title: 'AI Safety Classes',
			note: 'MIT students can take Harvard classes like this one for credit through cross-registration.',
			classes: aiSafetyClasses
		}
	];
</script>

<PageLayout
	title="MIT Classes"
	description="MIT classes relevant to AI safety."
	heroIcon="fas fa-chalkboard-teacher"
	heroTitle="Relevant MIT Classes"
	centerTitle={true}
>
	<SectionContainer title="Classes" icon="fas fa-chalkboard-teacher">
		<p class="mb-6">
			Classes are a great way to build a technical foundation for AI safety work, but advanced coursework is by no means a hard prerequisite for making an impact. Because AI safety is a young field, being smart, perseverant, and quick to pick up new ideas often matters more than formal training. Many MAIA members have gone on to do impactful work at places like Redwood Research with relatively little ML background. That said, while you're at MIT, we think taking advantage of these classes is well worth it!
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
						<p class="text-xs uppercase tracking-wide text-maia-600 dark:text-maia-400 mb-2">
							{course.note}
						</p>
						<p class="text-sm mb-3">{course.description}</p>
						<p class="text-sm text-maia-600 dark:text-maia-400 mb-3">
							<span class="font-semibold">Prerequisites:</span>
							{course.prereqs}
						</p>
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
