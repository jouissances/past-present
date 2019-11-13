const london = document.querySelector('.london');
const londonSettlementsNav = document.querySelector('.london-settlements-nav');
const londonSettlements = document.querySelector('.london-settlements');
const greaterLondonNav = document.querySelector('.greater-london-nav');
const greaterLondon = document.querySelector('.greater-london');
const cityCenterNav = document.querySelector('.city-center-nav');
const cityCenter = document.querySelector('.city-center');
const governmentNav = document.querySelector('.government-nav');
const government = document.querySelector('.government');
const sniNav = document.querySelector('.sni-nav');
const sni = document.querySelector('.sni');
const aarNav = document.querySelector('.aar-nav');
const aar = document.querySelector('.aar');
const legislativeNav = document.querySelector('.legislative-nav');
const legislative = document.querySelector('.legislative');
const agrilandsNav = document.querySelector('.agrilands-nav');
const agrilands = document.querySelector('.agrilands');

london.addEventListener('click', function(e) {
    slide(londonSettlementsNav);
    londonSettlements.classList.add('slideOut');
});

londonSettlementsNav.addEventListener('click', function(e) {
    slide(londonSettlements);
}, false);

greaterLondonNav.addEventListener('click', function(e) {
    slide(greaterLondon);
}, false);

cityCenterNav.addEventListener('click', function(e) {
    slide(cityCenter);
}, false);

governmentNav.addEventListener('click', function(e) {
    slide(government);
}, false);

sniNav.addEventListener('click', function(e) {
    slide(sni);
}, false);

aarNav.addEventListener('click', function(e) {
    slide(aar);
}, false);

legislativeNav.addEventListener('click', function(e) {
    slide(legislative);
}, false);

agrilandsNav.addEventListener('click', function(e) {
    slide(agrilands);
}, false);

const outskirts = document.querySelector('.outskirts');
const outskirtsSettlementsNav = document.querySelector('.outskirts-settlements-nav');
const outskirtsSettlements = document.querySelector('.outskirts-settlements');
const egNav = document.querySelector('.eg-nav');
const eg = document.querySelector('.eg');
const scNav = document.querySelector('.sc-nav');
const sc = document.querySelector('.sc');
const libertasNav = document.querySelector('.libertas-nav');
const libertas = document.querySelector('.libertas');
const colonyNav = document.querySelector('.colony-nav');
const colony = document.querySelector('.colony');

outskirts.addEventListener('click', function(e) {
    slide(outskirtsSettlementsNav);
    outskirtsSettlements.classList.add('slideOut');
});

outskirtsSettlementsNav.addEventListener('click', function(e) {
    slide(outskirtsSettlements);
}, false);

egNav.addEventListener('click', function(e) {
    slide(eg);
}, false);

scNav.addEventListener('click', function(e) {
    slide(sc);
}, false);

libertasNav.addEventListener('click', function(e) {
    slide(libertas);
}, false);

colonyNav.addEventListener('click', function(e) {
    slide(colony);
}, false);

function slide(arg) {
    if (arg.classList.contains('slideOut')) {
        console.log('YO I AM COMING IN')
        arg.classList.add('slideIn');
        arg.classList.remove('slideOut');
    } else {
        console.log('YO I AM GOING OUT');
        arg.classList.remove('slideIn');
        arg.classList.add('slideOut');
    }
}