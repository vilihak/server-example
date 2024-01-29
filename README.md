# Hyte example back-end server

Node.js + Express

Start dev server: `npm run dev` or `npm run start`

Git commands:
push weekx-
git add .
git commit -a "teksti mitä tehty yms"
git push origin week2 / git push u origin week2


push main-
git checkout main
git merge week2
git push

postman:
search users - http://127.0.0.1:3000/users

add user - POST -> "body tab" -> "raw-JSON" -> {
  "username": "xxxx",
  "password": "xxxxx",
  "email": "nxxx@xxx.com"
}

modify: PUT -> http://127.0.0.1:3000/users/:id - > "body tab" -> "raw-JSON" -> {
  "username": "xxxx",
  "password": "xxxxx",
  "email": "nxxx@xxx.com"
}



