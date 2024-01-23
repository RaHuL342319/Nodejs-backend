// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  /**
   * Object.keys(obj): string[] Returns the names of the enumerable string properties and methods of an object.

    parameter:
            obj —> Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  /**
   * Object.values(obj): Returns an array of values of the enumerable properties of an object
            parameter:
             obj —> Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  /**
   * Object.entries(obj): string[] : Returns an array of key/values of the enumerable properties of an object

@parameter:
     obj —> Object that contains the properties and methods. 
        This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  /**
   * Object.assign(target,source1, source2):Copy the values of all of the enumerable own properties from one or more source objects to a target object. 
  
  Returns the target object.

parameter:
    target —> The target object to copy to.
    source1 —> The first source object from which to copy properties.
    source2 —> The second source object from which to copy properties.
   */
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
