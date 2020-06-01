# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @peachesli/lotide`

**Require it:**

`const _ = require('@peachesli/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: takes array as input, returns the first element in the array;
* `tail(...)`: takes array as input, returns all but the first element in the array;
* `middle(...)`: returns middle element(s) in an array as an array. For an array of an odd length, it will return one middle element. For an array of an even length, it will return two middle elements. 