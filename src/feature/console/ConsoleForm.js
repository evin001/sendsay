import validator from 'validator'

class ConsoleForm {
  request

  constructor(request = '') {
    this.request = request
  }

  get error() {
    return !validator.isJSON(this.request)
  }

  clone() {
    return new ConsoleForm(this.request)
  }
}

export default ConsoleForm
