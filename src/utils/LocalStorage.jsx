const employees = [
    {
        id: 1,
        firstName: "Ali",
        email: "ali@example.com",
        password: "123",

        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Fix Login Bug",
                taskDescription: "Resolve authentication issue on the login page.",
                taskDate: "2026-07-10",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Documentation",
                taskDescription: "Update API documentation.",
                taskDate: "2026-07-08",
                category: "Documentation"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review frontend pull requests.",
                taskDate: "2026-07-11",
                category: "Review"
            }
        ]
    },

    {
        id: 2,
        firstName: "Sara",
        email: "sara.ahmed@example.com",
        password: "123",

        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Dashboard",
                "taskDescription": "Create a responsive admin dashboard UI.",
                "taskDate": "2026-07-10",
                "category": "UI/UX"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Icons",
                "taskDescription": "Replace old icons with the latest icon pack.",
                "taskDate": "2026-07-07",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Landing Page Banner",
                "taskDescription": "Create promotional banner for the landing page.",
                "taskDate": "2026-07-05",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize Images",
                "taskDescription": "Compress images without quality loss.",
                "taskDate": "2026-07-12",
                "category": "Optimization"
            }
        ]
    },

    {
        id: 3,
        firstName: "Usman",
        email: "usman.sheikh@example.com",
        password: "123",

        taskCount: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Setup Database",
                "taskDescription": "Configure MongoDB collections and indexes.",
                "taskDate": "2026-07-09",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Backup Database",
                "taskDescription": "Create a weekly backup of the production database.",
                "taskDate": "2026-07-13",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Schema",
                "taskDescription": "Design employee and task schemas.",
                "taskDate": "2026-07-06",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Migration",
                "taskDescription": "Migrate old user records to the new schema.",
                "taskDate": "2026-07-04",
                "category": "Migration"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Performance Testing",
                "taskDescription": "Test database query performance.",
                "taskDate": "2026-07-15",
                "category": "Testing"
            }
        ]
    },

    {
        id: 4,
        firstName: "Fatima",
        email: "fatima.noor@example.com",
        password: "123",

        taskCount: {
            active: 3,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Create Jest test cases for user APIs.",
                "taskDate": "2026-07-10",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Navbar",
                "taskDescription": "Resolve responsive navbar issue.",
                "taskDate": "2026-07-08",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "API Integration",
                "taskDescription": "Connect frontend with employee APIs.",
                "taskDate": "2026-07-12",
                "category": "Integration"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug Verification",
                "taskDescription": "Verify resolved issues reported by QA.",
                "taskDate": "2026-07-13",
                "category": "QA"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy Staging",
                "taskDescription": "Deploy latest build to staging server.",
                "taskDate": "2026-07-06",
                "category": "Deployment"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Email Service",
                "taskDescription": "Integrate email notification service.",
                "taskDate": "2026-07-05",
                "category": "Backend"
            }
        ]
    },

    {
        id: 5,
        firstName: "Hamza",
        email: "hamza.iqbal@example.com",
        password: "123",

        taskCount: {
            active: 3,
            newTask: 2,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Customer Support",
                "taskDescription": "Resolve pending customer tickets.",
                "taskDate": "2026-07-09",
                "category": "Support"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Generate Report",
                "taskDescription": "Prepare weekly employee performance report.",
                "taskDate": "2026-07-11",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Meeting",
                "taskDescription": "Attend project requirement meeting.",
                "taskDate": "2026-07-07",
                "category": "Meeting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Server Monitoring",
                "taskDescription": "Monitor server uptime and resolve alerts.",
                "taskDate": "2026-07-05",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Security Audit",
                "taskDescription": "Perform basic security audit of the application.",
                "taskDate": "2026-07-14",
                "category": "Security"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Cleanup",
                "taskDescription": "Remove unused components and files.",
                "taskDate": "2026-07-03",
                "category": "Maintenance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Demo",
                "taskDescription": "Prepare application demo for client presentation.",
                "taskDate": "2026-07-16",
                "category": "Presentation"
            }
        ]
    }
]

const admin = [
    {
        id: 101,
        firstName: "Admin",
        email: "admin@example.com",
        password: "123"
    }
]


export const setLocalStorage = () => {
    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees", JSON.stringify(employees))
    }

    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin))
    }
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || []
    const admin = JSON.parse(localStorage.getItem("admin")) || []

    return { employees, admin }
};