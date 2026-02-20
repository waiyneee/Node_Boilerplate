const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("./db.js");

// ── CREATE two users
const u1 = createUser("Alice", "alice@example.com");
const u2 = createUser("Bob", "bob@example.com");

// ── READ all
getAllUsers();

// ── READ one
getUserById(u1.id);

// ── UPDATE
updateUser(u1.id, { name: "Alice Smith", email: "alice.smith@example.com" });

// ── READ again to confirm update
getUserById(u1.id);

// ── DELETE
deleteUser(u2.id);

// ── Final state
getAllUsers();