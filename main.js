const featuredSpeakersInfos = [
  {
    img: 'https://summit.cckorea.org/images/base/speaker_01.png',
    title1: 'Mohamed Sheikh ghazouani',
    title2: 'The president of the RIM will attend this event.',
    para: 'Attending this event means a lot for the citizens of Tagant.',
  },
  {
    img: 'https://summit.cckorea.org/images/base/speaker_02.png',
    title1: 'Merzough Moahmed',
    title2: 'First Minister of the RIM',
    para: 'He will be ensuring the security of this event.',
  },
  {
    img: 'https://summit.cckorea.org/images/base/speaker_03.png',
    title1: 'Eddy Zein',
    title2: 'The minister of the indstry',
    para: 'He is from the region and he will be present at home. ',
  },
  {
    img: 'https://summit.cckorea.org/images/base/speaker_04.png',
    title1: 'Mamadou Shakho',
    title2: 'Minister of the environement',
    para: 'He is here to ensure the safety of the environment',
  },
  {
    img: 'https://summit.cckorea.org/images/base/speaker_05.png',
    title1: 'Macky Sall',
    title2: 'The president of senegal',
    para: 'He is visiting the country, after being invited.',
  },
  {
    img: 'https://summit.cckorea.org/images/base/speaker_06.png',
    title1: 'Koly Alpha',
    title2: 'The ex president of the country',
    para: 'He is a guest of honor alongside Macky Sall.',
  },

];
const char1 = featuredSpeakersInfos[0];
const char2 = featuredSpeakersInfos[1];
const char3 = featuredSpeakersInfos[2];
const char4 = featuredSpeakersInfos[3];
const char5 = featuredSpeakersInfos[4];
const char6 = featuredSpeakersInfos[5];

const featuredSpeakers = document.createElement('section');
document.body.append(featuredSpeakers);
featuredSpeakers.classList.add('featuredSpeakers');
featuredSpeakers.innerHTML = ` <h9 class="fSTitle capitalize">featured speakers</h9>
<div class="separator"></div>
<ul class="fSul">
    <li class="fSLi">
        <div class="fSImgContainer">
        <img src=${char1.img} alt="tezafutati" class="fSImg">
    </div>
    <div class="fSImgInfos">
    <h10 class="fSLiTitle">${char1.title1}</h10>
    <h11 class="fSLiTitle2"> ${char1.title2}
    </h11>
    <div class="fSLiseparator"></div>
    <p class="fSLiPara">${char1.para}
    </p>
    </div>
    </li>
    <li class="fSLi">
        <div class="fSImgContainer">
            <img src=${char2.img} alt="tezafutati" class="fSImg">
        </div>
        <div class="fSImgInfos">
        <h10 class="fSLiTitle">${char2.title1}</h10>
        <h11 class="fSLiTitle2"> ${char2.title2}
        </h11>
        <div class="fSLiseparator"></div>
        <p class="fSLiPara">${char2.para}
        </p>
        </div>
    </li>
    <li class ="sM-div">
    <h12 class ="moreButton upperCase">More</h12>
    <img class="seeMore" src="https://img.icons8.com/color/24/000000/expand-arrow--v2.png"/>
    </li>
    <li class="fSLi hidden dis-none">
        <div class="fSImgContainer">
            <img src=${char3.img} alt="tezafutati" class="fSImg">
        </div>
        <div class="fSImgInfos">
        <h10 class="fSLiTitle">${char3.title1}</h10>
        <h11 class="fSLiTitle2"> ${char3.title2}
        </h11>
        <div class="fSLiseparator"></div>
        <p class="fSLiPara">${char3.para}
        </p>
        </div>
    </li>
    <li class="fSLi hidden dis-none">
        <div class="fSImgContainer">
            <img src=${char4.img} alt="tezafutati" class="fSImg">
        </div>
        <div class="fSImgInfos">
        <h10 class="fSLiTitle">${char4.title1}</h10>
        <h11 class="fSLiTitle2"> ${char4.title2}
        </h11>
        <div class="fSLiseparator"></div>
        <p class="fSLiPara">${char4.para}
        </p>
        </div>
    </li>
    <li class="fSLi hidden dis-none">
        <div class="fSImgContainer">
            <img src=${char5.img} alt="tezafutati" class="fSImg">
        </div>
        <div class="fSImgInfos">
        <h10 class="fSLiTitle">${char5.title1}</h10>
        <h11 class="fSLiTitle2"> ${char5.title2}
        </h11>
        <div class="fSLiseparator"></div>
        <p class="fSLiPara">${char5.para}
        </p>
        </div>
    </li>
    <li class="fSLi hidden dis-none">
        <div class="fSImgContainer">
            <img src=${char6.img} alt="tezafutati" class="fSImg">
        </div>
        <div class="fSImgInfos">
        <h10 class="fSLiTitle">${char6.title1}</h10>
        <h11 class="fSLiTitle2"> ${char6.title2}
        </h11>
        <div class="fSLiseparator"></div>
        <p class="fSLiPara">${char6.para}
        </p>
        </div>
    </li>
    <li class ="sL-div dis-none">
    <h12 class ="lessButton upperCase">less</h12>
    <img class="seeLess" src="https://img.icons8.com/color/24/000000/expand-arrow--v2.png"/>
    </li>
</ul>`;
const seeMore = document.querySelector('.seeMore');
const hiddenLi = document.querySelectorAll('.hidden');
const seeMoreContainer = document.querySelector('.sM-div');
const seeLess = document.querySelector('.seeLess');
const seeLessContainer = document.querySelector('.sL-div');
seeMore.addEventListener('click', () => {
  seeMoreContainer.classList.add('dis-none');
  featuredSpeakers.style.height = '1500px';
  hiddenLi.forEach((li) => {
    li.classList.remove('dis-none');
  });
  seeLessContainer.classList.remove('dis-none');
});
seeLess.addEventListener('click', () => {
  seeMoreContainer.classList.remove('dis-none');
  featuredSpeakers.style.height = '600px';
  hiddenLi.forEach((li) => {
    li.classList.add('dis-none');
  });
  seeLessContainer.classList.add('dis-none');
});

// Open Menu
const navbar = document.querySelector('.navBar');
const main = document.getElementById('main');
const header = document.querySelector('.header');
const navUl = document.querySelector('.navUl');
const closeIcon = document.querySelector('.closeIcon');
const menuOpen = () => {
  header.classList.replace('header', 'header-active');
  navbar.classList.add('dis-none');
  main.classList.add('dis-none');
  featuredSpeakers.classList.add('dis-none');
  navUl.classList.remove('dis-none');
  closeIcon.classList.remove('dis-none');
};

const menuCLose = () => {
  header.classList.replace('header-active', 'header');
  navbar.classList.remove('dis-none');
  main.classList.remove('dis-none');
  featuredSpeakers.classList.remove('dis-none');
  navUl.classList.add('dis-none');
  closeIcon.classList.add('dis-none');
};
navbar.addEventListener('click', menuOpen);
closeIcon.addEventListener('click', menuCLose);
