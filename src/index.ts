
/*
Инициализируем новый проект:
yarn init --yes

Добавляем Express:
yarn add express

Устанавливаем Nodemon для слежения за изменениями в js:
yarn add nodemon --dev

Чтобы Node и express мог работать с Typescript:
yarn add typescript ts-node @types/node @types/express --dev

Инициализируем новый проект под Typescript:
yarn tsc --init

Корректирируем  ("rootDir": "./src") и ("outDir": "./dist") в tsconfig.json

Запускаем компилятор в режиме автокомпиляции после изменения файла ts
yarn tsc -w

Выполняем js файл проекта в режиме отладки в режиме автоперезапуска после изменений
yarn nodemon --inspect dist/index.js

Добавляем Jest и определения:
yarn add --dev jest ts-jest @types/jest @types/supertest

Инициализируем конфигурацию jest:
yarn ts-jest config:init

Добавляем скрипт в package.json
  "scripts": {
    "watch": "tsc -w",
    "dev": "nodemon --inspect dist/index.js",
    "test": "jest --watch"
  },

Создаем файл типа index.test.ts и  тестируем в нем импортируя переменные из файла проекта:

describe("First test", () => {
    it("Should return correct result", () => {
        expect(21).toBe(21);
    })
})

для автоматического поднятия сервера и его тестирования в файле test добавляем:
import request from "supertest";
import {app} from "./server";

describe("Test server", () => {
    it("returned 200", async () => {
        await request(app)
            .get("/")
            .expect(200)
    })
})

*/

import {multi, sqrt} from "./func1";

const welcome = "Hi!";
const bye = "GoodBye!"
console.log(welcome);

let sum = (a:number, b:number) => a + b;

module.exports = {welcome, bye, sum};

console.log(sqrt(25))
console.log( multi(5, 7) );