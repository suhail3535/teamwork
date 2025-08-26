
    const allData = [


    {img:"https://png.pngtree.com/thumb_back/fh260/background/20240604/pngtree-coconut-palm-tree-isolated-on-sky-image_15739690.jpg",
        title: "Coconut",
        desc: "Tropical and refreshing."},
        {
            title: "Apple",
            desc: "Crisp and sweet.",
            img: "https://tse1.mm.bing.net/th/id/OIP.xA8rCn5H2ugw5IjM-8JfYwHaE6?pid=Api&P=0&h=180"
        },
        {
            title: "Banana",
            desc: "Soft and creamy.",
            img: "https://st.focusedcollection.com/11312302/i/1800/focused_150226594-stock-photo-apple-and-yellow-banana.jpg"
        },
        {
            title: "Apple",
            desc: "Crisp and sweet.",
            img: "https://tse1.mm.bing.net/th/id/OIP.xA8rCn5H2ugw5IjM-8JfYwHaE6?pid=Api&P=0&h=180"
        },
        {
            title: "Banana",
            desc: "Soft and creamy.",
            img: "https://st.focusedcollection.com/11312302/i/1800/focused_150226594-stock-photo-apple-and-yellow-banana.jpg"
        }, {
            title: "Apple",
            desc: "Crisp and sweet.",
            img: "https://tse1.mm.bing.net/th/id/OIP.xA8rCn5H2ugw5IjM-8JfYwHaE6?pid=Api&P=0&h=180"
        },
        {
            title: "Banana",
            desc: "Soft and creamy.",
            img: "https://st.focusedcollection.com/11312302/i/1800/focused_150226594-stock-photo-apple-and-yellow-banana.jpg"
        }, {
            title: "Apple",
            desc: "Crisp and sweet.",
            img: "https://tse1.mm.bing.net/th/id/OIP.xA8rCn5H2ugw5IjM-8JfYwHaE6?pid=Api&P=0&h=180"
        },
        {
            title: "Banana",
            desc: "Soft and creamy.",
            img: "https://st.focusedcollection.com/11312302/i/1800/focused_150226594-stock-photo-apple-and-yellow-banana.jpg"
        }, {
            title: "Apple",
            desc: "Crisp and sweet.",
            img: "https://tse1.mm.bing.net/th/id/OIP.xA8rCn5H2ugw5IjM-8JfYwHaE6?pid=Api&P=0&h=180"
        },
        {
            title: "Banana",
            desc: "Soft and creamy.",
            img: "https://st.focusedcollection.com/11312302/i/1800/focused_150226594-stock-photo-apple-and-yellow-banana.jpg"
        }
    ];
    let cardContainer = document.getElementById("card-container");

    function creatCard(data) {
        data.forEach((item) => {
            let card = document.createElement("div");
            let image = document.createElement("img");
            image.src = item.img;

            let title = document.createElement("h2");
            title.innerText = item.title;

            let desc = document.createElement("p");
            desc.innerText = item.desc;

            let btn=document.createElement("button");
            btn.innerText="Buy Now";

            card.append(image,title,desc,btn);
            cardContainer.append(card);
        })

    }

    creatCard(allData);


