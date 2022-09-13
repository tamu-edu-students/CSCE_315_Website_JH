
function load_style() {
    let page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null) {
        page_style = "../css/index_1.css";
    }
    document.getElementById("theme").setAttribute("href", page_style);
}

function theme_one() {
    localStorage.setItem("page_stylesheet_name", "../css/index_1.css");
    load_style();
}

function theme_two() {
    localStorage.setItem("page_stylesheet_name", "../css/index_2.css");
    load_style();
}

