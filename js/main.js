window.addEventListener('load', function(){
  new SavePersonForm({
    "form": document.querySelector('#savePersonForm'),
    "store": window.localStorage
  });

  new ListPeople({
    "container": document.querySelector('#peopleList'),
    "store": window.localStorage
  });

});
