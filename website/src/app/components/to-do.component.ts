import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  inputValue: string = '';
  inputAge: number | null = null;
  userNameList: { id: number, name: string, age: number }[] = [];
  nextId: number = 1;
  formSubmitted: boolean = false;

  add() {
    this.formSubmitted = true;
    if (this.validateInputs()) {
      this.userNameList.push({ id: this.nextId++, name: this.inputValue, age: this.inputAge! }); 
      
      
      setTimeout(() => {
        this.formSubmitted = false;
      });

      this.inputValue = '';
      this.inputAge = null;
    }
  }

  remove(user: { id: number, name: string, age: number }) {
    const index = this.userNameList.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.userNameList.splice(index, 1);
    }
  }

  validateInputs(): boolean {
    if (!this.inputValue || this.inputValue.length < 3) {
      return false;
    }

    if (this.inputAge === null || this.inputAge < 18) {
      return false;
    }

    return true;
  }
}
