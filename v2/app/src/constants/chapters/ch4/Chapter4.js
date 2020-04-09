export const CHAPTER4 = {
	chapterId: 64,
	read_status: 'Disabled',
	title: 'Chapter IV',
	description: `<h1 align = center>CHAPTER 4</h1>
				<h2 align = center>BASIC FEATURE OF MICROPROCESSOR</h2>`,
	objectives: [
		`Discuss the different topics covered herein.`,
		`Calculate the different data items measured in bits, bytes, and related units.`,
		`Recognized the relevance of the features of microcomputer in day to day living`
	],
	sub: [

		{
			chapterId: 65,
			read_status: 'Disabled',
			title: 'Bits, Bytes, Related Bytes',
			content: `<b> BIT </b>
			<style>
			table, th, td {
  				border: 1px solid black;
  				border-collapse: collapse;
  				padding: 5px 5px 5px 5px;
  				text-align: center;
  				margin-left:auto;
  				margin-right:auto;
  			}
  			</style>
			<p style="text-indent:3em"> The fundamental of building block of the computer storage is the bit. It is a contraction of the compound word "binary digit". A bit can be equal to zero (0) which means off state or it can be equal to one (1) which is considered on state. A single bit doesn't provide much information, but it is surprising what a bunch of them can do. A binary number like 1100 has four (4) bits: 101010 has six (6) bits; and 10010110 has eight (8) bits. </p>
			<p style="text-indent:3em;"> The figure below shows four (4) light-emitting diodes (LEDs). A colored circle means that the LED is on; and the uncolored circle means it is off.</p>
			<span style="font-size:60px; margin-left:48%; margin-top=3em;">&#9679;&#9675;&#9679;&#9675;</span>
			<table>
				<tr>
					<th>LED</th>
					<th> BINARY VALUE </th>
				</tr>
				<tr>
					<td> On </td>
					<td> 1 </td>
				<tr>
				<tr>
					<td> Off </td>
					<td> 0 </td>
				</tr>
			<table><br/>
			<p style="text-indent:3em;"> The above figure shows on-off-on-off. This indicate the LED displays stands for binary number 1010s </p>
			
			<b> BYTES </b>
			<p style = "text-indent: 3em;"> Each group of eight (8) related bits is called a byte. It is the basic unit of binary information. Most Computers process data with a length of eight (8) bits or some multiple of eight (8) bits. </p>

			<b> RELATED BYTES </b>
			<p style = "text-indent: 3em;"> There are also some groupings as you can see in the table below. Of these terms, most common are "byte" and "word". A program can treat a group of one or more related bytes as unit of data. A group of bytes that defines a particular value is commonly kbown as a <b><i>data item.</b></i> </p>

			<table>
				<tr>
					<th> TERM </th>
					<th> MEANING </th>
				</tr>
				<tr>
					<td> Nibble </td>
					<td> Half of a byte </td>
				</tr>
				<tr>
					<td> Byte</td>
					<td> Group of eight (8) bits </td>
				</tr>
				<tr>
					<td> Word </td>
					<td> A 2-byte (16-bit) data item </td>
				</tr>
				<tr>
					<td> Doubleword </td>
					<td> A 4-byte (32-bit) data item </td>
				</tr>
				<tr>
					<td> Quadword </td>
					<td> An 8-byte (64 bit) data item </td>
				</tr>
				<tr>
					<td> Paragraph </td>
					<td> An 8-byte (64 bit) data item </td>
				</tr>
				<tr>
					<td> Kilobyte(KB) </td>
					<td> Equivalent to 1,024 bytes (2<sup>10</sup>) </td>
				</tr>
				<tr>
					<td> Megabyte(MB) </td>
					<td> Equivalent to 1,0248,576 bytes (2<sup>20</sup>) </td>
				</tr>
			`,
		},
		{
			chapterId: 66,
			title: `Negative Numbers`,
			content:`<b> NEGATIVE NUMBERS </b>
			<p style = "text-indent: 3em;"> A signed binary digit is considered positive if the leftmost bit is always equal to zero (0). For all negative numbers, the leftmost bit is always equal to one (1).</p>
			<pre style="font-family:arial">
Example:  +35<sub>10</sub>   = 0010 0011<sup>2</sup>
		-3510<sub>10</sub> = 1101 1101<sup>2</sup> </pre>
		<br/>
			<p style = "text-indent: 3em;"> However, representing a binary number as negative is not as simple as setting the leftmost bit to 1. Instead, it is expressed in two's complement notation. </p>
		</pre>`,
		},
		{
			chapterId: 67,
			title: `Two's Complement Notation`,
			content:`<b> TWO'S COMPLEMENT NOTATION </b>
			<style>
			hr {
				width: 17%;
				border: .8px solid black;
				margin-top: .5em;
				margin-left: 25%;
				margin-bottom: .5em;

			}
			table, th, td {
  				border: 1.5px solid black;
  				border-collapse: collapse;
  				padding: 2px 70px 2px 70px;
  				text-align: center;
  				margin-left:auto;
  				margin-right:auto;
  			}
			</style>
			<p style = "text-indent: 3em;"> It is rule to represent a binary number as negative. Here are the steps to find the 2's complement of a positive number. </p>
			<pre style="font-family:arial">
Example:   Obtain the value of -58 (base 10) in binary form
Step 1:    Get the absolute value of -58 (i.e. 58) and convert it to its equivalent bits.
	     58  =  0011 1010
Step 2:    Reverse the bits by changing all 0's to 1's and all 1's to 0's.
	     58		    =    0011 1010
	     Reverse Bits   =    1100 0101
	     58		    =    0011 0101
	     Reverse bits   =    1100 0101
	     				   +		 1
<hr>					  1100 0110 
	     Therefore,   -58<sub>10</sub>  =  1100 0110 				 
</pre>
		<p style = "text-indent: 3em;"> You can observe a pattern form as decimal and binary number decrease in value . Dont be confused! Keep in mind that the microprocessor knows when a number is negative or not. </p>
		
		<table>
			<tr>
				<th> DECIMAL </th>
				<th> BINARY </th>
			</tr>
			<tr>
				<td> ... and so on </td>
				<td> ... and so on </td>
			</tr>
			<tr>
				<td> +5 </td>
				<td> 0 0 0 0 &nbsp; 0 1 0 1 </td>
			</tr>
			<tr>
				<td> +4 </td>
				<td> 0 0 0 0 &nbsp; 0 1 0 0 </td>
			</tr>
			<tr>
				<td> +3 </td>
				<td> 0 0 0 0 &nbsp; 0 0 1 1 </td>
			</tr>
			<tr>
				<td> +2 </td>
				<td> 0 0 0 0 &nbsp; 0 0 1 0 </td>
			</tr>
			<tr>
				<td> +1 </td>
				<td> 0 0 0 0 &nbsp; 0 0 0 1 </td>
			</tr>
			<tr>
				<td> 0 </td>
				<td> 0 0 0 0 &nbsp; 0 0 0 0  </td>
			</tr>
			<tr>
				<td> -1 </td>
				<td> 1 1 1 1 &nbsp; 1 1 1 1 </td>
			</tr>
			<tr>
				<td> -2 </td>
				<td> 1 1 1 1 &nbsp; 1 1 1 0 </td>
			</tr>
			<tr>
				<td> -3 </td>
				<td> 1 1 1 1 &nbsp; 1 1 0 1 </td>
			</tr>
			<tr>
				<td> -4 </td>
				<td> 1 1 1 1 &nbsp; 1 1 0 0 </td>
			</tr>
			<tr>
				<td> -5 </td>
				<td> 1 1 1 1 &nbsp; 1 0 1 1 </td>
			</tr>
			<tr>
				<td> ... and so on </td>
				<td> ... and so on </td>
			</tr>
		</table>`,
		},
		{
			chapterId: 68,
			title:`How Characters are Stored`,
			content:`<b>HOW CHARACTERS ARE STORED</b>
			<p style = "text-indent: 3em;"> If computer memory can hold only long sequence of 0's and 1's. How meaningful information stored? There are several ways. Text which is information consisting of characters is represented by a code. As you know, each byte contains 8 bits and each of these bits can be a 0 or a 1; there are 2^8 or 256 different possibilities. These 256 patterns are used to form a code. One pattern stands for one symbol. </p>
			<p style = "text-indent: 3em;"> For example, the pattern for the uppercase letter A is 0100 0001. The set of patterns along with the characters they stand for is called the <b>American Standard Code for Information Interchange</b>, or simply ASCII (pronounced ask-ee). Characters are stored in 8-bit patterns given for each character in the ASCII table. Thus, if you want to decode a long string of bits, all you have to do is divide the bits into bytes and look up each patterns in the ASCII reference table. </p>`,
		},
		{
			chapterId: 69,
			title:` ASCII `,
			content: `<b>ASCII</b>
			<p style = "text-indent: 3em;"> To get information in and out of a computer, we need to use numbers, letters and other symbols. This implies some kind of alphanumeric code I/O unit of a computer. At one time, every manufacturer has a different code which led to all kinds of confusion. Eventually, industry settled on an I/O code known as the American Standard Code for Information Interchange. This code allows computer manufacturers to standardize I/O  hardware such as keyboards, printers, monitors, and other devices. The 8-bit ASCII that the computer uses provides 256 characters including symbols for foreign alphabets. In particular, the uppercase letters are distinguished from the lowercase letters.</p>
			<p> For example, Uppercase "A" = 0100 0001, while lowercase "a" = 0110 0001 </p>
		`,
		},
		{
			chapterId: 70,
			title:` Microprocessor, Microcomputer Architecture `,
			content: `<b> MICROPROCESSOR </b>
			<p style = "text-indent: 3em;"> The heart and brain of the computer is the microprocessor (or simply processor) based on Intel 8086 family that performs all the execution of instruction and processing of data that is entirely contained on a single silicon chips. Microprocessor vary in speed, capacity of memory, registers and data bus. </p>
			<b> MICROCOMPUTER </b>
			<p style = "text-indent: 3em;"> It can be called as the Personal Computer (PC), single chip processor or system on a chip. Microcomputer is a digital computer system that uses a microprocessor  as its Central Processing Unit (CPU). Desktop computers, laptop computers, video game consoled and many types of handheld devices are all examples of microcomputers. </p>
		
		<style>
			table, td, th {
				text-align: center;
			}
		</style>
		<table width=98%>
			<tr>
			<td colspan="9" style="border: 2px solid black;"> ADDRESS BUS </td>
			</tr>
			<tr>
				<td style="width:17%">&#8597;</td>
				<td> </td>
				<td style="width:17%">&#8597;</td>
				<td> </td>
				<td style="width:17%">&#8597;</td>
				<td> </td>
				<td style="width:17%">&#8597;</td>
				<td> </td>
				<td style="width:17%">&#8597;</td>
			</tr>
			<tr>
			<td style="border: 2px solid black; padding: 55px 0px 55px 0px">INPUT</td>
			<td>&#8596</td>
			<td style="border: 2px solid black">MEMORY </td>
			<td>&#8596</td>
			<td style="border: 2px solid black">BUS INTERFACE</td>
			<td>&#8596</td>
			<td style="border: 2px solid black">EXECUTION UNIT </td>
			<td>&#8596</td>
			<td style="border: 2px solid black"> OUTPUT </td>
			</tr>
			<tr>
				<td>&#8597;</td>
				<td> </td>
				<td>&#8597;</td>
				<td> </td>
				<td>&#8597;</td>
				<td> </td>
				<td>&#8597;</td>
				<td> </td>
				<td>&#8597;</td>
			</tr>
			<tr>
			<td colspan="9" style="border: 2px solid black"> DATA BUS </td>
			</tr>
		</table>
		
		<iframe width="560" height="315" src="https://www.youtube.com/embed/aj8gdnUjWD8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`,
		},
		{
			chapterId: 71,
			title: `Brief Description of Different Intel Microprocessor`,
			content: `<b>BRIEF DESCRIPTION OF DIFFERENT INTEL MICROPROCESSOR</b>
			<br/>
			<br/>
			<style>
			table, td {
				text-align: left;
				border-collapse: collapse;
				border: 1px solid black;
				font-family: comic sans ms;
				font-size: 15px;
				padding: 0px 5px 0px 5px;
				vertical-align: top;
			}
			</style>

			<table width=99%>
				<tr>
					<td>  </td>
					<td> 8088 </td>
					<td> 80188 </td>
					<td> 8086 </td>
					<td> 80186 </td>
					<td> 80286 </td>
					<td> 80386 </td>
					<td> 80386SX </td>
					<td> 80486 </td>
				</tr>
				<tr>
					<td> Witdth of Data Bus  </td>
					<td> 8-bit </td>
					<td> 8-bit </td>
					<td> 16-bit </td>
					<td> 16-bit </td>
					<td> 16-bit </td>
					<td> 32-bit </td>
					<td> 16-bit </td>
					<td> 32-bit </td>
				</tr>
				<tr>
					<td> Width of Address Bus </td>
					<td> 20-bit </td>
					<td> 20-bit </td>
					<td> 20-bit </td>
					<td> 20-bit </td>
					<td> 24-bit </td>
					<td> 32-bit </td>
					<td> 32-bit </td>
					<td> 32-bit </td>
				</tr>
				<tr>
					<td> Maximum Clock Rate </td>
					<td> 5 MHZ </td>
					<td> 8 MHZ </td>
					<td> 5 MHZ </td>
					<td> 5 MHZ </td>
					<td> 10 MHZ </td>
					<td> 16 MHZ </td>
					<td> 16 MHZ </td>
					<td> 16 MHZ </td>
				</tr>
				<tr>
					<td> </td>
					<td> It has 16-bit register that process 2-bytes at a time. It can address up to 1 million bytes if internal memory. The data bus can transfer 1 byte aat a time. </td>
					<td><p> The enhanced version of 8088 with a few additional insturctions.</p>
						<p>It can run in real mode that is one program at a time. </p></td>
					<td> Similar to 8088/80188 but higher in performance and can run faster. </td>
					<td><p>The tune up to 8086 with a few additional insturctions.</p>
						<p>It can run all 8086 and 8088 software.<p></td>
					<td><p> It runs faster than the preceding processors. It can address up to 16 million bytes of internal memory.</p>
						<p>It can operate in real or protected mode. It has special insturctions to enable multitasking. It uses virtual memory. </p></td>
					<td> It has 32-bit registers. It can address up to 4 billion bytes of internal memory. Like 80286 it can operate in real or protected mode for multitasking. </td>
					<td> Functionally identical to 80386 but lower in performance. </td>
					<td> It acts like a super fast 80386 chip. Floating point arithmetic operations are built-in called math coprocessors. </td>
				</tr>
			</table>
			<br/>
			<p style="text-indent: 3em;"> Information is sent from one main component to another along the communication channel which is often called <b>system bus</b>. The system bus is made up of three separate buses: the <b>data bus</b>, the <b>address bus</b> and the <b>control bus</b>. Data items to be stored in memory or which are retreived from memory to be used in calculations are sent along the <b>data bus</b>. The address on which that data item is to be retreived is sent along the <b>adress bus</b>.</p>
			<p style="text-indent: 3em;"> All activity within the microcomputer including the storage and retreival of data items is initiated by the microprocessor but managed by the <b>control bus</b>. It is the responsibility of the control bus. For example, to switch the direction of travel on the data bus depending on whether a data item is to be stored or retreived from the memory.<p>
			<p style="text-indent: 3em;">Both programs and data are stored in the memory, the <b>bus interface unit</b> within the microprocessor fetching new instructions or data as necessary. It is also the BIU's job to interpret or decode instructions and to route results to their proper destinations. The microprocessors execution unit carries out any arithmetic which is required, including memory address calculations. </p>
			`,
		},
		{
			chapterId: 72,
			title:`Registers`,
			content: `<b>REGISTERS</b>
			<p style="text-indent: 3em;" > The processors registers are used to control instructions being executed to handle addressing of memory and to provide arithmetic capability. The 80386 contains a total of sixteen registers that are of interest to to the application programmer. These registers may be grouped into these basic categories:
			<br/>
			<br/>
			<style>
			table, td{
				text-align:left;
				vertical-align:top;
				padding: 5px 5px 5px 15px;
			}
			</style>
			<table width=99%>
				<tr>
					<td width=35%> General registers </td>
					<td><p align="justify"> The eigtht general-purpose registers are used primarily to contain operands for arithmetic operations. </p></td>
				</tr>
				<tr>
					<td> Segment registers  </td>
					<td><p align="justify"> These special-purpose registers permit systems software designers to choose either flat or segmented model of memory organization. These six registers determine, at any given time, which segments of memory are currently addressable. </p></td>
				</tr>
				<tr>
					<td> Status and instruction registers </td>
					<td><p align="justify"> These special purpose registers are used to record and alter certain aspects of the 80386 processors state. </p></td>
				</tr>
			</table>
	
			<iframe width="560" height="315" src="https://www.youtube.com/embed/EAhDfRJ0miM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`,
		},
		{
			chapterId: 73,
			title:`General-Purpose Registers`,
			content:`<b> GENERAL-PURPOSE REGISTERS </b>
			<style>
			table, td{
				text-align:center;
				width: 50%;
				border-collapse:collapse;
				border: 1px solid black;
				margin-left:auto;
  				margin-right:auto;

			}
			</style>
			<br/>
			<p style="text-indent:3em"> The 16-bit regi BX, CX, and DX has a separate name and can be treated as a unit. This feature is useful for handling characters and other 80bit data items. The byte registers are named AH, BH CH, and DH (high bytes); Likewise,they are uniques in that you can address them as one-word or as a one byte portion. The leftmost byte is the "high-byte" portion and the rightmost byte is "low-byte" portion. </p>
			<p style="text-indent:3em"> All of the general-purpose registers are available for addressing calculations and for the results of the most arithmetic and logical calculations; however, a few functions are dedicated to certain registers. By implicitly choosing registers for these functions, the 80386 architecture can encode instructions more compactly. The instruction that use specific regiters include: double-precision multiply and divide, I/O, string instructions, translate, loop, variable shift and rotate, and stack operations. </p>

			<p style="text-indent:2em"><b> AX REGISTER </b></p>
			<p style="margin-left:4em">Sometimes called as the <b>ACCUMULATOR</b>, this is used in input, output and arithmetic operations.<br/>
				Example:
			<table>
				<tr>
					<td colspan="2"> AX = 8035h </td>
				</tr>
				<tr>
					<td> AH = 80h </td>
					<td> AH = 80h </td>
				</tr>
			</table>
			</p>
			<br/>
			<p style="text-indent:2em"><b> BX REGISTER </b></p>
			<p style="margin-left:4em"> This is known as the <b>BASE REGISTER</b>, since it is the only general-purpose register that can be used as an index to extend addressing. It is also used for computations. <br/>
				Example:
			<table>
				<tr>
					<td colspan="2"> BX = 0C05h </td>
				</tr>
				<tr>
					<td> BH = 0C05h </td>
					<td> BL = 05h </td>
				</tr>
			</table>
			</p>
			<br/>
			<p style="text-indent:2em"><b> CX REGISTER </b></p>
			<p style="margin-left:4em"> It is referred to as the <b>COUNTER REGISTER</b>. This is used with the certain instruction that perform operations repeatedly. It may contain a value to control the number of timer a loop is repeated. It can be used for computations. <br/>
				Example:
			<table>
				<tr>
					<td colspan="2"> CX = B1F2h </td>
				</tr>
				<tr>
					<td> CH = B1h </td>
					<td> CL = F2h </td>
				</tr>
			</table>
			</p>
			<br/>
			<p style="text-indent:2em"><b> DX REGISTER </b></p>
			<p style="margin-left:4em"> It is known as the <b>DATA REGISTER</b> because it is used to hold data for any purposes. Some input/output operations and multiply/divide operations that involve large values requies its use. <br/>
				Example:
			<table>
				<tr>
					<td colspan="2"> DX = 0BEAh </td>
				</tr>
				<tr>
					<td> DH = 08h </td>
					<td> DL = EAh </td>
				</tr>
			</table>
			</p>`,
		},
		{
			chapterId: 74,
			title: `Stack Pointer Register`,
			content: `<b>STACK POINTER REGISTER</b>
			<br/>
			<br/>
			<p style="text-indent:2em"><b> SP REGISTER </b></p>
			<p style="margin-left:4em"> <b>STACK POINTER</b> is a 16-bit register pointing to program stack. This register provides an offset value which when associated with the SS Registe, refers to the current word being processed in the stack. The stack is maintained as a LIFO with its bottom at the start of the stack segment (specified by the SS segment register). Unlike the SP register, the BP can be used to specify the offset of other programs segments. <br/>

			<p style="text-indent:2em"><b> BP REGISTER </b></p>
			<p style="margin-left:4em">This 16-bit <b>BASE POINTER</b> register facilitates referencing parameters, which are the data, and address that a program passes through the stack. IT is a 16-bit register pointing to the data in stack segment. It is usually used by subroutines to locate variables that were passed on the stack by a calling program. BP register is usually used for based, based indexed or register indirect addressing. <br/>

			<p style="text-indent:2em"><b> SI REGISTER </b></p>
			<p style="margin-left:4em"> The 16-bit <b>SOURCE INDEX</b> register is required for some string operations. It is associated with the DS register. SI is used for indexed, based indexed and register indirect addressing, as well as a source data address in string manipulation instructions. Used in conjunction with the DS register to point the data locations in the data segment. <br/>

			<p style="text-indent:2em"><b> DI REGISTER </b></p>
			<p style="margin-left:4em"> The 16-bit <b>DESTINATION INDEX</b>	register is also required for some string operations and is associated with the ES register.It is used in conjunction with the ES register in string operation. DI is used for indexed, based indexed and register indirect addressing, as well as a destination data addresses in string manipulation instruction, In short, Destination Index and SI Source Index registers are used to hold address. <br/>
			`,
		},
		{
			chapterId: 75,
			title: `Segment Register`,
			content: `<b>SEGMENT REGISTER</b>
			<br/>
			<p style="text-indent:3em"> These are registers that provide for addressing an are of memory known as the current segment. At any giver instant, six segments of memory may immediately accessible to an executing 80386 program. The segment registers <b>CS, DS, SS, ES, FS,</b> and <b>GS</b> are used to identify these six current segments. Each of these registers specifies a particular kind of segment, as characterized by the associated mnemonics ("code", "data", or "stack"). Each register uniquely determines one particular segmen, from among the segments that make up the program that is to be immediately accesible at highest speed. <br/>

			<p style="text-indent:2em"><b> CS REGISTER </b></p>
			<p style="margin-left:4em"> <b>CODE SEGMENT REGISTER</b> contains the starting address of a programs segments. This segment address plus an offset value in the IP register indicates the address of an instruction to be fetched for execution. <br/>

			<p style="text-indent:2em"><b> DS REGISTER </b></p>
			<p style="margin-left:4em"> <b>DATA SEGMENT REGISTER</b> contains the starting address of a programs data segment. Instructions use this address to locate data. <br/>

			<p style="text-indent:2em"><b> ES REGISTER </b></p>
			<p style="margin-left:4em"> <b>EXTRA SEGMENT REGISTER</b> is used by some string operations to handle memory addressing. It is associated with DI register. A program that requires the use of may initialize it with an appropriate segment address. <br/>

			<p style="text-indent:2em"><b> SS REGISTER </b></p>
			<p style="margin-left:4em"> <b>STACK SEGMENT REGISTER</b> permits the implementations of a stack in memory that a program uses for temporary storage address of a program stack segment in the SS register. <br/>

			<p style="text-indent:2em"><b> IP REGISTER </b></p>
			<p style="margin-left:4em"> The instruction pointer register (IP) contains the offset address, relative to the start of the current code segment, of the next sequential instruction to be executed. The instruction pointer is not directly visible to the programmer; it is controlled implicitly by control-transfer instructions, interrupts, and exceptions. It is associated with the CS register in that IP indicates the current instruction within the currently executing code segment. <br/>

			`,
		},
		{
			chapterId: 76,
			title: `Flag Register`,
			content: `<b>FLAG REGISTER</b>
			<br/>
			<p style="text-indent:3em"> These are special registers that indicate the present status of the computer and the result of processing. Many instructions involving comparisons and arithmetic change the status of the flags, which some instructions may test to determine subsequent action.<br/>
			<p style="text-indent:3em"> The 32-bit flags register is named EFLAGS. The flags control certain operations and indicate the status of the 80386. The flags may be considered in three groups: the status flags, control flags, and systems flags.<br/>
			<p style="text-indent:3em"> The status flags of the FLAGS register allow the result of one instruction to influence later instructions. The arithmetic instructions use OF, SF, ZF, AF, PF, and CF. The SCAS (Scan String), CMPS (Compare String), and LOOP instructions use ZF to signal that their operations are complete. There are instructions to set, clear, and complement CF before execution of an arithmetic instruction.<br/>

			<p style="text-indent:2em"><b> OVERLFLOW FLAG (OF) </b></p>
			<p style="margin-left:4em"> It indicates that the result of an operation is too long to be stored in the destination operand.
			<br/>OV is displayed if there is an OVERFLOW; otherwise NV is displayed for NO OVERFLOW.<br/>
			Sample Code that will change the status of the overflow flag :<br/>
			<pre style="font-family:comic sans ms">
				MOV AL, 04
				ADD AL, 7F
				INT 20
			</pre>

			<p style="text-indent:2em"><b> DIRECTION FLAG (DF) </b></p>
			<p style="margin-left:4em"> It is used in string operations to determine the direction of the data transfer. UP is displayed for UPWARD direction; otherwise DN is displayed for DOWNWARD direction. <br/>

			<p style="text-indent:2em"><b> SIGN FLAG (SF) </b></p>
			<p style="margin-left:4em"> It indicated that the result of an operation is positive or negative. PL is displayed for PLUS; otherwise NG for NEGATIVE.<br/>
				Sample code that will change the status of the sign flag : <br/>
			<pre style="font-family:comic sans ms">
				MOV AL, 03
				SUB AL, 08
				INT 20
			</pre>

			<p style="text-indent:2em"><b> ZERO FLAG (ZF) </b></p>
			<p style="margin-left:4em"> It indicates whether an operation produced a zero result.
			<br/>ZR is displayed for ZERO; otherwise NZ for NON ZERO.
			<br/>Sample code that will change the status of the zero flag : <br/>
			<pre style="font-family:comic sans ms">
				MOV AX, 0008
				SUB AL, 0008
				INT 200
			</pre>

			<p style="text-indent:2em"><b> AUXILLARY CARRY FLAG (AF) </b></p>
			<p style="margin-left:4em"> It indicates whether an operations produced a zero result.
			<br/>ZR is displayed for ZERO; otherwise NZ for NON ZERO.
			<br/>Sample code that will change the status of the zero flag : <br/>
			<pre style="font-family:comic sans ms">
				MOV AX, 0008
				SUB AL, 0008
				INT 20
			</pre>

			<p style="text-indent:2em"><b> PARITY FLAG (PF) </b></p>
			<p style="margin-left:4em"> It indicates whether the result of an operation contains an even number or odd number of 1s.
			<br/>PE is displayed for PARITY EVEN; otherwise PO for PARITY ODD.
			<br/>Sample Code that will change the status of the parity flag : <br/>
			<pre style="font-family:comic sans ms">
				MOV AL, 08
				MOV AL, 02
				INT 20
			</pre>

			<p style="text-indent:2em"><b> CARRY FLAG (CF) </b></p>
			<p style="margin-left:4em"> It indicates whether the instructions produced a value that can be too big (or too small) to be held in the specified register or memory location.
			<br/> CY is displayed for CARRY; otherwise NC for NO CARRY.
			<br/> Sample code that will change the status of the parity flag : <br/>
			<pre style="font-family:comic sans ms">
				MOV AL, FF
				SUB AL, 01
				INT 20
			</pre>
			`,
		},
		{
			chapterId: 77,
			title: `Lecture Exercise 1`,
			content: `
			<b>LECTURE EXERCISE 1</b>
			<br/>
			<br/>
			<p>I. Determine the length of the following data items or terms of bytes. Write you answer on the space provided.</p>
			<ol>
				<li> Nibble – </li>
				<li> Quadword – </li>
				<li> Paragraph – </li>
				<li> Word – </li>
				<li>Kilobyte – </li>
				<li> Megabyte – </li>
				<li> Gigabyte – </li>
				<li> Terabyte – </li>
			</ol>
 
			<p>II. Convert the following negative decimal number into its equivalent bits. Show your solutions and box your final answer.</p>
			<ol>
				<li> -75 </li>
				<li> -50 </li>
				<li> -36 </li>
				<li> -18 </li>
				<li> -90 </li>
				<li> -188 </li>
				<li> -234 </li>
			</ol>

			<style>
				ol {
					margin: 20px 50px;
				}
			</style>

			`
		},
		{
			chapterId: 78,
			title: `Lecture Exercise 2`,
			content: `
			<b>LECTURE EXERCISE 2</b>
			<br/>
			<br/>

			<p>I. Using ASCII reference table, translate the following strings as sequence of hex codes. Write your answer on the boxes provided below each item.</p>
			<ol>
				<li> MICROPROCESSOR
				<table>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>																					
				</li>

				<li> \& nbsp
				<table>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>																																											
				</li>
				
				<li> Inspiron MINI
				<table>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>																					
				</li>																			
				
				<li> 04G26B0004
				<table>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>																					
				</li>																			
				
				<li> CEIT – 15 – 301A
				<table>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>																					
				</li>
			</ol>
																									
			<style>
				table {
					margin: 20px 0px;
					width: 100%;
				}
				td {
					height: 40px;
					border: 1px solid black;
				}
				ol {
					margin: 20px 50px;
				}
				</style>
			`
		},
		{
			chapterId: 79,
			title: `Laboratory Exercise 1`,
			content: `
			<b>LABORATORY EXERCISE 1</b>
			<br/>
			<br/>

			<p> I. Determine the contents of AX, BX, CX, and DX after executing every sequence of assembly language instruction. Write your answer on the space provided.</p>

			A.
			<table>
				<tr>
					<th> INSTRUCTION </th>
					<th> AX </th>
					<th> BX </th>
					<th> CX </th>
					<th> DX </th>
				</tr>
				<tr>
					<td> MOV AX, 50C0h </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MOV BX, 38FEh </td>			
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MOV CX, 0002h </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MUL CH	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> SUB AX, BX </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> ADD AL, BL	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> ADD DL, CL	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
			</table>
			
			B.
			<table>
				<tr>
					<th> INSTRUCTION </th>
					<th> AX </th>
					<th> BX </th>
					<th> CX </th>
					<th> DX </th>
				</tr>
				<tr>
					<td> MOV AX, 0002h </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MUL AX </td>			
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MUL AX </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MOV BX, 0003h </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> ADD AX, BX </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> ADD DX, CX	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MUL CX </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
			</table>
			<style>
				table {
					width: 100%;
					margin-bottom: 50px;
				}
				th, td {
					border: 1px solid black;
					height: 20px;
					padding: 5px;
				}
			</style>
			`
		},
		{
			chapterId: 80,
			title: `Laboratory Exercise 2`,
			content: `
			<b>LABORATORY EXERCISE 2</b>
			<br/>
			<br/>

			<p> I. Using your assigned computer unit in the laboratory, find out what flag register is affected when the following instructions are executed by checking the appropriate box and writing what status of the flag was shown on the screen. Write it on the space provided beside the box.</p>
			<table>
				<tr>
					<th> INSTRUCTION </th>
					<th> OF </th>
					<th> DF </th>
					<th> IF </th>
					<th> SF </th>
					<th> ZF </th>
					<th> AF </th>
					<th> PF </th>
					<th> CF </th>
				</tr>
				<tr>
					<td> MOV CL, 03	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> ADD CL,02 </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> SUB CL, 05	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> SUB CL, 02	</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MOV DH, 02 </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> ADD DH, 0FF </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MOV AL, 04 </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> MOV AL, 7F </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
			</table>
			
			<style>
				table {
					margin: 20px 0px;
					width: 100%
				}
				th, td {
					border: 1px solid black;
					height: 20px;
					padding: 5px;				
				}
			</style>		

			`
		},
	]
}; //padouble check na lang kung tama content. Tinamad na ako ireview e. Haha