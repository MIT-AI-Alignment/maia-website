const IMAGE_ROOT = '/images/papers';

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
        title: '[DEMO] Understanding AI Alignment: A Beginner\'s Guide',
        date: 'March 15, 2024',
        author: 'Example Author',
        summary: 'A sample blog post demonstrating how an introduction to AI alignment might be structured. This is demonstration content only.',
        imageUrl: `${IMAGE_ROOT}/paper1.png`,
        tags: ['AI Alignment', 'Introduction', 'Ethics']
    },
    {
        title: '[DEMO] The Role of Machine Learning in Climate Science',
        date: 'March 12, 2024',
        author: 'Demo Writer',
        summary: 'An example article showing how a discussion about AI and climate science might be presented. This is demonstration content only.',
        imageUrl: `${IMAGE_ROOT}/paper2.png`,
        tags: ['Machine Learning', 'Climate Science', 'Research']
    },
    {
        title: '[DEMO] Building Ethical AI Systems',
        date: 'March 8, 2024',
        author: 'Sample Name',
        summary: 'A demonstration post about ethical AI development. This is example content created for layout purposes only.',
        imageUrl: `${IMAGE_ROOT}/paper3.png`,
        tags: ['Ethics', 'AI Development', 'Best Practices']
    },
    {
        title: '[DEMO] The Future of Human-AI Collaboration',
        date: 'March 5, 2024',
        author: 'Test Author',
        summary: 'Sample content exploring human-AI collaboration concepts. This is demonstration content only.',
        imageUrl: `${IMAGE_ROOT}/explore-establish-exploit.png`,
        tags: ['AI Collaboration', 'Future of Work', 'Human Agency']
    },
    {
        title: '[DEMO] Interpretable Machine Learning',
        date: 'March 1, 2024',
        author: 'Demo Account',
        summary: 'An example post about interpretable ML concepts. This is demonstration content created for layout purposes only.',
        imageUrl: `${IMAGE_ROOT}/paper4.png`,
        tags: ['Machine Learning', 'Interpretability', 'Technical']
    }
] as const;