# Feature Specification: Fix the typo in the README

- Ticket: [#1](https://github.com/sebastienferry/demo-app/issues/1)
- Clarification: [docs/clarifications/1.md](../../docs/clarifications/1.md)
- Status: specified

## User stories

### US1 - Read a correctly spelled README (priority P1)

As a visitor of the repository, I read a README whose first paragraph is spelled
correctly, so the project looks maintained.

**Acceptance scenarios**

1. **Given** the README, **When** I read its first paragraph, **Then** it says
   "A small web application that renders a single page with a greeting and a footer."
2. **Given** the README before and after the change, **When** I compare them,
   **Then** only the line holding the misspelled word differs.

## Functional requirements

- **FR-001**: The README MUST spell the word "application" correctly in its first paragraph.
- **FR-002**: No other line of the README MUST change.
- **FR-003**: No file other than the README MUST change as part of the fix.

## Out of scope

- Rewording or restructuring the README.
- Any change to the application code, build or tests.

## Open points

None. The owner confirmed the scope on 2026-10-06.
