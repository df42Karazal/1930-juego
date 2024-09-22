@echo off
setlocal enabledelayedexpansion
setlocal enableextensions
if %1 == db set "char=Û"
if %1 == b0 set "char=°"
if %1 == b1 set "char=±"
if %1 == b2 set "char=²"
echo [%2;%3H
echo %char%