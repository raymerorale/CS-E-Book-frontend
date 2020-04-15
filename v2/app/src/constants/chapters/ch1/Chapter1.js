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
			<br><br>
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
			<br/><br/>
			<p>It is also called as the <b>radix</b>. Base refers to the number of digits (basic symbols) in a number system. A subcript attached to a number indicates the base radix of that number. 100<sub>2</sub> means binary 100 (read as one-zero-one), on the other hand, 100<sub>2</sub> means decimal 100 (read as one hundred) subscripts help classify equations where different number systems are combined.</p>`
		},
		{
			chapterId: 4,
			read_status: 'Disabled',
			title: `Common Used Bases of Number Systems in Assembly Language`,
			content: `
			<b>COMMON USED BASES OF NUMBER SYSTEMS IN ASSEMBLY LANGUAGE</b>
			<br><br>`,
			sub: [
				{
					chapterId: 5,
					read_status: 'Disabled',
					title: `Decimal Number System`,
					content: `
					<b>DECIMAL NUMBER SYSTEM</b>
					<br><br>
					<p>The term decimal comes from &#34decem&#34 the Latin word for ten. That's why it is a number system with base of ten (10). The decimal system is also called the Hindu-Arabic System and was developed by Hindu Mathematicians in India more than 2,000 years ago. It consists of ten digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.</p>

					<table style="width:50%">
						<tr>
							<td> Example of decimal numbers:</td>
							<td> 25<sub>10</sub> </td>
						</tr>
						<tr>
							<td></td>
							<td> 890<sub>10</sub> </td>
						</tr>
					</table>`
				},
				{
					chapterId: 6,
					read_status: 'Disabled',
					title: `Binary Number System`,
					content: `
					<b>BINARY NUMBER SYSTEM</b>
					<br><br>
					<p>The term binary comes from the Latin word <i>&#34bi&#34</i> meaning two at a time. That's why it is a number system with a base of two (2). It consists of two digits: 0 and 1.</p>

					<table style="width:50%">
						<tr>
							<td> Example of binary numbers:</td>
							<td> 101<sub>2</sub> </td>
						</tr>
						<tr>
							<td></td>
							<td> 111000<sub>2</sub> </td>
						</tr>
					</table>`
				},
				{
					chapterId: 7,
					read_status: 'Disabled',
					title: `Hexadecimal Number System`,
					content: `
					<b>HEXADECIMAL NUMBER SYSTEM</b>
					<br><br>
					<p>The term hexadecimal comes from the Greek word <i>&#34Hexa&#34</i> meaning six and Latin word <i>&#34decem&#34</i> meaning ten, That's why it is a number system with a base of sixteen (16). It consists of sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. A, B, C, D, E, and F stands for 10, 11, 12, 13, 14, and 15 respectively.</p>

					<table style="width:50%">
						<tr>
							<td> Example of hexadecimal numbers:</td>
							<td> BEA<sub>16</sub> </td>
						</tr>
						<tr>
							<td></td>
							<td> 8C0<sub>16</sub> </td>
						</tr>
					</table>`
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
			<p><center>The table below shows the equivalences between decimal, binary and hexadecimal digits.</p></center>

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
				width: 99%;
			}
			table, tr, td {
				border: 1px solid black;
				border-collapse: collapse;
				border-spacing: 0;
				padding: 1%;
				text-align:center;
			}
			</style>`
		},
		{
			chapterId: 9,
			read_status: 'Disabled',
			title: `Conversion of Number Systems`,
			content: `
			<b>CONVERSION OF NUMBER SYSTEMS</b>
			<br><br>`,
			sub: [
				{
					chapterId: 10,
					read_status: 'Disabled',
					title: `Decimal to Binary`,
					content:  `

					<b>DECIMAL-TO-BINARY CONVERSION</b>
					<br><br>
					<p style="text-indent:2em">Double-dabble Method is a way of converting any decimal number to its binary equivalent. It requires successive division by two (2), writing down binary equivalent. It requires successive division by two (2), writing down each quotient and its remainder. The last quotient and the remainders are the binary equivalent to the given decimal number.</p>
				
					<p>Example: Convert 15<sub>10</sub> to its binary equivalent.</p>
					
						<i>Step 1:</i>
						Divide 15 by 2. The quotient is 7. Write it on the next line after 15, and then write the remainder (1) on the next column (beside 15).<br/>

						<center><svg height="150" width="200">
						<path d="M50 30 L50 70" stroke="black" stroke-width="1"/>
						<path d="M50 70 L100 70" stroke="black" stroke-width="1"/>

						<g font-size="17" font-family="sans-serif" fill="black" stroke="none" text-anchor="left">
						    <text x="30" y="55">2</text>
						    <text x="60" y="55">15</text>
						    <text x="60" y="95">7</text>
						    <text x="115" y="55">1</text>
						  </g></svg></center>
						
						<i>Step 2:</i>
						Divide 7 by 2. The quotient is 3. Write it on the next line after 7, and then write the remainder (1) on the next column (beside 7).<br/>

						<center><svg height="160" width="200">
						<path d="M50 30 L50 110" stroke="black" stroke-width="1"/>
						<path d="M50 70 L100 70" stroke="black" stroke-width="1"/>
						<path d="M50 110 L100 110" stroke="black" stroke-width="1"/>

						<g font-size="17" font-family="sans-serif" fill="black" stroke="none" text-anchor="left">
						    <text x="30" y="55">2</text>
						    <text x="30" y="95">2</text>
						    <text x="60" y="55">15</text>
						    <text x="60" y="95">7</text>
						    <text x="60" y="135">3</text>
						    <text x="115" y="55">1</text>
						    <text x="115" y="95">1</text>
						  </g></svg></center>
				
						<i>Step 3:</i>
						Divide 3 by 2. The quotient is 1. Write it on the next line after 3, and then write the remainder (1) on the next column (beside 3).<br/>

						<center><svg height="200" width="200">
						<path d="M50 30 L50 140" stroke="black" stroke-width="1"/>
						<path d="M50 140 L100 140" stroke="black" stroke-width="1"/>
						<path d="M50 100 L100 100" stroke="black" stroke-width="1"/>
						<path d="M50 60 L100 60" stroke="black" stroke-width="1"/>
						<path d="M75 155 L150 155" stroke="black" stroke-width="1"/>
						<path d="M150 155 L150 40" stroke="black" stroke-width="1"/>
						<path d="M150 40 L145 50" stroke="black" stroke-width="1"/>
						<path d="M145 50 L150 40" stroke="black" stroke-width="1"/>
						<path d="M150 40 L155 50" stroke="black" stroke-width="1"/>

						<g font-size="17" font-family="sans-serif" fill="black" stroke="none" text-anchor="left">
						    <text x="30" y="55">2</text>
						    <text x="30" y="95">2</text>
						    <text x="30" y="135">2</text>
						    <text x="60" y="55">15</text>
						    <text x="60" y="95">7</text>
						    <text x="60" y="135">3</text>
						    <text x="115" y="55">1</text>
						    <text x="115" y="95">1</text>
						    <text x="115" y="135">1</text>
						    <text x="60" y="160">1</text>
						  </g></svg></center>

						<center style="border:1px solid black; width:40%; margin-left:auto; margin-right:auto">Final answer: 	1111</sub>2</sub></center><br/>

					<b>Note:</b> Continue the process of division until the quotient is less than the divisor. Then read the final answer in upward direction.

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/2U9b76JRz7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					`
				},
				{
					chapterId: 11,
					read_status: 'Disabled',
					title: `Decimal to Hexadecimal`,
					content: `
					<b>DECIMAL TO HEXADECIMAL CONVERSION</b><br/><br/>
					
					<p style="text-indent:2em">Hex-dabble Method is a way of converting any decimal number to its hexadecimal equivalent. It is similar to double-dabble except that sixteen (16) is used as the divisor instead of two (2).
					<p>Example: Convert 43</sub>10</sub> to its hexadecimal equivalent.</p>
					 
					<i>Step 1: </i>
						Divide 43 by 16. The quotient is 2. Write it on the next line after 43 and write the quotient on the next column (beside 43).<br/>
						
						<center><svg height="150" width="200">
						<path d="M50 30 L50 70" stroke="black" stroke-width="1"/>
						<path d="M50 70 L100 70" stroke="black" stroke-width="1"/>

						<g font-size="17" font-family="sans-serif" fill="black" stroke="none" text-anchor="left">
						    <text x="25" y="55">16</text>
						    <text x="60" y="55">43</text>
						    <text x="60" y="95">3</text>
						    <text x="115" y="55">B(11)</text>
						  </g></svg></center>
					
						<i>Step 2: </i>
						Since 2 (the quotient) is less than the divisor (which is 16) the process of division will stop and the final answer will be read upwards.<br/>
					
						<center><svg height="150" width="200">
						<path d="M50 30 L50 70" stroke="black" stroke-width="1"/>
						<path d="M50 70 L100 70" stroke="black" stroke-width="1"/>

						<g font-size="17" font-family="sans-serif" fill="black" stroke="none" text-anchor="left">
						    <text x="25" y="55">16</text>
						    <text x="60" y="55">43</text>
						    <text x="60" y="95">3</text>
						    <text x="115" y="55">B(11)</text>
						  </g></svg></center>
						<center style="border:1px solid black; width:40%; margin-left:auto; margin-right:auto"> Final answer: 2B<sub>16</sub></center>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/uVpQ9pPskNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					chapterId: 12,
					read_status: 'Disabled',
					title: `Binary to Decimal`,
					content: `
					<b>BINARY TO DECIMAL CONVERSION</b>
					<br><br>
					<p style="text-indent:2em">Positional Notation by power of two (2) is a method used to convert any binary numbers to its decimal equivalent.</p>
					
					<p>Convert 10010<sub>2</sub> to its decimal equivalent.</p>
					<i>Step 1:</i> Starting from the rightmost digit, multiply each bit by 2.<br/>

						<center>
							<svg height="280" width="350">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">1</text>
							<text x="55" y="25">0</text>
							<text x="95" y="25">0</text>
							<text x="135" y="25">1</text>
							<text x="175" y="25">0<tspan font-size="12" baseline-shift="sub">2</tspan></text>

							<text x="255" y="75">0 x 2</text>
							<text x="255" y="115">1 x 2</text>
							<text x="255" y="155">0 x 2</text>
							<text x="255" y="195">0 x 2</text>
							<text x="255" y="235">1 x 2</text>
						</g></svg></center>
						
					<i>Step 2:</i> Every multiplier 2 should be raised to an exponent starting with zero (0).<br>

						<center>
							<svg height="280" width="350">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">1</text>
							<text x="55" y="25">0</text>
							<text x="95" y="25">0</text>
							<text x="135" y="25">1</text>
							<text x="175" y="25">0<tspan font-size="12" baseline-shift="sub">2</tspan></text>

							<text x="255" y="75">0 x 2<tspan font-size="12" baseline-shift="super">0</tspan></text>
							<text x="255" y="115">1 x 2<tspan font-size="12" baseline-shift="super">1</tspan></text>
							<text x="255" y="155">0 x 2<tspan font-size="12" baseline-shift="super">2</tspan></text>
							<text x="255" y="195">0 x 2<tspan font-size="12" baseline-shift="super">3</tspan></text>
							<text x="255" y="235">1 x 2<tspan font-size="12" baseline-shift="super">4</tspan></text>
						</g></svg></center>

					<i>Step 3:</i> Simplify the arithmetic expression.<br/>
					
						<center>
							<svg height="280" width="400">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">1</text>
							<text x="55" y="25">0</text>
							<text x="95" y="25">0</text>
							<text x="135" y="25">1</text>
							<text x="175" y="25">0<tspan font-size="12" baseline-shift="sub">2</tspan></text>

							<text x="255" y="75">0 x 2<tspan font-size="12" baseline-shift="super">0</tspan> = 0 x 1</text>
							<text x="255" y="115">1 x 2<tspan font-size="12" baseline-shift="super">1</tspan> = 1 x 2</text>
							<text x="255" y="155">0 x 2<tspan font-size="12" baseline-shift="super">2</tspan> = 0 x 4</text>
							<text x="255" y="195">0 x 2<tspan font-size="12" baseline-shift="super">3</tspan> = 0 x 8</text>
							<text x="255" y="235">1 x 2<tspan font-size="12" baseline-shift="super">4</tspan> = 1 x 16</text>
						</g></svg></center>

					<i>Step 4:</i> Get the product of each expression.<br>
						
						<center>
							<svg height="280" width="420">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">1</text>
							<text x="55" y="25">0</text>
							<text x="95" y="25">0</text>
							<text x="135" y="25">1</text>
							<text x="175" y="25">0<tspan font-size="12" baseline-shift="sub">2</tspan></text>

							<text x="255" y="75">0 x 2<tspan font-size="12" baseline-shift="super">0</tspan> = 0 x 1 = 0</text>
							<text x="255" y="115">1 x 2<tspan font-size="12" baseline-shift="super">1</tspan> = 1 x 2 = 2</text>
							<text x="255" y="155">0 x 2<tspan font-size="12" baseline-shift="super">2</tspan> = 0 x 4 = 0</text>
							<text x="255" y="195">0 x 2<tspan font-size="12" baseline-shift="super">3</tspan> = 0 x 8 = 0</text>
							<text x="255" y="235">1 x 2<tspan font-size="12" baseline-shift="super">4</tspan> = 1 x 16 = 16</text>
							</g></svg></center>
					
					<i>Step 5:</i> After which, add the entire product and that gives you the decimal equivalent.
						
						<center>
							<svg height="280" width="420">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>
							<path d="M365 245 L410 245" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">1</text>
							<text x="55" y="25">0</text>
							<text x="95" y="25">0</text>
							<text x="135" y="25">1</text>
							<text x="175" y="25">0<tspan font-size="12" baseline-shift="sub">2</tspan></text>

							<text x="255" y="75">0 x 2<tspan font-size="12" baseline-shift="super">0</tspan> = 0 x 1 = 0</text>
							<text x="255" y="115">1 x 2<tspan font-size="12" baseline-shift="super">1</tspan> = 1 x 2 = 2</text>
							<text x="255" y="155">0 x 2<tspan font-size="12" baseline-shift="super">2</tspan> = 0 x 4 = 0</text>
							<text x="255" y="195">0 x 2<tspan font-size="12" baseline-shift="super">3</tspan> = 0 x 8 = 0</text>
							<text x="255" y="235">1 x 2<tspan font-size="12" baseline-shift="super">4</tspan> = 1 x 16 = 16</text>
							<text x="375" y="265">16</text>
							</g></svg></center>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/6Tt-RA6KD30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					chapterId: 13,
					read_status: 'Disabled',
					title: `Binary to Hexadecimal`,
					content: `
					<b>BINARY TO HEXADECIMAL CONVERSION</b>
					<br><br>
					<p style="text-indent:2em;">8421 Method is a way of converting any binary number to its hexadecimal equivalent.</p>

					<p>Example: Convert 10110001110<sub>0</sub></p>

					<i>Step 1:</i> Group the bits into four (4) starting from the right going to the left.
					<br/>

						<center><svg height="12" width="250"><polyline points="6,0 0,6 6,12 0,6 250,6" style="fill:none;stroke:black;stroke-width:1" /></svg></center>
					
						<table>
						<tr>
							<td>1 0 0 1</td>
							<td>0 0 0 1</td>
							<td>1 1 0 0</td>
						</tr>
						</table><br>
			
					<i>Step 2:</i> Represent 8-4-2-1 above the bits starting from the right going to the left.<br>

						<table>
						<tr>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
						</tr>
						<tr>
							<td>1 0 0 1</td>
							<td>0 0 0 1</td>
							<td>1 1 0 0</td>
						</tr>
						</table><br>

					<i>Step 3:</i> Multiply each representation (8-4-2-1) to its corresponding bit.<br>
						
						<table>
						<tr>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
						</tr>
						<tr>
							<td>1 0 0 1</td>
							<td>0 0 0 1</td>
							<td>1 1 0 0</td>
						</tr>
						<tr>
							<td>8 x 1</td>
							<td>8 x 0</td>
							<td>8 x 1</td>
						</tr>
						<tr>
							<td>4 x 0</td>
							<td>4 x 0</td>
							<td>4 x 1</td>
						</tr>
						<tr>
							<td>2 x 1</td>
							<td>2 x 0</td>
							<td>2 x 0</td>
						</tr>
						<tr>
							<td>1 x 1</td>
							<td>1 x 1</td>
							<td>1 x 0</td>
						</tr>
						</table><br>

					<i>Step 4:</i> Get the product of every arithmetic expression.<br>
						
						<table>
						<tr>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
						</tr>
						<tr>
							<td>1 0 0 1</td>
							<td>0 0 0 1</td>
							<td>1 1 0 0</td>
						</tr>
						<tr>
							<td>8 x 1 = 8</td>
							<td>8 x 0 = 0</td>
							<td>8 x 1 = 8</td>
						</tr>
						<tr>
							<td>4 x 0 = 0</td>
							<td>4 x 0 = 0</td>
							<td>4 x 1 = 4</td>
						</tr>
						<tr>
							<td>2 x 1 = 2</td>
							<td>2 x 0 = 0</td>
							<td>2 x 0 = 0</td>
						</tr>
						<tr>
							<td>1 x 1 = 1</td>
							<td>1 x 1 = 1</td>
							<td>1 x 0 = 0</td>
						</tr>
						</table><br>
				
					<i>Step 5:</i> Add all the product values in every group. If the sum is greater than nine (9), It must be changed to its equivalent alphabetic symbol (i.e. 10=A, 11=B, 12=C, 13=D, 14=E, 15=F).<br><br>
					
						<table>
						<tr>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
							<td>8 4 2 1</td>
						</tr>
						<tr>
							<td>1 0 0 1</td>
							<td>0 0 0 1</td>
							<td>1 1 0 0</td>
						</tr>
						<tr>
							<td>8 x 1 = 8</td>
							<td>8 x 0 = 0</td>
							<td>8 x 1 = 8</td>
						</tr>
						<tr>
							<td>4 x 0 = 0</td>
							<td>4 x 0 = 0</td>
							<td>4 x 1 = 4</td>
						</tr>
						<tr>
							<td>2 x 1 = 2</td>
							<td>2 x 0 = 0</td>
							<td>2 x 0 = 0</td>
						</tr>
						<tr>
							<td>1 x 1 = 1</td>
							<td>1 x 1 = 1</td>
							<td>1 x 0 = 0</td>
						</tr>
						<tr>
							<td style= "border:1px solid black;">11 = B</td>
							<td style= "border:1px solid black;">1</td>
							<td style= "border:1px solid black;">12 = C</td>
						</tr>
						</table><br>
					  
					<i>Step 6:</i> Write these symbols together and that gives you the hexidecimal equivalent.
					<p style=text-indent:3em;">Therefore, 10110001100<sub>2</sub>= B1C<sub>16</sub><p>
					<br/>
					
				  <iframe width="560" height="315" src="https://www.youtube.com/embed/8T4F7WboWPQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  
				<style>
				  	table, td{
						border-collapse:separate;
						padding: 5px 20px 5px 20px;
						margin-left:auto;
						margin-right:auto;
						text-align:center;
					}
				</style>`
				},
				{
					chapterId: 14,
					read_status: 'Disabled',
					title: `Hexadecimal to Decimal`,
					content: `
					<b>HEXADECIMAL TO DECIMAL CONVERSION</b>
					<br><br> 

					<p style="text-indent:2em;">Positional Notation by Powers of Sixteen (16) is a method used to convert any hexadecimal number to its decimal equivalent. The procedure is the same with the binary to decimal equivalent. The procedure is the same with the binary to decimal conversion except that sixteen (16) is used as the multiplier instead of two (2).</p>
					<p>Example: Convert AB1DE<sub>16</sub></p>
					<i>Step 1:</i> Starting from the rightmost digit, multiply each digit by 16. If the digit is greater than 9, (i.e. A, B, C and so on) convert it to its equivalent decimal digits.<br/>

					<center>
						<svg height="280" width="400">
						<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
						<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
						<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
						<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
						<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
						<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
						<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
						<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
						<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
						<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

						<g font-size="17" fill="black" stroke="none" text-anchor="left">
						<text x="15" y="25">A</text>
						<text x="55" y="25">B</text>
						<text x="95" y="25">1</text>
						<text x="135" y="25">D</text>
						<text x="175" y="25">E<tspan font-size="12" baseline-shift="sub">16</tspan></text>

						<text x="255" y="75">E =  14 x 16</text>
						<text x="255" y="115">D = 13 x 16</text>
						<text x="255" y="155">1 = 1 x 16</text>
						<text x="255" y="195">B = 11 x 16</text>
						<text x="255" y="235">A = 10 x 16</text>
					</g></svg></center>

				<i>Step 2:</i> Starting from the rightmost digit, multiply each digit by 16. If the digit is greater than 9, (i.e. A, B, C and so on) convert it to its equivalent decimal digits.<br/>
					  
					 	<center>
							<svg height="280" width="400">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">A</text>
							<text x="55" y="25">B</text>
							<text x="95" y="25">1</text>
							<text x="135" y="25">D</text>
							<text x="175" y="25">E<tspan font-size="12" baseline-shift="sub">16</tspan></text>

							<text x="255" y="75">E =  14 x 16<tspan font-size="12" baseline-shift="super">0</tspan></text>
							<text x="255" y="115">D = 13 x 16<tspan font-size="12" baseline-shift="super">1</tspan></text>
							<text x="255" y="155">1 = 1 x 16<tspan font-size="12" baseline-shift="super">2</tspan></text>
							<text x="255" y="195">B = 11 x 16<tspan  font-size="12"baseline-shift="super">3</tspan></text>
							<text x="255" y="235">A = 10 x 16<tspan font-size="12" baseline-shift="super">4</tspan></text>
						</g></svg></center>

					<i>Step 3:</i> Simplify the arithmetic expression.<br/>

						<center>
							<svg height="280" width="500">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">A</text>
							<text x="55" y="25">B</text>
							<text x="95" y="25">1</text>
							<text x="135" y="25">D</text>
							<text x="175" y="25">E<tspan font-size="12" baseline-shift="sub">16</tspan></text>

							<text x="255" y="75">E =  14 x 16<tspan font-size="12" baseline-shift="super">0</tspan> = 14 x 1</text>
							<text x="255" y="115">D = 13 x 16<tspan font-size="12" baseline-shift="super">1</tspan> = 13 x 16</text>
							<text x="255" y="155">1 = 1 x 16<tspan font-size="12" baseline-shift="super">2</tspan> = 1 x 256</text>
							<text x="255" y="195">B = 11 x 16<tspan  font-size="12"baseline-shift="super">3</tspan> = 11 x 4096</text>
							<text x="255" y="235">A = 10 x 16<tspan font-size="12" baseline-shift="super">4</tspan> = 10 x 65536</text>
						</g></svg></center>
						
					<i>Step 4:</i> Get the product of each expression.<br/>

						<center>
							<svg height="280" width="550">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">A</text>
							<text x="55" y="25">B</text>
							<text x="95" y="25">1</text>
							<text x="135" y="25">D</text>
							<text x="175" y="25">E<tspan font-size="12" baseline-shift="sub">16</tspan></text>

							<text x="255" y="75">E =  14 x 16<tspan font-size="12" baseline-shift="super">0</tspan> = 14 x 1 = 14</text>
							<text x="255" y="115">D = 13 x 16<tspan font-size="12" baseline-shift="super">1</tspan> = 13 x 16 = 208</text>
							<text x="255" y="155">1 = 1 x 16<tspan font-size="12" baseline-shift="super">2</tspan> = 1 x 256 = 256</text>
							<text x="255" y="195">B = 11 x 16<tspan  font-size="12"baseline-shift="super">3</tspan> = 11 x 4096 = 45056</text>
							<text x="255" y="235">A = 10 x 16<tspan font-size="12" baseline-shift="super">4</tspan> = 10 x 65536 = 655360</text>
						</g></svg></center>

					<i>Step 5:</i> After which, add all products and that gives you the decimal equivalent.<br/>

						<center>
							<svg height="280" width="550">
							<path d="M20 30 L20 230" stroke="black" stroke-width="1"/>
							<path d="M20 230 L250 230" stroke="black" stroke-width="1"/>
							<path d="M60 30 L60 190" stroke="black" stroke-width="1"/>
							<path d="M60 190 L250 190" stroke="black" stroke-width="1"/>
							<path d="M100 30 L100 150" stroke="black" stroke-width="1"/>
							<path d="M100 150 L250 150" stroke="black" stroke-width="1"/>
							<path d="M140 30 L140 110" stroke="black" stroke-width="1"/>
							<path d="M140 110 L250 110" stroke="black" stroke-width="1"/>
							<path d="M180 30 L180 70" stroke="black" stroke-width="1"/>
							<path d="M180 70 L250 70" stroke="black" stroke-width="1"/>
                            
                            
                            <path d="M460 270 L460 245 " stroke="black" stroke-width="1"/>
                            <path d="M460 245 L530 245" stroke="black" stroke-width="1"/>
                            <path d="M530 245 L530 270" stroke="black" stroke-width="1"/>
                            <path d="M530 270 L460 270" stroke="black" stroke-width="1"/>
						    

							<g font-size="17" fill="black" stroke="none" text-anchor="left">
							<text x="15" y="25">A</text>
							<text x="55" y="25">B</text>
							<text x="95" y="25">1</text>
							<text x="135" y="25">D</text>
							<text x="175" y="25">E<tspan font-size="12" baseline-shift="sub">16</tspan></text>

							<text x="255" y="75">E =  14 x 16<tspan font-size="12" baseline-shift="super">0</tspan> = 14 x 1 = 14</text>
							<text x="255" y="115">D = 13 x 16<tspan font-size="12" baseline-shift="super">1</tspan> = 13 x 16 = 208</text>
							<text x="255" y="155">1 = 1 x 16<tspan font-size="12" baseline-shift="super">2</tspan> = 14 x 256 = 256</text>
							<text x="255" y="195">B = 11 x 16<tspan  font-size="12"baseline-shift="super">3</tspan> = 11 x 4096 = 45056</text>
							<text x="255" y="235">A = 10 x 16<tspan font-size="12" baseline-shift="super">4</tspan> = 10 x 65536 = 655360</text>
                            <text x="470" y="265"> 700894 </text>
						</g></svg></center>
					  
					Therefore, AB1DE (base 16) = 700894 (base 10) <br/>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/1tHgs0mrZ5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					chapterId: 15,
					read_status: 'Disabled',
					title: 	`Hexadecimal to Binary`,
					content: `
					<b>HEXADECIMAL TO BINARY CONVERSION</b>
					<br><br>
					
					<p style="text-indent:2em;">Memory Method is a way of converting hexadecimal to its binary equivalent. Every hexadecimal digit has its 4-bit equivalent.</p>

					<table>
					<tr>
						<th>HEXADECIMAL</th> <th>BINARY</th>
					</tr>
					<tr>
						<td>0</td> <td>0 0 0 0</td>
					</tr>
					<tr>
						<td>1</td> <td>0 0 0 1</td>
					</tr>
					<tr>
						<td>2</td> <td>0 0 1 0 </td>
					</tr>
					<tr>
						<td>3</td> <td>0 0 1 1</td>
					</tr>
					<tr>
						<td>4</td> <td>0 1 0 0</td>
					</tr>
					<tr>
						<td>5</td> <td>0 1 0 1</td>
					</tr>
					<tr>
						<td>6</td> <td>0 1 1 0</td>
					</tr>
					<tr>
						<td>7</td> <td>0 1 1 1</td>
					</tr>
					<tr>
						<td>8</td> <td> 1 0 0 0</td>
					</tr>
					<tr>
						<td>9</td> <td> 1 0 0 1</td>
					</tr>
					<tr>
						<td>A</td> <td>1 0 1 0</td>
					</tr>
					<tr>
						<td>B</td> <td>1 0 1 1</td>
					</tr> 
					<tr>
						<td>C</td> <td>1 1 0 0</td>
					</tr>
					<tr>
						<td>D</td> <td>1 1 0 1</td>
					</tr>
					<tr>
						<td>E</td> <td>1 1 1 0</td>
					</tr>
					<tr>
						<td>F</td> <td>1 1 1 1</td>
					</tr>
					</table><br/>
				
					<p>Example: Convert C0DE8 (base 16) to its binary equivalent.</p>
					
					<i>Step 1:</i> Write out each hexadecimal digit separately.<br>
					<p style="text-indent:3em;">  C 0 D E 8 </p>
					
					<i>Step 2:</i> Use the table and write the equivalent digit below each hexadecimal number.<br/><br/>

					<table>
					<tr>
						<td> C </td>
						<td> 0 </td>
						<td> D </td>
						<td> E </td>
						<td> 8 </td>
					</tr>
					<tr>
						<td> 1 1 0 0 </td>
						<td> 0 0 0 0 </td>
						<td> 1 1 0 1 </td>
						<td> 1 1 1 0 </td>
						<td> 1 0 0 0 </td>
					</tr>
					</table><br/>
					      
					<p>Write the bits together to form the binary equivalent and the conversion is done.<br/>
					Therefore, C0DE8 (base 16) = 11000000110111101000 (base 2)</p><br/>

				  <iframe width="560" height="315" src="https://www.youtube.com/embed/WI6Uvci2p7E?start=0&end=234" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

				<style>
				  table, th, td{	
           			border: 1px solid black;
  					border-collapse: collapse;
           			font-size: 20px;
  					text-align: center;
  					margin-left:auto;
  					margin-right:auto;
  					padding: 0px 50px 0px 50px;
  					}
				</style>`
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
				<style type="text/css">
					.Student
					{
						text-align: right;
					}
				</style>
				<body>
					<p><b>CHAPTER 1 LABORATORY- EXERCISE 1</b></p>
					<br>
					<table class="Student", border="1">
						<tr>
							<td>NAME</td>
							<td><pre>				</pre></td>
							<td>DATE</td>
							<td><pre> 				</pre></td>
						</tr>
						<tr>
							<td>COURSE</td>
							<td><pre>				</pre></td>
							<td>SECTION</td>
							<td><pre> 				</pre></td>
						</tr>
						<tr>
							<td>CLASS SCHEDULE</td>
							<td><pre>				</pre></td>
							<td>INSTRUCTOR</td>
							<td><pre> 				</pre></td>
						</tr>
					</table>
						<br><br><br>

						<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left">
							<img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that converts decimal to Binary.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
							FILENAME: PTASK1A
						</pre></p>
					
				</body>
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
			<style type="text/css">
				.Student
				{
					text-align: right;
				}
			</style>
			<body>
				<p><b>CHAPTER 1 LABORATORY- EXERCISE 2</b></p>
				<br>
				<table class="Student", border="1">
					<tr>
						<td>NAME</td>
						<td><pre>				</pre></td>
						<td>DATE</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>COURSE</td>
						<td><pre>				</pre></td>
						<td>SECTION</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>CLASS SCHEDULE</td>
						<td><pre>				</pre></td>
						<td>INSTRUCTOR</td>
						<td><pre> 				</pre></td>
					</tr>
				</table>
					<br><br><br>

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left">
					<img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that converts decimal to Hexadecimal.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK1B
					</pre></p>
				
			</body>
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
			<style type="text/css">
				.Student
				{
					text-align: right;
				}
			</style>
			<body>
				<p><b>CHAPTER 1 LABORATORY- EXERCISE 3</b></p>
				<br>
				<table class="Student", border="1">
					<tr>
						<td>NAME</td>
						<td><pre>				</pre></td>
						<td>DATE</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>COURSE</td>
						<td><pre>				</pre></td>
						<td>SECTION</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>CLASS SCHEDULE</td>
						<td><pre>				</pre></td>
						<td>INSTRUCTOR</td>
						<td><pre> 				</pre></td>
					</tr>
				</table>
					<br><br><br>

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left">
					<img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that converts binary to decimal.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK1C
					</pre></p>
				
			</body>
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
			<style type="text/css">
				.Student
				{
					text-align: right;
				}
			</style>
			<body>
				<p><b>CHAPTER 1 LABORATORY- EXERCISE 4</b></p>
				<br>
				<table class="Student", border="1">
					<tr>
						<td>NAME</td>
						<td><pre>				</pre></td>
						<td>DATE</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>COURSE</td>
						<td><pre>				</pre></td>
						<td>SECTION</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>CLASS SCHEDULE</td>
						<td><pre>				</pre></td>
						<td>INSTRUCTOR</td>
						<td><pre> 				</pre></td>
					</tr>
				</table>
					<br><br><br>

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left">
					<img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that converts binary to hexadecimal.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK1D
					</pre></p>
			</body>

			`
		},
		{
			chapterId: 24,
			read_status: 'Disabled',
			title: `Lecture Exercise 5`,
			content: `
			<b>LECTURE EXERCISE 5</b>
			<br>
			<br>

			`
		},
		{
			chapterId: 25,
			read_status: 'Disabled',
			title: `Laboratory Exercise 5`,
			content: `
			<style type="text/css">
				.Student
				{
					text-align: right;
				}
			</style>
			<title>CHAPTER 1 LABORATORY- EXERCISE 5</title>
			<body>
				<p><b>CHAPTER 1 LABORATORY- EXERCISE 5</b></p>
				<br>
				<table class="Student", border="1">
					<tr>
						<td>NAME</td>
						<td><pre>				</pre></td>
						<td>DATE</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>COURSE</td>
						<td><pre>				</pre></td>
						<td>SECTION</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>CLASS SCHEDULE</td>
						<td><pre>				</pre></td>
						<td>INSTRUCTOR</td>
						<td><pre> 				</pre></td>
					</tr>
				</table>
					<br><br><br>

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left">
					<img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that converts Hexadecimal to Decimal.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK1E
					</pre></p>
				
			</body>
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
			<style type="text/css">
					.Student
					{
						text-align: right;
					}
				</style>
			<body>
				<p>CHAPTER 1 LABORATORY- EXERCISE 6</p>
				<br>
				<table class="Student", border="1">
					<tr>
						<td>NAME</td>
						<td><pre>				</pre></td>
						<td>DATE</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>COURSE</td>
						<td><pre>				</pre></td>
						<td>SECTION</td>
						<td><pre> 				</pre></td>
					</tr>
					<tr>
						<td>CLASS SCHEDULE</td>
						<td><pre>				</pre></td>
						<td>INSTRUCTOR</td>
						<td><pre> 				</pre></td>
					</tr>
				</table>
					<br><br><br>

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left">
					<img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that converts Hexadecimal to Binary.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK1F
					</pre></p>
				
			</body>

			`
		},

	]

}