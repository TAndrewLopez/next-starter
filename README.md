# Next.js Starter Project

## Core Tech

Next.js
TailwindCSS
Drizzle
Next Auth

## Development Tech

TypeScript
Docker
Shadcn UI
Zod
Conform-to


Clone repo:
```
git clone git@github.com:TAndrewLopez/next-starter.git
```
Create .env
```
# DEVELOPMENT
NODE_ENV="development"

# AUTH
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# GOOGLE PROVIDER 
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# DATABASE / DRIZZLE / DOCKER
DATABASE_URL="postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_PORT=5432
DB_USER=
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