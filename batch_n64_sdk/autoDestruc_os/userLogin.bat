@echo off
setlocal enableextensions
setlocal enabledelayedexpansions
:loginTry
cls
echo.
echo.
echo.
echo.
echo 								%username%
echo.
type sqr.rgba
set /p "login=LOGIN: "
if %login% equ 123 do (
	cls
	goto:system 
)
if %login% NOT equ 123 do (
	cls 
	echo INVALID PASSWORD
	pause>nul
	cls
	call :loginTry
)
pause>nul