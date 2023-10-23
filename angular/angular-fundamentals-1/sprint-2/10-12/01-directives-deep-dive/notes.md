When defining a directive, in the following syntax when describing the @Directive({ selector: '[selectorName]' }) decorator, the square brackets are not part of the selector name; they cause Angular to interpret the selector name as an element attribute.

@HostListener() decorator enables a directive to listen for events and react dynamically, e.g. on mouseenter and mouseleave.

Potential antiquity: Do not need to put anything in ngOnInit (3:00 in Binding to Directive Properties)

ngSwitch can be applied to an element with property binding; inside that element's children, you can use other features like *ngSwitchCase to "switch" what is shown inside the parent div based on the value of the binded property.