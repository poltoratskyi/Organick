const catalog = [
  {
    parent_id: 1,
    tag: "Vegetable",
    price: 21.59,
    salePrice: 14.99,
    name: "Calabrese Broccoli",
    img: "../img/Catalog/Broccoli-min.jpg",
    description:
      "Fresh and nutritious Calabrese Broccoli. Perfect for a healthy and delicious meal. Grown with care to bring you the best quality.",
    descriptionMore:
      "Discover the vibrant and healthy Calabrese Broccoli, an excellent addition to your diet. This vegetable is renowned for its rich nutritional profile, including high levels of vitamins C and K, dietary fiber, and powerful antioxidants. It’s perfect for a variety of dishes, whether you prefer it steamed, roasted, or added to soups and salads.",
    additionalInfo:
      "Calabrese Broccoli is sourced from local organic farms, ensuring the highest quality and freshness. To maintain its crisp texture and flavor, store it in the refrigerator and consume within a week of purchase. For best results, blanch the broccoli in boiling water for 2-3 minutes before adding it to your favorite recipes. This versatile vegetable pairs well with garlic, lemon, and olive oil.",
  },
  {
    parent_id: 2,
    tag: "Fresh",
    price: 14.49,
    name: "Fresh Banana Fruits",
    img: "../img/Catalog/Banana-min.jpg",
    description:
      "Delicious and ripe Fresh Banana Fruits. Packed with natural sweetness and nutrients. A tasty and wholesome snack option.",
    descriptionMore:
      "Enjoy the sweet and nutritious Fresh Banana Fruits, a perfect snack for any time of day. These bananas are rich in potassium, fiber, and essential vitamins, making them a great choice for boosting energy and supporting overall health. Whether eaten on their own or added to smoothies, cereals, or desserts, our bananas bring natural sweetness to your diet.",
    additionalInfo:
      "Our Fresh Banana Fruits are sourced from the best tropical regions, ensuring they are always ripe and full of flavor. To keep them fresh, store bananas at room temperature. For longer storage, you can freeze them for use in smoothies and baking. Bananas are an excellent source of quick energy, making them perfect for a pre-workout snack.",
  },
  {
    parent_id: 3,
    tag: "Millets",
    price: 15.69,
    salePrice: 11.99,
    name: "White Nuts",
    img: "../img/Catalog/Nuts-min.jpg",
    description:
      "Nutrient-rich White Nuts. An excellent source of energy and a great addition to your diet. On sale for a limited time!",
    descriptionMore:
      "White Nuts are a powerhouse of nutrition, providing a healthy dose of energy, protein, and essential fats. These nuts are perfect for snacking, baking, or adding to salads and dishes for an extra crunch. Their high nutrient content makes them an excellent choice for a healthy and balanced diet.",
    additionalInfo:
      "White Nuts are sourced from carefully selected orchards to ensure maximum freshness and quality. They should be stored in an airtight container in a cool, dry place to maintain their crunch and flavor. Add them to your morning cereal, yogurt, or baked goods for a nutritious boost.",
  },
  {
    parent_id: 4,
    tag: "Vegetable",
    price: 17.79,
    name: "Vegan Red Tomato",
    img: "../img/Catalog/Tomato-min.jpg",
    description:
      "Vibrant and flavorful Vegan Red Tomato. Ideal for salads, sauces, and various culinary creations. A must-have in any kitchen.",
    descriptionMore:
      "Our Vegan Red Tomatoes are bursting with flavor and nutrition, perfect for enhancing your favorite dishes. These tomatoes are rich in antioxidants, vitamins A and C, and lycopene, which support heart health and boost immunity. Whether used in salads, sauces, or sandwiches, these tomatoes add a fresh and vibrant taste to any meal.",
    additionalInfo:
      "Our Vegan Red Tomatoes are grown in nutrient-rich soil and harvested at peak ripeness to ensure the best flavor. Store them at room temperature away from direct sunlight to preserve their taste and texture. For a burst of flavor, try roasting them with olive oil, salt, and herbs.",
  },
  {
    parent_id: 5,
    tag: "Health",
    price: 11.59,
    name: "Mung Bean",
    img: "../img/Catalog/Bean-min.jpg",
    description:
      "Healthy and protein-packed Mung Bean. Perfect for vegetarian dishes and a great source of essential nutrients. Elevate your meals with Mung Bean goodness.",
    descriptionMore:
      "Mung Beans are a nutritious and versatile legume, ideal for a variety of dishes. Rich in protein, fiber, and essential vitamins and minerals, they support digestion and overall health. Use them in soups, stews, salads, and stir-fries to add a healthy and satisfying element to your meals.",
    additionalInfo:
      "Our Mung Beans are carefully selected for their quality and nutritional value. Store them in a cool, dry place and rinse before cooking. For a nutritious addition, try sprouting them and adding to salads or stir-fries. Mung beans cook quickly and are perfect for a variety of vegetarian dishes.",
  },
  {
    parent_id: 6,
    tag: "Nuts",
    price: 12.39,
    name: "Brown Hazelnut",
    isNew: true,
    img: "../img/Catalog/Hazelnut-min.jpg",
    description:
      "Rich and aromatic Brown Hazelnut. An indulgent and satisfying nut that adds a delightful crunch to your snacks and desserts. Treat yourself today.",
    descriptionMore:
      "Brown Hazelnuts are a delicious and nutritious snack, rich in healthy fats, protein, and vitamins. Their rich, nutty flavor enhances baked goods, salads, and savory dishes. These hazelnuts are also high in antioxidants, supporting heart health and overall well-being.",
    additionalInfo:
      "Our Brown Hazelnuts are sourced from premium orchards and are perfect for both snacking and cooking. Store in an airtight container to keep them fresh and crunchy. Try roasting them to bring out their full flavor or use them in your favorite baking recipes.",
  },
  {
    parent_id: 7,
    tag: "Fresh",
    price: 17.75,
    name: "Eggs",
    img: "../img/Catalog/Eggs-min.jpg",
    description:
      "Farm-fresh Eggs. High-quality protein for a nutritious breakfast or as an essential ingredient in your favorite recipes. Get your eggs now for a wholesome experience.",
    descriptionMore:
      "Our farm-fresh Eggs are a staple in any nutritious diet, packed with high-quality protein, essential amino acids, and vitamins. Perfect for breakfast, baking, or cooking, these eggs offer a rich, fresh taste and superior quality. Elevate your culinary creations with the wholesome goodness of our farm-fresh eggs.",
    additionalInfo:
      "Our eggs come from free-range hens and are collected daily to ensure freshness. Store them in the refrigerator to maintain their quality. Use them for making omelets, baking cakes, or as a nutritious addition to any meal.",
  },
  {
    parent_id: 8,
    tag: "Fresh",
    price: 15.35,
    salePrice: 7.99,
    name: "Zelco Suji Elaichi Rusk",
    img: "../img/Catalog/Zelco Suji Elaichi Rusk-min.jpg",
    description:
      "Zelco Suji Elaichi Rusk. A delightful blend of suji and elaichi flavors. Crispy and delicious, perfect for tea time. Grab them now at a special discounted price.",
    descriptionMore:
      "Zelco Suji Elaichi Rusk is a perfect tea-time snack, offering a delightful blend of semolina (suji) and cardamom (elaichi). These rusks are crispy, flavorful, and make an excellent accompaniment to your morning or evening tea. Enjoy the special discounted price and savor the unique taste of Zelco Suji Elaichi Rusk.",
    additionalInfo:
      "Our Zelco Suji Elaichi Rusk is made from high-quality ingredients and baked to perfection for a crispy texture. Store them in an airtight container to maintain freshness. Enjoy them with tea, coffee, or as a standalone snack for a delightful treat.",
  },
  {
    parent_id: 9,
    tag: "Vegetable",
    price: 12.99,
    salePrice: 7.99,
    name: "Mung Bean",
    isNew: true,
    img: "../img/Offer/Mung Bean-min.jpg",
    description:
      "Premium Mung Bean, rich in protein and essential nutrients. Perfect for vegetarian dishes and a healthy lifestyle. Take advantage of the special offer and enjoy the freshness of Mung Bean in your meals.",
    descriptionMore:
      "Mung Beans are a versatile and nutritious legume, ideal for adding protein and fiber to your diet. These beans are perfect for sprouting, cooking in soups, stews, and curries, or adding to salads. With their mild flavor and rich nutritional profile, Mung Beans are a healthy and delicious choice for any meal.",
    additionalInfo:
      "Our premium Mung Beans are sourced for their quality and nutritional value. Keep them in a cool, dry place. Soak them before cooking for the best results. Mung beans are perfect for sprouting, which enhances their nutritional benefits. Use them in a variety of dishes to boost your diet with plant-based protein.",
  },
  {
    parent_id: 10,
    tag: "Vegetable",
    price: 10.59,
    salePrice: 7.99,
    name: "Brown Hazelnut",
    isNew: true,
    img: "../img/Offer/Brown Hazelnut-min.jpg",
    description:
      "Delicious Brown Hazelnut with a rich and nutty flavor. Packed with antioxidants and a great snack option. Don't miss out on the special offer to add a touch of indulgence to your daily routine.",
    descriptionMore:
      "Brown Hazelnuts are a nutritious snack, rich in healthy fats, protein, and vitamins. Their rich, nutty flavor makes them perfect for baking, snacking, or adding to salads and dishes. These hazelnuts are also high in antioxidants, supporting heart health and overall well-being. Enjoy them at a special offer price.",
    additionalInfo:
      "Our Brown Hazelnuts are carefully selected to ensure top quality. Store them in an airtight container to keep them fresh. They can be roasted for a more intense flavor or enjoyed raw as a healthy snack. Perfect for adding to granola, desserts, and savory dishes.",
  },
  {
    parent_id: 11,
    tag: "Vegetable",
    price: 17.99,
    salePrice: 8.99,
    name: "Onion",
    isNew: true,
    img: "../img/Offer/Onion-min.jpg",
    description:
      "Fresh and flavorful Onion, a versatile ingredient for various culinary creations. Whether used in salads, soups, or main dishes, our premium Onions will elevate the taste of your meals. Grab them now at a special discounted price.",
    descriptionMore:
      "Onions are a kitchen staple, adding flavor and depth to a wide range of dishes. Rich in vitamins, minerals, and antioxidants, they support immune health and overall wellness. Use our fresh Onions in salads, soups, stews, and more to enhance the taste and nutritional value of your meals. Enjoy them now at a special discounted price.",
    additionalInfo:
      "Our Onions are sourced from local farms and are known for their rich flavor. Store in a cool, dry place. They can be caramelized for a sweet and savory addition to dishes or used raw in salads for a crisp texture. Onions are a versatile ingredient that can enhance any meal.",
  },
  {
    parent_id: 12,
    tag: "Vegetable",
    price: 17.59,
    salePrice: 7.99,
    name: "Cabbage",
    isNew: true,
    img: "../img/Offer/Cabbage-min.jpg",
    description:
      "Nutrient-packed Cabbage, an essential addition to your healthy diet. Great for salads, coleslaw, and stir-fries. Don't miss the chance to enjoy the freshness of our premium Cabbage at a special offer price.",
    descriptionMore:
      "Cabbage is a versatile and nutrient-rich vegetable, perfect for a variety of dishes. High in vitamins C and K, fiber, and antioxidants, it supports digestive health and overall well-being. Use it in salads, coleslaw, stir-fries, and more for a fresh and healthy addition to your meals. Take advantage of our special offer to enjoy premium quality cabbage.",
    additionalInfo:
      "Our Cabbage is freshly harvested to ensure maximum freshness and flavor. Store it in the refrigerator and consume within a week for the best taste. Cabbage is perfect for making sauerkraut, coleslaw, and adding to soups and stews. It's a low-calorie, high-fiber vegetable that enhances any dish.",
  },
  {
    parent_id: 13,
    tag: "Health",
    price: 10.99,
    name: "Mung Bean",
    img: "../img/Catalog/Mung Bean-min.jpg",
    description:
      "Nutrient-rich Mung Bean, perfect for a healthy diet. Packed with protein and vitamins, Mung Beans are a versatile ingredient for salads, soups, and stir-fries. Enjoy the goodness of Mung Bean in your meals!",
    descriptionMore:
      "Mung Beans are an excellent source of plant-based protein, fiber, and essential nutrients. Ideal for a healthy diet, they can be used in a variety of dishes, including soups, salads, stir-fries, and desserts. Their mild flavor and nutritional benefits make them a versatile and valuable addition to any kitchen.",
    additionalInfo:
      "Our Mung Beans are carefully selected for their high quality and nutritional value. Store in a cool, dry place. Rinse before cooking. For added nutrition, try sprouting mung beans and adding to salads or sandwiches. They are quick to cook and enhance a wide range of dishes.",
  },
  {
    parent_id: 14,
    tag: "Nuts",
    price: 20.99,
    salePrice: 12.99,
    name: "White Hazelnut",
    img: "../img/Catalog/White Hazelnut-min.jpg",
    description:
      "Delicious White Hazelnuts at a special discounted price. These nuts are not only a tasty snack but also a great addition to your desserts and baking. Don't miss out on the chance to enjoy the rich flavor of our premium White Hazelnuts.",
    descriptionMore:
      "White Hazelnuts are a delicious and nutritious treat, perfect for snacking, baking, and cooking. Rich in healthy fats, protein, and essential vitamins, they support heart health and overall well-being. Their creamy texture and rich flavor make them a versatile ingredient for a variety of recipes. Enjoy our premium White Hazelnuts at a special discounted price.",
    additionalInfo:
      "Our White Hazelnuts are selected from the best orchards for their quality and taste. Store in an airtight container in a cool, dry place to maintain freshness. They are perfect for making nut butter, adding to desserts, or enjoying as a healthy snack.",
  },
  {
    parent_id: 15,
    tag: "Fresh",
    price: 17.99,
    name: "Fresh Corn",
    img: "../img/Catalog/Corn-min.jpg",
    description:
      "Farm-fresh Corn, a delightful addition to your meals. Whether boiled, grilled, or added to salads, our Fresh Corn is bursting with sweet flavor. Elevate your culinary experience with the freshness of our premium Corn.",
    descriptionMore:
      "Fresh Corn is a sweet and versatile vegetable, perfect for a variety of dishes. Enjoy it boiled, grilled, or added to salads and salsas for a burst of flavor and nutrition. Rich in fiber, vitamins, and antioxidants, our farm-fresh Corn supports digestive health and overall wellness. Make your meals more enjoyable with the fresh taste of premium corn.",
    additionalInfo:
      "Our Fresh Corn is harvested at peak ripeness for maximum sweetness and flavor. Store in the refrigerator and use within a few days for the best taste. Boil or grill for a delicious side dish, or add kernels to salads and salsas for extra crunch and sweetness.",
  },
  {
    parent_id: 16,
    tag: "Fresh",
    price: 20.39,
    salePrice: 15.99,
    name: "Organic Almonds",
    img: "../img/Catalog/Almonds-min.jpg",
    description:
      "Premium Organic Almonds at a discounted price. These almonds are not only a healthy snack but also a versatile ingredient for cooking and baking. Experience the natural goodness of our Organic Almonds in every bite.",
    descriptionMore:
      "Organic Almonds are a nutritious and delicious snack, packed with healthy fats, protein, fiber, and essential vitamins and minerals. Perfect for snacking, baking, or adding to dishes, these almonds offer a natural and wholesome way to enhance your diet. Enjoy the high quality and rich taste of our premium Organic Almonds at a special discounted price.",
    additionalInfo:
      "Our Organic Almonds are sourced from certified organic farms. Store them in an airtight container in a cool, dry place. They are ideal for making almond milk, adding to baked goods, or enjoying as a snack. Rich in nutrients, they support heart health and overall wellness.",
  },
];
export default catalog;
