export const CHAPTER12 = {
	
	read_status: 'Disabled',
	title: 'Chapter XII',
	description: `<h1 align = center>CHAPTER 12</h1>
				<h2 align = center>USING PROCEDURE</h2>
				<h4 >OBJECTIVES:</4>`,
	content:
			`<p>At the end of the chapter, the learners are expected to: </p>
			<ul> <li>Differentiate the methods of how to assemble, link and execute assembly program.
			<li>Assemble a source program, link and object module, and execute assembly language code.
			<li>Recognize the role of the assembler and linker in running the program.</li></ul>			
			`,

	sub: [
		{
			read_status: 'Disabled',
			title: 'Using Procedure', //page 1
			content: `<b>DESIGN PROGRAMS USING PROCEDURE </b>
					<br/>
					<br/>
					<p>A good program designer breaks a program into procedures. Procedures make it possible to break a large program down into smaller piece so that each piece can be shown to work correctly without the reference to any of the others.</p>
					<p>You might ask, "How do I know how to split a long program into procedures?" Here are suggested guidelines to follow: </p>
				
					<ul><li>Design your program so that each procedure performs only one function.
						<li>Keep procedure small. </li></ul>
						
						<iframe width="560" height="315" src="https://www.youtube.com/embed/0dLkvasLSlo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

						`,
			
		},
		{	
			read_status: 'Disabled',
			title: 'Defining a Procedure', //page2
			content: `<b>DEFINING A PROCEDURE </b>
					<br/>
					<br/>
					<p>Every procedure is defined using PROC and ENDP directives. Since these are directives, they don't generate machine language instructions; rather PROC and ENDP are directions to the assembler, marking the beginning and end of the procedure. In assembly, the first declared procedure in the program is considered the major calling procedure.</p>	
					<pre>
	Format:
		&lt;procedure - name&gt; PROC
		  &lt;instruction-1&gt;
		  &lt;instruction-2&gt;
		  ....
		&lt;procedure - name&gt; ENDP

	Example:
		MAIN PROC
		  CALL P1
		  CALL P2
		  CALL QUITPROGRAM
		MAIN ENDP</pre></p>`,
		},
		{	
			read_status: 'Disabled',
			title: 'Calling a Procedure', //page 3
			content: `<b>CALLING A PROCEDURE </b>
					<br/>
					<br/>
					<p>To call a procedure, use CALL instruction
					<p><pre>
	Format:
		CALL &lt;procedure - name&gt;

	Example:
		MAIN PROC
		  CALL P1
		  CALL P2
		  CALL QUITPROGRAM
		MAIN ENDP

		P1 PROC
		  MOV AH, 02H
		  MOV DL, 41H
		  INT 21H
		  RET
		P1 ENDP
		</pre></p>
					<p><b>DEFINING A PROCEDURE</b>
					<p>You must make it a point that every procedure returns to its calling procedure. Use RET instruction, to do this just type RET before you end the procedure.</p>`,
		},
		{	
			read_status: 'Disabled',
			title: 'Applying the Concept of Procedure in a Program', //psge 4
			content: `<b>APPLYING THE CONCEPT OF PROCEDURE IN A PROGRAM</b>
					<br/>
					<br/>
					<p><pre>
	code segment
	  assume cs: code; ds:code
	  org 100h
	begin:
		mov cl,26
		mov ah,02
		mov dl,41h
	FIRST:  int 21h
		add dl,1
		loop FIRST

		call LINEFEED

		mov cl,10
		mov ah,02
		mov dl,30h
	SECOND:	int 21h
		add dl,1
		loop SECOND

		call LINEFEED

		mov cl,26
		mov ah,02
		mov dl,41h
	THIRD:	int 21h
		add dl,1
		loop SECOND
		int 20h

	LINEFEED:mov ah,02
		mov dl,0ah
		int 21h
		mov dl,0dh
		int 21h
		RET
	code ends
	  end begin
		</pre>`,
		},

		{	
			read_status: 'Disabled',
			title: 'INT 10H Functions', //page5
			content:`
			<style>
			table, th, td {
  			border: 1px solid black;
  			border-collapse: collapse;
			}
			 th {
			 	text-align: left;
			 	padding-left: 20px;
			 	}
			 tr {
			 	background-color: #ffcf86;
			 	}
			</style>
			<body>
			<table style="width:98%">
 				<tr style="background-color:#fda63a">
   					<td colspan="2" align="center" ><b>INT 10H FUNCTIONS </b></td>
  				</tr>

  				<tr>
  					<td width="150" align="center"> AH = 00H </td>
  					<th><p><font size="3"><b> Set the display mode.</p></b>

 						<p >
  						<b>&#8226; TEXT MODE </b>
  						<ul style="list-style-type:circle;">
  						<li> AL=00H 40 columns x 25 rows, black and white </li>
						<li> AL=01H 40 columns x 25 rows, color </li>
						<li> AL=02H 80 columns x 25 rows, black and white </li>
						<li> AL=03H 80 columns x 25 rows, color </li>
						<li> AL=04H 80 columns x 25 rows, monochrome display adapter </li>
						</ul></p>

						<p>
						<b>&#8226; GRAPHICS MODE </b>
						<ul style="list-style-type:circle;">
						<li> AL=04H 320 x 200 pixels, color </li>
						<li> AL=05H 320 x 200 pixels, black and white </li>
						<li> AL=06H 640 x 200 pixels, black and white </li>
						</p></ul>
						</th>
				</tr>

				<tr>
  					<td align="center">AH = 01H</td>
  					<th><p> <font size="3" ><b> Set the cursor size. </b></p>
  						
  						<p>		
  						CH Starting scan line of the cursor.<br/>
  						<ul>
  						-The top line is 00H on both the monochrome and color graphics displays <br/>
  						-The bottom line 13H for monochrome and 07h for color graphics color graphics adapter. <br/>
  						-Valid range: 00H to 31H
						</ul></p>
						
						<p>
						CL Last scan line of the cursor.</p>

						<p>
						The power-on setting for the color graphics adapter is CH=06 and CL=07H. For monochrome display; CH=11H and CL=12H
						</th></p>
				</tr>

				<tr>
					<td align="center">AH = 02H</td>
					<th><p> <font size="3" ><b> Sets the cursor position.</b></p>
							
						<p>
						DH Row number <br/>
						DL Column number <br/>
						The upper left corner of the screen is (0, 0).</p>
						
						<p>
						BH Page number</br>
						-This is the number of the display page, but most program  use page zero (0).</p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 03H</td>
					<th><p> <font size="3" ><b> Reads the cursor position. </b></p>

					<p>
					BH Page Number</p>

					<p>
					ON exit: <br/>
					DH Row number of the cursor </br>
					DL Column number of the cursor <br/>
					CH and CL size of the cursor </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 04H</td>
					<th><p> <font size="3" ><b> Reads the light pen position. </b></p>
				</tr>

				<tr>
					<td align="center">AH = 05H</td>
					<th><p> <font size = "3"> Select active display page. </p>
						<p> AL New page number
						<ul>
						-From 0 to 7 for modes 0 and 1 <br/>
						-From 0 to 3 for modes 2 and 3 <br/>
						</ul></p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 06H</td>
					<th><p> <font size = "3"><b> Scrolls Up. </b></p>

						<p>
						AL Number of lines to b lank at the bottom of the window. <br/>
						<ul>
						- Normal scrolling blanks on (1) line <br/>
						- Set to zero (0) blank entire window. <br/>
						</ul></p>

						<p>BH Display attributes to use for blank lines. </p>
						<p>CH, CL Row and column number of the upper-left corner of the screen. </p>
						<p>DH, DL Row and column number of the lower-right corner of the screen. </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 07H</td>
					<th><p> <font size = "3"><b> Scroll down. </b></p>
						<p>The same with scroll up (AH = 06h), but lines are left blank at the top of the screen instead of the bottom.</p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 08H</td>
					<th><p> <font size = "3"><b> Read attribute and character under the cursor. </b></p>
						<p> AH Attribute of character read (Text mode only) </p>
						<p> AL Character read </p>
						<p> BH Display page (Text mode only) </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 09H</td>
					<th><p> <font size = "3"><b> Display character with attributes. </b></p>
						<p> AL Character to display </p>
						<p> BH Page number (Text mode only) </p>
						<p> BL Background and text color </p>
						<p> CX Number of times to write character and attribute on screen </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 10H</td>
					<th><p> <font size = "3"><b> Display character with attributes. </b> (normal attributes) </p>
						<p> AL Character to write </p>
						<p> BH Display page</p>
						<p> CX Number of times to write character </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 11H</td>
					<th><p> <font size = "3"><b> Various graphics function </b></p>
						<p> AL Character to write </p>
						<p> BH Display page </p>
						<p> CX Number of times to write character </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 13H</td>
					<th><p> <font size = "3"><b> Display string attributes. </b></p>
						<p> AL = 00H Display attribute and string without advancing cursor. </p>
						<p> BH Page number (text mode only) </p>
						<p> BL Background and text color </p>
						<p> BP Address of string in base pointer of extra segment. </p>
						<p> CX Length of string </p>
						<p> DH Row number </p>
						<p> DL Column number </p>
				<tr>
					<td align="center">AH = 14H</td>
					<th><p> <font size = "3"><b> Writes teletype. </b>
					Writes one character to the screen and move the cursor to the next position.</p>
						<p> AL Character to write </p>
						<p> BH Display page (Text mode only) </p>
						<p> BL Color of character (Graphics mode only) </p>
					</th>
				</tr>

				<tr>
					<td align="center">AH = 15H</td>
					<th><p> <font size = "3"><b> Return current video state. </b>
						<p> AH Number of characters per line </p>
						<p> AL Display mode current current set </p>
						<p> BH Active display pages </p>
					</th>
				</tr>
  					</body></table>`,
		},
		
		{	
			read_status: 'Disabled',
			title: 'INT 21H Functions', //page6
			content: `
			<style>
			table, th, td {
  			border: 1px solid black;
  			border-collapse: collapse;
			}
			 th {
			 	text-align: left;
			 	padding-left: 20px
			 	}
			 tr {
			 	background-color: #ffcf86;
			 	}
			</style>
			<body>
			<table style="width:98%">
 				<tr style="background-color:#fda63a">
   					<td colspan="2" align="center" ><b>INT 21H FUNCTIONS </b></td>
  				</tr>

  				<tr>
					<td width="150" align="center">AH = 01H</td>
					<th><p> <font size = "3"><b> Keyboard input. </b>
					This function waits for you to type a character on the keyboard. It echoes the character to the screen and returns the ASCII in the AL register.</p>
					<p> AL Character read from the keyboard </p>
					</th>
				</tr>

				<tr>
					<td align="center"> AH = 02H </td>
					<th><p> <font size = "3"><b> Display output. </b>
					This function displays one character on the screen. </p>
						<p> DL of DX Character to display on the screen. </p>
					</th>
				</tr>

				<tr>
					<td align="center"> AH = 07H </td>
					<th><p> <font size = "3"><b> Keyboard input without echo. </b>
					This function waits for you to type a character on the keyboard but the character does not display on the screen and returns the ASCII in the AL register. </p>
						<p> AL Character read from the keyboard. </p>
					</th>
				</tr>

				<tr>
					<td align="center"> AH = 09H </td>
					<th><p> <font size = "3"><b> Display String.ssss </b>
					This function display the string pointed to by the DS, DX pair of registers.</p>
						<p>The end of the string should be marked with the dollar ($) symbol. </p>
					</th>
				</tr>

				<tr>
					<td align="center"> AH = 0AH </td>
					<th><p> <font size = "3"><b> Read String. </b>
					This function reads the string from the keyboard.</p>
					</th>
				</tr>

				<tr>
					<td align="center"> AH = 4CH </td>
					<th><p> <font size = "3"><b> Exit to DOS. </b>
					This function allows to go back to DOS environment. </p>
						</p>AL Return code<br/>
							- Normally sets to zero (0). </p>
					</th>
				</tr>
 			</body></table>`,
		},







{
			title: `Case Study 5`,
			content:`
			<b>LABORATORY CASE STUDY 5</b>
			<br/>
			<br/>
			<table style="border:1px solid black;margin-left:auto;margin-right:auto;">
			<td><div style="width:700px;height:130px;border:2px solid #000;" align= "center">
			<ul style="list-style-type:none;"><font size="3rem">
		<li>MENU</li>
		<li>1.	Converter</li>
		<li>2.	 Calculator</li>
		<li>3.	Exit</li>
		<li>Enter your Choice: 1</li>
		</td>
		</div>
		</table>
		<br/>
		<table style="border:1px solid black;margin-left:auto;margin-right:auto;">
		<td><div style="width:700px;height:200px;border:2px solid #000;" align= "center">
		<p style="list-style-type:none;"><font size="3rem">
		<p>(CMD)</p>
		<p>CONVERSION PROGRAM</p>
		<p>A PROGRAM THAT PERFORMS CONVERSION</p>
		<p>Convert DECIMAL to (1)HEX (2)OCTAL (3 BINARY:</p>
			`,
		

		
		},
	]
};