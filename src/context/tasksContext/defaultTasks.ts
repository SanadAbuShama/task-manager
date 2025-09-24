import type { Task } from './tasksContext';
import { DEAULT_STATUSES } from "@/context/statusContext/defaultStatuses";

const getRandomStatusId = (): string => {
    const index = Math.floor(Math.random() * DEAULT_STATUSES.length);
    return DEAULT_STATUSES[index]?.id ?? "1";
}

export const DEFAULT_TASKS: Task[] = [
    {
        id: "1",
        title: 'Setup Authentication',
        description: 'Implement user authentication system with JWT tokens',
        status: getRandomStatusId()
    },
    {
        id: "2",
        title: 'Create Dashboard UI',
        description: 'Design and create the main dashboard layout with navigation',
        status: getRandomStatusId()
    },
    {
        id: "3",
        title: 'Implement Task CRUD',
        description: 'Add CRUD operations for task management functionality',
        status: getRandomStatusId()
    },
    {
        id: "4",
        title: 'Setup Email Notifications',
        description: 'Integrate email notifications for task updates and deadlines',
        status: getRandomStatusId()
    },
    {
        id: "5",
        title: 'Mobile Responsiveness',
        description: 'Create responsive design for mobile and tablet devices',
        status: getRandomStatusId()
    },
    {
        id: "6",
        title: 'Write Unit Tests',
        description: 'Write comprehensive unit tests for all components',
        status: getRandomStatusId()
    },
    {
        id: "7",
        title: 'Performance Optimization',
        description: 'Optimize database queries and implement caching strategies',
        status: getRandomStatusId()
    },
    {
        id: "8",
        title: 'Dark Mode Implementation',
        description: 'Add dark mode theme support throughout the application',
        status: getRandomStatusId()
    },
    {
        id: "9",
        title: 'File Upload Feature',
        description: 'Implement file upload functionality for task attachments',
        status: getRandomStatusId()
    },
    {
        id: "10",
        title: 'API Documentation',
        description: 'Create API documentation using Swagger/OpenAPI',
        status: getRandomStatusId()
    }
];


