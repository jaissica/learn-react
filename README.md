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
Answer 1. Mistake 1: The function was not returning anything, didn't have paranthesis.
Mistake 2: Function should start with upper case letter 
2. Define a React component in “src/pages/qcomps/firstcomp.js” to render the
following HTML content in the browser:
Answer 2. 
// Code
import React from 'react';

const FirstComp = () => {
  return (
    <div>
      <h1>My first component</h1>
      <ol>
        <li>Components: UI Building Block</li>
        <li>Defining a Component</li>
        <li>Using a component</li>
      </ol>
    </div>
  );
};

export default FirstComp;
//




Based on the JSX rules listed above, answer the following questions:
1. Identify and fix all mistakes in the JSX code in “src/pages/qcomps/bios.js”:
Answer 1. 
2. Modify “src/pages/qcomps/todos.js”, such that the person’s name and their
image is displayed. Also, the alt attribute must be set with the person’s name.
Props in Components
React components use props to communicate with each other. Every parent
component can pass some information to its child components by giving them props.
You can pass any JavaScript value through them, including objects, arrays, and
functions.
Explore code in “src/pages/components/profile_props.js” for an example of how props are used,
and then consider the following:
1. What is the meaning of the input parameter of the function Avatar?
2. What is the meaning of the attributes in <Avatar /> in relation to the function
Avatar?
3. Modify index.js and load the components in a browser to see what gets
displayed.
For You to Do:
1. Review the code in “src/pages/qcomps/gallery_props.js”. Run it and review how it




