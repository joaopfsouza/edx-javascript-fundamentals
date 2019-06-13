function changeImportantStyle() {
    var importantClass = document.querySelectorAll(".important");

    importantClass.forEach(element => {
        element.style.color = 'blue';
    });


}