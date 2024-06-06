# Full Stack E-Commerce Admin Dashboard + CMS

## Key Features

+    used Shadcn UI for the Admin!
+    Our admin dashboard is going to serve as both CMS, Admin and API!
+    You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our   +    CMS will generate API routes for all of those individually!)
+    You will be able to create, update and delete categories!
+    You will be able to create, update and delete products!
+    You will be able to upload multiple images for products, and change them whenever you want!
+    You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
+    You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them      standalone (Our Admin generates API for all of those cases!)
+    You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
+    You will be able to control which products are "featured" so they show on the homepage!
+    You will be able to see your orders, sales, etc.
+    You will be able to see graphs of your revenue etc.
+    Used Clerk Authentication!
+    Order creation
+    Stripe checkout
+    Stripe webhooks
+    MySQL + Prisma + PlanetScale


### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/aressss1/ecommerce-admin.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Preview

![prismify-render-1716801793184](https://github.com/aressss1/markethubPro/assets/127649710/c1f7319e-35f1-473a-8d2f-d5fc3a000721)
![prismify-render-1716801751428](https://github.com/aressss1/markethubPro/assets/127649710/443422a9-f0b3-4776-af7c-1962ed327cd0)
![prismify-render-1716801730940](https://github.com/aressss1/markethubPro/assets/127649710/0feed22d-376f-40a8-a786-d3d785408c27)
![prismify-render-1716801710419](https://github.com/aressss1/markethubPro/assets/127649710/bb814597-d472-4b68-8784-9464eda9ac9f)
![prismify-render-1716801862828](https://github.com/aressss1/markethubPro/assets/127649710/7619a0d2-7be4-4d69-8e79-2e2eabf2f0c3)
![prismify-render-1716801821748](https://github.com/aressss1/markethubPro/assets/127649710/0caa924a-10a9-427f-9109-2a81cbd67a92)
![prismify-render-1716801808601](https://github.com/aressss1/markethubPro/assets/127649710/423e4493-1a4e-404b-b0c1-a48a2b6f3840)

