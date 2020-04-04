export const CHAPTER7 = {
	read_status: 'Disabled',
	title: 'Chapter VII',
	description: `<h1 align = center>CHAPTER 7</h1>
				<h2 align = center>REQUIREMENTS FOR CODING ASSEMBLY LANGUAGE</h2>`,

	objectives: [
		`1) Enumerate the key requirements for designing assembly language program.`,
		`2) Apply these requirements in actual program development.`,
		`3) Integrate the worth of each requirements in making a successful working program in assembly language.`

	],
	sub: [
		{
			read_status: 'Disabled',
			title: 'Comments, Reserve Words and its Category',
			content: `

<style type="text/css">
pre{
	font-family: Times New Roman, Times, serif;
}
</style>

	<h4>COMMENT</h4>
	<p><i>Comment</i> is a part of a program that is ignored by the assembler. Though optional, the use of comments throughout a program can improve its readability and clarity especially in assembly language where the purpose of a set of instruction is often ambiguous. It begins with a semicolon (;) and whenever you code it, the assembler assumes that all characters to its right side is a comment.
	</p>

	<h4>Ways to Include Comment</h4>
	<ul>
		<li>Any statement whose first non-blank character is a semicolon <br>
			Example : <br>
			<span style="padding-left: 50px">; This program displays Hello,World!</span>
		</li>
		<br>
		<li> At the end of an instruction<br>
			Example : <br>
			<span style="padding-left: 50px">MOV AX, 8053h ; initializes the value of AX to 8053h</span>
		</li>	
	</ul>
	<br>
	<h4>RESERVED WORDS</h4>
	<p>These are words in which assembler assigns a special meaning and it cannot be used as identifiers. They are reserved for their own purpose to be used only under special condition. Using them for a wrong purposes causes the assembler to generate error messages.
	</p>

	<h4>Categories of Reserved Words</h4>
	<ul>
		<li>Instruction<br>
			These are statements that will be translated into machine language and executed by the computer.<br>
			Examples :<br> 
			<pre>
			MOV 	ADD 	SUB
			MUL 	DIV 	INC
			DEC 	LOOP 	CMP

			</pre>
			</li>
							
		<li> Directives<br>
			These are statements that give information to the assembler. Sometimes directives are called pseudo-ops (short term for pseudo operations and pronounced as "su-da-op"). Unlike instructions, directives are not transalated into machine language but they are necessary for your program to assemble properly.
			<br>
			<pre>
			TITLE DOSSEG
			.MODEL
			.STACK
			.DATA
			.CODE
			</pre>
		</li>

		<li>Operators <br>
			These are used at assembly time to affect the value of an operand. Like directives, operators are recognized by the assembler and they don't correspond to machine instructions.<br>
			Example :<br>
			<pre>
			OFFSET 		SIZE 		LENGTH
			PTR 		MODE 		+,-,*,/
			</pre>

		</li>

		 <li>Pre-defined Symbols<br>
			These are symbols that return information to your program.<br>
			Example : <br>
			<pre>
			@data 		@model
			</pre>

		</li>
	</ul>
	
	-<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZEer_0VTPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`,
		},

		{
			read_status: 'Disabled',
			title: 'Identifier, Rules in Constructing Identifiers',
			content: `
<style type="text/css">
pre{
	font-family: Times New Roman, Times, serif;
}
</style>

	<h4>IDENTIFIER</h4>
	<p>An identifier is user-defined name (variable) that you apply to an item in your program that you expect to reference.</p>
	<p>Type of Identifiers</p>
	<ul>
		<li>Name<br>
			It referes to the address of a data item<br>
			Example :<br>
			<pre>
			x 		db 	0
			msg 	db 	"aloha  $"	
			</pre> 

		</li>

		<li>Label<br> 
			It refers to the address of an instruction or procedure<br>
			Example :<br>
			<pre> 
			MOV DL, 41h 
	   A: 	INT 21h
	   		ADD DL, 30h
	   		INT 21h
	   		SUB DL, 20h
	   		LOOP A
			</pre>
		</li>
	</ul>

	<h4>Rules in Constructing Valid Identifier</h4>
	<ul>
		<li>It must use letters (A..Z, a..z), numbers (0..9) and/or special characters like underscore (_), question mark (?), and at sign (@).</li>
		<li>It must always start with a letter.</li>
		<li>It must not use reserved words.</li>
		<li>It must not exceed to 31 characters.</li>
	</ul>
		<pre>
		Examples of valid identifiers : 	neym r2d2 Num_1 msg8

		Exmaples of invalid identifiers : 	title num-1 4ever 
			
		</pre>`,
		},

		{
			read_status: 'Disabled',
			title: 'Statement, Most Common Directives',
			content: `

<style type="text/css">
pre{
	font-family: Times New Roman, Times, serif;
}

div.format-box{
	border : 2px solid black;
	margin-left: 5%;
	width: 90%;
	/*width: 80%;*/
	padding: 1%;
	padding-left: 45%;
}

table,tr,td{
	border: 1px solid black;
	border-collapse: collapse;
	border-spacing: 0;
	
}

.table1{
	text-align: center;
}

</style>
	<h4>STATEMENT</h4>

	<p>An assembly language statement programs consist of a set of statements. The two types of statements are <i>instructions</i> and <i>directives</i>. Since these types were discussed in the previous part of this text, here are some of the general guidelines for coding a bonafide statement:</p>
	<ul>
		<li>A statement may begin anywhere on the line.</li>
		<li>Each line can only contain one statement.</li>
		<li>Unlike C Language, assembly is not case sensitive. You can use either upper or lowecase letters.</li>
		<li>Take note that statements can have two (2) operands, a single operand and even none at all!</li>
	</ul>

	<pre>
		Examples : 	ADD AX, BX		; uses 2 operands
					DEC CX			; uses single operand
					RET 			; no operand
		
	</pre>

	<h4>MOST COMMON DIRECTIVES</h4>

	<p>We already learned that assembly language supports a number of statements that enable you to control the way in which a program assbles and lists. These statements called <i>directives</i> act only during the assembly of a program and generates no machine code. The most common directives are explained in the next section :</p>

	<ol type="1">
		<li>TITLE<br>
			It creates a title (up to 60 characters) of a source listing<br>
			Format:<br><br>
			<div class="format-box">
				TITLE&lt;TEXT&gt;
			</div><br>

			<pre>
Examples : 	TITLE This program displays Kamusta, RTU!
			TITLE PROGRAM1.ASM
			</pre>
			
		</li>

		<li>DOSSEG<br>
			It tells the assembler to ignore all other request and to adopt the DOS segment sequence-stack, data, and code.<br>
			Format:<br><br>
			<div class="format-box">
				DOSSEG
			</div><br>

			<pre>
Examples : 		DOSSEG

			</pre>
			
		</li>

		<li>.MODEL<br>
			It specifies and initializes the memory model before defining any segment.<br>
			Format:<br><br>
			<div class="format-box">
				.MODEL &lt;memory-model&gt;
			</div><br>

			<pre>
Examples :		.MODEL TINY
				.MODEL SMALL
				.MODEL MEDIUM
			</pre>
			
		</li>

		<li>.STACK<br>
			It defines the size of the stack. The default stack size is 1,024 bytes which you can overrule.<br>
			Format:<br><br>
			<div class="format-box">
				.STACK&lt;size&gt;
			</div><br>

			<pre>
Examples :		.STACK 0100h
			</pre>
			
		</li>

		<li>.DATA<br>
			It defines and marks the beginning of data segment<br>
			Format:<br><br>
			<div class="format-box">
				.DATA 
			</div><br>

			<pre>
Example 			.DATA
			</pre>
			
		</li>

		<li>.CODE<br>
			It defines and marks the code segment which consists of a set of instructions.<br>
			Format:<br><br>
			<div class="format-box">
				.CODE  
			</div><br>

			<pre>
Example 			.CODE
			</pre>
			
		</li>

		<li>END<br>
			It it placed at the last line of the source code.<br>
			Format:<br><br>
			<div class="format-box">
				.END   
			</div><br>

			<pre>
Example 			.END
			</pre>
			
		</li>


		<li>For defining data <br><br>
			<table width="98%" class="table1">
				<tr>
					<td style="height: 30px">DIRECTIVE</td>
					<td >LENGTH</td>
					<td >DESCRIPTION</td>
				</tr>

				<tr>
					<td>DB</td>
					<td>1</td>
					<td>Define Byte</td>
				</tr>

				<tr>
					<td>DW</td>
					<td>2</td>
					<td>Define Word</td>
				</tr>

				<tr>
					<td>DD</td>
					<td>4</td>
					<td>Define Doubleword</td>
				</tr>

				<tr>
					<td>DF</td>
					<td>6</td>
					<td>Define Farword</td>
				</tr>

				<tr>
					<td>DQ</td>
					<td>8</td>
					<td>Define Quadword</td>
				</tr>

				<tr>
					<td>DT</td>
					<td>10</td>
					<td>Define Tenbytes</td>
				</tr>
			</table>
		</li>
	</ol>`,
		},

		{
			read_status: 'Disabled',
			title: 'String',
			content: `
<style type="text/css">
pre{
	font-family: Times New Roman, Times, serif;
}
</style>

		<h4>STRING</h4>

		<p><i>String</i> is used for descriptive data such as person's name or simply a message. It must end with a dollar ($) symbol and defined in double quotation marks (" "). DB is the conventional format for defining string of any length.</p>

		<pre>Example :		neym	db 		"Louis Vuitton$"</pre>			
		
		<p>If a string contains a single quote, you can define it this way :</p>

		<pre>Example :		food 	db 		"Gerry's Grills$"</pre>`,
		},

		{
			read_status: 'Disabled',
			title: 'Numerical Constant',
			content: `
<style type="text/css">
pre{
	font-family: Times New Roman, Times, serif;
}

table,tr,td{
	border: 1px solid black;
	border-collapse: collapse;
	border-spacing: 0;
	
}

.table2{
	text-align: left;
}

.table2 td{
	padding-left: 5px;
}

</style>

		<h4>NUMERICAL CONSTANT</h4>

		<p>They are used to define arithmetic values and memory addresses. It is identified with a radix <i>specifier</i> such as d for decimal, b for binary, and h for hexadecimal.</p>

		<p>Example :</p> 
	   <pre>
	   msg 	db 		"Bon jour, monsieur!", OAh, 0Dh, "$"

is the same with:

	   msg 	db 		"Bon jour, monsieur!", 10d, 13dd, "$"

	   </pre>


	<p><b>Display String</b>. This function displays the string pointed to by the DS, DX pair of registers.</p>

	<b>MOV AH, 09</b><br>
	<b>INT 21 FUNCTIONS</b><br>

	<p>The end of the strings should be marked with the dollar ($) symbol.</p>

	<p>Sample Program</p>
	<!-- put image here -->
	<img src="https://ik.imagekit.io/assembly/chapter7/cmdImage1_VSGzxN_4s.png" alt="put image here ">
	<br><br>
	<table width="98%" class="table2">
		<tr>
			<td>MOV AX, 09</td>
			<td>DOS Service that Display String</td>
		</tr>
		<tr>
			<td>MOV DX, 109</td>
			<td><b>DX</b> is the register where to store the location (Offset Address) of the String</td>
		</tr>
		<tr>
			<td></td>
			<td><b>0109</b> is the offset address where the string is located/td>
		</tr>
		<tr>
			<td>INT 21</td>
			<td>Display the content of the</td>
		</tr>
		<tr>
			<td>INT 20</td>
			<td>End of the program</td>
		</tr>
		<tr>
			<td>DB</td>
			<td><b>Define Btyes</b> followed by the " &lt;string&gt; "</td>
		</tr>
		<tr>
			<td>$</td>
			<td>Terminator</td>
		</tr>
	</table>

	<p>Sample Program with Multiple Strings</p>
	<!-- put image here -->
	<img src="https://ik.imagekit.io/assembly/chapter7/cmdImage2_hBLPmXPID.png" alt="put image here">
	<br><br>`,
		},

		{
			read_status: 'Disabled',
			title: 'Keyboard Inputs',
			content: `

<style type="text/css">

table,tr,td{
	border: 1px solid black;
	border-collapse: collapse;
	border-spacing: 0;
	
}

.table2{
	text-align: left;
}

.table2 td{
	padding-left: 5px;
}

</style>

	<p><b>Keyboard Input</b> This function waits for you to type a character on the keyboard. It echoes the character to the screen and returns the ASCII in the AL register.</p>

	<p>AL Character read from the keyboard.</p><br>

	<p>MOV AH,01<br>
	INT 21 FUNCTION</p>

		<!-- put image here -->
	<img src="https://ik.imagekit.io/assembly/chapter7/cmdImage3_rbDcpK7Wv.png" alt="put image here">
	<br><br>

	<table width="98%" class = "table2">
		<tr>
			<td>MOV AH, 01</td>
			<td>DOS Service that allows to input <b>SINGLE</b> character with echo ON</td>
		</tr>

		<tr>
			<td>INT 21</td>
			<td>Store the ASCII value at the register AL</td>
		</tr>

		<tr>
			<td>INT 20</td>
			<td>End of the Program</td>
		</tr>
	</table>
	<br><br>
	<!-- put image here -->
	<img src="https://ik.imagekit.io/assembly/chapter7/cmdImage4_CzK5B7fka.png" alt="put image here">
	<br><br>

	<pre> AL = 61		61 the ASCII value of 'a'</pre>
`
		},
		{
			title: `Exercise 1`,
			sub: [
			{
				title: `Lecture`,
				content:`
				`,
			},
			{
				title: `Laboratory`,
				content: ``,
			}
			]
		},
		{
			title: `Exercise 2`,
			sub: [
			{
			title: `Lecture`,
			content: ``,
			},
			{
				title: `Laboratory`,
				content:`
				<h1>Laboratory Exercise 2</h1>
				<p>Using your assigned unit in the laboratory, construct an assembly language program that will display your nickname, course, mobile number, and e-mail address at the center of the screen.</p>
				<table style="border:1px solid black;margin-left:auto;margin-right:auto;">
				<td><div style="width:700px;height:200px;border:2px solid #000;" align= "center">
				<p>Miley</p>
				<p>BS Computer Engineering</p>
				<p>09228765432</p>
				<p>Gorgeousmiley14@yahoo.com</p>
				</td>
				</div>
				</table>
			`,	
			}
			]
			
		},
		{
			title: `Exercise 3`,
			sub: [
			{
				title: `Lecture`,
				content:`,`
			},
			{
				title: `Laboratory`,
				content:`
				<h1>Laboratory Exercise 3</h1>
				<p>Using your assigned computer unit in the laboratory, construct an assembly language program that will input a single character and will display the corresponding letter shown below:</p>
				<div style="width:700px;height:150px;border:2px solid #000;">
				<p>Convert Capital Letter to Small Letter</p>
				<p>Input Capital Letter: A</p>
				<p>Output: a</p>
				</div>
				<br/>
				<div style="width:700px;height:150px;border:2px solid #000;">Write the program below:</div>
				<br/>
				<p><b>Output: FILENAME: PTASK7C.COM</b></p>
				<div style="width:700px;height:150px;border:2px solid #000;">
				<p>Convert Capital Letter to Small Letter</p>
				<p>Input Capital Letter: B </p>
				<p>Output: b </p>
				</div>
				<br/>
				<div style="width:700px;height:150px;border:2px solid #000;">Write the program below:</div>

			`,	
			}
			]
		},
		{
			title: `Exercise 4`,
			sub: [
				{
					title: `Lecture`,
				},
				{
					title:`Laboratory`,
					content:`
					<h1> Laboratory Exercise 4</h1>
					<p>Using your assigned computer unit in the laboratory, construct an assembly language program that will input a single character and will display the corresponding letter shown below:</p>
					<br/>
					<p><b>Output: FILENAME: PTASK7D.COM</b></p>
					<div style="width:700px;height:300px;border:2px solid #000;">
					<ul style="list-style-type:none;"><font size="3rem">
					<li>-G</li>
					<li>Input Capital Letter: A</li>
					<li>Output: BCDEFGHIJKLMNOPQRSTUVWXYZ</li>
					<li>-G</li>
					<li>Input Capital Letter: L</li>
					<li>Output: MNOPQRSTUVWXYZ</li>
					<li>-G</li>
					<li>Input Capital Letter: W</li>
					<li>Output: XYZ</li>
					<li>-G</li>
					<li>Input Capital Letter: Z</li>
					<li>Output:</li>
					</ul>
					</div>

					`,
				}
			]
		},
		{
			title: `Exercise 5`,
			sub: [
				{
					title: `Lecture`,
				},
				{
					title: `Laboratory`,
					content: `
					<h1>Laboratory Exercise 5</h1>
					<p>Using your assigned computer unit in the laboratory, construct an assembly language program that will input a single character and will display the corresponding letter shown below:</p>
					<br/>
					<p><b>Output: FILENAME: PTASK7D.COM</b></p>
					<div style="width:700px;height:300px;border:2px solid #000;">
					<ul style="list-style-type:none;"><font size="3rem">
					<li>-G</li>
					<li>Input Capital Letter: a</li>
					<li>Output: bcdefghijklmnopqrstuvwxyz</li>
					<li>-G</li>
					<li>Input Capital Letter: l</li>
					<li>Output: mnopqrstuvwxyz</li>
					<li>-G</li>
					<li>Input Capital Letter: w</li>
					<li>Output: xyz</li>
					<li>-G</li>
					<li>Input Capital Letter: z</li>
					<li>Output:</li>
					</ul>
					</div>
					`,
				}
			]
		},
		{
			title: `Exercise 6`,
			sub: [
			{
				title:`Lecture`,
			},
			{
				title: `Laboratory`,
				content:`
				<h1>Laboratory Exercise 6</h1>
				<p>Using your assigned computer unit in the laboratory, construct an assembly language programs that will input a single character and will display the corresponding letter shown below:</p>
				<br/>
				<p><b>Output: FILENAME: PTASK7E.COM</b></p>
				<div style="width:700px;height:300px;border:2px solid #000;">
					<ul style="list-style-type:none;"><font size="3rem">
					<li>-G</li>
					<li>Input Capital Letter: A</li>
					<li>Output: BCDEFGHIJKLMNOPQRSTUVWXYZ</li>
					<li>-G</li>
					<li>Input Capital Letter: l</li>
					<li>Output: : mnopqrstuvwxyz</li>
					<li>-G</li>
					<li>Input Capital Letter: W</li>
					<li>Output: XYZ</li>
					<li>-G</li>
					<li>Input Capital Letter: z</li>
					<li>Output:</li>
					</ul>
					</div>

				`
			}
			]
		},		
	]
};