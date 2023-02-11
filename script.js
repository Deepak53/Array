/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    let student = arr.map((test)=>{
        if(test.marks > 50 ){
          console.log(test.name);
        }
      })
    }
    PrintDeveloperswithMap();
  
  
  function PrintStudentsbyForEach() {
    let foreach = arr.forEach((val)=>{
        if(val.marks > 50){
            console.log(val);
        }
    })
  }
  PrintStudentsbyForEach();
  
  function addData() {
    
    let obj = {
        id : 4,
        name : "nitish",
        age : 40,
        marks : 40

    }
    let value = arr.push(obj);
    console.log(arr);
  }
  addData();
  
  function removeFailedStudent() {
    let remove = arr.filter(value => value.marks > 50);
    console.log(remove.name);
  }
  
  function concatenateArray() {
    //Write your code here
    let newarr = [
        { id: 1, name: "RAHUL", age: "18", marks: 80 },
        { id: 2, name: "RAJESH", age: "20", marks: 85 },
        { id: 3, name: "KIRAN", age: "19", marks: 35 },
    ];
    const array = arr.concat(newarr);
    console.log(array);
  }
  concatenateArray();