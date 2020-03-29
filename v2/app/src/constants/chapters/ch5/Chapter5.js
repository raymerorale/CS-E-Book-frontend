export const CHAPTER5 = {
	read_status: 'Disabled',
	title: 'Chapter V',
	description: `<h1 align = center>CHAPTER 5</h1>
				<h2 align = center>INTRODUCTION TO MACHINE LANGUAGE</h2>`,
	objectives: [
		`Describe machine language and its focus.`,
		`Code simple debug programs.`,
		`Acquire a sense of persistence in learning machine language.`
	],
	sub: [
		{
			read_status: 'Disabled',
			title: 'Bug, Debugger, Debug',
			content: `<b> BUG </b>
			<style>
				p{
					text-indent: 3em;
					text-align: justify;
				}
			</style>
			<p> It is the computer terminology for error or mistake in a program or computer system and the term debugging is a methodical process or finding and reducing the number of bugs or defects in a computer program. These terms stemmed from the early days of computing. In particular, it was in 1947 that an event occurred that is of special interest to programmers and students of computing. Grace Murray Hopper, discovered a small, dead moth in the machine and removed it with tweezers. The moth went into their logbook along with a note recording an incident for posterity. From then on, computing errors were called bugs and the process of finding and removing them was known as debugging. </p>
			<br/>
			<b> DEBUGGER </b>
			<p> Debugger is a program tool that provides an environment for testing load modules. Load modules are executable files that can have extensions of .COM and .EXE. It also allows us to run machine code programs in such a way that we can observe the changes a program makes to register and memory. Some examples of debugger include Code Viewm Debug, GNU Debugger, T-Bug, Turbo Debugger and Visual Studio Debugger. Using a debugger you can display the program, execute one instruction at a time, see the results of each instruction, and display area of memory, and so on. </p>
			<br/>
			<b> DEBUG </b>
			<p> In 1980, Tim Paterson began working on a 16-bit OS for the 8086 S-100 Bus card he had designed for SCP (Seattle Computer Products) the previous year. To help in getting QDOS (later called 86-DOS) to work correctly, Paterson created a debugger in a ROM chip; the code for that ROM version was released into the Public Domain. Paterson adapted the code to run as a .COM program under QDOS, and also added the ability to disassemble 8086 machine code. </p>
			<p> In the meantime, Microsoft had been busy purchasing the rights to sell Paterson QDOS to IBM for their 'secret' PC project. Tim was then hired by Microsoft as the primary author of their first OS. When he completed his work on IBM's Personal Computer DOS 1.00 in 1981, his DEBUG.COM utility was included with it. All the functionality that was put into DEBUG is still there and little has been added to it (the major exception being the Assemble command, added under DOS 2.0). </p>
			<p> DEBUG is software that is classified as debugger which is used for testing and debugging executable programs. A feature of DEBUG is that it displays all program code and data in hexadecimal format and any data that you enter into memory must also be in hex form. It also provides a single-step mode which allows you to execute a program one instruction at at time so that you can view the effect of each instruction on memory locations and registers.</p>
			<p> When Debug is started without any parameters of the Debug prompt, a "-", appears. The use can then enter one of several one or two-letter subcommands, including "a" to enter the assembler mode, "d" to perform a hexadecimal dump, "t" to trace and "u" to unassemble (disassemble) a program in memory. Debug can also be used as a "debug script" interpreter using the following syntax. </p>`,
		},
		{
			read_status: 'Disabled',
			title:`Changes in MS-Debug`,
			content: `<b>CHANGES IN MS-DEBUG</b><br/><br/>
			<style>
				p{
					margin-left: 2em;
					text-align: justify;
				}
			</style>
			<b> DOS 2.0 </b>
			<p> With the release of DOS 2.0, DEBUG gained the ability to assemble instructions directly into machine code (the A command). This is one of the most important commands for many of its users. Though lacking much of the functionality of a stand-alone Assembler, e.g., all Jumps must be hexadecimal addresses (no labels can be used), many useful .COM programs have been assembled with this command. </p>
			<b> DOS 3.0 </b>
			<p> Under DOS 3.0, the P (Proceed) command was added, so DEBUG could quickly execute subroutines; at the same time, it became possible to attempt stepping through interrupts with the T (Trace) command. </p>
			<b> DOS 4.0 </b>
			<p> When DOS made EMS (Expanded Memory) functions available under DOS 4.0, the four commands xa, xd, xm, and xs were also added to DEBUG. It appears they were rarely, if ever used though, even by programmers. For most of us, the only noticeable change in DEBUG was the addition of the help command (type a '?' while inside DEBUG) under DOS 5.0; when all DOS commands finally got the /? command-line switch.</p>
			<b> DOS 5.0 </b>
			<p> DEBUG's code went through a number of changes (and 'bug fixes' too) over the years! Some of these internal changes were related to DOS system calls and screen output, then there was the change in file type from a .COM to an .EXE program under DOS 5.0. But in spite of all those changes and others which followed, DEBUG has never had an official revision since 2.40 (those digits have been embedded inside all versions of DEBUG since DOS 3.0) </p>`,
		},
		{
			read_status: 'Disabled',
			title:`Masm`,
			content:`<b>MASM</b>
			<p style="text-indent: 2em"> Microsoft did create their own, Assembler (MASM), 'C' compiler and Debugger (CodeView). Rather than using MASM and CodeView, many opted for the less expensive Borland assembler (TASM) and Turbo Debugger when they appeared, or some other commercial product. Howeverm users and studetns alike can still learn a great deal about Assembly language by using DEBUG. </p>`,
		},
		{
			read_status: 'Disabled',
			title: `Advantage of Debug, Debug Command`,
			content: `<b> ADVANTAGES OF DEBUG </b><br/>
			<ul style= "list-style-type:none">
				<li> &#8680; It is Free </li>
				<li> &#8680; It is universally available </li>
				<li> &#8680; It is simple to use </li>
				<li> &#8680; It requires relatively little memory</li>
			</ul>
			<br/>
			<b> DEBUG COMMANDS </b>
			<p style="text-indent: 2em"> DEBUG's set of commands lets you perform a number of useful operations. The commands of interest at this point are the following. </p>
			<style>
				table, td{
  					border-collapse: collapse;
  					margin-left: auto;
  					margin-right: auto;
  					text-align: left;
  					font-family: arial;
  					padding: 3px 5px 3px 5px;
				}
				th{
					text-align: center;
  					border-collapse: collapse;
  					width: 20%;
  					font-family: Comic Sans MS;

				}
				table tr:nth-child(even) {
  					background-color: #fdfdfd;
				}
				table tr:nth-child(odd) {
 					background-color: #bfbfbf;
				}
			</style>
			<table width="98%">
				<tr>
					<th> ? </th>
					<td> Displays a list of Debug commands. </td>
				</tr>
				<tr>
					<th> A </th>
					<td> Assembles 8086/8087/8088 mnemonics. </td>
				</tr>
				<tr>
					<th> C </th>
					<td> Compares two portions of memory. </td>
				</tr>
				<tr>
					<th> D </th>
					<td> Displays the contents of a portion of a memory. </td>
				</tr>
				<tr>
					<th> E </th>
					<td> Enters data into memory starting at a specified address. </td>
				</tr>
				<tr>
					<th> F </th>
					<td> Fills a range of memory starting at a specified address. </td>
				</tr>
				<tr>
					<th> G </th>
					<td> Runs the executable file that is in memory. </td>
				</tr>
				<tr>
					<th> H </th>
					<td> Performs hexadecimal arithmetic. </td>
				</tr>
				<tr>
					<th> I </th>
					<td> Displays one byte value from a specified port. </td>
				</tr>
				<tr>
					<th> L </th>
					<td> Loads the contents of a file or disk sectors into memory. </td>
				</tr>
				<tr>
					<th> M </th>
					<td> Copies the contents of a block of memory. </td>
				</tr>
				<tr>
					<th> N </th>
					<td> Specifies a file for an l or w command, or specifies the parameters for the file you are testing. </td>
				</tr>
				<tr>
					<th> O </th>
					<td> Sends one byte value to an output port. </td>
				</tr>
				<tr>
					<th> P </th>
					<td> Executes a loop, a repeated string instrcution, a software interrupt, or a subroutine. </td>
				</tr>
				<tr>
					<th> Q </th>
					<td> Stops the Debug session. </td>
				</tr>
				<tr>
					<th> R </th>
					<td> Displays or alters the contentd of one or more registers. </td>
				</tr>
				<tr>
					<th> S </th>
					<td> Searches a portion of memory for a specified pattern of one or more byte values. </td>
				</tr>
				<tr>
					<th> T </th>
					<td> Executes one instructuon and then displays the contents of all registers, the status of all flags, and the 		decoded form of the instruction that Debug will execute next. </td>
				</tr>
				<tr>
					<th> U </th>
					<td> Disassembles bytes and displays the corresponding source statements. </td>
				</tr>
				<tr>
					<th> W </th>
					<td> Write the file being tested to a disk. </td>
				</tr>
				<tr>
					<th> XA </th>
					<td> Allocates expanded memory. </td>
				</tr>
				<tr>
					<th> XD </th>
					<td> Deallocates expanded memory. </td>
				</tr>
				<tr>
					<th> XM </th>
					<td> Maps expanded memory pages. </td>
				</tr>
				<tr>
					<th> XS </th>
					<td> Displays the status of expanded memory. </td>
				</tr>
			</table>
			<style>
			`,
			
			sub: [
			{
				read_status: 'Disabled',
				title:`A (Assemble)`,
				content:`<b>A (Assemble)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line;">
				Assembles 8086/8087/8088 mnemonics directly into memory. This command creates executable machine code from assembly-language statements. All numeric values are in hexadecimal format, and you must type them as 1 to 4 characters. You specify a prefix mnemonic in front of the operation code (opcode) to which it refers.
				<b>Syntax: a </b><i>[address]</i>
				<div style="margin-left:3em">
					<b>Parameters </b>
					<i>address </i>
					Specifies the location where you type assembly-language mnemonics. You use hexadecimal values for address and type each value without the trailing "h" character. If you do not specify an address, a starts assembling where it last stopped.

					<b>Notes</b>
					<b> Using mnemonics </b>
					The segment-override mnemonics are <b> cs:, ds:, es:, </b> and <b> ss </b>:. The mnemonics for the far return is <b> retf </b>. String-manipulation mnemonics must explicitly state the string size. For example, use <b> movsw </b> to move word strings (16 bits), and use <b> movsb </b> to move byte strings (8 bits). </div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`C (Compare)`,
				content:`<b>C (Compare)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line;">
				Compares two portions of memory.
				<b>Syntax: c </b><i> range address</i>
				<div style="margin-left:3em">
					<b> Parameters </b>
					<i>range </i>
					Specifies the starting and ending addresses, or the starting address and length, of the first area of memory you want to compare. For information about valid range values, see the debug command.

					<i>address</i>
					Specifies the starting address of the second area of memory you want to compare. For information about valid range values, see the debug command.

					<b>Notes</b>
					If the range and address memory areas are identical, Debug displays nothing and returns directly to the Debug prompt. If there are differences, Debug displays them in the following format: address1 byte1 byte2 address2.
					
					<b>Example:</b>
					The following commands have the same effect:
					c100,10f 300
					C100|10 300
			
					Each command compares the block of memory from the 100h through 10Fh with the block of memory from 300h through 30Fh.
					Debug responds to either of the previous commands with a display similar to the following (assuming DS = 197F):
		
					197F:0100 4D E4 197F:0300
					197F:0101 67 99 197F:0301
					197F:0102 A3 27 197F:0302
					197F:0103 35 F3 197F:0303
					197F:0104 97 BD 197F:0304
					197F:0105 04 35 197F:0305
					197F:0107 76 71 197F:0307
					197F:0108 E6 11 197F:0308
					197F:0109 19 2C 197F:0309
					197F:010A 80 0A 197F:030A
					197F:010B 36 7F 197F:030B
					197F:010C BE 22 197F:030C
					197F:010D 83 93 197F:030D
					197F:010E 49 77 197F:030E
					197F:010F 4F 8A 197F:030
				
					Notice that the addresses 197F:0106 and 197F:0306 are missing from the list. This means that the values in those addresses are identical.
				<div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`D (Dump)`,
				content:`<b>D (Dump)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line;">
					Displays the contents of a range of memory addresses.
				<b>Syntax: d </b><i>[range]</i>
				<div style="margin-left:3em">
					<b> Parameters </b>
					<i> range </i>
					Specifies the starting and ending addresses, or the starting address and length, of the memory area whose contents you want to display. For information about valid range values, see the debug command. If you do not specify range, debug displays the contents of 128 bytes, starting at the end of the address range specified in the previous <b>d</b> command.

					<b>Notes</b>
					When you use the <b>d</b> command, Debug displays memory contents in two portionsL a hexadecimal portion (each byte values is shown in hexadecimal format) and an ASCII portion (each byte value is shown as an ASCII character). Each nonprinting character is denoted by a periond (.) in the ASCII portion of the display. Each display line shows the contents of 16 bytes, with a hyphen between the eight and ninth bytes. Each display line begins on a 16-byte boundary. </p>				
					<b>Example:</b> Suppose you type the following command:
						&nbsp; dcs:100 10f

					Debug displays the contents of the range in the following format:
					04BA:0100 54 4F 4D 00 54 41 57 59-45 52 00 00 00 00 00 00 TOM.SAWYER.......

					If you type the d command without parameters, Debug formats the display as described in the previous example. Each line of the display begins with an address that is 16 bytes greater than the address on the previous line (or 8 bytes if you have 40-column screen).

					For each subsquent <b>d</b> command you type without parameters, Debug displays the bytes immediately following those last displayed. If you type the following command, Debug displays the contents of 20h bytes, starting at
						&nbsp; CS:100:
						&nbsp; dcs:100|20

					If you type the following command, Debug displays the contents of all bytes in the range of lines from 100h through 115h in the CS segment:
						&nbsp; dcs:100 115
				</pre>`
			},
			{
				read_status: 'Disabled',
				title:`E (Enter)`,
				content:`<b>E (Enter)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line;">
					Enters data into memory at the address you specify.
					You can type data in either hexadecimal or ASCII format. Any data previously stored at the specified address is lost.
					<b>Syntax: e </b><i>address[list] </i>
				<div style="margin-left:3em">
					<b>Parameters</b>
					<i><b> address </b></i>
					Specifies the first memory location where you want to enter data.
					<i><b>list</b></i>
					Specifies the data you want to enter into successive bytes of memory.
					
					<b>Notes</b>
					<b>Using the address parameter</b>
					If you specify a value for <i>address</i> without specifying a value for the optional <i>list</i> parameter, Debug displays the address and its contents, repeats the address on the next line, and waits for your input. At this point, you can perform one of the following actions:
					<ul style="margin-left:1em">
					<li> Replace the byte value. To do this, you type a new value after the current value. If the value you type is not a valid hexadecimal value or if it contains more than two digits. Debug does not echo the invalid or extra character. </li>
					<li> Advance to the next byte. To do this, you press the SPACEBAR. To change the value in that byte, type a new value after the current value. If you move beyond an 8-byte boundary when you press the SPACEBAR, Debug starts a new display line and displays the new address at the beginning of the line. </li>
					<li> Return to the preceding byte. To do this, you press the HYPHEN key. You can press the HYPHEN key repeatedly to move back more than 1 byte. When you press HYPHEN, Debug starts a new line and displays the current address and byte value.</li>
					<li>Stop the e command. To do this, you press the ENTER key. You can press ENTER at any byte position. </li></ul>
					<b>Using the list parameter</b>
					If you specify values for the <i>list</i> parameter, the e command sequentially replaces the existing bytes values with the values from the list. If an error occurs, no byte values are changed.
					List values can be either hexadecimal byte values or strings. You seperate values by using a space, a comma, or a tab character. You must enclose strings within single or double quotation marks.
					
					<b>Example:</b>
					Suppose you type the following command:
						&nbsp; ecs:100

					Debug displays the contents of the first byte in the following format:
						&nbsp; 04BA:0100 EB._
					To change this value to 41, type 41 at the cursor, as follows:
						&nbsp; 04BA:0100 EB.41_

					You can type consecutive byte values with one e command. Instead of pressing ENTER after typing the new value, press the SPACEBAR. Debug displays the next  value. In this example, if you press the SPACEBAR three times, Debug displays the following values:
						&nbsp; 04BA:0100 EB.41 10. 00. BC._

					To change the hexadecimal value BC to 42, type 42 at the cursor as follows:
						&nbsp; 04BA:0100 EB.41 10. 00. BC.42_

					Now suppose that you decide the value 10 should be 6F. To correct this value, press the HYPHEN key twice to return to address 0101 (value 10).
					Debug displays the following:
						&nbsp; 04BA:0100 EB.41 10. 00. BC.42-
						&nbsp; 04BA:0102 00.-
						&nbsp; 04BA:0101 10._

					Type 6F at the cursor to change the value, as follows: 
						&nbsp; 04BA:0101 10.6f_
					Press ENTER to stop the e command and return to the Debug prompt. The following is an example of a string entry:
						&nbsp; eds:100 "This is the text example"
					The string will fill 24 bytes, starting at DS:100.

					Debug displays the contents of the range in the following format:
						&nbsp; 04BA:0100 54 4F 4D 00 54 41 57 59-45 52 00 00 00 00 00 00 TOM.SAWYER.......

					If you type the d command without parameters, Debug formats the display as described in the previous example. Each line of the display begins with an address that is 16 bytes greater than the address on the previous line (or 8 bytes if you have 40-column screen).

					For each subsquent d command you type without parameters, Debug displays the bytes immediately following those last displayed. If you type the following command, Debug displays the contents of 20h bytes, starting at
						&nbsp; CS:100:
						&nbsp; dcs:100|20

					If you type the following command, Debug displays the contents of all bytes in the range of lines from 100h through 115h in the CS segment:
						&nbsp; dcs:100 115
				</div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`F (Fill)`,
				content:`<b>F (Fill)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line;">
					Fills addresses in the specified memory area with values you specify. You can specify data in either hexadecimal of ASCII format. Any data previously stored at the specified address is lost.
					<b>Syntax: f </b><i>range list</i>
				<div style="margin-left:3em">
					<b>Parameters
					<i>range</i></b>
					Specifies the starting and ending addresses, or the starting address and length, of the memory area you want to fill. For information about valid range values, see the debug command.

					<i>list</i>
					Specifies the data you want to enter. List can consist of hexadecimal numbers or a string enclosed in quotation marks.

					<b>Notes
					Using the range parameter</b>
					If <i>range</i> contains more bytes than the number of values in <i>list</i>, Debug assigns the values in <i>list</i> repeatedly until all bytes in range are filled.
					If any of the memory in range is bad or doesn't exist, Debug displays an error messages and stops the <b>f</b> command.

					Using the list parameter
					If <i>list</i> contains more values than the number of bytes in range, Debug ignores the extra values in list.

					<b>Example:</b>
					Suppose you type the following command:
						&nbsp; 04BA:100|100 42 45 52 54 41

					In response, Debug fills memory locations 04BA:100 through 04BA:1FF with the values specified. Debug repeats the five values until all the 100h bytes are filled.
				</div></pre>`
			},
			{
				read_status: 'Disabled',
				title: `G (Go)`,
				content: `<b>G (Go)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Runs the program currently in memory.
					<b>Syntax:	g</b>[=address][breakpoints]
				<div style="margin-left:3em">
					<b>Parameters
					<i>= address</i></b>
					Specifies the address in the program currently in memory at which you want execution to begin: If you do not specify address, MS-DOS begins program execution at the current address in the CS:IP registers.

					<i><b>breakpoints</i></b>
					Specifies 1 to 10 temporary breakpoints that you can set as part of the <b>g</b> command.

					<b>Notes </b>
					Using the address parameter</b>
					You must precede the address parameter with an equal sign (=) to distinguish the starting address (address) from the breakpoint addresses (breakpoints).

					<b>Specifying breakpoints</b> 
					The program stops at the first breakpoint it encounters, regardless of where you typed that breakpoint in the breakpoints list. Debug places the original instruction at each breakpoint with an interrupt code.

					When the program reaches a breakpoint, Debug restores all breakpoint addresses to their original instructions and displays the contents of all registers, the status of all flahs, and the decoded form of the last instruction executed. Debug displays the same information as it would display if you used the Debug r (register) command and specified the breakpoint address.

					If you do not stop the program at one of the breakpoints, Debug does not replace the interrupt codes with the original instructions.

					<b>Limitations on setting breakpoints</b>
					You can set breakpoints only at addresses containing the first byte of an 8086 operation code (opcode). If you set more than 10 breakpoints, Debug displays the following message:
						&nbsp; bp Error

					<b>Requirements for the user stack pointer</b>
					The user stack pointer must be valid and must have 6 bytes available for the g command. This command uses an <b>iret</b> instruction to jump to the program being tested. Debug sets the user stack pointer and pushes the user flags, the code segment register, and the instruction pointer onto the user stack. (If the user stack is not valid or is too small, the operation system might fail). Debug places an interrupt code (0CCh) at the specified breakpoint address(es).

					<b>Restarting a program</b>
					Do not attempt to restart a program after MS-DOS displays the following message:
					Program terminated normally
					To run the program properly, you must reload it by using the Debug <b>n</b> (name) and l (load) commands.

					<b>Example:</b>
					Suppose you type the following command:
						&nbsp; gcs:7550

					MS-DOS runs the program currently in memory up to the breakpoint address 7550 in the CS segment. Debug then displays the contents of the registers and the status of the flags and stops the <b>g</b> command.

					The following command sets two breakpoints:
						&nbsp; gcs:7550, cs:8000

					If you type the g command again after Debug encounters a breakpoint, exectuion begins at the instruction after the breakpoint, rather than at the usual starting address.
				</div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`H (Hex)`,
				content:`<b>H (Hex)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Performs hexadecimal arithmetic on two parameters you specify.
					<b>Syntax:</b> &nbsp; h <b>value1 value2</b>
				<div style="margin-left:3em">
					<b>Parameters
					<i>value1</b></i> 
					Represetns any hexadecimal number in the range 0 through FFFFh.

					<b><i>value2</b></i>
					Represents a second hexadecimal number in the range 0 through FFFFh.

					<b>Note</b> 
					Debug first adds two parameters you specify and then subtracts the second parameter from the first. The results of these calculations are displayed on one time - first the sum, then the difference.

					<b>Example:</b>
					Suppose you type the following command:
						&nbsp; h19f 10a
					Debug performs the calculations and displays the following result:
						&nbsp; 02A9 0095
				</pre></div>`
			},
			{
				read_status: 'Disabled',
				title: `I (Input)`,
				content:`<b>I (Input)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Reads and displays one byte value from the port you specify.
					<b>Syntax:</b> &nbsp; i <b>[address]</b>
				<div style="margin-left:3em">
					<b>Parameter
					port</b>
					Specifies the input port by address. The address can be a 16-bit value.

					<b>Example:</b>
					Suppose you type the following command:
						&nbsp; i2f8

					Suppose also that the byte balue at the port is 42h. Debug reads the byte and then displays the value as follows:
						&nbsp; 42</div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`L (Load)`,
				content:`<b>L (Load)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Loads a file or contents of specific disk sectors into memory. To load the contents of the number of bytes specified in the BX:CX registers from a disk file, use the following syntax:
					<b>Syntax:	l value1 value2</b>
				<div style="margin-left:3em"> To bypass the MS-DOS file system and directly load specific sectors, use the following syntax: l address drive start number.

					<b>Parameters
					</i>address</i></b>
					Specifies the memory location where you want to load the file or the sector contetns. If you don not specify address, Debug uses the current address in the CS register.

					<i><b>drive</i></b>
					Specifies the drive that contains the disk from which specifi sectors are to be read. This value is numeric: 0 = A, 1 = B, 2 = C, and so on. You use the <i>drive, start,</i> and <i>number</i> parameters only if you want to load the contents of specific sectors rather than load the file specified on the <b>debug</b> command line or in the most recent Debug n (name) command.

					<i><b>start</i></b>
					Specifies the hexadecimal number for the first sector whose contents you want to load.

					<i><b>number</i></b>
					Specifies the hexadecimal number of consecutive sectors whose contents you want to load.

					<b>Notes
					Using the l command without parameters</b>
					When you use the 1 command without parameters, the file you specified on the debug command line is loaded into memory, beginning at address CS:100. Debug also sets the BX and CX registers to the number of bytes loaded. If you did not specify a file on the debug command line, the file loaded is the one you most recently specified by using the n command.

					<b>Using the l command with the address parameter</b>
					If you use the l command wiht the address parameter, Debug begins loading the file or the contents of the specified sectors at the memory location address.

					<b>Using the l command with all parameters</b>
					If you use the l command with all parameters, Debug loads the contents of specific disk sectors instead of loading a file.

					<b>Loading the contents of specific sectors</b>
					Each sector in the range you specify is read from drive. Debug begins loading with start and continues until the contents of the number of sectors specified in number have been loaded.

					<b>Loading an .EXE file</b>
					Debug ignores the address parameter for .EXE files. If you specify an .EXE file, Debug relocates the file to the loading address specified in the header of .EXE file. The header itself is stripped off the .EXE file before the file is loaded into memory, so the size of an .EXE file on disk differs from its size in memory. If you want to examine a complete .EXE file, rename the file with a different extension.

					<b>Opening a hex file</b>
					A <i>hex file</i> is a file that uses the Intel hexadecimal format, as described in the MS-DOS Encyclopedia. Debug assumes that files with the .HEX extension are hexadecimal-format files. You can type the l command at the address specified in the hex file. If the l command you type includes the address parameter, Debug adds the specified address to the address found in the hex file to determine the starting address.

					<b>Examples:</b>
					Suppose you start Debug and type the following command:
						&nbsp; nfile.com

					You can now type the <b>l</b> command to load FILE.COM. Debug loads the file and displays the Debug prompt. 

					Suppose that you want to load the contents of 109 (6Dh) sectors from drive C, beginning with logical sector 15 (0Fh), into memory beginning at address 04BA:0100. To do this, type the following command:
						&nbsp; l04ba:100 2 0f 6d
				</pre></div>`
			},
			{
				read_status: 'Disabled',
				title:`M (Move)`,
				content: `<b>M (Move)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Copies the contents of a block of a memory to another block of memory.
					<b>Syntax:</b> &nbsp; m <b>range address</b>
				<div style="margin-left:3em">
				<b>Parameters
				<i>range</i></b>
				Specifies the starting and ending addresses, or the starting address and the length, of the memory area whose contents you want to copy.

				<i><b>address </i></b>
				Specifies the starting address of the location to which you want to copy the contents of range.

				<b>Notes 
				Effects of the copy operation on existing data</b>
				If the addresses in the block being copied don not have new data writtern to them, the original data remains intact. However, if the destination block already contains data (as it might in an overlapping copy operation), that data is overwritten. (Overlapping copy operations are those in which part of the destination block overlaps part of the source block.)

				<b>Performing overlapping copy operations</b>
				The <b>m</b> command performs overlapping copy operations without losing data at the destination addresses. The contents of addresses that will be overwritten are copied first. Thus, if data is to be copied form higher addresses to lower addresses, the copy operation begins at the source block's lowest address and progresses toward the highest address. Conversely, if data is to be copied from lower addresses to higher addresse, the copy operation begins at the source block's highest address and progresses toward the lowest address.

				<b>Example:</b>
				Suppose you type the following command:
					&nbsp; mcs:100 110 cs:500

				Debug first copies the contents of address CS:110 to CS:510, then copies the contents of CS:10F to CS:50F, and so on until it has copied the contents of CS:100 to CS:500. To view the results, you can use the Debug d (dump) command, specifying the destination address you used with the <b>m</b> command.
			</div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`N (Name)`,
				content:`<b>N (Name)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Specifies the name of an executable file for a Debug l(load) or <b>w</b>(write) command, or specifies parameters for the executable file being debugged.
					<b>Syntax:</b> &nbsp; n <b>[drive:][path] filename</b>
				<div style="margin-left:3em">To specify parameters for the executable file you are testing, use the following syntax:
						&nbsp;  <b>n</b> <i>file-parameters</i>
					To clear the current specifications, use the following syntax: <b>n</b>

				<b>Parameters
				[drive:][path]filename</b>
				Specifies the location and name of the executable file you want to test.

				<i><b>file-parameters</b></i>
				Specifies parameters and switches for the executable file you are testing.

				<b>Notes
				The two uses of the n command</b>
				You can use the n command in two ways. First, you can use it to specify a file to be used by a later <b>l</b> or <b>w</b> command. If you start Debug without naming a file to be debugged, you must use the command n filename before you can use the l command to load the file. The filename is correctly formatted for a file control block at CS:5C. Second, you can use the n command to specify command line parameters and switches for the file being debugged.

			<table style="border-collapse: collapse; text-align:left; margin-left:15px">
			
			<tr>
				<th>Memory areas</th>
			</tr>
			<tr>
				<td width="30px"><b>Memory location</b></td> 				
				<td width="20px"><b>Contents</b></td>
			</tr>
			<tr>
				<td>CS:5C</td> 				
				<td>File control block (FCB) for file 1</td>
			</tr>
			<tr>
				<td>CS:5C</td> 				
				<td>File control block (FCB) for file 2</td>
			</tr>
			<tr>
				<td>CS:80</td> 				
				<td>Length of n command line (in characters)</td>
			</tr>
			<tr>
				<td>CS:81</td> 				
				<td>Beginning of n command-line characters</td>
			</tr>
			</table>
				The first filename you specify for the n command is placed in a file control block (FCB) at CS:5C. If you specify a second filename, this name is placed in a FCB at CS:6C. The number of characters typed on the n command line (exclusive of the first character, n) is stored at location CS:80. The actual characters on the n command line(gain, exclusive of the letter n) are stored beginning at CS:81. Note that these characters can be any switches and delimiters that would be legal in a command typed at the MS-DOS prompt.

				<b>Examples:</b>
				Suppose you've started Debug and loaded the program PROG.COM for debugging. You subsequently decide to specify two parameters for PROG.COM and run the program. Following is the sequence of commands for this example:
				
				<p style="margin-left:1em">debug prog.com
				nparam1 param2
				g</p>
				In this case, the Debug <b>g</b> (go) command runs the program as if you had typed the following command at the MS-DOS prompt:

				<p style="margin-left:1em"> prog param1 param2 <p>
				Testing and debugging therefore reflect a typical run-time environment for PROG.COM.

				In the following sequence of commands, the first <b>n</b> command specifies FILE1.EXE as the file for the subsequent l command, which loads FILE1.EXE into memory. The second n command specifies the parameters to be used by FILE1.EXE. Finally, the g command runs FILE1.EXE as if you had typed <b>file1 file2.dat file3.dat</b> at the MS-DOS prompt.

				<p style="margin-left:1em">nfile1.exe
					l
					nfile2.dat file3.dat
					g</p>
				Note that you do not use the <b>l</b> command after the second form of the <b>n</b> command. Also note that if you now use the <b>w</b> command, MS-DOS saves FILE1.EXE, the file being debugged, with the name FILE2.DAT. To avoid this result, you should always use the first form of the <b>n</b> command immediately before either an l or a w command.</div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`O (Output)`,
				content:`<b>O (Output)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Sends the value of a byte to an output port.
					<b>Syntax:</b> &nbsp; o <b>port byte-value</b>
				<div style="margin-left:3em">
					<b>Parameters
					<i>port</b></i>
					Specifies the output port by address. The port address can be a 16-bit value.

					<b><i>byte-value</b></i>
					Specifies the byte value you want to direct to port.

					<b>Example:</b>
					To send the byte value 4Fh to the output port at address 2F8h, type the following command:
						&nbsp;  o2f8 4f
				</div></pre>`
			},
			{
				read_status: 'Disabled',
				title:`P (Proceed)`,
				content:`<b>P (Proceed)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Executes a loop, a repeated string instruction, a software interrupt, or a subroutine; or trace through any other instruction.
					<b>Syntax:</b> &nbsp; p <b>[=address][number]</b>
				<div style="margin-left:3em">
					<b>Parameters
					<i>=address</b></i>
					Specifies the location of the first instruction to execute. If you do not specify an address, the default address is the current address specified in the CS:IP registers

					<b><i>number</i></b>
					Specifies the number of instructions to execute before returning control to Debug. The default value is 1.

					<b>Notes </b>
					Transferring control to the program being tested</b>
					When the <b>p</b> command transfers control from Debug the program being tested, that program runs without interruption until the loop, repeated string instruction, software interrupt, or subroutine at the specified number of machine instructions have been executed. Control then returns to Debug.

					<b>Limitations on the address parameter</b>
					If the <i>address</i> parameter does not specify a segment, Debug uses the CS register of the program being tested. If you omit address, the program is executed beginning at the address specified by its CS:IP registers. You must precede the address parameter with an equal sign (=) to distinguish it from the number parameter. If the instruction at the specified address is not a loop, a repeated string instruction, a software interrupt, or a subroutine, the p command works the same way as the Debug t (trace) command.
					
					<b>Messages displayed with the p command</b>
					After <b>p</b> executes an instruction, Debug displays the contents of the program's registers, the status of its flags, and the decoded form of the next instruction to be executed.
					<b>Caution:</b> You cannot use the <b>p</b> command to trace through read-only memory(ROM).

					<b>Example:</b>
					Suppose that the program you're testing contatins a call instruction at address CS:143F. To run the 				subroutine that is the destination of call and then return control to Debug, type the following command:
						&nbsp;  p=143f
					Debug displays the results in the following format:
				</div></pre>
					<p><br/>AX=0000 BX=0000 CX=0000 DX=0000 SP=FFFE BP=0000 SI=0000 DI=0000 <br/>
					DS=2246 ES=2246 SS=2246 CS=2246 IP=1443 NV UP EI PL NZ AP PO NC <br/>
					2246:1442 7505 &nbsp; JNZ &nbsp; 144A </p>`
			},
			{
				read_status: 'Disabled',
				title:`Q (Quit)`,
				content:`<b>Q (Quit)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Stops the Debug session without saving the file currently being tested.
					After you type <b>q</b> control returns to MS-DOS.
					<b>Syntax:</b> &nbsp; q 
				<div style="margin-left:3em">
					<b>Example:</b>
					To stop debugging session, type the following command: <b> q</b> 
					MS-DOS displays the MS-DOS prompt.
				</pre></div>`
			},
			{
				read_status: 'Disabled',
				title:`Debug: R (Register)`,
				content: `<b>Debug: R (Register)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Displays or alters the contents of one or more central processing unit (CPU) registers.
					<b>Syntax:</b> &nbsp; r <b>[register-name]</b> 
					To display the contents of all registers and flags in the register storage area, use the following syntax: <b>r</b>
				<div style="margin-left:3em">
					<b>Parameter
					<i>register-name</i></b>
					Specifies the name of the register whose contents you want to display.

					<b>Notes 
					Using the r command</b>
					If you specify a register name, MS-DOS displays the 16-bit value of that register in hexadecimal notation and displays a colon as the prompt. If you want to change the value contained in the register, type a new value a press ENTER; otherwise, just press ENTER to return to the Debug prompt.

					<b>Valid register names</b>
					The following are valid values for register-name:
					<b>ax, bx, cx, dx, sp, bp, si, di, ds, es, ss, cs, ip, pc, and f.</b>
					Both <b>ip</b> and <b>pc</b> refer to the instruction pointer.
					If you specify a register name other than one from preceeding list, MS-DOS displays the followign message:
						&nbsp;&nbsp; br error

					<b>Using the f character instead of a register name</b>
					If you type the f character instead of a register name, Debug displays the current setting of each flag as a two-letter code and then displays the Debug prompt. To change the setting of a flag, type the appropriate two-letter code from the following table:

				<table style="border-collapse:collapse;text-align:left">
				<tr>
					<th width="40%"> Flag name </th>		
					<th width="40%"> Set </th>
					<th width="40%"> Clear </th>
				</tr>
				<tr>
					<td> Overflow </td>		
					<td> ov </td>
					<td> nv </td>
				</tr>
				<tr>
					<td> Direction </td>		
					<td> dn(decrement)  </td>
					<td> up(increment) </td>
				</tr>
				<tr>
					<td> Interrupt </td>		
					<td> ei(enabled) </td>
					<td> di(disabled) </td>
				</tr>
				<tr>
					<td> Sign </td>		
					<td> ng(negative) </td>
					<td> pl(positive) </td>
				</tr>
				<tr>
					<td> Zero </td>		
					<td> zr </td>
					<td> nz </td>
				</tr>
				<tr>
					<td> Auxiliary Carry </td>		
					<td> ac </td>
					<td> na </td>
				</tr>
				<tr>
					<td> Parity </td>		
					<td> pe(even) </td>
					<td> po(odd) </td>
				</tr>
				<tr>
					<td> Carry  </td>		
					<td>cy </td>
					<td> nc </td>
				</tr>
			</table>		 					
					You can type new flag values in any order. You need to leave spaces between these values. To stop the r command, press ENTER. Any flags for which you did not specify new values remain unchanged.

					<b>Messages displyaed with the r command</b>
					If you specify more than one value for a flag, Debug displays the following message:
						&nbsp;&nbsp; df error

					If you specify a flag code not listed in the preceding table, Debug displays the following message:
						&nbsp;&nbsp;bf error
					In both cases, Debug ignores all settings specified after the invalid entry.

					<b>Default settings for Debug</b>
					When you start Debug, the segment registers are set to the bottom of free memory, the instruction pointer is set to 0100h, all flags are cleared, and the remaining registers are set to zero, except for <b>sp</b>, which is set to FFEEh.
					
					<b>Examples:</b>
					To view the contents of all registers, the status of all flags, and the decoded form of the instruction 			at the current location, type the following command:

					If the current location is CS:11A, the display will look similar to the following:
				</div></pre><br/>
					<p>AX=0E00 BX=00FF CX=0007 DX=01FF SP=039D BP=0000 SI=005C DI=0000 <br/>
					DS=04BA ES=04BA SS=04BA CS=04BA IP=011A NV UP DI NG NZ NAC PE NC <br/>				
					04BAA:011A 	&nbsp;&nbsp;CD21 &nbsp;INT 21

				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
				<div style="margin-left:3em">
					To view only the status of the flags, type the following command:
					&nbsp;&nbsp;rf

					Debug displays the information in the following format:
					&nbsp;&nbsp;NV UP DI NG NZ AP PE NC - _

					Now you can type one or more valid flag values, in any order, with or without spaces, as in the following command:
					&nbsp;&nbsp;nv up di ng nz ac pe nc - pleicy

					Debug stops the r command and displays the Debug prompt. To see the changes, type either the <b>r</b> or <b>rf</b> command. Debug then displays the following:
					&nbsp;&nbsp;NV UP EI PL NZ AC PE CY - _

					Press ENTER to return to the Debug prompt.
				</pre></div>`
			},
			{
				read_status: 'Disabled',
				title: `S (Search)`,
				content: `<b>S (Search)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Searches a range of addresses for a pattern of one or more byte values.
					<b>Syntax:</b>	&nbsp s <b>range list</b>
				<div style="margin-left:3em">
					<b>Parameters
					<i>range</b></i>
					Specifies the beginning and ending addresses of the range you want to search. For information about valid values for the range parameter, see the <b>debug</b> command.

					<b><i>list</b></i>
					Specifies the pattern of one or more byte values or a string you want to search for. Seperate each byte value from the next with a space or a comma. Enclose string values in quotation marks.

					<b>Note</b>
					If the list parameter contains more than one byte value, Debug displays only the first address where the byte value occurs. If list contains only one byte value, Debug displays all addresses where the value occurs in the specified range.

					<b>Examples:</b>
					Suppose you want to find all addresses in the range CS:100 through CS:110 that contatin the value 41. To do this, type the following command:
						&nbsp; scs:100 110 41

					Debug displays the results in the following format:
						&nbsp; 04BA:0104
						&nbsp; 04BA:010D	

					The following command searches for the string "Ph" in the range CS:100 through CS:1A0:
						&nbsp; scs:100 1a0 "Ph"
				</pre><div>`
			},
			{
				read_status: 'Disabled',
				title: `T (Trace)`,
				content: `<b>T (Trace)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
				Executes one instruction and displays the contents of all registers the status of all flags, and the decoded form of the instruction executed.
				<b>Syntax:</b>	&nbsp; t <b>[=address][number]</b>
				<div style="margin-left:3em">
				<b>Parameters
				</i>= address</b></i>
				Specifies the address at which Debug is to start tracing instructions. If you omit the address parameter, tracing begins at the address specified by your program's CS:IP registers. For information about valid values for the address parameter, see the debug command.

				<b><i>number</b></i>
				Specifies the number of instructions to be traced. This value must be a hexadecimal number. The default value is 1.

				<b>Notes</b>
				Tracing instructions in read-only memory.

				The <b>t</b> command uses the hardware trace mode of the 8086 or 8088 microprocessor. Therefore, you can also trace instructions stored in read-only memory (ROM).

				<b>Using the address parameter</b>
				You must precede the address parameter with an equal sign (=) to distinguish it from the number parameter.

				<b>Example:</b>
				To execute one instruction (pointed to by CS:IP),
				and then display the contents of the registers, the status of the flags, and the decoded form of the instruction, type the following command:
					&nbsp; -t

				If the position of the instruction in the program were 04BA:011A, Debug might display the following information:
			</div></pre>
				<p>AX=0E00 BX=00FF CX=0007 DX=01FF SP=039D BP=0000 SI=005C DI=0000 <br/>
				DS=04BA ES=04BA SS=04BA CS=04BA IP=011A NV UP DI NG NZ AC PE NC<br/>
				04BA:011A	&nbsp;	CD21	&nbsp;&nbsp;	INT 21</p>`
			},
			{
				read_status: 'Disabled',
				title:`U (Unassemble)`,
				content:`<b>U (Unassemble)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Disassembles bytes and displays their corresponding source statements, including addresses and byte values. The disassembled code looks like a listing for an assembled file.
					<b>Syntax:</b>	&nbsp; u <b>[range]</b>
				<div style="margin-left:3em">To disassemble 20h bytes(the default number), beginning at the first address after the address displayed by the previous <b>u</b> command, use the following syntax: <b>u</b>

				<b>Parameter
				<i>range</b></i>
				Specifies the starting and ending addresses, or the starting address and length, of the code you want to disassemble. For information about valid values for the range parameter, see the debug command.

				<b>Examples:</b>
				To disassemble 16 (10h) bytes, beginning at address 04BA:0100, type the following command:
						&nbsp; u04ba:100|10
				Debug displays the results in the following format:<br/>
				<table style="border-collapse:collapse;text-align:left">
				<tr>
					<td width="20%"> 04BA:0100 </td>
					<td width="20%"> 206472 </td>
					<td width="20%"> AND </td>
					<td width="25%"> [SI+72], AH </td>
				</tr>
				<tr>
					<td> 04BA:0103 </td>
					<td> 69 </td>
					<td> DB </td>
					<td> 69 </td>
				</tr>
				<tr>
					<td> 04BA:0104 </td>
					<td> 7665 </td>
					<td> JBE </td>
					<td> 016B </td>
				</tr>
				<tr>
					<td> 04BA:0106 </td>
					<td> 207370 </td>
					<td> AND </td>
					<td> [BP+DI+70], DH </td>
				</tr>
				<tr>
					<td> 04BA:0109 </td>
					<td> 65 </td>
					<td> DB </td>
					<td> 65 </td>
				</tr>
				<tr>
					<td> 04BA:010A </td>
					<td> 63 </td>
					<td> DB </td>
					<td> 63 </td>
				</tr>
				<tr>
					<td> 04BA:010B </td>
					<td> 69 </td>
					<td> DB </td>
					<td> 69 </td>
				</tr>
				<tr>
					<td> 04BA:010C  </td>
					<td> 66 </td>
					<td> DB </td>
					<td> 66 </td>
				</tr>
				<tr>
					<td> 04BA:010D </td>
					<td> 69 </td>
					<td> DB </td>
					<td> 69 </td>
				</tr>
				<tr>
					<td> 04BA:010E </td>
					<td> 63 </td>
					<td> DB </td>
					<td> 63 </td>
				</tr>
				<tr>
					<td> 04BA:010F </td>
					<td> 61 </td>
					<td> DB </td>
					<td> 61 </td>
				</tr>
				</table>
 				To display only the information for the specific addresses 04BA:0100 through 04BA:0108, type the following command:
 						&nbsp; u04ba:0100 0108

 				Debug displays the following:<br/>
 				<table style="border-collapse:collapse;text-align:left">
				<tr>
					<td width="20%"> 04BA:0100 </td>
					<td width="20%"> 206472 </td>
					<td width="20%"> AND </td>
					<td width="25%"> [SI+72], AH </td>
				</tr>
				<tr>
					<td> 04BA:0103 </td>
					<td> 69 </td>
					<td> DB </td>
					<td> 69 </td>
				</tr>
				<tr>
					<td> 04BA:0104 </td>
					<td> 7665 </td>
					<td> JBE </td>
					<td> 016B </td>
				</tr>
				<tr>
					<td> 04BA:0106 </td>
					<td> 207370 </td>
					<td> AND </td>
					<td> [BP+DI+70], DH </td>
				</tr>
				</table></pre></div>`
			},
			{
				read_status: 'Disabled',
				title:`W (Write)`,
				content: `<b>W (Write)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Writes a file or specific sectors to disk.<br/>
					You must have specified the name of the disk file when you started. Debug or in the most recent of the disk file when you started Debug or in the most recent Debug <b>n</b> (name) command. Both of these methods properly format a filename for a file control block at address CS:5C.
					<b>Syntax:</b> &nbsp; w <b>[address]</b>
				<div style="margin-left:3em">To bypass the MS-DOS file system and directly write specific sectors, use the following syntax: w address drive start number

					<b>Caution:</b> Writing specific sectors is extremely risky because it bypasses the MS-DOS file handler. The disk's file structure can easily be damaged if the wrong values are typed.

					<b>Parameters
					<i>address</b></i>
					Specifies the beginning memory address of the file, or portion of the file, you want to write to a disk file. If you do not specify address, Debug starts from CS:100. For information about valid values for the address parameter, see the <b>debug</b> command.

					<b><i>drive</b></i>
					Specifies the drivw that contains the destination disk. This value is numeric: 0 = A, 1 = B, 2 = C, and so on.

					<b><i>start</b></i>
					Specifies the hexadecimal number of the first sector to which you want to write.

					<b><i>number</b></i>
					Specifies the number of sectors to which you want to write.

					<b>Notes
					Resetting BX:CX before using the w comman without parameters</b>
					If you have a Debug g (go), t (trace), p (proceed), or r (register) command, you must reset the BX:CX registers before using the w command without parameters.

					<b>Writing a modified file to a disk</b>
					If you modify the file but do not change the name, length, or starting address, Debug can still correctly write the file to the original disk location.

					<b>Limitation on the w command</b>
					You cannot write an .EXE or .HEX file with this command

					<b>Example:</b>
					Suppose you want to write the contents of memory, beginning at the address CS:100, to the disk in drive B. You want the data to begin in the disk's logical sector number 37h and continue for 2Bh sectors. To do this, type following command:
							&nbsp; wcs:100 1 37 2b

					When the write operation is complete, Debug displays the Debug prompt again.
				</pre></div>`
			},
			{
				read_status: 'Disabled',
				title:`XA (Allocate Expanded Memory)`,
				content:`<b>XA (Allocate Expanded Memory) </b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Allocates a specified number of pages of expanded memory. To use expanded memory, you must have installed an expanded-memory device driver that confirms to version 4.0 of the Lotus/Intel/Microsoft Expanded Memory Specification (LIM EMS).
					<b>Syntax:</b> 	xa <b>[count]</b>
				<div style="margin-left:3em">
					<b>Parameter
					<i>count</b></i>
					Specifies the number of 16-kilobyte pages of expanded memory to allocate.

					<b>Example:</b>
					To allocate handle 0003, type the following command:
						&nbsp; xa 0003
					If the command is successful, Debug displays the following message:
					Handle 0003 allocated`		
			},
			{
				read_status: 'Disabled',
				title: `XD (Deallocate Expanded Memory)`,
				content: `<b> XD (Deallocate Expanded Memory) </b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
				Deallocates a handle to expanded memory.
				To use expanded memory, you must have installed an expanded-memory device driver that conforms to version 4.0 of the Lotus/Intel/Microsoft Expanded Memory Specification (LIM EMS).
				<b>Syntax:</b>	xd <b><i>[handle]</b></i>
				<div style="margin-left:3em">
					<b>Parameters
					<i>handle</b></i>
					Specifies the handle you want to deallocate

					<b>Example:</b>
					To deallocate handle 0003, type the following command:
						&nbsp; xa 0003
					if the command is successful, Debug displays the following message:
						&nbsp; Handle 0003 deallocated
				</pre></div>`
			},
			{
				read_status: 'Disabled',
				title:`M (Map Expanded Memory Pages)`,
				content:`<b>M (Map Expanded Memory Pages)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Maps a logical page of expanded memory, belonging to the specified handle, to a physical page of expanded memory. To use expanded memory, you must have installed an expanded-memory device driver that conforms to version 4.0 of the Lotus/Intel/Microsoft Expanded Memory Specification (LIM EMS).
					<b>Syntax:</b>	&nbsp; xm <b>[lpage][ppage][handle]</b>
				<div style="margin-left:3em">
					<b>Parameters</b>
					<b>lpage</b>
					Specifies the number of the logical page of expanded memory that you want to map to physical page <i>ppage</i>.

					<p>ppage</p>
					Specifies the number of the physical page to which lpage is to be mappped.

					<b>handle</b>
					Specifies the handle.

					<b>Example:</b>
					To map logical page 5 of handle 0003 to physical page 2, type the following command:
						&nbsp; xm 5 2 0003

					If the command is successful, Debug displays the following message:
						&nbsp; Logical page 05 mapped to physical page 02`
			},
			{
				read_status: 'Disabled',
				title:`Debug: XS (Display Expanded-Memory Status)`,
				content:`<b>Debug: XS (Display Expanded-Memory Status)</b>
				<pre style="font-family:arial; white-space:pre-wrap; white-space:pre-line">
					Displays information about the status of expanded memory. To use expanded memory, you must have installed an expanded-memory device driver that conforms to version 4.0 of the Lotus/Intel/Microsoft Expanded Memory Specification (LIM EMS).
					<b>Syntax:</b> 	&nbsp;<i>xs</i>
				<div style="margin-left:3em">
					<b>Note</b>
					The information that Debug Displays has the following format:

						&nbsp; Handle xx has xx pages allogcated
						&nbsp; Physical page xx= Frame segment xx
						&nbsp; xx of a total xx EMS pages have been allocated
						&nbsp; xx of a total xx EMS handles have been allocated

					<b>Example:</b>
					To display expanded-memory information, type the following command:

					xs
					Debug displays information similar to the following
						&nbsp;Handle 0000 has 0000 pages allocated
						&nbsp;Handle 0001 has 0002 pages allocated				
						&nbsp;Physical page 00 = Frame segment C000
						&nbsp;Physical page 01 = Frame segment C400
						&nbsp;Physical page 02 = Frame segment C800
						&nbsp;Physical page 03 = Frame segment CC00
						&nbsp;2 of a total 80 EMS pages have been allocated
						&nbsp;2 of a total FF EMS handles have been allocated`
			},
			]
		},
		{
			read_status: 'Disabled',
			title:`Rules of Debug Commands`,
			content:`<b>RULES OF DEBUG COMMANDS</b>
			<p style="margin-left:3em">
				Here are some basic rules in using DEBUG.</p>
			<ul style="margin-left:2em">
				<li>It is not case-sensitive.</li>
				<li>It assumes that all numbers given are in hexadecimal format.</li>
				<li>You can enter a space only when it is needed to seperate parameters of a particular command.</li>
				</li>You should specify segments and offsets with a colon, in the form &lt;segment&gt;:&lt;offset&gt;. </li>
			</ul>`
		},
		{
			read_status: 'Disabled',
			title:`A Sample Session with Debug`,
			content:`<b>A SAMPLE SESSION WITH DEBUG</b>
			<style>
			p{
				text-indent:3em;
			}
			img{
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
			</style>
			<p>Below are the illustrations that will demonstrate how to use DEBUG. </p>

			<b>Starting DEBUG</b>
			<p>From the DOS prompt, key in the word DEBUG and press ENTER key. A hyphen (-) appears on screen, that is the DEBUG prompt. DEBUG us now ready to accept commands.</p>
			<img src="cmdImage1.png" alt="cmd_start" style="width:600px; height:200px;"><br/>

			<b> Quitting and closing the DEBUG environment </b>
			<p>To close DEBUG and go back to DOS environment. Type Q and press &lt;ENTER&gt; key.</p>
			<img src="cmdImage2.png" alt="cmd_close" style="width:600px; height:200px;"><br/>

			<b> Adding and subtracting 4-digit hexadecimal values </b>
			<p>To get the sum and difference of two hexadecimal numbers: type H followed by a space, a 4-digit hexadecimal value followed by a space agein, another 4-digit hexadecimal value and then press &lt;ENTER&gt; key. The leftmost part is the sum and the rightmost part is the difference. </p>
			<img src="cmdImage3.png" alt="cmd_sum_diff" style="width:600px; height:200px;"><br/>

			<b> Viewing the contents of the registers </b>
			<p> To show the values of the registers: type R and press &lt;ENTER&gt; key. </p>
			<img src="cmdImage4.png" alt="cmd_view_reg" style="width:600px; height:200px;"><br/>

			<b> Changing the contents of a specific registers </b>
			<p> To modify the value of a particular register, let's say BX:type R followed by a space, type BX and press &lt;ENTER&gt;. Debug will display the current value of BX (i.e. 0000) and will wait for you to enter the new value. Just type in the new value in hexadecimal form after the colon and press &lt;ENTER&gt; key. To confirm if the new value for BX is stored, type R to display the values of the registers. </p>
			<img src="cmdImage5.png" alt="cmd_change" style="width:600px; height:250px;"><br/>

			<b> Entering String </b>
			<p> Lets store the string into memory. We'll start at offset 0200h so that the string wont become tangled with the code at 0100h. Here are the steps: </p>
			
			<style>
			table, td{
				border-collapse:collapse;
				border:1px solid black;
				padding: 5px 5px 5px 5px;
				text-align:center;
				margin-left:auto;
				margin-right:auto;
			}
			</style>
			<i>Step 1:</i> &nbsp;&nbsp; Convert every character into ints hexadecimal equivalent code using the ASCII reference table.<br/><br/>
			<table>
			<tr>
				<td> H </td>
				<td> e </td>
				<td> l </td>
				<td> l </td>
				<td> o </td>
				<td> , </td>
				<td> &lt;space &gt; </td>
				<td> w </td>
				<td> o </td>
				<td> r </td>
				<td> l </td>
				<td> d </td>
				<td> ! </td>
			</tr>
			<tr>
				<td> 48 </td>
				<td> 65 </td>
				<td> 6C </td>
				<td> 6C </td>
				<td> 6F </td>
				<td> 2C </td>
				<td> 20 </td>
				<td> 57 </td>
				<td> 6F </td>
				<td> 72 </td>
				<td> 6C </td>
				<td> 64 </td>
				<td> 21 </td>
			</tr></table><br/>

			<i>Step 2:</i> &nbsp;&nbsp; Add the last number 24h which is the ASCII for $ symbol. It tells DOS that this is the end of the string.<br/><br/>
			<table>
			<tr>
				<td> H </td>
				<td> e </td>
				<td> l </td>
				<td> l </td>
				<td> o </td>
				<td> , </td>
				<td> &lt;space &gt; </td>
				<td> w </td>
				<td> o </td>
				<td> r </td>
				<td> l </td>
				<td> d </td>
				<td> ! </td>
				<td> $ </td>
			</tr>
			<tr>
				<td> 48 </td>
				<td> 65 </td>
				<td> 6C </td>
				<td> 6C </td>
				<td> 6F </td>
				<td> 2C </td>
				<td> 20 </td>
				<td> 57 </td>
				<td> 6F </td>
				<td> 72 </td>
				<td> 6C </td>
				<td> 64 </td>
				<td> 21 </td>
				<td> 24 </td>
			</tr></table><br/>
			<i>Step 3:</i> &nbsp;&nbsp; Enter these hex codes using the command E 0200. Type E 0200 after the DEBUG prompt and press ENTER key. Key in the first hex code (i.e. 48) and press SPACE bar. Key in the second hex code (i.e. 65) and press SPACE bar. Do it over and over again until you have entered 24 for the dollar sign. Press ENTER key to end the process.<br/><br/>
			<img src="cmdImage6.png" alt="cmd_store" style="width:600px; height:250px;"><br/>

			<b> Displaying the input string </b>
			<p> Now that you've stored the string into memory. it's time to see how it looks like. Use D command to display or dump the contents of memory on screen. Since you'd input the string at offset 0200h, you are going to use this address again to display the string. Type D 0200 and press &lt; ENTER&gt; key. </p>
			<img src="cmdImage7.png" alt="cmd_display_string" style="width:600px; height:250px;"><br/>

			<b> The DEBUG display </b>
			<p> We know that D command dumps the contents of a requested data area on screen. It displays eight(8) lines of data, each containing sixteen (16) bytes or 32 hex codes, for 128 bytes in all, beginning with the address that you specify in the D command. Diagrammatically we have the following: </p>
			<img src="cmdImage8.png" alt="cmd_display" style="width:600px; height:250px;"><br/>
			<p> The display consists of three parts.
			<ul style="margin-left:2em">
				<li> The address in segment: offset format. </li>
				<li> The hexadecimal representation are those that shows (2) hex digit for each byte, followed by a space for readability. Also, a hyphen seperates the second 8 byes from the first 8. </li>
				<li> The ASCII representation of bytes that contatins displayable characters, which can help you, interpret the hex representation. </li>
			</ul></p>
			<p> Take note that the remaining characters displated after the dollar ($) sign are the miscellaneuos assortment of characters. Whenever you see a period (.) in the ASCII window, it represents either a period or a special character such as the Greek letter alpha. DEBUG's D command displays only 96 out of 256 characters in the ASCII table so a period is used for the remaining 160 characters. </p><br/>`
		},
		{
			read_status: 'Disabled',
			title:`Creating a program in DEBUG`,
			content:`<b> CREATING A PROGRAM IN DEBUG </b>
			<p style="text-indent:3em"> To construct a program in DEBUG: type A 0100 and press &lt;ENTER&gt; key. This command tells DEBUG to begin accepting symbolic assembly instructions and initializes the starting address for your instructions in the code segment at offset 0100h. Type in the following instructions, each followed by pressing &lt;ENTER&gt; key: </p>
			<pre style="font-family:comic sans ms;">
		MOV AX, 0BEA
		MOV BX, 0103
		ADD AX, BX
		INT 20
			</pre>
			<p style="text-indent:3em"> When you have keyed in the last instruction (i.e. INT 20) press &lt;ENTER&gt; key again to exit from the A command. That is one extra &lt;ENTER&gt; which tells DEBUG that you have no more symbolic instructions to enter. On completion, DEBUG should display the following: </p>
			<center><img class="marginauto" alt="create" src="cmdImage9.png"  style="width:600px; height:250px;"></center><br/>`
		},
		{
			read_status: 'Disabled',
			title:`Executing one instruction at a time`,
			content:`<b> EXECUTING ONE INSTRUCTION AT A TIME </b>
			<p style="text-indent:3em"> To run each instruction: type T and press &lt;ENTER&gt; key. DEBUG will display the new values of the registers and the next instruction to be fetched and executed. Repeat this process until NOP is displayed. NOP (pronounce as "no-op") is an instruction that does nothing and it means that's the end of tracing the program. </p>
			<center><img src="cmdImage10.png" alt="cmd_execute" style="width:600px; height:350px;"></center><br/>

			<b> Running the entire program </b>
			<p style="text-indent:3em"> To execute the entire symbolic assembly program: type G and press &lt;ENTER&gt; key. DEBUG will display the output and the message "Program terminated normally". Let's have a new set of program this time, key in the following instructions each followed by pressing &lt;ENTER&gt; key: </p>
			<pre style="font-family:comic sans ms;">
		MOV AX, 0BEA
		MOV BX, 0103
		ADD AX, BX
		INT 20
			</pre>
			<center><img src="cmdImage11.png" alt="cmd_run" style="width:600px; height:250px;"></center><br/>`
		},
		{
			read_status: 'Disabled',
			title:`Saving your program`,
			content:`<b> SAVING YOUR PROGRAM </b>
			<p style="text-indent:3em"> To save your work in DEBUG follow the procedures below: ("We'll assume that we are going to save the program illustrated above in the same path - drive C:") </p>
			<i>Step 1:</i> &nbsp;&nbsp; Determine the number of bytes by subtracting the last offset address (before the DEBUG prompt) from 0100. Type H 0108 0100 press &lt;ENTER&gt; key. Get the rightmost value of the difference (0008). </br>
			<i>Step 2:</i> &nbsp;&nbsp;	Store that value (0008) to CX register. Type R CX press &lt;ENTER&gt; key, after the colon type in 0008 and press &lt;ENTER&gt; key again. <br/>
			<i>Step 3:</i> &nbsp;&nbsp;	Give the filename. <br/>
			<i>Step 4:</i> &nbsp;&nbsp;	Save the program onto disk storage by using W command. Type W and press &lt;ENTER&gt; key. The message "Writing 0008 bytes" will be displayed on screen.<br/>
			<i>Step 5:</i> &nbsp;&nbsp; Lastly, check if the DEBUG program was stored by quitting DEBUG and using dir *.com DOS command to view the contents to disk storage.<br/><br/>
			<center><img src="cmdImage12.png" alt="cmd_save" style="width:600px; height:300px;"></center><br/>
			<center><img src="cmdImage13.png" alt="cmd_dir" style="width:600px; height:250px;"></center><br/>

			<b> Running your program in DOS environment </b>
			<p style="text-indent="3em"> To execute your DEBUG program in DOS environment, just type only the base name (no need to add the extension name .COM) and press ENTER key. </p>
			<center><img src="cmdImage14.png" alt="cmd_sample" style="width:600px; height:200px;"></center><br/>`
		},
		{
			read_status: 'Disabled',
			title:`Loading your DEBUG program`,
			content:`<b> LOADING YOUR DEBUG PROGRAM </b>
			<p style="text-indent:3em"> To retrieve your DEBUG program for modification, type DEBUG followed by a space and the file name. This time add the extension name .COM (i.e. DEBUG SAMPLE.COM) and press ENTER key. Debug prompt will be displayed on screen which means it is ready to accept any modification. From the DEBUG prompt, type U 0100 and press ENTER Key. Your program will be listed down on screen. </p>
			<center><img src="cmdImage15.png" alt="cmd_load" style="width:600px; height:200px;"></center><br/>`
		},
		{
			read_status: 'Disabled',
			title:`Modifying Instruction in DEBUG`,
			content:`<b> MODIFYING INSTRUCTION IN DEBUG </b>
			<p style="text-indent:3em"> To change a particular instruction in DEBUG, type A followed by space, followed by the offset address and press ENTER key. DEBUG is now ready to accept a new instruction for this offset address. For example, instead of MOV DL, 01 your instruction is MOV DL, 03. To do this, type A 0102 and press &lt;ENTER&gt; key. Type MOV DL, 03 and press &lt;ENTER&gt; and &lt;ENTER&gt; key again. If you want to make sure that the instruction was changed, type U100 </p>
			<center><img src="cmdImage16.png" alt="cmd_modify" style="width:600px; height:750px;"></center><br/>`
		},
		{
			read_status: 'Disabled',
			title:`Addition and Subtraction, Machine Language Style`,
			content:`<b> ADDITION AND SUBTRACTION, MACHINE LANGUAGE STYLE </b>
			<p style="text-indent:3em"> The machine code to add the values of AX and BX is 01h and D8h, while to subtract their values is 29h and D8h. These numbers have no meaning to us, but the compiler will interpret as add and subtract instructions. </p>
			As an example, let's add and subtract 083Ah and 050Ch. To do this, follow the process below:<br/>
			<i>Step 1:</i> &nbsp;&nbsp; Store 083Ah to AX, while 050Ch to BX register. <br/>
			<center><img src=" " alt="cmd_addsub1" style="width:600px; height:300px;"></center><br/>
			<i>Step 2:</i> &nbsp;&nbsp; Input the numbers 01h and D8h using E command. <br/>
			<center><img src=" " alt="cmd_addsub2" style="width:600px; height:300px;"></center><br/>
			<i>Step 3:</i> &nbsp;&nbsp; Display the register and trace if the instruction will work. </br>
			<center><img src=" " alt="cmd_addsub3" style="width:600px; height:300px;"></center><br/>
			<p style="text-indent:3em">For subtraction, apply the same procedure but use different machine code. Try it in your computer.</p>`
		},
		{
			read_status: 'Disabled',
			title:`Multiplication and Division, Machine Language Style`,
			content:`<b> MULTIPLICATION AND DIVISION, MACHINE LANGUAGE STYLE </b>
			<p style="text-indent:3em"> As an example, let's multiply and divide 0808h and 0300h. To do this, follow the process below: </p>
			As an example, let's add and subtract 083Ah and 050Ch. To do this, follow the process below:<br/>
			<i>Step 1:</i> &nbsp;&nbsp; Store 0808h to AX, while 0300h to BX register. <br/>
			<center><img src=" " alt="cmd_muldiv1" style="width:600px; height:300px;"></center><br/>
			<i>Step 2:</i> &nbsp;&nbsp; Input the numbers F7h and E3h using E command. <br/>
			<center><img src=" " alt="cmd_muldiv2" style="width:600px; height:300px;"></center><br/>
			<i>Step 32:</i> &nbsp;&nbsp; Display the register and trace if the instruction will work <br/>
			<center><img src=" " alt="cmd_muldiv3" style="width:600px; height:300px;"></center><br/>

			<p style="text-indent:3em"> In multiplication, when the product is greater than 16-bit result, the higher 16-bits are stored in DX register. For division, the quotient is stored in AX while the remainder is stored in DX. Now, try dividing the sample numbers in your computer. </p>
			<b>BASIC ASSEMBLY INSTRUCTIONS USED IN DEBUG</b><br/>
			<ol>
				<li>MOV(MOV Data)<br/>
					It copies and transfers data between two registers, or between an immediate data to register.
					<pre>
		Format:	 MOV &lt;register&gt;,&lt;register&gt;
			 MOV &lt;register&gt;,&lt;immediate data&gt;

		Example: MOV AX, BX
			 MOV CX, 5083
			 MOV CL, DL
			 MOV BL, 33 
			</pre></li>

				<li>ADD(ADD Data)<br/>
					It is used to get the sum of two registers or a register and an immediate data, and stores the result to the leftmost register. 
					<pre>
		Format:	 ADD &lt;register&gt;,&lt;register&gt;
			 ADD &lt;register&gt;,&lt;immediate data&gt;

		Example: ADD CX, BX
			 ADD AX, 0308
			 ADD AL, BL
			 ADD DX, 85 
			</pre></li>	

				<li>SUB(Subtract Data)<br/>
					It is used to get the difference of two registers or a register and an immediate data, and stores the result to the leftmost register. 
					<pre>
		Format:	 SUB &lt;register&gt;,&lt;register&gt;
			 SUB &lt;register&gt;,&lt;immediate data&gt;

		Example: SUB CX, BX
			 SUB AX, 0308
			 SUB AL, BL
			 SUB CL, 85 
			</pre></li>	

				<li>MUL(Multiply Data)<br/>
					It is used to get the product of a given register and AX register and stores the result to AX register. If the product is greater than 16 bits, the overflow is stored in DX register. 
					<pre>
		Format:	 MUL &lt;register&gt;

		Example: MUL CX
			</pre></li>	

			<li>DIV(Divide Data)<br/>
					It is used to divide the value of a given register and AX register, and stores the quotient to AX and the remainder to DX registers, respectively.
					<pre>
		Format:	 DIV &lt;register&gt;

		Example: DIV BX
			</pre></li>	

			<li>INC(Increment by One)<br/>
					It is used to increase the value of the register by one (1).
					<pre>
		Format:	 INC &lt;register&gt;

		Example: INC AX
			 INC CH
			</pre></li>	

			<li>DEC(Decrement by One)<br/>
					The opposite of INC, instead of increasing, it decreases the value of the register by one (1).
					<pre>
		Format:	 DEC &lt;register&gt;

		Example: DEC AX
			 DEC CH
			</pre></li>

			<li>LOOP(Loop Until Complete)<br/>
					It controls the execution of a program segment in a specified number of times. The CX register should contain a count value before starting the loop and automatically decrements by one (1). If CX register is not equal to zero (0). it transfers to its operand address which points to the start of the loop; otherwise it drops through to the next instruction.
					<pre>
		Format:	 LOOP &lt;offset address&gt;

		Example: LOOP 0108
			</pre></li>
			</ol>`
		},
		{
			read_status: 'Disabled',
			title:`Programming using DEBUG`,
			content:`<b> PROGRAMMING USING DEBUG </b>
			<ul>
				<li> Displaying character (uppercase 'A') on screen. 
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Displaying character (lowercase 'b') twice on screen. 
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Using control characters (0A - Line feed and 0D - Carriage Return) in a screen display. 
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Displaying the same character (lowercase 'z') thirty times using LOOP on screen. 
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Displaying different characters ('A' to Z) using LOOP on the same line. 
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Displaying different characters ('0' to '9') using LOOP vertically. 
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Displaying different character ('0' to '9') using LOOPs with seperator (underscore) horizontally.
				<center><img src=" .png" alt="insert image"></center></li><br/>
				<li> Displaying string ('computer') on screen.<br/>
					STEP 1: &nbsp;&nbsp; Code the instruction at -A 0100
				<center><img src=" .png" alt="insert image"></center></li><br/>
					STEP 2: &nbsp;&nbsp; Code the instruction at -A 0100
				<center><img src=" .png" alt="insert image"></center><br/>
					STEP 3: &nbsp;&nbsp; Press <ENTER> key to go back to the hyphen prompt, then key in -D 0200 and press <ENTER> key to display the string
				<center><img src=" .png" alt="insert image"></center><br/>`
		},
	]
};