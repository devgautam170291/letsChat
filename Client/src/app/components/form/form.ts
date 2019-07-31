export class Form {
  showForm: any;
  formStyle: any;
  formHeader: any;
  formBody: any;
  formFooter: any;
  constructor() {
    this.showForm = false;
    this.formStyle = {};
    this.formHeader = new FormHeader();
    this.formBody  = new FormBody();
    this.formFooter = new FormFooter();
  }
}

class FormHeader {
  title: any;
  formHeaderStyle: any;
  constructor() {
    this.title = "";
    this.formHeaderStyle = {};
  }
}

class FormBody {
  formFields: any;
  constructor() {
    this.formFields = [];
  }
}

class FormFooter {
  constructor() {

  }
}
