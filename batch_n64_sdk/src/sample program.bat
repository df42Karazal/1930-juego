@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
mode 80,25
title Enrédate y haz que suceda 
Color %random:~0,1%f
Echo Enredate y haz que suceda
Echo.
Echo        Demo para STJ
echo.
choice /c sn /m "Si/No"
if %errorlevel% equ 1 call :Demo
if %errorlevel% equ 2 goto:eof


:Demo
cls

