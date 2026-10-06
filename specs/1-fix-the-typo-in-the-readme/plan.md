# Implementation Plan: Fix the typo in the README

## Stack

Markdown documentation only. No runtime, build or test code is touched.

## Target files

| File | Change |
| --- | --- |
| `README.md` | Line 3: replace "applicaton" with "application". |

## Decisions

- A single in-place edit of line 3; the rest of the file stays byte-identical
  (FR-002).
- No automated test is added: the README is not part of the build output nor the
  test suite, and a test asserting README spelling would add maintenance for no
  behaviour. Verification relies on the diff and a repository-wide search instead.

## Rejected alternatives

- Adding a spell-check step or dependency: out of scope, and the project keeps
  the application free of runtime dependencies.
