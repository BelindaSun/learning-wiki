# Quick Start Guide

This guide explains the original GitHub-based setup for a personal copy of the wiki.

## 1. Create a Repository

Create an empty GitHub repository. Do not initialize it with another README if you plan to push an existing folder.

## 2. Clone It

```bash
git clone https://github.com/YOUR-NAME/YOUR-REPO.git
cd YOUR-REPO
```

## 3. Copy the Wiki Files

Copy the Markdown files and folders into the repository. Preserve relative paths because internal links depend on them.

## 4. Commit and Push

```bash
git add .
git commit -m "Add learning wiki"
git push origin main
```

## 5. Browse on GitHub

Open `README.md` as the entry point. GitHub renders Markdown links and tables directly.

## 6. Keep It Updated

```bash
git status
git add path/to/file.md
git commit -m "Update learning notes"
git push origin main
```

## Checklist

- Internal links use relative Markdown paths.
- Every formal Chinese article has a matching `.en.md` file.
- Category maps link to new articles.
- The changelog records meaningful changes.
- `git status` is clean after the push.

## Troubleshooting

### Push rejected

Fetch the remote state and inspect the difference before integrating it. Do not overwrite remote work blindly.

### Broken link

Check capitalization, relative path depth, and whether the target filename changed.

