const products = [
  {
    id: 1,
    name: "BOBY GOLD SPARKLERS 7CM (10pcs) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/sp7cmgold.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "BOBBY CRACKLINGS SPARKLERS 7CM(10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/sp7cmcrack.jpg",
  },
  {
    id: 3,
    name: "12CM 4 COLOUR SPARKLERS (10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/12cm4.jpg",
  },
  {
    id: 4,
    name: "12CM 4 COLOUR SPARKLERS (10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/15cmgold.jpg",
  },
  {
    id: 5,
    name: "CRACKLING SPARKLERS 15CM(10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/15cmcrack.jpg",
  },
  {
    id: 6,
    name: "GOLD SPARKLERS 30CM(5PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/30cmgold.jpg",
  },
  {
    id: 7,
    name: "CRACKLING SPARKLERS 30CM(5PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/30cmcrack.jpg",
  },
  {
    id: 8,
    name: "RED SPARKLERS 15CM(10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/15cmred.jpg",
  },
  {
    id: 9,
    name: "LEMON TREE SPARKLERS 15CM(10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/15cmlemon.jpg",
  },
  {
    id: 9,
    name: "LAVENDER SPARKLERS 15CM(10PCS) (1Box)",
    price: 120,
    category: "sparklers", // ✅ Match Home category key
    image: "/images/15cmlav.jpg",
  },
  {
    id: 10,
    name: "THE GREAT SPLENDOUR FOUNTAIN (1PC) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/tgpf.jpg",
  },
  {
    id: 11,
    name: "FLOWERPOT SMALL(10PCS)	 (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/fs.jpg",
  },
  {
    id: 12,
    name: "FLOWERPOTS BIG(10PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/fb.jpg",
  },
  {
    id: 13,
    name: "FLOWERPOTS SPECIAL (10PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/fspec.jpg",
  },
  {
    id: 14,
    name: "CHEERS FOUNTAIN (3PCS)) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/cherrs.jpg",
  },
  {
    id: 15,
    name: "FLOWERPOTS DELUXE (5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/fd.jpg",
  },
  {
    id: 16,
    name: "JADE FLOWERS FOUNTAIN(5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/jfp.jpg",
  },
  {
    id: 17,
    name: "HAPPINESS FOUNTAIN (5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/hf.jpg",
  },
  {
    id: 18,
    name: "JEWEL POTS FOUNTAIN (5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/jpf.jpg",
  },
  {
    id: 19,
    name: "FLOWERPOTS GIANT (10PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/fg.jpg",
  },
  {
    id: 20,
    name: "COLOR FOUNTAINS (4PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/cf.jpg",
  },
  {
    id: 21,
    name: "Tricolour FOUNTAIN (5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/tf.jpg",
  },
  {
    id: 22,
    name: "CRACKLING KING FOUNTAIN (5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/ckf.jpg",
  },
  {
    id: 23,
    name: "TRICOLOUR MILLENNIUM (5pcs) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/tm.jpg",
  },
  {
    id: 24,
    name: "RED CINDERELLA (5PCS) (1Box)",
    price: 120,
    category: "Flower Pots", // ✅ Match Home category key
    image: "/images/rc.jpg",
  },
  {
    id: 25,
    name: "ZAMIN CHAKKARS BIG(10PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/zcb.jpg",
  },
  {
    id: 26,
    name: "ZAMIN CHAKKARS ASOKA (10PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/zca.jpg",
  },
  {
    id: 27,
    name: "TWIN SPIN WHEEL (5PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/tsw.jpg",
  },
  {
    id: 28,
    name: "SCARLET SAUCER(5PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/ss.jpg",
  },
  {
    id: 29,
    name: "WHIZZ WHEEL (5PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/ww.jpg",
  },
  {
    id: 30,
    name: "ZAMIN CHAKKARS SPECIAL (10PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/zcs.jpg",
  },
  {
    id: 31,
    name: "MEGA TWISTER WHEEL(5PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/mtw.jpg",
  },
  {
    id: 32,
    name: "ZAMIN CHAKKARS DELUXE (10PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/zcd.jpg",
  },
  {
    id: 33,
    name: "SCARY SCREAM(4PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/scarys.jpg",
  },
  {
    id: 34,
    name: "ZAMIN CHAKKARS SUPER DELUXE (10PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/zcsd.jpg",
  },
  {
    id: 36,
    name: "POKER WHEEL (5PCS)	 (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/pw.jpg",
  },
  {
    id: 37,
    name: "CUCKOO WHEEL (5PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/cw.jpg",
  },
  {
    id: 38,
    name: "DOLLAR WHEEL(5PCS) (1Box)",
    price: 120,
    category: "Chakkars", // ✅ Match Home category key
    image: "/images/dw.jpg",
  },
  {
    id: 39,
    name: "TWINKLING STAR 45CM(10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/tsnf.jpg",
  },
  {
    id: 40,
    name: "TFIRE PENCILS (10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/fp.jpg",
  },
  {
    id: 41,
    name: "MAGNETIC TORCHES (10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/mt.jpg",
  },
  {
    id: 41,
    name: "SILVER TWINKLINGS 60CM(10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/st60cm.jpg",
  },
  {
    id: 42,
    name: "MAGIC WHIP (1PC) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/mw.jpg",
  },
  {
    id: 43,
    name: "MULTI COLOUR CANDLES (10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/mcc.jpg",
  },
  {
    id: 44,
    name: "SILVER TWINKLINGS 120CM(10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/st120cm.jpg",
  },
  {
    id: 45,
    name: "4 COLOUR TORCHES (10PCS) (1Box)",
    price: 120,
    category: "Novel Fireworks", // ✅ Match Home category key
    image: "/images/4ct.jpg",
  },
  
];

export default products;
