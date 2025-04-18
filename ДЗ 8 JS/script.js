let company = {
  companyName: "Моя Компания",
  employees: [],
  positions: [],
  directorIndex: null,

  addEmployee: function (fullName, gender, age, position, salary) {
    if (!this.positions.includes(position)) {
      this.positions.push(position);
    }

    let employee = {
      fullName: fullName,
      gender: gender,
      age: age,
      position: position,
      salary: salary,
    };

    this.employees.push(employee);
    console.log(`Сотрудник ${fullName} успешно добавлен.`);
  },

  removeEmployee: function (index) {
    if (index >= 0 && index < this.employees.length) {
      let removedEmployee = this.employees.splice(index, 1);
      console.log(`Сотрудник ${removedEmployee[0].fullName} удален.`);
    } else {
      console.log("Ошибка: Неверный индекс сотрудника.");
    }
  },

  updateEmployee: function (index) {
    if (index >= 0 && index < this.employees.length) {
      let employee = this.employees[index];

      employee.fullName = prompt("Введите новое ФИО:", employee.fullName);
      employee.gender = prompt("Введите пол:", employee.gender);
      employee.age = parseInt(prompt("Введите возраст:", employee.age));
      employee.position = prompt("Введите должность:", employee.position);
      employee.salary = parseFloat(prompt("Введите зарплату:", employee.salary));

      console.log(`Данные сотрудника ${employee.fullName} обновлены.`);
    } else {
      console.log("Ошибка: Неверный индекс сотрудника.");
    }
  },

  showAllEmployees: function () {
    console.log("Список всех сотрудников:");
    if (this.employees.length === 0) {
      console.log("Список сотрудников пуст.");
    } else {
      this.employees.forEach((employee, index) => {
        console.log(
          `Индекс: ${index}, ФИО: ${employee.fullName}, Пол: ${employee.gender}, Возраст: ${employee.age}, Должность: ${employee.position}, Зарплата: ${employee.salary}`
        );
      });
    }
  },

  showAllPositions: function () {
    console.log("Список всех должностей:");
    if (this.positions.length === 0) {
      console.log("Список должностей пуст.");
    } else {
      this.positions.forEach((position, index) => {
        console.log(`${index + 1}. ${position}`);
      });
    }
  },

  getDirectorName: function () {
    if (this.directorIndex !== null) {
      let director = this.employees[this.directorIndex];
      console.log(`Директор компании: ${director.fullName}`);
    } else {
      console.log("Директор не назначен.");
    }
  },

  setDirector: function (index) {
    if (index >= 0 && index < this.employees.length) {
      this.directorIndex = index;
      console.log(`Директором назначен ${this.employees[index].fullName}.`);
    } else {
      console.log("Ошибка: Неверный индекс сотрудника.");
    }
  },
};

company.addEmployee("Иван Иванов", "Мужской", 35, "Менеджер", 50000);
company.addEmployee("Анна Петрова", "Женский", 28, "Бухгалтер", 45000);
company.addEmployee("Сергей Сидоров", "Мужской", 42, "Директор", 70000);
company.showAllEmployees();
company.showAllPositions();
company.setDirector(2);
company.getDirectorName();
company.updateEmployee(0);
company.removeEmployee(1);