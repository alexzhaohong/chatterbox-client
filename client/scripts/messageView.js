var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%>:</div>
        <div><%=text%></div>
      </div>
    `)

};

// template   _.template(templateString, [settings])
// var compiled = _.template("hello: <%= name %>");

/* <div class="chat">
   <div class="username"><%=username%>:</div> 
   <div class='text'><%=text%></div> 
</div>` */
