// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

// printing json data
console.log("Original JSON String:", jsonString);

// Converts a JavaScript Object Notation (JSON) string into an object.
/**
 * JSON.parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any
 
@param text — A valid JSON string.
@param reviver
A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
let parsedObject = JSON.parse(jsonString);
console.log("After JSON.parse():", parsedObject);

// stringify(): Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
/**
 * JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)
Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

@param value — A JavaScript value, usually an object or array, to be converted.

@param replacer — A function that transforms the results.

@param space — Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
let jsonStringified = JSON.stringify(parsedObject);
console.log("After JSON.stringify():", jsonStringified);
