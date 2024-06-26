const catalog = [
  {
    parent_id: 1,
    tag: "Vegetable",
    price: 21.59,
    salePrice: 14.99,
    name: "Calabrese Broccoli",
    img: "../img/Catalog/Broccoli-min.jpg",
    description:
      "Fresh and nutritious Calabrese Broccoli. Perfect for a healthy and delicious meal.",
    descriptionMore:
      "Calabrese Broccoli is rich in vitamins C and K, dietary fiber, and antioxidants. Ideal for steaming, roasting, or adding to soups and salads.",
    additionalInfo:
      "Store in the refrigerator and consume within a week. Blanch in boiling water for 2-3 minutes before cooking.",
  },
  {
    parent_id: 2,
    tag: "Fresh",
    price: 14.49,
    name: "Fresh Banana Fruits",
    img: "../img/Catalog/Banana-min.jpg",
    description:
      "Delicious and ripe Fresh Banana Fruits. Packed with natural sweetness and nutrients.",
    descriptionMore:
      "Rich in potassium, fiber, and vitamins, these bananas are great for boosting energy. Perfect on their own or in smoothies and desserts.",
    additionalInfo:
      "Store at room temperature or freeze for longer storage. Ideal for a quick energy boost.",
  },
  {
    parent_id: 3,
    tag: "Millets",
    price: 15.69,
    salePrice: 11.99,
    name: "White Nuts",
    img: "../img/Catalog/Nuts-min.jpg",
    description:
      "Nutrient-rich White Nuts. An excellent source of energy and a great addition to your diet.",
    descriptionMore:
      "High in protein and healthy fats, perfect for snacking, baking, or adding to salads for extra crunch.",
    additionalInfo:
      "Store in an airtight container in a cool, dry place. Add to cereals, yogurt, or baked goods.",
  },
  {
    parent_id: 4,
    tag: "Vegetable",
    price: 17.79,
    name: "Vegan Red Tomato",
    img: "../img/Catalog/Tomato-min.jpg",
    description:
      "Vibrant and flavorful Vegan Red Tomato. Ideal for salads, sauces, and various dishes.",
    descriptionMore:
      "Rich in antioxidants, vitamins A and C, and lycopene. Enhances the taste of salads, sauces, and sandwiches.",
    additionalInfo:
      "Store at room temperature away from sunlight. Roast with olive oil, salt, and herbs for extra flavor.",
  },
  {
    parent_id: 5,
    tag: "Health",
    price: 11.59,
    name: "Mung Bean",
    img: "../img/Catalog/Bean-min.jpg",
    description:
      "Healthy and protein-packed Mung Bean. Perfect for vegetarian dishes.",
    descriptionMore:
      "Rich in protein, fiber, and essential vitamins. Great for soups, stews, salads, and stir-fries.",
    additionalInfo:
      "Store in a cool, dry place. Rinse before cooking. Try sprouting for salads or stir-fries.",
  },
  {
    parent_id: 6,
    tag: "Nuts",
    price: 12.39,
    name: "Brown Hazelnut",
    isNew: true,
    img: "../img/Catalog/Hazelnut-min.jpg",
    description:
      "Rich and aromatic Brown Hazelnut. Adds a delightful crunch to snacks and desserts.",
    descriptionMore:
      "High in healthy fats, protein, and vitamins. Perfect for baking, snacking, or adding to salads.",
    additionalInfo:
      "Store in an airtight container. Roast to enhance flavor or use in baking recipes.",
  },
  {
    parent_id: 7,
    tag: "Fresh",
    price: 17.75,
    name: "Eggs",
    img: "../img/Catalog/Eggs-min.jpg",
    description: "Farm-fresh Eggs. High-quality protein for nutritious meals.",
    descriptionMore:
      "Packed with essential amino acids and vitamins. Ideal for breakfast, baking, or cooking.",
    additionalInfo:
      "Collected daily from free-range hens. Store in the refrigerator. Use for omelets, cakes, or as a nutritious addition to any meal.",
  },
  {
    parent_id: 8,
    tag: "Fresh",
    price: 15.35,
    salePrice: 7.99,
    name: "Zelco Suji Elaichi Rusk",
    img: "../img/Catalog/Zelco Suji Elaichi Rusk-min.jpg",
    description:
      "Zelco Suji Elaichi Rusk. A delightful blend of suji and elaichi flavors.",
    descriptionMore:
      "Crispy and flavorful, perfect for tea time. Enjoy the blend of semolina (suji) and cardamom (elaichi).",
    additionalInfo:
      "Store in an airtight container. Enjoy with tea, coffee, or as a standalone snack.",
  },
  {
    parent_id: 9,
    tag: "Vegetable",
    price: 12.99,
    salePrice: 7.99,
    name: "Cauliflower",
    isNew: true,
    img: "../img/Catalog/Cauliflower-min.jpg",
    description:
      "Fresh high-quality cauliflower, perfect for a variety of dishes.",
    descriptionMore:
      "Nutritious and delicious, rich in vitamins C and K. Ideal for salads, soups, casseroles, and more.",
    additionalInfo:
      "Package weight: 500g. Store in a cool place. Produced in an environmentally clean region.",
  },
  {
    parent_id: 10,
    tag: "Vegetable",
    price: 10.59,
    salePrice: 7.99,
    name: "Brown Hazelnut",
    isNew: true,
    img: "../img/Catalog/Brown Hazelnut-min.jpg",
    description: "Delicious Brown Hazelnut with a rich and nutty flavor.",
    descriptionMore:
      "Rich in healthy fats, protein, and vitamins. Perfect for baking, snacking, or adding to salads.",
    additionalInfo:
      "Store in an airtight container. Roast for a more intense flavor or enjoy raw.",
  },
  {
    parent_id: 11,
    tag: "Vegetable",
    price: 17.99,
    salePrice: 8.99,
    name: "Onion",
    isNew: true,
    img: "../img/Catalog/Onion-min.jpg",
    description:
      "Fresh and flavorful Onion, a versatile ingredient for various dishes.",
    descriptionMore:
      "Rich in vitamins, minerals, and antioxidants. Ideal for salads, soups, stews, and more.",
    additionalInfo:
      "Store in a cool, dry place. Can be caramelized or used raw in salads for added flavor.",
  },
  {
    parent_id: 12,
    tag: "Vegetable",
    price: 17.59,
    salePrice: 7.99,
    name: "Cabbage",
    isNew: true,
    img: "../img/Catalog/Cabbage-min.jpg",
    description: "Nutrient-packed Cabbage, perfect for healthy diets.",
    descriptionMore:
      "High in vitamins C and K, fiber, and antioxidants. Great for salads, coleslaw, and stir-fries.",
    additionalInfo:
      "Store in the refrigerator. Use within a week. Ideal for sauerkraut, coleslaw, and soups.",
  },
  {
    parent_id: 13,
    tag: "Health",
    price: 10.99,
    name: "Long Cucumber",
    img: "../img/Catalog/Long Cucumber-min.jpg",
    description:
      "Crisp and refreshing long cucumber, perfect for healthy meals and snacks.",
    descriptionMore:
      "Low in calories and high in vitamins A, C, and K. Ideal for salads, sandwiches, and as a hydrating snack.",
    additionalInfo:
      "Package weight: 400g. Store in a cool, dry place. Grown using sustainable farming practices.",
  },
  {
    parent_id: 14,
    tag: "Nuts",
    price: 20.99,
    salePrice: 12.99,
    name: "White Hazelnut",
    img: "../img/Catalog/White Hazelnut-min.jpg",
    description: "Delicious White Hazelnuts at a special discounted price.",
    descriptionMore:
      "Rich in healthy fats, protein, and essential vitamins. Perfect for snacking, baking, and cooking.",
    additionalInfo:
      "Store in an airtight container. Great for nut butter, desserts, or as a snack.",
  },
  {
    parent_id: 15,
    tag: "Fresh",
    price: 17.99,
    name: "Fresh Corn",
    img: "../img/Catalog/Corn-min.jpg",
    description: "Farm-fresh Corn, a delightful addition to your meals.",
    descriptionMore:
      "Sweet and versatile, perfect for boiling, grilling, or adding to salads and salsas.",
    additionalInfo:
      "Store in the refrigerator. Use within a few days. Ideal for a variety of dishes.",
  },
  {
    parent_id: 16,
    tag: "Fresh",
    price: 20.39,
    salePrice: 15.99,
    name: "Organic Almonds",
    img: "../img/Catalog/Almonds-min.jpg",
    description: "Premium Organic Almonds at a discounted price.",
    descriptionMore:
      "Nutritious and delicious, packed with healthy fats, protein, and fiber. Ideal for snacking, baking, and cooking.",
    additionalInfo:
      "Store in an airtight container. Perfect for nut butter, desserts, or as a snack.",
  },
];
export default catalog;
