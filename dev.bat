@echo off
setlocal

echo Building Docusaurus site...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed. Exiting.
    exit /b %errorlevel%
)

echo Starting server...
start "LTC-Serve" cmd /c "npm run serve"

echo Waiting for http://localhost:3000 to respond...
set RETRIES=30

:WAIT_LOOP
timeout /t 2 /nobreak >nul
set /a RETRIES-=1
if %RETRIES% leq 0 (
    echo Server did not start in time.
    exit /b 1
)

powershell -Command "try { $null = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop; exit 0 } catch { exit 1 }" >nul 2>&1
if errorlevel 1 goto WAIT_LOOP

echo Server is up. Opening browser...
start "" "http://localhost:3000"
echo Done. Press Ctrl+C in the server window to stop.
endlocal
