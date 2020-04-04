export const CHAPTER3 = {
	read_status: 'Disabled',
	title: `Chapter III`,
	description: `
				<h1 align = center>CHAPTER 3</h1>
				<h2 align = center>DISK OPERATING SYSTEM COMMANDS</h2>`,
	objectives: [
		`Be familiar with the basic commands utilized in DOS environment.`,
		`Apply the concepts discussed here in hands-on activities.`,
		`Integrate the significance of practice makes perfect attitude in mastering DOS commands.`,
	],
	
	sub: [
		{
			read_status: 'Disabled',
			title: 'Disk Operating System',
			content: `
				<b>DISK OPERATING SYSTEM</b>
				<br/>
				<br/>
				<p>DOS is an acronym for Disk Operating System. DOS traced back its roots from the emergence of the "Personal Computer (PC)". During those times when IBM was about to launch its new generation computer they are in the dilemma of finding a suitable operating system for their machine. Since disks are the predominant method of storing data before, it was the most popular operating system for microcomputer systems. It is an operating system that provides support services for other programs. Also, DOS is a collection of programs provided as files. These programs provide services such as file and memory management support for devices attached to your computer. The illustration below shows how DOS environment looks like.</p>
				<br/>
				<p>IBM sourced out their system to Digital Research, the company that sold their Operating System with its CP/M computer. Digital Research was the leader of those systems that time. But unfortunately, the small company in Seattle, named Microsoft was the company where IBM commissioned to create the operating system for their machines. Microsoft was bold enough to take the challenge of providing IBM with an operating system. MS-DOS was the standard operating system for IBM-compatible personal computers.</p>
				
				<iframe width="560" height="315" src="https://www.youtube.com/embed/EbxukDnRqSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`,
		},
		{
			read_status: 'Disabled',
			title: `Command Prompt`,
			content: `
				<b>COMMAND PROMPT</b>
				<br/>
				<br/>
				<p>You use DOS prompt to enter DOS commands. These commands specify to DOS the exact action you wish to take as well as any special information needed to carry out your request. The illustration below shows the DOS environment.</p>
				<br/>
				<img src="https://ik.imagekit.io/assembly/chapter3/cmdImage1_d9qfSClYD.PNG" alt="Command Prompt" ></img>

				`,
				sub: [
				{
					read_status: 'Disabled',
					title: `CLS`,
					content: `
						<b>CLS</b>
						<br/>
						<br/>
						<p>This command clears all information from the screen when you are working at the command prompt. To enter this command, type <b>CLS</b> and press enter key.</b>
						<img src="https://ik.imagekit.io/assembly/chapter3/cmdImage2_i04LZhmqx.PNG" alt="Command Prompt" >
						</p>

						<iframe width="560" height="315" src="https://www.youtube.com/embed/MNwErTxfkUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

						`
				}
				
			]
		},
		{
			read_status: 'Disabled',
			title: `How to Change Drive`,
			content: `
					<b>HOW TO CHANGE DRIVE</b>
					<br/>
					<br/>
					<p>When you use command prompt entries, a DOS prompt appears to indiate that DOS is ready to process your next entry. The default setting for this prompt displays a letter representing the active drive. To change from drive C to drive A, type <b>A</b> followed by a colon (:) and press enter key.</p>
					<br/>
					<img src="https://ik.imagekit.io/assembly/chapter3/cmdImage3_YFDMWIYGR.PNG" alt="Command Prompt" >
					`,
			sub: [
				{
					read_status: 'Disabled',
					title: `CD`,
					content: `This command changes the current directory. For example, you want to go to WINDOWS subdirectory, just type <b>CD</b> and the subdirectory name and press ENTER key.
					<br/>
					<img src="https://ik.imagekit.io/assembly/chapter3/cmdImage4_ggHo_fMM2.PNG" alt="Command Prompt" >
					<p> To go back to the previous directory, you can use <b>CD</b> or <b>CD/</b>.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage5_68xTENBDt.PNG" alt="Command Prompt" ></p>
					` 
				},
				{
					read_status: 'Disabled',
					title: `DIR`,
					content: `This command lists the content of a directory, to enter this command, just type <b>DIR</b> and press <ENTER> key.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage6_C3N70uX7t.PNG" alt="Command Prompt" ></p>
					`
				},	
				{
					read_status: 'Disabled',
					title: `COPY`,
					content: `This command duplicates file or files to another location/directory. To enter this command, type COPY, followed by a space and the filename, space again, path name and press <ENTER> key.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage7_v6HS6eVZE.PNG" alt="Command Prompt" ></p>
					`
				},
				{
					read_status: 'Disabled',
					title:`REN`,
					content: `This command changes the name of your file and cannot change the name of subdirectories. To enter the command type REN, followed by a space, then the old filename, space again, the name filename and press <ENTER> key.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage8_p36NRMAwO.PNG" alt="Command Prompt" ></p>
					`
				},
				{
					read_status: 'Disabled',
					title: `DEL`,
					content:`This command removes one or more files form a disk. To enter this command, type <b>DEL</b> followed by space, then the filename and press <ENTER> key.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage9_Cahz_JKnp.PNG" alt="Command Prompt" ></p>
					`
				},
				{
					read_status: 'Disabled',
					title: `MD`,
					content: `This command creates a subdirectory using the name you provide preferably eight (8) characters and must start with a letter. To enter the command, type <b>MD</b> followed by a space then the subdirectory name and press <ENTER> key.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage10_tsk6MkqiP.PNG" alt="Command Prompt" ></p>
					`
				},
				{
					read_status: 'Disabled',
					title: `RD`,
					content: `This command removes a specific subdirectory. Make sure that the subdirectory is empty. To enter this command type <b>RD</b> followed by a space then the subdirectory name and press <ENTER> key.
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage11_zIR6_ig5E.PNG" alt="Command Prompt" ></p>
					`
				}
			]
		},		
					
		{
			read_status: 'Disabled',
			title: `List of useful DOS commands`,
			content: `
					<b>Note:</b>
					<br/>
					<p>Example files (e.g., file.ext, file1, file2), file extensions (.ext), directories (e.g., diry, diry1, diry2), commands (e.g., command), and drive letters (e.g., a:, b:, c:) are given, substitute the name of your own file, directory, command, or drive letter. Since DOS is not case sensitive, you can type these commands in either upper or lowercase.'</p>
					`,
			sub: [
				{
					read_status: 'Disabled',
					title: `List of Commands`,
					content:`
<style>
			table, th, td {
  			border: 2px solid black;
  			border-collapse: collapse;
			}
			 th {
			 	text-align: left;
			 	padding-left: 20px;
			 	}
			 tr {
			 	background-color: #E9967A;
			 	}
			</style>
			<body>
			<table style="width:100%">
 				<tr style="background-color:#FA8072">
   					<td colspan="2" align="center" ><b>LIST OF COMMANDS</b></td>
						




							<br/>
							<table width="100%class= "table2">
								<tr>
									<td align="center"><b> COMMAND</b></td>
									<td align="center"><b> MEANING</b></td>
								</tr>
								<tr>
									<td>help</td>
									<td>List commands(only in DOS versions 5 or later)</td>
								</tr>
								<tr>
									<td>help command</td>
									<td>See help for th DOS command.</td>
								</tr>
								<tr>
									<td>command/?</td>
									<td>List switches for the DOS command.</td>
								</tr>
								<tr>
									<td>path=c:\windows ; c: \dos</td>
									<td>Specify in which directories DOS searches for commands or progrmas.</td>
								</tr>
								<tr>
									<td>prompt $p$g</td>
									<td>Make the DOS  prompt display the current directory.</td>
								</tr>
								<tr>
									<td>dir</td>
									<td>List files in the current directory in one column.</td>
								</tr>
								<tr>
									<td>dir /w</td>
									<td>List files in five columns</td>
								</tr>
								<tr>
									<td>dir /p</td>
									<td>List files one page at a time.</td>
								</tr>
								<tr>
									<td>dir *.ext</td>
									<td>List all files with an .ext extension.</td>
								<tr>
									<td>dir z???.ext</td>
									<td>List files with .ext extensions that have four letters and start with z (where z is a character of your choice.)</td>
								</tr>
								<tr>
									<td>dir file.ext /s</td>
									<td>Search for the file.ext in the current directory and all subdirectories under the current directory; most useful if the current directory is the root (i.e., C:\).</td>
								</tr>
								<tr>
									<td>type file.ext</td>
									<td>View the contents of the text file file.ext</td>
								</tr>
								<tr>
									<td>edit file.ext</td>
									<td>Use the DOS editor to edit the file file.ext</td>
								</tr>
								<tr>
									<td>a</td>
									<td>Change to the a:drive.</td>
								</tr>
								<tr>
									<td>md c:\diry</td>
									<td>Make a new subdirectory named diry in the c:\directory.</td>
								</tr>
								<tr>
									<td>cd c:\diry</td>
									<td>Change to subdirectory diry.</td>
								</tr>
								<tr>
									<td>rd c:\diry</td>
									<td>Remove the existing subdirectory named diry.</td>
								</tr>
								<tr>
									<td>del file.ext</td>
									<td>Delete a file named file.ext.</td>
								</tr>
								<tr>
									<td>ren file1 file2</td>
									<td>rename file1 to file2.</td>
								</tr>
								<tr>
									<td>copy file1 file2</td>
									<td>Copy file1 to file2</td>
								</tr>
								<tr>
									<td>verify on</td>
									<td>Turn on verification of copy commands.</td>
								</tr>
								<tr>
									<td>verify off</td>	
									<td>Turn off verification of copy commands.</td>
								</tr>
								<tr>
									<td>xcopy diry1 diry2 /s</td>
									<td>Copy all files and subdirectories in directory diry1 to diry2.</td>
								</tr>
								<tr>
									<td>xcopy diry1 diry2 /p</td>
									<td>Ask for confirmation of each file before copying it from diry1 to diry2.</td>
								</tr>
								<tr>
									<td>diskcopy a:b:</td>
									<td>Duplicate a disk using two floppy drives.</td>
								</tr>
								<tr>
									<td>diskcopy a:a:</td>
									<td>Duplicate a disk using the same floppy drives.</td>
								<tr>
									<td>format a: /s</td>
									<td>Format a bootable floppy disk (include system files).</td>
								</tr>
								<tr>
									<td>backup c:\diry\*.ext a:</td>
									<td>Back up all files with the extension .ext in c:\diry\ to floppy drive a:.</td>
								</tr>
								<tr>
									<td>backup c:\a: /s</td>
									<td>Back up the entire c: drive to floppy drive a:.</td>
								</tr>
								<tr>
									<td>restore a:\c:\diry|*.ext</td>
									<td>Restore backed-up files with the extension .ext in drive a: to the c:\diry\directory.</td>
								</tr>
								<tr>
									<td>restore a:c:\/s</td>
									<td>Restore backed up files and subdirectories form drive a: to c:\.</td>
								</tr>
								<tr>
									<td>ver</td>
									<td>Check the version of DOS.</td>
								</tr>
								<tr>
									<td>time</td>
									<td>Check or correct the system time.</td>
								</tr>
								<tr>
									<td>date</td>
									<td>Check or correct the system date.</td>
								</tr>
								<tr>
									<td>cls</td>
									<td>Clear teh screen.</td>
								</tr>
								<tr>
									<td>scandisk</td>
									<td>Scan and check drive c: for errors. ScanDisk replaces chkdsk (see below) on DOS version 6.0 and above (including Windows 95).</td>
								</tr>
								<tr>
									<td>chkdsk</td>
									<td>Check disk and memory usage of the current disk.</td>
								</tr>
								<tr>
									<td>chkdsk/f</td>
									<td>Firx errors reported by chkdsk.</td>
								</tr>
								<tr>
									<td>chkdsk file.ext</td>
									<td>Check a particular file.</td>
								</tr>
								<tr>
									<td>chkdsk a:</td>
									<td>Check a particular drive (in this case, a floppy in the a: drive).</td>
								</tr>
								<tr>
									<td>mem</td>
									<td>Check memory usage.</td>
								</tr>
							</table>


							<iframe width="560" height="315" src="https://www.youtube.com/embed/MNwErTxfkUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

					`
				},
				{
					read_status: 'Disabled',
					title: `Batch file`,
					content: `
					<b>Batch File</b>
					<p>A Batch File is a text file that contains a sequence of commands for a computer operating system. It's called a batch file because it batches (bundles or packages) into a single file a set of commands that would otherwise have to be presented to the system interactively from a keyboard one at a time. A batch file is usually created for command sequences for which a user has a repeated need. Commonly needed batch files are often delivered as part of an operating system. You initiate the the sequence of commands in the batch file by simply entering the name of the batch file on a command line.</p>
					<p>In the Disk Operating System (DOS), a batch file has the file name extension ".BAT". (The best known DOS batch file is the AUTOEXEC. BAT file that initializes DOS when you start the system). In UNIX-based operating systems, a batch file is called a shell script. In IBM's mainframe VM operating systems, it's called an EXEC. (http://searchwinit.techtarget.com/definition/batchfile)</p>
					<p>Sample of batch program. <b>FILENAME:index.bat</b>
					<p><img src="https://ik.imagekit.io/assembly/chapter3/notepadImg1_sXcbsCVQq.PNG" alt="Command Prompt" ></p>
					<br>
					<p><b>OUTPUT:</b></p>
					<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage12_8eeocdshn.PNG" alt="Command Prompt" ></p>
					<br>
					
					<style>
			table, th, td {
  			border: 2px solid black;
  			border-collapse: collapse;
			}
			 th {
			 	text-align: left;
			 	padding-left: 20px;
			 	}
			 tr {
			 	background-color: #E9967A;
			 	}
			</style>
			<body>
			<table style="width:98%">
 				<tr style="background-color:#FA8072">
   					<td colspan="2" align="center" ><b>BATCH FILE COMMANDS </b></td>
  				</tr>
  				<tr>
  					<td width="150" align="center"><b>COMMANDS</b></td>
  					<td align="center"><b>FUNCTIONS</b></td>
  				</tr>
  				<tr>
  					<td width="200" align="center"><b>START COMMAND</b></td>
  					<th><p><font size="3">The START command can launch a Windows program either name (and its command-line parameters), or by specifying a data file name that is associated with a particular program (one that would automatically launch if you clicked on it in Windows1)<b>(http://www.sumha.org/a/batches.php)</p>
  				</tr>
  				<tr>
  					<td width="200" align="center"><b>IF AND IF NOT COMMANDS</b></td>
  					<th><p><font size="3">There are three (3) variations of the IF and IF NOT commands.</p>
  						<ul style="list-style-type:circle;">
  						<li> IF EXIST: Execute the command line only if a particular file exists:</li>
  						<li> IF EXIST some.txt COPY</li>
  						C:\ some.dll %windir%\SYSTEM\some.dll Compare two text strings, and execute the command line only if they are identical.
  						<li> IF %HostWinBootDiv%=-CSET WinDir=C:\WINDOWS</li>
  						<p> Error Testing: Check the exit code of the most recently run program. If it is equal to ot greater than the number specified, execute the command. IF ERRORLEVEL 4 ERASE trashfile.tmp/P</P>

  						</ul>
  				<tr>
  					<td width="200" align="center"><b>GOTO Command</b></td>
  					<th><p><font size="3">You can set a label in a batch file by  beginning a line with a colon. You can then go directly to that label with the GOTO command. The GOTO command searches both forward and backward in the batch file that is, it simply goes to the label location, regardless of where it is in the file.<b(http://www.aumha.org/a/batches.php).</b></p>
  				</tr>
					`,
				},
				{
					read_status: 'Disabled',
					title:`Menu Creation`,
					content: `
						<p>Sometimes you may want to let a batch file branch one way or another based on user's input. This is especially helpful when you have several related batch processes and would like to combine them into a single application.</p>
						<p>Back in DOS days, a common approach was to construct menus with multiple batch files. For example, you could create one batch file called MENU.BAT that displayed the menu (a series of text lines), inviting a user to type a 1,2,3, etc(or A,B,C, etc) to choose an option (a program to run, or archiving process, or whatever). That menu batch file would end, delivering the user back to a command prompt. You would then have a series of other batch files called 1.BAT, 2.BAT, 3.BAT, etc, so that, when the user typed (for example, 2 and pressed Enter, it would run 2.BAT. (This is way easier to understand if you walk through making one! It's really terribly simple.)</p>
						<p>Today, when users don't live in a DOS command prompt world, we were something slightly more sophisticated-and, fortunately, we have it. There is a pretty cool way to allow user input Windows 2000 and XP, and even better ways that work in Windows Vista.</p>
						<p>In windows 2000 and XP, the SET command has new /A and /P files that allow user input. The latter is especially helpful for our  present purposes. You can accept user input and assign it to a system variable with the following code.</p>
						<p align="center">SET /P variable=<i>PromptString</i></p>
						<p>The <i>PromptString</i> is optional if you could include one(1), it will be displayed on the screen. (Don't forget a space at the end of the prompt, if you want one) for example,</p>
						<p align="center"><SET /P M=Type 1 or 2, then press ENTER.</p>
						<p>will display on the monitor the phrase "Type 1 or 2, then press ENTER." It will then wait for the user to type something and press ENTER. It will then assign whatever character the user types to the system variable %M%, which you can use in other batch file commands.</p>
						<p>Windows Vista has added the CHOICE command. This is pretty cool! It sets you to build sample menus just form this one command. On a Windows Vista computer, open a command prompt and type CHOICE /? to see all the things you can do with it. At the present, this might not be so useful if you are writing batch files that also will be run on Windows XP computers, because the CHOICE commands will not work on those computers-and teh SET/P approach above still works in Vista.</p>
						<p>Sample program of MENU. ><b>FILENAME: MENU.BAT</b></p>
						<p><img src="https://ik.imagekit.io/assembly/chapter3/notepadImg2_C0LPaltxo.PNG" alt="Command Prompt" ></p>
						<br/>
						<p><b>OUTPUT:</b></p>
						<p><img src="https://ik.imagekit.io/assembly/chapter3/cmdImage13_K8Qat_HkF.PNG" alt="Command Prompt" ></p>
					`

				}
				]

		},
		


{
			read_status: 'Disabled',

			title: `Exercise 1`,
			sub:[
			{
				read_status: 'Disabled',
				title: `Lecture`,
				Content:`
				<p>LE1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			`

			},
			{
				read_status: 'Disabled',
				title:`Laboratory`,
				content: `
				<p>LA1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				`
			}
			]

		},
		{
			read_status: 'Disabled',
			title: `Exercise 2`,
			sub:[
			{
				read_status: 'Disabled',
				title:`Lecture`,
				Content: `
				 <p>LE2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				 `
		},
		{
				read_status: 'Disabled',
				title: `Laboratory`,
				content: `
				<p>LA2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				`
			}

			]
		},
		{
			read_status: 'Disabled',
			title: `Exercise 3`,
			sub:[
			{
				read_status: 'Disabled',
				title:`Lecture`,
				Content: `
				 <p>LE3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				 `
		},
		{
				read_status: 'Disabled',

				title: `Laboratory`,
				content: `
				<p>LA3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				`
			}

			]
		},
		{
			read_status: 'Disabled',
			title: `Exercise 4`,
			sub:[
			{
				read_status: 'Disabled',
				title:`Lecture`,
				Content: `
				 <p>LE4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				 `
		},
		{
				read_status: 'Disabled',
				title: `Laboratory`,
				content: `
				<p>LA4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				`
			}

			]
		},
		{
			read_status: 'Disabled',
			title: `Exercise 5`,
			sub:[
			{
				read_status: 'Disabled',
				title:`Lecture`,
				Content: `
				 <p>LE5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				 `
		},
		{
				read_status: 'Disabled',
				title: `Laboratory`,
				content: `
				<p>LA5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				`
			}

			]
		},
		{
			read_status: 'Disabled',
			title: `Exercise 6`,
			sub:[
			{
				read_status: 'Disabled',
				title:`Lecture`,
				Content: `
				 <p>LE6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				 `
		},
		{
				read_status: 'Disabled',
				title: `Laboratory`,
				content: `
				<p>LA6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				`
			}

			]
		},
		]
};