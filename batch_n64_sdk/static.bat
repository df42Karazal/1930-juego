@echo off
setlocal enabledelayedexpansion
setlocal enableextensions
mode 80,25
set "char=âêîôûÂÊÎÔUãõüúáéíóúàèìòùÿ"
color 1f
:MakeGraph
for /l %%i in (0, 1, 130) do (
    set /a posX=!random:~0,2!
    set /a posY=!random:~0,2!
    call CursorPos !posX! !posY!
    echo !char:~0,%%i!
    echo ^=%time%^
    set /a posX=130 + %%i


)
pause>nul
cls
goto:eof