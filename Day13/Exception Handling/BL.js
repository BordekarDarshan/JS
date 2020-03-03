function Bl(RepositoryInstance) {
  let repo = RepositoryInstance;
  this.Demo = function() {
    try {
      repo.Demo();
      Console.log("B Logic");
    } catch (ex) {
      throw ex;
    }
  };
}
