# GitHub Pages Deployment Guide

This guide will help you deploy your school project website to GitHub Pages.

## Prerequisites

- A GitHub account
- Your project code pushed to a GitHub repository

## Setup Instructions

### Step 1: Push Your Code to GitHub

If you haven't already:

1. Go to [GitHub](https://github.com) and create a new repository
2. In your Replit project, open the Shell and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2: Configure Repository Name (Important!)

Your website will be hosted at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**You need to update the build configuration:**

1. Open the Shell in Replit
2. Run this command (replace `YOUR-REPO-NAME` with your actual repository name):

```bash
echo "VITE_BASE_PATH=/YOUR-REPO-NAME/" > .env.production
```

For example, if your repo is named "school-project", run:
```bash
echo "VITE_BASE_PATH=/school-project/" > .env.production
```

**Special case:** If your repository is named `YOUR-USERNAME.github.io`, your site will be at the root. In this case, you don't need to set `VITE_BASE_PATH`.

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** (top menu)
3. Click on **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow will automatically deploy when you push to the `main` branch

### Step 4: Deploy

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

To deploy:

1. Make sure all your changes are committed and pushed to GitHub
2. Go to your repository on GitHub
3. Click the **Actions** tab
4. You should see the "Deploy to GitHub Pages" workflow running
5. Once complete (green checkmark), your site will be live!

### Step 5: Access Your Website

Your website will be available at:
- **Project page**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- **User/Org page** (if repo is named `YOUR-USERNAME.github.io`): `https://YOUR-USERNAME.github.io/`

## Making Updates

Whenever you want to update your website:

1. Make your changes in Replit
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```
3. GitHub Actions will automatically rebuild and redeploy your site

## Troubleshooting

### Images or CSS not loading

Make sure you set the `VITE_BASE_PATH` correctly in `.env.production` (see Step 2).

### Workflow fails

1. Check the Actions tab on GitHub to see error messages
2. Make sure the build script is added to `package.json`
3. Verify all dependencies are listed in `package.json`

### 404 Page

1. Verify GitHub Pages is enabled in repository settings
2. Check that the workflow completed successfully
3. Wait a few minutes for GitHub Pages to update

## Notes

- GitHub Pages only hosts **static websites** (HTML, CSS, JavaScript)
- The backend server (`server/` folder) will **not** run on GitHub Pages
- This deployment only includes the React frontend
- If your project needs a backend, consider using Replit's deployment feature instead

## Alternative: Deploy on Replit

If you want to keep both frontend and backend working together, you can use Replit's deployment instead of GitHub Pages. Just click the "Deploy" button in your Replit project!
