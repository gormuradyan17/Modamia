class UserDto {
    email: String;
    id: any;
    name: String;
    shopify_id: string;

    constructor(model: any) {
        this.email = model.email;
        this.id = model._id;
        this.name = model.name;
        this.shopify_id = model.shopify_id;
    }
}

export default UserDto