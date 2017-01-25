describe("ListPeople", function(){

  describe("printTable", function(){
    it("should add a table element to container", function(){
      var div = document.createElement("div");
      expect(div.querySelector("table")).toBeNull();
      listPeople = new ListPeople({"container": div});
      expect(div.querySelector("table")).not.toBeNull();
    });
  });

});
