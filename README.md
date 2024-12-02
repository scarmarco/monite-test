This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Instructions

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/products](http://localhost:3000/products) with your browser.

### Project structure

```
/app                        // Nextjs uses a file system based routing more info here (https://nextjs.org/docs/app/building-your-application/routing/defining-routes#creating-routes)
  /@modal                   // Directory for deep linked modals components using parallel routes (https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
    /(.)products/new        // Directory for new product modal using intercepting routes (https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
      UnitsDropdown         // Component with the Units dropdown

  /@toast                   // Directory for Toast layer being rendered at root app level
  /products                 // Directory for products sub domain
    /new                    // Catch render page for the /products/new route
    /components             // Directory for common components withing the products subdomain
        Sidebar             // Component for the app sidebar in the products layout

/components                 // Directory for common UI components that can be used in all routes / pages
/contexts                   // Directory contexts that will be used at root app level
/hooks                      // Directory for common hooks that can be used in all routes / pages
/services                   // Directory for services like API interfaces

```

### Routes

```
- "/" root route with a placeholder page with a link to products
- "/products" route with the products list
- "/products/new" route with the deep link to the new product modal
```
