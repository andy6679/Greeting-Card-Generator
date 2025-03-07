// Sample verses for each occasion
const verses = {
 "Birthday Boy": [
        "Wishing you strength, success, and happiness today and always!",
        "To an incredible young man, may your birthday be filled with joy and unforgettable moments!",
        "Happy Birthday to the coolest guy I know!",
        "May your day be filled with laughter and love!",
        "Cheers to another amazing year ahead!",
        "Hope your birthday is filled with lots of love, laughter, and cake!",
        "May all your dreams come true on your special day!",
        "You're growing up so fast, but always stay young at heart!",
        "Happy Birthday! Here's to another awesome year!",
        "Wishing you a year filled with endless possibilities!",
        "Another year older, but definitely wiser!",
        "Happy Birthday to a true legend!",
        "You deserve a birthday full of fun and adventure!",
        "To the birthday boy, may this year bring you everything you hope for!",
        "Wishing you the best birthday ever filled with lots of fun!",
        "Happy Birthday to a young man with an old soul!",
        "Today is your day! Enjoy every moment of it!",
        "May this year be your best one yet!",
        "To an awesome guy, Happy Birthday!",
        "You're one year older, but one year cooler!",
        "Have a birthday as amazing as you are! 🎈",
        "Wishing you a fantastic year ahead, filled with happiness!",
        "To someone who always lights up the room, Happy Birthday!",
        "You're more than just a year older – you're more awesome too!",
        "Here's to another year of greatness, Birthday Boy!",
        "Happy Birthday to a guy who's always rocking it!"
    ],
  "Birthday Girl": [
        "Happy Birthday to a beautiful soul! May your year be filled with amazing moments and unforgettable memories!",
        "Wishing you a day as bright and beautiful as you are!",
        "May your special day be filled with love, laughter, and joy!",
        "To a girl who lights up the world, Happy Birthday!",
        "Here's to another year of adventure and happiness!",
        "May this year bring you all the success and happiness you deserve!",
        "Happy Birthday to a true gem of a person!",
        "Cheers to the amazing woman you are, and the even more amazing one you're becoming!",
        "Wishing you a day filled with everything you love!",
        "You're not just a year older, you're a year more fabulous!",
        "Happy Birthday to the girl who makes the world a better place!",
        "May your birthday be as sweet and wonderful as you are!",
        "To the birthday girl, may all your dreams come true this year!",
        "Another year of beauty, grace, and joy!",
        "Wishing you a year filled with laughter, love, and endless possibilities!",
        "You make every day brighter, and today we celebrate you!",
        "May your year ahead be filled with happiness and success!",
        "Happy Birthday to the one who brings so much joy into the world!",
        "Today is all about you—enjoy every moment!",
        "Wishing you a year full of amazing adventures and memories!",
        "You're more beautiful every year—inside and out!",
        "Here's to another year of joy, love, and endless laughter!",
        "Happy Birthday to the girl who shines the brightest!",
        "May this year bring you endless love, laughter, and happiness!",
        "Wishing you a birthday as perfect as you are!"
    ],
     "Happy Anniversary": [
        "To the love of my life, happy anniversary! Every day with you is a beautiful gift, and I’m so grateful for every moment.",
        "Happy Anniversary! You are my everything, and I love you more each day.",
        "Cheers to another year of love, laughter, and unforgettable memories.",
        "Every day with you is a blessing. Here's to many more years of happiness together.",
        "Happy Anniversary to the one who holds my heart. I am forever grateful for you.",
        "Another year, another adventure. Here's to many more anniversaries together.",
        "Through thick and thin, we've stood by each other. Happy Anniversary, my love.",
        "To the person who makes my heart skip a beat, Happy Anniversary.",
        "Together, we make the perfect pair. Happy Anniversary!",
        "A year filled with love, memories, and dreams. Here's to more!",
        "Happy Anniversary to the love of my life. May our love grow stronger each year.",
        "Each day with you feels like a celebration. Here's to another year of love.",
        "Every moment with you is a precious gift. Happy Anniversary, my dearest.",
        "Here's to another year of amazing memories and endless love.",
        "Happy Anniversary! You make every day better just by being you.",
        "Another year of love and happiness. I am so lucky to have you by my side.",
        "To my soulmate, Happy Anniversary. Here's to forever together.",
        "Every day I spend with you is the best day ever. Happy Anniversary, my love.",
        "May this anniversary be the beginning of many more beautiful years together.",
        "Through all the ups and downs, we have made it this far. Happy Anniversary!",
        "Another year of growing together. I can't wait for many more.",
        "To the person who makes my heart complete, Happy Anniversary.",
        "Happy Anniversary! With you, every day feels like a celebration of love.",
        "Here's to the love we share and to many more years of happiness and togetherness.",
        "To the love of my life, happy anniversary. Here's to forever!"
    ],
    "Merry Christmas": [
        "Merry Christmas! May your heart be filled with joy and your home with warmth, laughter, and love this holiday season.",
        "Wishing you peace, love, and happiness this Christmas and throughout the year.",
        "May the magic of Christmas fill your heart with love and joy.",
        "Merry Christmas to you and your family. Wishing you all the best this holiday season.",
        "May your Christmas be filled with wonderful memories, joy, and laughter.",
        "Here's to a Christmas full of warmth, love, and cherished moments.",
        "May this Christmas bring you endless happiness and love.",
        "Wishing you a very Merry Christmas and a Happy New Year filled with love and peace.",
        "Christmas is a time to cherish the ones we love. Wishing you a blessed holiday season.",
        "May the spirit of Christmas bring you joy and happiness all year long.",
        "Wishing you love, joy, and happiness this Christmas and beyond.",
        "Merry Christmas! May your home be filled with love and your heart with peace.",
        "Here's to a Christmas filled with laughter, warmth, and love.",
        "Wishing you a wonderful Christmas and a Happy New Year filled with new opportunities and adventures.",
        "May your Christmas be bright and filled with love and cheer.",
        "Merry Christmas to you and yours! May your holiday season be merry and bright.",
        "Wishing you all the joy and warmth this Christmas season brings.",
        "May this holiday season be full of love, laughter, and memories that last a lifetime.",
        "Merry Christmas and a Happy New Year! May all your dreams come true.",
        "Here's to a magical Christmas season filled with peace and joy.",
        "Wishing you a blessed and joyful Christmas surrounded by loved ones.",
        "May the joy and peace of Christmas be with you today and always.",
        "Wishing you a Merry Christmas and a year filled with happiness and prosperity.",
        "May your Christmas be filled with love, laughter, and all your favorite things.",
        "Merry Christmas to you and your family! Wishing you warmth and joy this season."
    ],
    "Congratulations": [
        "Congratulations on your incredible achievement! Your hard work and dedication have truly paid off.",
        "Wishing you all the best as you embark on this exciting new chapter of your life.",
        "Your success is an inspiration to us all. Congratulations on your well-deserved accomplishment!",
        "Here’s to new beginnings, new challenges, and new triumphs! Congratulations!",
        "So proud of you! Your dedication and perseverance have paid off.",
        "What an incredible milestone! May this be the start of even greater things.",
        "Congratulations! Your hard work, passion, and determination have truly paid off.",
        "You’ve worked so hard to get here, and now you’re reaping the rewards. Congrats!",
        "Today is a celebration of your success. Here’s to the future and all your continued achievements.",
        "You’ve earned every bit of this success. Congratulations on your achievement!",
        "Wishing you continued success and happiness as you move forward in your journey.",
        "The future is bright for you, and I’m so excited to see where it takes you. Congratulations!",
        "Here’s to your remarkable achievement and the amazing things ahead.",
        "Congratulations! Your perseverance, patience, and dedication have led you here.",
        "You’ve proven that hard work pays off! So happy to see your success.",
        "Congratulations on achieving something truly extraordinary. Well done!",
        "What a fantastic achievement! Wishing you all the best as you continue your journey.",
        "Your success is well-deserved and so inspiring. Congratulations!",
        "I’m so proud of everything you’ve accomplished. Wishing you even more success ahead.",
        "You’ve made it! This is just the beginning of even greater things. Congratulations!",
        "All your hard work and determination have paid off. Congratulations on your success!",
        "So happy for you! May your future be filled with continued success and happiness.",
        "You’ve achieved something amazing! Keep pushing forward to even bigger accomplishments.",
        "Congratulations! The world is your oyster, and I can’t wait to see what you do next.",
        "Success looks good on you. Enjoy every moment of your achievement!",
        "Here’s to your continued success and all the wonderful things yet to come."
    ],
    "Congratulations": [
        "Congratulations on your incredible achievement! Your hard work and dedication have truly paid off.",
        "Wishing you all the best as you embark on this exciting new chapter of your life.",
        "Your success is an inspiration to us all. Congratulations on your well-deserved accomplishment!",
        "Here’s to new beginnings, new challenges, and new triumphs! Congratulations!",
        "So proud of you! Your dedication and perseverance have paid off.",
        "What an incredible milestone! May this be the start of even greater things.",
        "Congratulations! Your hard work, passion, and determination have truly paid off.",
        "You’ve worked so hard to get here, and now you’re reaping the rewards. Congrats!",
        "Today is a celebration of your success. Here’s to the future and all your continued achievements.",
        "You’ve earned every bit of this success. Congratulations on your achievement!",
        "Wishing you continued success and happiness as you move forward in your journey.",
        "The future is bright for you, and I’m so excited to see where it takes you. Congratulations!",
        "Here’s to your remarkable achievement and the amazing things ahead.",
        "Congratulations! Your perseverance, patience, and dedication have led you here.",
        "You’ve proven that hard work pays off! So happy to see your success.",
        "Congratulations on achieving something truly extraordinary. Well done!",
        "What a fantastic achievement! Wishing you all the best as you continue your journey.",
        "Your success is well-deserved and so inspiring. Congratulations!",
        "I’m so proud of everything you’ve accomplished. Wishing you even more success ahead.",
        "You’ve made it! This is just the beginning of even greater things. Congratulations!",
        "All your hard work and determination have paid off. Congratulations on your success!",
        "So happy for you! May your future be filled with continued success and happiness.",
        "You’ve achieved something amazing! Keep pushing forward to even bigger accomplishments.",
        "Congratulations! The world is your oyster, and I can’t wait to see what you do next.",
        "Success looks good on you. Enjoy every moment of your achievement!",
        "Here’s to your continued success and all the wonderful things yet to come."
    ],
   "Happy New Year": [
        "Wishing you a Happy New Year filled with new opportunities, joy, and unforgettable moments. Here's to a bright future!",
        "May the new year bring you peace, happiness, and success in all your endeavors.",
        "Here’s to a fresh start and a year full of happiness, health, and new adventures. Happy New Year!",
        "Cheers to the new year! May it be filled with blessings and endless joy.",
        "Wishing you a year filled with love, laughter, and amazing opportunities. Happy New Year!",
        "Happy New Year! May all your dreams come true in the coming year.",
        "As the new year begins, may you find happiness in every moment and success in everything you do.",
        "May this new year bring you everything you've been hoping for and more.",
        "Wishing you a prosperous and fulfilling new year full of growth, joy, and success.",
        "Happy New Year! May this year be the start of something great in your life.",
        "Here’s to a new year filled with endless possibilities and exciting new adventures!",
        "May the new year bring you closer to your goals and dreams. Wishing you all the best in the year ahead!",
        "Cheers to a fresh new year, a fresh new start, and a year full of amazing experiences!",
        "Wishing you good health, great success, and endless happiness in the new year.",
        "Happy New Year! May your heart be filled with joy and your life with blessings.",
        "Let this new year be the one where you achieve everything you’ve dreamed of and more.",
        "Wishing you a new year filled with joy, love, and unforgettable memories.",
        "May the coming year be filled with hope, new experiences, and accomplishments.",
        "Here’s to another year of happiness, health, and success. Happy New Year!",
        "May the new year bring you peace, love, and all the things that make you happy.",
        "Cheers to the new year! May it bring you all the happiness and success you deserve.",
        "Wishing you a wonderful year ahead, filled with laughter, growth, and exciting adventures.",
        "Happy New Year! May it be a year of great achievements and beautiful moments.",
        "Here’s to a year full of success, joy, and all the things you love. Happy New Year!",
        "Wishing you happiness, peace, and good fortune in the coming year. Happy New Year!"
    ],
      "Thank You": [
        "Thank you from the bottom of my heart. Your kindness means the world to me, and I’ll always be grateful.",
        "I appreciate your generosity and kindness. Thank you for everything you do!",
        "Your support means more to me than words can express. Thank you for being there when I needed you most.",
        "I’m so thankful for your help and kindness. You’ve made a big difference in my life.",
        "Your thoughtfulness is truly appreciated. Thank you for everything you do!",
        "Thank you for your generosity and for always going above and beyond. I’m so grateful!",
        "I’m so grateful for your support and encouragement. Thank you for always being there for me.",
        "Your kindness and generosity have touched my heart. Thank you for everything!",
        "Thank you for your unwavering support. It means the world to me.",
        "I’m so thankful for you and everything you’ve done for me. Your kindness will never be forgotten.",
        "Thank you for your help and for always being a source of strength and positivity.",
        "Your thoughtfulness has made such a difference in my life. Thank you for being so kind.",
        "Thank you for being there for me and for all the little things you do that make a big difference.",
        "I am so grateful for your generosity and kindness. Thank you from the bottom of my heart.",
        "Thank you for everything you do. Your help and support mean more to me than you know.",
        "I can’t thank you enough for your kindness and support. You’ve made a real difference in my life.",
        "Your help has been invaluable to me. Thank you for being there and for everything you do.",
        "I’m so thankful for all the love and support you’ve shown me. Thank you for being such an amazing person.",
        "Your kindness has made such a positive impact on my life. Thank you for everything.",
        "Thank you for your unwavering support and for always being there when I needed you most.",
        "I truly appreciate everything you’ve done for me. Your kindness will always be remembered.",
        "Thank you for being such an incredible person. Your generosity means more than words can say.",
        "I’m so thankful for everything you’ve done. Your kindness and support have made such a difference.",
        "Thank you for being there for me. Your kindness and help mean everything.",
        "Your generosity and kindness have left a lasting impression on me. Thank you!"
    ],
     "Get Well Soon": [
        "Wishing you strength and comfort during this time. May you feel better with each passing day, and know you’re in my thoughts.",
        "Sending healing thoughts and prayers your way. Get well soon!",
        "I hope you feel better every day. Take care and get well soon!",
        "Wishing you a speedy recovery and a return to good health.",
        "May you regain your strength and feel better soon. You’re in my thoughts!",
        "Get well soon! Wishing you all the best and a quick return to health.",
        "I hope you’re back on your feet and feeling better very soon.",
        "Sending positive thoughts your way for a full and speedy recovery. Get well soon!",
        "Wishing you strength, comfort, and a quick recovery. Take care of yourself!",
        "Take your time to rest and heal. Wishing you a speedy and smooth recovery.",
        "Sending you all my love and best wishes for a speedy recovery.",
        "I hope you're feeling better soon and that each day brings you closer to full recovery.",
        "Wishing you a speedy recovery and lots of comfort and care while you heal.",
        "Get well soon! I hope you feel better every day and are back to your old self in no time.",
        "Take care of yourself and know that I’m thinking of you. Get well soon!",
        "Sending you healing thoughts and wishing you a full and fast recovery.",
        "I’m thinking of you and wishing you strength as you heal. Get well soon!",
        "May you find comfort and peace as you recover. Wishing you a quick return to health.",
        "Get well soon! Take care of yourself and know that I’m here for you.",
        "Wishing you a quick recovery and all the strength you need to get better soon.",
        "Sending warm thoughts your way for a fast recovery. Get well soon!",
        "I hope you feel better soon and that your strength returns quickly.",
        "Sending you lots of love and good vibes for a fast and full recovery.",
        "Take it easy and let yourself heal. Wishing you a speedy recovery!",
        "Get well soon! I’m looking forward to seeing you healthy and happy again."
    ],
    "Congratulations on your Wedding":[   "Congratulations on your beautiful union! May your love continue to grow and bring you both endless happiness.",
    "Wishing you a lifetime of love and joy as you begin this wonderful journey together.",
    "Here's to love, laughter, and happily ever after! Congratulations on your wedding day.",
    "May your wedding day be just the beginning of a lifetime filled with love and happiness.",
    "Your love story is just beginning. Wishing you a marriage filled with beautiful memories.",
    "As you start this new chapter of your life, may love and joy surround you always. Congratulations!",
    "Wishing you both a lifetime of love, laughter, and endless adventures. Congratulations on your wedding!",
    "May your marriage be filled with beautiful moments, love, and laughter. Congratulations to both of you!",
    "Here’s to a lifetime of happiness, love, and all the beautiful moments that come with it. Congratulations!",
    "Congratulations to a beautiful couple! May your wedding day be the beginning of many joyous years together.",
    "Wishing you all the love in the world as you step into a lifetime of shared dreams and cherished memories.",
    "May the love you share today grow stronger with each passing year. Congratulations on your wedding!",
    "Here’s to love, laughter, and a lifetime of happiness. Congratulations on your wedding day!",
    "Wishing you a beautiful marriage full of endless love, joy, and unforgettable memories.",
    "May your wedding day be everything you’ve dreamed of, and your future together even better.",
    "To the happy couple: May your love for each other grow stronger with every passing year.",
    "May the beautiful bond you share today last a lifetime. Congratulations on your wedding!",
    "Wishing you a marriage filled with love, laughter, and every happiness imaginable.",
    "May your wedding day be just the beginning of a lifetime of love and cherished memories together.",
    "Here’s to a marriage full of love, peace, and harmony. Congratulations to both of you!",
    "Wishing you both a future filled with endless happiness and beautiful moments as you embark on this journey together.",
    "May your love be forever strong, and your happiness never-ending. Congratulations on your wedding!",
    "As you say ‘I do,’ may your love for each other grow deeper every day. Congratulations!",
    "Wishing you both a wonderful future filled with love, laughter, and a lifetime of happiness.",
    "May the love you share today grow stronger with each passing year. Congratulations on your wedding!"],
    "Well done on your Graduation":[   "Congratulations on your graduation! This is just the beginning of your bright future ahead.",
    "Wishing you all the best as you take the next step into your future. The world is yours!",
    "You did it! This is a huge achievement, and your hard work has truly paid off. Congratulations!",
    "As you graduate, remember that this is just the first chapter in a wonderful adventure. Best of luck!",
    "Your dedication, hard work, and perseverance have led you here today. Congratulations on your graduation!",
    "The tassel was worth the hassle! Wishing you all the success in the world as you move forward.",
    "This is your time to shine! Congratulations on your well-deserved success.",
    "A dream come true! May your future be filled with endless opportunities and accomplishments.",
    "The journey was long, but you made it! Best wishes for a future full of success and happiness.",
    "This is just the beginning of something incredible. Congratulations on your graduation!",
    "A well-earned accomplishment. May you continue to strive for greatness in everything you do!",
    "Your hard work and determination have brought you to this moment. Wishing you endless success!",
    "As you step into this new chapter, may your dreams become reality and your efforts bring you success.",
    "Graduation is not the end, but the beginning of new and exciting things. Congratulations!",
    "The future belongs to those who believe in their dreams. Best of luck as you chase yours!",
    "The world is waiting for someone as brilliant as you. Congratulations on your well-earned graduation!",
    "Today marks the end of one chapter and the beginning of another. Here’s to your next adventure!",
    "Graduation is not just a milestone, it's a launching pad for even bigger and better things. Best wishes!",
    "The future is bright for someone as hardworking and talented as you. Congratulations on your graduation!",
    "May you continue to soar to new heights with the knowledge and skills you’ve gained. Congratulations!",
    "You’ve worked so hard to get here, and now it’s time to take on the world. Best of luck on your next adventure!",
    "The best is yet to come! Congratulations on this incredible achievement, and good luck with what’s next.",
    "Your graduation is just the beginning of a new and exciting chapter. Wishing you endless success ahead!",
    "Your dedication and perseverance have brought you here today. Wishing you continued success in everything you do.",
    "As you move forward, remember that anything is possible. Congratulations and best of luck in your future endeavors!"],
    "Happy Valentine's Day":[  "Happy Valentine’s Day! I’m so grateful to have you in my life. You make every day special.",
    "To the one who holds my heart, wishing you a day full of love, happiness, and beautiful moments.",
    "You are my forever Valentine, and I’m so lucky to share this journey with you.",
    "Every moment with you is a beautiful memory in the making. Happy Valentine’s Day!",
    "On this special day, I just want to remind you how much you mean to me. Happy Valentine’s Day!",
    "You light up my world like no one else. I’m lucky to call you mine. Happy Valentine’s Day!",
    "Happy Valentine’s Day to the person who fills my life with love, laughter, and happiness every day.",
    "You make my heart skip a beat every time I see you. Wishing you all the love today and always.",
    "I’m so grateful for you and everything you bring into my life. Happy Valentine’s Day, my love!",
    "There is no one else I’d rather spend this day with. You’re my favorite person. Happy Valentine’s Day!",
    "From the moment I met you, I knew you were someone special. Happy Valentine’s Day to the love of my life!",
    "You have my heart today and always. I’m so lucky to call you mine. Happy Valentine’s Day!",
    "Every day with you is a gift, but today, I want to celebrate how amazing you are. Happy Valentine’s Day!",
    "To the one who makes my heart smile, I’m sending you all my love this Valentine’s Day.",
    "You’re my best friend, my love, my everything. Wishing you the happiest Valentine’s Day!",
    "You’re the one I want to share all my days with. Happy Valentine’s Day to the one I love!",
    "With you by my side, every day feels like a celebration of love. Wishing you a beautiful Valentine’s Day.",
    "I fall more in love with you every single day. Happy Valentine’s Day to the one who stole my heart!",
    "You are my today and all of my tomorrows. Happy Valentine’s Day to the one I adore.",
    "There’s no one else I’d rather spend this day with. You’re my favorite person. Happy Valentine’s Day!",
    "You bring so much joy to my life. I’m so lucky to have you as my Valentine.",
    "Happy Valentine’s Day to the one who makes my heart feel whole. You mean the world to me.",
    "You are everything I’ve ever wanted and more. Happy Valentine’s Day to the love of my life.",
    "To the person who makes my world brighter, I hope your Valentine’s Day is as wonderful as you are.",
    "Every day with you is a new adventure in love. Happy Valentine’s Day to my favorite person!",
    "You make every day better just by being you. Wishing you all the love and happiness in the world this Valentine’s Day."],
    "Happy Easter":[ "Wishing you a joyful Easter filled with love, peace, and new beginnings.",
        "May the Easter season bring you happiness, hope, and countless blessings.",
        "Happy Easter! May your heart be filled with the joy of this special day.",
        "Sending you warm Easter wishes for a day full of love and renewal.",
        "Easter is a time for new beginnings, and may this season bring you fresh hope and happiness.",
        "May the beauty of Easter fill your heart with peace and joy.",
        "Wishing you a blessed Easter filled with faith, love, and the promise of new life.",
        "Happy Easter to you and your loved ones! May your day be filled with joy and laughter.",
        "On this blessed Easter, may you find peace and joy in the resurrection of Christ.",
        "Wishing you a wonderful Easter full of love, happiness, and blessings.",
        "Easter is a time for reflection and renewal. May your spirit be lifted with hope and joy.",
        "May the resurrection of Christ inspire you with new hope and strength this Easter.",
        "Happy Easter! Wishing you a season full of God's love and the beauty of springtime.",
        "Easter brings hope to the heart and joy to the soul. May this season bring both to you.",
        "On this Easter, may you experience God's love and grace in all its fullness.",
        "Happy Easter! May this season of renewal bring you closer to your dreams and loved ones.",
        "Wishing you a peaceful and blessed Easter filled with grace and gratitude.",
        "Easter is a reminder that every new beginning is filled with endless possibilities. May yours be bright.",
        "Wishing you a very Happy Easter with love, peace, and the hope of a brighter tomorrow.",
        "May the Easter season fill your life with love, happiness, and endless blessings.",
        "Happy Easter to someone who makes the world a brighter place. May your day be as special as you are.",
        "On this joyous Easter, may your heart be filled with the light of God's love.",
        "Wishing you a blessed Easter as we celebrate the resurrection of hope, love, and life.",
        "Easter is a time for celebrating new life, new hope, and new blessings. May yours be abundant.",
        "Happy Easter! May the spirit of Easter bring you peace, joy, and a renewed faith.",
        "May this Easter fill your life with beautiful moments of love, joy, and inspiration.",
        "Wishing you a Happy Easter filled with hope, joy, and an abundance of love!"],
    "Happy Mother's Day":[ "Happy Mother’s Day to the most amazing woman in my life. Your love and care mean the world to me.",
        "Wishing you a day filled with love, joy, and happiness. You deserve all the best, Mom!",
        "To the one who gave me life and love, Happy Mother’s Day! You are my greatest inspiration.",
        "Happy Mother’s Day! Your strength, kindness, and wisdom continue to inspire me every day.",
        "May your Mother’s Day be filled with beautiful moments and the love that you so freely give.",
        "To the woman who taught me everything I know, Happy Mother’s Day! I love you more than words can express.",
        "Wishing you a day as special as you are, filled with love, laughter, and gratitude. Happy Mother’s Day!",
        "Happy Mother’s Day to the woman who always knows how to make everything better. You are truly one of a kind.",
        "To my first teacher, my greatest cheerleader, and the heart of our family, Happy Mother’s Day!",
        "Happy Mother’s Day to the woman who is always there, with open arms and an open heart.",
        "Thank you for everything you’ve done for me, and for being the most wonderful mom. Happy Mother’s Day!",
        "Happy Mother’s Day! You are loved more than you know, and I am so grateful for you every single day.",
        "To the one who gave me life, love, and lessons, I wish you a Mother’s Day filled with happiness and joy.",
        "May your Mother’s Day be as sweet as you are, filled with all the love and blessings you deserve.",
        "Happy Mother’s Day! Your love is the foundation of our family, and I am so grateful for all you do.",
        "On Mother’s Day, I celebrate you for the amazing mother you are and all the incredible things you do.",
        "Happy Mother’s Day! I am so thankful for your constant love and support. You are my rock, Mom.",
        "Wishing you a day filled with the love and happiness you bring to everyone around you. Happy Mother’s Day!",
        "Happy Mother’s Day to the most loving, caring, and selfless mom. I’m so lucky to have you in my life.",
        "To the woman who made me who I am today, Happy Mother’s Day! Your strength and grace inspire me every day.",
        "Happy Mother’s Day to the one who makes the world a better place just by being in it.",
        "You are the heartbeat of our family. Wishing you a Mother’s Day that is as beautiful and extraordinary as you are.",
        "Thank you for always being there to listen, love, and guide me. Happy Mother’s Day!",
        "To the woman who gave me everything, Happy Mother’s Day! I am beyond grateful for your love and sacrifices.",
        "Wishing you a Mother’s Day filled with happiness, laughter, and all the things you love the most.",
        "Happy Mother’s Day to the one whose love never runs out, whose heart is always open, and whose wisdom knows no bounds.",
        "May your Mother’s Day be as extraordinary as you are, filled with love and everything you deserve."],
    "Happy Father's Day":[ "Happy Father’s Day to the man who taught me how to be strong, wise, and kind. You are my hero.",
        "Wishing you a Father’s Day filled with love, laughter, and all the happiness you deserve. Thank you for everything!",
        "To the best dad in the world: Happy Father’s Day! Your guidance, love, and support mean the world to me.",
        "Happy Father’s Day to the one who always knows how to fix everything—my dad, my role model, and my friend.",
        "Thank you for being an incredible father and showing me what true strength and love really mean. Happy Father’s Day!",
        "Wishing you a Father’s Day that’s as amazing as you are, filled with all the joy and love you bring into our lives.",
        "Happy Father’s Day! You’ve been my greatest teacher, my strongest support, and my biggest cheerleader. I love you!",
        "To the man who made every moment special and every lesson meaningful—Happy Father’s Day!",
        "Happy Father’s Day to the man who’s always been there for me. Your love and guidance have shaped who I am today.",
        "Thank you for being a father who makes life so much better. Wishing you the best Father’s Day ever!",
        "Happy Father’s Day! Your love and wisdom have made me the person I am, and I’m forever grateful.",
        "To my first hero, Happy Father’s Day! You’ll always be the one I look up to and admire.",
        "Wishing you a Father’s Day full of joy, relaxation, and all the things that make you happy. You deserve it, Dad!",
        "Happy Father’s Day to the one who’s always taught me right from wrong, and who’s been my guide in life. I love you!",
        "To the father who is always there with advice, love, and support—thank you for everything. Happy Father’s Day!",
        "Happy Father’s Day! I hope this day brings you as much joy as you’ve brought to my life with your love and guidance.",
        "Dad, you’re not just a father, you’re my best friend, my rock, and my biggest inspiration. Happy Father’s Day!",
        "Wishing the happiest Father’s Day to the man who has shown me what it means to love unconditionally. Thank you, Dad!",
        "Happy Father’s Day! Your strength, love, and wisdom are a constant source of inspiration for me. Thank you for everything.",
        "To the one who taught me how to be strong and compassionate, Happy Father’s Day! Your love has made me who I am.",
        "Happy Father’s Day! Thank you for being the incredible father that you are and for always making me feel so loved.",
        "To the man who always put others first, Happy Father’s Day! You’re the best father anyone could ask for.",
        "Thank you for all the sacrifices you made to give me the best life possible. Wishing you a very Happy Father’s Day!",
        "Happy Father’s Day to the man who made everything better just by being there. Your love means the world to me.",
        "Wishing you the best Father’s Day ever, filled with happiness, love, and everything you deserve. You’re one of a kind, Dad!",
        "Happy Father’s Day! You’ve always been my role model, and I’m so thankful for all the love and wisdom you’ve given me.",
        "To the best dad in the world—Happy Father’s Day! Thank you for everything you’ve done and for always being there for me."], 
    "With deep Sympathy":[ "I am so sorry for your loss. My heart goes out to you during this difficult time.",
        "Please accept my deepest condolences. You are in my thoughts and prayers.",
        "May you find comfort in the love and memories you shared with [name].",
        "I’m deeply sorry for your loss. Please know that I’m here for you during this sorrowful time.",
        "Wishing you peace and comfort during this difficult time. You are in my thoughts.",
        "Words cannot express how sorry I am for your loss. My heart is with you.",
        "I am so sorry for your loss. Please know that you are in my thoughts and prayers.",
        "May you find strength in the love of family and the warm embrace of friends.",
        "In this tough time, may the memories you shared with [name] bring you peace and comfort.",
        "I can’t imagine the pain you’re going through, but I’m here for you every step of the way.",
        "My deepest condolences to you and your family. I’m so sorry for your loss.",
        "May the love of those around you bring you comfort and peace in this time of sorrow.",
        "You are in my thoughts as you navigate this incredibly difficult time. My deepest sympathies.",
        "I am so sorry for the passing of [name]. I hope you find solace in the love and memories you shared.",
        "I’m sending you all my love and strength during this heartbreaking time.",
        "May you find peace in knowing that [name] will always be with you in your heart and memories.",
        "I’m truly sorry for your loss. My thoughts are with you and your family during this sorrowful time.",
        "May you find comfort in the memories of the beautiful life you shared with [name].",
        "During this time of sorrow, may you be surrounded by love, light, and peace.",
        "Please accept my heartfelt condolences. You are in my thoughts as you navigate this loss.",
        "I’m so sorry for the pain you’re experiencing. You are not alone—I’m here for you.",
        "I’m truly sorry for your loss. I hope you find some peace and comfort in this difficult time.",
        "Sending my deepest sympathies and all my love to you and your family during this time of loss.",
        "Please accept my sincerest condolences. You are in my thoughts, and I’m here for you if you need anything.",
        "I am so sorry for the loss of [name]. May the memories of [him/her] bring you comfort and peace.",
        "Wishing you comfort, strength, and peace during this heartbreaking time. You are in my thoughts and prayers."],
    "Happy Retirement":[ "Congratulations on your retirement! Wishing you a future filled with relaxation, adventure, and joy.",
        "Cheers to the end of a successful career and the start of a wonderful new chapter in your life!",
        "Retirement is the beginning of a new adventure—enjoy every moment!",
        "Wishing you all the best in this exciting new phase of life. Enjoy your well-deserved rest!",
        "Congratulations on your retirement! May your days ahead be filled with happiness and relaxation.",
        "Here's to a future filled with relaxation, travel, and everything you’ve dreamed of doing after retirement.",
        "You've earned this time to relax and enjoy life. Wishing you endless joy in your retirement years.",
        "Cheers to your hard work and dedication over the years. May your retirement be everything you’ve dreamed of!",
        "The best part of retirement is having the time to do whatever makes you happy. Enjoy it all!",
        "Enjoy every moment of your retirement. May this new chapter bring you all the peace and happiness you deserve.",
        "Congratulations on your retirement! May it be filled with adventures, laughter, and precious moments.",
        "Wishing you a wonderful retirement, full of new experiences, good health, and great memories.",
        "The adventure of retirement begins! May this be the start of your best years yet.",
        "Here’s to your next chapter. May your retirement be as wonderful and rewarding as your career has been.",
        "Now that you’re retired, may your days be filled with joy, relaxation, and all the things you’ve been waiting to do.",
        "Wishing you a retirement filled with happiness, fun, and the freedom to explore new things!",
        "Congratulations on your retirement! May this next chapter be filled with good times and cherished memories.",
        "Your retirement is well-deserved. Wishing you all the best as you take on this exciting new journey.",
        "Enjoy your retirement to the fullest! May this new chapter bring you peace, relaxation, and all the things you love.",
        "Cheers to your hard work and dedication! Wishing you the happiest and most fulfilling retirement.",
        "Wishing you all the joy and relaxation that retirement brings. Enjoy every minute of this new adventure!",
        "Congratulations on your retirement! May this time be full of rest, fun, and everything you’ve looked forward to.",
        "It’s time for new adventures! Wishing you a retirement filled with love, happiness, and endless possibilities.",
        "Here's to enjoying every day of your retirement with no alarm clocks, just relaxation and fun!",
        "Congratulations on the start of your retirement! May it bring you joy, excitement, and the freedom you deserve.",
        "Wishing you a fulfilling and enjoyable retirement, filled with everything you’ve always dreamed of!"],
    "Engagement of":[    "Congratulations on your engagement! Wishing you a lifetime of love, joy, and unforgettable memories.",
        "The journey of love is just beginning—may it be filled with endless happiness and beautiful moments together.",
        "Wishing you both a future filled with love, laughter, and the happiest of memories as you begin this beautiful journey together.",
        "So happy for both of you! May your engagement be the start of a lifetime of love and joy.",
        "Congratulations on your engagement! May the love you share today grow even stronger as you build your future together.",
        "Cheers to the happy couple! Wishing you all the best as you plan for a beautiful life together.",
        "Here's to love, laughter, and a lifetime of happiness. Congratulations on your engagement!",
        "Wishing you both endless love, joy, and excitement as you take this beautiful step toward a lifetime of happiness together.",
        "Engagement is the start of something wonderful! May your future together be filled with love and blessings.",
        "Your engagement is the first chapter of an amazing story together. Wishing you both all the happiness in the world.",
        "May your love continue to blossom and grow as you journey together through life. Congratulations on your engagement!",
        "So excited for your engagement and the amazing life ahead of you both! Wishing you all the love and happiness in the world.",
        "Here's to a beautiful couple, a beautiful love, and a beautiful future together. Congratulations on your engagement!",
        "Wishing you both a life filled with happiness, love, and many adventures. Congrats on your engagement!",
        "Congratulations on your engagement! May this special moment be the start of a lifetime of love and happiness together.",
        "Two hearts, one love, and a lifetime of happiness ahead. Congratulations on your engagement!",
        "Best wishes to both of you on your engagement! May your love grow stronger every day as you move toward a beautiful future together.",
        "Congratulations on your engagement! May the years ahead be filled with love, laughter, and a lifetime of happiness together.",
        "A beautiful engagement, a beautiful future! Wishing you both all the love and happiness in the world as you start this journey together.",
        "May your engagement be the first step toward a lifetime of happiness and love. Wishing you both all the best!",
        "Congratulations on your engagement! May your love grow deeper and stronger with every passing day.",
        "Wishing you both all the best as you plan for a future together. Your love story is just beginning!",
        "Your engagement is such a wonderful celebration of love. Wishing you both a lifetime of joy and happiness together.",
        "Here’s to a future filled with love, laughter, and all your dreams coming true. Congratulations on your engagement!",
        "May your engagement bring you endless joy and excitement as you prepare to spend forever together. Congrats!",
        "Wishing you both all the love in the world as you begin your journey toward marriage. Congratulations on your engagement!"],
    "Welcome Home":[ "Welcome home! We’ve missed you and are so excited to have you back with us!",
        "There's no place like home! Welcome back, and may your time here be filled with joy and peace.",
        "So glad you're home! Wishing you warmth, happiness, and comfort in every corner of your house.",
        "Home is where the heart is, and your heart is always welcome here. Welcome home!",
        "Welcome home! It's so wonderful to have you back where you belong.",
        "Your home just got a little brighter with you in it. Welcome back!",
        "We missed you! Welcome home—it's time to make new memories in the place you love.",
        "Nothing feels better than having you home again. Welcome back to your safe and happy place!",
        "Home is complete now that you're back. Welcome home and enjoy every moment!",
        "Welcome home! There's so much love and happiness waiting for you here.",
        "Welcome home to the place where you're always loved and cherished. We're so happy you're back!",
        "The house is complete again with you here. Wishing you a warm and joyful return home!",
        "Home sweet home, with you in it again! Welcome back and may every moment be filled with peace.",
        "Welcome home! May this place always bring you comfort, peace, and the love you deserve.",
        "So happy you're back home! Wishing you all the happiness in the world as you settle in.",
        "Welcome home, where love and laughter are always present. Enjoy being back!",
        "It's a joy to have you back home! Here's to making even more beautiful memories together.",
        "Welcome home! May this place bring you comfort, warmth, and all the happiness you deserve.",
        "Home is where the love never ends, and now that you're back, our hearts are full. Welcome home!",
        "Welcome home! The house has been waiting for your return, and now it's time to relax and enjoy.",
        "We are overjoyed to have you home! Let’s fill this place with love, laughter, and unforgettable memories.",
        "Welcome home! There's no better place for you to be. Enjoy every moment!",
        "We're so glad to have you back home where you belong. Wishing you peace, comfort, and joy in every room.",
        "Home is where your heart feels most at ease, and we're so happy to welcome you back to yours.",
        "Nothing compares to the feeling of being home. Welcome back, and may you feel all the love that surrounds you here.",
        "Welcome home! May this time be filled with all the warmth and happiness your heart desires."],
    "Good Luck":[ "Wishing you the best of luck as you embark on this exciting new journey!",
        "Good luck! May success and happiness follow you every step of the way.",
        "Wishing you all the best as you chase your dreams. Good luck with everything!",
        "Good luck! May every challenge you face turn into an opportunity for success.",
        "Here's to new beginnings and the amazing adventures ahead. Best of luck!",
        "Sending you lots of positive energy and good luck as you take on new challenges!",
        "Good luck! Trust in yourself, and the universe will guide you to great things.",
        "Wishing you good luck and success in everything you do. You've got this!",
        "May fortune smile upon you as you venture into this new chapter. Good luck!",
        "Good luck! May each step you take bring you closer to your goals.",
        "Good luck on this new adventure! May it be filled with opportunities and success.",
        "Sending you all my best wishes for good luck and great success in all your endeavors.",
        "May luck always be on your side as you begin this exciting new journey. Best of luck!",
        "Good luck! I know you’ll achieve amazing things—stay confident and keep going!",
        "Wishing you endless good luck and blessings as you chase your dreams.",
        "Good luck! I believe in you and all the wonderful things you're capable of achieving.",
        "Good luck as you take on this new challenge—may success be yours at every turn.",
        "Wishing you the best of luck with everything that lies ahead. You’ve got this!",
        "Good luck! Keep pushing forward and remember that success is just around the corner.",
        "Good luck on this exciting new chapter in your life! May it be filled with joy and accomplishments.",
        "Wishing you nothing but good luck and all the happiness in the world as you move forward!",
        "Good luck! May every obstacle you face lead to greater achievements and growth.",
        "Best of luck! May the future be filled with endless opportunities and success for you.",
        "Sending you all my best wishes for good luck and the strength to succeed in every challenge.",
        "Good luck! Stay positive, keep moving forward, and amazing things will happen!"],
    "Sorry You're Leaving":[ "It's hard to say goodbye, but I'm wishing you all the best in your next adventure!",
        "Sorry to see you go! You will be missed more than words can express.",
        "Although it's tough to say goodbye, I'm excited for the amazing journey you're about to take.",
        "Wishing you all the best as you start this new chapter. You’ll be missed!",
        "Goodbye, my friend! Your presence here will truly be missed, but I'm wishing you all the success ahead.",
        "It’s sad to see you leave, but I know great things are waiting for you. Best of luck on your journey!",
        "I'm going to miss you so much! Wishing you nothing but happiness and success in your next step.",
        "Saying goodbye is never easy, but I wish you all the best in everything you do from here on out.",
        "Though you're leaving, your impact will stay with us. Best of luck in your next chapter!",
        "You’ll be missed, but I hope your new path brings you everything you’ve dreamed of and more.",
        "Goodbyes are always tough, but I know you'll do great things in your new adventure. Best of luck!",
        "Saying goodbye is never easy, but I know this is just the beginning of an exciting new journey for you.",
        "You’ve made such an impact here, and you’ll be missed by everyone. Wishing you all the best ahead!",
        "I'm sad to see you leave, but I'm so happy for what comes next for you. Wishing you all the best!",
        "Goodbye! I hope this next chapter of your life is filled with new adventures and endless possibilities.",
        "It’s tough to see you go, but I'm cheering you on every step of the way in your new chapter.",
        "You’ll always have a special place here, and we'll miss you! Wishing you all the best in your next chapter.",
        "Although we’re saying goodbye for now, I hope the future brings you everything you wish for and more.",
        "It’s so hard to say goodbye, but I’m confident that your future holds amazing things. Good luck!",
        "Goodbye! Your new journey is just beginning, and I know it’s going to be full of amazing experiences.",
        "Though you’re leaving, our memories together will stay with us forever. Wishing you all the best.",
        "You’ve made such a difference here, and we’ll miss you! I’m wishing you great success and happiness in your new path.",
        "Goodbye! I know you’ll achieve even greater things in your future, and I can’t wait to hear all about them.",
        "Your departure will leave a big hole here, but I know you’ll do amazing things in your next adventure. Best of luck!",
        "Saying goodbye is never easy, but I wish you all the best as you move on to bigger and better things!"] 
};

let currentVerseIndex = 0;
const versesPerPage = 25;

// Function to update the verse options based on selected occasion
function updateVerses() {
    const occasion = document.getElementById("occasion").value;
    const verseSelect = document.getElementById("verseSelect");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    // Clear previous verse options
    verseSelect.innerHTML = "<option value=''>--Select a Verse--</option>";
    currentVerseIndex = 0; // Reset index for new occasion

    // If a valid occasion is selected, show the first batch of verses
    if (verses[occasion] && Array.isArray(verses[occasion])) {
        loadVerses();
        loadMoreBtn.style.display = (verses[occasion].length > versesPerPage) ? "block" : "none";
    } else {
        console.error("No verses found for the selected occasion or the data is not in array format.");
        loadMoreBtn.style.display = "none";
    }
}

// Function to load the next batch of verses
function loadVerses() {
    const occasion = document.getElementById("occasion").value;
    const verseSelect = document.getElementById("verseSelect");

    const nextBatch = verses[occasion].slice(currentVerseIndex, currentVerseIndex + versesPerPage);
    nextBatch.forEach((verse, index) => {
        const option = document.createElement("option");
        option.value = verse;
        option.textContent = `Verse ${currentVerseIndex + index + 1}: ${verse}`;
        verseSelect.appendChild(option);
    });

    currentVerseIndex += versesPerPage;

    // Hide the "Load More" button if all verses are loaded
    if (currentVerseIndex >= verses[occasion].length) {
        document.getElementById("loadMoreBtn").style.display = "none";
    }
}

// Event listener for the "Load More" button
document.getElementById("loadMoreBtn").addEventListener("click", loadVerses);

// Event listener to display selected verse in the preview area
document.getElementById("verseSelect").addEventListener("change", function() {
    const selectedVerse = this.value;
    const versePreview = document.getElementById("versePreview");

    // Update the preview area with the selected verse
    if (selectedVerse) {
        versePreview.textContent = selectedVerse;
        versePreview.classList.add("visible");
    } else {
        versePreview.textContent = "";
        versePreview.classList.remove("visible");
    }
});

// Event listener to display selected verse in the preview area
document.getElementById("verseSelect").addEventListener("change", function() {
    const selectedVerse = this.value;
    const versePreview = document.getElementById("versePreview");

    // Update the preview area with the selected verse
    if (selectedVerse) {
        versePreview.textContent = selectedVerse;
        versePreview.classList.add("visible");
    } else {
        versePreview.textContent = "";
        versePreview.classList.remove("visible");
    }
});

// Function to adjust the image size
function adjustImageSize() {
    const imageSize = document.getElementById("imageSizeSlider").value;
    const imagePreview = document.getElementById("cardImagePreview").querySelector("img");
    const imageSizeValue = document.getElementById("imageSizeValue");

    if (imagePreview) {
        imagePreview.style.width = imageSize + "%";
    }

    imageSizeValue.textContent = imageSize + "%";
}

// Function to adjust the text size
function adjustTextSize() {
    const textSize = document.getElementById("textSizeSlider").value;
    const previewText = document.querySelectorAll("#cardPreview p, #cardPreview h2");
    const textSizeValue = document.getElementById("textSizeValue");

    previewText.forEach(function (element) {
        element.style.fontSize = textSize + "px";
    });

    textSizeValue.textContent = textSize + "px";
}

// Function to change the background color based on selected option
function changeBackgroundColor() {
    const selectedColor = document.getElementById("bgColorSelect").value;
    const cardPreview = document.getElementById("cardPreview");

    // Apply the selected background color to the card preview
    if (selectedColor) {
        cardPreview.style.backgroundColor = selectedColor;
    } else {
        cardPreview.style.backgroundColor = ""; // Reset to default if no color is selected
    }
}

// Function to change the border based on selected option
function changeBorder() {
    const selectedBorder = document.getElementById("borderSelect").value;
    const cardPreview = document.getElementById("cardPreview");

    // Apply the selected border style to the card preview
    if (selectedBorder) {
        cardPreview.style.border = selectedBorder;
    } else {
        cardPreview.style.border = ""; // Reset to default if no border is selected
    }
}

function generatePreview() {
    // Get values from form fields
    const occasion = document.getElementById("occasion").value;
    const recipientName = document.getElementById("recipientName").value;
    const verse = document.getElementById("verseSelect").value;
    const personalMessage = document.getElementById("personalMessage").value;
    const senderName = document.getElementById("senderName").value;
    const emoji = document.getElementById("emojiSelection").value;
    const closing = document.getElementById("closingSelect").value;

    // Update the card preview in the specified order
    document.getElementById("cardOccasion").textContent = occasion;
    document.getElementById("cardRecipientName").textContent = recipientName;
    document.getElementById("cardImagePreview").innerHTML = '';

    // Handle image preview if an image is uploaded
    const imageUpload = document.getElementById("imageUpload").files[0];
    if (imageUpload) {
        const imageURL = URL.createObjectURL(imageUpload);
        const imageElement = document.createElement('img');
        imageElement.src = imageURL;
        imageElement.style.width = "100%";
        document.getElementById("cardImagePreview").appendChild(imageElement);
    }

    document.getElementById("cardVerse").textContent = verse;
    document.getElementById("cardPersonalMessage").textContent = personalMessage;
    document.getElementById("cardClosing").textContent = closing;
    document.getElementById("cardSenderName").textContent = senderName;
    document.getElementById("emojiPreview").textContent = emoji;

    // ✅ Set text alignment only on text-containing elements (avoids breaking layout)
    document.getElementById("cardOccasion").style.textAlign = "center";
    document.getElementById("cardRecipientName").style.textAlign = "center";
    document.getElementById("cardVerse").style.textAlign = "center";
    document.getElementById("cardPersonalMessage").style.textAlign = "center";
    document.getElementById("cardClosing").style.textAlign = "center";
    document.getElementById("cardSenderName").style.textAlign = "center";
    document.getElementById("emojiPreview").style.textAlign = "center";
}
document.getElementById("downloadCardBtn").addEventListener("click", function () {
    const cardPreview = document.getElementById("cardPreview");

    if (!cardPreview) {
        console.error("cardPreview element not found!");
        return; // Exit if the element is not found
    }

    html2canvas(cardPreview, {
        useCORS: true,  // Ensures images load properly
        allowTaint: true,
        backgroundColor: null, // Keeps transparency
        scale: 2 // Improves image quality
    }).then(function (canvas) {
        const imgData = canvas.toDataURL("image/png");

        // Create a link element
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "greeting_card.png"; // Set the filename

        // Append the link to the body
        document.body.appendChild(link);
        link.click(); // Trigger download

        // Clean up by removing the link from the DOM
        document.body.removeChild(link);
    }).catch(function (error) {
        console.error("Error during html2canvas:", error);
    });
});

