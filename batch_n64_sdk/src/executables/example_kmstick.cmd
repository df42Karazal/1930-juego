@Echo Off
SetLocal EnableDelayedExpansion
Cls
Bg Font 6
Echo Press a key o mouse primary button clic

Set "clr=A0"

:in
Color %clr%
kmstick.exe
Set "input=%ErrorLevel%"

Set /a "m_row = -input >> 0x10"
Set /a "m_col = -input & 0xFFFF"
Set /a "key  = input"

If %input% LSS 0 (
Echo Click on row: %m_row% col: %m_col%
) Else If %input% GTR 0 (
Echo Pressed key: %key%
If %key% Equ 27 Goto :Eof
)

If "%clr%"=="E0" (
  Set "clr=B0"
) Else (
  Set "clr=E0"
)

goto :in
