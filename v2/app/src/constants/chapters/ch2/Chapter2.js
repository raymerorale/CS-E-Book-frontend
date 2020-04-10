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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
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
				Adding binary numbers is similar to decimal addition. Instead of subtracting ten (10), you'll subtract two(2). If the result is greater than one (1), since binary is a base-2 number system.

				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
			(i.e 1 plus 1)	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Since the result is greater than one (1), subtract two(2) from the result 2. You'll subtract 2 because binary is a base-2 number system.
				</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
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
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
			Step 3: Count the number of times you subtract 2 and that will be the value of the carry over.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
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
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 4: Add the bits in the second place value from the right including the carry over.
			</p>

			<p>
				
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 3</td>
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
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
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<div class="terminal-box">
				Note: Repeat step 2 until the result is less than two (2)
			</div>
			<p>
				
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 3</td>
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> 2</td>
						<td> 2 </td>
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
						<td> 1</td>
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<div class="terminal-box">
				Note: Repeat step 3.
			</div>

			<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 3</td>
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> 2</td>
						<td> 2 </td>
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
						<td> 1</td>
						<td> 0 </td>
					</tr>
				</table>
			</p>



			<p>
				Step 5: Add the digits in the last place value (leftmost digit), including the carry if there is. Repeat steps 2 and 3 if necessary.
			</p>

			<p>
			<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2</td>
						<td> 3</td>
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2</td>
						<td> 2</td>
						<td> 2 </td>
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
						<td> 0</td>
						<td> 1</td>
						<td> 0 </td>
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
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2</td>
						<td> 3</td>
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2</td>
						<td> 2</td>
						<td> 2 </td>
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
						<td> 1</td>
						<td> 0</td>
						<td> 1</td>
						<td> 0 </td>
					</tr>
				</table>
			</p>
			<p>
				Therefore,
			</p>

			<p>
			<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 0</td>
						<td> 1</td>
						<td> 0<sub>2</sub> </td>
					</tr>
					
				</table>
			</p>

			<p>
				You can also use the binary addition table shown below:
			</p>
			
			<p>
				<table style ="border: 1px solid #000; text-align: center;">
				<col width=150>
				<col width=150>
				<col width=150>
					<tr>
						<td> +</td>
						<td> 0</td>
						<td> 1</td>
					</tr>
					<tr>
						<td> 0</td>
						<td> 0</td>
						<td> 1 </td>
					</tr>
					<tr>
						<td> 1</td>
						<td> 1</td>
						<td> 10</td>
					</tr>
				</table>
			</p>

			<p>
				<b>Reminder:</b> If the sum is a 2-bit result (i.e. 10), the leftmost digit (1) is the carry over.
			</p>

			<p>
			<b> C. HEXADECIMAL</b>
			<br/>
				Adding HEX numbers is similar also to decimal addition. Instead of subtracting 10 (10), you'll subtract sixteen (16) if the result is greater than 15, since it is a base-16 number system.
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
				Step 1: Add starting from rigthmost digit
	(i.e. 12 for C plus 14 for E)	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> 26 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Since the result is greater than fifteen (15), subtract	sixteen (16) from the result 26. You'll subtract 16 because Hexadecimal is a base-16 number system.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> 26 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 16 </td>
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
						<td> 10 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 3: Count the number of times you subtract 16 and that will be the value of the carry over.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
				<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> 26 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 16 </td>
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
						<td> 10 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 4: Add the digits in the second place value from the right including the carry over.
			</p>

			<p>
				
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
				<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> 29</td>
						<td> 26 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 16 </td>
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
						<td> 10 </td>
					</tr>
				</table>
			</p>

			<div class="terminal-box">
				Note: Repeat step 2 until the result is less than sixteen (16).
			</div>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> 29</td>
						<td> 26 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> 16</td>
						<td> 16 </td>
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
						<td> 13</td>
						<td> 10 </td>
					</tr>
				</table>
			</p>
			<p>
				Step 5: Add the digits in the last place value (leftmost digit), including the carry if there is. Repeat steps 2 and 3 if necessary.
			</p>
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> <b>11</b></td>
						<td> 29</td>
						<td> 26</td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> 16</td>
						<td> 16</td>
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
						<td> <b>13</b></td>
						<td> <b>10</b></td>
					</tr>
				</table>
			</p>
			<p>
				Step 6: If there are 2-digit results, convert 10,11,12,13,14, and 15 to A,B,C,D,E, and F respectively. And write them down together.
				<br/> 11 = B 		13 = D 		10 = A
			
			<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D</td>
						<td> E<sub>16</sub> </td>
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
						<td> B</td>
						<td> D</td>
						<td> A<sub>16</sub> </td>
					</tr>
				</table>
			</p>
			<p>
				You can also use the hexadecimal addition table shown below:
			</p>
			
			<p>
				<table style ="border: 1px solid #000; text-align: center;">
				
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> +</td>
						<td> 0</td>
						<td> 1</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
					</tr>
					<tr>
						<td> 0</td>
						<td> 0</td>
						<td> 1</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
					</tr>
					<tr>
						<td> 1</td>
						<td> 1</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
					</tr>
					<tr>
						<td> 2</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
					</tr>
					<tr>
						<td> 3</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
					</tr>
					<tr>
						<td> 4</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
					</tr>
					<tr>
						<td> 5</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
					</tr>
					<tr>
						<td> 6</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
					</tr>
					<tr>
						<td> 7</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
					</tr>
					<tr>
						<td> 8</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
					</tr>
					<tr>
						<td> 9</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
					</tr>
					<tr>
						<td> A</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
					</tr>
					<tr>
						<td> B</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
					</tr>
					<tr>
						<td> C</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
					</tr>
					<tr>
						<td> D</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
						<td> 1C</td>
					</tr>
					<tr>
						<td> E</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
						<td> 1C</td>
						<td> 1D</td>
					</tr>
					<tr>
						<td> F</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
						<td> 1C</td>
						<td> 1D</td>
						<td> 1E</td>
					</tr>
				</table>
			</p>

			<p>
				<b>Reminder:</b> If the sum is a 2-bit result (i.e. 10), the leftmost digit (1) is the carry over.
			</p>
			`,
		},	{
			chapterId: 188,
			read_status: 'Disabled',
			title: 'Subtraction',
			content: `
			<b> FOUR FUNDAMENTAL ARITHMETIC OPERATIONS</b>
			<br/><b> SUBTRACTION </b>
			<br/>
			<br/>
			<p>In mathematics, subtraction is one of the four basic arithmetic operations. It is usually denoted by an infix minus sign. The traditional names for the terms of the subtraction: a = b - c; where a is the difference, b is the minuend and c is the subtrahend</p>
			<p>
				<b> A. DECIMAL </b>
				<br/>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 5</td>
						<td> 8</td>
						<td> 1<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
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
				Step 1: Subtract starting from the rightmost digit (i.e. 1 minus 3). Since the minuend 1 is less than the subtrahend 3, borrow 1 unit from the left digit (i.e. 8) which is equivalent to 10 (remember, every unit is equivalent to 10 because decimal is a base-10 number system) and add it to 1, which will be equal to 11 now.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 8 </td>
						<td> 1(11)<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Then subtract 11 to 3.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 8 </td>
						<td> 1(11)<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
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
						<td> 8</td>
					</tr>
				</table>
			</p>

			<p>
				Step 3: The digit 8 will become 7 now because 1 in the ones place value borrow one unit from 8 tens place value			
			</p>


			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 8(7)</td>
						<td> 1(11)<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
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
						<td> 8</td>
					</tr>
				</table>
			</p>

			<p>
				Step 4: Subtract the digits from the tens place value(i.e. 7 minus 3). Given that the minuend is greater than the subtrahend, you'll not borrow 1 unit from 5.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 8(7)</td>
						<td> 1(11)<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
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
						<td> 4</td>
						<td> 8</td>
					</tr>
				</table>
			</p>

			<p>
				Step 5: Subtract the next digits (i.e. 5 minus 2)
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 8(7)</td>
						<td> 1(11)<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
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
						<td> 3</td>
						<td> 4</td>
						<td> 8</td>
					</tr>
				</table>
			</p>
			<p>
				Therefore,
			</p>
		
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 8</td>
						<td> 1<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 3<sub>10</sub> </td>
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
						<td> 3</td>
						<td> 4</td>
						<td> 8<sub>10</sub> </td>
					</tr>
				</table>
			</p>
			<p>
			<b> B. BINARY </b>
			<br/>
				The procedure used in subtracting decimal is similar to binary subtraction. However, instead of ten (10), a single unit you borrow is equivalent to two (2).
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
				Step 1: Subtract strating from the rightmost digit (i.e. 0 minus 1). Since the minuend 0 is less than the subtrahend 1, borrow 1 unit from the left digit (i.e. 1), which is equivalent to 2, and add it up to 0, which will be equal to 2 now.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 0(2)<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
				Step 2: Then subtract 2 to 1.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 0(2)<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
						<td> 1</td>
					</tr>
				</table>
			</p>
			<p>
				Step 3: The digit 1 will become 0 now.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1(0)</td>
						<td> 0(2)<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
						<td> 1</td>
					</tr>
				</table>
			</p>
	
			<p>
				Step 4:  0 minus 1 cannot be, so borrow 1 unit from the left digit again. 0 becomes 2 now.			
			</p>


			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1(2)</td>
						<td> 0(2)<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
						<td> 1</td>
					</tr>
				</table>
			</p>

			<p>
				Step 5: Subtract the digits (i.e. 2 minus 1)
			</p>
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1(2)</td>
						<td> 0(2)<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
						<td> 1</td>
						<td> 1</td>
					</tr>
				</table>
			</p>

			<p>
				Step 6: The leftmost digit becomes 0. Since there are no numbers to subtract, that's the end of the subtraction process
			</p>
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1(0)</td>
						<td> 1(0)</td>
						<td> 0(2)<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
						<td> 1</td>
						<td> 1</td>
					</tr>
				</table>
			</p>
			<p>
				Therefore,
			</p>
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 0<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td>  </td>
						<td> 1</td>
						<td> 1<sub>2</sub> </td>
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
						<td> 1</td>
						<td> 1</td>
					</tr>
				</table>
			</p>
			<p>
			<b> C. HEXADECIMAL</b>
			<br/>
				Hexadecimal is similar to decimal. If the subtrahend is greater than the minuend, you borrow 1 unit, which is equal to 16 instead of 10.
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> B </td>
						<td> E </td>
						<td> A<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> F </td>
						<td> 0<sub>16</sub> </td>
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
				Step 1:  Subtract starting from the rightmost digit (i.e. A (10) minus 0).
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> B </td>
						<td> E </td>
						<td> A<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> F </td>
						<td> 0<sub>16</sub> </td>
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
						<td> 10 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Then subtract the digits in the next place value (i.e. E(14) minus F(15)). Like in decimal system, you have to borrow 1 unit from the left digit and that 1 unit is equal to 16. Add it to E or 14 and E becomes 30.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> B </td>
						<td> E(30) </td>
						<td> A(10)<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> F </td>
						<td> 0<sub>16</sub> </td>
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
						<td> 10 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 3: Subtract the digits (i.e. 30 minus 15)
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> B(10) </td>
						<td> E(30) </td>
						<td> A(10)<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> F </td>
						<td> 0<sub>16</sub> </td>
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
						<td> 15</td>
						<td> 10 </td>
					</tr>
				</table>
			</p>
	
			<p>
				Step 4: The leftmost digits become 10. Since there are no numbers to subtract, that's the end of the subtraction process, just bring 10 down.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> B(10)</td>
						<td> E(30) </td>
						<td> A(10)<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> F </td>
						<td> 0<sub>16</sub> </td>
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
						<td> 10</td>
						<td> 15</td>
						<td> 10 </td>
					</tr>
				</table>
			</p>


			<p>
				Step 5: If necessary, convert the 2-digit difference to its hexadecimal character.
				<br/>10 = A 	15 = F 	10 = A
			</p>
			<p>
				Therefore,
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> B </td>
						<td> E </td>
						<td> A<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> F </td>
						<td> 0<sub>16</sub> </td>
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
						<td> A </td>
						<td> F </td>
						<td> A<sub>16</sub> </td>
					</tr>
				</table>
			</p>

			`,
		},
		{
			chapterId: 189,
			read_status: 'Disabled',
			title: 'Multiplication',
			content: `
			<b> FOUR FUNDAMENTAL ARITHMETIC OPERATIONS</b>
			<br/><b> MULTIPLICATION </b>
			<br/>
			<br/>
			<p>In its simplest form, multiplication is a quick way of adding identical numbers. The result of multiplying numbers is called a product. The numbers being multiplied are called coefficients or factors, and individually as the multiplicand and multiplier.</p>
			<p>
				<b> A. DECIMAL </b>
				<br/>
				To multiply two numbers in base-10, let's have the following:
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td>  </td>
						<td> </td>
						<td>  </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 1: Multiply the digits of the rightmost column (i.e. 6 times 5) and the product is 30. The leftmost digit of the product is to be carried over 8 and 0 should be written below 6.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3</td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
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
						<td> </td>
						<td> </td>
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Then, multiply 6 again to the digit on the second column (i.e. 6 times 8). Add the product to the carry over 3, the result is 51. 1 should be written before the product and 5 is carried over 3.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 3 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
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
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
			Step 3: Again, multiply 6 to the digit on the third column (i.e. 6 times 3). Add the prodcut to the carry over 5, the result is 23. Since there is no number in the fourth column, write 23 before 1 and 0.		
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 3 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 1 </td>
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 4: Now, multiply 9 to the digit on the first column of the multiplicand (i.e. 9 times 5) and the product is 45. The leftmost digit of the product is to be carried over 8 and 5 should be written below.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 4 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 3 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 1 </td>
						<td> 0 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 5: Then, multiply 9 again to the digit on the second column (i.e. 9 times 8). Add the product to the carry over 4, the result is 76. 6 should be written before the product 5 and 7 is the carry over.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7</td>
						<td> 4 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 3</td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 1 </td>
						<td> 0 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 6 </td>
						<td> 5 </td>
						<td> </td>
					</tr>
				</table>
			</p>
			
			<p>
				Step 6: Again, multiply 9 to the digit on the third column (i.e. 9 times 3). Add the product to the carry over 7, and the result is 34. Since there is no number in the fourth column, write 34 before 6 and 5. 
			</p>
		
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7 </td>
						<td> 4</td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 3 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 1 </td>
						<td> 0 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 3</td>
						<td> 4</td>
						<td> 6</td>
						<td> 5 </td>
						<td> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 7: Add the temporary products starting from the rightmost side and there you have the final answer.
			</p>
		
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 7 </td>
						<td> 4</td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 5 </td>
						<td> 3 </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
						<td> 3 </td>
						<td> 1 </td>
						<td> 0 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 3</td>
						<td> 4</td>
						<td> 6</td>
						<td> 5 </td>
						<td> </td>
						</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 6 </td>
						<td> 9 </td>
						<td> 6 </td>
						<td> 0 <sub>10</sub></td>
					</tr>
				</table>
			</p>

			<p>
				Therefore,
				<br/>

				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 8 </td>
						<td> 5<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 9 </td>
						<td> 6<sub>10</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 6 </td>
						<td> 9 </td>
						<td> 6 </td>
						<td> 0 <sub>10</sub></td>
					</tr>
				</table>
			</p>			
			<p>			
			<p>
			<b> B. BINARY </b>
			<br/>
				The process of binary multiplication is similar to decimal number system. Though, when you add the temporary products, you'll use the concept of binary addition.
				<br/>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> Example: </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
				Step 1: Multiply the bits on the first column (rightmost). 1 times 1 is equal to 1; write the result below the multiplier.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Multiply 1 again to the digit on the second column of the multiplicand (i.e. 1 times 0), write the result below the multiplier before the product 1.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
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
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 3: Now multiply 1 to the digit on the third column of the multiplicand (i.e. 1 times 1), write the result below the multiplier before the product 0.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
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
						<td> 2 </td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> </td>
						<td> 2 </td>
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
						<td> 0 </td>
					</tr>
				</table>
			</p>

			<p>
				Step 4: Do the same thing with the next bit; just repeat steps 1 to 3 until all the bits of the multiplier have been multiplied.
			</p>
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> </td>
					</tr>
				</table>
			</p>
			<br/>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
					</tr>
				</table>
			</p>
			<br/>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 5: Add using binary addition concept.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
						</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 <sub>2</sub></td>
					</tr>
				</table>
			</p>

			<p>
				Therefore,
				<br/>

				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1<sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 <sub>2</sub></td>
					</tr>
				</table>
			</p>
			<p>
			<b> C. HEXADECIMAL</b>
			<br/>
				Use the table below to assist in Hexadecimal multiplication. The process is the same just like the previous number systems, but when adding use the concept of hexadecimal addition.
			<p>
				<table style ="border: 1px solid #000; text-align: center;">
				
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> +</td>
						<td> 0</td>
						<td> 1</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
					</tr>
					<tr>
						<td> 0</td>
						<td> 0</td>
						<td> 1</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
					</tr>
					<tr>
						<td> 1</td>
						<td> 1</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
					</tr>
					<tr>
						<td> 2</td>
						<td> 2</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
					</tr>
					<tr>
						<td> 3</td>
						<td> 3</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
					</tr>
					<tr>
						<td> 4</td>
						<td> 4</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
					</tr>
					<tr>
						<td> 5</td>
						<td> 5</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
					</tr>
					<tr>
						<td> 6</td>
						<td> 6</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
					</tr>
					<tr>
						<td> 7</td>
						<td> 7</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
					</tr>
					<tr>
						<td> 8</td>
						<td> 8</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
					</tr>
					<tr>
						<td> 9</td>
						<td> 9</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
					</tr>
					<tr>
						<td> A</td>
						<td> A</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
					</tr>
					<tr>
						<td> B</td>
						<td> B</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
					</tr>
					<tr>
						<td> C</td>
						<td> C</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
					</tr>
					<tr>
						<td> D</td>
						<td> D</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
						<td> 1C</td>
					</tr>
					<tr>
						<td> E</td>
						<td> E</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
						<td> 1C</td>
						<td> 1D</td>
					</tr>
					<tr>
						<td> F</td>
						<td> F</td>
						<td> 10</td>
						<td> 11</td>
						<td> 12</td>
						<td> 13</td>
						<td> 14</td>
						<td> 15</td>
						<td> 16</td>
						<td> 17</td>
						<td> 18</td>
						<td> 19</td>
						<td> 1A</td>
						<td> 1B</td>
						<td> 1C</td>
						<td> 1D</td>
						<td> 1E</td>
					</tr>
				</table>
			</p>

			<p>
				Reminder: If the product is a 2-digit result (i.e. 1B), the leftmost digit (1) is the carry over.	
				<table>
					<col width="150">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> 8<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
						</tr>
					</table>
			</p>

		
			<p>
				Step 1: Multiply the digits on the first column (rightmost). 8 times 0 is equal to 0; write the result below the multiplier.
				<br/>
				<table>
					<col width="150">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> 8<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
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
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 0<sub>16</sub> </td>
						</tr>
					</table>
			</p>

			<p>
				Step 2: Again, multiply 8 to the digit on the second column of the multiplicand (i.e. 8 times 11(B)), and the result is 58. Write 8 before the product 0 and 5 is carried over 1.
			</p>

			<p>
				<table>
					<col width="150">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 5</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> B<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
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
							<td> </td>
							<td> </td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
					</table>
			</p>

			<p>
				Step 3: Now, multiply 8 to the digit on the third column of the multiplicand (i.e. 8 times 1). Add the product to the carry over 5(i.e. 8 + 5 = 13(D)), and write the result below.	
			</p>

			<p>
				<table>
					<col width="150">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 5</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> B<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
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
							<td> </td>
							<td> D</td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
					</table>
			</p>

			<p>
				Step 4: Do the same thing  with the most digit; just repeat steps 1 to 3 until all the digits of the multiplier have been multiplied.
			</p>

			<p>
				<table>
					<col width="150">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
					<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 5</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> B<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 6</td>
							<td> 0</td>
							<td> D</td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
					</table>

					<br/>

					<table>
						<col width="150">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 5</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> B<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 6</td>
							<td> 0</td>
							<td> D</td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C</td>
							<td> 1</td>
							<td> B</td>
							<td> 0</td>
							<td> </td>
						</tr>
					</table>
					</p>

				<p>
					Step 5: Add by using  the concept of hexadecimal addition.
					<br/>
					<table>
						<col width="150">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 5</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> B<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 6</td>
							<td> 0</td>
							<td> D</td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C</td>
							<td> 1</td>
							<td> B</td>
							<td> 0</td>
							<td> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> 1</td>
							<td> 2</td>
							<td> 2</td>
							<td> 8</td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
					</table>
					
					<br/>
					Therefore,
					<br/>
					<table>
						<col width="150">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<col width="50">
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> C </td>
							<td> 1 </td>
							<td> B </td>
							<td> 0<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> x </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> 1 </td>
							<td> B<sub>16</sub> </td>
						</tr>
						<tr>
							<td> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
							<td> <hr/> </td>
						</tr>
						<tr>
							<td> </td>
							<td> </td>
							<td> 1</td>
							<td> 2</td>
							<td> 2</td>
							<td> 8</td>
							<td> 8</td>
							<td> 0<sub>16</sub> </td>
						</tr>
					</table>
					
			</p>

			
				Step 5: Add the digits in the last place value (leftmost digit), including the carry if there is. Repeat steps 2 and 3 if necessary.
			</p>
			<p>
				<table>
				<col width="150">
				<col width="50">
				<col width="50">
				<col width="50">
				<col width="50">
					<tr>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1 </td>
						<td>  </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> A </td>
						<td> F </td>
						<td> C<sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td>  </td>
						<td> D </td>
						<td> E<sub>16</sub> </td>
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
						<td> <b>11</b></td>
						<td> 29</td>
						<td> 26</td>
					</tr>
					<tr>
						<td> </td>
						<td> - </td>
						<td> </td>
						<td> 16</td>
						<td> 16</td>
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
						<td> <b>13</b></td>
						<td> <b>10</b></td>
					</tr>
				</table>
			</p>


			`,
		}, {
			chapterId: 190,
			read_status: 'Disabled',
			title: 'Division',
			content: `
			<b> FOUR FUNDAMENTAL ARITHMETIC OPERATIONS</b>
			<br/><b> DIVISION </b>
			<br/>
			<br/>
			<p>In mathematics, especially in elementary arithmetic, division, is an operation, which is the reverse of multiplication, and sometimes can be interpreted as repeated subtraction. The expression a = b / c, a is called the quotient, b the dividend, and c the divisor.</p>
			<p>
				<b> A. DECIMAL </b>
				<br/>
				This is how to divide decimal numbers:
				<br/>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> Example: </td>
						<td> 35<sub>10</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 5</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 8<sub>10</sub> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 1: Since the divisor is a 2-digit number, divide it to the first 2 digits of the dividend starting from the left. If the 2-digit dividend is less than the divisor, include the next digit and divide the numbers (i.e. 158 divided by 35). Write the quotient above the dividend in line with the last digit, which is 8.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 4</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 35<sub>10</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 5</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 8<sub>10</sub> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Multiply the quotient to the divisor (i.e. times 35). Write the product below 158.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 4</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 35<sub>10</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 5</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 8<sub>10</sub> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> -</td>
						<td> 1</td>
						<td> 4</td>
						<td> 0</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 3: Subtract the dividend and the product (i.e. 158 minus 140). Write the difference below 140.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 4</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 35<sub>10</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 5</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 8<sub>10</sub> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> -</td>
						<td> 1</td>
						<td> 4</td>
						<td> 0</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 8</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			</p>
			<p>
				Step 4: If the difference is less than the divisor and no other digit is to be brought down from the dividend, that difference is considered the remainder. Otherwise, repeat steps 1 to 3.
			</p>
			
			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 4</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 35<sub>10</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 5</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 8<sub>10</sub> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> -</td>
						<td> 1</td>
						<td> 4</td>
						<td> 0</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 8</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			</p>


			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 4</td>
						<td> </td>
						<td> r.</td>
						<td> 18</td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 35<sub>10</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 5</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 8<sub>10</sub> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
				</table>
			</p>
			<p>
		
			<p>
				<b> B. BINARY </b>
				<br/>
				There  is a resemblance between decimal and binary division but getting the difference uses binary subtraction concept.
				<br/>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> Example: </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 1: Since the divisor is a 2-digit number, divide it to the first 2 digits of the dividend starting from the left. If the 2-digit dividend is less than the divisor, include the next digit and divide the numbers (i.e. 101 divided by 11). Write the quotient above the dividend in line with the last digit, which is 1.	
			</p>

			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 2: Multiply the quotient to the divisor (i.e. times 11). Write the product below 101.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 3: Subtract the dividend and the product (i.e. 101 minus 11). Write the difference below 11.
			</p>

			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			</p>
			<p>
				Step 4: Bring down the fourth digit (i.e. 1). 101 will now be the dividend. Repeat steps 1 to 3 again until the digits have been brought down and divided.
			</p>
			
			<p>
				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
				<br/>


				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
				<br/>

				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
				<br/>	


				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
				<br/>

				<table>
					<col width="150">
					<col width="60">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
				<br/>

				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
				<br/>

				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			</p>

			<p>
				Step 5: If the difference is less than the divisor and no other digits is to be brought down from the dividend, that difference is considered the remainder.
			</p>

			<p>

				<table>
				<col width="150">
				<col width="60">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
				<col width="30">
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> 11<sub>2</sub></td>
						<td style="border: solid 0 #000; border-left-width:1px; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 0</td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1 </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> 1<sub>2</sub></td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
						<td style="border: solid 0 #000; border-top-width:1px; padding-left:0.5ex"> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> - </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1</td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td>  </td>
						<td>  </td>
						<td> 1 </td>
						<td> 0</td>
						<td> 1</td>
						<td> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> </td>
						<td> </td>
					</tr>
				</table>
			
			</p>

			`,
		}, { //find exer1
			chapterId: 191,
			read_status: 'Disabled',
			title: `Lecture Exercise 1`,
			content: `
			<b>LECTURE EXERCISE 1</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LECTURE - EXERCISE 1 </b></td>
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
  			<p>Arithmetic Binary Addition</p>
  			

  			<p>
				<table id="q1">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>


				<table id="q2">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>2.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>
				
				<table id="q3">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>3.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q4">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>4.</b> </td>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q5">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>5.</b> </td>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> + </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>

  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, {//find exer1lab
			chapterId: 192,
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
				<p>CHAPTER 2 LABORATORY- EXERCISE 1</p>
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

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left"><img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that performs Arithmetic BINARY ADDITION.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK2A
					</pre></p>
				
			</body>
			`
		}, { //find exer2
			chapterId: 193,
			read_status: 'Disabled',
			title: `Lecture Exercise 2`,
			content: `
			<b>LECTURE EXERCISE 2</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LECTURE - EXERCISE 2 </b></td>
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
  			<p>Arithmetic Hexadecimal Addition</p>
  			

  			<p>
				<table id="q1">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 5 </td>
						<td> 5 </td>
						<td> 6 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> 7 </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 7 </td>
						<td> 5 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>


				<table id="q2">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>2.</b> </td>
						<td> </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 8 </td>
						<td> 2 </td>
						<td> 2 </td>
						<td> 9 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> 5 </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 8 </td>
						<td> 9 </td>
						<td> 8 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>
				
				<table id="q3">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>3.</b> </td>
						<td> </td>
						<td> B </td>
						<td> F </td>
						<td> A </td>
						<td> C </td>
						<td> E </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> B </td>
						<td> C </td>
						<td> A </td>
						<td> E </td>
						<td> D </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

	
				<table id="q4">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>4.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> F </td>
						<td> 4 </td>
						<td> C </td>
						<td> 3 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> 2 </td>
						<td> 4 </td>
						<td> D </td>
						<td> E </td>
						<td> 9 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q5">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>5.</b> </td>
						<td> </td>
						<td> F </td>
						<td> E </td>
						<td> F </td>
						<td> E </td>
						<td> F </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> +</td>
						<td> B </td>
						<td> B </td>
						<td> C </td>
						<td> A </td>
						<td> F </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				</p>
  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, {
			chapterId: 194,
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
				<p>CHAPTER 2 LABORATORY- EXERCISE 2</p>
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

					<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left"><img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that performs Arithmetic HEXADECIMAL ADDITION.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
						FILENAME: PTASK2B
					</pre></p>
				
			</body>

			`
		},  {
			chapterId: 195,
			read_status: 'Disabled',
			title: `Lecture Exercise 3`,
			content: `
			<b>LECTURE EXERCISE 3</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LECTURE - EXERCISE 3 </b></td>
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
  			<p>Arithmetic Binary and Hexadecimal Subtraction</p>
  			

  			<p>
				<table id="q1">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q2">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td> 0 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>
	
				<table id="q3">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>3.</b> </td>
						<td> </td>
						<td> B </td>
						<td> A </td>
						<td> 9 </td>
						<td> 8 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td> A </td>
						<td> A </td>
						<td> B </td>
						<td> 7 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

	
				<table id="q4">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>4.</b> </td>
						<td> </td>
						<td> 7 </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 5 </td>
						<td> 5 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td> 5 </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 5 </td>
						<td> 6 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q5">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>5.</b> </td>
						<td> </td>
						<td> F </td>
						<td> F </td>
						<td> 2 </td>
						<td> 5 </td>
						<td> D </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> -</td>
						<td> A </td>
						<td> D </td>
						<td> F </td>
						<td> A </td>
						<td> 8 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
						<td> 2 </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 8 </td>
						<td> 9 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				,/p>
  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, {
			chapterId: 196,
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
					<p>CHAPTER 2 LABORATORY- EXERCISE 3</p>
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

						<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left"><img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that performs Arithmetic BINARY SUBTRACTION.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
							FILENAME: PTASK2C
						</pre></p>
					
				</body>
			`
		},
		//find exer4
		{
			chapterId: 197,
			read_status: 'Disabled',
			title: `Lecture Exercise 4`,
			content: `
			<b>LECTURE EXERCISE 4</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LECTURE - EXERCISE 4 </b></td>
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
  			<p><b>Missing page</b></p>
  			
  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, {
			chapterId: 198,
			read_status: 'Disabled',
			title: `Laboratory Exercise 4`,
			content: `
			<b>LABORATORY EXERCISE 4</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LABORATORY - EXERCISE 4 </b></td>
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
  			<p><b>Book Typo (same as Lecture Exercise 5)</b><p>
  			


  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		},
		//find exer5
		{
			chapterId: 199,
			read_status: 'Disabled',
			title: `Lecture Exercise 5`,
			content: `
			<b>LECTURE EXERCISE 5</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LECTURE - EXERCISE 5 </b></td>
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
  			<p>Arithmetic Binary and Hexadecimal Multiplication</p>
  			
  			<p>
				<table id="q1">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q2">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>
	
				<table id="q3">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>3.</b> </td>
						<td> </td>
						<td> 2 </td>
						<td> 5 </td>
						<td> 6 </td>
						<td> 7 </td>
						<td> 7 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x</td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 2 </td>
						<td> 1 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

	
				<table id="q4">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>4.</b> </td>
						<td> </td>
						<td> 4 </td>
						<td> 5 </td>
						<td> 8 </td>
						<td> 9 </td>
						<td> 1 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x</td>
						<td> </td>
						<td> </td>
						<td> 4 </td>
						<td> 3 </td>
						<td> 2 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q5">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>5.</b> </td>
						<td> </td>
						<td> B </td>
						<td> F </td>
						<td> A </td>
						<td> D </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> x</td>
						<td> </td>
						<td> 1 </td>
						<td> 3 </td>
						<td> 5 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
			</p>
  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, {
			chapterId: 200,
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
					<p>CHAPTER 2 LABORATORY- EXERCISE 4</p>
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

						<p><img src="https://ik.imagekit.io/assembly/logos/cpluspluslogo_inWQzTtCI.png" width="60" height="75" align="left"><img src="https://ik.imagekit.io/assembly/logos/javalogo_3mvJxQB-U.png" width="120" height="180" align="left">Create a C++/ JAVA program that performs Arithmetic HEXADECIMAL MULTIPLICATION.<pre style="font-family: serif; font-size: 20; font-weight: bold;">
							FILENAME: PTASK2D
						</pre></p>
					
				</body>

			`
		},
		//find exer5
		{
			read_status: 'Disabled',
			title: `Lecture Exercise 5`,
			content: `
			<b>LECTURE EXERCISE 5</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 LECTURE - EXERCISE 5 </b></td>
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
  			<p>Arithmetic Binary and Hexadecimal Division</p>
  			
  			<p>
				<table id="q1">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> / </td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q2">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>1.</b> </td>
						<td> </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> / </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> 1 </td>
						<td> 1 </td>
						<td> 0 </td>
						<td> 1 </td>
						<td> <sub>2</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>2</sub></td>
					</tr>
				</table>
				<br/>
	
				<table id="q3">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>3.</b> </td>
						<td> </td>
						<td> </td>
						<td> 7 </td>
						<td> 6 </td>
						<td> 5 </td>
						<td> 5 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> /</td>
						<td> </td>
						<td> </td>
						<td> 1</td>
						<td> 2 </td>
						<td> 3 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

	
				<table id="q4">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>4.</b> </td>
						<td> </td>
						<td> 4 </td>
						<td> 5 </td>
						<td> 8 </td>
						<td> 9 </td>
						<td> 1 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> / </td>
						<td> </td>
						<td> </td>
						<td> 4 </td>
						<td> 3 </td>
						<td> 2 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				<br/>

				<table id="q5">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<col width="30">
					<tr>
						<td> <b>5.</b> </td>
						<td> </td>
						<td> </td>
						<td> B </td>
						<td> F </td>
						<td> A </td>
						<td> D </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> / </td>
						<td> </td>
						<td> </td>
						<td> 3 </td>
						<td> 1 </td>
						<td> 5 </td>
						<td> <sub>16</sub> </td>
					</tr>
					<tr>
						<td> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> <hr/> </td>
						<td> </td>
					</tr>

					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> <sub>16</sub></td>
					</tr>
				</table>
				</p>

  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		}, {
			chapterId: 201,
			read_status: 'Disabled',
			title: `Case Study 1`,
			content: `
			<b>CASE STUDY 1</b>
			<style>
			table#t01, table#t02, table#t01 th, table#t01 td, table#t02 th, table#t02 td
			{
  				border: 1px solid black;
  				border-collapse: collapse;
  				font-size: 18px;  				
			}
			table#t01
			{
				width:99%;
			}
			table#t01 th, table#t02 th
			{
				width: 31%;
				text-align: right;
				padding-right: 5px;
			}
			table#t01 td, table#t02 td
			{
				padding-left: 3px;
				padding-right: 3px;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button 
			{
 			-webkit-appearance: none;
  			margin: 2;
  			}
			</style>
			<body>
			<table id="t02" style="width:99%">
				<tr>
   					<td align="left" ><b> CHAPTER 2 CASE STUDY 1 </b></td>
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
  			<p>Create a C++/JAVA program that performs MULTIPLICATION AND DIVISION OF BINARY AND HEXADECIMAL.</p>
  			<p><b>FILENAME: CASE1</b></p>
  			
  			<p>Sample Output:
  			<br/>
  			<br/><b>NUMBER SYSTEM</b>
  			<br/>
  			<br/> 1. BINARY
  			<br/> 2. HEXADECIMAL
  			<br/> ENTER YOUR CHOICE: <b><u>1</u></b>
 			<br/>
  			<br/> ENTER FIRST BINARY NUMBER: 1011
  			<br/> ENTER SECOND BINARY NUMBER: 11
 			
 			<br/>
  			<br/><b>ARITHMETIC OPERATION</b>
  			<br/>
  			<br/> 1. MULTIPLICATION
  			<br/> 2. DIVISION
  			<br/> ENTER YOUR CHOICE: <b><u>1</u></b>
 			<br/>
  			<br/> ENTER FIRST BINARY NUMBER: 1011
  			<br/> ENTER SECOND BINARY NUMBER: 11
 			<br/>
  			<br/> <b>RESULT: 100001</b>
  			 			 			
  			</p>


  		<br/>
  		<form action="/action_page.php">
 		<input type="submit" value="SUBMIT">
		</form>
			</body></table>

			`
		},
	]
};