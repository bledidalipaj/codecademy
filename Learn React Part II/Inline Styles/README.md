# Style

## Inline Styles

There are many different ways to use styles in React. This lesson is focused on one of them: inline styles.

An inline style is a style that's written as an attribute, like this:

```
<h1 style={{ color: 'red' }}>Hello world</h1>
```
Notice the double curly braces. What are those for?

The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."

The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

```js
{ color: 'red' }
```
If you inject an object literal into JSX, and your entire injection is only that object literal, then you will end up with double curly braces. There's nothing unusual about how they work, but they look funny and can be confusing.


## Make A Style Object Variable
That's all that you need to apply basic styles in React! Simple and straightforward.

One problem with this approach is that it becomes obnoxious if you want to use more than just a few styles. An alternative that's often nicer is to store a style object in a variable, and then inject that variable into JSX.

Look in the code editor for an example. The style object is defined on lines 3-6, and then injected on line 11.

If you aren't used to using modules, then this code may have made you twitch uncontrollably:

```
const style = {
  color: 'darkcyan',
  background: 'mintcream'
};
```

Defining a variable named ```style``` in the top-level scope would be an extremely bad idea in many JavaScript environments! In React, however, it's totally fine.

Remember that every file is invisible to every other file, except for what you choose to expose via ```module.exports```. You could have 100 different files, all with global variables named ```style```, and there could be no conflicts.

## Style Name Syntax
In regular JavaScript, style names are written in hyphenated-lowercase:

```
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};

```

In React, those same names are instead written in camelCase:

```
const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};
```

This has zero effect on style property values, only on style property names.


## Style Value Syntax
In the last exercise, you learned how style names are slightly different in React than they are in regular JavaScript.

In this exercise, you will learn how style values are slightly different in React than they are in regular JavaScript.

In regular JS, style values are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you have to write ```"450px"``` or ```"20%"```.

In React, if you write a style value as a number, then the unit ```"px"``` is assumed.

How convenient! If you want a font size of ```30px```, you can write:

```
{ fontSize: 30 }
```
If you want to use units other than ```"px"``` you can use a string:

```
{ fontSize: "2em" }
```
Specifying ```"px"``` with a string will still work, although it's redundant.

A few specific styles will not automatically fill in the ```"px"``` for you. These are styles where you aren't likely to use ```"px"``` anyway, so you don't really have to worry about it. [Here is a list of styles that don't assume "px"](https://facebook.github.io/react/tips/style-props-value-px.html).


## Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should ```export``` the styles that you want to reuse, via export. You can then ```import``` your styles into any component that wants them.