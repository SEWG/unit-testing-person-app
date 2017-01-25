var SavePersonForm = function(obj){
  this.form = obj.form || document.querySelector('form');
  this.store = window.localStorage;

  this.form.addEventListener('submit', e => this.submit(e));

};
SavePersonForm.prototype.submit = function(e){
  e.preventDefault();
  var form = e.target;

  var person = new Person({
    "fname": form.fname.value,
    "lname": form.lname.value,
    "huid": form.huid.value
  });
  var people = JSON.parse(this.store.getItem("people")) || [];
  people.push(person);
  this.store.setItem("people", JSON.stringify(people));

};
