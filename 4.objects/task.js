"use strict"
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
//if (!this.marks) {
  if (!this.hasOwnProperty("marks")) {
    console.log("Этот студент отчислен");
    return;
  }
  if (!!marksToAdd.length) {
    this.marks.push(...marksToAdd);
    return;
  }
  return;
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks") || !this.marks.length) {
    return 0;   
  }
  const sum = this.marks.reduce( (acc,mark) => acc + mark);
  return +sum / this.marks.length.toFixed(2);
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}