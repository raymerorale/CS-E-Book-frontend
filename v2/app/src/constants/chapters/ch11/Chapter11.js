export const CHAPTER11 = {
	read_status: 'Disabled',
	title: 'Chapter XI',
	description: `<h1 align = center>CHAPTER 11</h1>
				<h2 align = center>KEYBOARD PROCESSING</h2>`,
				objectives: [
	`Discover the assembly language tools that are used for control and logic flow.`,
	`Make use of LOOP, CMP, JMP, and unconditional jump instruction in assembly language program.`,
	`Be aware of the usefulness of representing the logic of the program`

	],
	sub: [
		{
			read_status: 'Disabled',
			title: 'String Input',
			content : `
<style type="text/css">
	
table, td {
  			border: 1px solid black;
  			border-collapse: collapse;
			}
			 td {
			 	text-align: center;
			 	width: 11% ;
			 }


</style>
<p><b>STRING INPUT</b></p>

<p>The following instruction wait for the input string, pressing ENTER key and the input string is stored to a specified identifier namely x.</p>

<div class = "terminal-box"><pre>
	MOV AH,	0Ah		; request for string input
	MOV DX, OFFSET X 	; load address
	INT 21h
</pre></div>

<p>But before you apply instructions to accept string, you have to define the identifier to hold the input string.</p>

<p>Format:</p>

<div class = "terminal-box">
	&lt;identifier&gt; DB &lt;max-size-str&gt;, &lt;current-size&gt;, &lt;max-size-str&gt; DUP ("$")
</div>

<p>Where :</p>

<pre>
&lt;max-size-str&gt;	- numeric constant defining the maximum number of 
		  characters minus three (3).

&lt;\current-size&gt;	- declared as question mark (?) meaning undefined. 
		  It will have a value after the input.
		  It holds the number of characters entered.

DUP("$")	- fills the string with dollar symbol.
</pre>
<br>
<br>
<p>Example :<p>

<pre>
	NEYM DB 08h, ? 08h DUP ("$")
</pre>
<br>
<p>In the above example, it means that the maximum size of string you can enter is 8 08h minus . Thus, the required number of characters to be entered is only 5 instead of 8. Why only 5 and not 
8? You can only input 5 characters because 08h will be stored in the first memory address. If your input is 'vale', there are 4 characters, 04h will be stored in the second memory address, 
charater 'v' will be stored in the third location, 'a' in the fourth, and so on and so forth. After pressing ENTER key, 0Dh will be stored at the last memory address.<br>
To illustrate this :</p>

<Table style="width:98%">
	<tr>
		<td>08h</td>
		<td>04h</td>
		<td>v</td>
		<td>a</td>
		<td>l</td>
		<td>u</td>
		<td>e</td>
		<td>$</td>
		<td>0Dh</td>
	</tr>
</Table>

`
		},
		{
			read_status: 'Disabled',
			title: 'Displaying the Input String',
			content : `

<p><b>DISPLAYING THE INPUT STRING</b></p>
<p>The following instruction display the input string starting at the third memory address :</p>

<div class = "terminal-box"><pre>
	MOV AH,	09h		; request for string input
	MOV DX, OFFSET X + 2 				
	INT 21h
</pre></div>

<p><b>Sample Program that demonstrates string input and displays it again on screen</b></p>

<div class = "terminal-box"><pre>
TITLE MYPROG.ASM
DOSSEG
.MODEL SMALL
.STACK 0100H
.DATA
    NEYM DB 08h,?, 08h DUP("$")
    Q 	DB	"What is your name? $"
    A1	DB	0Ah, 0Dh, "What a nice name! $"
    A2	DB	0Ah, 0Dh, "I'm glad to meet you! $"

.CODE
start :
	MOV AX, @DATA
	MOV DS, AX

	MOV AH,	09h						
	MOV DX, OFFSET Q				
	INT 21h

	MOV AH,	0Ah		; request for string input
	MOV DX, OFFSET NEYM	; load address				
	INT 21h

	MOV AH,	09h						
	MOV DX, OFFSET A1				
	INT 21h

	MOV DX, OFFSET NEYM + 2
	INT 21h

	MOV DX, OFFSET A2
	INT 21h

	MOV AX, 4C00H
	INT 21h
END start
</pre><div>

`
		},





		{
			title: `Laboratory Exercise 1`,
			content:`
			<b>LABORATORY EXERCISE 1</b>
			<br/>
			<br/>

				<p>Using your assigned computer unit in the laboratory, construct an assembly language program that will enter a user’s name and will display the following:</p>
			<div style="width:700px;height:100px;border:2px solid #000;">
			<ul style="list-style-type:none;"><font size="3rem">
			<li>Enter your name: Miley</li>
			<li>Roses are red.</li>
			<li>Violets are blue.</li>
			<li>Sugar is sweet and so are you, Miley!</li>
			</ul>
			</div>
			`
		},
		{
			title: `Laboratory Exercise 2`,
			content:`
			<b>LABORATORY EXERCISE 2</b>
			<br/>
			<br/>
			<p>Using your assigned computer unit in the laboratory, construct an assembly language program that will allow the user to input numbers from 0 to 9 only and will convert and display the equivalent number word.</p>
			<br/>
			<p><b>Sample Output:</b></p>
			<div style="width:700px;height:75px;border:2px solid #000;">
			<ul style="list-style-type:none;"><font size="3rem">
			<li>Enter a number (0-9): 8</li>
			<li>Equivalent number word: Eight</li>
			</ul>
			</div>
			`,
		}				
	]
};