@echo off
set "PATH=C:\Users\TAARUVA3\Documents\Schule\tools\nodejs;%PATH%"
cd /d "%~dp0"
call npm run dev -- --port 5173 --strictPort
