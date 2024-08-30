@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
mode 80,25
color 5f
set /a resw=80
set /a resh=25
if exist data del data /f /s /q
if not exist data echo Creating system files...
set "table=rsc.Generate(table, range 80 25 null)"
set "graph=rsc.GetCanvas(%table%, %resw% %resh% facing wall)"
set "renderAT=mkdir data &&pushd data &&echo %table% %graph% %random:~%time:~0,%% > data.sys"
%renderAT%
@set "renderAT= "
pushd data
for /l %%g in (1, 1, %random:~0,3%) do (
    echo !graph!!table!╩▌▀▒▓%random%Ų║Š└äģ  ■ > !random!_%%g.dll
    timeout /t 0 >nul
    echo creating file[!random!_%date%%%g.%~x1]
    set "renderAT=[7mInitializing......"
)
popd
for /l %%g in (1, 1, 22) do (
    timeout /t 0 >nul
    cls
    echo !renderAT:~0,%%g! && if %%g gtr 22 set %%g=0
)


:creatingApps
set "calc=@echo off&&setlocal enabledelayedexpansion&&setlocal enableextensions&&cd..&&cd src&&choice /m "SOMA MULT DIV REST" /c smdr&&set /p "n1=Primeiro num "&&set /p "n2=Segundo num "&&if %errorlevel% EQU 1 add %n1% %n2%&&if %errorlevel% EQU 2 mul %n1% %n2%&&if %errorlevel% equ 3 div %n1% %n2%&&if %errorlevel% equ 4 sub %n1% %n2%&&goto:eof"
echo %calc% >> calc.bat
dir /w
goto:system

:system
@CLS

pause>nul