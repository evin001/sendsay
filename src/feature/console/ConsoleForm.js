import validator from 'validator'
import { formatRequest } from './utils'

class ConsoleForm {
  request
  response

  constructor(request, response) {
    this.request = request || new RequestField()
    this.response = response || new ResponseField()
  }

  clone() {
    return new ConsoleForm(this.request.clone(), this.response.clone())
  }
}

class RequestField {
  value

  constructor(value = '') {
    this.value = value
  }

  get error() {
    return !validator.isJSON(this.value)
  }

  clone() {
    return new RequestField(this.value)
  }

  toObject() {
    return {
      value: this.value,
      error: this.error && Boolean(this.value),
    }
  }
}

class ResponseField {
  value
  #error

  constructor(value = '', error = false) {
    this.value = value
    this.#error = error
  }

  set error(value) {
    this.#error = Boolean(value)
  }

  clone() {
    return new ResponseField(this.value, this.#error)
  }

  toObject() {
    return {
      value: this.value,
      error: this.#error,
    }
  }
}

export default ConsoleForm
