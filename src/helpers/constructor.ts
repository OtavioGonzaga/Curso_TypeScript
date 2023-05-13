class User {
    name; age; email;
    constructor(name: string, age: number, email: string) {
        this.name = this.captalize(name)
        this.age = age
        this.email = email
    }
    captalize(str: string): string {
        let string: string = str.split(' ').map((e: string): string => {
            return e[0].toUpperCase() + e.slice(1)
        }).join(' ')
        return string
    }
}
class Adm extends User {
    constructor(name, age, email, level: string) {
        super(name, age, email)
        this.level = level
    }
    level
}
class Post {
    constructor() {

    }
}
let user = new User('otavio luiz gonzaga', 16, 'otaviolgonzaga@gmail.com')
export {User, Adm, Post, user}