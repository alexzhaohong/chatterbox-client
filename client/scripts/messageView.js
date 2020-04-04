var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%> in <%=roomname%>:</div>
        <div><%-createdAt%></div>
        <div><%=text%></div>
      </div>
    `),

};

// template   _.template(templateString, [settings])
// var compiled = _.template("hello: <%= name %>");

// Compiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate values, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>. When you evaluate a template function, pass in a data object that has properties corresponding to the template's free variables. The settings argument should be a hash containing any _.templateSettings that should be overridden.

/* <div class="chat">
   <div class="username"><%=username%>:</div> 
   <div class='text'><%=text%></div> 
</div>` */

// var MessageView = {

//   render: _.template(`
//       <div class="chat">
//         <div class="username"><%-username%> in <%-roomname%>:</div>
//         <div><%-createdAt%></div>
//         <div><%-text%></div>
//       </div>
//     `),

// };