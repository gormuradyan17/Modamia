class UserDto {
    email: String;
    id: any;
    name: any;

    constructor(model: any) {
        this.email = model.email;
        this.id = model._id;
        this.name = model.name;
    }
}

export default UserDto