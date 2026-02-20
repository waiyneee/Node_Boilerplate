const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "db.json");

// ─── Read the whole DB ───────────────────────────────────────
function readDB() {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
}

// ─── Write the whole DB ──────────────────────────────────────
function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ─── CREATE ──────────────────────────────────────────────────
function createUser(name, email) {
  const db = readDB();

  const newUser = {
    id: Date.now(),          // simple unique ID
    name,
    email,
    createdAt: new Date().toISOString(),
  };

  db.users.push(newUser);
  writeDB(db);

  console.log("✅ Created:", newUser);
  return newUser;
}

// ─── READ ALL ────────────────────────────────────────────────
function getAllUsers() {
  const db = readDB();
  console.log("📋 All users:", db.users);
  return db.users;
}



// ─── READ ONE ────────────────────────────────────────────────
function getUserById(id) {
  const db = readDB();
  const user = db.users.find((u) => u.id === id);

  if (!user) {
    console.log("❌ User not found");
    return null;
  }

  console.log("🔍 Found:", user);
  return user;
}

// ─── UPDATE ──────────────────────────────────────────────────
function updateUser(id, updates) {
  const db = readDB();
  const index = db.users.findIndex((u) => u.id === id);

  if (index === -1) {
    console.log("❌ User not found");
    return null;
  }

  db.users[index] = { ...db.users[index], ...updates };
  writeDB(db);

  console.log("✏️  Updated:", db.users[index]);
  return db.users[index];
}

// ─── DELETE ──────────────────────────────────────────────────
function deleteUser(id) {
  const db = readDB();
  const index = db.users.findIndex((u) => u.id === id);

  if (index === -1) {
    console.log("❌ User not found");
    return false;
  }

  const deleted = db.users.splice(index, 1)[0];
  writeDB(db);

  console.log("🗑️  Deleted:", deleted);
  return true;
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };