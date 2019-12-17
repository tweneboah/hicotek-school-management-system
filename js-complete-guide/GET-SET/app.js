const users = {
    firstname: 'Emmanuel',
    lastname: 'Tweneboah',
    get fullname() {
        return `${this.firstname} ${this.lastname}`
    },

    set fullname(val) {
        if (typeof val === 'number') {
            alert('Enter a text')
            throw new Error('Enter text')
        }
        this.firstname = val
    }
};

users.fullname = 90
console.log(users.fullname)