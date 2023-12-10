import { Social } from "./Social";

const magicianOfWords = "Magician Of Words";
const lajzonKaJadugar = "Lajzon Ka Jadugar";
const link = Social.LajzonKaJadugar;

const category = ["English", "Hindi"];

function sortByDate(poetry) {
  poetry.sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date2 - date1;
  });
  return poetry;
}

const Poetry = [
  {
    description: ["जादू हैं इन लफ़्ज़ों मैं, आपको प्यार ना हो जाए हमसे !"],
    date: "April 2, 2022",
    category: category[1],
  },
  {
    description: [
      "प्यार उनसे करो जो आपके मुस्कुराने की वजह हैं",
      "उनसे करो जो आपके ख़ुशी का एहसास हैं",
      "उनसे करो जो आपके लिए बहुत खास हैं",
      "क्या आप ही हैं वो, जिसकी मुझे तलाश हैं?",
    ],
    date: "February 21, 2022",
    category: category[1],
  },
  {
    description: [
      "You Have Devoted Great Effort To A Friendship, Attributed Immense Value To It, And Devoted A Lot Of Time To It's Growth, Only To Experience A Disparity Where The Depth Of Your Commitment Is Not Met With An Equivalent Sense Of Value.",
    ],
    date: "December 07, 2023",
    category: category[0],
  },
  {
    description: [
      "You Can't Make Someone Talk To You Or Fix Things If They Don't Want To.",
      "You Can't Make Someone Realise That Your Love Is Worth Holding Onto.",
      "Eventually, They Have To Figure It Out On Their Own.",
      "Sometimes, If They Want To Leave, It's Better To Let Them Go.",
    ],
    date: "September 26, 2023",
    category: category[0],
  },
  {
    description: [
      "Don't make FRIENDS based on calculations.",
      "Don't make FRIENDS based on calculations.",
      "The market has the necessary goods according to our needs.",
      "But you won't find anyone except your FRIENDS when you are in need.",
    ],
    date: "September 23, 2023",
    category: category[0],
  },
  {
    description: [
      "Apna Khyaal Rakha Karo, Baleh Hi Saanse",
      "Teri Hai, Par Inme Jaan Hamari Basthi Hai",
    ],
    date: "September 18, 2023",
    category: category[0],
  },
  {
    description: [
      "The eyes of my soul have met many but have ended up lost in one.",
      "Even today, I fall in love with those eyes, and they happen to be yours!",
    ],
    date: "September 17, 2023",
    category: category[0],
  },
  {
    description: [
      "Agar Mai Aapke Saath Pehle Jaisa Nahi Hu Toh Galthi Meri Nahi, Balki Aapki Hai",
      "Jab Hum Saath Teh, Aapne Humein Kabhi Apna Nahi Samjha, Naa Aapne Samay Di, Naa Dosthi Nibhayi, Naa Pyaar Dikhaya.",
      "Yeh Toh Bas Ek Aisa Ristha Tah Jo Zaruratein Aane Par On Ya Off Ki Jaathi Thi.",
      "Par Afsos, Samay Aa Chuka Hai Inn Logon Ko Apne Zindagi Se Bahar Nikalne Ka, Joh Humare Na Reh Sake, Woh Bala Kisi Aurr Ke Kya Rahenge?",
    ],
    date: "September 11, 2023",
    category: category[0],
  },
  {
    description: [
      "Some people show up in your life when you least expect them to. Unknowingly, those people grow in gaining so much importance that you are willing to do everything for them.",
      "As years fly by, we realize these were the people we wasted our precious time on when that same individual forgets our existence.",
    ],
    date: "September 03, 2023",
    category: category[0],
  },
  {
    description: [
      "Never let disappointment weigh you down when someone fails to recognize your value.",
      "Just as diamonds might go unnoticed by scrap dealers who don't understand their brilliance, your worth can sometimes be overlooked by those who don't truly appreciate your unique qualities.",
      "Keep shining, and your real value will eventually find it's rightful admirers."
    ],
    date: "September 10, 2023",
    category: category[0],
  },
  {
    description: [
      "Aapne Humko Aaj Bhula Diya",
      "Aapne Humko Aaj Puchna Zaruri Nahi Samjha",
      "Janab, Yeh Dhin Bhi Bohoth Dhoor Nahi Hai",
      "Jab Hum Aapke Asthithv Ko Zaruri Nahi Samjhenge",
    ],
    date: "Januray 14, 2023",
    category: category[0],
  },
  {
    description: [
      "Yuhi Apne Zindagi Se Jhoonj Raha Tah",      
      "Ke, Yuhi Apne Zindagi Mai Uljah Hua Tah",
      "Dosthi Ka Haath Hi Kyu Badaya, Jab Ek Na Ek Dhin, Humein Akhele Chhodke Hi Jaana Tah",
    ],
    date: "October 28, 2022",
    category: category[0],
  },
  {
    description: [
      "Kuch Log Aapse Aaj Madath Mangenge. Toh Kuch Kal", 
      "Haaji, Kuch Log Aapse Aaj Madath Mangenge, Toh Kuch Kal",
      "Par Jab Kaamiyab Hothe Hai, Nah Shukar Guzar Hothe Hai, Aurr Naahi Humein Yaadh Karthe Hai",
    ],
    date: "October 27, 2022",
    category: category[0],
  },
];

const sortedPoetry = sortByDate(Poetry);

export { lajzonKaJadugar, link, magicianOfWords, sortedPoetry };
