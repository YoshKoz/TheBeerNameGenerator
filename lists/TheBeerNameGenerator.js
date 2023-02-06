// constant lijst

const categories = ["Porter", "Stout", "IPA", "Beer", "Lager", "Malt", "Wheat beer", "Fruit beer", "Blond", "Wheat", "Brown", "Bock", "Abbey Beer", "Amber", "Saison" ];
const coolAdjectives = ["Beautiful", "Intrusive", "Mesmerizing", "Visionary", "Charming", "Gritty", "Creon", "Fantasied", "Wicked Gothic", "Obscure", "Incomprehensible", "Depraved", "Cortical", "Fawning", "Unwanted", "Lovely", "Captivating", "Endearing", "Passionate"," Contemporary","Recognizable","Satisfying", "Wildest", "Giggly", "Torrid", "Ready", "Captivating" ];
const types = ["Single", "Double", "Triple", "Quadruple" ];
const beerGlasses = [ "Teku-stemmed", "Pint", "Mug", "Steiner", "Goblet","Chalice","Snifter","Tulip","Thistle","Stange","Sampler" ];
const colors = ["Black", "Silver","Gray","White","Maroon","Red","Purple","Fuchsia","Green","Lime","Olive","Yellow","Navy","Blue","Teal","Aqua" ];
const mythicalCreatures = ["Minotaur", "Pegasus", "Medusa", "Harpy", "Siren", "Centaur", "Cyclops", "Faun", "Satyr","Bake-Kujira","Ceffyl Dwr","Cyclops","Ogre","Leprechaun","Gnome","Faerie","Carbunclo","Gorgon","Mermaid","Balayang","Leutogi","Tjinimin","Anzu","Anga","Adarna","Aethon","Alkonost","Jingwei","Itsumade","Caladrius","Barghest","Shug Monkey","Werewolf","Crocotta","Cynocephaly",];
const tasteProfiles = ["Acai","Acidic","Acetaldehyde","Allspice","Apple","Ash","Autumnal","Alcoholic","Almond","Apricot","Astringent","Bakelite","Barley","Banana","Bay Leaf","Berries","Bitter","Boozy","Beany","Birch","Black Currant","Bourbon","Brandy","Bread","Bright","Blackberry","Body","Boysenberry","Brett","Briny","Brown Sugar","Blueberry","Autolysed","Balanced","Barrel aged","Belgiany","Biscuity","Brilliant","Acetic","Alkaline","Amaretto","Aromatic","Blood Orange","Bubblegum","Bubbly","Burnt","Butterfinger","Buttery","Butyric","Can-liner","Candy","Caprylic","Buckwheat","Butterscotch","Cake","Cantaloupe","Caramelly","Cardamom","Cereal","Champagne","Characterless","Carbolic","Carrot","Catty","Chai","Chamomile","Caramel","Carbonated","Cheesy","Chewy","Chlorophenol","Citrus","Clementine","Clove","Coffee","Cherry","Chestnuts","Chili","Chocolate","Chipotle","Cocoa","Citrusy","Clean","Cloudberry","Charred","Coconut","Cinnamon","Cloudy","Coffeeish","Cognac","Cola","Corn","Creamy","Cucumber","Dark","Deep","Dry","Earthy","Corn Grits","Crisp","Cumin","Dates","Delicate","Fig","Fluffy","Full","Cranberry","Crushable","Dank","Decadent","Dry-hop","Effervescent","Elderflower","Esters","Elegant","Fatty","Floral","Fruity","Funky","Gentle","Cookie","Coriander","Estery","Diacetyl","Drying","Flat","Fragrant","Fullness","Garlic","Gassy","Geraniol","Ginger","Graham Cracker","Gooseberry","Grapefruit Peel","Grapefruity","Grassy","Guava","Habanero","Hazelnut","Hazy","Heady","Heat","Heavy","Herbaceous","Herbal","Hibiscus","Honey","Honey Mustard","Honeydew","Hop oil","Hoppy","Hot Sauce","Huckleberry","Husky","Intense","Isovaleric","Jalapeño","Juniper","Lactose","Green","Green Tea","Harsh","Layered","Isodoform","Juicy","Kiwi","Lavender","Lemony","Licorice","Lightstruck","Lime","Grainy","Kettle-hop","Laquer-like","Grapes","Jam-like","Leathery","Light","Lingonberry","Loganberry","Lychee","Maillard","Malty","Mango","Maple","Marshmallow","Melon","Metallic","Mineral","Moldy","Murked","Pecan","Phenolic","Meaty","Mandarin","Marmalade","Melony","Milk","Minty","Mouthcoating","Musty","Nutty","Oily","Oversweet","Passion Fruit","Peppery","Pickle","Macadamia Nut","Nutmeg","Oatmeal","Nectarine","Oakey","Opaque","Papaya","Peachy","Peaty","Perfumy","Pineapple","Prunes","Pumpkin","Orange","Papery","Peanut Butter","Pear","Mellow","Mercaptan","Mimosa","Molasses","Mouthfeel","Plastics","Piquant","Plums","Puckering","Pungent","Raisins","Rancid","Refreshing","Quince","Raspberry","Red Wine","Resiny","Roasty","Rustic","Sage","Savory","Sharp","Rhubarb","Rosemary","Rye","Salty","Red Currant","Red Fruit","Resinous","Port Wine","Sendable","Sherry","Slushy","Primings","Pulpy","Quaffable","Rich","Rum","Saffron","Satiating","Sessionable","Skunky","Smoked","Smoky","Soft","Sparkling","Spring","Stale","Stone Fruit","Slick","Piney","Pithy","Pomegranate","Pomelo","Potpourri","Powdery","Pinpoint","Strawberry","Subtle","Tangerine","Tarry","Tequila","Toasty","Tonka","Spicy","Umami","Spruce","Strength","Sulfitic","Trub","Smooth","Soapy","Sour","Soy sauce","Spiced","Sweetener","Syrupy","Sweetness","Synthetic","Tangy","Sweet","Tart","Thick","Tobacco","Tropical","Trub +Tannic","Tea","Thin","Toffee","Spritzy","Star anise","Strong","Sulfury","Sticky","Straw-like","Vanilla","Vegetal","Vinous","Warm","Watery","Wheat","Woody","Yuzu","Velvety","Viola","Warming","Waxy","Whisky +Worty","Zesty","Vinegar","Walnut","Watermelon","Wet","White Wine","Yeasty","Zippy"];



    //const warhammerAdjectives = ["Ardcoat","Abaddon","Administratum","Agrax","Agrellan","Agrellan","Agrellan","Ahriman","Alaitoc","Altdorf","Armageddon","Astorath","Astrogranite","Athonian","Auric","Averland","Baharroth","Balor","Balthasar","Baneblade","Bestigor","Biel-tan","Blackfire","Blood for  the Blood god","Bloodletter","Blue Horror","Brass Scorpion","Bugmans","Cadian","Caledor","Calgar","Carroburg","Casandora","Castellan","Celstra","Celstra","Ceramite","Changeling","Chronus","Coelia","Daemonette","Dark Reaper","Dawnstone","Dawnstone","Death Guard","Deathclaw","Deathworld","Dechala","Doombull","Dorn","Drakenhof","Druchii","Dryad","Eldar","Elysian","Emperors Children","Eshin","Etherium","Evil Sunz","Fang Grey","Fenrisian","Fire Dragon","Flash Gitz","Fuegan","Fulgrim","Fulgurite","Gehenna's","Genestealer","Golden Griffon","Golgfag","Gorthor","Guass Blaster","Guilliman","Hashut","Hellion","Hexos","Hoeth","Hoeth","Imperial","Imrik","Incubi","Ironbreaker","Jokaero","Kabalite","Kantor","Karak","Khorne","Kindleflame","Krieg","Lahmian","Lamenters","Leadbelcher","Liberator","Liquid Green","Longbeard","Loren","Lothern","Lucius","Lugganath","Lustrian Undergrowth","Macragge","Martian Ironcrust","Martian Ironearth","Martian","Mechanicus","Mephiston","Moot","Mourn Mountain Snow","Mournfang","Naggaroth","Necron Compound","Niblet","Nihilakh","Nuln","Nurgle's Rot","Nurgling","Nurgling","Ogryn","Pallid Wych","Pink Horror","Praxeti","Rakarth","Ratskin","Reikland","Retributor","Rhinox","Runefang","Runelord","Russ","Ryza","Screamer","Screaming","Seraphin","Sigmarite","Skarsnik","Skavenblight","Skink","Skrag","Skullcrusher","Slaanesh","Slaanesh","Sotek","Soulstone","Spiritstone","Squig","Steel Legion","Stegadon","Stirland","Stormfang","Stormhost","Stormvermin","Straken","Sybarite","Sycorax","Sylvaneth","Tallarn","Tau","Teclis","Temple Guard","Terminatus","Thousand Sons","Thunderhawk","Troll Slayer","Tuskgor","Typhus Corrosion","Tyrant","Ulthuan","Underhive","Ungor","Ushabti","Valhallan","Verminlord","Waaagh!","Warboss","Warpfiend","Warplock","Warpstone","Waystone","Waywatcher","Wazdakka","White Scar","Wild Rider","Wrack","XV-88","Xereus","Yriel","Zamesi","Zandri"]
    //${warhammerAdjectives[getRandomNumber(warhammerAdjectives.length)]}

    //Nodig om code goed te laten draaien in de browser.

window.onload = function() {
    const getRandomNumber = (max) => Math.floor(Math.random() * max);

    const getRandomName = () =>
                ` "The ${tasteProfiles[getRandomNumber(tasteProfiles.length)]} 'N ${tasteProfiles[getRandomNumber(tasteProfiles.length)]}  ${mythicalCreatures[getRandomNumber(mythicalCreatures.length)]}" 
                
                a ${coolAdjectives[getRandomNumber(coolAdjectives.length)]}  ${colors[getRandomNumber(colors.length)]}-coloured ${tasteProfiles[getRandomNumber(tasteProfiles.length)]} ${types[getRandomNumber(types.length)]} ${categories[getRandomNumber(categories.length)]} served "${coolAdjectives[getRandomNumber(coolAdjectives.length)]}" in a ${beerGlasses[getRandomNumber(beerGlasses.length)]}-styled glass`
    const setRandomName = () => {
        document.getElementById('random-name').innerText = getRandomName();
    }
// de naam generator
    document.getElementById('generate').addEventListener('click', setRandomName);
    setRandomName();
// hier komt de 10 seconds button generator.
    document.getElementById('tensecondsgenerator').addEventListener('click', setRandomName);
    setRandomName();
//




    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    }

    genNew.addEventListener("click", setBg);
    setBg();
}




//need to get this in HTML!!
const getRandomColor = () =>
    `${colors[getRandomColor(colors.length)]}`
//need to get this in HTML!!
