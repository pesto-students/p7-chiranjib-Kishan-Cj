//Call invokes the function and allows you to pass in arguments one by one.

//Apply invokes the function and allows you to pass in arguments as an 'array'.

//Bind returns a new function, allowing you to pass in this object and any number of arguments.




const student1 = {
    name: "Jack ",
  };
  const student2 = {
    name: "Jimmy ",
  };
  function intro(score) {
      console.log(this.name + "scored " + score + " in an exam.");
  }
  let result = intro.bind(student2);
  result(95);
  let result1 = intro.bind(student1, 80);
  result1();

  intro.apply(student1,[80]);
  intro.call(student1,40);