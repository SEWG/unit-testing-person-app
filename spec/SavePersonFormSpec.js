describe("SavePersonForm", function(){
  var savePersonForm;

  var mockForm = document.createElement("form");
  var fnameInput = document.createElement("input");
  fnameInput.name = "fname";
  fnameInput.value = "something";
  mockForm.append(fnameInput);
  var lnameInput = document.createElement("input");
  lnameInput.name = "lname";
  mockForm.append(lnameInput);
  var huidInput = document.createElement("input");
  huidInput.name = "huid";
  mockForm.append(huidInput);

  beforeEach(function(){
    savePersonForm = new SavePersonForm({
      "form": mockForm
    });
  });
  describe("submit", function(){
    it("should preventDefault of the submit event", function(){
      var mockEvent = {
        "target": savePersonForm.form,
        "preventDefault": function(){}
      };
      mockEvent.target = savePersonForm.form;
      spyOn(mockEvent, "preventDefault");
      savePersonForm.submit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });
});
