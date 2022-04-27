import CustomFormInput from "../../common/CustomFormInput/CustomFormInput";


const SignUpForm = ({ userData, changeHandler, formHandler }) => {
    return (
        <form onSubmit={formHandler} >
            <CustomFormInput label="Логин" name="username" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Пароль" name="password" type="password" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Имя" name="firstname" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Фамилия" name="lastname" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Телефон" name="phone" userData={userData} changeHandler={changeHandler} />
            <CustomFormInput label="Email" name="email" userData={userData} changeHandler={changeHandler} />
            <div style={{marginTop: 7,display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button type="submit" style={{width: "100%"}} className="btn btn-outline-success" >Сохранить</button>
            </div>
        </form>
    )
}
export default SignUpForm;