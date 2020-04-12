# CS E-Book Frontend
CEIT-03-1001p

see also [CS E-Book Backend](https://github.com/raymerorale/CS-E-Book-backend/edit/master/README.md)

---
## Project Requirements
1. Create a Github account
2. (Gitbash/Terminal)[https://git-scm.com/downloads]
3. (Node.js)[https://nodejs.org/en/](to run command lines like 'npm install' and 'npm run serve' on cmd). 
   - Download version - Recommended for Most Users.
4. (Sublime Text)[https://www.sublimetext.com/]


---
## How to Run CS E-BOOK Frontend
1.	Setup SSH Key on your local computer.
  - (Generating a new SSH key)[https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent]
  - (Adding a new SSH key to your GitHub account)[https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account]

2.  Create a folder/choose an existing folder.

3.  Right-click, choose "Git Bash Here".

4.  Clone project CS-E-Book-frontend
```bash 
# clone repository
git clone git@github.com:raymerorale/CS-E-Book-frontend.git
```

5. Follow Build Setup.


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
npm run serve

# open browser and navigate to localhost:8080
<enjoy!>

```



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
2. Ilan sila sa group?
- 3 blocks
3. Pahingi ako ng scope ng app nila. Or anything na makikita ko kung anong eksaktong app ang kailangan idev. 

##### USER ACCESS
* sa Assembly si 2nd year cpe lang pwede maka access
* sa programming at discrete 1st year it and cpe

##### USER LOGIN OF 1st AND 2nd Year students
- Oo, Provided ang data nila, kaya nagrequest sa MIC nung records para  sa students. Pra sa registration meron na talaga sila ganun.

###### May SCORING ba? PROGRESS BAR ? At kung ung scores idedatabase ba?
- Oo. diskarte daw natin if pwede ulit ulitin ni student activity or pagkasubmit ng isang activity final na agad score
- sabi rin ni Sir kailangan daw every chapter magsagot muna si student ng activity don, bago makapag proceed sa next chapter.
- Sa bawat topic ng book kailangan mag provide ng parang supporting video ganun.*
