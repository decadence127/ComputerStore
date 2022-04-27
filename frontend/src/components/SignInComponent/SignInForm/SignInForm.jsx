import CustomFormInput from "../../common/CustomFormInput/CustomFormInput"


const SignInForm = ({formHandler, userData, changeHandler}) => {
    return (<form onSubmit={formHandler}>
        <CustomFormInput label="Логин" name="username" userData={userData} changeHandler={changeHandler} />
        <CustomFormInput label="Пароль" name="password" userData={userData} changeHandler={changeHandler}
                         type="password"/>
        <div style={{marginTop: 7, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button type="submit" style={{width: "100%"}} className="btn btn-outline-success">Войти</button>
        </div>
    </form>)
}
export default SignInForm;