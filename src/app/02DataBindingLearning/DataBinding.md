<!-- 📙 Data Binding start -->

=> Data Binding means synchronize the component logic(model) to the HTML Template(view)
=> It means pass the expression or variable/function/data to the html template from typescript logic or component.
=> You can pass data from logic(model)->Template or Template->Logic or Logic<->Template and for this direction system there are mainly 2 types of data binding
a. One way Data Binding (Uni Direction Binding)
b. Two way Data Binding (Bi-direction Binding)

    ✔a. One way Data Binding: means when data goes only in one direction either logic->template or template->logic then that is called uindirection or one dirction data binding.
    -> It has 3 types of unidirection data binding
        1. Interpolation
        2. Property Binding
        3. Event Binding

    ✔b. Two way Data Binding: meand when data flows from either logic->template or template-> logic that is called two way binding.

<!-- 📙 Data Binding End -->

<!-- 📙 1. Interpolation start -->

    => Interpolation means pass the variable/express/function/data to the template and use this inside 2 curly braces {{}}.
    => {{}}: it means convert the expression/data into string in html template.
    => In vanila js we have use "document.getElementById(Id).innerHTML="..."" and in angular instead of this we use "interpolation"
    e.g name="Chitaranjan"
        <p>{{name}}</p>
    => It converts the outcome into string and places it into the DOM.
    => Interpolation is specifically used when I want to display a component value as text/content in the template

    => Uses of Interpolation:
    1. Display Component Properties in UI using double curly braces({{}}).
    2. You can pass object, array and function
    3. You can evaluate mathematical expressions in suing curly braces like ({{7+8}})

    ✔ What is a Pipe in Angular?
        A pipe is a feature in Angular that lets you transform or format data directly in the template without changing the original data.
        e.g: 
            name = "Chitaranjan"
            {{name | uppercase}}
            The | symbol means "apply this pipe to the value."
            here,
                name -> data
                | -> pipe operator
                uppercase -> pipe

        Commont built-in pipes are: 
            -> uppercase
            -> lowercase
            -> titlecase: hello world-> Hello World
            -> currency: for dollar: 25000->$25000
            -> currency:'INR' : 25000->₹25,000.00
            -> date: format the date as dd/mm/yyyy
        
        => An Angular pipe transforms data into a display-friendly format, and you commonly use it inside interpolation with {{ value | pipeName }}.

        => Chaining pipe is also there, which is multiple pipe in one data. {{data | pipe1 | pipe2}}

<!-- 📙 Interpolation End -->
