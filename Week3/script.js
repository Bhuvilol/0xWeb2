function addTodo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    console.log(value);
    }

    let ctr = 0;
    function callback(){
        console.log(ctr);
        const el = document.querySelector("h4")
        el.innerHTML = ctr;
        ctr++;
    }
    setInterval(callback, 1000);