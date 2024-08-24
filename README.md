<div align="center">

# JakSam

[![Notion](https://img.shields.io/badge/프로젝트-ffffff?style=flat-square&logo=Notion&logoColor=000000&labelColor=ffffff&color=ffffff)](https://radical-devourer-8fb.notion.site/JakSam-97f79cd90e6a45d799a39bdac61c964d)

![Nodejs](https://img.shields.io/badge/Node.js-ffffff?style=flat-square&logo=Node.js&logoColor=ffffff&labelColor=3c873a&color=3c873a)
![Express](https://img.shields.io/badge/Express-ffffff?style=flat-square&logo=Express&logoColor=ffffff&labelColor=000000&color=000000)
![MongoDB](https://img.shields.io/badge/MongoDB-ffffff?style=flat-square&logo=mongodb&logoColor=ffffff&labelColor=47A248&color=47A248)
![EJS](https://img.shields.io/badge/EJS-ffffff?style=flat-square&logo=ejs&logoColor=ffffff&labelColor=B4CA65&color=B4CA65)

</div>

작삼은 작심 삼일이라는 뜻으로, 할 일을 목표 날짜와 함께 관리할 수 있는 웹 어플리케이션 입니다.

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 라이브러리를 설치합니다.
   - express, dotenv, mongodb, ejs
   - nodemon, prettier
2. `.env` 파일을 생성하고 아래 내용을 입력합니다.
   ```bash
   DB_URL=# Mongo DB URL
   DB_USER=# Mongo DB Username
   DB_PASSWORD=# Mongo DB Password
   ```
3. `npm run dev`를 입력해 서버를 실행합니다.

## 🧾 API 명세

> API는 `/api` 엔드포인트에서 시작됩니다.

### `GET` /post

전체 포스트 목록을 반환합니다.

#### Request

```
https://example.com/api/post
```

#### Response `200`

Post 리스트를 반환합니다.

```javascript
[
  {
    _id: string,
    title: string,
    dateOfCreate: string,
    dateOfGoals: string,
    todoDetail: string,
  },
];
```

### `GET` /post/:id

ID에 해당하는 하나의 Post를 반환합니다.

#### Request

```
https://example.com/api/post/{id}
```

- `id`: Post의 고유 아이디 입니다.

#### Response `200`

ID에 해당하는 Post를 반환합니다.

```javascript
{
  _id: string;
  title: string;
  dateOfCreate: string;
  dateOfGoals: string;
  todoDetail: string;
}
```

### `POST` /post

새로운 Post를 생성합니다.

#### Request

```
https://example.com/api/post
```

##### Headers

- Content-Type: application/json

##### Body

```javascript
{
  title: string;
  dateOfCreate: string;
  dateOfGoals: string;
  todoDetail: string;
}
```

#### Response `201`

저장된 Post의 ID 및 redirectUrl을 반환합니다.

```javascript
{
  insertedId: string;
  redirectUrl: "/list";
}
```

### `PUT` /post/:id

수정된 Post 내용을 저장합니다.

#### Request

```
https://example.com/api/post/{id}
```

- `id`: Post의 고유 아이디 입니다.

##### Headers

- Content-Type: application/json

##### Body

```javascript
{
  title: string;
  dateOfCreate: string;
  dateOfGoals: string;
  todoDetail: string;
}
```

#### Response `200`

저장된 Post에 대한 redirectUrl을 반환합니다.

```javascript
{
  redirectUrl: "/list";
}
```

### `DELETE` /post/:id

ID에 해당하는 하나의 Post를 반환합니다.

#### Request

```
https://example.com/api/post/{id}
```

- `id`: Post의 고유 아이디 입니다.

#### Response `204`

Status Code 중 204(No Content)를 반환합니다.
