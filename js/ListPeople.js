var ListPeople = function(config){
  this.container = config.container || document.querySelector('body');
  this.store = config.store || window.localStorage;
  this.people = JSON.parse(this.store.getItem("people"));
  this.printTable();
};
ListPeople.prototype.printTable = function(){

  var table = document.createElement('table');
  this.people.forEach(function(person){
    var row = document.createElement('tr');
    var fnameCell = document.createElement('td');
    fnameCell.append(document.createTextNode(person.fname));
    row.append(fnameCell);
    var lnameCell = document.createElement('td');
    lnameCell.append(document.createTextNode(person.lname));
    row.append(lnameCell);
    var huidCell = document.createElement('td');
    huidCell.append(document.createTextNode(person.huid));
    row.append(huidCell);

    table.append(row);
  });

  this.container.append(table);

};
