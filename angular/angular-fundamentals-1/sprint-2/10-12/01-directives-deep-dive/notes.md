## Directives

When defining a directive, in the following syntax when describing the @Directive({ selector: '[selectorName]' }) decorator, the square brackets are not part of the selector name; they cause Angular to interpret the selector name as an element attribute.

@HostListener() decorator enables a directive to listen for events and react dynamically, e.g. on mouseenter and mouseleave.

Potential antiquity: Do not need to put anything in ngOnInit (3:00 in Binding to Directive Properties)

ngSwitch can be applied to an element with property binding; inside that element's children, you can use other features like *ngSwitchCase to "switch" what is shown inside the parent div based on the value of the binded property.

## Services

To add a service to a component, add a new property to the @Component decorator called providers: [ ServiceName ], then ensure there's a constructor function in the component class and instantiate a property with ServiceName as its type. To invoke the service, call this.propertyName.serviceMethod().

Be mindful of what components are provided with a service of multiple components across the injection hierarchy are attempting to use the same instance of said service; for example, only specify ServiceName as a provider in the app component if its child components are relying on the same instance. If the service is provided simultaneously to the child components, more instances will be created that don't communicate with each other. The instructor doesn't explicitly say this, but the injection hierarchy seems to be determined after considering the full scope of providers.

The @Injectable decorator is only necessary if a service has other services being injected INTO it. However, it is best practice to automatically add @Injectable to all services to avoid unexpected behavior.

BEST PRACTICE FOR ANGULAR 6+:
For AppModule-scoped services, instead of adding the service to the providers property in app.module.ts, you can instead add an argument to the service's @Injectable decorator in the format:

    @Injectable({providedIn: 'root'})