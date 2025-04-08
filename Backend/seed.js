const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./product.model");
const dummyProduct = {
  name: "Junior Genius Pack",
  price: 99.99,
  description:
    "The ultimate learning kit for young minds, combining fun and education in one comprehensive package.",
  features: [
    "Interactive learning games",
    "STEM-focused activities",
    "Augmented reality features",
    "Parent progress tracking",
    "Multiple skill levels",
  ],
  images: [
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-1.webp&w=640&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-2.webp&w=256&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-7.webp&w=256&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-3.webp&w=256&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-4.webp&w=256&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-5.webp&w=256&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-6.webp&w=256&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-8.webp&w=256&q=100",
  ],
  videos: [
    {
      title: "Product Overview",
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-videos/plugo-count.mp4",
      thumbnail: "https://example.com/thumbnails/product-overview.jpg",
      duration: "2:15",
      description: "Overview of the Junior Genius Pack and its features",
    },
    {
      title: "How to Get Started",
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-videos/plugo-letters.mp4",
      thumbnail: "https://example.com/thumbnails/getting-started.jpg",
      duration: "3:45",
      description: "Step-by-step guide to setting up your Junior Genius Pack",
    },
    {
      title: "Interactive Learning Demo",
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-videos/plugo-link.mp4",
      thumbnail: "https://example.com/thumbnails/learning-demo.jpg",
      duration: "4:20",
      description: "See the interactive learning features in action",
    },
    {
      title: "Parent Track Progress",
      url: "https://example.com/videos/parent-tracking.mp4",
      thumbnail: "https://example.com/thumbnails/parent-tracking.jpg",
      duration: "2:50",
      description: "Learn how parents can track their child's progress",
    },
    {
      title: "Customer Testimonials",
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-videos/junior-genius-pack.mp4",
      thumbnail: "https://example.com/thumbnails/testimonials.jpg",
      duration: "5:30",
      description:
        "Hear what parents and kids have to say about Junior Genius Pack",
    },
  ],
  reelvideos: [
    {
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-count/16.mp4#t=0.001",
      thumbnail: "https://res.cloudinary.com/dk9ppogxr/image/upload/v1744094412/xpxxaw9wwg4ogqgfpbny.png"
    },
    {
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-letters/3.mp4#t=0.001",
      thumbnail: "https://res.cloudinary.com/dk9ppogxr/image/upload/v1744094587/gyoilromghtdsiigu9xa.png"
    },
    {
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/junior-genius-pack/3.mp4#t=0.001",
      thumbnail: "https://res.cloudinary.com/dk9ppogxr/image/upload/v1744094685/wvi4nlz87jdvcbafajbm.png"
    },
    {
      url: "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-link/7.mp4#t=0.001",
      thumbnail: "https://res.cloudinary.com/dk9ppogxr/image/upload/v1744094712/bs6zeriksy6zzbtz8zpi.png"
    }
  ],
  juniorpack: [
    {
      title: "Hands-On Learning",
      description:
        "Making physical and digital play seamlessly blend with these tactile manipulatives and immersive games.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-1.webp&w=640&q=50",
    },
    {
      title: "Engages & Develops",
      description:
        "Carefully sequenced to help children develop reading, writing, and math skills.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-2.webp&w=640&q=50",
    },
    {
      title: "Story-Based Learning",
      description:
        "Play 16 exciting story adventures with colorful story tiles. Discover and learn while having fun!",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-3.webp&w=640&q=50",
    },
    {
      title: "Age-Adaptive Games",
      description:
        "Adapts to your child's learning style and skill level to make learning fun. Little nudges help you progress.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-4.webp&w=640&q=50",
    },
    {
      title: "Holistic STEM Learning",
      description:
        "The Junior Genius Pack offers a range of activities to develop cognitive, creative, and problem-solving skills.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-5.webp&w=640&q=50",
    },
    {
      title: "Skill Building",
      description:
        "Age-appropriate activities help your child discover, learn and practice essential foundational skills.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-6.webp&w=640&q=50",
    },
  ],
  inthebox: [
    {
      title: "Junior Genius Board",
      description:
        "The main interactive board that connects to your device via Bluetooth.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fcount-spike.webp&w=750&q=75",
    },
    {
      title: "30 Story Block Pieces",
      description:
        "Colorful blocks that help create interactive stories and learning experiences.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fnumerals-and-arithmetic-operators.webp&w=750&q=75",
    },
    {
      title: "20 Activity Cards",
      description:
        "Guided activities and games to enhance learning through play.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fgamepad.webp&w=750&q=75",
    },
    {
      title: "Storage Pouch",
      description:
        "Convenient storage solution to keep all components organized.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fquick-start-guide.webp&w=750&q=75",
    },
  ],
  freeinapp: [
    {
      title: "Alpha Zoo",
      description:
        "Learn the alphabet with fun animal characters in an interactive zoo environment.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-6.webp&w=384&q=75",
    },
    {
      title: "Number Train",
      description:
        "Develop counting skills and number recognition with this engaging train adventure.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-7.webp&w=384&q=75",
    },
    {
      title: "Memory Match",
      description:
        "Enhance memory and concentration skills with this classic matching game.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-2.webp&w=384&q=75",
    },
    {
      title: "Word Builder",
      description:
        "Create words and improve vocabulary with this interactive word-building game.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-2.webp&w=384&q=75",
    },
  ],
  alsobought: [
    {
      title: "Orboot Earth Globe",
      description:
        "Explore the world with this interactive AR globe that brings geography to life.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-animals%2Fcarousal%2Fcarousal-1.webp&w=640&q=75",
      price: 59.99,
      link: "https://www.playshifu.com/product/orboot-earth-explorer"
    },
    {
      title: "Plugo Count",
      description:
        "Make math fun with this interactive counting and arithmetic learning system.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-detective%2Fcarousal%2Fcarousal-1.webp&w=640&q=75",
      price: 49.99,
      link :"https://www.playshifu.com/product/plugo-animals-toy"
    },
    {
      title: "Tacto Chess",
      description:
        "Learn chess strategies with this tablet-based interactive chess learning system.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Forboot-earth-explorer%2Fcarousal%2F1.webp&w=640&q=75",
      price: 39.99,
      link: "https://www.playshifu.com/product/plugo-animals-toy"
    },
  ],
  relatedproducts: [
    {
      title: "Plugo Letters",
      description:
        "Build vocabulary and language skills with this interactive letter learning system.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fcarousal%2Fcarousal-1.webp&w=640&q=75",
      price: 49.99,
       
    },
    {
      title: "Orboot Dinos",
      description:
        "Travel back in time and learn about dinosaurs with this interactive AR globe.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Forboot-dinos%2Fcarousal%2F1.webp&w=640&q=75",
      price: 54.99,
       
    },
    {
      title: "Tacto Coding",
      description:
        "Introduce programming concepts through fun, interactive puzzles and games.",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Ftacto-coding%2Fcarousal%2F1.webp&w=640&q=75",
      price: 39.99,
   
    },
  ],
  ageRange: "4-8 years",
  category: "Educational Toys",
  rating: 4.8,
  reviews: 125,
  inStock: true,
};

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    return Product.deleteMany({});
  })
  .then(() => {
    return Product.create(dummyProduct);
  })
  .then(() => {
    console.log("Database seeded successfully");
    process.exit();
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  });
