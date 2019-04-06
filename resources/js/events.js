//calender(dd, mm, yyyy)
let cards = [
  {
    title:'Front End Development',
    image:'web.jpg',
    description: 'Dr. Ahmed El-Alfy Head of software development at Robusta Studio and Lead of Facebook Developers Circle in Cairo',
    date: calender(8, 3, 2019),
    event: 'https://www.facebook.com/events/1152344334920189/'
  },
  {
    title:'A Day with Oracle',
    image:'oracle.jpg',
    description: "Technology leading star 'Oracle'.Oracle Academy is giving a hand to today's potential talents to be tomorrow's heroes",
    date: calender(1, 1, 2019)
  },
  {
    title:'Cyber Security',
    image:'security.jpg',
    description: "Master Security basics with Moataz Salah,<br> CEO & founder of CyberTalents",
    date: calender(25, 9, 2018)
  },
  {
    title:'How To Join Software Big Brands',
    image:'attia.jpg',
    description: "How to join big brands with Ahmed Samir Senior Software Developer at Oracle",
    date: calender(4, 4, 2018)
  }
]

function calender(day, month, year){
	const d = new Date();
	var days = (d.getDate() - day) + (d.getMonth() + 1 - month) * 30 + (d.getFullYear() - year) * 365;
	var existingDate, previousDate;
  if(days < 7)
  {
  	previousDate = days;
  	existingDate = `day`;
  }
  else if(days < 30)
  {
  	previousDate = days / 7;
  	existingDate =`week`;
  }
  else if(days < 365)
  {
  	previousDate = days / 30;
  	existingDate =`month`;
  }
  else{
  	previousDate = days / 365;
  	existingDate =`year`;
  }
  if(Math.floor(previousDate) > 1)
  {
  	existingDate += 's';
  }
  return `about ${Math.floor(previousDate)} ${existingDate} ago`;
}

createCardHTML = (card) => {
  const eventLink = document.createElement('a');
  eventLink.href = card.event;
  eventLink.target ="_blank";
  eventLink.className = 'card mySlides';
  eventLink.style.display = "none";


  const eventCard = document.createElement('div');
  eventLink.append(eventCard);


  const image = document.createElement('img');
  image.src = `resources/images/${card.image}`;
  image.alt = `${card.title}-event-img`;
  eventCard.append(image);

  const data = document.createElement('div')
  data.className = 'data';

  const name = document.createElement('h4');
  name.innerHTML = card.title;
  data.append(name);

  const description = document.createElement('p');
  description.innerHTML = card.description;
  data.append(description);


  eventCard.append(data);

  const date = document.createElement('footer');
  date.innerHTML = card.date;
  eventCard.append(date);

  return eventLink;
}

const eventsBox = document.querySelector('.card-box');

cards.forEach(card => {
    eventsBox.append(createCardHTML(card));
});

var myIndex = 0;
cardsGenerator();

function cardsGenerator() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(cardsGenerator, 3000); // Change image every 4 seconds
}
