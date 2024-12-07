export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [
      2, // Error level (2 = throw error)
      'always', // Rule is always applied
      [
        'feat',     // A new feature
        'fix',      // A bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (e.g., formatting, no functionality changes)
        'refactor', // Code changes that neither fix a bug nor add a feature
        'perf',     // Performance improvements
        'test',     // Adding or correcting tests
        'build',    // Changes affecting the build system
        'ci',       // Continuous integration-related changes
        'chore',    // Routine tasks or chores
        'revert',   // Reverting previous changes
      ],
    ],
    'type-case': [2, 'always', 'lower-case'], // Enforce lowercase type
    'type-empty': [2, 'never'], // Disallow empty type
    'scope-case': [2, 'always', 'lower-case'], // Enforce lowercase scope
    'scope-empty': [2, 'never'], // Disallow empty scope
    'subject-case': [
      2,
      'always',
      ['lower-case'], // Enforce sentence case for subject
    ],
    'subject-empty': [2, 'never'], // Disallow empty subject
    'subject-max-length': [2, 'always', 72], // Limit subject line to 72 characters
    'header-max-length': [2, 'always', 100], // Limit full header to 100 characters
    'body-case': [1, 'always', 'lower-case'], // Warn if body is not in sentence case
    'body-max-line-length': [2, 'always', 100], // Limit body lines to 100 characters
    'footer-max-line-length': [2, 'always', 100], // Limit footer lines to 100 characters
    'footer-empty': [2, 'never'], // Disallow empty footer (for issue references)
  },
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'Upper limit: %d characters',
      min: 'At least %d characters required',
      emptyWarning: 'Field cannot be empty',
      upperLimitWarning: 'Exceeds maximum limit',
      lowerLimitWarning: 'Below minimum limit',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: { description: 'A new feature', title: 'Features', emoji: '✨' },
          fix: { description: 'A bug fix', title: 'Bug Fixes', emoji: '🐛' },
          docs: { description: 'Documentation changes', title: 'Docs', emoji: '📚' },
          style: { description: 'Code style changes', title: 'Style', emoji: '💎' },
          refactor: { description: 'Code refactoring', title: 'Refactor', emoji: '📦' },
          perf: { description: 'Performance improvements', title: 'Performance', emoji: '🚀' },
          test: { description: 'Tests updates', title: 'Tests', emoji: '🚨' },
          build: { description: 'Build system changes', title: 'Build', emoji: '🛠' },
          ci: { description: 'CI changes', title: 'CI', emoji: '⚙️' },
          chore: { description: 'Chore tasks', title: 'Chores', emoji: '♻️' },
          revert: { description: 'Revert changes', title: 'Revert', emoji: '🗑' },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g., module, file, or component name)?',
      },
      subject: {
        description: 'Write a short, imperative description of the change',
      },
      body: {
        description: 'Provide a detailed description of the change',
      },
      isBreaking: {
        description: 'Are there breaking changes?',
      },
      breakingBody: {
        description: 'Breaking changes require a detailed description. Please explain.',
      },
      breaking: {
        description: 'List the breaking changes.',
      },
      isIssueAffected: {
        description: 'Does this commit address any issues?',
      },
      issuesBody: {
        description: 'If closing issues, provide a detailed description.',
      },
      issues: {
        description: 'List issue references (e.g., "fix #123", "re #456").',
      },
    },
  },
};
