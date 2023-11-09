import adminRoute from './admin'

export default (app: any) => {
    app.use("/api/admin", adminRoute);
}