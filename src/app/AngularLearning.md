1. @Component
2. Data Binding: It means connecting the TS class with angular decorator/HTML UI and pass value.
        It means we can pass value from TS class to HTML UI dynamically.
        It is 3 type: 
               Data Binding
                     │
     ┌───────────────┼───────────────┐
     │               │               │
Interpolation   Property Binding  Event Binding
                                     │
                                     ▼
                             Two-way Binding

interpolation: means pass the value from the class using {{}}.
Property Binding: is used to bind a value from the TypeScript class to a property of an HTML element.
Event Binding: is used to listen to user events (like click, input, keypress, mouseover) and execute a method in the component.

✅Two Way Binding: means synchronize the changes in both direction. If you want the h1 element's data will be what you will fill in the field and for that we will use [(ngModel)] which is present inside the FormsModule.

✅ Directive: is a class which is used to add behaviour or change the appearance/structure of the DOM elements.
It has 3 types of directives:
        1. Component Directive: means pass the component inside this and where we initially passing the component or html document

        2. Structural Directive(@if, @for, @switch): It means you can change the appearance of the UI element by adding or removing the element
        
        3. Attribute Directive: It means

Component communication: means passing value/property from parent -> child or child -> parent to use the data. It has 2 type 
                1. Input(): used to share data from parent to child
                2. Output(): used to share data from child to parent

