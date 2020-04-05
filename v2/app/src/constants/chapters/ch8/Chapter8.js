export const CHAPTER8 = {
	read_status: 'Disabled',
	title: 'Chapter VIII',
	description: `<h1 align = center>CHAPTER 8</h1>
				<h2 align = center>UNDERSTANDING THE ASSEMBLY LANGUAGE PROGRAM</h2>`,
	objectives: [
	`Comprehend how to create a program in assembly.`,
	`Construct unpretentious but logical assembly language programs. Realize the benefits of understanding the structure of the assembly language.`,

	],
	sub: [
		{
			read_status: 'Disabled',
			title: 'Creating your own assembly language program',
			content: `
				
<p><b>CREATING YOUR OWN ASSEMBLY LANGUAGE PROGRAM</b></p>
<br/>
<p>Now, your task is to code a simple assembly language program. Here's how to do it:</p>
<p>Step 1: Open the text editor (edit.com) by typing edit, followed by a space, a filename with the extension of .ASM from the command prompt and press ENTER key.</p>
	<div class="terminal-box">
			C:\\>edit myprogram.asm
	</div>

<p>Note:</p>
	<p>The base name for your filename must not exceed to eight (8) characters.</p>
	<p>Parts of a Filename</p>
		<ul>
		<li>Base name</li>
		<li>Dot symbol</li>
		<li>Extension name</li>
		</ul>
	<br>
	<p>Format of Filename Structure</p>
<p><pre>
	&lt;base name&gt; . &lt;extension name&gt;
</pre></p>

<p>
	<img src="https://ik.imagekit.io/assembly/chapter8/cmdImage1_Vf-CLT1dC.png" alt="Assembly program"/>
</p>

<p>Step 2:	Then, you can type now your program, just like using an MS Word application.</p>
<p>Key in the given program:</p>

<div class="terminal-box"><pre>
 TITLE MYPROG.ASM
 DOSSEG
 .MODEL SMALL
 .STACK 0100h
 .DATA
	 X DB "Kumusta, RTU!$"
 .CODE
	  MOV AX, @DATA
	  MOV DS, AX

	  MOV AH, 09h
	  MOV DX, OFFSET X
	  INT 21h

	  MOV AX, 4C00h
	  INT 21h

	  END
</pre></div>`
		},
		{
			read_status: 'Disabled',
			title: 'Saving, Exiting your program',
			content: `
<p><b>SAVING YOUR WORK</b></p>
<p>After typing the code, save your work by pressing Alt-f, use the arrow down key to choose Save, and press ENTER key.</p>
<br>
<p><b>EXITING THE EDITOR</b></p>
<p>Now it's time to exit from the text editor and go back to DOS environment. To do this, press Alt-F, choose Exit, and press ENTER key.</p>`
		},

		{
			read_status: 'Disabled',
			title: 'Structure of assembly Language Program',
			content: `
<p><b>STRUCTURE OF AN ASSEMBLY LANGUAGE PROGRAM</b></p>
<p>This is how a simple assembly language program looks like. Indent if possible for readability purposes.</p>

<div class="terminal-box"><pre>
 title myprog.asm
 code segment
	  assume cs:code;ds:code
	  org 100h
 begin:
 	  mov ah, 09h
 	  mov dx, offset msg1
 	  int 21

 msg1: DB "Kumusta, RTU!$"

 code ends
 	end begin
</pre></div>`

		},

		{
			read_status: 'Disabled',
			title: 'Instruction for Initializing, Concluding program',
			content: `
<p><b>INSTRUCTIONS FOR INITIALIZING THE PROGRAM</b></p>

<div class="terminal-box"><pre>
 TITLE myprog.asm
 code segment
	  assume cs:code;ds:code
	  org 100h
 begin:
</pre></div>

<p><b>INSTRUCTIONS FOR CONCLUDING THE PROGRAM</b></p>

<div class="terminal-box"><pre>
 	MOV AX, 4C00h
 	INT 21h
 END
</pre></div>`

		},

		{

			read_status: 'Disabled',
		title: 'Example of Assembly Programming',
			content: `
<p><b>EXAMPLES OF ASSEMBLY LANGUAGE PROGRAMS</b></p>

<p>&#8226; Displaying a character (uppercase 'A') on screen.</p>
<div class="terminal-box"><pre>
 TITLE myprog.asm 	; name of the program
 code segment
	assume cs:code;ds:code
	org 100h
 begin:
 	  mov ah, 02h	  ;request display character
	  mov dl, 41h	  ;ASCII character 'A' to display
	  int 21h	  ;call interrupt

	  mov ax, 4C00h	  ;end
	  int 21h

 code ends
 	end begin
 END

</pre></div>

<p>&#8226; Using control characters (0A - Line Feed and 0D - Carriage Return) in a screen display</b></p>
<div class="terminal-box"><pre>
 TITLE MYPROG.ASM 	; name of the program
 code segment
	assume cs:code;ds:code
	org 100h
 begin:
	mov ah, 02h	; request display character
	mov dx, 41h	; character 'A'
	int 21h		; call interrupt service
	mov dl, 0ah	; line feed character
	int 21h		; call interrupt service
	mov dlm 0dh	; carriage return character
	int 21h		; call interrupt service
	mov dl, 44h	; character 'D'
	int 21h		; call interrupt service
	mov dl, 0ah	; line feed character
	int 21h		; call interrupt service
	mov dl, 0dh	; carriage return character
	int 21h		; call interrupt service
	mov dl, 55h	; character 'U'
	int 21h		; call interrupt service

	mov ax, 4C00h	;end
	int 21h
 code ends
 	end begin

</pre></div>

<p>&#8226; Displaying the same character (lowercase 'z') thirty times using LOOP on the screen.</b></p>
<div class="terminal-box"><pre>
TITLE MYPROG.ASM 	; name of the program
code segment
	assume cs:code;ds:code
	org 100h
begin:
	MOV CX, 001Eh	; setting the numbers of loops
	MOV AH, 02h	; request display characters
	MOV DL, 7Ah	; character to display
 A:	INT 21h		; call interrupt service
	LOOP B 		; go to label A

	MOV AX, 4C00h	;end
	INT 21h
code ends
	end begin

</pre></div>

<p>&#8226; Displaying different characters ('A' to 'Z') using LOOP on the same line.</b></p>
<div class="terminal-box"><pre>
TITLE MYPROG.ASM 	; name of the program
code segment
	assume cs:code;ds:code
	org 100h
begin:
	MOV CX, 001Ah	; setting the numbers of loops
	MOV AH, 02h	; request display characters
	MOV DL, 'A'	; character 'A'
 B:	INT 21h		; call interrupt service
	INC DL 		; add 1 to the value of DL
	LOOP B 		; go to label B
	MOV AX, 4C00h 	;end
	INT 21h
code ends
	end begin

</pre></div>

<p>&#8226; Display characters ('0' to '9') using LOOP vertically.</b></p>
<div class="terminal-box"><pre>
TITLE MYPROG.ASM 	; name of the program
code segment
	assume cs:code;ds:code
	org 100h
begin:
	MOV CX, 001Ah	; setting the numbers of loops
	MOV AH, 02h	; request display characters
	MOV DL, 30h	; character '0'
 C:	INT 21h		; call interrupt service
	MOV BL, DL 	; temporarily store the value 
			  of DL to BL
	MOV DL, 0Ah 	; line feed character
	INT 21h		; call interrupt service
	MOV DL, 0Dh 	; carriage return character
	INT 21h		; call interrupt service
	MOV DL, BL	; BL transfer back the value to DL
	INC DL 		; add 1 to the value of DL
	LOOP C 		; go to label C
	
	MOV AX, 4C00h	; end
	INT 21h
code ends
	end begin

</pre></div>

<p>&#8226; Displaying different characters ('0' to '9') using LOOP with separator (underscore) horizontally.</b></p>
<div class="terminal-box"><pre>
TITLE MYPROG.ASM 	; name of the program
code segment
	assume cs:code;ds:code
	org 100h
begin:
	MOV CX, 001Ah	; setting the numbers of loops
	MOV AH, 02h	; request display characters
	MOV DL, 30h	; character '0'
 A:	INT 21h		; call interrupt service
	MOV BL, DL 	; temporarily store the value 
			  of DL to BL
	MOV DL, 5Fh	; underscore character
	INT 21h		; call interrupt service
	MOV DL, BL	; BL transfer back the value to DL
	INC DL 		; add 1 to the value of DL
	LOOP A 		; go to label A

	MOV AX, 4C00h	; end
	INT 21h
code ends
	end begin

</pre></div>

<p>&#8226; Displaying string ('computer') on screen.</b></p>
<div class="terminal-box"><pre>
TITLE MYPROG.ASM 	; name of the program
code segment
	assume cs:code;ds:code
	org 100h
begin:
	MOV AH, 09h		; request display string
	MOV DX, OFFSET msg1	; load address of the
				  string 
	INT 21h			; call interrupt service

	MOV AX, 4C00h		; end
	INT 21h

msg1 : DB "Computer!$"
		
code ends
	end begin

</pre></div>


<iframe width="560" height="315" src="https://www.youtube.com/embed/BDYwJ1FryKc?start=502&end=709" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`

		},


		{
			title: `Exercise 1`,
			sub: [
			{
				title: `Lecture`,
			},
			{
				title: `Laboratory`,
				content:`
				<h1>Laboratory Exercise 1</h1>
				<p>Formulate an assembly language program that will display the given sample output below. Write your answer on the space provided. </p>
				<p><b>OUTPUT: FILENAME: PTASK8A.ASM</b></p>
				<div style="width:700px;height:90px;border:2px solid #000;">
				<ul style="list-style-type:none;"><font size="3rem">
				<li>(CMD)</li>
				<li>Input A Letter: A CAPITAL LETTER</li>
				<li>F:\CHRIST~1\ASSEMB~1\EXERCI~1>_</li>
				</ul>
				</div>
				<br/>
				<div style="width:700px;height:90px;border:2px solid #000;">
				<ul style="list-style-type:none;"><font size="3rem">
				<li>(CMD)</li>
				<li>Input A Letter: : a small LETTER</li>
				<li>F:\CHRIST~1\ASSEMB~1\EXERCI~1>_</li>
				</ul>
				</div>
				`,
			}
			]
		},
		{
			title: `Exercise 2`,
			sub: [
			{
				title:`Lecture`,
			},
			{
				title: `Laboratory`,
				content: `
				<h1>Laboratory Exercise 2</h1>
				<p>Formulate an assembly language program that will display the given sample output below. Write your answer on the space provided. </p>
				<p><b>OUTPUT: FILENAME: PTASK8B.ASM</b></p>
				<div style="width:700px;height:400px;border:2px solid #000;">
				<ul style="list-style-type:none;"><font size="3rem">
				<li>(CMD)</li>
				<li>F:\CHRIST~\TASM>menu</li>
            	<li>MENU</li>
				<li>1.	ALPHABETH</li>
				<li>2.	NUMERIC</li>
				<li>3.	EXIT</li>
				<li>Enter your Choice: 1</li>
				<li>ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
				<li>F:\CHRIST~\TASM>menu</li>
            	<li>MENU</li>
				<li>1.	ALPHABETH</li>
				<li>2.	NUMERIC</li>
				<li>3.	EXIT</li>
				<li>Enter your Choice: 2</li>
				<li>0123456789</li>
				<li>F:\CHRIST~\TASM></li>
				</ul>
				</div>
				`,
			}				
			]
		},
		{
			title: `Case Study 4`,
			content: `
			<b>LABORATORY CASE STUDY 4</b>
			<br/>
			<br/>
			<p>Formulate an assembly language program that will indicate whether the character is on ALPHABET, a NUMERIC, and a SPECIAL CHARACTER.</p>
			<p><b>OUTPUT: FILENAME: CASE4.ASM</b></p>
			<div style="width:700px;height:220px;border:2px solid #000;">
			<ul style="list-style-type:none;"><font size="5rem">
			<li>Input a Character: A</li>
			<li>It’s an Alphabet</li>
			<li>Input a Character: 9</li>
			<li>It’s a Numeric</li>
			<li>Input a Character: *</li>
			<li>It’s a Special Character</li>
			</ul>
			</div>

			`,
			},
	]
};