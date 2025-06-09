// Sample Certification Data - Customize this with your actual certifications
// Copy this data and replace the certifications array in script.js

const sampleCertifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect - Associate",
        organization: "Amazon Web Services",
        date: "2024-01-15",
        description: "Demonstrated expertise in designing distributed systems on AWS platform, including compute, storage, networking, and security services. Covers architectural best practices and AWS services.",
        category: "technical",
        status: "active",
        tags: ["Cloud Computing", "AWS", "Architecture", "DevOps"],
        verificationUrl: "https://aws.amazon.com/verification"
    },
    {
        id: 2,
        title: "Certified Scrum Master (CSM)",
        organization: "Scrum Alliance",
        date: "2023-11-20",
        description: "Certified in Scrum methodology, enabling effective team collaboration and agile project management practices. Demonstrates expertise in facilitating Scrum events and removing impediments.",
        category: "professional",
        status: "active",
        tags: ["Agile", "Scrum", "Project Management", "Leadership"],
        verificationUrl: "https://www.scrumalliance.org/verify"
    },
    {
        id: 3,
        title: "Master of Science in Computer Science",
        organization: "Stanford University",
        date: "2022-06-15",
        description: "Graduate degree with focus on artificial intelligence and machine learning algorithms. Specialized in advanced algorithms, data structures, and software engineering principles.",
        category: "academic",
        status: "active",
        tags: ["Computer Science", "AI/ML", "Graduate Degree", "Research"],
        verificationUrl: "https://registrar.stanford.edu/verify"
    },

];

// Example of how to add different types of certifications:

// Academic Certifications
const academicExamples = [
    {
        id: 101,
        title: "Bachelor of Science in Mathematics",
        organization: "University of California, Berkeley",
        date: "2019-05-20",
        description: "Undergraduate degree in mathematics with focus on applied mathematics and statistics.",
        category: "academic",
        status: "active",
        tags: ["Mathematics", "Statistics", "Bachelor's", "Analytics"],
        verificationUrl: "https://berkeley.edu/verify"
    }
];

// Professional Certifications
const professionalExamples = [
    {
        id: 201,
        title: "Certified Public Accountant (CPA)",
        organization: "American Institute of CPAs",
        date: "2022-06-15",
        description: "Professional accounting certification demonstrating expertise in financial reporting, auditing, and business law.",
        category: "professional",
        status: "active",
        tags: ["Accounting", "CPA", "Finance", "Auditing"],
        verificationUrl: "https://www.aicpa.org/verify"
    }
];

// Technical Certifications
const technicalExamples = [
    {
        id: 301,
        title: "Certified Kubernetes Administrator (CKA)",
        organization: "Cloud Native Computing Foundation",
        date: "2023-10-20",
        description: "Certification demonstrating expertise in Kubernetes cluster administration, troubleshooting, and security.",
        category: "technical",
        status: "active",
        tags: ["Kubernetes", "DevOps", "Containerization", "Cloud Native"],
        verificationUrl: "https://www.cncf.io/certification/cka/"
    }
];

// Soft Skills Certifications
const softSkillsExamples = [
    {
        id: 401,
        title: "Emotional Intelligence Assessment",
        organization: "Mayer-Salovey-Caruso Emotional Intelligence Test",
        date: "2023-11-10",
        description: "Assessment demonstrating high emotional intelligence in perceiving, using, understanding, and managing emotions.",
        category: "soft-skills",
        status: "active",
        tags: ["Emotional Intelligence", "EQ", "Leadership", "Interpersonal Skills"],
        verificationUrl: "https://www.mhs.com/verify"
    }
];

// Instructions for customization:
/*
1. Replace the certifications array in script.js with your actual data
2. Use the format shown above for each certification
3. Categories available: "academic", "professional", "technical", "soft-skills"
4. Status options: "active", "expired"
5. Add relevant tags to help with categorization
6. Include verification URLs when available
7. Use consistent date format: "YYYY-MM-DD"
*/ 