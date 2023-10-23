To allow a child component to use one of its parent component's properties (AN INPUT) ...

- Decorate the parent property with @Input() to enable external usage (also import Input).
- Assign an alias by passing a string as an argument into @Input() to rename all external uses/bindings of the element for clarity

To communicate to a parent component that a child component has changed (AN OUTPUT)...

- Implement event binding in the parent component's HTML on the child component element
- Pair it with a corresponding expression (like a function execution) to pass the result of the change ($event) to the parent
- Define an EventEmitter object in the child component and decorate it with @Output() (also import Output) to pass the result of an .emit function to the parent component
- Assign an alias by passing a string as an argument into @Output() to rename all external uses/bindings of the element for clarity, e.g. if the event returns more than one function

If the distance between the properties of two components are great enough that the chain of inputs and outputs required for the properties to speak to each other are too great, services can stand in as a better alternative.

The "encapsulation" property can be added to the @Component decorator with ViewEncapsulation.[Native, Emulated, None]; None is by far the most useful because you can override styling via the parent component.

Local references can be made by using the #reference syntax, then used to pass into events. Promotes cleaner code.

Local references can also be fetched using the @ViewChild() decorator. @ViewChild() is more flexible because it can also fetch HTML elements, as well as store both references and elements and create access to them before they're ever used in an event.

<ng-content> is a special directive that acts like an element that can be placed inside a child component's HTML as an injection point for HTML code written inside the app component element in the parent component's HTML. The default behavior, when <ng-content> is absent, is that all code inside the app component element is deleted/ignored. Use when normal property binding is too complex or may cause vulnerabilities.

Lifecycle hooks are useful for implementing code to run at different points of a component's lifecycle. Their use cases vary, but generally speaking makes it easy to pinpoint the most essential parts of the lifecycle.

Implement the corresponding interface in the "export" portion of the component class when calling a lifecycle hook like ngOnInit. Not necessary, but best practice.

The @ContentChild() decorator, which uses the same syntax as @ViewChild(), is used to fetch data when the target is stored outside of the parent component and instead injected using <ng-content>.

A component's CONTENT is what's stored in said component; its VIEW is what's rendered in the client. Internal vs external.