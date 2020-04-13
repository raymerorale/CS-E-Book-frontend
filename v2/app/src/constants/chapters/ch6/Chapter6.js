export const CHAPTER6 = {
	read_status: 'Disabled',
	title: 'Chapter VI',
	description: `<h1 align = center>CHAPTER 6</h1>
				<h2 align = center>FUNDAMENTALS OF ASSEMBLY LANGUAGE</h2>`,
	objectives: [
		`Explain how assembly language evolved and classified.`,
		`Compare and contrast assembly language to other computer programming languages.`,
		`Appreciate the advantages of using assembly language in solving machine problems.`
	],			
	sub: [
		// {
		// 	read_status: 'Disabled',
		// 	title: '',
		// 	content: ``,
		// },

		{
			title: `Programming Language`,
			content: `
				<h3>PROGRAMMING LANGUAGE</h3>
				<p>A programming language is a notation for expressing instructions to be carried out by the computer. It is a medium of communication between human and the machine, and often between one human being and another.</p>
				</br>
				<h3>CLASSIFICATION OF PROGRAMMING LANGUAGE</h3>
				<p>The proliferation of computer programming languages continues to this very day. There have probably been more than 3,000 programming languages designed and implemented, although many of these have been used exclusively for "in house" production rather than marketed for commercial use. Programming languages can be classified as:</p>

				<p>1)	High-Level Language
				A high-level programming language is an English-like language that provides for more natural expression of algorithms. It is usually designed to handle a particular application area efficiently. It can express the same program as low-level language, but with less detail and fewer lines of code. Languages like BASIC, Pascal, COBOL, and PROLOG are some of the examples of high-level languages.</p>

				<p>2) 	Mid-Level Language
				It is a computer language which combine low-level efficiency with high-level language structure abstraction and portability. Examples of mid-level language include C and MODULA-2.</p>

				<p>3)	Low-Level Language
				A low-level language is considered to be machine-oriented since it closely follows the built in instruction set of the underlyinh computer. Assembly and machine languages are common examples of low-level language.	</p>
				`,	
		},


				{
				title: `Language Translator`,
				content: `
				<h3>LANGUAGE TRANSLATOR</h3>
				<p>It is also known as language processor. Language translator is software that accepts source program coded in high/mid-level language as input and produces the equivalent 	machine language instruction.</p>
				</br>
				<h3>TYPES OF LANGUAGE TRANSLATOR</h3>
				<p>Basically, there are three types of language processor:</p>

					<p>1) 	Compiler
						A compiler is a translator program that transforms an entire source program composed of high/mid-level language statements into an object program consisting of machine language executable code.

						High/Mid Level Language
						Machine Languages 										  
						Source Program                        
						Instruction </p>     

					<p>2) 	Interpreter
						An interpreter processes the source program on a statement-by-statement basis. It translates hihg/mid-level language statements and then executes it one statement at a time.

						High/Mid Level Language
						Machine Languages 										   
						Source Program                       
						Instruction</p>				

					<p>3) 	Assembler 
						An assembler is a language translator that transforms assembly language to machine language instruction.

						High/Mid Level Language
						Machine Languages 	
						Source Program                        
						Instruction </p>					
								
				`,	
		},

				{
				title: `Linker`,
				content: `
				<h3>LINKER</h3>
				<p>Linker is a computer program for high, mid, and low levels of programming language that completes the process by converting the object code into executable machine code.</p>						
				`,	
		},


				{
				title: `Assembly Language`,
				content: `
				<h3>ASSEMBLY LANGUAGE</h3>
				<p>It is a low-level language that provides a kind of shorthand notation called mnemonic (memory aid) for the actual machine language instruction. It is much easier to remember SUB AX, BX than 0010101111000011 which is the actual instruction code that the machine uses.</p></br>

				<h3>ADVANTAGE OF ASSEMBLY LANGUAGE</h3>
				<p>Despite the fact that coding in high-level language is more productive, some advantages of using assembly language are as follows:</p>

				<p>1) 	It provides more control over handling particular hardware requirements.</p>
				<p>2) 	It generates smaller, more compact executable modules.</p>
				<p>3) 	It results in faster execution.</p>
				</br>
				<h3>WHEN DO YOU USE ASSEMBLY LANGUAGE</h3>
				<p>You might ask, "When should I use assembly language?" The chief reason you might use assembly language is if you want to do something that is impossible with high-level language. Since this language gives you direct control over the processor, you can do anything that the machine is capable of doing. High-level languages can't provide you this sort of control.</p>

				<p>Likewise, you might use assembly language to speed up a slow program. Programs coded in high-level language often execute slower than their assembly language counterparts. Futhermore, to use assembly means to design a program to be small as possible. When you are faced with compressing a program into a tiny space, using it is often the best way.</p>

				<p>One last important point, when you need technical magazines and journals, you'll often see examples expressed in assembly language because that is the only way to show what the processor is actually doing. Even if you don't write many assembly language programs yourself, you will be able to read them like a top-notch programmer.</p>			
								
				`,	
		},	


		{
			read_status: 'Disabled',
			title: `Shifting`,
			content: `
			<b>Shifting</b>
			<br>
			<br>

			`,
			sub: [
				{
					read_status: 'Disabled',
					title: `Shift Left Logical`,
					content: `
					<b>LEFT SHIFTING</b>

					<p>TA shift left logical of one position moves each bit to the left by one. The low-order bit (the right-most bit) is replaced by a zero and the high-order bit (the left-most bit) is discarded.</br>

						Shifting by two positions is the same as performing a one-position shift two times. Shifting by zero positions leaves the pattern unchanged. Shifting an N-bit pattern left by N or more positions changes all of the bits to zero.</br>

						The picture shows the operation performed on eight bits. The original patter is 1010 0111. The resulting pattern is 0100 1110.</br>
					</p>

						<p>A left shift moves the bits in the designated register to the left.</p>
						<h5>&lt;SHL: Shift Left&gt;</h5></br>					

					<h5>Example:</h5>
					<table style="width:80%">
						<tr>
							<td> MOV CL, 03 </td>
							<td> CL = 03 </td>
						</tr>
						<tr>
							<td> MOV AL, 10110111 </td>
							<td> AL = 10110111 = B7 </td>
						</tr>
						<tr>
							<td> SHL AL, 01  </td>
							<td> AL = 01101110 = 6E (1 time to left) </td>
						</tr>
						<tr>
							<td> SHL AL, CL </td>
							<td> AL = 01110000 = 70 (3 times to the left) </td>
						</tr>																							
					</table>
					`
				},

				{
					read_status: 'Disabled',
					title: `Shift Right Logical`,
					content: `
					<b>RIGHT SHIFTING</b>

					<p>TA shift right logical instruction. It moves bits to the right by a number of positions less than 32. The high-order bit gets zeros and the low-order bits are discarded.</br>

						If the bit pattern is regarded as an unsigned integer or a positive two's comp. interger, then a right shift of one bit position performs an integer divide by two. A right shift by N positions performs an integer divided by 2". </br>

						The "trick" of dividing an integer by shifting should not be used in place of the MIPS arithmetic divide instruction (which will be covered in a few chapters). If you mean "divide" that is what you should write. But the trick is often used in hardware, and sometimes pops up in odd software uses, so you should know about it. </br>
					</p>

						<p>A right shift moves the bits in the designated register to the right.</p>
						<h5>&lt;SHR: Shift Right&gt;</h5></br>					

					<h5>Example:</h5>
					<table style="width:80%">
						<tr>
							<td> MOV CL, 03 </td>
							<td> CL = 03 </td>
						</tr>
						<tr>
							<td> MOV AL, 10110111 </td>
							<td> AL = 10110111 = B7 </td>
						</tr>
						<tr>
							<td> SHR AL, 01  </td>
							<td> AL = 01011011 = 5B (1 time to the right) </td>
						</tr>
						<tr>
							<td> SHR AL, CL </td>
							<td> AL = 00001011 = 0B (3 times to the right) </td>
						</tr>																							
					</table>
					`
				},
			]
		},


		{
			read_status: 'Disabled',
			title: `Rotating`,
			content: `
			<b>Shifting</b>
			<br>
			<br>

			`,
			sub: [
				{
					read_status: 'Disabled',
					title: `Right Rotate`,
					content: `
					<b>RIGHT ROTATE</b>

					<p>A right rotate rotates the bits in the designated register to the right.</p>
					<h5>&lt;ROR:  Rotate right&gt;</h5></br>					

					<h5>Example:</h5>
					<table style="width:80%">
						<tr>
							<td> MOV CL, 03 </td>
							<td> CL = 03 </td>
						</tr>
						<tr>
							<td> MOV BL, B7 </td>
							<td> BL = 10110111 = B7 </td>
						</tr>
						<tr>
							<td> ROR BL, 1  </td>
							<td> BL = 11011011 = D8 </td>
						</tr>
						<tr>
							<td> ROR BL, CL </td>
							<td> BL = 01111011 = 7B </td>
						</tr>																							
					</table>
					`
				},

				{
					read_status: 'Disabled',
					title: `Left Rotate`,
					content: `
					<b>LEFT ROTATE</b>

					<p>A left rotate rotates the bite in the designated register to the left.</p>
					<h5>&lt;ROL: Rotate Left&gt;</h5></br>					

					<h5>Example:</h5>
					<table style="width:80%">
						<tr>
							<td> MOV CL, 03 </td>
							<td> CL = 03 </td>
						</tr>
						<tr>
							<td> MOV BH, B7 </td>
							<td> BH = 10110111 = B7 </td>
						</tr>
						<tr>
							<td> ROL BH, 1  </td>
							<td> BH = 01101111 = F6 </td>
						</tr>
						<tr>
							<td> ROR BH, CL </td>
							<td> BH = 01111011 = 7B </td>
						</tr>																							
					</table>
					`
				},
			]
		},							



		{
			read_status: 'Disabled',
			title: `Basic Logic Operations`,
			content: `
			<b>Basic Logic Operations</b>
			<br>
			<br>

			`,
			sub: [
				{
					read_status: 'Disabled',
					title: `AND`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: left;
						padding: 1%;
					}
					</style>
					<b>AND</b>

					<p>The AND operation performs logical multiplication, is often used to replace discrete logic AND gates of the speed required not too great.</p>
										

					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">Instruction</th>
							<th class="border-table">Comment</th>
						</tr>
						<tr>
							<td class="border-table"> AND AL, BL </td>
							<td class="border-table"> AL is the logical product of AL AND BL </td>
						</tr>
						<tr>
							<td class="border-table"> AND CX, DX </td>
							<td class="border-table"> CX is the logical product of CX AND DX </td>
						</tr>
						<tr>
							<td class="border-table"> AND CL, 33  </td>
							<td class="border-table"> CL is the logical product of CL AND 33 </td>
						</tr>
						<tr>
							<td class="border-table"> AND CX, 3030 </td>
							<td class="border-table"> CX is the logical product of CX AND 3030 </td>
						</tr>																							
					</table>
					</br></br>

					<h5>Example:</h5>
					<table style="width:80%">
						<tr>
							<td> MOV BX, 3155 </td>
							<td> BX = 3155 </td>
						</tr>
						<tr>
							<td> MOV AX, BX </td>
							<td> AX = 3155 </td>
						</tr>
						<tr>
							<td> AND AX, 0F0F </td>
							<td> AX = 3155; AX AND 0F0F = 0105 </td>
						</tr>
						<tr>
							<td> MOV CX, AX </td>
							<td> CX = 0105 </td>
						</tr>																							
					</table>
					`
				},

				{
					read_status: 'Disabled',
					title: `OR`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: left;
						padding: 1%;
					}
					</style>
					<b>OR</b>

					<p>The OR operation performs logical addition, which is slightly different form of arithmetic addition. In logical addition, the sum is only 0 when both numbers are 0; Otherwise the sum is a 1.</p>
										
						
					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">Instruction</th>
							<th class="border-table">Comment</th>
						</tr>
						<tr>
							<td class="border-table"> OR AL, BL  </td>
							<td class="border-table"> AL is the logical sum of AL AND BL </td>
						</tr>
						<tr>
							<td class="border-table"> OR CX, DX </td>
							<td class="border-table"> CX is the logical sum of CX AND DX </td>
						</tr>
						<tr>
							<td class="border-table"> OR CL, 33  </td>
							<td class="border-table"> CL is the logical sum of CL AND 33 </td>
						</tr>
						<tr>
							<td class="border-table"> OR CX, 3030 </td>
							<td class="border-table"> CX is the logical sum of CX AND 3030 </td>
						</tr>																							
					</table>
					</br></br>

					<h5>Example:</h5>
					<table style="width:80%">
						<tr>
							<td> MOV AL, 5 </td>
							<td> AL = 5 </td>
						</tr>
						<tr>
							<td> MOV BL, 7  </td>
							<td> BL = 7 </td>
						</tr>
						<tr>
							<td> MUL BL </td>
							<td> AX = 23 </td>
						</tr>
						<tr>
							<td> OR AX, 3030  </td>
							<td> AX = 3033 </td>
						</tr>																							
					</table>
					`
				},

				{
					read_status: 'Disabled',
					title: `The Exclusive-OR`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: left;
						padding: 1%;
					}
					</style>
					<b>The Exclusive-OR</b>

					<p>The Exclusive-OR operation (XOR) differs from the inclusive-OR (OR) mainly in that the 1, 1 condition of the OR function produce a 1 while the 1, 1 condition of the Exclusive-OR operation produces a 0. In other words, the Exclusive-OR excludes the latter condition while the inclusive-OR includes it.</p>
										
						
					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">Instruction</th>
							<th class="border-table">Comment</th>
						</tr>
						<tr>
							<td class="border-table"> XOR CH, DL  </td>
							<td class="border-table"> CH is the Exclusive-OR of CH and DL </td>
						</tr>
						<tr>
							<td class="border-table"> XOR AH, EE </td>
							<td class="border-table"> AH is the Exclusive-OR of AH and EE </td>
						</tr>
																							
					</table>
					`
				},	

				{
					read_status: 'Disabled',
					title: `NOT and NEG`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: left;
						padding: 1%;
					}
					</style>
					<b>NOT and NEG</b>

					<p>Logical inversion or one's complement (NOT) and arithmetic sign inversion or two's compliment (NEG) are the last two logical functions available except for shift and rotates.</p>						
						
					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">Instruction</th>
							<th class="border-table">Comment</th>
						</tr>
						<tr>
							<td class="border-table"> NOT CH  </td>
							<td class="border-table"> CH is one's complemented </td>
						</tr>
						<tr>
							<td class="border-table"> NEG CH </td>
							<td class="border-table"> CH is two's complemented </td>
						</tr>
						<tr>
							<td class="border-table"> NEG AX </td>
							<td class="border-table"> AX is two's complemented </td>
						</tr>						
																							
					</table>
					`
				},	
			]
		},			



		{
			read_status: 'Disabled',
			title: `Program Control Instruction`,
			content: `
			<b>Program Control Instruction</b>
			<br>
			<br>

			`,
			sub: [
				{
					read_status: 'Disabled',
					title: `Conditional Jump Instructions`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: center;
						padding: 1%;
					}
					.border-table1{
						width: 40%;
						border-right:1px solid black;
						text-align: center;
						padding: 1%;
					}
					</style>

					<b>CONDITIONAL JUMP INSTRUCTIONS</b>

					<p>These are instructions that transfer control depending on the setting of CMP instruction whether a certain condition is met or not.</p>
					
					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">Instruction</th>
							<th class="border-table">Description</th>
						</tr>
						<tr>
							<td class="border-table1"> JE </td>
							<td class="border-table1"> Jump if Equal </td>
						</tr>
						<tr>
							<td class="border-table1"> JNE </td>
							<td class="border-table1"> Jump if Not Equal </td>
						</tr>
						<tr>
							<td class="border-table1"> JL </td>
							<td> Jump if Less than </td>
						</tr>
						<tr>
							<td class="border-table1"> JLE </td>
							<td class="border-table1"> Jump if Less than or Equal to </td>
						</tr>
						</tr>
						<tr>
							<td class="border-table1"> JG </td>
							<td class="border-table1"> Jump if Greater than </td>
						</tr>
						<tr>
							<td class="border-table1"> JGE </td>
							<td class="border-table1"> Jump if Greater than or Equal to </td>
						</tr>
						<tr>
							<td class="border-table1"> JZ </td>
							<td class="border-table1"> Jump if Zero </td>
						</tr>
						<tr>
							<td class="border-table1"> JNZ </td>
							<td class="border-table1"> Jump if Not Zero </td>
						</tr>	

					</table>
					</br></br>

					<h5>Format:</h5>
					<p style="padding-left:10%">&lt;conditional jump instruction&gt; &lt;label&gt;</p>
			 	
					<h5>Example:</h5>

					<p style="padding-left:17%">CMP AL, 'Y'</p>
					<p style="padding-left:17%">JE TAMA</p>
					<p style="padding-left:17%">CMP AL, 'N'</p>
					<p style="padding-left:17%">JE MALI</p>

					<p style="padding-left:10%">TAMA:	MOV AH, 09h</p>
					<p style="padding-left:17%">MOV DX, OFFSET ANSI</p>
					<p style="padding-left:17%">INT 21h</p>
					`
				},

				{
					read_status: 'Disabled',
					title: `Unconditional JMP`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: left;
						padding: 1%;
					}
					</style>

					<b>UNCONDITIONAL JMP</b>

					<p>JMP is considered as unconditional jump instruction because it is always executed by the machine. It does not depend on a conditioner being true or false.</p>
											
					</br>

					<h5>Format:</h5>
					<p style="padding-left:10%">JMP &lt;label&gt;</p>
			 	
					<h5>Example:</h5>

					<p style="padding-left:17%">CMP AL, 'Y'</p>					
					<p style="padding-left:17%">JE TAMA</p>
					<p style="padding-left:17%">CMP AL, 'N'</p>
					<p style="padding-left:17%">JE MALI</p>
					<p style="padding-left:17%">JMP TAPOS</p>

					<p style="padding-left:10%">TAMA: 	MOV AH, 09h</p>
					<p style="padding-left:17%">MOV DX, OFFSET ANSI</p>
					<p style="padding-left:17%">INT 21h</p>

					<p style="padding-left:10%">TAPOS: 	MOV AX, 4C00h</p>
					<p style="padding-left:17%">INT 21h	</p>				
					`
				},

				{
					read_status: 'Disabled',
					title: `If-Else Construction`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: center;
						padding: 1%;
					}
					.border-table1{
						width: 40%;
						border-right:1px solid black;
						text-align: left;
						padding: 1%;
					}					
					</style>

					<b>IF-ELSE CONSTRUCTION</b>

					<p>A conditional statement of C language in the form:</p>
											
					</br>

					<p style="padding-left:17%">if&lt;condition&gt;</p>
					<p style="padding-left:17%">{	</p>
					<p style="padding-left:17%">&lt;statement-1&gt;;</p>
					<p style="padding-left:17%">&lt;statement-2&gt;;</p>	
					<p style="padding-left:22%">	:</p>
					<p style="padding-left:17%">&lt;statement-n&gt;;</p>	
					<p style="padding-left:17%">}</p>					
					<p style="padding-left:17%">else</p>
					<p style="padding-left:17%">{</p>
					<p style="padding-left:17%">&lt;statement-1&gt;;</p>
					<p style="padding-left:17%">&lt;statement-2&gt;;</p>	
					<p style="padding-left:22%">	:</p>
					<p style="padding-left:17%">&lt;statement-n&gt;;</p>	
					<p style="padding-left:17%">}</p>


					<P>can be implemented by assembly language of the form:</P>

					<p style="padding-left:17%">&lt;CMP instruction&gt;</p>
					<p style="padding-left:17%">&lt;conditional jump instruction&gt; &lt;label-1&gt;</p>
					<p style="padding-left:17%">&lt;instruction-1&gt;</p>
					<p style="padding-left:17%">&lt;instruction-2&gt;</p>
					<p style="padding-left:22%">	:</p>
					<p style="padding-left:17%">&lt;instruction-n&gt;</p>
					<p style="padding-left:17%">&lt;JMP instruction&gt; &lt;label-2&gt;</p>

					<h5>Example:</h5>

					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">C Language</th>
							<th class="border-table">Assembly Language</th>
						</tr>
						<tr>
							<td class="border-table1"> if(ax == 0)  {</td>
							<td class="border-table1"> CMP AX, 0000h </td>
						</tr>
						<tr>
							<td class="border-table1"> cx = cx - ax; </td>
							<td class="border-table1"> JNZ ACTION1 </td>
						</tr>
						<tr>
							<td class="border-table1"> ax = ax + 1; </td>
							<td class="border-table1"> SUB CX, AX </td>
						</tr>
						<tr>
							<td class="border-table1"> }  </td>
							<td class="border-table1"> INC AX </td>
						</tr>
						<tr>
							<td class="border-table1"> else{ </td>
							<td class="border-table1"> INC AX </td>
						</tr>
						<tr>
							<td class="border-table1"> cx = cx - 8; </td>
							<td class="border-table1"> ACTION: 	SUB CX, 0008h </td>
						</tr>
						<tr>
							<td class="border-table1"> } </td>
							<td class="border-table1"> NEXT: </td>
						</tr>
					</table>

					`
				},

				{
					read_status: 'Disabled',
					title: `Do..While Construction`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: center;
						padding: 1%;
					}
					.border-table1{
						width: 40%;
						border-right:1px solid black;
						text-align: left;
						padding: 1%;
					}					
					</style>

					<b>DO.. WHILE CONSTRUCT</b>

					<p>A do.. while loop similar to C language:</p>
											
					</br>

					<p style="padding-left:17%">do{</p>
					<p style="padding-left:17%">&lt;statement-1&gt;;</p>
					<p style="padding-left:17%">&lt;statement-2&gt;;</p>
					<p style="padding-left:22%">:</p>
					<p style="padding-left:17%">&lt;statement-n&gt;;	</p>
					<p style="padding-left:17%">}	</p>				
					<p style="padding-left:17%">while &lt;condition&gt;;</p>					


					<P>can be implemented by assembly language of the form:</P>

					<p style="padding-left:17%">&lt;label&gt;: &lt;instruction-1&gt; </p>
					<p style="padding-left:17%">&lt;instruction-2&gt;</p>
					<p style="padding-left:22%">	:</p>
					<p style="padding-left:17%">&lt;instruction-n&gt;</p>
					<p style="padding-left:17%">&lt;CMP instruction &gt;</p>
					<p style="padding-left:17%">&lt;conditional jump instruction &gt; &lt;label&gt;</p>

					<h5>Example:</h5>

					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">C Language</th>
							<th class="border-table">Assembly Language</th>
						</tr>
						<tr>
							<td class="border-table1"> ax = 5;  {</td>
							<td class="border-table1"> CMP AX, 0000h </td>
						</tr>
						<tr>
							<td class="border-table1"> do{ </td>
							<td class="border-table1"> HERE: DEC AX </td>
						</tr>
						<tr>
							<td class="border-table1"> ax = ax + 1; </td>
							<td class="border-table1"> INC BX </td>
						</tr>
						<tr>
							<td class="border-table1"> bx = bx + 1; </td>
							<td class="border-table1"> CMP AX </td>
						</tr>
						<tr>
							<td class="border-table1"> } </td>
							<td class="border-table1"> JNZ HERE </td>
						</tr>
						<tr>
							<td class="border-table1"> while(ax >= 0) </td>
							<td class="border-table1"> </td>
						</tr>

					</table>

					`
				},

				{
					read_status: 'Disabled',
					title: `While Construction`,
					content: `
					<style>
					.border-table{
						border:1px solid black;
						border-collapse: collapse;
						text-align: center;
						padding: 1%;
					}
					.border-table1{
						width: 40%;
						border-right:1px solid black;
						text-align: left;
						padding: 1%;
					}					
					</style>

					<b>WHILE CONSTRUCT</b>

					<p>Similarly, C language while loop:</p>
											
					</br>

					<p style="padding-left:17%">while{</p>
					<p style="padding-left:17%">&lt;statement-1&gt;;</p>
					<p style="padding-left:17%">&lt;statement-2&gt;;</p>
					<p style="padding-left:22%">:</p>
					<p style="padding-left:17%">&lt;statement-n&gt;;	</p>
					<p style="padding-left:17%">}	</p>				


					<P>is roughly equivalent to the assembly language structure:</P>

					<p style="padding-left:17%">&lt;label-1&gt; &lt;CMP instruction&gt; </p>
					<p style="padding-left:17%">&lt;conditional jump instruction &gt; &lt;label-2&gt;</p>
					<p style="padding-left:17%">&lt;instruction-1&gt;</p>
					<p style="padding-left:17%">&lt;instruction-2&gt;</p>
					<p style="padding-left:22%">	:</p>
					<p style="padding-left:17%">&lt;instruction-n&gt;</p>
					<p style="padding-left:17%">JMP &lt; instruction-1 &gt;</p>

					<p style="padding-left:17%">&lt;label-2&gt; &lt;CMP instruction-1&gt; </p>
					<p style="padding-left:17%">&lt;instruction-2&gt;</p>
					<p style="padding-left:22%">	:</p>
					<p style="padding-left:17%">&lt;instruction-n&gt;</p>

					<h5>Example:</h5>

					</br>
					<table style="width:80%" class="border-table">
						<tr>
							<th class="border-table">C Language</th>
							<th class="border-table">Assembly Language</th>
						</tr>
						<tr>
							<td class="border-table1"> while(ax <= 10){  {</td>
							<td class="border-table1"> START: 		CMP AX 000Ah </td>
						</tr>
						<tr>
							<td class="border-table1"> ax = ax + bx; </td>
							<td class="border-table1"> JGE NEXT </td>
						</tr>
						<tr>
							<td class="border-table1"> bx = bx + 1; </td>
							<td class="border-table1"> ADD AX, BX </td>
						</tr>
						<tr>
							<td class="border-table1"> } </td>
							<td class="border-table1"> INC BX </td>
						</tr>
						<tr>
							<td class="border-table1"> </td>
							<td class="border-table1"> JMP START </td>
						</tr>
						<tr>
							<td class="border-table1"> </td>
							<td class="border-table1"> NEXT: ADD CX, AX </td>
						</tr>

					</table>

					`
				},

				{
					read_status: 'Disabled',
					title: `The CMP Instruction`,
					content: `
					<style>
					.border-table{
						border-collapse: collapse;
						text-align: center;
						padding: 1%;
					}
					.border-table1{
						width: 40%;
						text-align: right;
						padding: 1%;
					}
					.border-table2{
						width: 40%;
						border:1px solid black;
						border-collapse: collapse;
						text-align: left;
						padding: 1%;
					}															
					</style>

					<b>THE CMP INSTRUCTION</b>

					<p>CMP(CoMPare) instruction is used to compare character data, as well as, numeric data fields. The main use of CMP is in decision making in conjunction with conjunction jump instructions.</p>							
					</br>

					<h5>Format:</h5>
					<p style="padding-left:10%">CMP &lt;register&gt;,&lt;register&gt;</p>
					<p style="padding-left:10%">CMP &lt;register&gt;,&lt;immediate-data&gt;</p>
					</br>

					<h5>Example:</h5>
					<p style="padding-left:10%">CMP AL, 'Y'</p>
					<p style="padding-left:10%">CMP DX, 0000h</p>
					</br>

					<h5>Example: JNE</h5>
					<table style="width:80%" class="border-table">
						<tr>
							<td class="border-table1"> MOV AH, 10  {</td>
							<td class="border-table2"> AH = 10 </td>
						</tr>
						<tr>
							<td class="border-table1"> MOV BH, 10 </td>
							<td class="border-table2"> BH = 10 </td>
						</tr>
						<tr>
							<td class="border-table1"> ADD BH, AH  </td>
							<td class="border-table2"> BH = 20 / 30 / 40 / 50 </td>
						</tr>
						<tr>
							<td class="border-table1"> MOV DL, BH  </td>
							<td class="border-table2"> DL = 20 / 30 / 40 / 50 </td>
						</tr>
						<tr>
							<td class="border-table1"> CMP BH, 50 </td>
							<td class="border-table2"> 20-50 = -30 / Z = 1 </td>
						</tr>
						<tr>
							<td class="border-table1"> </td>
							<td class="border-table2"> 40-50 = -10 / Z = 1 </td>
						</tr>
						<tr>
							<td class="border-table1"> </td>
							<td class="border-table2"> 50-50 = 0   / Z = 0 </td>
						</tr>
						<tr>
							<td class="border-table1"> JNE CHRIS </td>
							<td class="border-table2"> </td>
						</tr>
						<tr>
							<td class="border-table1"> SUB DL, 50 </td>
							<td class="border-table2"> DL = 50-50 = 0 </td>
						</tr>																		

					</table>

					</br>

					<h5>Example: JE</h5>
					<table style="width:80%" class="border-table">
						<tr>
							<td class="border-table1"> MOV BH, 10  {</td>
							<td class="border-table2"> BH = 10 </td>
						</tr>
						<tr>
							<td class="border-table1"> MOV AH, 10 </td>
							<td class="border-table2"> AH = 10 </td>
						</tr>
						<tr>
							<td class="border-table1"> ADD BH, AH  </td>
							<td class="border-table2"> BH = 20 / 30 </td>
						</tr>
						<tr>
							<td class="border-table1"> MOV DL, BH  </td>
							<td class="border-table2"> DL = 20 / 30 </td>
						</tr>
						<tr>
							<td class="border-table1"> CMP BH, 20 </td>
							<td class="border-table2"> 20-20 = 0  / Z = 0 </td>
						</tr>
						<tr>
							<td class="border-table1"> </td>
							<td class="border-table2"> 30-20 = 10 / Z = 1 </td>
						</tr>
						<tr>
							<td class="border-table1"> </td>
							<td class="border-table2"> 50-50 = 0   / Z = 0 </td>
						</tr>
						<tr>
							<td class="border-table1"> JNE CHRIS </td>
							<td class="border-table2"> </td>
						</tr>
						<tr>
							<td class="border-table1"> SUB DL, 30  </td>
							<td class="border-table2"> DL = 30-30 = 0 </td>
						</tr>																		

					</table>					

					`
				},													


			]
		},			












		{
			title: `Laboratory Exercise 1`,
			content: `
				<h1>Laboratory Exercise 1.A</h1>
				<p>Create a DEBUG program using SHIFT commands that display OUTPUT below:</p>
				<p><b>OUTPUT: FILENAME: PTASK6A.COM</b></p>


				<table width="100%" class= "table2">


				<tr>
				<td><div style="width:100px;height:400px;border:2px solid #000;">
				<ul style="list-style-type:none;"><font size="1rem">
				<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li>
				</ul></div></td>
				<td><div style="width:700px;height:400px;border:2px solid #000;">Start your program here:</div></td>
				</tr>
				</table>
				<br/>

				<h2>Laboratory Exercise 1.B</h2>
				<p>Create a DEBUG program using ROTATE commands that display output shown below:</p>
				<p><b>OUTPUT: FILENAME: PTASK6B.COM</b></p>

				<table width="100%" class= "table2">
				<tr>
				<td><div style="width:200px;height:250px;border:2px solid #000;">
				<p>0</p><p style="padding-left: 40px;">2</p><p style="padding-left: 80px;">4</p><p style="padding-left: 120px;">6</p><p style="padding-left: 160px;">8</p>
				<td><div style="width:700px;height:400px;border:2px solid #000;">Start your program here:</div></td>
				</tr>
				</table>
				`,	
		},

		{
			title: `Laboratory Exercise 2`,
			content:`
				<h1>Laboratory Exercise 2</h1>
				<p>Using your assigned computer unit in the Laboratory, construct an assembly language program that will display numbers on screen as shown below; apply COMPARE AND CONDITIONAL JUMP instruction. After you successfully run your program write the codes on the space provided. </p>
				 <p><b>OUTPUT: FILENAME: PTASK6C.COM</b></p>

				 <table width="100%" class= "table2">


				<tr>
				<td><div style="width:200px;height:250px;border:2px solid #000;">
				<ul style="list-style-type:none;"><font size="3rem">
				<li>999999999999999999</li><li>8888888888888888</li><li>77777777777777</li><li>.</li><li>.</li><li>.</li><li>3333</li><li>222</li><li>11</li><li>0</li>
				<td><div style="width:700px;height:400px;border:2px solid #000;">Start your program here:</div></td>
				</tr>
				</table>
				`,
			},

			{
				title: `Laboratory Exercise 3`,
				content:`
				<h1>Laboratory Exercise 3</h1>
				<p>Using your assigned computer unit in the Laboratory, construct an assembly language program that will display numbers on screen as shown below; apply COMPARE AND CONDITIONAL JUMP instruction. After you successfully run your program write the codes on the space provided. </p>
				<p><b>OUTPUT: FILENAME: PTASK6D.COM</b></p>
				<table width="100%" class= "table2">


				<tr>
				<td><div style="width:150px;height:250px;border:2px solid #000;">
				<ul style="list-style-type:none;"><font size="3rem">
				<li>0123456789</li><li>1&nbsp1</li><li>2&nbsp&nbsp&nbsp2</li><li>3&nbsp&nbsp&nbsp&nbsp&nbsp3</li><li>4&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4</li><li>5&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp5</li><li>6&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp6</li><li>7&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp7</li><Li>8&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp8</li><li>9&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp9</li>
				<td><div style="width:700px;height:400px;border:2px solid #000;">Start your program here:</div></td>
				</tr>

				</table>
				`,
		},
	
	]
};