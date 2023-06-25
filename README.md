# Code for the course: React - The Complete Guide 2023


##### Create a new React project:

```
npx create-react-app my-app
```

##### Run a React project:

Inside of the project folder run:

```
npm start
```

##### Call external JS files using Chrome
Use the following command to open Chrome allowing to run external JS files
```
open -a "Google Chrome" --args --allow-file-access-from-files
```

You can also add it to a local variable in your machine
```
alias cdev='open -a "Google Chrome" --args --allow-file-access-from-files' >> .bash_profile
```

State in React Components

In React world, one way to handle state in a component can handle is by using `useState`. This function expects one argument as an input (initial value) and returns a 2-element array (The current state, An asynchronous function that updates the state). Take a look at the following snippet:

```javascript
import { useState } from "react"
...
{...inside of a function component
    const [color, setColor] = useState("")

    return (
        <button type="button" 
          onClick={ () => setColor("red") }
        >
          {color}
        </button>
    )
}
```

Note 1: Remember to import `useState` from `"react"`
Note 2: `useState` must be inside of a function component. 
Note 3: React uses `useState` to re-render a component.