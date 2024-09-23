exports.getUsers = (req, res) => {
    res.send('List of Users');
  };
  
  exports.getUser = (req, res) => {
    res.send(`User with ID: ${req.params.id}`);
  };
  
  exports.createUser = (req, res) => {
    res.send('User created');
  };
  
  exports.updateUser = (req, res) => {
    res.send(`User with ID: ${req.params.id} updated`);
  };
  
  exports.deleteUser = (req, res) => {
    res.send(`User with ID: ${req.params.id} deleted`);
  };
  //ito po sir ay for database na