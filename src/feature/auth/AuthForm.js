const REG_EXP_LOGIN = /[^a-zA-Z0-9_@.]+/
const REG_EXP_PASSWORD = /[а-яА-ЯёЁ]+/

class AuthForm {
  login
  sublogin
  password

  constructor({ login = '', sublogin = '', password = '' } = {}, dirt = false) {
    this.login = new LoginField(login, dirt)
    this.sublogin = new SubloginField(sublogin, dirt)
    this.password = new PasswordField(password, dirt)
  }

  get error() {
    return (
      this.login.error ||
      this.sublogin.error ||
      this.password.error ||
      !(this.login.value && this.password.value)
    )
  }

  clone() {
    return new AuthForm(
      {
        login: this.login.value,
        sublogin: this.sublogin.value,
        password: this.password.value,
      },
      true
    )
  }
}

class TextField {
  #value
  #dirt = false

  constructor(value = '', dirt) {
    this.#value = value
    this.#dirt = dirt
  }

  get value() {
    return this.#value
  }

  set value(value) {
    this.#value = value
    this.#dirt = true
  }

  get dirt() {
    return this.#dirt
  }
}

class LoginField extends TextField {
  get error() {
    return this.dirt && (REG_EXP_LOGIN.test(this.value) || !this.value)
  }
}

class SubloginField extends TextField {
  get error() {
    return this.dirt && REG_EXP_LOGIN.test(this.value)
  }
}

class PasswordField extends TextField {
  get error() {
    return this.dirt && (REG_EXP_PASSWORD.test(this.value) || !this.value)
  }
}

export default AuthForm
