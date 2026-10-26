# Larger diff review walkthrough

This PR is test content only. It does not configure Actions or deploy anything.

## Files to inspect

| File | Purpose |
| --- | --- |
| README.md | Existing-file edits with additions, deletions, and context |
| examples/review-queue/queue.ts | TypeScript syntax highlighting and a long line |
| examples/review-queue/tasks.json | A longer structured-data file for scrolling |
| docs/review-walkthrough.md | Markdown and this checklist |

## Single-line comments

1. Open the PR diff in OpenGH.
2. Select an added line in the TypeScript file.
3. Add a review comment without submitting the review.
4. Verify that the draft marker appears at that location.
5. Select a deleted README line and add another comment.
6. Confirm that the two comments retain different diff sides.

## Multi-line comments

1. Select the first line of a function.
2. Shift-click a later line on the same side and in the same hunk.
3. Add a comment explaining the selected range.
4. Open the pending review and verify its file and line range.
5. Switch between split and unified layouts.
6. Confirm that the source-line anchor does not change.

## Scrolling and wrapping

- [ ] Scroll through the entire JSON file.
- [ ] Jump between changed files.
- [ ] Pan across the long `formatTask` return statement.
- [ ] Toggle wrapping and inspect long lines.
- [ ] Resize the terminal while a draft comment exists.
- [ ] Check that whitespace and empty lines remain readable.

## Draft lifecycle

- [ ] Write an overall review body.
- [ ] Close the popup without submitting.
- [ ] Reopen it and verify the body is retained.
- [ ] Restart OpenGH and verify saved local drafts return.
- [ ] Submit a comment review only when ready.
- [ ] Verify that GitHub shows the review exactly once.

## Permission reminder

The PR author can leave comment reviews, but cannot approve or request changes
on their own PR. Use a different authorized account to exercise those options.

## Example feedback

> Could the grouping function distinguish an actual owner named Unassigned
> from tasks with no owner?

Unicode sample: café · 日本語 · 🚀 · left ← right →

This is the end of the walkthrough.
