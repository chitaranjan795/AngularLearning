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

<!-- 📙 Interpolation End -->
