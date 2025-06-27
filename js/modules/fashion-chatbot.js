// JavaScript for Timeless Chronicles Website

document.addEventListener('DOMContentLoaded', function() { 
  // Fashion
// Chatbot Elements
const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

// Fashion Chatbot Knowledge (Organized by Keywords)
const fashionKnowledge = {
  "fashion_history_definition": {
    keywords: ["what is fashion history", "define fashion history", "history of clothing", "evolution of style"],
    answer: "Fashion history is the study of how clothing and styles have evolved over time, reflecting cultural, social, and technological changes."
  },
   "ancient_egypt_fashion_general": {
    keywords: ["ancient egypt fashion", "egyptian clothing", "what did people wear in ancient egypt", "linen", "kilt", "shendyt", "sheath dress", "kalasiris"],
    answer: "In Ancient Egypt, people wore linen garments suited to the hot climate. Men typically wore kilts (shendyt), and women wore straight, sheath dresses (kalasiris). Jewelry was also very popular."
  },
  "ancient_rome_fashion_general": {
    keywords: ["ancient rome fashion", "roman clothing", "what did they wear in ancient rome", "toga", "stola", "palla"],
    answer: "In Ancient Rome, togas were a significant garment for male citizens, while women wore stolas (long, draped dresses)."
  },
  "toga_definition": {
    keywords: ["toga","what is a toga", "define toga", "toga meaning"],
    answer: "A toga was a draped garment, typically made of wool, worn by male citizens in Ancient Rome."
  },
  "renaissance_fashion_general": {
    keywords: ["renaissance fashion", "european renaissance clothing", "fashion in 14th century", "fashion in 15th century", "fashion in 16th century", "doublet", "hose", "renaissance gown"],
    answer: "Renaissance fashion in Europe (roughly 14th-16th centuries) was characterized by rich fabrics like velvet and silk, elaborate embroidery, and structured silhouettes. For men, doublets and hose were common, while women wore gowns with fitted bodices and wide skirts."
  },  
  "flapper_style_description": {
    keywords: ["flapper style", "1920s fashion", "roaring twenties fashion", "dropped waistline", "bobbed hair", "cloche hat"],
    answer: "Flapper style, popular in the 1920s, featured loose-fitting, straight dresses with dropped waistlines, shorter hemlines, and accessories like cloche hats and long necklaces, symbolizing a new freedom for women."
  },
  "1950s_fashion_general": {
        keywords: ["1950s fashion", "fashion in the 50s", "new look era", "poodle skirt", "pencil skirt", "rock and roll fashion"],
        answer: "1950s fashion was characterized by the 'New Look' with its emphasis on a defined waist and full skirts for women. Pencil skirts and sweater sets were also popular. Men's fashion included tailored suits and casual wear influenced by rock and roll culture."
    },   
    "1980s_fashion_general": {
        keywords: ["1980s fashion", "fashion in the 80s", "power dressing", "big hair", "neon colors", "athletic wear trend"],
        answer: "1980s fashion was known for its bold and often excessive styles, including power dressing with sharp-shouldered suits, big hairstyles, vibrant neon colors, and the growing popularity of athletic wear as everyday fashion."
    },   
    "ai_generated_fashion_what_is": {
        keywords: ["ai generated fashion", "artificial intelligence fashion", "fashion created by ai", "how ai is used in fashion"],
        answer: "AI-generated fashion involves using artificial intelligence algorithms to design new clothing, predict trends, personalize styles, and even manage supply chains in the fashion industry."
    },
    "how_ai_designs_fashion": {
        keywords: ["how does ai design clothes", "ai fashion design process", "machine learning in fashion design"],
        answer: "AI algorithms can analyze vast amounts of fashion data (like images, trends, and customer preferences) to learn patterns and generate novel designs. Some AI tools can even create unique textile prints or suggest new color combinations."
    },
    "benefits_of_ai_in_fashion": {
        keywords: ["advantages of ai in fashion", "ai fashion benefits", "why use ai in fashion"],
        answer: "AI in fashion can lead to faster trend prediction, more personalized clothing recommendations, reduced waste through optimized production, and the creation of innovative and unique designs."
    },  
  "current_fashion_trends": {
    keywords: ["current trends", "current fashion trends", "latest fashion", "trending styles"],
    answer: "Current fashion trends are constantly evolving, but some popular ones include oversized silhouettes, sustainable fashion, and the resurgence of Y2K styles."
  },
  "coco_chanel_biography": {
    keywords: ["who was coco chanel", "gabrielle chanel", "chanel history", "about coco chanel"],
    answer: "Coco Chanel was a highly influential French designer known for her timeless elegance, the 'little black dress,' and Chanel No. 5 perfume. She revolutionized women's fashion by emphasizing simplicity and comfort."
  },
  "little_black_dress_definition": {
    keywords: ["little black dress", "lbd", "coco chanel black dress"],
    answer: "The 'little black dress' (LBD) is a classic and versatile garment considered essential in a woman's wardrobe, popularized by Coco Chanel in the 1920s."
  }, 
  "yves_saint_laurent_biography": {
    keywords: ["who is yves saint laurent", "ysl designer", "le smoking history"],
    answer: "Yves Saint Laurent was a highly influential French designer who started his career with Dior and later founded his own iconic fashion house. He is known for popularizing the tuxedo suit for women and for his innovative and often controversial designs."
  },
  "valentino_garavani_info": {
    keywords: ["who is valentino garavani", "valentino red", "italian red carpet designer"],
    answer: "Valentino Garavani is an Italian designer renowned for his elegant and glamorous red carpet creations. His signature 'Valentino red' color is iconic in the fashion world."
  },
  "giorgio_armani_info": {
    keywords: ["who is giorgio armani", "armani style", "italian tailoring"],
    answer: "Giorgio Armani is an Italian designer known for his understated elegance and sophisticated tailoring, particularly in menswear but also in womenswear."
  },
  "miuccia_prada_info": {
    keywords: ["who is miuccia prada", "prada designer", "miu miu"],
    answer: "Miuccia Prada is an Italian designer and the head of Prada and Miu Miu. She is known for her intellectual and often unconventional approach to fashion, blending art, culture, and technology in her designs."
  },
  "alexander_mcqueen_info": {
    keywords: ["who is alexander mcqueen", "mcqueen design style", "avant-garde fashion"],
    answer: "Alexander McQueen was a British designer known for his dramatic, avant-garde, and often theatrical runway shows. His designs often explored themes of history, nature, and mortality."
  },
  "elsa_schiaparelli_info": {
    keywords: ["who is elsa schiaparelli", "schiaparelli surrealism", "shocking pink"],
    answer: "Elsa Schiaparelli was an Italian designer known for her surrealist collaborations with artists like Salvador Dalí and her innovative and often whimsical designs in the 1930s and 1940s."
  },
  "cristobal_balenciaga_info": {
    keywords: ["who is balenciaga", "balenciaga architectural designs", "sack dress"],
    answer: "Cristóbal Balenciaga was a Spanish designer who founded his influential haute couture house in Paris. He was renowned for his architectural silhouettes and mastery of tailoring."
  },
  "hubert_de_givenchy_info": {
    keywords: ["who is hubert de givenchy", "givenchy style", "audrey hepburn designer"],
    answer: "Hubert de Givenchy was a French designer who founded his haute couture house and was known for his elegant and timeless designs, particularly his close association with Audrey Hepburn."
  },
  "karl_lagerfeld_info": {
    keywords: ["who is karl lagerfeld", "chanel creative director", "fendi designer"],
    answer: "Karl Lagerfeld was a highly influential German designer who served as the creative director for Chanel and Fendi, as well as his own namesake label. He was known for his distinctive personal style and prolific output."
  },
  "tom_ford_info": {
    keywords: ["who is tom ford", "tom ford design aesthetic", "gucci ysl designer"],
    answer: "Tom Ford is an American designer known for his sharp, sensual, and glamorous aesthetic, having worked at Gucci and Yves Saint Laurent before establishing his own luxury brand."
  },
  "donatella_versace_info": {
    keywords: ["who is donatella versace", "versace style", "medusa logo"],
    answer: "Donatella Versace is an Italian designer and the creative director of Versace. She is known for her bold, glamorous, and often overtly sensual designs that carry on her brother Gianni Versace's legacy."
  },
  "marc_jacobs_info": {
    keywords: ["who is marc jacobs", "marc jacobs design approach", "louis vuitton designer"],
    answer: "Marc Jacobs is an American designer who has headed his own label and previously served as creative director of Louis Vuitton. He is known for his eclectic and often irreverent designs."
  },
  "stella_mccartney_info": {
    keywords: ["who is stella mccartney", "sustainable fashion designer", "ethical fashion"],
    answer: "Stella McCartney is a British designer known for her commitment to sustainable and ethical fashion practices, creating stylish and environmentally conscious clothing and accessories."
  },
  "virgil_abloh_info": {
    keywords: ["who is virgil abloh", "louis vuitton menswear", "off-white designer"],
    answer: "Virgil Abloh was an American designer, entrepreneur, and the artistic director of Louis Vuitton's menswear collection. He was also the founder of the Off-White label, known for its streetwear-inspired luxury designs."
  },
     "new_look_definition": {
    keywords: ["what is the 'new look'", "dior's new look", "post-war fashion 1940s"],
    answer: "The 'New Look' was a post-World War II fashion movement introduced by Christian Dior, characterized by rounded shoulders, a cinched waist, and a full, voluminous skirt."
  },   
    "common_fashion_questions_what_to_wear": {
        keywords: ["what should i wear", "what to wear for [event]", "outfit ideas"],
        answer: "Choosing what to wear depends on the occasion, the weather, and your personal style! For a casual day out, jeans and a t-shirt are always a good option. For a party, you might consider something more dressy. Tell me more about where you're going, and I can give you more specific ideas!"
    },
    "common_fashion_questions_how_to_style": {
        keywords: ["how to style [item]", "styling tips for [clothing]", "how to wear [trend]"],
        answer: "Styling often involves thinking about balance and coordination. For example, if you're wearing a bold top, you might pair it with simpler bottoms. Accessories like scarves, belts, and jewelry can also completely change an outfit. What specific item or trend are you wondering how to style?"
    },
    "common_fashion_questions_fast_fashion": {
        keywords: ["what is fast fashion", "problems with fast fashion", "why is fast fashion bad"],
        answer: "Fast fashion is the rapid production of trendy, inexpensive clothing. While it makes fashion more accessible, it can often lead to environmental issues due to waste and pollution, as well as concerns about labor practices."
    },  
  "oversized_silhouettes_definition": {
    keywords: ["what is oversized silhouettes", "baggy clothes trend", "voluminous fashion"],
    answer: "Oversized silhouettes involve clothing that is intentionally loose and voluminous, such as oversized blazers, sweaters, and wide-leg pants."
  },
  "y2k_fashion_resurgence": {
    keywords: ["what is the resurgence of y2k styles", "2000s fashion comeback", "low-rise jeans crop tops"],
    answer: "The resurgence of Y2K styles refers to the comeback of fashion trends from the late 1990s and early 2000s. This includes items like low-rise jeans, crop tops, mini skirts, bright colors, and chunky sneakers."
  },
  "capsule_wardrobe_concept": {
    keywords: ["what is 'capsule wardrobe' concept", "minimalist wardrobe", "versatile clothing collection"],
    answer: "A capsule wardrobe is a curated collection of essential clothing items that can be mixed and matched to create a variety of outfits. It emphasizes quality over quantity and aims for versatility and timelessness."
  },
    "common_fashion_questions_what_is_vintage": {
        keywords: ["vintage fashion", "what is vintage fashion", "vintage clothing meaning", "when is something vintage"],
        answer: "Vintage fashion generally refers to clothing and accessories from a previous era, usually at least 20-30 years old. These items often reflect the style and trends of their time and can be collectible."
    },
    "common_fashion_questions_what_is_haute_couture": {
        keywords: ["what is haute couture", "couture meaning", "high fashion"],
        answer: "Haute couture is high-end, custom-made fashion created by leading designers. It involves intricate craftsmanship, expensive fabrics, and is often made-to-measure for individual clients."
    },
    "common_fashion_questions_how_to_care_for_clothes": {
        keywords: ["how to wash clothes", "clothing care tips", "how to make clothes last longer"],
        answer: "Taking care of your clothes properly involves checking the care label for washing instructions, separating colors, using the right detergent, and drying them appropriately. Folding or hanging them neatly also helps!"
    },
    "common_fashion_questions_what_are_different_styles": {
        keywords: ["different fashion styles", "types of clothing styles", "what is [style] fashion"],
        answer: "There are many different fashion styles, such as casual, formal, bohemian, minimalist, streetwear, and more! Each style has its own characteristics and aesthetic."
    },
    "common_fashion_questions_how_to_find_your_style": {
        keywords: ["how to find my fashion style", "discovering your style", "what is my style"],
        answer: "Finding your style is a personal journey! Try looking at what clothes you're drawn to, what makes you feel comfortable and confident, and get inspiration from magazines, social media, and people around you. Experiment and have fun!"
    },
    "common_fashion_questions_what_are_basics": {
        keywords: ["basic fashion style", "what are fashion basics", "essential clothing items", "must-have wardrobe pieces"],
        answer: "Fashion basics are versatile and timeless clothing items that can be mixed and matched to create many outfits. Examples include a plain white t-shirt, a good pair of jeans, a black blazer, and neutral-colored sweaters."
    },
    "common_fashion_questions_how_to_mix_patterns": {
        keywords: ["how to mix patterns in clothing", "pattern mixing tips", "wearing different prints"],
        answer: "Mixing patterns can be fun! Try pairing patterns of different scales (e.g., small stripes with large florals) or sticking within the same color family. Start with one bold pattern and add a more subtle one."
    },
    "common_fashion_questions_what_accessories_to_wear": {
        keywords: ["what accessories to wear", "types of fashion accessories", "how to choose accessories"],
        answer: "Accessories like jewelry, scarves, belts, hats, and bags can enhance your outfit and express your personality. Choose accessories that complement your clothing and the occasion. Sometimes, less is more!"
    },
    "common_fashion_questions_how_to_dress_for_body_type": {
        keywords: ["how to dress for my body type", "best clothes for [shape] body", "what styles suit me"],
        answer: "Dressing for your body type is about choosing clothes that flatter your shape and proportions. For example, A-line skirts often look great on many body types, and empire waist tops can be flattering. There are many resources online that offer specific advice for different body shapes."
    },
    "sustainable_fashion_definition": {
    keywords: ["sustainable fashion", "what is sustainable fashion", "eco-friendly clothing", "ethical fashion"],
    answer: "Sustainable fashion refers to clothing and accessories that are produced and used in a way that minimizes environmental harm and maximizes social benefits."
  },
    "common_fashion_questions_where_to_buy_sustainable": {
        keywords: ["where to buy sustainable fashion", "eco-friendly clothing brands", "ethical fashion stores"],
        answer: "More and more brands and stores are focusing on sustainable fashion. Look for brands that use organic or recycled materials, have transparent supply chains, and are certified by ethical organizations. Online marketplaces and specialized boutiques often feature sustainable options."
    },
    "common_fashion_questions_what_is_upcycling": {
        keywords: ["what is upcycling fashion", "upcycled clothing", "repurposing clothes"],
        answer: "Upcycling in fashion involves taking old or unwanted clothing and transforming them into new, higher-quality items. It's a great way to be creative and reduce textile waste."
    },
    "common_questions_teen_trends": {
        keywords: ["teenager trends", "current fashion trends for teenagers", "what's in style for teens"],
        answer: "Teen fashion trends are constantly evolving but often include a mix of casual comfort, streetwear influences, and styles inspired by social media and pop culture. Keep an eye on what your peers and influencers are wearing!"
    },
    "common_questions_men_trends": {
        keywords: ["men's trend", "men's fashion", "what's trending in men's fashion right now", "latest men's styles"],
        answer: "Current men's trends can vary but often include relaxed tailoring, sustainable materials, a mix of high and low fashion, and a focus on personal expression. Check fashion magazines and online platforms for specifics."
    },
    "common_questions_stay_updated": {
        keywords: ["stay updated", "how can i stay up-to-date with the latest fashion", "following fashion trends"],
        answer: "Follow fashion magazines, blogs, social media influencers, and pay attention to what's being showcased on runways and in retail stores."
    },
    "common_questions_fashion_inspiration": {
        keywords: ["where can i get fashion inspiration", "finding style inspiration"],
        answer: "Look to fashion magazines, websites like Pinterest and Instagram, street style blogs, movies, music, and even art for fashion inspiration."
    },
    "common_questions_are_specific_trends_in": {
        keywords: ["are [trend] still in style"],
        answer: "The longevity of a trend varies. Some trends have a quick cycle, while others may linger or come back in a modified form. Tell me the specific trend you're curious about!"
    },
    "common_questions_timeless_pieces": {
        keywords: ["timelss pieces", "what are some timeless fashion pieces", "classic wardrobe items"],
        answer: "Timeless pieces are those that remain stylish regardless of current trends, such as a well-fitting blazer, a classic trench coat, a simple black dress, and quality denim jeans."
    },
    "common_questions_unique_style": {
        keywords: ["unique style", "how can i create my own unique style", "developing personal style"],
        answer: "Your unique style comes from blending your personal preferences, what makes you feel comfortable, and your inspirations. Don't be afraid to mix different styles and experiment with what resonates with you."
    },
    "common_questions_affordable_fashion": {
        keywords: ["affordable ways to be fashionable", "cheap fashion tips"],
        answer: "Explore thrift stores, sales racks, and consider swapping clothes with friends. Focusing on versatile basics and adding trendy accessories can also be budget-friendly."
    },
    "common_questions_social_media_influence": {
        keywords: ["how can social media influence fashion trends", "impact of social media on fashion"],
        answer: "Social media platforms allow trends to spread rapidly through influencers, hashtags, and visual sharing. It can also democratize fashion by showcasing diverse styles and creators."
    },
    "common_questions_shoes_with_garment": {
        keywords: ["what kind of shoes should i wear with [garment]"],
        answer: "The best shoes depend on the garment and the occasion. For example, sneakers can be great with jeans or casual dresses, while heels might dress up a skirt or formal pants. Tell me what you're wearing, and I can give you shoe suggestions!"
    },
    "common_questions_style_accessory": {
        keywords: ["how do i style a [accessory]"],
        answer: "Styling an accessory depends on the item and your outfit. A scarf can be tied in many ways, a belt can define your waist, and jewelry can add a touch of sparkle. Tell me which accessory you're wondering about!"
    },
    "common_questions_colors_that_go_well": {
        keywords: ["what colors go well with [color]"],
        answer: "Certain colors complement others based on color theory. For example, blues often pair well with whites, yellows, and grays. Tell me the color you're working with, and I can suggest some good combinations."
    },
    "common_questions_outfit_for_occasion": {
        keywords: ["what's a good outfit for [occasion]"],
        answer: "The best outfit depends heavily on the occasion's formality and your personal style. For a job interview, a tailored suit or smart separates are usually appropriate. For a casual date, comfortable and stylish attire is key. Tell me more about the event!"
    },
    "common_questions_dress_up_basic_outfit": {
        keywords: ["how can i dress up a basic outfit"],
        answer: "You can dress up a basic outfit with the right accessories (like statement jewelry, a stylish belt, or a chic bag), by adding a structured layer like a blazer or a stylish jacket, and by choosing dressier footwear."
    },
    "common_questions_comfortable_school_clothes": {
        keywords: ["comfortable but stylish clothes for school"],
        answer: "Comfortable and stylish school clothes often include well-fitting jeans or chinos, soft t-shirts or sweaters, and practical sneakers or flats. Layering with a cardigan or light jacket can also be a good idea."
    },
    "common_questions_jacket_for_weather": {
        keywords: ["what kind of jacket should i buy for [weather]"],
        answer: "The right jacket depends on the temperature and conditions. For cold weather, a puffer or wool coat might be best. For rain, a waterproof jacket is essential. For mild weather, a denim jacket or a light windbreaker could work. Tell me about the weather you need a jacket for!"
    },
    "common_questions_online_sizing": {
        keywords: ["how to choose the right size when shopping online"],
        answer: "Always check the brand's size chart and compare it to your own measurements. Reading customer reviews about sizing can also be helpful. If you're unsure, it's often better to size up rather than down, especially if the item tends to run small."
    },
    "common_questions_why_sustainable_important": {
        keywords: ["why is sustainable fashion important"],
        answer: "Sustainable fashion is important because the traditional fashion industry can have significant negative impacts on the environment (pollution, waste) and on workers (poor conditions, low wages). Sustainable practices aim to minimize these harms."
    },
    "common_questions_make_sustainable_choices": {
        keywords: ["how can i make more sustainable fashion choices"],
        answer: "You can make sustainable choices by buying less, choosing higher-quality items that last, shopping secondhand, supporting ethical and eco-conscious brands, and taking good care of your clothes."
    },
    "common_questions_ethical_fashion_brands": {
        keywords: ["what are some ethical fashion brands"],
        answer: "Many brands are focusing on ethical production. Look for brands that are transparent about their supply chains, pay fair wages, and use sustainable materials. You can find curated lists of ethical brands on various websites and directories."
    },
    "common_questions_organic_cotton_meaning": {
        keywords: ["what does 'organic cotton' mean in clothing"],
        answer: "Organic cotton is grown without the use of synthetic pesticides, herbicides, or genetically modified seeds. This makes it better for the environment and the farmers who grow it."
    },
    "common_questions_secondhand_sustainable": {
        keywords: ["seconhand", "is buying secondhand clothing a sustainable option"],
        answer: "Yes! Buying secondhand clothing is a very sustainable option as it gives existing garments a new life, reducing the demand for new production and the associated environmental impact."
    },
    "common_questions_what_is_slow_fashion": {
        keywords: ["slow fashion"],
        answer: "Slow fashion is an alternative to fast fashion. It emphasizes buying fewer, higher-quality items that are made ethically and sustainably, with a focus on longevity and timeless style."
    },
    "common_questions_reduce_fashion_footprint": {
        keywords: ["fashion footprint", "how can i reduce my fashion footprint"],
        answer: "You can reduce your fashion footprint by buying less, choosing sustainable materials, caring for your clothes to make them last, shopping secondhand, and recycling or upcycling old clothes instead of throwing them away."
    },
    "common_questions_feel_confident_in_clothes": {
        keywords: ["feel confident", "how can i feel more confident in what i wear"],
        answer: "Confidence in what you wear comes from feeling comfortable and authentic. Choose clothes that fit well, reflect your personal style, and make you feel good about yourself. Don't worry too much about trends if they don't resonate with you."
    },
    "common_questions_fashion_tips_for_concerns": {
        keywords: ["fashion tips", "what are some fashion tips for [concern]"],
        answer: "Fashion can be used to enhance your features and create desired silhouettes. For example, vertical stripes can help you look taller, and darker colors can have a slimming effect. Tell me your specific concern, and I can offer some tips."
    },
    "common_questions_embrace_natural_body": {
        keywords: ["how can i embrace my natural body shape"],
        answer: "Embracing your natural body shape involves understanding your proportions and choosing clothes that fit and flatter your figure without trying to conform to unrealistic ideals. Focus on celebrating your unique shape and wearing what makes you feel happy and comfortable."
    },
    "common_questions_fashion_rules": {
        keywords: ["fashion rules", "are there fashion rules i should follow"],
        answer: "Generally, no! Fashion is about personal expression. While some guidelines (like dressing appropriately for an occasion) can be helpful, the most important 'rule' is to wear what makes you feel good and confident."
    },
    "common_questions_why_fashion_changes": {
        keywords: ["why does fashion change so much"],
        answer: "Fashion changes due to a combination of social, cultural, economic, and technological factors. Designers and the fashion industry are constantly seeking new ideas, and trends often reflect shifts in society's values and aesthetics."
    },
    "common_questions_culture_influence_fashion": {
        keywords: ["how does culture influence fashion"],
        answer: "Culture has a profound impact on fashion, influencing everything from traditional garments to contemporary trends. Religious beliefs, social customs, artistic movements, and even music can shape the styles and aesthetics that people adopt."
    },
    "common_questions_iconic_fashion_moments": {
        keywords: ["what are some iconic fashion moments in history"],
        answer: "There are many! Think of Audrey Hepburn's little black dress in 'Breakfast at Tiffany's,' the rise of the mini skirt in the 1960s, or the power dressing of the 1980s. These moments often reflect significant cultural or social shifts."
    },
    "common_questions_technology_change_fashion": {
        keywords: ["how has technology changed fashion"],
        answer: "Technology has revolutionized fashion in many ways, from the creation of new fabrics and dyeing techniques to the rise of online shopping and the use of AI in design and personalization. 3D printing and wearable tech are also emerging areas."
    },
};

const fashionMoreInfo = {
    "fashion_history_definition": "Fashion history is not just about cataloging clothes; it's a multidisciplinary field that examines how clothing and adornment reflect and influence social, cultural, economic, and political developments throughout history. It explores themes of identity, status, gender, technology, and globalization as they manifest in sartorial choices.",
    "ancient_egypt_fashion_general": "Ancient Egyptian clothing was primarily functional, designed for the hot climate. Linen was the most common fabric, ranging from coarse to fine weaves. Men typically wore kilts (shendyt) of varying lengths and styles depending on their status and occupation. Women wore straight, close-fitting sheath dresses (kalasiris), often with shoulder straps. Both genders adorned themselves with jewelry made of precious stones, metals, and faience, which held symbolic and protective significance. Wigs and elaborate headdresses were also common, especially for ceremonial purposes.",
    "ancient_rome_fashion_general": "Ancient Roman fashion was deeply intertwined with social hierarchy and citizenship. The toga, a draped wool garment, was a symbol of Roman citizenship, with variations in folds and fabric indicating rank. Women's attire, including the stola and palla, also denoted status and modesty. The use of color, particularly Tyrian purple, was reserved for the elite. Hairstyles and jewelry further communicated social standing and personal identity.",
    "toga_definition": "The toga was a distinctive garment of ancient Rome, traditionally made of a single piece of woolen cloth, draped over the shoulders and around the body. Its style evolved over time, with different types of togas indicating specific occasions or social roles, such as the toga praetexta (with a purple stripe, worn by magistrates and children of noble birth) and the toga virilis (plain white wool, worn by adult male citizens). The way a toga was draped was also significant and often required skill and assistance.",
    "renaissance_fashion_general": "Renaissance fashion in Europe was a period of opulence and intricate detailing, heavily influenced by the rediscovery of classical art and literature, as well as the rise of powerful merchant families and royal courts. Sumptuous fabrics like velvet, silk, and brocade were favored, often adorned with elaborate embroidery, jewels, and metallic threads. Silhouettes became more structured, with padded shoulders and fitted bodices for men, and conical or wide, supported skirts for women. Regional variations and sumptuary laws played a significant role in dictating who could wear what.",   
    "flapper_style_description": "Flapper style, emerging in the Roaring Twenties, represented a radical departure from the restrictive fashions of the Victorian era. Characterized by short, loose-fitting dresses with dropped waistlines, shorter hemlines exposing the legs, and a boyish silhouette, it symbolized the newfound social and economic freedoms of women. Bobbed hair, cloche hats, long strands of pearls, and T-strap shoes were iconic accessories of the flapper look. The style embraced jazz culture and a spirit of rebellion and modernity.",
     "1950s_fashion_general": "The 1950s saw a return to more structured and feminine silhouettes after the austerity of World War II. Christian Dior's 'New Look' with its cinched waist and full skirt was highly influential. Poodle skirts, often worn by teenagers, became a fun and iconic trend. For more formal occasions, women wore elegant dresses with fitted bodices and A-line or pencil skirts. Men's fashion ranged from smart, tailored suits for work to more casual styles influenced by emerging youth culture and rock and roll, like leather jackets and jeans.",
    "1980s_fashion_general": "The 1980s were all about making a statement! 'Power dressing' for women involved sharp-shouldered suits to assert themselves in the workplace. Big, teased hair and bold makeup were essential. Neon colors were everywhere, from clothing to accessories. The rise of aerobics and fitness culture led to the popularity of athletic wear like leggings and tracksuits as everyday fashion. Think bold, bright, and often a bit over the top!",
    "1990s_fashion_general": "After the extravagance of the 80s, the 1990s brought a more relaxed and often understated style. Grunge, inspired by the music scene in Seattle, featured oversized, distressed clothing like flannel shirts and ripped jeans. Minimalism offered sleek, simple silhouettes in neutral colors. The slip dress, often made of silk or satin, became a surprisingly versatile piece. Hip hop culture also had a major influence, with baggy pants, oversized t-shirts, and sneakers becoming mainstream.",
    "ai_generated_fashion_what_is": "Imagine a computer that can learn what kind of clothes people like and then design completely new outfits based on that information! That's essentially AI-generated fashion. These AI systems look at tons of data – pictures of clothes, what's trending online, even what colors are popular – to come up with fresh designs. It's a really new and exciting area in fashion!",
    "how_ai_designs_fashion": "AI doesn't just randomly create clothes. It uses something called machine learning. First, it's 'trained' on huge amounts of fashion data. Then, when you ask it to design something, it uses what it has learned to create new patterns, shapes, and even suggest fabrics and colors. Some AI can even take inspiration from art or nature to come up with unique designs.",
    "benefits_of_ai_in_fashion": "AI could really change how we think about clothes. It can help predict what styles will be popular next, so stores can stock the right things. It can also help create clothes that fit each person perfectly. Plus, AI could help reduce waste in the fashion industry by making production more efficient and creating designs that people really want to wear.",    
    "current_fashion_trends": "Current fashion trends are diverse and often reflect a globalized and digitally connected world. Key movements include a growing emphasis on sustainability and ethical production, the cyclical return of past styles (such as the Y2K resurgence), the embrace of comfort and practicality (leading to oversized silhouettes and athleisure influences), and a greater fluidity in gender expression through clothing. Social media and influencer culture play a significant role in shaping and disseminating these trends.",
    "coco_chanel_biography": "Gabrielle 'Coco' Chanel (1883-1971) was a pioneering French fashion designer who revolutionized women's wear by liberating it from the constraints of corsets and elaborate embellishments. Her design philosophy emphasized simplicity, comfort, and functionality, leading to iconic creations like the little black dress, the Chanel suit, and quilted handbags. Chanel's use of jersey fabric, traditionally used for men's underwear, was groundbreaking. Her influence extended to fragrance with the iconic Chanel No. 5, establishing a lasting legacy in the world of fashion and luxury.",
    "little_black_dress_definition": "The 'little black dress' (LBD) is more than just a garment; it's a fashion staple renowned for its versatility, timelessness, and elegance. Popularized by Coco Chanel in the 1920s as a simple yet chic alternative to more elaborate styles, the LBD can be adapted for various occasions through changes in accessories, shoes, and outerwear. Its enduring appeal lies in its understated sophistication and its ability to serve as a blank canvas for personal style.",
    "yves_saint_laurent_biography": "Yves Saint Laurent (1936-2008) was a highly influential French designer who began his career as Christian Dior's protégé. He later founded his own eponymous fashion house, known for its innovative and often controversial designs that blurred gender lines and drew inspiration from art and global cultures. His iconic creations include the 'Le Smoking' tuxedo suit for women, the Mondrian dress, and the safari jacket. Saint Laurent's work had a profound impact on modern fashion, democratizing luxury and empowering women through his designs.",
    "valentino_garavani_info": "Valentino Garavani (born 1932) is an iconic Italian designer renowned for his elegant and glamorous haute couture. His signature 'Valentino red' has become synonymous with sophistication and red-carpet glamour. Throughout his illustrious career, Valentino has dressed numerous celebrities and royalty, maintaining a consistent aesthetic of timeless beauty and impeccable craftsmanship. His designs often feature luxurious fabrics, dramatic silhouettes, and exquisite detailing.",
    "giorgio_armani_info": "Giorgio Armani (born 1934) is an Italian designer celebrated for his understated elegance and sophisticated tailoring. His design philosophy emphasizes clean lines, neutral colors, and comfortable yet refined silhouettes. Armani's influence extends beyond fashion to include cosmetics, home furnishings, and hotels, all reflecting his signature minimalist aesthetic. He is particularly known for revolutionizing menswear with softer, more relaxed tailoring.",
    "miuccia_prada_info": "Miuccia Prada (born 1949) is an Italian designer and the creative director of Prada and Miu Miu. Known for her intellectual and often unconventional approach to fashion, Prada blends art, culture, and technology in her designs. Her work often challenges traditional notions of beauty and femininity, exploring themes of power, intellect, and irony. Prada's influence extends beyond clothing to accessories, particularly her iconic nylon bags.",
    "alexander_mcqueen_info": "Alexander McQueen (1969-2010) was a British designer known for his dramatic, avant-garde, and often theatrical runway shows. His designs frequently incorporated elements of history, nature, and mortality, pushing the boundaries of conventional fashion. McQueen's exceptional tailoring skills and imaginative vision made him one of the most influential designers of his generation. His legacy continues through the Alexander McQueen brand.",
    "elsa_schiaparelli_info": "Elsa Schiaparelli (1890-1973) was an Italian designer known for her surrealist collaborations with artists like Salvador Dalí and Jean Cocteau. Her designs in the 1930s and 1940s were innovative, witty, and often shocking, featuring whimsical motifs, bold colors (like her signature 'shocking pink'), and unconventional materials. Schiaparelli was a major rival of Coco Chanel and a key figure in the development of modern fashion.",
    "cristobal_balenciaga_info": "Cristóbal Balenciaga (1895-1972) was a Spanish designer who founded his influential haute couture house in Paris. Revered for his mastery of tailoring and architectural silhouettes, Balenciaga was known for his innovative shapes, including the sack dress, the balloon skirt, and the envelope neckline. He was considered by many to be the 'couturier's couturier,' influencing generations of designers with his impeccable craftsmanship and revolutionary forms.",
    "hubert_de_givenchy_info": "Hubert de Givenchy (1927-2018) was a French designer who founded his haute couture house in 1952. Known for his elegant and timeless designs, Givenchy was particularly famous for his close association with Audrey Hepburn, for whom he created iconic looks in films like 'Breakfast at Tiffany's.' His style epitomized classic French chic, emphasizing clean lines and sophisticated simplicity.",
    "karl_lagerfeld_info": "Karl Lagerfeld (1933-2019) was a highly influential German designer who served as the creative director for Chanel and Fendi, as well as his own namesake label. Known for his distinctive personal style and prolific output, Lagerfeld was a transformative figure in the fashion industry, modernizing heritage brands while staying ahead of contemporary trends. His career spanned decades, leaving an indelible mark on the world of fashion.",
    "tom_ford_info": "Tom Ford (born 1961) is an American designer known for his sharp, sensual, and glamorous aesthetic. He revitalized Gucci and Yves Saint Laurent in the 1990s before launching his own successful luxury brand. Ford's designs are characterized by their sleek lines, luxurious materials, and overtly sexy appeal. He has also ventured into filmmaking, directing critically acclaimed movies.",
    "donatella_versace_info": "Donatella Versace (born 1955) is an Italian designer and the creative director of Versace. Following the tragic death of her brother Gianni Versace, she has successfully carried on his bold and glamorous legacy. Versace's designs are known for their vibrant colors, daring silhouettes, and iconic Medusa logo, embodying a confident and often overtly sensual aesthetic.",
    "marc_jacobs_info": "Marc Jacobs (born 1963) is an American designer who has headed his own label and previously served as creative director of Louis Vuitton. Known for his eclectic and often irreverent designs, Jacobs draws inspiration from a wide range of subcultures and artistic movements. His work is characterized by its playful spirit and its ability to blend high fashion with streetwear influences.",
    "stella_mccartney_info": "Stella McCartney (born 1971) is a British designer renowned for her commitment to sustainable and ethical fashion practices. Her brand creates stylish and environmentally conscious clothing, accessories, and lingerie using innovative materials and production methods. McCartney's designs are known for their effortless chic and their fusion of masculine and feminine elements.",
    "virgil_abloh_info": "Virgil Abloh (1980-2021) was an American designer, entrepreneur, and the artistic director of Louis Vuitton's menswear collection. He was also the founder of the Off-White label, known for its streetwear-inspired luxury designs characterized by bold typography and industrial aesthetics. Abloh's work bridged the gap between high fashion and streetwear, making luxury more accessible and relevant to a new generation.",    
    "new_look_definition": "The 'New Look,' unveiled by Christian Dior in 1947, marked a dramatic shift in post-World War II fashion, rejecting the austerity of wartime styles. It featured soft, rounded shoulders, a nipped-in waist accentuated by structured corsetry, and a voluminous, floor-length skirt. This silhouette, achieved through layers of fabric and inner constructions, celebrated a return to femininity and luxury. While initially criticized for its extravagance, the 'New Look' became immensely popular and defined women's fashion for much of the 1950s.",   
    "common_fashion_questions_what_to_wear": "Think about where you're going and what you'll be doing. If it's school, comfortable and practical clothes are usually best. If you're going to a party, you might want something a bit more special. Also, check the weather! Layering is always a good idea so you can adjust if it gets hot or cold. Don't be afraid to experiment with your own style and wear what makes you feel good!",
    "common_fashion_questions_how_to_style": "Styling is like putting together a puzzle with your clothes. Start with a main piece you want to wear and then build around it. Think about colors that go well together (you can find color palettes online!). Accessories like jewelry, scarves, and belts can add personality to your outfit. Sometimes, it's as simple as tucking in your shirt or rolling up your sleeves to change the look. Don't be afraid to try different combinations!",
   "common_fashion_questions_fast_fashion": "Fast fashion is like fast food for clothes – it's cheap and trendy, but it's often not very good in the long run. These clothes are usually made quickly and cheaply, which can mean poor quality and environmental damage from the production process. Because they're so inexpensive, people often buy a lot and then throw them away quickly when they're no longer trendy, leading to a lot of textile waste.",   
    "oversized_silhouettes_definition": "Oversized silhouettes in fashion refer to clothing that is intentionally voluminous and loose-fitting, deviating from traditional tailored or body-hugging styles. This trend often emphasizes comfort and a relaxed aesthetic, featuring garments like oversized blazers, wide-leg pants, and generously cut sweaters and dresses. The look can range from casually chic to dramatically avant-garde.",
    "y2k_fashion_resurgence": "The resurgence of Y2K styles refers to the comeback of fashion trends from the late 1990s and early 2000s. This revival is driven by nostalgia and a renewed interest in the era's pop culture and technological optimism. Key elements include low-rise jeans, crop tops, mini skirts, vibrant and often pastel colors, chunky sneakers and platforms, baguette bags, and accessories like butterfly clips and chain belts.",
    "capsule_wardrobe_concept": "A capsule wardrobe is a carefully curated collection of essential and versatile clothing items that can be mixed and matched to create a wide variety of outfits. The focus is on quality over quantity, timeless pieces in neutral colors, and items that complement each other. Building a capsule wardrobe aims to simplify dressing, reduce consumption, and create a functional and stylish personal style with a minimal number of garments.",
    "common_fashion_questions_what_is_vintage": "Vintage clothing offers a unique way to express personal style and can be more sustainable by giving pre-loved items a new life. The definition of vintage can sometimes be debated, with some considering items from the 1920s to the 1980s as vintage, while items older than 100 years might be classified as antique. Each era has its distinct silhouettes, fabrics, and details that make vintage pieces special.",   
    "common_fashion_questions_how_to_care_for_clothes": "Proper clothing care not only keeps your garments looking their best but also helps them last longer, reducing the need for frequent replacements. Always check the care label inside the garment for specific instructions on washing temperature, whether to machine or hand wash, and how to dry (tumble dry, line dry, etc.). Separating light and dark colors prevents color bleeding. Using a mild detergent can be gentler on fabrics. Proper storage, like folding knits and hanging delicate items, also helps maintain their shape.",
    "common_fashion_questions_what_are_different_styles": "Exploring different fashion styles can help you understand your own preferences. Casual style prioritizes comfort and practicality, often involving jeans, t-shirts, and sneakers. Formal wear is typically reserved for special occasions and includes suits, gowns, and more tailored pieces. Bohemian style is characterized by flowing fabrics, natural materials, and eclectic prints. Minimalist fashion focuses on clean lines, neutral colors, and essential pieces. Streetwear is influenced by urban culture and often incorporates athletic wear and casual separates. Understanding these styles can be a starting point for developing your own unique look.",
    "common_fashion_questions_how_to_find_your_style": "Discovering your fashion style is a journey of self-expression. Start by paying attention to the clothes you already own and love to wear. What do they have in common? Look for inspiration in places that resonate with you, such as your favorite art, music, or nature. Create mood boards on platforms like Pinterest or save outfits you like on Instagram. Don't be afraid to experiment with different silhouettes, colors, and textures. Your style might evolve over time, and that's perfectly normal!",
    "common_fashion_questions_what_are_basics": "Building a wardrobe around essential basics is key to having versatile outfit options. Some must-have basics include a well-fitting pair of jeans, a classic white button-down shirt, a comfortable black t-shirt, a neutral-colored sweater (like grey or navy), a versatile blazer, and a simple black dress. These pieces can be dressed up or down and can be combined with more trendy or statement items to create a variety of looks.",
    "common_fashion_questions_how_to_mix_patterns": "Mixing patterns successfully involves creating visual harmony. A good rule of thumb is to vary the scale of the patterns – pair a small print with a larger one. Another tip is to stick within a similar color palette to tie the different patterns together. Stripes and leopard print are often considered neutrals and can be surprisingly easy to mix with other patterns. When in doubt, start with one patterned piece and add a more subtle pattern as an accent.",
    "common_fashion_questions_what_accessories_to_wear": "Accessories are the finishing touches that can elevate any outfit. Consider the occasion and the overall look you're trying to achieve. Jewelry can range from delicate necklaces to bold statement earrings. Scarves can add color and texture. Belts can define your waist or add a stylish detail. Hats can be functional and fashionable. Bags should be practical and complement your outfit. The key is to choose accessories that enhance your look without overwhelming it.",
    "common_fashion_questions_how_to_dress_for_body_type": "Understanding your body shape can help you choose clothes that fit well and highlight your best features. Common body shapes include apple, pear, hourglass, rectangle, and inverted triangle. For example, those with a pear shape might find A-line skirts and dresses flattering as they skim over the hips. Hourglass figures often look great in fitted styles that accentuate the waist. There are many online guides and resources that provide specific advice for different body types, focusing on creating balance and proportion.",
     "sustainable_fashion_definition": "Sustainable fashion encompasses a holistic approach to the design, production, consumption, and disposal of clothing and textiles that aims to minimize environmental harm, maximize social benefits, and promote economic viability. This includes practices such as using eco-friendly materials, reducing waste, conserving water and energy, ensuring fair labor practices, and encouraging conscious consumer choices.",
    "common_fashion_questions_where_to_buy_sustainable": "Finding sustainable fashion options is becoming easier. Look for brands that explicitly state their commitment to sustainability on their websites and product pages. Certifications like GOTS (Global Organic Textile Standard) can indicate eco-friendly practices. Websites and apps that curate sustainable brands can also be helpful. Consider shopping at vintage stores, consignment shops, and supporting local designers who prioritize ethical and sustainable production.",
    "common_fashion_questions_what_is_upcycling": "Upcycling is a creative and sustainable approach to fashion. Instead of discarding old clothes, they are reimagined and transformed into new items with added value. This could involve turning old jeans into a denim bag, using fabric scraps to create patchwork quilts, or embellishing a plain t-shirt with unique details. Upcycling reduces textile waste and encourages creativity and resourcefulness.",
     "common_questions_teen_trends": "Teen fashion is often influenced by social media, music, and peer groups. Current trends can range from specific aesthetics like Y2K revival or cottagecore to popular garment types like oversized hoodies, wide-leg pants, and platform shoes. It's a time for experimentation and expressing individuality, often within the context of what's popular among their age group.",
    "common_questions_men_trends": "Men's fashion trends are also dynamic, with a current emphasis on comfort, sustainability, and a blend of casual and tailored styles. You might see a focus on relaxed fits, natural fabrics, and versatile pieces that can be dressed up or down. Paying attention to menswear magazines, online platforms, and stylish individuals can provide insights into current trends.",
    "common_questions_stay_updated": "Staying up-to-date with fashion doesn't necessarily mean buying every new trend. It's more about being aware of the current styles and understanding how they might fit into your personal aesthetic. Following reputable fashion publications (both print and online), engaging with fashion influencers whose style you admire, and occasionally browsing fashion retailers can help you stay informed.",
    "common_questions_fashion_inspiration": "Fashion inspiration is everywhere! Look at the way people dress in your city, explore different cultures and their traditional clothing, visit art museums and see how colors and shapes are used, watch movies and pay attention to the costumes. Creating a visual diary (digital or physical) of outfits and styles that appeal to you can help you identify patterns and refine your own taste.",
    "common_questions_are_specific_trends_in": "Fashion trends have a cyclical nature. What was once popular often comes back in a new iteration. To know if a specific trend is currently 'in,' you can observe what designers are showcasing, what retailers are stocking, and what people are wearing on the streets and on social media. However, personal style trumps trends, so if you love a particular style, feel free to wear it regardless of its current popularity.",
    "common_questions_timeless_pieces": "Investing in timeless fashion pieces ensures you have a reliable wardrobe that transcends fleeting trends. A well-cut trench coat is always stylish, a simple black dress can be dressed up or down for any occasion, and a pair of classic leather boots will last for years. These pieces form the foundation of a versatile wardrobe and can be updated with trendier accessories.",
    "common_questions_unique_style": "Developing a unique style is about embracing your individuality and not being afraid to break away from the norm. Experiment with different combinations of clothing, accessories, and even hairstyles. Incorporate elements that reflect your personality, hobbies, and values. Don't be afraid to make mistakes – fashion is a form of self-expression, and your unique style will evolve over time.",
    "common_questions_affordable_fashion": "Being fashionable doesn't require spending a lot of money. Thrifting and buying secondhand are great ways to find unique and affordable pieces. Take advantage of sales and discount stores. Consider renting clothes for special occasions. Focus on buying versatile pieces that you can mix and match in many ways. Learning basic sewing skills can also help you alter or repair your clothes, extending their lifespan.",
    "common_questions_social_media_influence": "Social media has democratized fashion, allowing individuals to become trendsetters and bypassing traditional gatekeepers like magazines. Platforms like Instagram and TikTok showcase a diverse range of styles and make trends spread rapidly globally. Influencers often collaborate with brands, shaping consumer preferences. While social media can be a great source of inspiration, it's also important to cultivate your own critical eye and not blindly follow every fleeting trend.",
    "common_questions_shoes_with_garment": "The right shoes can make or break an outfit. Consider the formality of the garment and the occasion. Sneakers offer comfort and a casual vibe, perfect for jeans or a relaxed dress. Heels can elevate a skirt or formal pants for a dressier look. Boots can add edge or warmth depending on the style. Flats are a versatile option for everyday wear. Think about the overall silhouette and the message you want to convey with your footwear.",
    "common_questions_style_accessory": "Styling an accessory involves considering its size, color, and texture in relation to your outfit. A bold statement necklace can be the focal point of a simple top. A patterned scarf can add interest to a neutral coat. A well-chosen belt can cinch your waist and add structure. Experiment with different ways to wear your accessories to find what looks and feels best.",
    "common_questions_colors_that_go_well": "Understanding basic color theory can help you create harmonious outfits. Complementary colors (opposite on the color wheel, like blue and orange) create contrast. Analogous colors (next to each other, like blue, blue-green, and green) offer a more subtle and cohesive look. Neutral colors like black, white, gray, and beige can be paired with almost any color. Don't be afraid to experiment with different color combinations to find what you like.",
    "common_questions_outfit_for_occasion": "Choosing the right outfit for an occasion shows respect and understanding of the event's nature. For a job interview, professional attire is key. For a casual date, comfort and personal style are important. For a formal event, elegant dresses or suits are usually expected. Consider the venue, the time of day, and the overall atmosphere when selecting your outfit.",
    "common_questions_dress_up_basic_outfit": "Elevating a basic outfit is all about the details. Adding a statement necklace or earrings can instantly make a simple dress or top feel more special. A structured blazer can add polish to jeans and a t-shirt. Swapping casual sneakers for heels or elegant flats can change the entire look. A stylish handbag or belt can also add a touch of sophistication.",
    "common_questions_comfortable_school_clothes": "Comfort is key for school, but you can still be stylish! Opt for well-fitting basics made from soft fabrics. Layering allows you to adjust to changing temperatures. Choose comfortable and supportive footwear. Adding small personal touches like a favorite backpack or a unique accessory can also express your style.",
    "common_questions_jacket_for_weather": "The right jacket provides both style and functionality. A lightweight windbreaker is perfect for mild, breezy days. A denim jacket adds a casual cool vibe. A leather jacket offers warmth and style. A waterproof raincoat is essential for wet weather. A puffer or down-filled coat provides maximum warmth in cold temperatures. Consider the climate you live in and the activities you'll be doing when choosing a jacket.",
    "common_questions_online_sizing": "Online sizing can be tricky. Always refer to the specific brand's size chart, as sizes can vary. Measure yourself accurately (bust, waist, hips, inseam) and compare your measurements to the chart. Read customer reviews, as they often mention if items run small, large, or true to size. Pay attention to the fabric composition, as some materials may fit differently. If possible, choose retailers with clear return policies in case the item doesn't fit.",
    "common_questions_why_sustainable_important": "The fashion industry is a major contributor to environmental problems like water pollution, carbon emissions, and textile waste. It also raises ethical concerns about labor practices. Sustainable fashion aims to address these issues by using eco-friendly materials, reducing waste, conserving resources, and ensuring fair treatment of workers. By supporting sustainable fashion, consumers can contribute to a more environmentally and socially responsible industry.",
    "common_questions_make_sustainable_choices": "Making sustainable fashion choices involves a shift in mindset and habits. Prioritize quality over quantity, investing in pieces that will last. Consider the environmental impact of the materials (e.g., choosing organic cotton over conventional). Support brands that are transparent about their production processes and labor practices. Explore secondhand options first. Learn to repair and care for your clothes to extend their lifespan.",
    "common_questions_ethical_fashion_brands": "Ethical fashion brands prioritize fair wages, safe working conditions, and the well-being of garment workers. They are often transparent about their supply chains and may use certifications like Fair Trade. Researching brands' values and practices is key to identifying ethical options. Look for companies that prioritize people and the planet alongside profit.",
    "common_questions_organic_cotton_meaning": "Organic cotton is grown using farming practices that replenish soil health without the use of toxic and persistent pesticides and fertilizers. This benefits the environment by reducing pollution and conserving water. It also protects the health of farmers and garment workers who are not exposed to harmful chemicals. Choosing organic cotton is a more sustainable alternative to conventional cotton farming.",
    "common_questions_secondhand_sustainable": "Buying secondhand clothing is one of the most sustainable fashion choices you can make. It reduces the demand for new production, which conserves resources and minimizes environmental impact. It also keeps clothes out of landfills, reducing textile waste. Plus, you can often find unique and high-quality items at affordable prices in thrift stores, consignment shops, and online marketplaces.",
    "common_questions_what_is_slow_fashion": "Slow fashion is a conscious and deliberate approach to fashion that values quality, sustainability, and ethical production over speed and quantity. It encourages consumers to buy fewer, better-made garments that will last longer, and to be more mindful of the social and environmental impact of their clothing choices. Supporting slow fashion brands and adopting slow fashion habits can lead to a more sustainable and meaningful relationship with our clothes.",
    "common_questions_reduce_fashion_footprint": "Reducing your fashion footprint involves making conscious choices throughout the lifecycle of your clothes. This includes buying less, choosing sustainable materials, caring for your garments properly, repairing or altering them instead of discarding them, participating in clothing swaps, and responsibly recycling or upcycling items when you no longer need them. Even small changes in your habits can collectively make a big difference.",
    "common_questions_feel_confident_in_clothes": "Feeling confident in what you wear starts from within. Choose clothes that fit well and are comfortable. Experiment with styles that express your personality and make you feel good about yourself. Pay less attention to fleeting trends and more to what makes you feel authentic. Remember that fashion is a form of self-expression, and your confidence will shine through when you feel genuine in your choices.",
    "common_questions_fashion_tips_for_concerns": "Fashion can be a powerful tool for enhancing your features and creating desired silhouettes. For example, wearing vertical stripes can create a lengthening effect, while darker colors can have a slimming effect. High-waisted pants can make your legs look longer, and strategically placed ruffles or volume can balance proportions. Understanding these visual tricks can help you choose clothes that make you feel your best.",
    "common_questions_embrace_natural_body": "Embracing your natural body shape is about celebrating your unique form. Learn about different body types and what styles generally flatter them, but ultimately, wear what makes you feel comfortable and confident. Focus on highlighting your favorite features and choosing clothes that fit well rather than trying to force yourself into trends that don't suit your shape. Self-acceptance and body positivity are key to feeling good in what you wear.",
    "common_questions_fashion_rules": "While there are some traditional 'rules' in fashion (like not mixing certain patterns or colors), most of these are outdated. Modern fashion is about personal expression and breaking boundaries. The most important guideline is to dress appropriately for the occasion and to wear what makes you feel confident and comfortable. Don't be afraid to experiment and create your own rules!",
    "common_questions_why_fashion_changes": "The constant evolution of fashion is driven by a complex interplay of factors. Designers seek innovation, social and cultural shifts influence aesthetics, economic conditions can affect material choices and consumer spending, and technological advancements lead to new fabrics and production methods. The desire for novelty and self-expression also contributes to the cyclical nature of trends.",
    "common_questions_culture_influence_fashion": "Culture is deeply intertwined with fashion. Traditional garments often reflect a region's history, climate, and social customs. Cultural events, music genres, and artistic movements can all inspire contemporary fashion trends. Globalization also means that fashion is increasingly influenced by a diverse range of cultures, leading to unique and hybrid styles.",
    "common_questions_iconic_fashion_moments": "History is filled with iconic fashion moments that have left a lasting impact. Think of the corseted silhouettes of the Victorian era, the liberating flapper dresses of the 1920s, the revolutionary 'New Look' of the 1950s, and the rebellious punk styles of the 1970s. These moments often symbolize broader social, political, and cultural changes.",
    "common_questions_technology_change_fashion": "Technology has had a profound impact on every aspect of fashion. New synthetic fabrics offer different properties and aesthetics. Advances in dyeing and printing allow for more complex designs. E-commerce has transformed how we shop. AI is being used for trend forecasting and personalized recommendations. Wearable technology is even integrating fashion with functionality. This technological evolution continues to shape the future of how we design, produce, buy, and interact with fashion."
};


const fashionResponses = {
  "greeting": "Hi there! How can I help you with fashion today?",
  "default": "I'm still learning about fashion! Try asking about a specific era, designer, or trend.",
  "more_info": {
    "tell me more": "Please ask a specific question so I know what to give you more details about."
  }
};

let lastTopicKey = null;

const fuseOptions = {
  keys: ['keywords'],
  threshold: 0.6 // Adjust this value as needed
};

const fuse = new Fuse(Object.values(fashionKnowledge), fuseOptions);

// Function to add a message to the chat log
function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', `${sender}-message`);
  messageDiv.innerHTML = `<p>${message}</p>`;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}

// Function to get the bot's response with fuzzy matching and simple context
function getBotResponse(userInput) {
    const normalizedInput = userInput.toLowerCase().trim();
    console.log("User Input:", normalizedInput);

    let response = fashionResponses["default"];
    let currentTopicKey = null; // To store the key for the current query

    if (normalizedInput === "more info" && lastTopicKey) {
        console.log("Trying to get more info for:", lastTopicKey);
        if (fashionMoreInfo.hasOwnProperty(lastTopicKey)) {
            response = fashionMoreInfo[lastTopicKey];
        } else if (fashionResponses.more_info && fashionResponses.more_info["tell me more"]) {
            response = fashionResponses.more_info["tell me more"];
        } else {
            response = "Sorry, I don't have more specific information on that topic right now.";
        }
        console.log("More Info Response:", response);
        return response; // Return early, bypassing the Fuse search
    } else {
        const results = fuse.search(normalizedInput);
        console.log("Fuse Results:", results);

        if (results.length > 0) {
            const bestMatch = results[0].item;
            response = bestMatch.answer;
            currentTopicKey = Object.keys(fashionKnowledge).find(key => fashionKnowledge[key] === bestMatch);
            console.log("Best Match Key:", currentTopicKey);
            lastTopicKey = currentTopicKey; // Update lastTopicKey on a successful match
        } else if (normalizedInput.includes("hello") || normalizedInput.includes("hi")) {
            response = fashionResponses["greeting"];
        }
    }

    return response;
}

// Event listener for sending a message
chatSend.addEventListener('click', () => {
  const userMessage = chatInput.value;
  if (userMessage) {
    addMessage(userMessage, 'user');
    chatInput.value = '';
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
      addMessage(botResponse, 'bot');
    }, 500);
  }
});

// Event listener for pressing Enter
chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    chatSend.click();
  }
})
})