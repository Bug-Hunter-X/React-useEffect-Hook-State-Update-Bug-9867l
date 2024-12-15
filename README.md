# React useEffect Hook State Update Bug
This repository demonstrates a common error in React's `useEffect` hook: directly modifying the state variable without using the setter function.  This leads to unexpected behavior because React's state management system won't detect the change and the UI won't update accordingly.

## Bug Description
The `bug.js` file contains a component that attempts to increment a state variable within a `useEffect` hook. However, it incorrectly assigns a new value directly to the `count` variable, rather than using the `setCount` function provided by the `useState` hook. This prevents React from recognizing the state change, causing the UI to not reflect the updated count. 

## Solution
The `bugSolution.js` file showcases the correct way to update state within a `useEffect` hook: using the `setCount` function.  This ensures that React properly updates the component and re-renders the UI with the correct count.
