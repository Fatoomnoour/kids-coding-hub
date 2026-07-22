@echo off
setlocal

set "REPO_URL=https://github.com/Fatoomnoour/kids-coding-hub.git"

where git >nul 2>&1
if errorlevel 1 (
  echo Git is not installed or is not available in PATH.
  echo Install Git for Windows, then run this file again.
  pause
  exit /b 1
)

if not exist ".git" git init
git branch -M main
git add .

git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Launch Kids Coding Hub website"
) else (
  echo No new files need to be committed.
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  git remote add origin "%REPO_URL%"
) else (
  git remote set-url origin "%REPO_URL%"
)

git push -u origin main
if errorlevel 1 (
  echo.
  echo Upload failed. Review the message above and PUBLISH-TO-GITHUB.md.
  pause
  exit /b 1
)

echo.
echo Upload completed successfully.
echo Next: GitHub repository Settings ^> Pages ^> Source ^> GitHub Actions.
pause
