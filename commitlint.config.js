module.exports = {
	parserPreset: "conventional-changelog-conventionalcommits",
	ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
	rules: {
		"body-leading-blank": [1, "always"],
		"body-max-line-length": [2, "always", 100],
		"footer-leading-blank": [1, "always"],
		"footer-max-line-length": [2, "always", 100],
		"header-max-length": [2, "always", 100],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
		"subject-full-stop": [2, "never", "."],
		"type-case": [2, "always", "lower-case"],
		"type-enum": [2, "always", ["feat", "fix", "docs", "refactor", "test", "chore", "revert"]],
	},
	prompt: {
		questions: {
			type: {
				description: "Select the type of change that you're committing",
				enum: {
					feat: {
						description: "A new feature",
						title: "Features",
						emoji: "✨",
					},
					fix: {
						description: "A bug fix",
						title: "Bug Fixes",
						emoji: "🐛",
					},
					docs: {
						description: "Documentation only changes",
						title: "Documentation",
						emoji: "📚",
					},
					refactor: {
						description: "A code change that neither fixes a bug nor adds a feature",
						title: "Code Refactoring",
						emoji: "📦",
					},
					test: {
						description: "Adding missing tests or correcting existing tests",
						title: "Tests",
						emoji: "🚨",
					},
					chore: {
						description: "Other changes that don't modify src or test files",
						title: "Chores",
						emoji: "♻️",
					},
					revert: {
						description: "Reverts a previous commit",
						title: "Reverts",
						emoji: "🗑",
					},
				},
			},
			subject: {
				description: "Write a short, imperative tense description of the change",
			},
			body: {
				description: "Provide a longer description of the change",
			},
			isBreaking: {
				description: "Are there any breaking changes?",
			},
			breakingBody: {
				description: "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself",
			},
			breaking: {
				description: "Describe the breaking changes",
			},
			isIssueAffected: {
				description: "Does this change affect any open issues?",
			},
			issuesBody: {
				description:
					"If issues are closed, the commit requires a body. Please enter a longer description of the commit itself",
			},
			issues: {
				description: `Add issue references (e.g. "fix #123", "re #123".)`,
			},
		},
	},
};
