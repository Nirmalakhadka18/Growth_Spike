# Deployment Instructions

## 1. Push to GitHub

Since I don't have access to your GitHub account to create a repository automatically, please follow these steps:

1.  Log in to [GitHub](https://github.com) and create a new **empty** repository (e.g., named `marketing-site`).
2.  Run the following commands in your terminal (I have already initialized git and committed the code):

```bash
cd d:\Intership_Networkers_Home\marketing-site
git remote add origin https://github.com/YOUR_USERNAME/marketing-site.git
git branch -M main
git push -u origin main
```

*(Replace `YOUR_USERNAME` and `marketing-site` with your actual details)*

## 2. Deploy to Vercel

1.  Go to [Vercel](https://vercel.com) and log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your GitHub repository (`marketing-site`).
4.  Click **"Import"**.
5.  The default settings (Next.js) are correct. Click **"Deploy"**.

Alternatively, if you have the Vercel CLI installed, you can run:

```bash
npx vercel
```
