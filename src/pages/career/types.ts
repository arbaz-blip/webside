export type JobParameter = {
    job_id: number; // Maps to job_id
    title: string; // Maps to title
    description: string; // Maps to description (could represent responsibilities)
    requirements: string; // Maps to requirements (TEXT); use string[] if parsed client-side
    salary_package: string; // Maps to salary_package
    perks: string; // Maps to perks
    location: string; // Maps to location
    createdAt: string; // Maps to created_at (ISO string, e.g., "2025-05-06T12:00:00Z")
    categoryName: string; // Maps to category_name from TestCategories
    screening_questions?: string; // Maps to screening_questions (JSON as string, optional)
    isActive?: boolean; // Maps to is_active (optional, if present)
    reference: string;
};