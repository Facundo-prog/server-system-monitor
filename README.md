# Simple system monitor
Project is a simple resource monitor for your PC based on NodeJs

# Quick start
* Install dependencies
  * Yarn: ```yarn```
  * NPM: ```npm i```

* Generate App bundle
  * Yarn: ```yarn app:build```
  * NPM: ```npm run app:build```

* Copy files
  * Copy "assets" folder from app/dist/static/ in backend/static/
  * Copy "index.html" file from app/dist/index.html in backend/views/

End structure:
```
  backend/
    |- static/ 
    |   |- assets/
    |   |   |- ...
    |   |- favicon.ico
    |
    |- views/
    |   |-index.html
```

* Run 
  * Yarn: ```yarn backend:dev```
  * NPM: ```npm run backend:dev```
