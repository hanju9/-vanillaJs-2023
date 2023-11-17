const quotes = [
{
    quote:"어제보다 나은 오늘을 만들기 위해 노력하라.",
    author:"스티브 잡스",
},
{
    quote:"성공의 비밀은 자신의 능력을 믿는 것이다",
    author:"알버트 아인슈타인",
},
{
    quote:"변화는 자신을 찾는 모험이다.",
    author:"Lao Tzu",
},
{
    quote:"매일 조금씩, 하지만 꾸준히.",
    author:"워렌 버핏",
},
{
    quote:"목표를 크게 잡고 작게 시작하라.",
    author:"토니 로빈스",
},
{
    quote:"실패는 재시도할 기회일 뿐이다.",
    author:"톰 웨일러",
},
{
    quote:"공은 가장 높은 산을 오르는 것이 아니라, 처음으로 움직이는 것에서 시작된다.",
    author:"존 C. 맥스웰",
},
{
    quote:"신을 이기는 것은 세계에서 가장 어려운 승리이다.",
    author:"아리스토텔레스",
},
{
    quote:"성공은 준비와 기회가 만나는 곳에서 탄생한다.",
    author:"콜린 피더",
},
{
    quote:"하는 동안 희망을 가지고, 기도하는 동안 노력하라.",
    author:"엘버트 허버드",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
