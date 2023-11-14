## Personal Information:

Full Name: Jaissica Hora

Northeastern ID: 002934820

## Getting Started
First, fork this repository and clone it to your local machine.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the an image displayed.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about React.js, take a look at the [React Documentation](https://legacy.reactjs.org/docs/getting-started.html#learn-react)


An example is shown in “src/pages/components/profile.js. Let’s explore the example
and consider the following questions:
1. What is returned from the function Profile?
Answer 1. The Profile function return image of Katherine Johnson
2. Remove the parenthesis () from the return expression. Report what will
happen.
Answer 2. Image of Katherine Jones goes away as Profile function does not return anything now.
3. Do you observe anything special about the function name Profile?
Amswer 3. The function name starts with Upper case

Once defined, a component can be used in different contexts by nesting it in other
components. An example is shown in “src/components/gallery.js. Look at the example
and consider the following question:

1. If the Profile function was defined inside Gallery, before the return expression, do
you think the result would have been the same as 1?
Answer 1. Yes, if we do that then the image wont be displayed on the screen as the Profile function is not anymore in the return part of the Gallery function

For You to Do:
1. The code snippet in “src/pages/qcomps/profile_mistake.js” has two mistakes.
Identify and fix them. Add necessary imports in “src/pages/index.js” to load the
component. Run the server and check in the browser.
2. Define a React component in “src/pages/qcomps/firstcomp.js” to render the
following HTML content in the browser:




