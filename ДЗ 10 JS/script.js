class Person {
  constructor(name, age, gender) {
    if (typeof name !== "string") {
      console.error("Ошибка: Имя должно быть строкой");
      return;
    }

    if (typeof age !== "number" || age <= 0) {
      console.error("Ошибка: Возраст должен быть положительным числом");
      return;
    }
    this.age = age;

    const validGenders = ["мужской", "женский"];
    if (!validGenders.includes(gender)) {
      console.error('Ошибка: Пол должен быть либо "мужской", либо "женский".');
      return;
    }
    this.gender = gender;
  }


  introduce() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
  }

  isAdult() {
    return this.age >= 18;
  }
}


class Student extends Person {
  constructor(name, age, gender, major, gpa) {
    super(name, age, gender);

    if (!this.name || !this.age || !this.gender) {
      console.error("Невозможно создать студента из-за некорректных данных родительского класса");
      return;
    }

    if (typeof major !== "string") {
      console.error("Специальность должна быть строкой");
      return;
    }

    if (typeof gpa !== "number" || gpa < 0 || gpa > 4) {
      console.error("Средний балл должен быть числом от 0 до 4");
      return;
    }
    this.gpa = gpa;
  }


  study() {
    console.log(`${this.name} учится на специальности ${this.major}.`);
  }


  improveGPA(points) {
    if (typeof points !== "number" || points <= 0) {
      console.error("Количество баллов должно быть положительным числом");
      return;
    }
    this.gpa += points;
    if (this.gpa > 4) {
      this.gpa = 4;
    }
    console.log(`Новый средний балл ${this.name}: ${this.gpa}`);
  }

  introduce() {
    console.log(
      `Привет, меня зовут ${this.name}, мне ${this.age} лет. Я учусь на специальности ${this.major}, мой средний балл: ${this.gpa}.`
    );
  }
}

const person1 = new Person("Анна", 25, "женский");
person1.introduce();
const student1 = new Student("Мария", 20, "женский", "Информатика", 3.5);
student1.introduce();
student1.study();
student1.improveGPA(0.5);