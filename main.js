// Menangkan Data

const selectPStudy = document.getElementById('selectPStudy')
const selectFaculty = document.getElementById('selectFaculty')
const buttonForm = document.getElementById('buttonForm')
const tableForm = document.getElementById('tableForm')
const searchForm = document.getElementById('searchForm')
const buttonFilterF = document.getElementById('buttonFilterF')
const buttonFilterPS = document.getElementById('buttonFilterPS')
const dropdownFilterFaculty = document.getElementById('dropdownFilterFaculty')
const dropdownFilterPStudy = document.getElementById('dropdownFilterPStudy')

// Daftar student
const students = [
    {
        studentID: '105021810001',
        fullName: 'John Doe',
        gender: 'Male',
        faculty: 'Fakultas Ilmu Komputer',
        programOfStudy: 'Sistem Informasi',
    },
    {
        studentID: '105021810002',
        fullName: 'Alice',
        gender: 'Female',
        faculty: 'Fakultas Keperawatan',
        programOfStudy: 'Profesi Ners',
    },
    {
        studentID: '105021810004',
        fullName: 'Timothy Tiwow',
        gender: 'Male',
        faculty: 'Fakultas Ilmu Komputer',
        programOfStudy: 'Informatika',
    }
]

// menambahkan Student ke tabel
    buttonForm.addEventListener('click', e => {
        const studentID = document.getElementById('studentID').value
        const studentName = document.getElementById('studentFullName').value
        const studentGender = document.querySelector('input[name="buttonGender"]:checked').value
        const studentFaculty = selectFaculty.value
        const studentProgramOfStudy = selectPStudy.value


    addStudentToTable({
        studentID: studentID,
        studentName: studentName,
        studentGender: studentGender == 'genderMale' ? 'Male' : 'Female',
        studentFaculty: studentFaculty,
        studentProgramOfStudy: studentProgramOfStudy
    }, tableForm)

    //reset inputs
    studentID = '';
    studentName = '';
    studentFaculty = '';
    studentProgramOfStudy = '';
    studentGender = '';

})

// Search
    function searchForm(e) {
    let searchText = e.target.value.toLowerCase();
    let listForm = [...document.querySelectorAll('td')];
    listForm.forEach((fakultas) =>{
        let fakultasName = fakultas.firstChild.textContent;
        if(fakultasName.toLowerCase().indexOf(searchText) != -1){
            fakultas.style.display = '';
        } else {
            fakultas.style.display = 'none';
        }
        })
    };

// Filter
buttonFilterF.addEventListener('click', e => 
    filterTable(tableForm, dropdownFilterFaculty.value, 'faculty')
)

buttonFilterPS.addEventListener('click', e => 
    filterTable(tableForm, dropdownFilterPStudy.value, 'programOfStudy')
)

// Validation
    if(!studentID|| !fullName || !gender || !faculty || !programOfStudy){
        alert("Tidak sesuai format");
        return;
    }


// filter table
    switch(filterBy) {
        case "none" : {
            for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                if(tableRow.children[1].innerText.toLowerCase().includes(query.toLowerCase()))
                    tableRow.style.display = null
                else
                    tableRow.style.display = 'none'
            break
        }
        // untuk filter pada fakultasnya
        case "faculty" : {
            if(query == '-- SELECT FACULTY --') {
                for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                    tableRow.style.display = null
               
                break
            }
            
            for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                if(tableRow.children[3].innerText.includes(query))
                    tableRow.style.display = null
                else
                    tableRow.style.display = 'none'
            break
        }
        // untuk filter pada jurusannya
        case "programOfStudy" : {
            if(query == '-- SELECT PROGRAM OF STUDY --') {
                for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                    tableRow.style.display = null
                
                break
            }

            for(const tableRow of Array.from(studentTableObject.children[0].children).splice(1))
                if(tableRow.children[4].innerText.includes(query))
                    tableRow.style.display = null
                else
                    tableRow.style.display = 'none'
            break
        }
        default: {
            break
        }
    }


// isi dari dropdown pada fakultas dan jurusan
const dropdownData = {
    'Pascasarjana' : [
        'Magister Manajemen',
        'Magister Teologi'
    ],
    'Fakultas Filsafat' : [
        'Ilmu Filsafat',
    ],
    'Fakultas Keguruan dan Ilmu Pendidikan' : [
        'Pendidikan Agama',
        'Pendidikan Bahasa Inggris',
        'Pendidikan Ekonomi',
        'Pendidikan Luar Sekolah',
    ],
    'Fakultas Ekonomi dan Bisnis' : [
        'Akuntansi',
        'Manajemen',
    ],
    'Fakultas Pertanian' : [
        'Agroteknologi',
    ],
    'Fakultas Ilmu Komputer' : [
        'Informatika',
        'Sistem Informasi',
    ],
    'Fakultas Keperawatan' : [
        'Profesi Ners',
        'Keperawatan',
    ],
    'Akademi Sekretari Manajemen Indonesia Klabat' : [
        'Sekretari (D3)',
    ]
}

students.forEach(element => {
    addStudentToTable(element, tableForm)
});

// event untuk add student ke tabel
buttonForm.addEventListener('click', e => {
    const studentID = document.getElementById('addStudFormStudID').value
    const studentName = document.getElementById('addStudFormStudName').value
    const studentGender = document.querySelector('input[name="genderRadioBtn"]:checked').id
    const studentFaculty = selectFaculty.value
    const studentProgramOfStudy = selectPStudy.value

    addStudentToTable({
    studentID: studentID,
    studentName: studentName,
    studentGender: studentGender == 'genderMale' ? 'Male' : 'Female',
    studentFaculty: studentFaculty,
    studentProgramOfStudy: studentProgramOfStudy
    }, tableForm)

    //reset all inputs

    studentID = '';
    studentName = '';
    studentFaculty = '';
    studentProgramOfStudy = '';
    studentGender = '';
