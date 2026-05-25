const musicData = [
        {
            id: 1001,
            title: 'Pookal Pookum',
            artist: 'GV Prakash Kumar',
            img: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            src: 'songs/Pookal Pookum.mp3'
        },     
        { 
            id: 2001,
            title: "Adada Nadandhu Varaa", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/Adada Nadandhu Varaa.mp3"
        },
        {
            id: 2002,
            title: "Hey Penne (Raju Sundaram)", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/Hey Penne (Raju Sundaram).mp3"
        },
        {
            id: 2003,
            title: "Kanchivaram Povom", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/Kanchivaram Povom.mp3"
        },
        {
            id: 2004,
            title: "April Mazhai", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/April Mazhai.mp3"
        },
        {
            id: 2005,
            title: "Hey Penne", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/Hey Penne.mp3"
        },
        {
            id: 2006,
            title: "Konjum Konjum", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/Konjum Konjum.mp3"
        },
        {
            id: 2007,
            title: "One Two Three", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/One Two Three.mp3"
        },
        {
            id: 2008,
            title: "Un Perai", 
            artist: "Deva", 
            img: "https://i.pinimg.com/1200x/9d/95/dd/9d95ddbe6f9ac40ee879ceedde084149.jpg", 
            src: "songs/Deva/123/Mattu Mathi.mp3"
        },
        {
            id: 2009,
            title: "Chinnanchiru Poove",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Chinnanchiru Poove.mp3"
        },
        {
            id: 2010,
            title: "Ele Elanguyile",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Ele Elanguyile.mp3"
        },
        {
            id: 2011,
            title: "Kaadhal Kiligale",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un kovilile/Kaadhal Kiligale.mp3"
        },
        {
            id: 2012,
            title: "Maari Muthumaari",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Maari Muthumaari.mp3"
        },
        {
            id: 2013,
            title: "Othayadi Paadhayile (Jikki)",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Othayadi Paadhayile (Jikki).mp3"
        },
        {
            id: 2014,
            title: "Othayadi-Paadhayile (Malaysia Vasudevan)",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Othayadi-Paadhayile (Malaysia Vasudevan).mp3"
        },
        {
            id: 2015,
            title: "Othayadi Paadhayile (Spb And Jikki)",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Othayadi Paadhayile (Spb And Jikki).mp3"
        },
        {
            id: 2016,
            title: "Othayadi Paadhayile (Spb)",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Othayadi Paadhayile (Spb).mp3"
        },
        {
            id: 2017,
            title: "Pombalay Madhikavenum",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Pombalay Madhikavenum.mp3"
        },
        {
            id: 2018,
            title: "Thaimaasam Vandirichi",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Thaimaasam Vandirichi.mp3"
        },
        {
            id: 2019,
            title: "Thaimaasam Vanduruchi (Swarnalatha)",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Thaimaasam Vanduruchi (Swarnalatha).mp3"
        },
        {
            id: 2020,
            title: "Vandi Varudu",
            artist: "Deva",
            img: "https://i.pinimg.com/1200x/ed/ae/19/edae1927b2094577b713a011432c2856.jpg",
            src: "songs/Deva/Aatha Un Kovilile/Vandi Varudu.mp3"
        },
        {
            id: 2021,
            title: "Athiri Pachai",
            artist: "Deva",
            img: "https://tse1.mm.bing.net/th/id/OIP.-smQYBkJy1Zto1d_sNuGawAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            src: "songs/Deva/Adi Thadi/Athiri Pachai.mp3"
        },
        {
            id: 2022,
            title: "Eppadi Samalikkanum",
            artist: "Deva",
            img: "https://tse1.mm.bing.net/th/id/OIP.-smQYBkJy1Zto1d_sNuGawAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            src: "songs/Deva/Adi Thadi/Eppadi Samalikkanum.mp3"
        },
        {
            id: 2023,
            title: "Machanukku",
            artist: "Deva",
            img: "https://tse1.mm.bing.net/th/id/OIP.-smQYBkJy1Zto1d_sNuGawAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            src: "songs/Deva/Adi Thadi/Machanukku.mp3"
        },
        {
            id: 2024,
            title: "Thagadunna",
            artist: "Deva",
            img: "https://tse1.mm.bing.net/th/id/OIP.-smQYBkJy1Zto1d_sNuGawAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            src: "songs/Deva/Adi Thadi/Thagadunna.mp3"
        },
        {
            id: 2025,
            title: "Umma Ummamma",
            artist: "Deva",
            img: "https://tse1.mm.bing.net/th/id/OIP.-smQYBkJy1Zto1d_sNuGawAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            src: "songs/Deva/Adi Thadi/Umma Ummamma.mp3"
        },
        {
            id: 2026,
            title: "Deva Devadhai",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/d3/05/fc/d305fc1dab1b2f1243df007a4706a890.jpg",
            src: "songs/Deva/Amara Kaaviyam/Deva Devadhai.mp3"
        },
        {
            id: 2027,
            title: "Dhagam Theera",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/d3/05/fc/d305fc1dab1b2f1243df007a4706a890.jpg",
            src: "songs/Deva/Amara Kaaviyam/Dhagam Theera.mp3"
        },
        {
            id: 2028,
            title: "Mounam Pesum",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/d3/05/fc/d305fc1dab1b2f1243df007a4706a890.jpg",
            src: "songs/Deva/Amara Kaaviyam/Mounam Pesum.mp3"
        },
        {
            id: 2029,
            title: "Saridhana Saridhana",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/d3/05/fc/d305fc1dab1b2f1243df007a4706a890.jpg",
            src: "songs/Deva/Amara Kaaviyam/Saridhana Saridhana.mp3"
        },
        {
            id: 2030,
            title: "Yedhedho Ennam Vandhu",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/d3/05/fc/d305fc1dab1b2f1243df007a4706a890.jpg",
            src: "songs/Deva/Amara Kaaviyam/Yedhedho Ennam Vandhu.mp3"
        },
        {
            id: 2031,
            title: "Yedhedho Ennam Vandhu Solo",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/d3/05/fc/d305fc1dab1b2f1243df007a4706a890.jpg",
            src: "songs/Deva/Amara Kaaviyam/Yedhedho Ennam Vandhu Solo.mp3"
        },
        {
            id: 2032,
            title: "Annamalai Annamalai",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/9a/99/53/9a9953e816c53c140e2dcdfd269ea7f4.jpg",
            src: "songs/Deva/Annamalai/Annamalai Annamalai.mp3"
        },
        {
            id: 2033,
            title: "Kondayil Thaazham Poo",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/9a/99/53/9a9953e816c53c140e2dcdfd269ea7f4.jpg",
            src: "songs/Deva/Annamalai/Kondayil Thaazham Poo.mp3"
        },
        {
            id: 2034,
            title: "Oru Pen Pura",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/9a/99/53/9a9953e816c53c140e2dcdfd269ea7f4.jpg",
            src: "songs/Deva/Annamalai/Oru Pen Pura.mp3"
        },
        {
            id: 2035,
            title: "Rekkai Katti Parakudhu",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/9a/99/53/9a9953e816c53c140e2dcdfd269ea7f4.jpg",
            src: "songs/Deva/Annamalai/Rekkai Katti Parakudhu.mp3"
        },
        {
            id: 2036,
            title: "Vanthenda Paalkaran",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/9a/99/53/9a9953e816c53c140e2dcdfd269ea7f4.jpg",
            src: "songs/Deva/Annamalai/Vanthenda Paalkaran.mp3"
        },
        {
            id: 2037,
            title: "Vetri Nichayam",
            artist: "Deva",
            img: "https://i.pinimg.com/736x/9a/99/53/9a9953e816c53c140e2dcdfd269ea7f4.jpg",
            src: "songs/Deva/Annamalai/Vetri Nichayam.mp3"
        },
        {
            id: 3001,
            title: "Bang Bang Bang",
            artist: "Yuvan Sankar Raja",
            img: "https://i.pinimg.com/736x/4e/bb/a8/4ebba817461164d437f45ffbf97845e6.jpg",
            src: "songs/Yuvan Sankar Raja/anjaan/Bang Bang Bang.mp3"
        },
        {
            id: 3002,
            title: "Kaadhal Aasai",
            artist: "Yuvan Sankar Raja",
            img: "https://i.pinimg.com/736x/66/79/c2/6679c299ea630536724cf53115ccc1da.jpg",
            src: "songs/Yuvan Sankar Raja/anjaan/Kaadhal Aasai.mp3"
        },
        {
            id: 3003,
            title: "Ek Do Theen",
            artist: "Yuvan Sankar Raja",
            img: "https://i.pinimg.com/736x/80/ae/0e/80ae0e27b75d83af9d8cf84cf315ba66.jpg",
            src: "songs/Yuvan Sankar Raja/anjaan/Ek Do Theen.mp3"
        },
        {
            id: 4001,
            title: "Aye Aye Aye",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/736x/28/76/75/2876750077afb9f47527319d2e91b311.jpg",
            src: "songs/Hip Hop Thamizha/Aambala/Aye Aye Aye.mp3"
        },
        {
            id: 4002,
            title: "Madras To Madurai",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/736x/28/76/75/2876750077afb9f47527319d2e91b311.jpg",
            src: "songs/Hip Hop Thamizha/Aambala/Madras To Madurai.mp3"
        },
        {
            id: 4003,
            title: "Pazhagikalam",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/736x/28/76/75/2876750077afb9f47527319d2e91b311.jpg",
            src: "songs/Hip Hop Thamizha/Aambala/Pazhagikalam.mp3"
        },
        {
            id: 4004,
            title: "Va Va Va Vannila",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/736x/28/76/75/2876750077afb9f47527319d2e91b311.jpg",
            src: "songs/Hip Hop Thamizha/Aambala/Va Va Va Vannila.mp3"
        },
        {
            id: 4005,
            title: "Yaarenna Sonnalum",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/736x/28/76/75/2876750077afb9f47527319d2e91b311.jpg",
            src: "songs/Hip Hop Thamizha/Aambala/Yaarenna Sonnalum.mp3"
        },
        {
            id: 4006,
            title: "Hi Sonna pothum",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/d4/c1/96/d4c1968003f122471860adac52b39f42.jpg",
            src: "songs/Hip Hop Thamizha/Comali/Hi Sonna pothum.mp3"
        },
        {
            id: 4007,
            title: "Nanba Nanba",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/d4/c1/96/d4c1968003f122471860adac52b39f42.jpg",
            src: "songs/Hip Hop Thamizha/Comali/Nanba Nanba.mp3"
        },
        {
            id: 4008,
            title: "Oliyum oliyum",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/d4/c1/96/d4c1968003f122471860adac52b39f42.jpg",
            src: "songs/Hip Hop Thamizha/Comali/Oliyum oliyum.mp3"
        },
        {
            id: 4009,
            title: "Paisa Nota",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/d4/c1/96/d4c1968003f122471860adac52b39f42.jpg",
            src: "songs/Hip Hop Thamizha/Comali/Paisa Nota.mp3"
        },
        {
            id: 4010,
            title: "Yaara Comali",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/d4/c1/96/d4c1968003f122471860adac52b39f42.jpg",
            src: "songs/Hip Hop Thamizha/Comali/Yaara Comali.mp3"
        },
        {
            id: 4011,
            title: "Rudra's Symphony",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/a3/af/11/a3af1111f8d79c082d28fde3e727e4d0.jpg",
            src: "songs/Hip Hop Thamizha/Imaikkaa Nodigal/Rudra's Symphony.mp3"
        },
        {
            id: 4012,
            title: "Lion vs Hyenas",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/a3/af/11/a3af1111f8d79c082d28fde3e727e4d0.jpg",
            src: "songs/Hip Hop Thamizha/Imaikkaa Nodigal/Lion vs Hyenas.mp3"
        },
        {
            id: 4013,
            title: "Neeyum Naanum Anbe",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/a3/af/11/a3af1111f8d79c082d28fde3e727e4d0.jpg",
            src: "songs/Hip Hop Thamizha/Imaikkaa Nodigal/Neeyum Naanum Anbe.mp3"
        },
        {
            id: 4014,
            title: "Kadhal Oru Aagayam",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/a3/af/11/a3af1111f8d79c082d28fde3e727e4d0.jpg",
            src: "songs/Hip Hop Thamizha/Imaikkaa Nodigal/Kadhal Oru Aagayam.mp3"
        },
        {
            id: 4015,
            title: "Vilambara Idaiveli",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/a3/af/11/a3af1111f8d79c082d28fde3e727e4d0.jpg",
            src: "songs/Hip Hop Thamizha/Imaikkaa Nodigal/Vilambara Idaiveli.mp3"
        },
        {
            id: 4016,
            title: "Kadhalikathey",
            artist: "Hip Hop Aadhi",
            img: "https://i.pinimg.com/1200x/a3/af/11/a3af1111f8d79c082d28fde3e727e4d0.jpg",
            src: "songs/Hip Hop Thamizha/Imaikkaa Nodigal/Kadhalikathey.mp3"
        },

];