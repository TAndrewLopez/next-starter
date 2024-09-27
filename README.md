Clone repo:
```
git clone git@github.com:TAndrewLopez/next-starter.git
```
Create .env
```
NODE_ENV=development
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DATABASE_URL="postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
DB_HOST=localhost
DB_NAME=nextstarter
DB_PASSWORD=supersecret
DB_PORT=5432
DB_USER=nextstarter
```

```
docker compose-up
```


```
pnpm drizzle-kit generate
```

```
pnpm db:migrate
```