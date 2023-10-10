# Video 1 - Design Patterns

- This guy got that gray-eyed stare
- To summarize, design patterns are formalized, reusable, best-practice solutions to common problems.
- DPs are arrived at through collective knowledge.
- In the long run, learning DPs is incredibly useful especially as it pertains to code readability and maintenance in a professional, collaborative environment.

Three types of patterns:
1. Creation patterns
2. Structural patterns
3. Behavioral patterns

# Video 2 - Builder Pattern

Builder pattern shows best way to construct a new class with variable property conditions.

Method 1: utter nonsense. evil. unnecessary.

Method 2: uses special features of constructor() to accomplish same thing. 

{ property1, property2, propertyn... } = {}
- define n properties inside an object literal, which allows for initializing only some properties at build and initializes the others as 'undefined'.

alt: { property1 = 'default value' }
- allows for defining default values for properties if no value is defined at build.

Classes are way more useful than I thought. The idea of setting several templates (classes) to nest additional information inside the properties of other classes is amazing.

# Video 3 - Facade Pattern

Facade pattern creates a facade (via API) to hide complex/long code and keep only the important code.

# Video 4 - Observer Pattern

What is it? : "An object (the subject) maintains a list of dependents (observers) and notifies them when state changes, usually by calling a broadcast method."
- EventTarget.addEventListener() demonstrates observer pattern
- RxJS uses observables

# Other Videos

- Destructuring and spread operator are cool.
- A callback is a function that is invoked when another function has completed execution. Regular callback use cases are mostly antiquated; use promises whenever possible for code maintainability.
- Async functions simply allow for a chronology of events that isn't strictly "next after next". Async compatibility is built into some frameworks and other stuff; need to research more into specifically when to use keywords like "async" and "await".
- In a promise, the return value of a .then goes to the next nearest .then