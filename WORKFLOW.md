# WORKFLOW.md — Meer Foundation Website

## Daily Development Workflow

```
┌──────────────────────────────────────────────┐
│  1. OPEN PROJECT                             │
│     └─ Open in VS Code / Antigravity         │
│                                              │
│  2. READ CURRENT_TASK.md                     │
│     └─ Understand what needs to be done      │
│                                              │
│  3. MAKE CHANGES                             │
│     └─ Follow CODING_STANDARD.md             │
│     └─ Follow UI_GUIDELINES.md for design    │
│     └─ Test locally (Live Server / browser)  │
│                                              │
│  4. UPDATE CHANGELOG.md                      │
│     └─ Date, description, files modified     │
│                                              │
│  5. RUN BACKUP                               │
│     └─ powershell backup.ps1                 │
│     └─ Or auto-triggered by pre-commit hook  │
│                                              │
│  6. COMMIT & PUSH                            │
│     └─ Use commit format:                    │
│        [TYPE] Description                    │
│        TYPE: FEATURE|FIX|SEO|CONTENT|        │
│              DESIGN|REFACTOR|BACKUP          │
│                                              │
│  7. VERIFY DEPLOYMENT                        │
│     └─ Check https://meerfoundation.co.in/   │
│     └─ GitHub Pages deploys in ~1-2 min      │
└──────────────────────────────────────────────┘
```

---

## Before Starting Any Task

1. **Read** `CURRENT_TASK.md` — know what's in progress
2. **Read** `DECISIONS.md` — check if relevant decisions already exist
3. **Check** `CHANGELOG.md` — see recent changes for context
4. **Pull latest** — `git pull origin main`

---

## During Development

1. **One task at a time** — update `CURRENT_TASK.md` with your current focus
2. **Test locally** — open HTML files directly in browser, or use Live Server extension
3. **Mobile first** — test at 375px viewport minimum
4. **Accessibility** — verify keyboard navigation and screen reader labels
5. **No framework changes** — vanilla HTML/CSS/JS only

---

## After Completing a Task

1. **Update** `CURRENT_TASK.md` — mark task as complete, note next steps
2. **Update** `CHANGELOG.md` — add entry with date, description, files changed
3. **Run backup** — `powershell -ExecutionPolicy Bypass -File backup.ps1`
4. **Commit** — use the commit format: `[TYPE] Description`
5. **Push** — `git push origin main`
6. **Verify** — check live site at https://meerfoundation.co.in/

---

## Commit Message Format

```
[TYPE] Short description of what changed

TYPE must be one of:
  FEATURE  — New feature or page
  FIX      — Bug fix
  SEO      — SEO improvement
  CONTENT  — Content update (text, images)
  DESIGN   — Visual/UI change
  REFACTOR — Code restructuring (no behavior change)
  BACKUP   — Backup system or documentation update
```

### Examples
```
[FEATURE] Add community radio page with audio player
[FIX] Fix mobile menu not closing on link click
[SEO] Add structured data to homepage
[CONTENT] Update annual report 2025 data
[DESIGN] Improve hero section gradient animation
[REFACTOR] Extract shared styles to premium.css
[BACKUP] Weekly backup and changelog update
```

---

## Restoration Workflow

If you need to restore from a backup:

1. Navigate to `backups/` directory
2. Find the timestamped folder closest to your desired state
3. Copy the needed files back to the project root
4. Verify the restoration works locally
5. Commit with `[FIX] Restore from backup YYYY-MM-DD_HHMMSS`

---

## Emergency Procedures

### Site is broken after a push
1. `git revert HEAD` — revert last commit
2. `git push origin main` — deploy the revert
3. Investigate the issue locally

### Lost local changes
1. Check `backups/` for most recent timestamped backup
2. Copy files back from backup
3. Or use `git stash pop` if changes were stashed

### Need to rollback multiple commits
1. `git log --oneline -10` — find the target commit
2. `git revert <commit>..HEAD` — revert range
3. Test locally before pushing
