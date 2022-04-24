const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로"
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료"
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇"
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author: "제임스 오펜하임"
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "톰 모나건"
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "찰스다윈"
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡"
    },
    {
        quote: "최선을 다해 최대한으로 살수 있어야 한다 삶은 놀라운 신비요 아름다움이다.",
        author: "법정스님"
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테"
    },
    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "톨스토이"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;