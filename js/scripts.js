const cards = document.querySelectorAll(".fadein");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

});

const form = document.querySelector("#contactForm");

if(form){

form.addEventListener("submit",(e)=>{

const name = document.querySelector("#name").value;

if(name === ""){
    alert("名前を入力してください");
    e.preventDefault();
}

});

}
// ページ表示時のフェードイン
window.addEventListener("load", () => {
    document.body.classList.add("page-show");
});


// ページ移動時のフェードアウト
const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", (e) => {

        const url = link.href;

        // 外部リンクやページ内リンクは除外
        if(
            url.includes("#") ||
            link.target === "_blank"
        ){
            return;
        }

        e.preventDefault();

        document.body.classList.remove("page-show");

        setTimeout(() => {
            location.href = url;
        },500);

    });

});