# Simple system monitor
Project is a simple resource monitor for your PC based on NodeJs

# Quick start
* Install dependencies
  * Yarn: cd backend && yarn && cd ../app && yarn && cd ../
  * NPM: cd backend && npm i && cd ../app && npm i && cd ../

* Generate App bundle
  * Yarn: cd app && yarn build && cd ../
  * NPM: cd app && npm run build && cd ../

* Copy files
  * Copy "assets" folder from app/dist/static/ in backend/static/
  * Copy "index.html" file from app/dist/index.html in backend/views/

End structure:
  backend
    |- static 
    |   |- assets
    |   |   |- ...
    |   |- favicon.ico
    |
    |- views
    |   |-index.html

* Run 
 * Yarn: cd backend && yarn dev
 * NPM: cd backend && npm run dev