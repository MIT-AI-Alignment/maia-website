type BlogPost = {
    title: string;
    date: string;
    author: string;
    summary: string;
    imageUrl?: string;
    tags: string[];
};

export const POSTS: BlogPost[] = [
    {
        title: 'Understanding AI Alignment: A Beginner\'s Guide',
        date: 'March 15, 2024',
        author: 'Jane Smith',
        summary: 'An introduction to the key concepts and challenges in AI alignment, and why it matters for the future of artificial intelligence.',
        imageUrl: '/blog/alignment-intro.jpg',
        tags: ['AI Alignment', 'Introduction', 'Ethics']
    },
    {
        title: 'The Role of Machine Learning in Climate Science',
        date: 'March 12, 2024',
        author: 'David Chen',
        summary: 'How AI and machine learning are helping scientists better understand and predict climate change patterns.',
        imageUrl: '/blog/climate-ml.jpg',
        tags: ['Machine Learning', 'Climate Science', 'Research']
    },
    {
        title: 'Building Ethical AI Systems',
        date: 'March 8, 2024',
        author: 'Maria Rodriguez',
        summary: 'Exploring the principles and practices for developing AI systems that prioritize human values and ethical considerations.',
        imageUrl: '/blog/ethical-ai.jpg',
        tags: ['Ethics', 'AI Development', 'Best Practices']
    },
    {
        title: 'The Future of Human-AI Collaboration',
        date: 'March 5, 2024',
        author: 'Alex Johnson',
        summary: 'Examining how humans and AI can work together effectively while maintaining human agency and control.',
        tags: ['AI Collaboration', 'Future of Work', 'Human Agency']
    },
    {
        title: 'Interpretable Machine Learning',
        date: 'March 1, 2024',
        author: 'Sarah Williams',
        summary: 'Understanding the importance of creating AI systems that can explain their decision-making process.',
        imageUrl: '/blog/interpretable-ml.jpg',
        tags: ['Machine Learning', 'Interpretability', 'Technical']
    }
] as const;