/**
 * Utility functions for handling project view counts
 * NOTE: Currently using static view counts instead of tracking actual views
 */

// Local storage key for storing view counts
const VIEW_COUNT_KEY = 'project_view_counts';

/**
 * Get all project view counts from local storage
 */
export const getViewCounts = (): Record<string, number> => {
  const storedCounts = localStorage.getItem(VIEW_COUNT_KEY);
  return storedCounts ? JSON.parse(storedCounts) : {};
};

/**
 * Get view count for a specific project
 * @param projectId - The ID of the project
 */
export const getProjectViewCount = (projectId: string): number => {
  // Static view counts based on project ID
  const staticViewCounts: Record<string, number> = {
    '1': 1967,
    '2': 842,
    '3': 635,
    '4': 1243,
    '5': 521,
    '6': 978
  };
  
  // Return static count if available, otherwise return from local storage or 0
  if (staticViewCounts[projectId]) {
    return staticViewCounts[projectId];
  }
  
  const viewCounts = getViewCounts();
  return viewCounts[projectId] || 0;
};

/**
 * Increment view count for a specific project
 * @param projectId - The ID of the project
 * @returns The updated view count
 * @deprecated View counting is disabled, using static counts instead
 */
export const incrementViewCount = (projectId: string): number => {
  // Just return the static view count without incrementing
  return getProjectViewCount(projectId);
};

/**
 * Check if a project has been viewed in the current session
 * @param projectId - The ID of the project
 * @deprecated View tracking is disabled
 */
export const hasViewedProject = (projectId: string): boolean => {
  // Always return true to prevent view counting
  return true;
};

/**
 * Mark a project as viewed in the current session
 * @param projectId - The ID of the project
 * @deprecated View tracking is disabled
 */
export const markProjectAsViewed = (projectId: string): void => {
  // No-op function - view tracking is disabled
};

/**
 * Record a project view - returns static count without incrementing
 * @param projectId - The ID of the project
 * @returns The static view count
 */
export const recordProjectView = (projectId: string): number => {
  return getProjectViewCount(projectId);
};

/**
 * Track a project view - returns static count without incrementing
 * @param projectId - The ID of the project
 * @returns The static view count
 * @deprecated Use recordProjectView instead
 */
export const trackProjectView = (projectId: string): number => {
  return getProjectViewCount(projectId);
};
