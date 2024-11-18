function myFunction() {
    // Access the text content of the first child node of #demo and assign it to #result
    document.getElementById("result").innerHTML = document.getElementById("demo").firstChild.nodeValue;

    // Alternative method: Access the text content of the first child node of #demo and assign it to #result1
    document.getElementById("result1").innerHTML = document.getElementById("demo").childNodes[0].nodeValue;
}