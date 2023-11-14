import adminRoute from './admin'

export default (app: any) => {
    app.use("/admin", adminRoute);
}