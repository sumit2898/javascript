const languages = ['JavaScript', 'Python', 'Java', 'C++'];

languages.forEach(function(language) {
    console.log(language);
});// Output: JavaScript, Python, Java, C++

languages.forEach((language) => {
    console.log(language);
});// Output: JavaScript, Python, Java, C++

function printLanguage(language) {
    console.log(language);
}

languages.forEach(printLanguage);// Output: JavaScript, Python, Java, C++

languages.forEach((language, index, languages) => {
    console.log(`${index}: ${language} (Total: ${languages.length})`);
} );// Output: 0: JavaScript (Total: 4), 1: Python (Total: 4), 2: Java (Total: 4), 3: C++ (Total: 4)

const mycode = [
    {
        name : 'JavaScript',
        type : 'Programming Language',
        year : 1995
    },
      {
        name : 'Python',
        type : 'Programming Language',
        year : 1991
    },
    {
        name : 'Java',
        type : 'Programming Language',
        year : 1995
    }
]

mycode.forEach((code) => {
    console.log(`${code.name} is a ${code.type} that was created in ${code.year}.`);
});// Output: JavaScript is a Programming Language that was created in 1995, Python is a Programming Language that was created in 1991, Java is a Programming Language that was created in 1995.