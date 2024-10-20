@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
mode 80,25
color 0f
set /a resw=80
set /a resh=25
if exist data del data /f /s /q
if not exist data echo Creating system files...
:: if exist calc.bat goto:system
:: if not exist calc.bat set "EMPTY= "
set "table=rsc.Generate(table, range 80 25 null)"
set "graph=rsc.GetCanvas(%table%, %resw% %resh% facing wall)"
set "renderAT=mkdir data &&pushd data &&echo %table% %graph% %random:~%time:~0,%% > data.sys"
%renderAT%
@set "renderAT= "
@set "renderAT=[7mInitializing......"
pushd data
for /l %%g in (1, 1, %random:~0,2%) do (
    timeout /t 0 >nul
    echo creating file[!random!_%date%%%g.%~x1]
)
popd
for /l %%g in (1, 1, 22) do (
    timeout /t 0 >nul
    cls
    echo !renderAT:~0,%%g! && if %%g gtr 22 set %%g=0
)


:creatingApps
call login.bat
dir /w
goto:system

:system
@CLS
choice /m "Calculadora Login" /c cplaceholder
if %errorlevel% equ 1 do (
	call calc.bat
	pause>nul
	CLS
	call :system
)

if %errorlevel% equ 2 do (
	call login.bat
	CLS
	call :system
)
pause>nul