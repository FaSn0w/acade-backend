import bcrypt from 'bcrypt';


class loginClass {
    constructor(username, email, hashedPassword) {
        this.username = username;
        this.email = email;
        this.hash = hashedPassword;
    }

    static async verifyPassword(password,hash) {
        const match = await bcrypt.compare(password,hash);
        return match;
    }

    static async hashPassword(password) {
        const hash = await bcrypt.hash(String(password), 10);
        return hash;
    }

}


export default loginClass; 