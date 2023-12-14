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
      "Keep shining, and your real value will eventually find it's rightful admirers.",
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
  {
    description: [
      "Na Jaane Kithno Ne Humein Bala Bura Kaha Ho",
      "Ki, Na Jaane Kithne Log Aise Hai, Jo Dusron Ki Baathon Mai Aakar Humein Bura Samajhte Ho",
      "Janab, Burayi Tum Unhi Logon Ki Karthe Ho. Jinse Tum Barabari Nahi Kar Pathe Ho",
    ],
    date: "July 29, 2022",
    category: category[0],
  },
  {
    description: [
      "As Time Flies, People Change. You're Just A Medium Of Exchange.",
      "As Time Flies, People Change. They Tend To Behave Strange.",
    ],
    date: "July 27, 2022",
    category: category[0],
  },
  {
    description: [
      "Kuch Logh Kithne Ajeeb Hothe Hai",
      "Aapko Tabhi Yaadh Karthe Hai, Jab Unhe Aapki Zarurat Hothi Hai",
      "Na Jane Kyu Hai Woh Aise, Ek Baar Hi Sahi, Unhein Bina Kisi Matlab Ke Yaadh Karke Toh Dekhiye",
    ],
    date: "July 21, 2022",
    category: category[0],
  },
  {
    description: [
      "वक्त Ke Saath लोग बदलते Hai, जैसे चाहे Waise बदलते Hai",
      "Ke, समय Ke Saath सभी बदलते Hai, Jab ज़रूरत Pade Tab बदलते Hai",
      "जिंदगी Mai Kisi Aise Ko ढूंढो, Ki वक्त बदले Ya ज़माना, Na छोड़े Kabhi साथ तुम्हारा।",
    ],
    date: "April 06, 2022",
    category: category[0],
  },
  {
    description: [
      "Jab मैं छोटा ता माँ Ke Saamne रोने Se Jo माँगा Woh मिलता",
      "Bohoth बार उन्हें रोते Dekha पर Hamesha सवाल Yeh Raha Ki मुझसे Kyun Kabhi कुछ नहीं माँगा?",
      "Jab मैं छोटा ता माँ Ke Saamne रोने Se Jo माँगा Woh मिलता",
      "आज Jab मैंने Unka सपना पूरा Kiya तो उन्हें रोते Dekha",
    ],
    date: "April 05, 2022",
    category: category[0],
  },
  {
    description: [
      "कान खोल कर Sunnlo जलने वालों",
      "Haaji, कान खोल कर Sunnlo जलने वालों",
      "हमसे बराबरी Nahi Kar पाओगे Yeh गलत फहमी Apne दिमाग Se Pehle निकालो",
    ],
    date: "April 05, 2022",
    category: category[0],
  },
  {
    description: [
      "आपकी फ़रमाइश Par, हमने Chuna हयात",
      "Sirf सामने Se देते Hai हाथ पीट पीछे खंजर Marna Hai Inki औकात",
      "हमारी Hogi देर सारे लोगों Se मुलाक़ात Kuch Se रिश्तें नाते Rahenge विश्वासघात",
      "नाकामयाबी Ka दोष Denge Apne हालात Jab Tak Na बने विख्यात",
      "बिल्कुल अच्छी Nahi Hai Yeh देहात हमारी Koi पूछता Nahi Hai खैरियत",
      "Hogi Kuch परेशानियाँ Iss रात क्या Patha कल Ho सुप्रभात",
      "Ek दूसरे Ke दो साथ Kijiye अपनो Se Kuch बात यही Toh Hai हयात",
    ],
    date: "April 04, 2022",
    category: category[0],
  },
  {
    description: [
      "Your World Will Haue Thousands Like Me, But Mine Will Not Have Anyone Like You!",
    ],
    date: "April 04, 2022",
    category: category[0],
  },
  {
    description: [
      "Jaise 'एक सिक्के के दो पहलू होते हैं।'",
      "Ussi Tarah, 'दोस्ती के दो पहलू होते हैं।'",
      "Ek आपकी मदद Karne Ke Liye एक तरीका ढुंढेगा Aurr Dusra आपकी मदद Na Karne Ke बहाने ढुंढेगा!",
    ],
    date: "April 04, 2022",
    category: category[0],
  },
  {
    description: [
      "खुदा से मांगी हुई मन्नाथ है तू",
      "खुदा की कसम मेरी जन्नत है तू।",
    ],
    date: "April 04, 2022",
    category: category[0],
  },
  {
    description: [
      "नशा Tah तेरे Iss प्यार Mai, Jisme हम खो गए",
      "इश्क़ Ka समुन्दर Tah, Jisme हम डूब गए",
      "हमें Bhi Nahi Patha Chala, Kab हम तेरे हो गए",
    ],
    date: "April 03, 2022",
    category: category[0],
  },
  {
    description: ["I Just Wanna Say", "I Crave For You Everyday"],
    date: "April 12, 2022",
    category: category[0],
  },
  {
    description: [
      "प्यार Unse Karo Jo आपके मुस्कुराने Ki वजह हैं,",
      "Unse Karo Jo आपके ख़ुशी Ka एहसास हैं,",
      "Unse Karo Jo आपके Liye बहुत खास",
      "Kya आप Hi Hai वो, Jiski मुझे तलाश हैं?",
    ],
    date: "April 03, 2022",
    category: category[0],
  },
  {
    description: [
      "Never Let Anyone Get So Close To You That You Dig Your Own Grave",
    ],
    date: "April 11, 2022",
    category: category[0],
  },
  {
    description: [
      "Jaise गिरगिट Apna रंग और रूप, समय Aane Par परिवर्तन Karthe Hai",
      "मेरा Aise लोगों Se नाता जड़ा Hai, जो मूड और ज़रूरत Aane Par बदलते Hai",
    ],
    date: "April 11, 2022",
    category: category[0],
  },
  {
    description: [
      "If Someone Is Your Addiction",
      "You Better Be Ready For Affliction!",
    ],
    date: "April 10, 2022",
    category: category[0],
  },
  {
    description: [
      "Every Friendship Starts New, Only Some Of Them Turn True",
      "The People Who Make An Effort To Be With You, Exist In Numbers Very Few",
      "These Are Made Without Any Interview, Neither Includes Revenue",
      "Everything Seems Difficult To Get Through, Until Your Friend Finds You A Clue",
      "Together, We Can Face Any Issue No Matter What, We'll Just Screw",
      "Our Friendship Is The Fricking Breakthrough!",
    ],
    date: "April 10, 2022",
    category: category[0],
  },
  {
    description: [
      "Yeh दुनिया Hai हमसे न्यारा",
      "कौन Hai Kiska सहारा",
      "Aage बहुत Hai परेशानियाँ",
      "इस्तेमाल Kare Apni शक्तियां",
      "सबकी Hai एक Na एक कमज़ोरिया",
      "जैसे Har एक Ki Hai परछाईयाँ",
      "आसान Nahi Hai चुनौतियां",
      "Rahenge बहुत कठिनाइयां",
      "हार Kabhi Na मानोगे, Karo अपने आपसे वादा",
      "आंधी हो या तूफान डटे रहना Hai इरादा",
    ],
    date: "April 09, 2022",
    category: category[0],
  },
  {
    description: [
      "जाने अनजाने मैं Agar Maine Kisiko ठेस पहुँचाया हैं Toh माफ़ी",
      "मेरा Waisa कोई इरादा Nahi ता तथापि",
    ],
    date: "April 08, 2022",
    category: category[0],
  },
  {
    description: [
      "लोग Mera Kal देखते Hai, हम Unka आज Dekthe Hai",
      "लोग Mera उपयोग Kaise Kare देखते Hai, हम Unki सहायता Kaise Kare देखते Hai",
      "Bas अंतर यह Hai Ki, लोग Mujhe लाख में से एक Dekthe Hai, हम Unhe लाखों में एक Dekthe Hai",
    ],
    date: "April 08, 2022",
    category: category[0],
  },
  {
    description: [
      "Mere Kuch अल्फ़ाज़ आपके Liye, Agar Hai आपकी इजाज़त",
      "आपके रूप Mai भगवान Ne दी Mujhe बरकत",
      "Aise कहना Nahi Hai गलत, चाँद Jithni Hai आप खुबसूरत, Jiske साथ Mai Karu शरारत",
      "किसने सोचा Tah, आपको Paana Hai मेरी किस्मत, आपका Meri जिंदगी Mai आना Hai हैरत, बन चुकी Hai आप Hamari ज़रूरत, जिसकी Mai Karu हिफाज़त",
      "मुझे नहीं Chahiye Kisi Ki दौलत, Chahiye Toh बस Kuch Aurr मोहलत, आपको बनाना Hai हमारी राहत, Kyu Ki आप Hai हमारी चाहत",
      "Mere दिल का सुकून Hai आपकी मुस्कराहट, आप Hi Toh Hai हमारी ताकत, आप Jaisa कोई नहीं Dekha Humne शख्सियत, करेंगे दोनो Ek Dusre Se प्यार Jaise Koi हसरत",
      "बन Jo चुकी Hai आप Meri Ab आदत, बोल Hi Dijiye, आप Bhi करती HaiHumse मोहबत, Kya आप Hai Isse सहमत?",
      "Kaise Lagi आपको हमारी लिखावट?",
    ],
    date: "April 07, 2022",
    category: category[0],
  },
  {
    description: [
      "Jis Insaan Ke Liye Humne Sab Chhodkar Apna Pura Samay Diya",
      "Aaj Ussi Insaan Ne Humein Busy Bolkar Kisi Aurr Ko Apna Samay Diya",
    ],
    date: "April 19, 2022",
    category: category[0],
  },
  {
    description: [
      "Don't Ever Change Your Life For One Person",
      "That Change Will Hurt You, As You See The Person Change",
    ],
    date: "April 18, 2022",
    category: category[0],
  },
  {
    description: [
      "It Is Disappointing When You Put So Much Effort Into Something, Only To Have People Ignore It In The End.",
    ],
    date: "April 17, 2022",
    category: category[0],
  },
  {
    description: [
      "अब रिश्तें Kuch Aise Hai, Na पहले Jaise बातें होती Hai, Naahi अता-पता Hai",
    ],
    date: "April 17, 2022",
    category: category[0],
  },
  {
    description: [
      "मेरी दिल Ki धड़कन Hai Tu, मेरी दिल Ka सुकून Hai Tu,",
      "मेरी चाहत Hai Tu, मेरी ज़रूरत Hai Tu,",
      "Jaise Bhi Ho, मेरी जान Hai Tu!",
    ],
    date: "April 16, 2022",
    category: category[0],
  },
  {
    description: [
      "तुम क्या जानो, क्या हाल हुआ हैं हमारा",
      "जबसे तुझे देखा हैं, एक ही सवाल हैं हमारा",
      "क्यों हर पल सिर्फ और सिर्फ ख़याल हैं तुम्हारा?",
    ],
    date: "April 15, 2022",
    category: category[1],
  },
  {
    description: [
      "आज Ke दिन Aise लोग कम Milthe Hai",
      "जो Aapko, बिना Judge Kiye आपसे बात Karthe Hai",
    ],
    date: "April 15, 2022",
    category: category[0],
  },
  {
    description: [
      "Ever Thought, How Beautiful Is Our Friendship",
      "When I'm With You, World Seems To Be At My Fingertip",
      "It's Never Gonna Be Easy For Someone To Break This Partnership",
      "A Life Without You Would Just Seem To Sadly Drip",
      "Together We Are Smart As A Whip Perhaps Alone, Will Never Achieve A Scholarship",
      "Unitedly, We Can Goddam Win Any Championship",
      "Now That's What I Call A Friendship!",
    ],
    date: "April 12, 2022",
    category: category[0],
  },
  {
    description: [
      "Uska Muskurana, Mera Sukoon Hai",
      "Usko Paana, Mera Junoon Hai",
      "Duaon Main, Agar Kisi Ko Maanga Hai,",
      "Toh Woh Sirf Aurr Sirf Tu Hai",
    ],
    date: "April 26, 2022",
    category: category[0],
  },
  {
    description: [
      "Life Is A Journey, That Is Unjust",
      "People Might Make You Feel Disgust",
      "There Won't Be Anyone To Trust",
      "You Will Have To Adjust",
      "Having Positive Mindset Is A Must",
    ],
    date: "April 25, 2022",
    category: category[0],
  },
  {
    description: [
      "Maana Ki, Waqt Hamare Saath Nahi Raha",
      "Maana Ki, Hamara Naseeb Kuch Khaas Nahi Raha",
      "Magar Aap Loghon Ka Pyaar Dekhkar, Ab Mai Udaas Nahi Raha!",
    ],
    date: "April 24, 2022",
    category: category[0],
  },
  {
    description: [
      "Trust Is Not Something You Can See",
      "However, When Broken, Even The Blind Can See!",
    ],
    date: "April 24, 2022",
    category: category[0],
  },
  {
    description: [
      "Kehna Unka Maano Jo Aapke Liye Hamesha Sahi Chahthe Hai",
      "Yakeen Mano, Parivaar Ke Alawa Aurr Koi Nahi Hai",
    ],
    date: "April 25, 2022",
    category: category[0],
  },
  {
    description: [
      "Your Life Is Yours To Keep Whatever You Want",
      "However, There Is One Thing You Should Not Keep ...",
      "EXPECTATIONS!",
    ],
    date: "April 22, 2022",
    category: category[0],
  },
  {
    description: [
      "कहते Hain, अपने Dil Ki Suno",
      "मेरा अपनो Se भरोसा उठ Chuka Hain",
      "Dil हजार हिस्सों में टूट Chuka Hain",
      "Bolo, किस हिस्से Ka सुनना Hain?",
    ],
    date: "April 21, 2022",
    category: category[0],
  },
  {
    description: [
      "The World Is A Strange Place. Lies Do Not Break Relationships Here, But Telling The Truth Does.",
    ],
    date: "May 06, 2022",
    category: category[0],
  },
  {
    description: [
      "He: How Do You Always Manage To Do This?",
      "She: Do What?",
      "He: Melt My Heart Like This",
    ],
    date: "May 05, 2022",
    category: category[0],
  },
  {
    description: [
      "We Live In A Generation That Expects A Lot From Others.",
      "But Tell, I Don't Expect Anything From Others.",
    ],
    date: "May 04, 2022",
    category: category[0],
  },
  {
    description: [
      "From Waiting For Each Other To Come Online.",
      "To The Message Wasn't Read, Even When Online.",
      "It Has Been A Journey That Faded Over Time Due To Miscommunications And Misunderstandings.",
    ],
    date: "May 02, 2022",
    category: category[0],
  },
  {
    description: [
      "Those Who Teach You, Not To Need Anyone, Will Be Those You Need The Most.",
    ],
    date: "April 29, 2022",
    category: category[0],
  },
  {
    description: [
      'Kisine Humse Pucha, Tera "Mol" Kya Hai?',
      'Maine Bola, Meri Har Ek Bimaari Ki Woh "Paracetamol" Hai',
    ],
    date: "April 29, 2022",
    category: category[0],
  },
  {
    description: [
      "Maine Kismat Se, Zyada Bharosa Tumpe Kiya Tah",
      "Lekin, Kismat Zyada Nahi Badla Jithna Tu Badli",
    ],
    date: "April 28, 2022",
    category: category[0],
  },
  {
    description: [
      "Meri Mehnat Se Jithna Kush Mai Raha, Meri Kismat Ne Mujhe Usse Zyada Rulaaya",
      "Meri Har Koshish Naakam Raha, Aaj Mai Kuch Kaam Na Raha",
    ],
    date: "May 17, 2022",
    category: category[0],
  },
  {
    description: ["Meri Sapno Ki Raani, Banja Tu Meri Jeevansathi"],
    date: "May 15, 2022",
    category: category[0],
  },
  {
    description: [
      "Tum Puch Lena Suraj Se, Yakeen Na Ho Toh Chaandh Se,",
      "Mera Dil Dadaktha Hai, Sirf Aurr sirf Tere Naam Se!",
    ],
    date: "May 14, 2022",
    category: category[0],
  },
  {
    description: [
      "Earlier, It Was Just That You Looked Good.",
      "But Now, Apart From You Nobody Else Looks Good.",
    ],
    date: "May 13, 2022",
    category: category[0],
  },
  {
    description: [
      "Yeh Dil Tujhe Ithni Shiddath Se Chahtha Hai",
      "Meri Har Dua Mai, Tera Hi Naam Aata Hai",
    ],
    date: "May 12, 2022",
    category: category[0],
  },
  {
    description: [
      "Kithne Vajan Ka Hoga?",
      "Pucho Kya?",
      "Tujh Jaise Darthi Par Bhoj Ko Hatana Hoga",
    ],
    date: "May 10, 2022",
    category: category[0],
  },
  {
    description: [
      "If You Don't Wish To Keep Us One, Just Say",
      "Cuz I Hate People Who Fake, Without Having The Audacity To Say.",
    ],
    date: "May 09, 2022",
    category: category[0],
  },
  {
    description: [
      "Everybody Is Going Through Some Piece Of Shit.",
      "Ironically, Everybody Feels Only They Deal With A Lot Of Shit.",
    ],
    date: "May 06, 2022",
    category: category[0],
  },
  {
    description: [
      "Surely You Heard It In Love, However, My Friendship Ended Up Being One-sided.",
    ],
    date: "May 07, 2022",
    category: category[0],
  },
  {
    description: [
      "Aapko Jab Pehli Baar Dekha, Koi Ithna Khoobsurat Ho Sakta Hai, Tab Jaana",
      "Kasam Se, Khoobsurati Bhi Sharma Gayi, Alse Apko Bhagwaan Ne Banaya",
    ],
    date: "May 24, 2022",
    category: category[0],
  },
  {
    description: [
      "The Day, People Understand The Difference Between Need And Want Is The Day, When Feople Will Stop To Flaunt!",
    ],
    date: "May 19, 2022",
    category: category[0],
  },
  {
    description: [
      "Tumhe Patha Hai, Tu Kithni Khoobsurath Hai?",
      "Khoobsurati Bhi Sharma Jaaye, Uthni Khoobsurath Hai",
    ],
    date: "May 18, 2022",
    category: category[0],
  },
  {
    description: [
      "Dosthi Na Rahi Ab, Tab Jaise, Ignore Kar Rahe Ho Ab, Kaise?",
      "Hum Ek Duje Ke Liye Na Rahe Ab, Tab Jaise, Tujhe Meri Fikar Na Rahi Ab, Kaise?",
      "Baathein Na Rahi Ab, Tab Jaise, I Will Always Be There For You Bolke Chale Gaye Ab, Kaise?",
      "Zindagi Na Rahi Ab, Tab Jaise, Tere Bina Mera Jeena Ab, Kaise?",
    ],
    date: "June 12, 2022",
    category: category[0],
  },
  {
    description: [
      "Some Bonds Simply End, As The Need For Them Ends",
      "Some Bonds Simply End, As Why Always I Have To Befriend",
      "Some Bonds Simply End, As The Person Gets Offended",
      "Some Bonds Simply End, As Misunderstandings Don't Get Emended",
      "Some Bonds Simply End, As Nobody Tried To Comprehend",
      "Some Bonds Simply End, As A Third Person Tries To Blend",
      "Some Bonds Simply End, As Ego Is Something That Ascend",
      "Some Bonds Simply End, As A Loss For You My Friend",
    ],
    date: "June 05, 2022",
    category: category[0],
  },
  {
    description: [
      "Friendship Forever Is A Myth",
      "If You're Of No Use, You're Done With",
      "No Matter How Hard You Try, There Will Always Be Reasons That They'll Come Up With",
      "A New Group Of People, You Get In Touch With",
      "These Don't Match The Vibes Of The People You Were Friends With",
      "Nevertheless, It's A New Journey To Begin With",
      "Even So, You Feel You Ought To Have A Word With",
      "Someone You Can Fix Up With",
      "They Don't Seem To Have Any Relationship With",
      "Yet, You Are Looking For Something To Come Up With",
      "Friendship Is Something That Everyone Plays With",
      "We Need To Make Choices, Who Should We Associate With?",
    ],
    date: "June 03, 2022",
    category: category[0],
  },
  {
    description: [
      "Agar Saal Naye Hone Se Kuch Galthiyaan Bhulayae Jaa Sakthe Hai",
      "Ke, Agar Saal Naye Hone Se Kuch Galthiyaan Maaf Kiye Jaa Sakthe Hai",
      "Toh Apne Ahankaar Ko Bhul Jayiye Aurr Dosthi Nibhayiye",
    ],
    date: "January 01, 2022",
    category: category[0],
  },
  {
    description: [
      "Aise Loghon Se Pehchan Math Banao Jo Sirf Aapke Sahaare Ke Liye Aapse Baath Karthe Hai",
      "Ke, Aise Loghon Se Sambandh Math Rakhiye Jo Sirf Aapke Madathh Ke Liye Aapse Dho Waqt Ki Baathein Karthe Hai",
      "Jis Dhin Unka Kaam Hojatha Hai, Uss Dhin Se Aap Unke Liye Ajnabee Ban Jaathe Hai",
    ],
    date: "January 13, 2022",
    category: category[0],
  },
  {
    description: [
      "Hum Jo Dusron Ke Liye Har Waqt Upalabdh Rehthain Hain, Woh Humara Udaar Svabhaav Hai",
      "Ke, Hum Jo Dusron Ke Qathirr Hamesha Labhya Rehthain Hain, Woh Humara Nisvaarth Svabhaav Hai",
      "Par Jab Hume Kisi Ki Zarurathh Padthi Hain, Woh Hume Vyasth Hone Ka Jhoota Naatak Prasthuth Karthe Hain",
    ],
    date: "January 16, 2022",
    category: category[0],
  },
  {
    description: [
      "मिलता Hi क्या Hai Tum Jaise लोगों Ko, Jo दूसरों Ki ज़िंदगी Mai धक्कल अदाते Hai",
      "Ke, हाज़िल Bhi क्या Hi Karloge, दूसरों Ki खुशियाँ बरबाद करने Main",
      "Zzyada उड़ने Ki ज़रूरत Nahi, Aaj नक़ल Karke आगे Gaye Ho, Kal तलवे चाटके जीवन चलाओगे",
    ],
    date: "January 17, 2022",
    category: category[0],
  },
  {
    description: [
      "Kuch लोगों Ko Aaj मेरी कीमत Ki समझ नहीं Rahegi",
      "Ke, अफ़सोस Hai Ke लोग Aaj मेरा मूल्य Samajh Nahi Pa Rahe",
      "Par Jab ज़रूरत Padegi, Naahi समय वापस La Paoge Aurr Naahi मेरी कीमत चूका पाओगे।",
    ],
    date: "February 11, 2022",
    category: category[0],
  },
  {
    description: [
      "Jaise गिरगिट Apna रंग और रूप, समय Aane Par परिवर्तन Karthe Hai",
      "के, Jaise गिरगिट Apna रंग और रूप, वक़्त Aane Par बदलते Hai",
      "मेरा Aise लोगों Se नाता जड़ा Hai, जो मूड और ज़रूरत Aane Par बदलते Hai!",
    ],
    date: "February 22, 2022",
    category: category[0],
  },
  {
    description: [
      "काश Tum लोग थोड़ी Si प्यार Dikathe",
      "के, काश Tum लोग थोड़ी Si प्रशंसा Karthe",
      "मतो Hum Iss वक़्त लिखना बंद Kare, Yeh कभी ना Sochthe!",
    ],
    date: "February 23, 2022",
    category: category[0],
  },
  {
    description: [
      "मेरी दिल Ki धड़कन Hai Tu, मेरी दिल Ka सुकून Hai Tu",
      "मेरी चाहत Hai Tu, मेरी ज़रूरत Hai Tu",
      "Jaise Bhi Ho, मेरी जान Hai Tu!",
    ],
    date: "March 11, 2022",
    category: category[0],
  },
  {
    description: [
      "Your World Will Have Thousands Like Me, But Mine Will Not Have Anyone Like You!",
    ],
    date: "March 11, 2022",
    category: category[0],
  },
  {
    description: [
      "लोग Mera Kal देखते Hai, हम Unka आज Dekthe Hai",
      "लोग Mera उपयोग Kaise Kare देखते Hai, हम Unki सहायता Kaise Kare देखते Hai",
      "Bas अंतर यह Hai Ki, लोग Mujhe लाख में से एक Dekthe Hai, हम Unhe लाखों में एक Dekthe Hai",
    ],
    date: "February 15, 2022",
    category: category[0],
  },
  {
    description: [
      "वक्त Ke Saath लोग बदलते Hai, जैसे चाहे Waise बदलते Hai",
      "Ke, समय Ke Saath सभी बदलते Hai, Jab ज़रूरत Pade Tab बदलते Hai",
      "जिंदगी Mai Kisi Aise Ko ढूंढो, Ki वक्त बदले Ya ज़माना, Na छोड़े Kabhi साथ तुम्हारा।",
    ],
    date: "February 17, 2022",
    category: category[0],
  },
  {
    description: [
      "Mujhe कभी छोड़ के Math Jaana, मैं टूट जाऊंगा",
      "Mujhse कभी जुदा Math Ho Jaana, मैं रुठ जाऊंगा",
      "खुदा Ki कसम, जान Hai Tu मेरी, Tere प्यार Ke बगैर मैं मर जाऊंगा!",
    ],
    date: "March 23, 2022",
    category: category[0],
  },
  {
    description: [
      "Aapke प्यार Ke Liye तरस Raha Hai मेरा दिल",
      "Aapko पाना Hai बड़ी मुश्किल",
      "Aapke आने Se मेरी जिंदगी Hogi खिलखिल",
      "Abh आप Hi Hai मेरी मंज़िल",
      "Koi Nahi Hai Iske काबिल",
      "Karna Hai Kisi Bhi Haal Mai आपको हासिल",
    ],
    date: "March 24, 2022",
    category: category[0],
  },
  {
    description: [
      "Mere Kuch अल्फ़ाज़ आपके Liye, Agar Hai आपकी इजाज़त",
      "आपके रूप Mai भगवान Ne दी Mujhe बरकत",
      "Aise कहना Nahi Hai गलत",
      "चाँद Jithni Hai आप खुबसूरत",
      "Jiske साथ Mai Karu शरारत",
      "किसने सोचा Tah, आपको Paana Hai मेरी किस्मत",
      "आपका Meri जिंदगी Mai आना Hai हैरत",
      "बन चुकी Hai आप Hamari ज़रूरत",
      "जिसकी Mai Karu हिफाज़त",
      "मुझे नहीं Chahiye Kisi Ki दौलत",
      "Chahiye Toh बस Kuch Aurr मोहलत",
      "आपको बनाना Hai हमारी राहत",
      "Kyu Ki आप Hai हमारी चाहत",
      "Mere दिल का सुकून Hai आपकी मुस्कराहट",
      "आप Hi Toh Hai हमारी ताकत",
      "आप Jaisa कोई नहीं Dekha Humne शख्सियत",
      "करेंगे दोनो Ek Dusre Se प्यार Jaise Koi हसरत",
      "बन Jo चुकी Hai आप Meri Ab आदत",
      "बोल Hi Dijiye, आप Bhi करती Hai Humse मोहबत",
      "Kya आप Hai Isse सहमत?",
      "Kaise Lagi आपको हमारी लिखावट?",
    ],
    date: "March 31, 2022",
    category: category[0],
  },
  {
    description: [
      "आपकी फ़रमाइश Par, हमने Chuna हयात",
      "Sirf सामने Se देते Hai हाथ, पीट पीछे खंजर Marna Hai Inki औकात ",
      "हमारी Hogi देर सारे लोगों Se मुलाक़ात, Kuch Se रिश्तें नाते Rahenge विश्वासघात",
      "नाकामयाबी Ka दोष Denge Apne हालात, Jab Tak Na बने विख्यात",
      "बिल्कुल अच्छी Nahi Hai Yeh देहात , हमारी Koi पूछता Nahi Hai खैरियत",
      "Hogi Kuch परेशानियाँ Iss रात, क्या Patha कल Ho सुप्रभात",
      "Ek दूसरे Ke दो साथ , Kijiye अपनो Se Kuch बात, यही Toh Hai हयात",
      "Agar आपको Yeh अच्छी Lagi Toh Kariye अनुपात",
    ],
    date: "April 02, 2022",
    category: category[0],
  },
  {
    description: [
      "Yeh दुनिया Hai हमसे न्यारा, कौन Hai Kiska सहारा",
      "Aage बहुत Hai परेशानियाँ, इस्तेमाल Kare Apni शक्तियां",
      "सबकी Hai एक Na एक कमज़ोरिया, जैसे Har एक Ki Hai परछाईयाँ",
      "आसान Nahi Hai चुनौतियां, Rahenge बहुत कठिनाइयां",
      "हार Kabhi Na मानोगे Karo अपने आपसे वादा, आंधी हो या तूफान डटे रहना Hai इरादा",
    ],
    date: "April 09, 2022",
    category: category[0],
  },
  {
    description: [
      "तुम क्या जानो, क्या हाल हुआ हैं हमारा",
      "जबसे तुझे देखा हैं, एक ही सवाल हैं हमारा",
      "क्यों हर पल सिर्फ और सिर्फ ख़याल हैं तुमारा?",
    ],
    date: "April 15, 2022",
    category: category[1],
  },
  {
    description: [
      "Hum Kya Cheez Hai, Yeh Tum Apne Sapne Mai Bhi Nahi Soch Sakthe",
      "Ke, Hum Kya Cheez Hai, Yeh Tum Apne Sapne Mai Bhi Nahi Soch Sakthe",
      "Buddhi Tezz Hai Tumhari, Yeh Sirf Tum Maantho Ho, Duniya Tujhe Kya Samajhti Hai Tum Soch Bhi Nahi Sakthe",
    ],
    date: "December 29, 2021",
    category: category[0],
  },
  {
    description: [
      "Hum Kithne Acche Hai, Yeh Tum Kabhi Samajh Nahi Paaoge",
      "Ke, Hum Kithne Naazuk Hai, Yeh Tum Kabhi Jaan Nahi Paaoge",
      "Hamare Chahne Waalon Se Puchlo, Tumne Heere Ko Khoya Hai, Jiski Jagah Tum Kabhi Bhar Nahi Paaoge",
    ],
    date: "December 29, 2021",
    category: category[0],
  },
  {
    description: [
      "मिलता Hi क्या Hai Tum Jaise लोगों Ko, Jo दूसरों Ki ज़िंदगी Mai धक्कल अडाते Hai",
      "Ke, हासिल Bhi क्या Hi Karloge, दूसरों Ki खुशियाँ बरबाद करने Mai",
      "Zyada उड़ने Ki ज़रूरत Nahi, Aaj नक़ल Karke आगे Gaye Ho, Kal तलवे चाटके जीवन चलाओगे",
    ],
    date: "January 17, 2022",
    category: category[0],
  },
  {
    description: [
      "Jaise 'एक सिक्के के दो पहलू होते हैं। '",
      "Ussi Tarah, 'दोस्ती के दो पहलू होते हैं। '",
      "Ek आपकी मदद Karne Ke Liye एक तरीका ढुंढेगा Aurr Dusra आपकी मदद Na Karne Ke बहाने ढुंढेगा!",
    ],
    date: "January 21, 2022",
    category: category[0],
  },
  {
    description: [
      "प्यार Unse Karo Jo आपके मुस्कुराने Ki वजह हैं",
      "Unse Karo Jo आपके ख़ुशी Ka एहसास हैं",
      "Unse Karo Jo आपके Liye बहुत खास हैं",
      "Kya आप Hi Hai वो, Jiski मुझे तलाश हैं?",
    ],
    date: "February 21, 2022",
    category: category[0],
  },
  {
    description: [
      "Iss ऑनलाइन Ke ज़माने Mai, Kisi Ko अपना प्यार वाकिफ Hai, Toh Kisi Ko अपनी दोस्ती",
      "किसीने Unhe अपनाया, Toh किसीने Unhe ठुकराया",
      "किसीने Unhe प्यार Diya, Toh किसीने Unhe फ्रेंड-जोन Kiya",
      "किसीने Unke Message Ka इंतज़ार Kiya, Toh किसीने Unke Message Ka रिप्लाई Tak Nah Kiya",
      "किसीने Unhe समय Diya, Toh किसीने Unhe फूटी कौड़ी Tak Nah Diya",
      "किसीने Unhe ढेर सारा Message Kiya, Toh किसीने Unhe ब्लॉक Kiya",
      "किसीने Unhe तुरंत रिप्लाई Diya, Toh किसीने ऑनलाइन रहकर Message Tak Nah Kiya",
      "Abh आपने Yaha Tak पढ़ लिया, Toh खुद Se लिखे Aurr Bhejiye मुझे Kuch Naya!",
    ],
    date: "February 21, 2022",
    category: category[0],
  },
  {
    description: [
      "Life's Three Most Important Lessons",
      "1. You Should Value Those Who Value You.",
      "2. You Should Be Kind To Those Who Are Kind To You.",
      "3. You Should Make Time For Those Who Are Willing To Make Time For You.",
    ],
    date: "July 19, 2022",
    category: category[0],
  },
  {
    description: [
      "Recoros, Records, Records, I Don't Lire It, I Avoid. But Records, Lires Me, I Can't Avoid.",
    ],
    date: "April 14, 2022",
    category: category[0],
  },
  {
    description: [
      "Don't Expect People To Treat You The Way You Treat Them",
      "Cuz You Don't Treat Other's The Same Way, As They Expect From You!",
    ],
    date: "April 27, 2022",
    category: category[0],
  },
  {
    description: [
      "Only If You Relate You React",
      "Sorry To Say, That Is Not How You Keep Our Friendship Intact",
      "Sorry To Say, That's Having Our Friendship Impact",
      "Sorry To Say, That's Not Some Fricking Contract",
      "Sorry To Say, Our Equations Seem To Subtract",
      "Sorry To Say, Emotions Is Something You Lacked",
      "Sorry To Say, You Need To Correct Yourself For A Matter Of Fact",
      "Sorry To Say, I Don't Give A Shit To Be In Contact",
    ],
    date: "May 01, 2022",
    category: category[0],
  },
  {
    description: [
      "Today You Can Break Me As You Wish",
      "But Tomorrow",
      "Be Ready For Those Unbreakable Sharp Pieces To Cut You The Way I Wish!",
    ],
    date: "June 08, 2022",
    category: category[0],
  },
  {
    description: [
      "Never Go All The Way To Help Someone Today.",
      "They Will Just Thank You; But Tomorrow",
      "They Won't Know Who You Are.",
    ],
    date: "May 31, 2022",
    category: category[0],
  },
  {
    description: [
      "If Experiencing 2 Losses Is An Art, Then Loving Your Best Friend Is The Picasso Of It.",
    ],
    date: "May 28, 2022",
    category: category[0],
  },
  {
    description: [
      "You May Find 100 Reasons To Quit, But You Still Have To Find That 1 Reason To Stay And Finish What You Started.",
    ],
    date: "May 27, 2022",
    category: category[0],
  },
  {
    description: [
      "It Doesn't Matter Whether It Is A Friendship Or A Romantic Relationship.",
      "It Ends When One's Priorities Change.",
    ],
    date: "July 17, 2022",
    category: category[0],
  },
  {
    description: [
      "Even If You Think You Can Use Me As Many Times As You Wish.",
      "Don't Forget That I Can Throw You Out Once And For All.",
    ],
    date: "June 20, 2022",
    category: category[0],
  },
];

const sortedPoetry = sortByDate(Poetry);

export { lajzonKaJadugar, link, magicianOfWords, sortedPoetry };
