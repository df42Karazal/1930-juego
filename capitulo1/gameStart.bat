@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
title %~dp0
:CHOICE 
choice /c sn /m "Permiso= "
if %errorlevel% equ 1 (
    echo "permiso=si" > config.dat
)

if %errorlevel% equ 2 (
    echo "permiso=no" > config.dat
)

choice /m "Audio=Win32, Soundblaster, Realtek?" /c wsr
if %errorlevel% equ 1 (
    echo Hecho
    echo "audio=win32.dll" > config.dat
)
if %errorlevel% equ 2 (
    echo Hecho
    echo "audio=sdblast.sys" > config.dat
)
if %errorlevel% equ 3 (
    echo Hecho 
    echo "audio=realtek.dll" > config.dat
)

if exist *.dat echo Confirmado.
if not exist *.dat echo ERR_000
call Game.exe

rem :QUESTION
rem set "msg1=Antes de empezar, tengo una pregunta."
rem for /l %%r in (1, 1, 44) do (
    rem timeout /t 0 >nul
    rem cls
    rem echo !msg1:~0,%%r!
rem )