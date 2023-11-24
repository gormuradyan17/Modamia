class AdminDto {
    email: String;
    id: any;

    constructor(model: any) {
        this.email = model.email;
        this.id = model._id;
    }
}

export default AdminDto