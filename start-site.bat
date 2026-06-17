@echo off
setlocal

echo Building Docusaurus site...
npm run build
if %errorlevel% neq 0 (
  echo Build failed. Exiting.
  exit /b %errorlevel%
)

echo Starting server in new window...
start "LTC-Serve" cmd /c "npm run serve"

echo Waiting for http://localhost:3000 to respond...
set RETRIES=60
set WAIT=1

rem Try curl if available
where curl >nul 2>&1
if %errorlevel%==0 (
  for /L %%i in (1,1,%RETRIES%) do (
    curl -s -I http://localhost:3000 >nul 2>&1
    if not errorlevel 1 (
      echo Server is up.
      goto :OPEN
    )
    timeout /t %WAIT% >nul
  )
) else (
  rem Fallback to PowerShell check
  powershell -Command "for ($i=1;$i -le %RETRIES%; $i++) { try { $r = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 1; Write-Output 'up'; exit 0 } catch { Start-Sleep -Seconds 1 } }; exit 1"
  if %errorlevel%==0 goto :OPEN
)

echo Server did not respond after %RETRIES% seconds.
exit /b 1

:OPEN
start "" "http://localhost:3000"
echo Opened browser to http://localhost:3000
endlocal
exit /b 0
