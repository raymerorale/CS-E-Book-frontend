export const CHAPTER1 = {
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
			title: 'Number System',
			content: `
			<b>NUMBER SYSTEM</b>
			<br>
			<br>
			<p>It is a way of counting things and identifying the quantity of something. Likewise, number system refers to the set of symbols used to express quantities as the basis for counting, determining order, comparing amounts, performing calculations, and representing value. It is the set of characters and mathematical rules that are used to represent a digit. Examples include the Arabic, Babylonian, Chinese, Egyptian, Greek, Mayan, and Roman number systems. The ISBN and Dewey Decimal System are examples of number systems used in libraries. Even Social Security System has a number system of its own.</p>`,
		},
		{
			title: `Base`,
			content: `
			<b>BASE</b>
			<br>
			<br>
			<p>It is also called as the <span class=\"bold italic\">radix</span>. Base refers to the number of digits (basic symbols) in a number system. A subcript attached to a number indicates the base radix of that number. 100 (base 2) means 100 (read as one-zero-one), on the other hand, 100 (base 10) means decimal 100 (read as one hundred) subscripts help classify equations where different number systems are combined.</p>`
		},
		{
			title: `Common Used Bases of Number Systems in Assembly Language`,
			content: `
			<b>COMMON USED BASES OF NUMBER SYSTEMS IN ASSEMBLY LANGUAGE</b>
			<br>
			<br>

			`,
			sub: [
				{
					title: `Decimal Number System`,
					content: `
					<b>DECIMAL NUMBER SYSTEM</b>
					<br>
					<br>

					<p>The term decimal comes from <span class=\"latin italic\">\"decem\"</span>  the Latin word for ten. That's why it is a number system with base of ten (10). The decimal system is also called the Hindu-Arabic System and was developed by Hindu Mathematicians in India more than 2,000 years ago. It consists of ten digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.</p>


					"examples": ["25 (base 10)", "890 (base 10)"]
					`
				},
				{
					title: `Binary Number System`,
					content: `
					<b>BINARY NUMBER SYSTEM</b>
					<br>
					<br>

					<p>The term binary comes from the Latin word <span class=\"latin italic\">\"bi\"</span> meaning two at a time. That's why it is a number system with a base of two (2). It consists of two digits: 0 and 1.</p>

				["101 (base 2)", "111000 (base 2)"]
					`
				},
				{
					title: `Hexadecimal Number System`,
					content: `
					<b>HEXADECIMAL NUMBER SYSTEM</b>
					<br>
					<br>

					<p>The term hexadecimal comes from the Greek word <span class=\"greek italic\">\"Hexa\"</span> meaning six and Latin word <span class=\"latin italic\">\"decem\"</span> meaning ten, That's why it is a number system with a base of sixteen (16). It consists of sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. A, B, C, D, E, and F stands for 10, 11, 12, 13, 14, and 15 respectively.</p>

				["BEA (base 2)", "8C0 (base 2)"]

					`
				}
			]
		},
		{
			title: `Equivalences`,
			content: `
			<b>EQUIVALENCES</b>
			<br>
			<br>

			<p>The table below shows the equivalences between decimal, binary and hexadecimal digits.</p>


		"bases": ["Decimal", "Binary", "Hexadecimal"],
		"examples": {
			"decimal": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,64,128,255],
			"binary": "#TODO convert via C# from decimal",
			"hexadecimal": "#TODO convert via C# from decimal"
		}

			`
		},
		{
			title: `Conversion of Number Systems`,
			content: `
			<b>CONVERSION OF NUMBER SYSTEMS</b>
			<br>
			<br>
			`,
			sub: [
				{
					title: `Decimal to Binary`,
					content:  `
					<b>DECIMAL TO BINARY</b>
					<br>
					<br>


					`
				},
				{
					title: `Decimal to Hexadecimal`,
					content: `
					<b>DECIMAL TO HEXADECIMAL</b>
					<br>
					<br>

					`
				},
				{
					title: `Binary to Decimal`,
					content: `
					<b>BINARY TO DECIMAL</b>
					<br>
					<br>


					`
				},
				{
					title: `Binary to Hexadecimal`,
					content: `
					<b>BINARY TO HEXADECIMAL</b>
					<br>
					<br>


					`
				},
				{
					title: `Hexadecimal to Decimal`,
					content: `
					<b>HEXADECIMAL TO DECIMAL</b>
					<br>
					<br>


					`
				},
				{
					title: 	`Hexadecimal to Binary`,
					content: `
					<b>HEXADECIMAL TO BINARY</b>
					<br>
					<br>


					`
				},
			]
		},
		{
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
			title: `Laboratory Exercise 1`,
			content: `
			<b>LABORATORY EXERCISE 1</b>
			<br>
			<br>


			`
		},
		{
			title: `Lecture Exercise 2`,
			content: `
			<b>LECTURE EXERCISE 2</b>
			<br>
			<br>

			`
		},
		{
			title: `Laboratory Exercise 2`,
			content: `
			<b>LABORATORY EXERCISE 2</b>
			<br>
			<br>


			`
		},
		{
			title: `Lecture Exercise 3`,
			content: `
			<b>LECTURE EXERCISE 3</b>
			<br>
			<br>

			`
		},
		{
			title: `Laboratory Exercise 3`,
			content: `
			<b>LABORATORY EXERCISE 3</b>
			<br>
			<br>

			`
		},
		{
			title: `Lecture Exercise 4`,
			content: `
			<b>LECTURE EXERCISE 4</b>
			<br>
			<br>

			`
		},
		{
			title: `Laboratory Exercise 4`,
			content: `
			<b>LABORATORY EXERCISE 4</b>
			<br>
			<br>

			`
		},
		{
			title: `Lecture Exercise 5`,
			content: `
			<b>LEcTURE EXERCISE 5</b>
			<br>
			<br>

			`
		},
		{
			title: `Laboratory Exercise 5`,
			content: `
			<b>LABORATORY EXERCISE 5</b>
			<br>
			<br>

			`
		},
		{
			title: `Lecture Exercise 6`,
			content: `
			<b>LECTURE EXERCISE 6</b>
			<br>
			<br>

			`
		},
		{
			title: `Laboratory Exercise 6`,
			content: `
			<b>LABORATORY EXERCISE 6</b>
			<br>
			<br>

			`
		},

	]

};