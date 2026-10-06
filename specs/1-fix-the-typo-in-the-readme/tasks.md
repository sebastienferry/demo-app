# Tasks: Fix the typo in the README

- [x] T001 Replace "applicaton" with "application" on line 3 of `README.md` (FR-001).
- [x] T002 Verify `git diff --stat` shows `README.md` only, with one line changed (FR-002, FR-003).
- [x] T003 Verify `grep -rn applicaton` finds no occurrence outside the specification
      and clarification documents.
- [x] T004 Run `npm run build` and `npm test` as a regression guard; both must pass.

## Test plan

- Diff review: exactly one changed line in `README.md`.
- Search: no remaining "applicaton" in `README.md` or the application code.
- Build and test suite green.
