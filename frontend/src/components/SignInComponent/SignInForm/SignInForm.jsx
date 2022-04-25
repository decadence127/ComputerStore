import CustomFormInput from "../../common/CustomFormInput/CustomFormInput"


const SignInForm = ({ formHandler, userData, changeHandler }) => {
    return (<form onSubmit={formHandler}>
        <CustomFormInput label="Username" userData={userData} changeHandler={changeHandler} name='username' />
        <CustomFormInput label="Password" userData={userData} changeHandler={changeHandler} name='password' type="password" />
        <button className="btn btn-success offset-mt-2">Save</button>
    </form>)
}
export default SignInForm;