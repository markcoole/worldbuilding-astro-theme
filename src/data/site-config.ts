import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Mark'
    },
    title: 'The Journal',
    subtitle: 'A small corner of the web for stories and poems',
    description: 'A quiet space for fiction, poetry, and thoughtful reflections on the stories that shape the fantasy genre.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'The Journal'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Fiction',
            href: '/fiction'
        },
        {
            text: 'Poetry',
            href: '/poetry'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Privacy',
            href: '/privacy'
        },
        {
            text: 'Copyright',
            href: '/copyright'
        }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        // {
        //     text: 'Instagram',
        //     href: 'https://instagram.com/'
        // },
        // {
        //     text: 'X/Twitter',
        //     href: 'https://twitter.com/'
        // }
    ],
    hero: {
        title: 'The Journal',
        text: "A small collection of fiction and poetry, written in moments of focus and instinct.\n\nSome are polished, some are raw, all of them are part of the same ongoing exploration.\n\nEach piece is its own little world.\n\nFeel free to wander.",
        // image: {
        //     src: quil,
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to The Journal Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8
};

export default siteConfig;
