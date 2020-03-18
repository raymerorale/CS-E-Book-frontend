export const CHAPTER10 = {
	read_status: 'Disabled',
	title: 'Chapter X',
	description: `<h1 align = center>CHAPTER 10</h1>
				<h2 align = center>SCREEN PROCESSING</h2>
				<h4 >OBJECTIVES</4>`,
	content:
			`<p>At the end of the chapter, the learners are expected to: </p>
			<ul> 
			<li>Recall screen processing techniques.
			<li>Implement these techniques in developing assembly programs.
			<li>Acknowledge the significance of interrupt functions in using these techniques.
			</li>
			</ul>`,
	sub: [
		{
			read_status: 'Disabled',
			title: 'The Monitor',
			content:`<b>THE MONITOR</b>
			<style> 
            table, th, td
            {
            	border: 2px solid black;
  				border-collapse: collapse;
  				font-size: 20px;
  				text-align: center;
            {
            </style>
			<br/>
			<p style="text-indent:3em">A typical video screen has eighty (80) columns numbered form 0 to 79 and twenty five (25) rows numbered from 0 to 24. The columns and rows provide a grid of addressable locations at any one of which the cursor can be set. The table below shows the example of cursor location:</p>
			
			<table style="width:98%">
				<tr >
					<th rowspan="2" width="200">SCREEN LOCATION</th>
					<th> COLUMN NO. </th>
					<th> ROW NO. </th>
					<th> COLUMN NO. </th>
					<th> ROW NO. </th>
				</tr>
				<tr>
					<td colspan="2"> In Decimal Value </td>
					<td colspan="2"> In Hexadecimal Value </td>
				</tr>
				<tr>
					<td> Upper Left Corner </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 00h </td>
					<td> 00h </td>
				</tr>
				<tr>
					<td> Upper Right Corner </td>
					<td> 79 </td>
					<td> 0 </td>
					<td> 5Fh </td>
					<td> 00h </td>
				</tr>
				<tr>
					<td> Center of Screen </td>
					<td> 40 </td>
					<td> 12 </td>
					<td> 28h </td>
					<td> 0Ch </td>
				</tr>
				<tr>
					<td> Lower Left Corner </td>
					<td> 0 </td>
					<td> 24 </td>
					<td> 00h </td>
					<td> 18h </td>
				</tr>
				<tr>
					<td> Lower Right Corner </td>
					<td> 79 </td>
					<td> 24 </td>
					<td> 4Fh </td>
					<td> 18h </td>
				</tr>
				</table>`,
		},
		{
			title: 'Clearing the Screen in Assembly Approach',
			content:`<b> CLEARING THE SCREEN IN ASSEMBLY APPROACH </b>
			<br/>
			<p style="text-indent:3em">Interrupt 10h function 06h handles the process of clearing the screen and scrolling. You can clear all or part of the display beginning at any screen location and ending at any higher-numberd location. The following sample code shows how to create the clear screen code in assembly :</p>
			<div class="terminal-box" style="font-size: 20px">
				<style> 
           		table, th, td
           		{
           			font-size: 20px;
  					text-align: left;
  					padding-right: 20px;
            	{
            	</style>
           		<table style="width: 100%">
            	<tr>
					<td> MOV AH, 0600h </td>
					<td> ; </td>
					<td> AH = 00h (Scroll); AL = 00h (Full Screen) </td>
				</tr>
				<tr>
					<td> MOV BH, 07h </td>
					<td> ; </td>
					<td> 0 (Black Background), 7 (White Text Color) </td>
				</tr>
				<tr>
					<td> MOV CX, 0000h </td>
					<td> ; </td>
					<td> CH = 00h (Row), CL = 00h (Column) </td>
				</tr>
				<tr>
					<td> MOV DX, 184Fh </td>
					<td> ; </td>
					<td> DH = 18h (Row), DL = 4Fh (Column) </td>
				</tr>
				<tr>
					<td> INT 10h </td>
					<td> ; </td>
					<td> call interrrupt service </td>
				</tr>
				</table>
			</div>`,
		},
		{
			title: 'Setting the Cursor Position',
			content:`<b> SETTING THE CURSOR POSITION </b>
			<br/>
			<p style="text-indent:3em">In text mode, setting the cursor position is a common requirement, because its position determines where the next character is to be displayed. Again, interrupt 10h is the BIOS operation for screen handling and function 02h in the AH tells the operation to set the cursor.</p>
			<div class="terminal-box" style="font-size: 20px">
				<style>
				table, th, td
           		{
           			font-size: 20px;
  					text-align: left;
  					padding-right: 20px;
            	}
            	</style>
           		<table style="width: 100%">
            	<tr>
					<td> MOV AH, 02h </td>
					<td> ; </td>
					<td> request to set the cursor position </td>
				</tr>
				<tr>
					<td> MOV BH, 00h </td>
					<td> ; </td>
					<td> page number 0 </td>
				</tr>
				<tr>
					<td> MOV DH, 0Ah </td>
					<td> ; </td>
					<td> Row = 10 in decimal </td>
				</tr>
				<tr>
					<td> MOV DL, 08h </td>
					<td> ; </td>
					<td> Column = 8 in decimal </td>
				</tr>
				<tr>
					<td> INT 10h </td>
					<td> ; </td>
					<td> call interrrupt service </td>
				</tr>
				</table>
			</div>`,
		},
		{
			title: `Displaying the Character 'x' at the Center of the Screen`,
			content: `<b>DISPLAYING THE CHARACTER 'x' AT THE CENTER OF THE SCREEN</b>
			<div class="terminal-box" style="font-size: 20px">
			<pre>
title activity.asm
code segment
  assume cs:code;ds:code
  org 100h
begin:
  mov ax, 0600h	; AH = 06h (Scroll); AL = 00h (Full Screen)
  mov bh, 07h	; 0 (Black Background), 7 (White Text Color)
  mov cx, 0000h	; CH = 00h (Row), CL = 00h (Column)
  mov dx, 184Fh ; DH = 18h (Row), DL = 4Fh (Column)
  int 100h      ; call interrrupt service

  mov ah, 02h	; request to set the cursor position
  mov bh, 00h 	; page number 0
  mov dh, 0ch 	; Row = 12 in decimal
  mov dl, 28h 	; Column = 40 in decimal
  int 10

  mov ah, 02	; DOS service Display Single Character
  mov dl, 41h	; ASCII Capital 'A'
  int 21h		; call interrupt service

  mov ax, 4c00h
  int 21h

code ends
  end begin

				</pre></div>`,
		},
		{
			title: `Displaying the String RTU at the center of the screen`,
			content: `<b>DISPLAYING THE STRING 'RTU' AT THE CENTER OF THE SCREEN</b>
			<div class="terminal-box" style="font-size: 20px">
			<pre>
title activity.asm
code segment
     assume cs:code;ds:code
     org 100h

begin:
     jmp start
msg1:db "RTU$"

start:
     mov ax, 0600h ;	AH = 06h (Scroll); AL = 00h (Full Screen)
     mov bh, 07h   ;	0 (Black Background), 7 (White Text Color)
     mov cx, 0000h ;	CH = 00h (Row), CL = 00h (Column)
     mov dx, 184fH ;	DH = 18h (Row), DL = 4Fh (Column)
     int 10h 	   ;	call interrrupt service

     mov ah, 09h   ;	request to set the cursor position
     mov bh, 00h   ;	page number 0
     mov dh, 0ch   ;	Row = 12 in decimal
     mov dl, 28h   ;	Column = 40 in decimal
     int 10

     mov ah, 09h	 ;	DOS service Display Single Character
     mov dx, OFFESET msg1;	ASCII Capital 'A'
     int 21h		 ;	call interrupt service

     mov ax, 4c00h
     int 21h

code ends
	end begin
		</pre></div>
				`,
		},
		{
			title: `Display ASCII Character Set`,
			content: `<b>DISPLAY ASCII CHARACTER SET</b>
			<br/>
			<p style="text-indent:3em">Among the extended ASCII characters 128d to 255d (80h - FFh) are a number of special symbols that are useful for displaying prompts, menus, and logs. Here are some of them:</p>
			<style> 
           		table, th, td
           		{	
           			border: 1px solid black;
  					border-collapse: collapse;
           			font-size: 20px;
  					text-align: center;
            	{
            	</style>
			<table style="width: 98%">
				<tr>
					<th>CHARACTER</th>
					<th> SINGLE LINE </th>
					<th> HEX CODE </th>
					<th> DOUBLE LINE </th>
					<th> HEX CODE </th>
				</tr>
				<tr>
					<td> Straight Lines:
						<br/>Horizontal Line  </td>
					<td> _ </td>
					<td> C4 </td>
					<td> _ </td>
					<td> CD </td>
				</tr>
				<tr>
					<td> Vertical Line </td>
					<td> | </td>
					<td> B3 </td>
					<td> | </td>
					<td> BA </td>
				</tr>
				<tr>
					<td> Corners:
						<br/>Top Left  </td>
					<td> &#8988; </td>
					<td> DA </td>
					<td> &#8988; </td>
					<td> C9 </td>
				</tr>
				<tr>
					<td> Bottom Right </td>
					<td> &#8991; </td>
					<td> D9 </td>
					<td> &#8991; </td>
					<td> BC </td>
				</tr>
				<tr>
					<td> Top Right </td>
					<td> &#8989; </td>
					<td> BF </td>
					<td> &#8989; </td>
					<td> BB </td>
				</tr>
				<tr>
					<td> Bottom Left </td>
					<td> &#8990; </td>
					<td> C0 </td>
					<td> &#8990; </td>
					<td> C8 </td>
				</tr>
			</table>`,
		},
		{
			title: `Color Chart`,
			content: `<b>COLOR CHART</b>
			<br/>
			<p style="text-indent:3em">For colored monitors, the background can display one out of eight colors and text can display one of sixteen colors.</p>
			<style> 
           		table, th, td
           		{	
           			border: 1px solid black;
  					border-collapse: collapse;
           			font-size: 20px;
  					text-align: center;
            	{
            	</style>
			<table style="width: 98%">
				<tr>
					<th> COLOR </th>
					<th> HEX CODE </th>
					<th> INTENSITY </th>
					<th> RED </th>
					<th> GREEN </th>
					<th> BLUE </th>
				</tr>
				<tr>
					<td> Black </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> Blue </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Green </td>
					<td> 2 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> Cyan </td>
					<td> 3 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Red </td>
					<td> 4 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> Magenta </td>
					<td> 5 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Brown </td>
					<td> 6 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> White </td>
					<td> 7 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Gray </td>
					<td> 8 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> Light Blue </td>
					<td> 9 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Light Green </td>
					<td> A </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> Light Cyan </td>
					<td> B </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Light Red </td>
					<td> C </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Light magenta  </td>
					<td> D </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
				</tr>
				<tr>
					<td> Yellow </td>
					<td> E </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 0 </td>
				</tr>
				<tr>
					<td> High Intensity White  </td>
					<td> F </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 1 </td>
				</tr>
			<table>
			`,
		},
		{
			title: `Text and Back Ground Colors`,
			content: `<b>TEXT AND BACK GROUND COLORS</b>
			<br/>
			<p style="text-indent:3em"> Here is an example of how to set the text and background colours and how to make them blink, where BL below means blinking. </p>
			<style> 
           		table, th, td
           		{	
           			border: 1px solid black;
  					border-collapse: collapse;
           			font-size: 20px;
  					text-align: center;
            	{
            	</style>
			<table style="width: 98%">
				<tr>
					<th colspan="4"> Background
									<br/>Color</th>
					<th colspan="4"> Text Color </th>
					<th rowspan="2">HEX
								<br/>CODE</th>
					<th rowspan="2"> MEANING </th>
				</tr>
				<tr>
					<td><b> BL </b></td>
					<td> <b> R </b> </td>
					<td> <b> G </b> </td>
					<td> <b> B </b> </td>
					<td> <b> I </b> </td>
					<td> <b> R </b> </td>
					<td> <b> G </b> </td>
					<td> <b> B </b> </td>
					
				</tr>
				<tr>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 28 </td>
					<td> Green Background Color
						<br/>Gray Text Color </td>
				</tr>
				<tr>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0A8 </td>
					<td> Green Background Color
						<br/>Gray Text Color
						<br/>Blinking </td>
				</tr>
				<tr>
					<td> 0 </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0E1 </td>
					<td> Brown Background Color
						<br/>Blue Text Color </td>
				</tr>
				<tr>
					<td> 1 </td>
					<td> 1 </td>
					<td> 1 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 0 </td>
					<td> 1 </td>
					<td> 0E1 </td>
					<td> Brown Background Color
						<br/>Blue Text Color
						<br/>Blinking </td>
				</tr>
			</table>`,
		},
		{
			title: `Displaying Character 'x' with Attributes`,
			content: `<b>DISPLAYING CHARACTER 'x' WITH ATTRIBUTES</b>
			<br/>
			<p style="text-indent:3em"> We are going to modify the previous program that displays the character 'x' at the center of the screen. This time we are going to add some attributes. Character 'x' will be displayed with green background and cyan text colors, respectively.</p>
			<div class="terminal-box" style="font-size: 20px">
			<pre>
title activity.asm
code segment
     assume cs:code;ds:code
     org 100h

begin :
     mov ax, 0600h	;  AH = 06h (Scroll); AL = 00h (Full Screen)
     mov bh, 07h	;  0 (Black Background), 7 (White Text Color)
     mov cx, 0000h 	;  CH = 00h (Row), CL = 00h (Column)
     mov dx, 184fH 	;  DH = 18h (Row), DL = 4Fh (Column)
     int 10h 		;  call interrrupt service

     mov ah, 02h	;  request to set the cursor position
     mov bh, 00h 	;  page number 0
     mov dh, 0ch 	;  Row = 12 in decimal
     mov dl, 28h 	;  Column = 40 in decimal
     int 10

     mov ah, 09h	;  request character display with attributes
     mov bh, 00h 	;  bl = 00 page number 0
     mov bl, 23h 	;  bl = 2 (Green BG), 3 (Cyan TC)
     mov cx, 0002h	;  number of times to display on screen

     mov ah, 02		;  Display Single Character
     mov dl, 41h	;  character to display letter 'e'
     int 21h	

     mov ax, 4c00h
     int 21h

code ends
     end begin
     </pre></div>`,
		},
	{
		title: `Displaying the String 'RTU' with Attributes`,
		content: `<b>DISPLAYING THE STRING 'RTU' WITH ATTRIBUTES</b>
		<div class="terminal-box" style="font-size: 20px">
		<pre>
title activity.asm
code segment
     assume cs:code;ds:code
     org 100h

begin :
     jmp start
A:   db "RTU$"

start :
     mov ax, 0600h	;  AH = 06h (Scroll); AL = 00h (Full Screen)
     mov bh, 07h	;  0 (Black Background), 7 (White Text Color)
     mov cx, 0000h 	;  CH = 00h (Row), CL = 00h (Column)
     mov dx, 185fH 	;  DH = 18h (Row), DL = 4Fh (Column)
     int 10h 		;  call interrrupt service

     mov ah, 13h	;  request to set the cursor position
     mov al, 00h 	;  do not advance the cursor
     mov bh, 00h 	;  page number 0
     mov bl, 28h 	;  2 (Green BG), 8 (Gray TC)
     mov bp, Offset A   ;  Address of the string
     mov dh, 0ch 	;  Row = 12 in decimal
     mov dl, 27h 	;  Column = 39 in decimal
     int 10

     mov ax, 4c00h
     int 21h

code ends
     end begin
	</div></pre>`},

	]

};