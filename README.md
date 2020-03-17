# CS E-Book 
CEIT-03-1001p

---

## App Structure

Base folder: /v2/app

- **v2**[]
  - **app**[]
    - **src**[]
      - **assets**[]
        - dito madalas po images, icons, fonts, etc. pwede gawing by folder dipende sa gusto n'yong structure
      - **components**[]
        - reusable components, can be input inside other components (components is lahat ng .Vue na files)
        - **NavigationToolbar.vue**
          - ito yung may PREV and NEXT buttons
          - ![NavigationToolbar vue](https://user-images.githubusercontent.com/53966742/76689267-249ea080-666f-11ea-9bdd-b8dd9e2c8a66.png)
        - **PageHeader.vue**
          - yung nasa pinakataas na component may laman ng "Logo" at "COE123 - ASSEMBLY"
      - **constants**[]
        - files with constant variables for the content of the whole app, dito ilalagay ung static texts na ireread sa v2/app/src/modules/Content/* 
      - **modules**[]
        - madalas dito nilalagay ung components for pages ng app like BooksList, Content, Login pages
        - **BooksList**[]
          - page for books list
          - **index.vue**
            - component na niloload upon navigating to localhost:8080/#/books-list
            - ![BooksList_index vue](https://user-images.githubusercontent.com/53966742/76689272-3c762480-666f-11ea-820a-e59becdf7bf9.png)
        - **Content[]** 
          - **ChapterListContainter**[]
            - **index.vue**
              - ito yung pinakaleft side naglalaman ng list of chapters, subchapters, subsubchapters and clickable each item para mapalitan yung laman ni PageContentContainer, kada click sa isang item nito magpapasa sya ng dapat na laman ng PageContentContainer/index.vue
              - ![ChapterListContainer vue](https://user-images.githubusercontent.com/53966742/76689281-4730b980-666f-11ea-8166-deebdd44d300.png)
            - **ListContainer.vue**
              - dynamic component lang to para sa madaming sub ng chapter (kinocall sa loob nitong ChapterListContainer/index.vue)
          - **PageContentContainer**[]
            - **index.vue**
              - ito yung naglalaman ng content na ipapasa galing sa ChapterListContainer, kinocall din dito si NavigationToolbar.vue
              - ![PageContentContainer vue](https://user-images.githubusercontent.com/53966742/76689310-9b3b9e00-666f-11ea-8656-99a0ee870f37.png)
          - **index.vue**
            - component na niloload upon navigating to localhost:8080/#/content, iniimport nito sina ChapterListContainer at PageContentContainer, kinocall dito si PageHeader.vue
            - ![Content_index vue](https://user-images.githubusercontent.com/53966742/76689283-51eb4e80-666f-11ea-8430-65e495ed7f50.png)
        - **Login**[]
          - **index.vue**
            - niloload upon navigating to localhost:8080/#/
            - ![Login_index vue](https://user-images.githubusercontent.com/53966742/76689308-937bf980-666f-11ea-86b9-e80a8ba8b0b8.png)
      - **router**[]
        - andito yung routes ng buong app and kung anong component sya. like '/' for Login, '/books-list' for BooksList and '/content' for Content
      - **store**[]
        - vuex store (https://vuex.vuejs.org/guide/) for tracking yung state ng global variables inside whole app.
        - **actions.js** - methods na pwedeng tawagin thru `this.$store.dispatch(<METHODNAME>, <VALUE NA IPAPASA>)`
        - **getters.js** - pang get ng values ng state , maaccess thru `this.$store.getters.<STATE VAR OR PROPERTY>`
        - **index.js** - iniimport dito sina actions.js, getters.js, mutations.js, state.js
        - **mutations.js** - contains methods para mabago yung value ng isang state sa state.js
        - **state.js** - states or reactive global variables ng buong app
      - **App.vue** - main component ng app
      - **main.js** - main js file ng app
    - **package.json** - contains list of dependencies/packages na need para magrun ng maayos yung app
        




---

## Build Setup

``` bash
# checkout to master branch
git checkout master

# update local master branch
git pull origin master 

# install node and npm
<depending on your machine>

# change directory to where package.json is
cd v2/app

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# open browser and navigate to localhost:8080
<enjoy!>

```

### REST API
in json format.
|        | API	             | Description	           | Request body |	Response body        |
|--------|-------------------|-------------------------|:------------:|:--------------------:|
| GET    | /api/Answers      | Get all to-do items	   | None	        | Array of to-do items |
| GET    | /api/Answers/{id} | Get an item by ID	     | None	        | To-do item           |
| POST   | /api/Answers	     | Add a new item	         | Answer item  | To-do item           |
| PUT    | /api/Answers/{id} | Update an existing item | Answer item	| None                 |
| DELETE | /api/Answers/{id} | Delete an item          | None	        | None                 |
#### Open Visual Studio Code
CTRL+\`
and if packages are not yet added:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet tool install --global dotnet-aspnet-codegenerator
```
tool to generate Controllers and probably others
```bash
dotnet aspnet-codegenerator controller -name AnswersController -async -api -m UserAnswer -dc AnswerContext -outDir Controllers
```
generates AnswersController, for [UserAnswer](https://raw.githubusercontent.com/pereav/cs-e-book/master/AnswerApi/Models/UserAnswer.cs) model, to dbcontext [AnswerContext]((https://raw.githubusercontent.com/pereav/cs-e-book/master/AnswerApi/Models/AnswerContext.cs)) (currently InMemory)

#### To run
Go to Visual Studio Code and press CTRL+F5
* URLs: localhost:5000 & localhost:5001
for example: access 1st answer in localhost:5000/api/Answers/1

#### Postman
* To test API, Disable SSL certificate verification
** From File > Settings (General tab), disable SSL certificate verification.
** Warning: Re-enable SSL certificate verification after testing the controller.
For more info, see Install Postman section [here](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio-code#install-postman)

### Tutorial
[ASP.NET](https://github.com/pereav/cs-e-book/issues/8)

### Project specifications
#### DEADLINE: 1st or 2nd week of april (READY NA FOR TESTING)
HOSTING OF APP: for 2 yrs

Isang domain tatlong libro na. (For IT and CpE pla)

### REQUIREMENTS NEEDED:
* Copy of Books
1. [ ] Discrete
2. [X]  Assembly
3. [ ] Programming Language na C++
* [ ] Copy of 1st to 2nd Year Cpe and IT Students

1. Open language ba to basta web app? Meaning, kahit anong prog language basta web app?	 
- Asp.net. See branch [dotnet](https://github.com/pereav/cs-e-book/tree/dotnet)
3. Ilan sila sa group?
- 3 blocks
4. Pahingi ako ng scope ng app nila. Or anything na makikita ko kung anong eksaktong app ang kailangan idev. 

##### USER ACCESS
* sa Assembly si 2nd year cpe lang pwede maka access
* sa programming at discrete 1st year it and cpe

##### USER LOGIN OF 1st AND 2nd Year students
- Oo, Provided ang data nila, kaya nagrequest sa MIC nung records para  sa students. Pra sa registration meron na talaga sila ganun.

###### May SCORING ba? PROGRESS BAR ? At kung ung scores idedatabase ba?
- Oo. diskarte daw natin if pwede ulit ulitin ni student activity or pagkasubmit ng isang activity final na agad score
- sabi rin ni Sir kailangan daw every chapter magsagot muna si student ng activity don, bago makapag proceed sa next chapter.
- Sa bawat topic ng book kailangan mag provide ng parang supporting video ganun.*
