export const CHAPTER1 = {
	chapterId: 1,
	read_status: 'In Progress',
	title: `Chapter I`,
	description: `<h1 align = center>CHAPTER 1</h1>
				<h2 align = center>NUMBER SYSTEMS REVISITED</h2>`,
	objectives: [
		`Identify the number system and its different bases used in this course.`,
		`Develop good computational skills in different number systems conversions.`,
		`Appreciate the importance of number systems in relation to computers and its applications.`
	],
	sub: [
		{
			chapterId: 2,
			read_status: 'Disabled',
			title: 'Number System',
			content: `
			<b>NUMBER SYSTEM</b>
			<br>
			<br>
			<p>It is a way of counting things and identifying the quantity of something. Likewise, number system refers to the set of symbols used to express quantities as the basis for counting, determining order, comparing amounts, performing calculations, and representing value. It is the set of characters and mathematical rules that are used to represent a digit. Examples include the Arabic, Babylonian, Chinese, Egyptian, Greek, Mayan, and Roman number systems. The ISBN and Dewey Decimal System are examples of number systems used in libraries. Even Social Security System has a number system of its own.</p>

			<iframe width="560" height="315" src="https://www.youtube.com/embed/crSGS1uBSNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			`,
		},
		{
			chapterId: 3,
			read_status: 'Disabled',
			title: `Base`,
			content: `
			<b>BASE</b>
			<br>
			<br>
			<p>It is also called as the <span class=\"bold italic\">radix</span>. Base refers to the number of digits (basic symbols) in a number system. A subcript attached to a number indicates the base radix of that number. 100 (base 2) means 100 (read as one-zero-one), on the other hand, 100 (base 10) means decimal 100 (read as one hundred) subscripts help classify equations where different number systems are combined.</p>`
		},
		{
			chapterId: 4,
			read_status: 'Disabled',
			title: `Common Used Bases of Number Systems in Assembly Language`,
			content: `
			<b>COMMON USED BASES OF NUMBER SYSTEMS IN ASSEMBLY LANGUAGE</b>
			<br>
			<br>

			`,
			sub: [
				{
					chapterId: 5,
					read_status: 'Disabled',
					title: `Decimal Number System`,
					content: `
					<b>DECIMAL NUMBER SYSTEM</b>
					<br>
					<br>

					<p>The term decimal comes from <span class=\"latin italic\">\"decem\"</span>  the Latin word for ten. That's why it is a number system with base of ten (10). The decimal system is also called the Hindu-Arabic System and was developed by Hindu Mathematicians in India more than 2,000 years ago. It consists of ten digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.</p>

					<table style="width:50%">
						<tr>
							<td> Example of decimal numbers:</td>
							<td> 25<sub>10</sub> </td>
						</tr>
						<tr>
							<td></td>
							<td> 890<sub>10</sub> </td>
						</tr>
					</table>
					`
				},
				{
					chapterId: 6,
					read_status: 'Disabled',
					title: `Binary Number System`,
					content: `
					<b>BINARY NUMBER SYSTEM</b>
					<br>
					<br>

					<p>The term binary comes from the Latin word <span class=\"latin italic\">\"bi\"</span> meaning two at a time. That's why it is a number system with a base of two (2). It consists of two digits: 0 and 1.</p>

					<table style="width:50%">
						<tr>
							<td> Example of binary numbers:</td>
							<td> 101<sub>2</sub> </td>
						</tr>
						<tr>
							<td></td>
							<td> 111000<sub>2</sub> </td>
						</tr>
					</table>
					`
				},
				{
					chapterId: 7,
					read_status: 'Disabled',
					title: `Hexadecimal Number System`,
					content: `
					<b>HEXADECIMAL NUMBER SYSTEM</b>
					<br>
					<br>

					<p>The term hexadecimal comes from the Greek word <span class=\"greek italic\">\"Hexa\"</span> meaning six and Latin word <span class=\"latin italic\">\"decem\"</span> meaning ten, That's why it is a number system with a base of sixteen (16). It consists of sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. A, B, C, D, E, and F stands for 10, 11, 12, 13, 14, and 15 respectively.</p>

					<table style="width:50%">
						<tr>
							<td> Example of hexadecimal numbers:</td>
							<td> BEA<sub>16</sub> </td>
						</tr>
						<tr>
							<td></td>
							<td> 8C0<sub>16</sub> </td>
						</tr>
					</table>

					`
				}
			]
		},
		{
			chapterId: 8,
			read_status: 'Disabled',
			title: `Equivalences`,
			content: `
			<b>EQUIVALENCES</b>
			<br>
			<br>

			<p>The table below shows the equivalences between decimal, binary and hexadecimal digits.</p>


			<table>
			<tr>
			  <td><b>Decimal</b></td>
			  <td><b>Binary</b></td>
			  <td><b>Hexadecimal</b></td>
			</tr>
			  <tr>
				<td>0</td><td>0000 0000</td><td>00</td>
			  </tr>
			  <tr>
				<td>1</td><td>0000 0001</td><td>01</td>
			  </tr>
			  <tr>
				<td>2</td><td>0000 0010</td><td>02</td>
			  </tr>
			  <tr>
				<td>3</td><td>0000 0011</td><td>03</td>
			  </tr>
			  <tr>
				<td>4</td><td>0000 0100</td><td>04</td>
			  </tr>
			  <tr>
				<td>5</td><td>0000 0101</td><td>05</td>
			  </tr>
			  <tr>
				<td>6</td><td>0000 0110</td><td>06</td>
			  </tr>
			  <tr>
				<td>7</td><td>0000 0111</td><td>07</td>
			  </tr>
			  <tr>
				<td>8</td><td>0000 1000</td><td>08</td>
			  </tr>
			  <tr>
				<td>9</td><td>0000 1001</td><td>09</td>
			  </tr>
			  <tr>
				<td>10</td><td>0000 1010</td><td>0A</td>
			  </tr>
			  <tr>
				<td>11</td><td>0000 1001</td><td>0B</td>
			  </tr>
			  <tr>
				<td>12</td><td>0000 1010</td><td>0C</td>
			  </tr>
			  <tr>
				<td>13</td><td>0000 1011</td><td>0D</td>
			  </tr>
			  <tr>
				<td>14</td><td>0000 1100</td><td>0E</td>
			  </tr>
			  <tr>
				<td>15</td><td>0000 1101</td><td>0F</td>
			  </tr>
			  <tr>
				<td>16</td><td>0001 0000</td><td>10</td>
			  </tr>
			  <tr>
				<td>17</td><td>0001 0001</td><td>11</td>
			  </tr>
			  <tr>
				<td>18</td><td>0001 0010</td><td>12</td>
			  </tr>
			  <tr>
				<td>19</td><td>0001 0011</td><td>13</td>
			  </tr>
			  <tr>
				<td>20</td><td>0001 0100</td><td>14</td>
			  </tr>
			  <tr>
				<td>21</td><td>0001 0101</td><td>15</td>
			  </tr>
			  <tr>
				<td>22</td><td>0001 0110</td><td>16</td>
			  </tr>
			  <tr>
				<td>23</td><td>0001 0111</td><td>17</td>
			  </tr>
			  <tr>
				<td>24</td><td>0001 1000</td><td>18</td>
			  </tr>
			  <tr>
				<td>25</td><td>0001 1001</td><td>19</td>
			  </tr>
			  <tr>
				<td>26</td><td>0001 1010</td><td>1A</td>
			  </tr>
			  <tr>
				<td>27</td><td>0001 1011</td><td>1B</td>
			  </tr>
			  <tr>
				<td>28</td><td>0001 1100</td><td>1C</td>
			  </tr>
			  <tr>
				<td>29</td><td>0001 1101</td><td>1D</td>
			  </tr>
			  <tr>
				<td>30</td><td>0001 1110</td><td>1E</td>
			  </tr>
			  <tr>
				<td>31</td><td>0001 1111</td><td>1F</td>
			  </tr>
			  <tr>
				<td>32</td><td>0010 0000</td><td>20</td>
			  </tr>
			  <tr>
				<td>64</td><td>0100 0000</td><td>40</td>
			  </tr>
			  <tr>
				<td>128</td><td>1000 0000</td><td>80</td>
			  </tr>
			  <tr>
				<td>255</td><td>1111 1111</td><td>FF</td>
			  </tr>
			</table>


			<style>
			table {
				width: 100%;
			}
			table, tr, td {
				border: 1px solid black;
				border-collapse: collapse;
				border-spacing: 0;
				padding: 1%;
			}
			</style>
			`
		},
		{
			chapterId: 9,
			read_status: 'Disabled',
			title: `Conversion of Number Systems`,
			content: `
			<b>CONVERSION OF NUMBER SYSTEMS</b>
			<br>
			<br>
			`,
			sub: [
				{
					chapterId: 10,
					read_status: 'Disabled',
					title: `Decimal to Binary`,
					content:  `
					<b>DECIMAL-TO-BINARY CONVERSION</b>
					<br>
					<br>
					<div id="ch1s5s1" class="subsection">
					<div class="subtext">
					  <p>Double-dabble Method is a way of converting any decimal number to its binary equivalent. It requires successive division by two (2), writing down binary equivalent. It requires successive division by two (2), writing down each quotient and its remainder. The last quotient and the remainders are the binary equivalent to the given decimal number.</p>
					</div>
					<div class="subtext">
					  <p>Example: Convert 15<sub>10</sub> to its binary equivalent.</p>
					  <div class="two-cols">
						<div class="left-col">Step 1:</div>
						<div class="right-col">Divide 15 by 2. The quotient is 7. Write it on the next line after 15, and then write the remainder (1) on the next column (beside 15).
						  <br/>
						  <table class="double-dabble">
							<thead>
							  <tr><td>2</td><td>15</td><td>1</td></tr>
							</thead>
							<tbody>
							  <tr><td></td><td>7</td></tr>
							</tbody>
						  </table>
						</div>
					  </div>
					  <div class="two-cols">
						<div class="left-col">Step 2:</div>
						<div class="right-col">Divide 7 by 2. The quotient is 3. Write it on the next line after 7, and then write the remainder (1) on the next column (beside 7).
						  <br/>
						  <table class="double-dabble">
							<thead>
							  <tr><td>2</td><td>15</td><td>1</td></tr>
							  <tr><td>2</td><td>7</td><td>1</td></tr>
							</thead>
							<tbody>
							  <tr><td></td><td>3</td></tr>
							</tbody>
						  </table>
						</div>
					  </div>
					  <div class="two-cols">
						<div class="left-col">Step 3:</div>
						<div class="right-col">Divide 3 by 2. The quotient is 1. Write it on the next line after 3, and then write the remainder (1) on the next column (beside 3).
						  <br/>
						  <table class="double-dabble">
							<thead>
							  <tr><td>2</td><td>15</td><td>1</td></tr>
							  <tr><td>2</td><td>7</td><td>1</td></tr>
							  <tr><td>2</td><td>3</td><td>1</td></tr>
							</thead>
							<tbody>
							  <tr><td></td><td>1</td></tr>
							</tbody>
						  </table>
						  Final answer: <msub><mi>1111</mi><mn>2</mn></msub>
						</div>
					  </div>
					  <div class="subtext">Note: Continue the process of division until the quotient is less than the divisor. Then read the final answer in upward direction.
					  </div>
					</div>
				  </div>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/2U9b76JRz7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

					`
				},
				{
					chapterId: 11,
					read_status: 'Disabled',
					title: `Decimal to Hexadecimal`,
					content: `
					<b>DECIMAL TO HEXADECIMAL CONVERSION</b>
					<br>
					<br>
					<div id="ch1s5s2" class="subsection">
					<div class="subtext">Hex-dabble Method is a way of converting any decimal number to its hexadecimal equivalent. It is similar to double-dabble except that sixteen (16) is used as the divisor instead of two (2).</div>
					<div class="subtext">
					  Example: Convert <msub><mi>43</mi><mn>10</mn></msub> to its hexadecimal equivalent.
					  <div class="two-cols">
						<div class="left-col">Step 1:</div>
						<div class="right-col">Divide 43 by 16. The quotient is 2. Write it on the next line after 43 and write the quotient on the next column (beside 43).
						  <br/>
						  <table class="double-dabble">
							<thead>
							  <tr><td>16</td><td>43</td><td>B(11)</td></tr>
							</thead>
							<tbody>
							  <tr><td></td><td>2</td></tr>
							</tbody>
						  </table>
						</div>
					  </div>
					  <div class="two-cols">
						<div class="left-col">Step 2:</div>
						<div class="right-col">Since 2 (the quotient) is less than the divisor (which is 16) the process of division will stop and the final answer will be read upwards.
						  <br/>
						  <table class="double-dabble">
							<thead>
							  <tr><td>16</td><td>43</td><td>B(11)</td></tr>
							</thead>
							<tbody>
							  <tr><td></td><td>2</td></tr>
							</tbody>
						  </table>
						  Final answer: <msub><mi>2B</mi><mn>16</mn></msub>
						</div>
					  </div>
					</div>
				  </div>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/uVpQ9pPskNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					`
				},
				{
					chapterId: 12,
					read_status: 'Disabled',
					title: `Binary to Decimal`,
					content: `
					<b>BINARY TO DECIMAL CONVERSION</b>
					<br>
					<br>
					<div id="ch1s5s3" class="subsection">
					<div class="subtext">Positional Notation by power of two (2) is a method used to convert any binary numbers to its decimal equivalent.
					</div>
					<div class="subtext">Convert <msub><mi>10010</mi><mn>2</mn></msub> to its decimal equivalent.</div>
					<div class="subtext">Step 1: Starting from the rightmost digit, multiply each bit by 2.
					  <div>#TODO fig1.5.3.1</div>
					</div>
					<div class="subtext">Step 2: Every multiplier 2 should be raised to an exponent starting with zero (0).
					  <div>#TODO fig1.5.3.2</div>
					</div>
					<div class="subtext">Step 3: Simplify the arithmetic expression.
					  <div>#TODO fig1.5.3.3</div>
					</div>
					<div class="subtext">Step 4: Get the product of each expression.
					  <div>#TODO fig1.5.3.4</div>
					</div>
					<div class="subtext">Step 5: After which, add the entire product and that gives you the decimal equivalent.
					  <div>#TODO fig1.5.3.5</div>
					</div>
				  </div>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/6Tt-RA6KD30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  `
				},
				{
					chapterId: 13,
					read_status: 'Disabled',
					title: `Binary to Hexadecimal`,
					content: `
					<b>BINARY TO HEXADECIMAL CONVERSION</b>
					<br>
					<br>
					<div id="ch1s5s4" class="subsection">
					<div class="subtext">8421 Method is a way of converting any binary number to its hexadecimal equivalent.</div>
					<div class="subtext">Example: Convert <msub><mi>101100011100</mi><mn>2</mn></msub></div>
					<div class="subtext">Step 1: Group the bits into four (4) starting from the right going to the left
					  <div>#TODO fig1.5.4.1 <br/> 1011 0001 1100</div>
					</div>
					<div class="subtext">Step 2: Represent 8-4-2-1 above the bits starting from the right
					  <div>8421 8421 8421 <br/> 1011 0001 1100</div>
					</div>
					<div class="subtext">Step 3: Multiply each representation (8-4-2-1) to its corresponding bit.
					  <div>
						8421 8421 8421 <br/>
						1011 0001 1100 <br/>
						8x1  8x0  8x1<br/>
						4x0  4x0  4x1<br/>
						2x1  2x0  2x0<br/>
						1x1  1x1  1x0 
					  </div>
					</div>
					<div class="subtext">Step 4: Get the product of every arithmetic expression.
					  <div>
						8421  8421  8421 <br/>
						1011  0001  1100 <br/>
						8x1=8 8x0=0 8x1=8<br/>
						4x0=0 4x0=0 4x1=4<br/>
						2x1=2 2x0=0 2x0=0<br/>
						1x1=1 1x1=1 1x0=0
					  </div>
					</div>
					<div class="subtext">Step 5: Add all the product values in every group. If the sum is greater than nine (9), It must be changed to its equivalent alphabetic symbol (i.e. 10=A, 11=B, 12=C, 13=D, 14=E, 15=F).
					  <div>
						8421  8421  8421 <br/>
						1011  0001  1100 <br/>
						8x1=8 8x0=0 8x1=8<br/>
						4x0=0 4x0=0 4x1=4<br/>
						2x1=2 2x0=0 2x0=0<br/>
						1x1=1 1x1=1 1x0=0<br/> 
						11=B  1     12=C
					  </div>
					</div>
					<div class="subtext">Step 6: Write these symbols together and that gives you the hexidecimal equivalent.
					  <div>Therefore, 10110001100 (base 2) = B1C (base 16)  </div>
					</div>
				  </div>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/8T4F7WboWPQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  `
				},
				{
					chapterId: 14,
					read_status: 'Disabled',
					title: `Hexadecimal to Decimal`,
					content: `
					<b>HEXADECIMAL TO DECIMAL CONVERSION</b>
					<br>
					<br>
					<div id="ch1s5s5" class="subsection">
					<div class="subtext">Positional Notation by Powers of Sixteen (16) is a method used to convert any hexadecimal number to its decimal equivalent. The procedure is the same with the binary to decimal equivalent. The procedure is the same with the binary to decimal conversion except that sixteen (16) is used as the multiplier instead of two (2).</div>
					<div class="subtext">Example: Convert <msub><mi>AB1DE</mi><mn>16</mn></msub></div>
					<div class="subtext">Step 1: Starting from the rightmost digit, multiply each digit by 16. If the digit is greater than 9, (i.e. A, B, C and so on) convert it to its equivalent decimal digits.
					  <div>
						A B 1 D E (base 16) <br/>
						A 10x16<br/>
						B 11x16<br/>
						1  1x16<br/>
						D 13x16<br/>
						E 14x16
					  </div>
					</div>
					<div class="subtext">Step 2: Starting from the rightmost digit, multiply each digit by 16. If the digit is greater than 9, (i.e. A, B, C and so on) convert it to its equivalent decimal digits.
					  <div>
						A B 1 D E (base 16) <br/>
						A 10x</msup><msup><mi>16</mi><mn>4</mn></msup><br/>
						B 11x</msup><msup><mi>16</mi><mn>3</mn></msup><br/>
						1  1x</msup><msup><mi>16</mi><mn>2</mn></msup><br/>
						D 13x</msup><msup><mi>16</mi><mn>1</mn></msup><br/>
						E 14x<msup><mi>16</mi><mn>0</mn></msup>
					  </div>
					</div>
					<div class="subtext">Step 3: Simplify the arithmetic expression
					  <div>
						A B 1 D E (base 16) <br/>
						A 10x</msup><msup><mi>16</mi><mn>4</mn></msup><br/>
						B 11x</msup><msup><mi>16</mi><mn>3</mn></msup><br/>
						1  1x</msup><msup><mi>16</mi><mn>2</mn></msup><br/>
						D 13x</msup><msup><mi>16</mi><mn>1</mn></msup><br/>
						E 14x<msup><mi>16</mi><mn>0</mn></msup>
					  </div>
					</div>
					<div class="subtext">Step 4: Get the product of each expression.
					  <div>
						A B 1 D E (base 16) <br/>
						A 10x</msup><msup><mi>16</mi><mn>4</mn></msup><br/>
						B 11x</msup><msup><mi>16</mi><mn>3</mn></msup><br/>
						1  1x</msup><msup><mi>16</mi><mn>2</mn></msup><br/>
						D 13x</msup><msup><mi>16</mi><mn>1</mn></msup><br/>
						E 14x<msup><mi>16</mi><mn>0</mn></msup>
					  </div>
					</div>
					<div class="subtext">Step 5: After which, add all products and that gives you the decimal equivalent.
					  <div>
						A B 1 D E (base 16) <br/>
						A 10x</msup><msup><mi>16</mi><mn>4</mn></msup><br/>
						B 11x</msup><msup><mi>16</mi><mn>3</mn></msup><br/>
						1  1x</msup><msup><mi>16</mi><mn>2</mn></msup><br/>
						D 13x</msup><msup><mi>16</mi><mn>1</mn></msup><br/>
						E 14x<msup><mi>16</mi><mn>0</mn></msup>
					  </div>
					  Therefore, AB1DE (base 16) = 700894 (base 10)
					</div>
				  </div>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/1tHgs0mrZ5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

				  `
				},
				{
					chapterId: 15,
					read_status: 'Disabled',
					title: 	`Hexadecimal to Binary`,
					content: `
					<b>HEXADECIMAL TO BINARY CONVERSION</b>
					<br>
					<br>
					<div id="ch1s5s6" class="subsection">
					<div class="subtext">Memory Method is a way of converting hexadecimal to its binary equivalent. Every hexadecimal digit has its 4-bit equivalent.</div>
					<div class="subtext two-col-table">
					  Hexadecimal, Binary
					  0-9-A-F, 0000 - 1111
					</div>
					<div class="subtext">
					  Example: Convert C0DE8 (base 16) to its binary equivalent.
					</div>
					<div class="subtext">
					  Step 1: Write out each hexadecimal digit separately.
					  C    0    D    E    8
					</div>
					<div class="subtext">
					  Step 2: Use the table and write the equivalent digit below each hexadecimal number.
					  C    0    D    E    8 <br/>
					  1100 0000 1101 1110 1000
					</div>
					<div class="subtext">
					  Write the bits together to form the binary equivalent and the conversion is done. <br/>
					  Therefore, C0DE8 (base 16) = 11000000110111101000 (base 2)
					</div>
				  </div>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/WI6Uvci2p7E?start=0&end=234" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  `
				},
			]
		},
		{
			chapterId: 16,
			read_status: 'Disabled',
			title: `Lecture Exercise 1`,
			content: `
			<b>LECTURE EXERCISE 1</b>
			<style>
			table, th, td 
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			table#t02
			{
				width:99%;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 1 LECTURE - EXERCISE 1 </b></td>
  				</tr>
  			</table>
  			<br/>
  			<table id="t01">
  				<tr>
  					<th><b><label for="sname"> NAME</b></th>
  					<td><input type="text" id="sname" name="sname" size="25%"></td>
  					<th><b>DATE</b></th>
  					<td><input type="date" size="25%"></td>
  				</tr>
  				<tr>
  					<th><b>COURSE</b></th>
  					<td><input type="text" size="25%"></td>
  					<th><b>SECTION</b></th>
  					<td><input type="text" size="25%"></td>
  				</tr>
  				<tr>
  					<th><b>CLASS SCHEDULE</b></th>
  					<td><input type="text" size="25%"></td>
  					<th><b>INSTRUCTOR</b></th>
  					<td><input type="text" size="25%"></td>
  				</tr>
  			</table>
  			<p>Conversion from Decimal to Binary<p>
  			<table id="t02" >
  			
  				<tr align="center">
  					<td width="200"><b>DECIMAL</b></td>
  					<td ><b>BINARY</b></td>
  				</tr>
  				<tr align="left">
  					<td><b>1. 25 </b></td>
  					<td><input type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>2. 75 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>3. 165 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>4. 284 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>5. 319 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>6. 527 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>7. 754 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>8. 816 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>9. 957 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>
  				<tr align="left">
  					<td><b>10. 1027 </b></td>
  					<td><input  type="number" style="width: 40em"></td>
  				</tr>

  			</table>
  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, //So di ko na tinapos to. Scratch lang din naman to, kasi sabi ni nics di nadaw sasama pala exercises. And di ko na din alam paano tapusin ih. HAHA 
		
		{
			chapterId: 17,
			read_status: 'Disabled',
			title: `Laboratory Exercise 1`,
			content: `
			<b>LABORATORY EXERCISE 1</b>
			<br>
			<br>


			`
		},
		{
			chapterId: 18,
			read_status: 'Disabled',
			title: `Lecture Exercise 2`,
			content: `
			<b>LECTURE EXERCISE 2</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 19,
			read_status: 'Disabled',
			title: `Laboratory Exercise 2`,
			content: `
			<b>LABORATORY EXERCISE 2</b>
			<br>
			<br>


			`
		},
		{
			chapterId: 20,
			read_status: 'Disabled',
			title: `Lecture Exercise 3`,
			content: `
			<b>LECTURE EXERCISE 3</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 21,
			read_status: 'Disabled',
			title: `Laboratory Exercise 3`,
			content: `
			<b>LABORATORY EXERCISE 3</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 22,
			read_status: 'Disabled',
			title: `Lecture Exercise 4`,
			content: `
			<b>LECTURE EXERCISE 4</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 23,
			read_status: 'Disabled',
			title: `Laboratory Exercise 4`,
			content: `
			<b>LABORATORY EXERCISE 4</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 24,
			read_status: 'Disabled',
			title: `Lecture Exercise 5`,
			content: `
			<b>LEcTURE EXERCISE 5</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 25,
			read_status: 'Disabled',
			title: `Laboratory Exercise 5`,
			content: `
			<b>LABORATORY EXERCISE 5</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 26,
			read_status: 'Disabled',
			title: `Lecture Exercise 6`,
			content: `
			<b>LECTURE EXERCISE 6</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 27,
			read_status: 'Disabled',
			title: `Laboratory Exercise 6`,
			content: `
			<b>LABORATORY EXERCISE 6</b>
			<br>
			<br>

			`
		},

	]

}