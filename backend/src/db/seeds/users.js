exports.seed = knex => {
  return knex("users").del().then(() => {
    return knex("users").insert([{
      id: 1,
      email: "zlapmniehakerze@gmail.com",
      username: "admin",
      password: "test"
    }]);
  });
}