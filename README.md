# OpenGH Markdown showcase

Open this README using the **markdown-enhancements build** to see the changes. Most ordinary paragraphs, links, and code blocks are intentionally unchanged.

## 1. Task lists

Previously these appeared as ordinary bullets. Now completed tasks have a checked, green marker in rich mode; incomplete tasks have an empty, muted marker. Minimal mode keeps the checkboxes but removes the colors.

- [x] Implement Markdown styles
- [ ] Review the changes
- [ ] Ship the update
  - [x] Verify nested completed tasks
  - [ ] Verify nested incomplete tasks

Ordinary bullets should still look normal:

- This is not a checkbox
- Neither is this

## 2. Strikethrough

Previously deleted text lacked a visible strike. Now the crossed-out words should have a line through them.

~~This approach is obsolete.~~ Use the replacement instead.

Keep this text, ~~remove these words~~, and keep this too.

~~**Bold and deleted**~~ — **bold but not deleted**.

## 3. Small heading hierarchy

The next three headings now have explicit, distinct styles. The descriptions underneath explain what to look for.

#### Level four: underlined

This heading should be underlined rather than bold.

##### Level five: muted and bold

This heading should be bold with a muted color in rich mode.

###### Level six: muted and italic

This heading should be italic with a muted color in rich mode.

## 4. Rich versus minimal

Switch Markdown style in Settings between **rich** and **minimal**. The checkboxes, heading emphasis, and strikethrough should survive; the extra colors should disappear in minimal mode.

## 5. Editor improvements

These changes appear in the **comment composer**, not in this rendered README:

1. Open an issue or pull request and start writing a comment.
2. Paste the sample below into the composer.
3. Press **Ctrl+L** or click **show lines** to toggle line numbers.
4. Move the cursor: the **Ln / Col** indicator should update.
5. Switch to Preview and back: the draft and line-number preference should remain intact.

```markdown
First line of a draft.
Second line: move the cursor here.

- [x] Finished work
- [ ] Remaining work

~~Old wording~~ New wording.
```

## Unchanged content for comparison

Normal text with **bold**, *italic*, and `inline code` should still look as before.

[OpenTUI](https://opentui.com) remains a normal link.

```typescript
const message = "Code highlighting is unchanged"
console.log(message)
```
