function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...Marks) {
  if(this.marks === undefined){ 
    this.marks = [...Marks]; 
    } else {
      this.marks.push(...Marks);
    }
}

Student.prototype.getAverage = function () {
  let result;
  result = 0;  
  this.marks.forEach(element => {
      result+=element;
  });
  return result / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
  console.log(this.exclude);
}

