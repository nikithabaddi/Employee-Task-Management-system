
const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete Project Report",
        "taskDescription": "Finish the quarterly project report with all necessary details.",
        "taskDate": "2025-03-10",
        "category": "Reporting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting Follow-up",
        "taskDescription": "Send follow-up email to the client after the meeting.",
        "taskDate": "2025-03-02",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Update Website Content",
        "taskDescription": "Revise the content on the website's homepage.",
        "taskDate": "2025-03-05",
        "category": "Web Development"
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    }
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Marketing Plan",
        "taskDescription": "Develop a detailed marketing plan for the upcoming campaign.",
        "taskDate": "2025-03-08",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting Preparation",
        "taskDescription": "Prepare presentation slides for the weekly team meeting.",
        "taskDate": "2025-03-04",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Email Newsletter",
        "taskDescription": "Draft the content for the monthly email newsletter.",
        "taskDate": "2025-03-06",
        "category": "Communication"
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": 3,
    "firstname": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product Design Revision",
        "taskDescription": "Revise product design based on feedback received from the last review.",
        "taskDate": "2025-03-07",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "User Testing",
        "taskDescription": "Conduct user testing for the new feature in the app.",
        "taskDate": "2025-03-03",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "App Bug Fixing",
        "taskDescription": "Fix the bugs found during the testing phase of the app.",
        "taskDate": "2025-03-10",
        "category": "Development"
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    }
  },
  {
    "id": 4,
    "firstname": "Sanya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Budget Forecast",
        "taskDescription": "Prepare the budget forecast for the next quarter based on current data.",
        "taskDate": "2025-03-09",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Contracts",
        "taskDescription": "Review the contracts for upcoming partnerships.",
        "taskDate": "2025-03-04",
        "category": "Legal"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Employee Performance Review",
        "taskDescription": "Conduct performance reviews for employees in the department.",
        "taskDate": "2025-03-06",
        "category": "HR"
      }
    ],
    "taskCounts": {
      "active": 3,
      "completed": 0,
      "failed": 1,
      "newTask": 2
    }
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Research New Technologies",
        "taskDescription": "Research and identify potential new technologies to integrate into our products.",
        "taskDate": "2025-03-05",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Internal Newsletter Drafting",
        "taskDescription": "Draft the content for the internal company newsletter.",
        "taskDate": "2025-03-02",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Conduct Survey",
        "taskDescription": "Conduct a survey among employees to get feedback on the new system.",
        "taskDate": "2025-03-07",
        "category": "Survey"
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    }
  }
];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": []
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin};
  }
