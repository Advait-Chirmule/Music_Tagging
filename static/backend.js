let searchButton = document.getElementById('button1');
const a1 = document.getElementById('mainbody');
const c1 = a1.innerHTML;
searchButton.addEventListener('click', function (e) {
    e.preventdefault;
    let a = a1;
    let c = c1;
    let text1 = document.getElementById('search1').value;
    let text = " " + text1 + " ";
    let replacement = " " + '<span style="color:red; background-color: #FFFF00"><b>' + text1 + "</b></span>" + " ";
    let b = c.replaceAll(text, replacement);
    a.innerHTML = b;
});

let audioButton = document.getElementById("button2");
audioButton.addEventListener('click', function (e) {
    e.preventdefault;
    try {
        let hi = document.getElementById("formFile").files[0];
        let checktype = document.getElementById("formFile").files[0].type;
        if (checktype == 'audio/mpeg') {
            let fileURL = URL.createObjectURL(hi);
            let text2 = `<br><h4>You have uploaded:</h4><audio controls><source src='` + fileURL + `'` + `type='audio/mp3'></audio>`;
            const d1 = document.getElementById("hello1");
            let d = d1;
            d.innerHTML = text2;
            let flasktext = `<button class="btn bg-light buttonan socialdistancing2" id="button4">Submit Flask</button>`
            const e1 = document.getElementById("flaskping");
            let e = e1;
            e.innerHTML = flasktext;
        }
        else {
            let text2 = `<br><h5>Sorry, this file type is not supported</h5>`
            const d1 = document.getElementById("hello1");
            let d = d1;
            d.innerHTML = text2;
            let reset1 = document.getElementById("formFile");
            reset1.value = '';
        }
    }
    catch {
        let text2 = `<br><h5>No file selected</h5>`
        const d1 = document.getElementById("hello1");
        let d = d1;
        d.innerHTML = text2;
    }
});

let resetButton = document.getElementById("button3");
resetButton.addEventListener('click', function (e) {
    e.preventDefault;
    let reset1 = document.getElementById("formFile");
    reset1.value = '';
});