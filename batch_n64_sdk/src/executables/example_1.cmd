@Echo Off
SetLocal EnableExtensions
Title Demo Game
Mode Con Cols=80 Lines=30
Bg Font 6
Color 07
Echo Move using the arrow keys.
Echo Press Esc for quit.
Bg Print E "Press any key to continue ... \01\n"
Pause > Nul
Cls
Rem Bg Font 2
PixelFnt 3
Bg Cursor 0


Set /a "row=0"
Set /a "col=0"
Set "spr_index=1"

Rem Play for 1 minute
Sound Play waka_waka.wav -1

Set "Last=333"
:in
Set /a "fps=0"
Set "prev_row=%row%"
Set "prev_col=%col%"
Keystick
Set "key=%ErrorLevel%"
If 27 Equ %key% Goto :Bye
Set /a "moved=0"
If 0 Equ %key% Set "key=%Last%"
:rein
If 328 Equ %key% (Set /a "row-=1,moved=1"
) Else If 336 Equ %key% (Set /a "row+=1,moved=1"
) Else If 331 Equ %key% (Set /a "col-=1,moved=1"
) Else If 333 Equ %key% (Set /a "col+=1,moved=1"
) Else (Set "key=%Last%"
Goto :rein
)
Set "Last=%key%"
If 1 Equ %moved% (
Sprite %prev_row% %prev_col% pac_erase.spr %row% %col% pac_%spr_index%.spr
) Else (
Sprite %row% %col% pac_%spr_index%.spr
)
Set /a "spr_index=(spr_index %% 2) + 1"
Goto :in

:Bye
Sound Stop waka_waka.wav
Bg Font 6
Goto :Eof
