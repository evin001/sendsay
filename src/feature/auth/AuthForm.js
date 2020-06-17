const REG_EXP_LOGIN = /[^a-zA-Z0-9_@.]+/
const REG_EXP_PASSWORD = /[а-яА-ЯёЁ]+/

class AuthForm {
  login
  sublogin
  password

  constructor(login, sublogin, password) {
    this.login = login || new LoginField()
    this.sublogin = sublogin || new SubloginField()
    this.password = password || new PasswordField()
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
      this.login.clone(),
      this.sublogin.clone(),
      this.password.clone()
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

  clone() {
    throw new Error('clone method not defined')
  }
}

class LoginField extends TextField {
  get error() {
    return this.dirt && (REG_EXP_LOGIN.test(this.value) || !this.value)
  }

  clone() {
    return new LoginField(this.value, this.dirt)
  }
}

class SubloginField extends TextField {
  get error() {
    return this.dirt && REG_EXP_LOGIN.test(this.value)
  }

  clone() {
    return new SubloginField(this.value, this.dirt)
  }
}

class PasswordField extends TextField {
  get error() {
    return this.dirt && (REG_EXP_PASSWORD.test(this.value) || !this.value)
  }

  clone() {
    return new PasswordField(this.value, this.dirt)
  }
}

export default AuthForm
