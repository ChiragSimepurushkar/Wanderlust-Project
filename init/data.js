// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];


const sampleListings = [
    {
        title: "Cozy Mountain Retreat",
        description: "A peaceful cabin nestled in the heart of the Himalayas. Ideal for nature lovers.",
        image: {
            filename: "mountain1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000001/mountain1.jpg"
        },
        price: 1500,
        location: "Manali, Himachal Pradesh",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abcd",
        geometry: {
            type: "Point",
            coordinates: [77.1892, 32.2396]
        },
        category: "mountains"
    },
    {
        title: "Trendy Apartment in Mumbai",
        description: "Modern apartment in Bandra with rooftop views.",
        image: {
            filename: "apartment1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000002/apartment1.jpg"
        },
        price: 3200,
        location: "Bandra, Mumbai",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc2",
        geometry: {
            type: "Point",
            coordinates: [72.8358, 19.0606]
        },
        category: "trending"
    },
    {
        title: "Desert Castle Getaway",
        description: "A royal stay in a restored heritage fort in Rajasthan.",
        image: {
            filename: "castle1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000003/castle1.jpg"
        },
        price: 5000,
        location: "Jaisalmer, Rajasthan",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc3",
        geometry: {
            type: "Point",
            coordinates: [70.9167, 26.9157]
        },
        category: "castles"
    },
    {
        title: "Iconic Studio in Delhi",
        description: "Minimalist studio space close to the metro and malls.",
        image: {
            filename: "studio1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000004/studio1.jpg"
        },
        price: 2100,
        location: "Hauz Khas, New Delhi",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc4",
        geometry: {
            type: "Point",
            coordinates: [77.2197, 28.6139]
        },
        category: "iconic cities"
    },
    {
        title: "Forest Camping Spot",
        description: "A tented eco-stay surrounded by nature, perfect for stargazing.",
        image: {
            filename: "camp1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000005/camp1.jpg"
        },
        price: 800,
        location: "Wayanad, Kerala",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc5",
        geometry: {
            type: "Point",
            coordinates: [76.1351, 11.6853]
        },
        category: "camping"
    },
    {
        title: "Luxury Poolside Villa",
        description: "Relax and recharge in a lavish villa with an infinity pool.",
        image: {
            filename: "pool1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000006/pool1.jpg"
        },
        price: 4200,
        location: "Candolim, Goa",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc6",
        geometry: {
            type: "Point",
            coordinates: [73.7628, 15.5284]
        },
        category: "amazing pools"
    },
    {
        title: "Artic Ice Dome Stay",
        description: "Experience the northern lights from your personal ice dome!",
        image: {
            filename: "ice1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000007/ice1.jpg"
        },
        price: 8000,
        location: "Tromsø, Norway",
        country: "Norway",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc7",
        geometry: {
            type: "Point",
            coordinates: [18.9553, 69.6496]
        },
        category: "artic"
    },
    {
        title: "Green Farm Escape",
        description: "Spend a weekend feeding cows, collecting eggs, and enjoying village life.",
        image: {
            filename: "farm1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000008/farm1.jpg"
        },
        price: 1200,
        location: "Nashik, Maharashtra",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc8",
        geometry: {
            type: "Point",
            coordinates: [73.7898, 19.9975]
        },
        category: "farms"
    },
    {
        title: "Minimalist Room in Kochi",
        description: "Small yet functional stay for digital nomads.",
        image: {
            filename: "room1.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000009/room1.jpg"
        },
        price: 950,
        location: "Fort Kochi, Kerala",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abc9",
        geometry: {
            type: "Point",
            coordinates: [76.2419, 9.9674]
        },
        category: "rooms"
    },
    {
        title: "Treehouse by the River",
        description: "Stay high up among the trees, overlooking a serene river valley.",
        image: {
            filename: "treehouse.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000010/treehouse.jpg"
        },
        price: 1800,
        location: "Rishikesh, Uttarakhand",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abca",
        geometry: {
            type: "Point",
            coordinates: [78.2676, 30.0869]
        },
        category: "mountains"
    },
    {
        title: "Backwater Homestay",
        description: "Traditional Kerala-style home with modern comfort, near backwaters.",
        image: {
            filename: "homestay.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000011/homestay.jpg"
        },
        price: 1400,
        location: "Alleppey, Kerala",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abcb",
        geometry: {
            type: "Point",
            coordinates: [76.3375, 9.4981]
        },
        category: "rooms"
    },
    {
        title: "Hilltop Pool Paradise",
        description: "Infinity pool views from a lush hill retreat.",
        image: {
            filename: "hilltop.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000012/hilltop.jpg"
        },
        price: 3600,
        location: "Kodaikanal, Tamil Nadu",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abcc",
        geometry: {
            type: "Point",
            coordinates: [77.4892, 10.2381]
        },
        category: "amazing pools"
    },
    {
        title: "Frozen Lake Igloo",
        description: "An unforgettable stay in a real snow igloo near a frozen lake.",
        image: {
            filename: "igloo.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000013/igloo.jpg"
        },
        price: 8500,
        location: "Lapland, Finland",
        country: "Finland",
        reviews: [],
        owner: "64e2f8d4b7984a001234abcd",
        geometry: {
            type: "Point",
            coordinates: [26.1121, 67.9222]
        },
        category: "artic"
    },
    {
        title: "Artist’s Dream Loft",
        description: "A bright, spacious loft surrounded by local art galleries.",
        image: {
            filename: "loft.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000014/loft.jpg"
        },
        price: 2700,
        location: "Pune, Maharashtra",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abce",
        geometry: {
            type: "Point",
            coordinates: [73.8567, 18.5204]
        },
        category: "trending"
    },
    {
        title: "Coconut Grove Farm Stay",
        description: "Rustic farm stay with daily coconut harvesting experience.",
        image: {
            filename: "coconutfarm.jpg",
            url: "https://res.cloudinary.com/demo/image/upload/v1680000015/coconutfarm.jpg"
        },
        price: 1100,
        location: "Karwar, Karnataka",
        country: "India",
        reviews: [],
        owner: "64e2f8d4b7984a001234abcf",
        geometry: {
            type: "Point",
            coordinates: [74.1311, 14.8095]
        },
        category: "farms"
    }
];


module.exports = { data: sampleListings };