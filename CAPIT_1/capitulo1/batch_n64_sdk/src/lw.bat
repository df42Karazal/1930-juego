@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
set /a %wrd%=%1
echo %wrd% > word_loaded_at%~dp1.w