import { StatusEnum } from '../enums/status.interface';
import { ISubmission } from '../models/submissions.interface';

const senders = [
    'john.doe@example.com',
    'jane.smith@example.com',
    'mike.wilson@example.com'
];

const statuses = [
    StatusEnum.InReview,
    StatusEnum.Completed,
    StatusEnum.Uncompleted
];

/* 
    This function generates a random date between today and next week
*/
const getRandomDate = () => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const randomTime = today.getTime() + Math.random() * (nextWeek.getTime() - today.getTime());
    return new Date(randomTime).toISOString().split('T')[0];
};

/*
    This function generates a mock submission array with 50 submissions with random data
*/
export const SUBMISSIONS_MOCK: ISubmission[] = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    from: senders[index % 3],
    to: `recipient${index + 1}@example.com`,
    dueDate: getRandomDate(),
    location: {
        latitude: 43.65415887992029 + ( (Math.random() * 2 - 1) * 0.1), 
        longitude: -79.60416181242202 + ( (Math.random() * 2 - 1) * 0.1),
        address: `${index + 1} Main St, Toronto, ON`
    },
    status: statuses[Math.floor(Math.random() * statuses.length)]
}));

export const SENDERS_MOCK: string[] = senders;