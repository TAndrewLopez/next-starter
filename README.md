# Next.js Starter Project

A modern web application starter built with Next.js, designed to accelerate development with a focus on performance, scalability, and developer experience. This project provides a robust setup for authentication, styling, database interactions, and component libraries, with best practices and tools integrated for a smooth development workflow.

## 🚀 Core Technologies

- **Next.js**
- **TailwindCSS**
- **Drizzle**
- **Next Auth**

## 🛠️ Development Technologies

- **TypeScript**
- **Docker**

## 📦 Component Library

- **Shadcn UI**

## ✅ Validation
- **Conform-to**
- **Zod**

## 📂 Getting Started

1. **Clone the repository:**

```
git clone git@github.com:TAndrewLopez/next-starter.git
cd next-starter
```
2. **Create .env**

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
3. **Run the Docker containers**

```
docker compose-up
```
4. **Generate Drizzle Migrations**

```
pnpm drizzle-kit generate
```
5. **Run database migrations**
```
pnpm db:migrate
```