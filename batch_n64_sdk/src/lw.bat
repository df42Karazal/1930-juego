@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
set /a wrd=%1
set /a address=%2
echo %wrd% > word_at_%2.wrd
