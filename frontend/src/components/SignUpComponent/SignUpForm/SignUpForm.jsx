import CustomFormInput from "../../common/CustomFormInput/CustomFormInput";


const SignUpForm = ({ userData, changeHandler, formHandler }) => {
    return (
        <form onSubmit={formHandler}>
            <CustomFormInput label="Username" name="username" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Password" name="password" type="password" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="First name" name="firstname" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Last name" name="lastname" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Phone number" name="phone" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Email address" name="email" userData={userData} changeHandler={changeHandler} />
            <button type="submit" className="btn btn-success" >Save</button>
        </form>
    )
}
export default SignUpForm;