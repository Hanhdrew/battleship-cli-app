let shipID: number = 1;

//module scoped variable for future reference => works like a closure
//es6 module and execution model

export function generateID(): number {
  return shipID++;
}

// read this for later:

// ES Module Execution Model

// Module Instantiation

// Module Caching

// Live Bindings in ES Modules

// JavaScript Module Resolution

// ECMAScript Specification: Modules
