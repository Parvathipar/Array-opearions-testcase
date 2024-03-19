var studentList = [
    {
     name: "Ashok",
     age: 22,
     department: "Electronics & Communication Engineering",
     totalMarks: 88,
    },
    {
     name: "Sachin",
     age: 23,
     department: "Electrical & Electronics Engineering",
     totalMarks: 95,
    },
    {
     name: "Narmadhaa",
     age: 21,
     department: "Computer Science Engineering",
     totalMarks: 85,
    },
    {
     name: "Kurian",
     age: 22,
     department: "Electronics & Communication Engineering",
     totalMarks: 75,
    },
    {
     name: "Arjith",
     age: 21,
     department: "Civil Engineering",
     totalMarks: 66,
    },
 ];
 
 
 function displayStudents(students) {
     var tableBody = document.getElementById("studentTableBody");
     tableBody.innerHTML = '';
 
     students.forEach(function(student) {
         var row = document.createElement("tr");
 
         var name = document.createElement("td");
         name.textContent = student.name;
         row.appendChild(name);
 
         var age = document.createElement("td");
         age.textContent = student.age;
         row.appendChild(age);
 
         var department = document.createElement("td");
         department.textContent = student.department;
         row.appendChild(department);
 
         var totalMarks = document.createElement("td");
         totalMarks.textContent = student.totalMarks;
         row.appendChild(totalMarks);
 
         tableBody.appendChild(row);
     });
 }
 

 function sortStudents() {
     var sortBy = document.getElementById("sortField").value;
     studentList.sort((a, b) => a[sortBy] - b[sortBy]);
     displayStudents(studentList);
 }
 

 function filterStudents() {
     var filterValue = parseInt(document.getElementById("filterMarks").value);
     var filteredStudents = studentList.filter(student => student.totalMarks > filterValue);
     displayStudents(filteredStudents);
 }
 

 function searchStudents() {
     var searchText = document.getElementById("searchInput").value.toLowerCase();
     var filteredStudents = studentList.filter(student =>
         student.name.toLowerCase().includes(searchText) ||
         student.department.toLowerCase().includes(searchText)||
         student.age.toString().includes(searchText) ||
         student.totalMarks.toString().includes(searchText)
     );
     displayStudents(filteredStudents);
 }
 

 displayStudents(studentList);
 

 document.getElementById("sortField").addEventListener("change", sortStudents);
 document.getElementById("filterMarks").addEventListener("change", filterStudents);
 document.getElementById("searchInput").addEventListener("input", searchStudents);
