export const userData: User[] = [
    {
        id: 1,
        avatar: '/User1.png',
        messages: [
            {
                id: 1,
                avatar: '/User1.png',
                name: 'Jane Doe',
                message: 'Hey, Jakob',
                timestamp: '10:00 AM',
            },
            {
                id: 2,
                avatar: '/LoggedInUser.jpg',
                name: 'Jakob Hoeg',
                message: 'Hey!',
                timestamp: '10:01 AM',
            },
            {
                id: 3,
                avatar: '/User1.png',
                name: 'Jane Doe',
                message: 'How are you?',
                timestamp: '10:02 AM',
            },
            {
                id: 4,
                avatar: '/LoggedInUser.jpg',
                name: 'Jakob Hoeg',
                message: 'I am good, you?',
                timestamp: '10:03 AM',
            },
            {
                id: 5,
                avatar: '/User1.png',
                name: 'Jane Doe',
                message: 'I am good too!',
                timestamp: '10:04 AM',
            },
            {
                id: 6,
                avatar: '/LoggedInUser.jpg',
                name: 'Jakob Hoeg',
                message: 'That is good to hear!',
                timestamp: '10:05 AM',
            },
            {
                id: 7,
                avatar: '/User1.png',
                name: 'Jane Doe',
                message: 'How has your day been so far?',
                timestamp: '10:06 AM',
            },
            {
                id: 8,
                avatar: '/LoggedInUser.jpg',
                name: 'Jakob Hoeg',
                message: 'It has been good. I went for a run this morning and then had a nice breakfast. How about you?',
                timestamp: '10:10 AM',
            },
            {
                id: 9,
                avatar: '/User1.png',
                name: 'Jane Doe',
                isLoading: true
            }
        ],
        name: 'Jane Doe',
    },
    {
        id: 2,
        avatar: '/User2.png',
        name: 'John Doe',
        messages: []
    },
    {
        id: 3,
        avatar: '/User3.png',
        name: 'Elizabeth Smith',
        messages: []
    },
    {
        id: 4,
        avatar: '/User4.png',
        name: 'John Smith',
        messages: []
    }
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
    id: 5,
    avatar: '/LoggedInUser.jpg',
    name: 'Jakob Hoeg',
};

export type LoggedInUserData = (typeof loggedInUserData);

export interface Message {
    id: number;
    avatar: string;
    name: string;
    message?: string;
    isLoading?: boolean;
    timestamp?: string;
}

export interface User {
    id: number;
    avatar: string;
    messages: Message[];
    name: string;
}