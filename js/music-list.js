// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing

let allMusic = [
  {
    name: "Rupkothar Jogote",
    artist: "Rehaan Rasul & Abanti Sithi",
    img: "music-1",
    src: "music-1"
  },
  {
    name: "Sopno Jabe Bari",
    artist: "Grameenphone",
    img: "music-2",
    src: "music-2"
  },
  {
    name: "Dube Dube Valobashi",
    artist: "Tanjib Sarowar",
    img: "music-3",
    src: "music-3"
  },
  {
    name: "Karone OKarone",
    artist: "Minar Rahman",
    img: "music-4",
    src: "music-4"
  },
  {
    name: "Valobashbo Bashbo Re...",
    artist: "Habib Wahid",
    img: "music-5",
    src: "music-5"
  },
  {
    name: "Tomare Dekhilo",
    artist: "Habib & Nancy",
    img: "music-6",
    src: "music-6"
  },
  {
    name: "Tor Moner Pinjiray",
    artist: "Jisan Khan Shuvo",
    img: "music-7",
    src: "music-7"
  },
  {
    name: "Amar Moto Ato Sukhi",
    artist: "Khalid Hasan Milu",
    img: "music-8",
    src: "music-8"
  },
  {
    name: "Ei Bhalo Ei Kharap",
    artist: "Arijit Singh & Monali Thakur",
    img: "music-9",
    src: "music-9"
  },
  {
    name: "Kar Bashore Ghumao Bondhu 2",
    artist: "Atif Ahmed Niloy",
    img: "music-10",
    src: "music-10"
  },
  {
    name: "Meri Zindegi Sawari",
    artist: "Unknown",
    img: "music-11",
    src: "music-11"
  },
  {
    name: "Ghodey Pe Sawaar",
    artist: "Sireesha Bhagavatula",
    img: "music-12",
    src: "music-12"
  },
  {
    name: "Aapna Bana Le Priya",
    artist: "Arijit Singh & Sachin Jigar",
    img: "music-13",
    src: "music-13"
  },
  {
    name: "Saibo",
    artist: "Shreya Ghoshal & Tochi Raina",
    img: "music-14",
    src: "music-14"
  },
  {
    name: "Bandeya Re Bandeya",
    artist: "Arijit Singh & Asees Kaur",
    img: "music-15",
    src: "music-15"
  },
  {
    name: "Mast Magaan",
    artist: "Arijit Singh & Chinmayi Sripada",
    img: "music-16",
    src: "music-16"
  },
  {
    name: "Agar tum Saath Ho",
    artist: "Arijit Singh & Alka Yagnik",
    img: "music-17",
    src: "music-17"
  },
  {
    name: "Ve Maahi",
    artist: "Arijit Singh & Asees Kaur",
    img: "music-18",
    src: "music-18"
  },
  {
    name: "Cham Cham",
    artist: "Meet Bros Ft. & Monali Thakur",
    img: "music-19",
    src: "music-19"
  },
  {
    name: "Raatan Lambiya",
    artist: "Jubin Nautiyal & Asees Kaur",
    img: "music-20",
    src: "music-20"
  },
  {
    name: "Raanjah",
    artist: "B Praak & Jasleen Ronyal & Romy",
    img: "music-21",
    src: "music-21"
  },
  {
    name: "Vaaste",
    artist: "Dhvani Bhanushali & Nikhil D'Souza",
    img: "music-22",
    src: "music-22"
  },
  {
    name: "Leja Re...",
    artist: "Dhvani Bhanushali",
    img: "music-23",
    src: "music-23"
  },
  {
    name: "Maine Royaan",
    artist: "Tanveer Evan",
    img: "music-24",
    src: "music-24"
  },
  {
    name: "Nach Meri Jaan",
    artist: "Kamaal Khan & Nakash Aziz & Dev Negi & Tushar Joshi",
    img: "music-25",
    src: "music-25"
  },
  {
    name: "Hum Pagal Nahin Hai",
    artist: "Himesh Reshammiya",
    img: "music-26",
    src: "music-26"
  },
  {
    name: "Chunar",
    artist: "Arijit Singh",
    img: "music-27",
    src: "music-27"
  },
  {
    name: "Kashmir Mein",
    artist: "Sunidhi Chauhan & Neeti Mohan",
    img: "music-28",
    src: "music-28"
  },
  {
    name: "Tum Jo Aaye",
    artist: "Rahat Fateh Ali Khan & Tulshi Kumar",
    img: "music-29",
    src: "music-29"
  },
  {
    name: "Teri Ban Jaungi",
    artist: "Tulshi Kumar",
    img: "music-30",
    src: "music-30"
  },
  {
    name: "Behti Hawa",
    artist: "Shaan & Shantanu Moitra",
    img: "music-31",
    src: "music-31"
  },
  {
    name: "Pardesi",
    artist: "Kamar Sanu & Alka Yagnik",
    img: "music-32",
    src: "music-32"
  },
  {
    name: "Ke Bashi Bajay Re...",
    artist: "Anila",
    img: "music-33",
    src: "music-33"
  },
  {
    name: "Teri Mitti",
    artist: "B Praak",
    img: "music-34",
    src: "music-34"
  },
  {
    name: "Tera Fitoor",
    artist: "Arijit Singh",
    img: "music-35",
    src: "music-35"
  },
  {
    name: "Raabta",
    artist: "Arijit Singh & Pritam & Amitabh",
    img: "music-36",
    src: "music-36"
  },
  {
    name: "Galti Se Mistake",
    artist: "Arijit Singh & Amit Mishra",
    img: "music-37",
    src: "music-37"
  },
  {
    name: "Shayad",
    artist: "Arijit Singh",
    img: "music-38",
    src: "music-38"
  },
  {
    name: "Pal Ek Pal",
    artist: "Arijit Singh & Shreya Ghoshal",
    img: "music-39",
    src: "music-39"
  },
  {
    name: "Amake Amar Moto Thakte Dao",
    artist: "Anupam Roy",
    img: "music-40",
    src: "music-40"
  },
  {
    name: "Ami Chitkar Kore Kadite Chahiya",
    artist: "Haydar Hossain",
    img: "music-41",
    src: "music-41"
  },
  {
    name: "Megher Nouka Tumi",
    artist: "Imran Mahmudul & Konal",
    img: "music-42",
    src: "music-42"
  },
  {
    name: "Bondhuare",
    artist: "Tanjib Sarowar",
    img: "music-43",
    src: "music-43"
  },
  {
    name: "Gaa Chuye Bolo",
    artist: "Tanjib Sarowar & Abanti Sithi",
    img: "music-44",
    src: "music-44"
  },
  {
    name: "Jeena Jeena",
    artist: "Atif Aslam",
    img: "music-45",
    src: "music-45"
  },
  {
    name: "Tomake Chai",
    artist: "Arijit Singh",
    img: "music-46",
    src: "music-46"
  },
  {
    name: "Lehanga",
    artist: "Jass Manak",
    img: "music-47",
    src: "music-47"
  },
  {
    name: "Padel Mari Mari",
    artist: "Babu Baruah",
    img: "music-48",
    src: "music-48"
  },


  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
];