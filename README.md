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
![Screenshot (146)](https://github.com/aressss1/ecommerce-admin/assets/127649710/eb786e2b-19fd-46c0-aaf4-7873c28948fa)
![Screenshot (147)](https://github.com/aressss1/ecommerce-admin/assets/127649710/62431b74-4f29-4561-a492-18b954028ac9)
![Screenshot (148)](https://github.com/aressss1/ecommerce-admin/assets/127649710/e0bab263-26b7-4c46-83be-e9bc5651dfc8)
![Screenshot (165)](https://github.com/aressss1/ecommerce-admin/assets/127649710/eddb86c6-23a6-4938-8d14-9360111afab5)
![Screenshot (149)](https://github.com/aressss1/ecommerce-admin/assets/127649710/39690afa-8f0c-4cb6-84a1-5ed667d4be21)
![Screenshot (150)](https://github.com/aressss1/ecommerce-admin/assets/127649710/68fedcce-6bbb-45e2-8f29-235d04ecda76)
![Screenshot (152)](https://github.com/aressss1/ecommerce-admin/assets/127649710/3925dbe9-dd8d-48b4-b0ab-ec9264cbcca8)
![Screenshot (153)](https://github.com/aressss1/ecommerce-admin/assets/127649710/b6e7c26c-0838-48ab-b3ad-88747b9e6f7c)
![Screenshot (154)](https://github.com/aressss1/ecommerce-admin/assets/127649710/25399c41-e5e5-48dd-a806-baa78411bbcb)
![Screenshot (164)](https://github.com/aressss1/ecommerce-admin/assets/127649710/20b5480b-b7d6-4bf9-923d-051993b4e42b)
![Screenshot (156)](https://github.com/aressss1/ecommerce-admin/assets/127649710/3600849a-2873-4bef-9161-7750cb9dd924)
![Screenshot (157)](https://github.com/aressss1/ecommerce-admin/assets/127649710/031fcb95-cc13-4475-9ffe-fda8445fd19c)
![Screenshot (158)](https://github.com/aressss1/ecommerce-admin/assets/127649710/d56ec433-13a0-4fc7-93ad-02971ab94da0)
![Screenshot (159)](https://github.com/aressss1/ecommerce-admin/assets/127649710/70b86b78-933c-45c3-a306-9d7b0e523cfc)
![Screenshot (160)](https://github.com/aressss1/ecommerce-admin/assets/127649710/f34a5aa6-95fe-496a-8ad8-48cfbe4bae9c)
![Screenshot (161)](https://github.com/aressss1/ecommerce-admin/assets/127649710/933f4dfb-5207-4574-b0a4-5a6111d14b05)
![Screenshot (162)](https://github.com/aressss1/ecommerce-admin/assets/127649710/96a81fa2-47b8-49d1-a45d-0ea2b795b1fb)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
