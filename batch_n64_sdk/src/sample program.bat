@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
mode 80,25
pushd executables
title Enr‚date y haz que suceda 
Echo Enredate y haz que suceda
Echo.
Echo        Demo para STJ
echo.
Sprite 0 49 teresa.spr
choice /c sn /m "Si/No"
if %errorlevel% equ 1 call :Demo
if %errorlevel% equ 2 goto:eof


:Demo
cls
chcp 858
Sound Play enr.wav
Set "Lyric1=Somos aqui peregrinos,"
set "Lyric2=Pies descalzos y un sue¤o"
set "Lyric3=Nos convoca al andar;"
@Set "Lyric4=Todos estamos atentos, al llamado que envuelve y"
Set "Lyric5=..nos despierta al orar"
Set "Lyric6=Del norte al sur de Am‚rica"
Set "Lyric7=Encuentro de corazones vamos a provocar~"
set "Lyric8=Enr‚date y haz que suceda"
for /l %%i in (0, 1, 23) do (
    timeout /t 0 >nul
    cls
    echo !Lyric1:~0,%%i!
)
@CLS & set "Lyric1= "
for /l %%i in (0, 1, 23) do (
    timeout /t 0 >nul
    cls
    echo !Lyric2:~0,%%i!
)
cls && set "Lyric2= "
for /l %%i in (0, 1, 26) do (
    timeout /t 0 >nul
    cls
    echo !Lyric3:~0,%%i!
)
cls && set "Lyric3= "
for /l %%i in (0, 1, 49) do (
    timeout /t 0 >nul
    cls
    echo !Lyric4:~0,%%i!
)
cls && set "Lyric4= "
for /l %%i in (0, 1, 24) do (
    timeout /t 0 >nul
    cls
    echo !Lyric5:~0,%%i!
)
cls && set "Lyric5= "
for /l %%i in (0, 1, 28) do (
    timeout /t 0 >nul
    cls
    echo !Lyric6:~0,%%i!
)
cls && set "Lyric6= "
for /l %%i in (0, 1, 41) do (
    timeout /t 0 >nul
    cls
    echo !Lyric7:~0,%%i!
)
cls && set "Lyric7= "
for /l %%i in (0, 1, 26) do (
    timeout /t 0 >nul
    cls
    echo !Lyric8:~0,%%i!
)
pause>nul
goto:eof