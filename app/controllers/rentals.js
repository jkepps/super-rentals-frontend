import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== "") {
        return this.store
          .query("rental", { filter: { search: param } })
          .then((results) => ({ query: param, results }));
      } else {
        return this.store
          .findAll("rental")
          .then((results) => ({ query: param, results }));
      }
    },
  },
});
