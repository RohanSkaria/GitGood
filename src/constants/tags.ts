// constants/tags.ts
export const tagCategories = {
    difficulty: {
      beginner: ['good-first-issue', 'beginner-friendly', 'first-timers-only'],
      intermediate: ['help-wanted', 'intermediate', 'enhancement'],
      advanced: ['bug', 'feature', 'optimization']
    },
    languages: {
      javascript: ['javascript', 'typescript', 'node'],
      python: ['python', 'django', 'flask'],
      java: ['java', 'spring', 'android']
    }
  };
  
  export const contributionSteps = {
    fork: [
      { action: "Click 'Fork' button", command: null, description: "Creates your copy of the repository" },
      { action: "Clone your fork", command: "git clone https://github.com/[your-username]/[repo-name].git", description: "Downloads repository" },
      { action: "Add upstream remote", command: "git remote add upstream https://github.com/[original-owner]/[repo-name].git", description: "Links to original" }
    ],
    develop: [
      { action: "Create branch", command: "git checkout -b [feature-name]", description: "Creates new branch" },
      { action: "Stage changes", command: "git add [files]", description: "Prepares modified files" },
      { action: "Commit changes", command: "git commit -m 'Description'", description: "Records changes" },
      { action: "Push changes", command: "git push origin [feature-name]", description: "Uploads changes" }
    ]
  };