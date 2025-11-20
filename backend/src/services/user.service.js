import bcrypt from "bcrypt";

let users = [];

export const userService = {
  create: async (data) => {
    const exists = users.find(u => u.email === data.email);
    if (exists) throw { status: 400, message: "Email already exists" };

    const hashed = await bcrypt.hash(data.password, 10);

    const user = {
      id: users.length + 1,
      email: data.email,
      password: hashed,
    };

    users.push(user);
    return { id: user.id, email: user.email };
  },

  login: async (email, password) => {
    const user = users.find(u => u.email === email);
    if (!user) throw { status: 400, message: "Invalid credentials" };

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw { status: 400, message: "Invalid credentials" };

    return { id: user.id, email: user.email };
  },

  findById: async (id) => {
    return users.find(u => u.id === id);
  },
  getAll: async () => {
    return users.map(u => ({ id: u.id, email: u.email }));
},

};
