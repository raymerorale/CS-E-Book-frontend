export const CHAPTER2 = {
	chapterId: 28,
	read_status: 'Disabled',
	title: 'Chapter II',
	description: `<h1 align = center>CHAPTER 2</h1>
				<h2 align = center>ARITHMETIC OPERATIONS</h2>`,
	objectives: [
		`Distinguish the different processes of performing diverse arithmetic operations on various number systems.`,
		`Add, Subtract, Multiply, and Divide Numbers following the standard steps.`,
		`Develop an attitude of handling numbers and its mathematical operations in detail.`
	],			
	sub: [
		{
			chapterId: 29,
			read_status: 'Disabled',
			title: 'Addition',
			content: `
			<b> FOUR FUNDAMENTAL ARITHMETIC OPERATIONS</b>
			<br/><b> ADDITION </b>
			<br/>
			<br/>
			<p>Addition is one of the basic operations of arithmetic. In its simplest form, addition combines two numbers, the augend and addend, into a single number, called the sum</p>
			<p>
				<b> A. DECIMAL </b>
				<br/>
				When you learned arithmetic in school, you memorized how to add decimal numbers the easier way. However, in this context, it wil demonstrate the long method of adding decimal numbers. This Method will be helpful when you'll add
		binary and hexadecimal numbers.
				<table>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 1: Add starting the rightmost digit
			(i.e 8 plus 9)	
			</p>

			<p>
				<table>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 17 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Since the result is greater than nine(9), subtract ten (10) from the result 17. You'll subtract 10 because decimal is a base-10 number system.	
			</p>

			<p>
				<table>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 17 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 10 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7 <sub>10</sub> </td>
					</tr>
				</table>
			</p>

			<div class="terminal-box">
				NOTE: Repeat step 2 until the result is a single-digit value or less than ten (10).
			</div>

			<p>
			Step 3: Count the number of times you subtract 10 and that will be the value of the carry over.		
			</p>

			<p>
				<table>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 17 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 10 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7 <sub>10</sub> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 4: Add the digits in the tens place value, including the carry.
			</p>

			<p>
				<table>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 6 </td>
						<td> 17 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 10 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7 <sub>10</sub> </td>
					</tr>
				</table>
			</p>

			<div class="terminal-box">
				Note: Because the result is less than ten (10), no need to subtract it.
			</div>

			<p>
				Step 5: Add the digits in the last place value(leftmost digit), including the carry of there is.
			</p>

			<p>
				<table>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 6 </td>
						<td> 17 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 10 <sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7 <sub>10</sub> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 6: Write down together the resulting digits and that is the final answer. 
				<br/>
				Therefore,
			</p>
		
			<p>
				<table>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> 8<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 2 </td>
						<td> 0 </td>
						<td> 9<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 6 </td>
						<td> 17 <sub>10</sub> </td>
					</tr>
				</table>
			</p>

			<p>
			<b> B. BINARY </b>
			<br/>


			`,
		},
	]
};