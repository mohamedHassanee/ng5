import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray , FormControl , Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})

export class CheckboxGroupComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    // init form group with form controls
    this.form = new FormGroup ({
      name : new FormControl('', Validators.required),
      skills: this.buildSkills()
    }, skillsValidator);
  }

  // simulate user model
  user = {
    name: 'Mohamed Hassan',
    skills: [
      { name: 'JS',  selected: true, id: 1 },
      { name: 'CSS',  selected: false, id: 2 },
    ]
  };

  ngOnInit() {
  }

  // return formControl list that have been built dynamically to html to draw checkbox list
  get skills() {
    return this.form.get('skills');
  }

  // build checkboxes formControl Dynamically
  buildSkills() {
    const arr = this.user.skills.map(skill => {
      return this.fb.control(skill.selected);
    });
    return this.fb.array(arr);
  }

  submit(value) {
    // TODO submit form after check the validation
  }

  // bind checkboxes values to model
  checkboxChanged(form) {
    const formValue = Object.assign({}, form , {
    skills: form.skills.map((selected, i) => {
        return {
          name: this.user.skills[i].name,
          selected,
          id: this.user.skills[i].id
        };
      })
    });
    this.user.skills = formValue.skills;
  }

  isOneOfCheckboxSelected() {
    this.user.skills.forEach(skill => {
      if (skill.selected) {
       return true;
      }
    });
    return false;
  }

}

function skillsValidator(g: FormGroup) {
  let b = false;
  g.get('skills')['controls'].forEach(c => {
    if (c.value) {
     b = true;
    }
  });
  return b ? null : { skillsValidator : {valid: false} };
}
