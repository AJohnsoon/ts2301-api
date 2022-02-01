# ts2301-api

To install all dependencies use: <br>

```ts
  `yarn` or `npm install`
```
---

To runner the application use:
```ts
  `yarn dev` or `npm run dev`
```
---

To **create** docker image:
```docker
  docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

  for **start** image, use:
  ```docker
    docker start <container-name>
  ```

  for **stop** image, use:
  ```docker
    docker stop <container-name>
```
---


```ts
  - create:
  `yarn typeorm migration:create -n ${tableName}`

  - run:
  `yarn typeorm migration:run`
```
