// ═══════════════════════════════════════════════════════════════
// AstroVerse — All Section Templates (Career, Finance, Relationship,
//              Health, Remedies, Education, Family, Timeline)
// templates/sections.js
// ═══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// CAREER TEMPLATES
// Key conditions: 10th house lord, Saturn placement, Sun placement
// ══════════════════════════════════════════════════════
export const careerTemplates = [

  // Sun in 10th
  {
    id: 'sun_10th_career',
    weight: 3,
    conditions: [ctx => ctx.p.sun?.house === 10],
    title: 'Surya in Karma Bhava — Destined for Recognition',
    description: `{name}, aapka Surya 10th Ghar mein sthit hai — yeh ek extraordinary position hai jo government, authority, aur public recognition se directly connected hai. Aap career mein naturally visible hote hain — achhe kaam par aapko credit milta hai. {ascSign} Lagna ke saath 10th house Sun aapko ek strong professional identity deta hai. Government jobs, politics, senior management, ya koi bhi field jahan authority matter karta hai — wahan aap naturally excel karte hain. Aapke {sunSign} Sun ki dignity bhi important hai: exalted ho toh career exceptionally strong, own sign mein ho toh consistent success, debilitated ho toh fathers ya authority figures se tension possible hai but still professional respect aata hai eventually. Current {mahadasha} Mahadasha ka career par direct impact hai — {mahadasha} planet ke karakatva ke according career events ho rahe honge. {dashaEndYear} tak {mahadasha} influence rahega. Aapka career trajectory usually mid-life mein peak karta hai aur legacy leave karta hai. Father se achha relationship professional life ko boost karta hai.`,
    advice: `Government schemes, senior mentors, aur official channels se connect karo — 10th house Sun ke liye official recognition career ko 3x accelerate karta hai. Gaayatri Mantra roz 108 baar chant karo career blessings ke liye.`,
  },

  // Saturn in 10th
  {
    id: 'saturn_10th_career',
    weight: 3,
    conditions: [ctx => ctx.p.saturn?.house === 10],
    title: 'Shani in Karma Bhava — The Slow Burn of Success',
    description: `{name}, aapka Shani 10th Ghar mein hai — yeh career mein ek very specific pattern create karta hai: slow, steady, aur ultimately unbreakable success. Shani delays karta hai lekin denies nahi — aapka best career years 35-45 ke baad typically aate hain. Yeh wait frustrating lag sakta hai early years mein, lekin jo build hota hai woh permanent hota hai. {ascSign} Lagna ke saath 10th Shani aapko ek disciplined, systematic professional banata hai — shortcuts se aap naturally uncomfortable feel karte hain, aur ultimately yeh quality sabse aage le jaati hai. Real estate, law, medicine, engineering, administration, ya long-term institutions mein exceptional career potential hai. Aap us insaan bante hain jis par log genuinely rely karte hain professional matters mein. Current {mahadasha} Mahadasha mein career ka pace {mahadasha} planet ke nature ke according hai — {mahadasha} period mein career ki quality assess karo, timeline nahi. Financial stability career ke saath proportionally badhti hai.`,
    advice: `"Slow ko weakness mat samjho — Shani ki timeline mein kaam karo. 5-year professional plan banao, 6-month plan nahi. Har haftе sabse mushkil professional task pehle karo — yeh Saturn ko please karta hai.`,
  },

  // Jupiter in 2nd or 11th
  {
    id: 'jupiter_2nd_11th_career',
    weight: 2,
    conditions: [ctx => [2, 11].includes(ctx.p.jupiter?.house)],
    title: 'Guru in Dhana Bhava — Abundance is Your Birthright',
    description: `{name}, aapka Guru 2nd ya 11th Ghar mein hai — yeh financial prosperity aur income ke ghar hain. Yeh placement strongly suggest karta hai ki aap apne career mein good earning potential rakhte hain, especially jabтак aap ethical aur honest taur par kaam karo. Guru kabhi bhi dishonesty ko protect nahi karta — lekin honest effort ke saath income consistently grows. {ascSign} Lagna ke saath yeh placement ek beautiful professional life suggest karta hai jahan work satisfying bhi hoti hai aur financially rewarding bhi. Teaching, consulting, finance, investment, education, legal advisory, ya spiritual guidance mein excellent career potential hai. Aapke {sunSign} Sun aur {moonSign} Moon ka combination aapko ek trustworthy professional identity deta hai — clients aur employers naturally aap par trust karte hain. Multiple income streams possible hain aapke liye — main career ke alongside side income bhi develop ho sakti hai. Current {mahadasha} ka impact income par direct hai — {mahadasha} Mahadasha mein accordingly kaam karo.`,
    advice: `Apni financial knowledge continuously upgrade karo — Guru expand karta hai tabhi jab aap bhi expand karte hain. Investments mein gold, mutual funds, aur education sector consider karo. Guruwar ko kisi zarooratmand ko kuch daan do — Jupiter circulate karta hai.`,
  },

  // Mercury strong (own or exalted) in career houses
  {
    id: 'mercury_strong_career',
    weight: 2,
    conditions: [
      ctx => ['own','exalted'].includes(ctx.p.mercury?.dignity),
      ctx => [3, 6, 10, 11].includes(ctx.p.mercury?.house),
    ],
    title: 'Uchcha/Swakshetri Budh — The Intellectual Professional',
    description: `{name}, aapka Budh strong position mein hai — apni sign mein ya exalted — aur ek favorable house mein bhi. Yeh combination aapko career mein ek exceptional communication aur analytical advantage deta hai. Technology, media, writing, law, consulting, trading, teaching, marketing, ya programming — kisi bhi field jahan mind aur communication key hai, aap naturally excel karte hain. Aapke {ascSign} Lagna ke saath strong Budh aapko ek sharp business mind deta hai — deals samajhna, negotiate karna, aur loopholes dhundh lena naturally aata hai. Aapka {sunSign} Sun aur {moonSign} Moon ka combination creative-intellectual balance banata hai. Multiple simultaneous projects manage karne ki kabiliyat extraordinary hai — aap tab best perform karte hain jab variety ho, routine mein bore ho jaate hain. Writing koi bhi form mein — whether professional reports ya creative content — career mein additional income aur recognition la sakti hai. Current {mahadasha} ka career direction par influence hai.`,
    advice: `Public speaking ya writing mein invest karo — strong Budh ka ek channel publish karna chahiye. LinkedIn, blog, ya newsletter shuru karo. Budh ki energy written record mein aur zyada powerful ho jaati hai.`,
  },

  // Mars in 3rd or 6th (favorable for Mars)
  {
    id: 'mars_3rd_6th_career',
    weight: 2,
    conditions: [ctx => [3, 6].includes(ctx.p.mars?.house)],
    title: 'Mangal in Upachaya — Competitive Advantage',
    description: `{name}, aapka Mangal 3rd ya 6th Ghar mein hai — yeh Upachaya houses (growth houses) hain jahan Mars especially strong results deta hai. Aap competition mein naturally comfortable hain — jab competitive situation aata hai, aapki performance actually better hoti hai. Career mein tum woh insaan ho jo deadlines, pressure, aur challenges se galvanize hote hain, not paralyzed. {ascSign} Lagna ke saath yeh placement aapko ek resilient professional identity deta hai jo obstacles se grow karta hai. Sales, management, sports, military, police, surgery, entrepreneurship — kisi bhi competitive field mein strong potential hai. Aapke {sunSign} Sun aur {moonSign} Moon ka combination bhi battle-ready nature mein contribute karta hai. Enemies aur competitors ultimately unsuccessful hote hain aapke against — 6th house Mars sabse powerful protection deta hai. Sibling-related ventures bhi 3rd house Mars ke saath beneficial ho sakte hain. Current {mahadasha} ke according career competition ka context samjho.`,
    advice: `Competition avoid mat karo — yeh aapka fuel hai. Deliberately aise roles choose karo jahan performance metrics clear hoon aur measurement possible ho. Mangal ko channel karne ke liye physical workout mandatory — daily 30 minutes minimum.`,
  },

  // Default career
  {
    id: 'default_career',
    weight: 0,
    conditions: [],
    title: 'Career Blueprint — {sunSign} Sun in Action',
    description: `{name}, aapki kundli mein {sunSign} Sun, {moonSign} Moon, aur {ascSign} Lagna ka combination ek specific professional identity suggest karta hai. {sunElement} element dominant hone se aapkी career style {sunElement === 'fire' ? 'energetic, leadership-oriented aur initiative-taking' : sunElement === 'earth' ? 'practical, systematic aur result-driven' : sunElement === 'air' ? 'communicative, idea-generating aur adaptable' : 'intuitive, empathetic aur service-oriented'} hai. Aapka Life Path {lp} aapke deepest career purpose ko represent karta hai — {lp} number ke karakatva align karo professional choices ke saath best results ke liye. Current {mahadasha} Mahadasha {dashaEndYear} tak active hai — is planet ke nature ke according career events expect karo. Nakshatra {nakshatra}, lord {nakshatraLord} — yeh combination aapki career timing aur nature mein specific patterns create karta hai. Apne Saturn ki house position career mein discipline aur structure ko indicate karti hai, aur Jupiter ki position growth aur expansion ke opportunities ko.`,
    advice: `Apne Sun sign ke strengths professionally leverage karo consciously. Aur Saturn ki house ka kaam seriously lo — woh department aapka karma bhumi hai aur ultimately sabse zyada long term success wahan milega.`,
  },
];

// ══════════════════════════════════════════════════════
// RELATIONSHIP TEMPLATES
// ══════════════════════════════════════════════════════
export const relationshipTemplates = [

  // Venus exalted
  {
    id: 'venus_exalted_rel',
    weight: 3,
    conditions: [ctx => ctx.p.venus?.dignity === 'exalted'],
    title: 'Uchcha Shukra — Blessed in Love and Beauty',
    description: `{name}, aapka Shukra Meena Rashi mein uchcha (exalted) hai — yeh romantic aur relationship matters mein ek extraordinary divine blessing hai. Uchcha Shukra wale log naturally attractive hote hain — physically aur personality wise dono. Aap love ko deeply aur purely experience karte hain — petty jealousy ya control issues aapko naturally suit nahi karte. {ascSign} Lagna ke saath exalted Venus aapko relationships mein ek generous, romantic, aur artistic nature deta hai. Marriage ya long-term partnership mein aap ek deeply devoted aur caring partner bante hain. Spouse ya significant other usually refined, educated, ya artistically inclined hoti/hota hai. Physical beauty, art, music, ya luxury se naturally connected life milti hai. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek warm, expressive lover banata hai jo words aur actions dono se love express karna jaanta hai. Manglik situation hai ya nahi — yeh check karna important hai, lekin exalted Venus negative effects ko significantly reduce karta hai.`,
    advice: `Love mein vulnerability ko strength samjho — uchcha Shukra ka full potential tab milta hai jab aap genuinely open hote hain. Relationships mein art, creativity, aur beauty create karo together — shared aesthetic experiences bond ko deepen karte hain.`,
  },

  // Mars in 7th (Manglik)
  {
    id: 'mars_7th_manglik',
    weight: 3,
    conditions: [
      ctx => ctx.p.mars?.house === 7,
      ctx => ctx.isManglik,
    ],
    title: 'Mangal in Vivah Bhava — Intense Passionate Partnerships',
    description: `{name}, aapka Mangal 7th Ghar mein hai — yeh Manglik yoga create karta hai. Iska matlab yeh nahi ki shaadi main problems hongi — iska matlab hai ki aapko ek strong, assertive, aur equally passionate partner chahiye. "Weak" partner aapke saath adjust nahi kar payega, lekin ek equally strong personality ke saath aapki relationship extraordinary passionate aur fulfilling ho sakti hai. {ascSign} Lagna ke saath 7th house Mars relationships mein ek intense energy laata hai — disagreements passionate hote hain, lekin making up bhi equally intense hota hai. Partner ke saath clear boundaries aur mutual respect se yeh combination beautiful ho jaata hai. Aapke {sunSign} Sun aur {moonSign} Moon ka blend suggest karta hai ki emotionally aap deep bonding chahte hain, even though surface par independent dikhte hain. Late 20s ya early 30s mein committed relationship best results deti hai usually. Manglik dari manglik se shaadi ek traditional suggestion hai jo still many astrologers recommend karte hain for harmony.`,
    advice: `Anger aur assertiveness ke beech fark samjho relationships mein — Mangal ki energy constructive discussions mein lagao, fights mein nahi. Partner ke saath "ground rules" early set karo. Mangal Upay: Tuesday ko Hanuman Mandir jaao aur physical exercise karo.`,
  },

  // Kaal Sarp Dosha
  {
    id: 'kaal_sarp_rel',
    weight: 2,
    conditions: [ctx => ctx.isKaalSarp],
    title: 'Kaal Sarp Dosha — Karmic Relationship Journey',
    description: `{name}, aapki kundli mein Kaal Sarp Dosha hai — yeh ek karmic combination hai jo relationships mein specific challenges aur lessons laata hai. Yeh dosha bata raha hai ki relationships mein kuch karmic debts hain jo is janam mein resolve honi hain. Iska matlab yeh nahi ki relationships impossible hain — Rahul Gandhi, Barack Obama, jaisi influential haste kundliyon mein bhi yeh dosha tha. Aapko relationships mein unusual situations face karne pad sakte hain — on-off connections, long distance, societal obstacles, ya timing issues. {ascSign} Lagna ke saath yeh dosha {sunSign} Sun aur {moonSign} Moon ki quality ke through express hota hai. Positive side: Kaal Sarp walon ki relationships uniquely deep aur karmic hoti hain — surface level connections ki jagah soul-level bonds milte hain. Ek baar obstacles cross ho jaayein toh relationship unusually strong hoti hai. After age 40, typically Kaal Sarp's effects significantly reduce ho jaate hain.`,
    advice: `Kaal Sarp Puja (Trimbakeshwar ya kisi jyotirlinga mein) aur regular Nag Panchami worship relationships mein ease laata hai. Pratidin Mahamrityunjaya Mantra 108 baar jaap karo. Sabse zaroori: relationships mein patience raho — karmic timing alag hoti hai.`,
  },

  // Jupiter aspecting 7th
  {
    id: 'jupiter_7th_aspect',
    weight: 2,
    conditions: [
      ctx => {
        if (!ctx.p.jupiter) return false;
        const jHouse = ctx.p.jupiter.house;
        // Jupiter aspects 5th, 7th, 9th from itself
        // If Jupiter in house X, it aspects X+4, X+6, X+8 (1-indexed)
        const asp5 = ((jHouse - 1 + 4) % 12) + 1;
        const asp7 = ((jHouse - 1 + 6) % 12) + 1;
        const asp9 = ((jHouse - 1 + 8) % 12) + 1;
        return [asp5, asp7, asp9].includes(7);
      },
    ],
    title: 'Guru ki Drishti — Blessed Marriage',
    description: `{name}, aapke 7th Ghar par (Vivah Bhava) Guru ki drishti (aspect) pad rahi hai — yeh relationships mein ek powerful protection aur blessing hai. Guru jahan bhi drishti dalta hai, wahan wisdom, grace, aur positive outcomes laata hai. Aapke marriage ya serious partnership mein generally positive energy hai — obstacles aate hain lekin ultimately resolve hote hain. {ascSign} Lagna ke saath Jupiter's aspect on 7th house suggest karta hai ki aapka spouse educated, wise, ya spiritually inclined hoga/hogi. Relationship mein growth aur learning central theme hogi. {sunSign} Sun aur {moonSign} Moon ka combination aapko relationship mein ek good teacher aur student dono banata hai — aap apne partner se genuinely seekhte hain aur unhe bhi grow karte hain. Financially bhi marriage beneficial hota hai usually Jupiter 7th aspect ke saath — combined resources grow karte hain. Children bhi generally blessed hote hain. Current {mahadasha} Mahadasha relationship timeline ko influence kar raha hai.`,
    advice: `Relationship mein wisdom aur communication invest karo — Guru ki drishti badhne ke liye do people ko Vedic knowledge ya spiritual wisdom share karo. Apne partner ke saath regularly meaningful conversations karo, not just logistics.`,
  },

  // Default relationship
  {
    id: 'default_relationship',
    weight: 0,
    conditions: [],
    title: 'Love & Partnership — Your Venus Story',
    description: `{name}, aapke relationships aur vivah ka blueprint aapke Venus aur 7th ghar ke lord ki position se samajhna aata hai. Aapka {sunSign} Sun {moonElement} Moon ke saath ek interesting dynamic banata hai love mein — Sun jo aap chahte hain dikhata hai, Moon jo aap feel karte hain. Dono ka alignment relationship harmony ke liye important hai. {ascSign} Lagna love mein aapka approach dikhata hai — pehli impression, flirting style, aur what you seek in a partner. Manglik situation check zaroori hai jo already hoga — isManglik: {isManglik}. Current {mahadasha} Mahadasha relationship events ko timing karta hai — {mahadasha} planet ke karakatva se judge karo ki abhi relationship matters favorably aspected hain ya nahi. Nakshatra {nakshatra} ke lord {nakshatraLord} bhi relationships mein ek subconscious pattern create karte hain. Life Path {lp} aapke ideal partner's qualities bhi indicate karta hai — {lp} se compatible numbers seek karo.`,
    advice: `Apne Venus ki house aur sign dekho — woh department aapka relationship karmic zone hai. Shukravar ko shringaar karo, meethi cheez khao, aur white/pink pahnao — Shukra ko prasann karne ke liye. Relationships mein authentic expression priority do.`,
  },
];

// ══════════════════════════════════════════════════════
// HEALTH TEMPLATES
// ══════════════════════════════════════════════════════
export const healthTemplates = [

  // Saturn in 6th (good for health battles)
  {
    id: 'saturn_6th_health',
    weight: 2,
    conditions: [ctx => ctx.p.saturn?.house === 6],
    title: 'Shani in Roga Bhava — Resilient Constitution',
    description: `{name}, aapka Shani 6th Ghar mein hai — yeh diseases, enemies, aur obstacles ka ghar hai, aur yahan Saturn rakshak ki tarah kaam karta hai. Aapka body constitution naturally tough hai — aap beemar pad bhi jaao toh recovery relatively fast hoti hai aur aap quickly apne feet par aa jaate hain. Chronic diseases ki possibility reduced hai, lekin bone, joint, aur nervous system related issues kabhi kabhi arise ho sakte hain especially Sade Sati ke periods mein. {ascSign} Lagna ke saath 6th house Saturn aapko ek physically resilient personality deta hai. {sunSign} Sun element ke according specific weak areas hain: {sunElement} element walon ke liye blood pressure aur circulation (fire), digestion aur thyroid (earth), respiratory aur nervous (air), ya immune aur lymphatic (water) systems par dhyan dena chahiye. Mental health bhi physical se equally important hai — Saturn kabhi kabhi anxiety ya depression episodes laata hai jo physical symptoms mein convert ho sakte hain. Exercise aur routine Saturn ko please karta hai aur health maintain karta hai.`,
    advice: `Strict daily health routine banao: fixed wake time, fixed meal times, fixed exercise time. Saturn discipline reward karta hai especially health mein. Cold water bath optional hai lekin Shani ki dasha mein especially beneficial hai.`,
  },

  // Moon debilitated (health challenges)
  {
    id: 'moon_debil_health',
    weight: 3,
    conditions: [ctx => ctx.p.moon?.dignity === 'debilitated'],
    title: 'Neecha Chandra — Mind-Body Alignment Journey',
    description: `{name}, aapka Chandra Vrishchik Rashi mein neecha (debilitated) hai — yeh mental health aur digestive system par specific attention demand karta hai. Neecha Chandra walon ko anxiety, mood fluctuations, aur kabhi kabhi sleep disturbances face karni pad sakti hain. Yeh weakness nahi hai — yeh ek specific area hai jisme conscious care se extraordinary balance achieve kiya ja sakta hai. {ascSign} Lagna ke saath neecha Chandra aapko ek emotionally intense inner life deta hai jo surface par visible nahi hoti. Physical health mein stomach, chest, aur hormonal system par dhyan do. {sunSign} Sun ka combination aapko resilience deta hai — even with neecha Moon, aap functional aur high-performing hote hain jab external life structured ho. Sade Sati ({isSadeSati}) period mein extra care. Ek important positive: neecha Chandra walon mein often extraordinary empathy aur depth hoti hai — healing arts mein natural talent.`,
    advice: `Daily Chandra mantra: "Om Shram Shreem Shraum Sah Chandramasay Namah" — 108 baar Somvar ko. Dairy products especially milk ki quantity moderate rakho. Moon meditation (full moon observation) monthly karo. Therapy ya counseling genuinely helpful hogi.`,
  },

  // Mars in 8th (accident-prone)
  {
    id: 'mars_8th_health',
    weight: 2,
    conditions: [ctx => ctx.p.mars?.house === 8],
    title: 'Mangal in Ashtam Bhava — Vital Force and Hidden Strength',
    description: `{name}, aapka Mangal 8th Ghar mein hai — yeh intense position hai jo health mein kuch specific patterns create karta hai. Positive side pehle: 8th house Mangal walon mein extraordinary recovery ability hoti hai — seriously beemar hone ke baad bhi remarkably fast recover karte hain. Tumhara vital force strong hai. Careful rehna chahiye accidents ke baare mein — especially head injuries, cuts, burns, ya surgeries se related. Driving mein extra caution, especially Mars dasha mein ya Sade Sati mein. {ascSign} Lagna ke saath 8th house Mars {sunSign} Sun aur {moonSign} Moon ki health picture ko shape karta hai. Blood pressure, blood disorders, ya reproductive health issues kabhi kabhi arise ho sakte hain — regular checkups recommended hain. Mental health mein sudden intense episodes possible hain — healthy outlets zaroori hain. Sports, martial arts, ya intense physical training 8th house Mars ki energy ke ideal outlets hain.`,
    advice: `Physical caution specifically: driving pe phone mat use karo, risky sports mein safety gear always use karo, aur anger ke waqt koi sharp ya mechanical kaam avoid karo. Neem ke patte aur haldi ka daily use Mangal ke negative effects reduce karta hai.`,
  },

  // Jupiter in 8th or aspecting 6th
  {
    id: 'jupiter_protection_health',
    weight: 2,
    conditions: [
      ctx => ctx.p.jupiter?.house === 8 || ctx.p.jupiter?.house === 6,
    ],
    title: 'Guru ki Raksha — Protected Constitution',
    description: `{name}, Guru ka 6th ya 8th Ghar se connection health mein ek powerful protection create karta hai. Guru jahan bhi hota hai, wahan wisdom aur grace laata hai — diseases aur health challenges se bhi aap more gracefully deal karte hain compared to others with similar planetary issues. {ascSign} Lagna ke saath yeh placement aapko ek fundamentally optimistic approach to health deta hai — jo healing mein genuinely help karta hai. Liver aur thyroid Guru ki health karakatva mein aate hain — in areas par attention beneficial hai, positive aur protective dono. Aapka {sunSign} Sun element ke specific health considerations plus Jupiter's protection overall constitution ko strong rakhti hai. Mental health Guru ki presence se genuinely better hoti hai — aap problems ko perspective mein rakh paate hain. Longevity indicators also positive hain. Current {mahadasha} ka health timeline par effect hai — {mahadasha} Mahadasha period mein health accordingly manage karo.`,
    advice: `Yellow foods (haldi, banana, dal), Guruwar ka vrat, aur Guru mantra aapke natural health protection ko aur strengthen karta hai. Ek knowledgeable doctor — ideally integrative medicine practitioner — se preventive health partnership banao.`,
  },

  // Default health
  {
    id: 'default_health',
    weight: 0,
    conditions: [],
    title: 'Health Blueprint — Your Body\'s Cosmic Constitution',
    description: `{name}, aapki health constitution ka blueprint aapke {ascSign} Lagna, 6th aur 8th Ghar ke lords, aur Mars-Saturn placements se samajhna aata hai. {sunElement} element dominant hone se aapko generally {sunElement === 'fire' ? 'pitta (heat-related) conditions, inflammation, blood pressure, aur eye issues par attention dena chahiye' : sunElement === 'earth' ? 'kapha (heaviness) conditions, thyroid, weight management, aur bone health monitor karni chahiye' : sunElement === 'air' ? 'vata (dryness) issues, nervous system, respiratory, aur joint problems par nazar rakhni chahiye' : 'kapha-vata mix — immune system, lymphatic, aur hormonal balance par focus karo'}. Aapka {moonSign} Moon emotional health ko represent karta hai — mind-body connection aapke liye especially strong hai. Stress direct physical symptoms mein convert hota hai, isliye mental health care equally physical health jitni important hai. {isSadeSati ? 'Sade Sati active hai — is period mein extra health vigilance zaroori hai, especially spine aur joints ke liye.' : 'Sade Sati active nahi hai — current period relatively health-stable hai.'} Current {mahadasha} Mahadasha {dashaEndYear} tak active hai aur health events ko timing karta hai.`,
    advice: `Daily: Surya Namaskar 12 rounds + Anulom Vilom pranayama 10 min. Weekly: Fast karo (apne Lagna Lord ke planet ke weekday par). Avoid: processed foods, late nights consistently, aur suppressed emotions — yeh teeno health ke sabse common astrological aggravators hain.`,
  },
];

// ══════════════════════════════════════════════════════
// FINANCE TEMPLATES
// ══════════════════════════════════════════════════════
export const financeTemplates = [

  // Jupiter in 2nd (Dhana Bhava)
  {
    id: 'jupiter_2nd_finance',
    weight: 3,
    conditions: [ctx => ctx.p.jupiter?.house === 2],
    title: 'Guru in Dhana Bhava — Natural Wealth Magnet',
    description: `{name}, aapka Guru 2nd Ghar (Dhana Bhava) mein hai — yeh sabse auspicious financial placement hai. 2nd Ghar savings, family wealth, speech, aur accumulated resources ka ghar hai, aur yahan Guru ki presence consistently prosperity attract karti hai. Aapke financial life mein ek pattern hoga — paise aate hain, aur agar wisely managed ho toh consistently grow karte hain. Family ya ancestral property se bhi benefit possible hai. {ascSign} Lagna ke saath 2nd house Jupiter aapko ek natural financial advisor quality deta hai — apne liye aur doosron ke liye bhi. {sunSign} Sun aur {moonSign} Moon ka combination aapki earning style batata hai — sun element se income ke primary sources align hote hain. Aapki speech bhi financially impactful hai — public speaking, teaching, ya content creation se income possible hai. Important: 2nd house Jupiter tabhi best results deta hai jab aap truthful aur ethical ho — dishonest gain Guru chhin leta hai. Guruwar ko temple mein yellow items donate karo.`,
    advice: `Long-term investment consciousness develop karo — real estate, gold, aur education sector Guru ke favorite investment areas hain. Monthly income ka minimum 20% save karo aur compound karte raho. Guru ki dasha mein property ya gold purchase excellent results deta hai.`,
  },

  // Venus in 11th
  {
    id: 'venus_11th_finance',
    weight: 2,
    conditions: [ctx => ctx.p.venus?.house === 11],
    title: 'Shukra in Labha Bhava — Gains Through Beauty and Connection',
    description: `{name}, aapka Shukra 11th Ghar (Labha Bhava — House of Gains) mein hai — yeh ek excellent financial placement hai especially luxury goods, beauty, entertainment, art, fashion, real estate, aur hospitality industries se related gains ke liye. Aapke social connections bhi financial gains laate hain — who you know genuinely matters for your financial growth. {ascSign} Lagna ke saath 11th house Venus aapko ek charming financial personality deta hai — deals negotiate karne mein, clients attract karne mein, ya partnerships form karne mein naturally effective hote hain. {sunSign} Sun aur {moonSign} Moon ka combination aapki earning personality define karta hai. Multiple income streams — especially from creative, luxurious, or people-facing activities — naturally develop ho sakte hain. Friday ko financial decisions especially beneficial hoti hain. Aapka social network literally aapka net worth hai — invest karo usme.`,
    advice: `Networking aur relationship maintenance mein consciously invest karo — har month minimum 3 meaningful professional connections maintain karo. Venus-related businesses (beauty, fashion, luxury, hospitality, art) personally aur as investments consider karo for best returns.`,
  },

  // Rahu in 2nd or 11th
  {
    id: 'rahu_dhana_finance',
    weight: 2,
    conditions: [ctx => [2, 11].includes(ctx.p.rahu?.house)],
    title: 'Rahu in Money Houses — Unconventional Wealth Path',
    description: `{name}, aapka Rahu 2nd ya 11th Ghar mein hai — yeh unconventional, technology-driven, ya foreign-connected sources se financial gains indicate karta hai. Aap traditional finance paths se hatke naye tareekon se paise kamane mein naturally good hote hain. Tech startups, cryptocurrency, international business, media, ya social media influencing — in areas mein exceptional potential hai. {ascSign} Lagna ke saath Rahu's financial placement suggest karta hai ki aapka wealth trajectory likely non-linear hoga — sudden gains possible hain. Caution: Rahu ka nature greedy aur manipulative ho sakta hai — shortcuts ya dishonest means se earned money typically nahi tikta. {sunSign} Sun aur {moonSign} Moon aapki earning ethics define karte hain — stay true to those values. Foreign connections specially beneficial financially hain. Current Rahu dasha mein (ya jo bhi mahadasha) financial quantum leaps possible hain lekin speculation mein caution zaroori hai.`,
    advice: `Technology aur digital skills mein invest karo — Rahu digital world ka karak hai. International markets aur foreign currency exposure financially beneficial ho sakti hai. Weekly: Rahu ke upay karo (coconut daan, blue/black kapde, Rahu mantra) financial protection ke liye.`,
  },

  // Saturn debilitated or in 12th (financial challenges)
  {
    id: 'saturn_challenge_finance',
    weight: 2,
    conditions: [
      ctx => ctx.p.saturn?.dignity === 'debilitated' || ctx.p.saturn?.house === 12,
    ],
    title: 'Shani ki Challenge — Building Wealth Through Discipline',
    description: `{name}, aapka Shani debilitated hai ya 12th Ghar mein — yeh financial life mein kuch specific challenges aur lessons indicate karta hai. 12th house Saturn ya neecha Saturn kabhi kabhi hidden losses, unexpected expenses, ya financial leakage create karta hai. Isliye conscious financial management aapke liye especially important hai — passive ya careless financial approach results nahi deta. {ascSign} Lagna ke saath yeh placement karti hai ki aap agar disciplined ho toh excellent results possible hain — yeh challenge not a curse. Aapka {sunSign} Sun aur {moonSign} Moon strong hain toh yeh compensate karte hain. Foreign lands ya isolated work environments mein often better financial results milte hain 12th house Saturn ke saath. Spiritual practices aur seva mein investment karni chahiye — Shani karma-based returns deta hai. Avoid: speculative investments, gambling, aur overnight wealth schemes — yeh Shani ke test hain jo fail honge.`,
    advice: `Zero-based budget monthly banao — expenses track karo, savings automate karo. Shani ko please karna hai toh: Saturday ko poor logon ko food donate karo, mustard oil lamp jalao, aur hard work karo without shortcuts. Slowly build, never gamble.`,
  },

  // Default finance
  {
    id: 'default_finance',
    weight: 0,
    conditions: [],
    title: 'Wealth Blueprint — Your Financial Karma',
    description: `{name}, aapki financial kundli mein 2nd aur 11th Ghar (Dhana aur Labha Bhava) ke lords, plus Jupiter aur Venus ki positions key roles play karti hain. {sunSign} Sun element se primary income sources align hote hain — fire signs leadership aur entrepreneurship se, earth signs service aur industry se, air signs communication aur knowledge se, aur water signs healing aur creative fields se traditionally earn karte hain. Aapka Life Path {lp} aapki financial karma bhi indicate karta hai — {lp} se associated fields naturally better financial results dete hain. {mahadasha} Mahadasha current financial period ko shape kar raha hai — {dashaEndYear} tak is planet ki energy ke according financial opportunities look karo. {isSadeSati ? 'Sade Sati ke dauran expenses control karo — yeh test period hai, not best time for big investments.' : 'Sade Sati active nahi — financial initiatives ke liye comparatively better period hai.'} Shani ki position long-term wealth discipline indicate karta hai.`,
    advice: `Teen financial rules follow karo: (1) income ka 20% save karein pehle, baaki se kharcho; (2) ek emergency fund banao — 6 mahine ke expenses; (3) Jupiter ya Venus dasha mein long-term investments shuru karo. Yeh teen rules kundli ke bawajood work karte hain.`,
  },
];

// ══════════════════════════════════════════════════════
// REMEDIES TEMPLATES
// ══════════════════════════════════════════════════════
export const remediesTemplates = [

  // Kaal Sarp
  {
    id: 'kaalsarp_remedies',
    weight: 3,
    conditions: [ctx => ctx.isKaalSarp],
    title: 'Kaal Sarp Dosha Nivaran — Sacred Remedies',
    description: `{name}, aapki kundli mein Kaal Sarp Dosha ki puja aur upay especially important hain. Yeh dosha Rahu-Ketu axis par saare planets ek taraf hone se banta hai aur karmic delays, sudden changes, aur life obstacles create kar sakta hai. Sabse effective upay: Nag Panchami par Nag Devata ki puja, Trimbakeshwar ya Ujjain Mahakal mein Kaal Sarp Shanti Puja. Regular Rahu-Ketu mantra jaap bhi powerful hai. {ascSign} Lagna ke specific Lord ko bhi daily puja mein shaamil karo. Rahu ke liye: Om Rahave Namah (108 baar, Saturday). Ketu ke liye: Om Ketave Namah (108 baar, Saturday). Ghar mein Nag Dev ki murti ya photo rakhne se bhi protection milti hai. Neelam ya Gomed gemstone — astrologer se consult karke hi pehno. Yeh dosha janam se hai toh regular rituals required hain, single puja se permanently remove nahi hota. {isSadeSati ? 'Sade Sati bhi active hai — extra upay zaroori hain.' : ''}`,
    advice: `Monthly: Nag Panchami-style puja karo. Weekly: Saturday ko Rahu-Ketu mantra + til ka daan. Daily: Mahamrityunjaya mantra 108 baar. Spiritual practice consistently karo — Kaal Sarp ka sabse powerful antidote hai regular sadhana.`,
  },

  // Manglik
  {
    id: 'manglik_remedies',
    weight: 3,
    conditions: [ctx => ctx.isManglik],
    title: 'Mangal Dosha Shanti — Remedies for Harmony',
    description: `{name}, aapki kundli mein Manglik Yoga hai. Iska effect primarily relationships aur marriage mein mahsoos hota hai — lekin effective upay se yeh considerably balance ho jaata hai. Mangal Dosha ke paramparik upay: Mangalwar ko Hanuman temple mein sindoor aur tel chadhao. Mangal mantra: "Om Kram Kreem Kraum Sah Bhaumaya Namah" — 108 baar, specially on Tuesdays. Kumbh Vivah (symbolic marriage with banana plant or idol) ek traditional remedy hai jo many families karte hain. Copper dharan karna aur coral (moonga) stone — qualified astrologer se check karke — bhi beneficial ho sakta hai. {ascSign} Lagna ke Lord ki bhi regular upasana karo. Physical exercise — specially Mars ki energy ka constructive use — bhi upay ki tarah kaam karta hai. Important: Manglik yoga alag alag levels mein hoti hai — strong ya mild — ek qualified jyotishi se apni kundli ka correct level check karwao.`,
    advice: `Tuesday ko blood donation ya red items (kapde, lal mirch, masoor dal) donate karo — Mangal ko please karta hai. Gher mein Hanuman ji ki photo rakhna aur "Jai Shri Ram" jaap daily karna Mangal ki energy ko positive channel deta hai.`,
  },

  // Saturn Sade Sati
  {
    id: 'sadesati_remedies',
    weight: 3,
    conditions: [ctx => ctx.isSadeSati],
    title: 'Sade Sati Shanti — Navigating Saturn\'s Test',
    description: `{name}, aap abhi Sade Sati ke period mein hain — yeh 7.5 saal ka Saturn transit aapke Moon sign ke aas paas chalti hai aur life mein tests, delays, aur transformation laati hai. Yeh period sabse difficult aur ultimately sabse transformative bhi hota hai. Upay specifically Sade Sati ke liye: Shani Chalisa path daily karo. Shanivar ko sarson ka tel Shani idol par chadhao aur poor logon ko khana daan karo. Til (black sesame) ka daan Saturday ko. Neela sapphire ya iron ring — only astrologer ke advice pe. Yahan {moonSign} Rashi ke upay bhi relevant hain. {ascSign} Lagna Lord ki upasana aur {nakshatraLord} ke specific mantras bhi help karte hain. Important Sade Sati ke dauran: loans avoid karo, new ventures slowly start karo, health extra dhyan do (especially spine aur joints), aur controversy se dur raho. Service aur hard work Shani ko sabse zyada please karte hain.`,
    advice: `Shanivar ko: (1) Shani temple visit karo; (2) Mustard oil lamp jalao; (3) Black sesame, mustard oil, aur black clothes donate karo; (4) "Om Shram Shreem Shraum Sah Shanishcharaya Namah" 108 baar chant karo. Patience rakho — yeh bhi guzar jaayega.`,
  },

  // Default remedies by Mahadasha planet
  {
    id: 'default_remedies',
    weight: 0,
    conditions: [],
    title: 'Vedic Upay — Your Personal Remedy Blueprint',
    description: `{name}, aapki kundli ke specific planetary positions ke according personalized upay yahan hain. Sabse important: {mahadasha} Mahadasha {dashaEndYear} tak active hai — is planet ke specific upay is period mein sabse impactful hain. {nakshatra} Nakshatra ke lord {nakshatraLord} ki upasana aapka fundamental daily practice hona chahiye. {ascSign} Lagna Lord ki regular puja aapki overall life quality aur health ko improve karti hai. Manglik ({isManglik ? 'haan' : 'nahi'}), Kaal Sarp ({isKaalSarp ? 'haan' : 'nahi'}), Sade Sati ({isSadeSati ? 'active' : 'inactive'}) — in doshas ke accordingly upay upar bataye gaye hain. {sunSign} Sun ke element ke according daily practice: fire signs ke liye Surya namaskar, earth signs ke liye grounding practices (nature, gardening), air signs ke liye pranayama, water signs ke liye jal therapy (nadi snaan, swimming). Life Path {lp} ka bhi spiritual significance hai — {lp} ke karakatva se aligned seva karmic debts clear karta hai.`,
    advice: `Teen daily practices jo kisi bhi kundli mein helpful hain: (1) Subah Surya ko jal chadhao; (2) Raat ko sone se pehle Mahamrityunjaya mantra 11 baar; (3) Weekly apne Lagna Lord ke planet ke day par temple visit ya specific upaasana. Consistency matters more than intensity.`,
  },
];

// ══════════════════════════════════════════════════════
// EDUCATION TEMPLATES
// ══════════════════════════════════════════════════════
export const educationTemplates = [

  // Mercury strong in 4th or 5th
  {
    id: 'mercury_education',
    weight: 3,
    conditions: [
      ctx => ['own','exalted'].includes(ctx.p.mercury?.dignity),
      ctx => [4, 5].includes(ctx.p.mercury?.house),
    ],
    title: 'Uchcha Budh in Education Houses — Academic Excellence',
    description: `{name}, aapka Budh strong position mein hai aur education ke ghar (4th ya 5th) mein — yeh exceptional academic potential indicate karta hai. Aap naturally fast learner hain, multiple subjects simultaneously handle kar sakte hain, aur exams mein typically above-average results lete hain. {ascSign} Lagna ke saath strong Mercury aapko ek analytical mind deta hai jo concepts quickly grasp karta hai aur original connections dhundh leta hai. {sunSign} Sun aur {moonSign} Moon combination aapki learning style batata hai — primarily intellectual curiosity-driven. Highest education possible pursue karo — research, doctoral studies, ya specialized certifications aapko especially suit karengi. Communication-related skills (languages, writing, public speaking) mein specialized education exceptionally rewarding hogi. Competitive exams mein natural advantage hai. Teaching ya education sector mein career bhi possible aur fulfilling ho sakta hai. {mahadasha} Mahadasha education timeline ko influence karta hai — {mahadasha} period ka nature education events ko timing karta hai.`,
    advice: `Multiple learning formats try karo — audio, visual, kinesthetic — aur jo best suit kare use double down karo. Language learning specifically add karo aapke skills mein — Mercury ki energy multilingual expression mein bhi bloom karti hai.`,
  },

  // Jupiter in 5th
  {
    id: 'jupiter_5th_education',
    weight: 3,
    conditions: [ctx => ctx.p.jupiter?.house === 5],
    title: 'Guru in Vidya Bhava — Blessed with Wisdom',
    description: `{name}, aapka Guru 5th Ghar (Vidya, Poorva Punya, Intelligence ka Ghar) mein sthit hai — yeh education aur intelligence ke liye ek powerful blessing hai. 5th house mein Jupiter wisdom, creativity, aur divine intelligence ka source hai. Aap traditionally knowledgeable subjects — philosophy, law, religion, higher education, spirituality, counseling — mein especially deep understanding develop kar sakte hain. {ascSign} Lagna ke saath 5th house Jupiter creative intelligence aur scholarly temperament deta hai. Higher education — post-graduate ya research — mein exceptional results possible hain. {sunSign} Sun aur {moonSign} Moon ka combination intellectual style indicate karta hai. Intelligence se connected karmic blessings hain — aapke Poorva Punya ache hain jo natural learning ease provide karte hain. Teaching, mentoring, writing, aur knowledge sharing aapko jeevan mein satisfy karte hain. Children bhi intelligent aur educated hone ki possibility hai.`,
    advice: `Formal education ke alawa informal wisdom traditions explore karo — Guru ki energy academic aur experiential dono mein bloom karti hai. Ek subject choose karo jisme genuinely passionate ho aur depth pursue karo — Guru dabchki favors specialists.`,
  },

  // Rahu in 5th (unconventional education)
  {
    id: 'rahu_5th_education',
    weight: 2,
    conditions: [ctx => ctx.p.rahu?.house === 5],
    title: 'Rahu in Vidya Bhava — The Unconventional Learner',
    description: `{name}, aapka Rahu 5th Ghar mein hai — yeh education aur learning mein unconventional paths indicate karta hai. Traditional education system mein aap kabhi kabhi restless ya restricted feel kar sakte hain — lekin self-directed, technology-based, ya experimental learning mein extraordinary absorption hoti hai. Aap woh cheezein seekhte hain jo formally taught nahi jaati — internet se, experiences se, aur unusual mentors se. {ascSign} Lagna ke saath Rahu 5th mein ek futuristic learning style deta hai. {sunSign} Sun aur {moonSign} Moon combination aapki specific areas of fascination indicate karta hai. Technology, psychology, occult sciences, foreign education, aur cutting-edge fields mein deep interest possible hai. Online education, international universities, ya self-taught expertise often better formal credentials se bhi kaam aata hai aapke liye. Speculative skills (trading, gaming, rapid analysis) mein bhi natural talent possible hai.`,
    advice: `Formal credentials pursue karo (practical necessity ke liye) lekin apni unconventional interests abandon mat karo — Rahu's gifts often become career differentiators. Find your unique learning niche aur usmein world-class bano, average mein broad mat raho.`,
  },

  // Default education
  {
    id: 'default_education',
    weight: 0,
    conditions: [],
    title: 'Education & Learning — Your Intellectual Blueprint',
    description: `{name}, aapki education aur intellectual pursuits ka blueprint 3rd, 4th, aur 5th Ghar ke lords plus Mercury aur Jupiter ki positions se samajhna aata hai. {sunElement} element dominant hone se learning style indicate hoti hai — fire signs conceptual aur big-picture, earth signs practical aur technical, air signs theoretical aur communication-oriented, water signs intuitive aur emotional intelligence. {ascSign} Lagna aapki study approach batata hai — extroverted Lagnas collaborative learning mein best karte hain, introverted Lagnas solo deep-study mein. Life Path {lp} aapki natural areas of brilliance indicate karta hai. Current {mahadasha} Mahadasha education ke timing ko affect karta hai — education-related decisions {mahadasha} planet ki nature ke according results denge. Mercury ki sign aur house learning speed aur communication style, Jupiter ki position wisdom depth aur expansion of knowledge indicate karta hai.`,
    advice: `Aapke {nakshatraLord} nakshatra lord ke day par padhai karo — us din concentration aur retention naturally better hoti hai. Reading habit daily karo — 20 pages minimum. Aur jo sikha use teach karo — teaching best learning method hai, yeh Guru ka siddhant hai.`,
  },
];

// ══════════════════════════════════════════════════════
// FAMILY TEMPLATES
// ══════════════════════════════════════════════════════
export const familyTemplates = [

  // Moon in 4th
  {
    id: 'moon_4th_family',
    weight: 3,
    conditions: [ctx => ctx.p.moon?.house === 4],
    title: 'Chandra in Sukha Bhava — The Family\'s Heart',
    description: `{name}, aapka Chandra 4th Ghar (Sukha, Matri, Griha Bhava) mein sthit hai — yeh aapko family aur home ke saath exceptionally deep connection deta hai. Aap family ke liye naturally caretaker role mein fit ho jaate hain — chahe birth order kuch bhi ho. Mata ji se strong emotional bond, aur unka aap par deep influence rehta hai throughout life. {ascSign} Lagna ke saath 4th house Moon aapko ek domestic instinct deta hai — ek beautiful, comfortable home banana aapki priorities mein naturally high hota hai. Real estate se bhi connection strong hai — property investments beneficial ho sakti hain. {sunSign} Sun aur {moonSign} Moon ka combination family dynamics batata hai. Aapka mood home environment se deeply connected hai — peaceful ghar mein aap best perform karte hain, chaotic home environment productivity aur health ko significantly affect karta hai. Inner security ki feeling family se milti hai — childhood home memories aur family rituals aapko deeply matter karte hain.`,
    advice: `Ghar ke space ko deliberately peaceful aur beautiful banao — yeh aapka personal sanctuary hai aur aapki mental health directly affect karta hai. Family rituals (weekly dinners, festivals, ancestral remembrance) maintain karo — yeh aapki emotional roots hain.`,
  },

  // Sun in 9th (father, guru, dharma)
  {
    id: 'sun_9th_family',
    weight: 2,
    conditions: [ctx => ctx.p.sun?.house === 9],
    title: 'Surya in Dharma Bhava — Father\'s Blessing',
    description: `{name}, aapka Surya 9th Ghar mein sthit hai — yeh father aur guru ke saath aapka profound karmic connection indicate karta hai. Pitaji ka influence aapke life philosophy aur dharmic path par extraordinary hai. 9th house Sun walon ko usually father se guidance, inspiration, ya significant life lessons milti hain. {ascSign} Lagna ke saath 9th house Sun aapki family mein ek spiritually-oriented ya philosophically-inclined nature develop karta hai. Higher education, foreign connections, aur dharmic pursuits mein family support tends to be strong. {sunSign} Sun ki dignity yahan important hai — exalted ya own mein ho toh pitaji ki blessings especially powerful, neutral ho toh steady relationship, challenges ho toh father se some distance ya differences possible. Siblings ke saath relationship generally good hai 9th Sun ke saath. Aap family mein one who carries wisdom aur values forward hote hain typically.`,
    advice: `Pitaji ka specifically ashirvaad lo regularly — unse seedha yeh words sunna chahoge: "Main aapka aashirvaad chahta/chahti hoon." 9th house ka Sun Pitru Tarpan se bhi pleased hota hai — ancestors ka regular remembrance family prosperity maintain karta hai.`,
  },

  // Rahu in 4th (family disruptions)
  {
    id: 'rahu_4th_family',
    weight: 2,
    conditions: [ctx => ctx.p.rahu?.house === 4],
    title: 'Rahu in Sukha Bhava — Karmic Family Lessons',
    description: `{name}, aapka Rahu 4th Ghar mein hai — yeh family aur home ke matters mein kuch karmic complexity indicate karta hai. Early home life mein possible disruptions, relocations, ya unusual family dynamics ho sakti hain. Mata ji ke saath relationship complex ya unusual ho sakti hai. {ascSign} Lagna ke saath Rahu 4th mein suggest karta hai ki aapka home life conventional nahi hota — foreign countries mein settle hona, multiple homes, ya unusual domestic arrangements possible hain. {sunSign} Sun aur {moonSign} Moon combination specific family dynamics indicate karte hain. Positive side: Rahu 4th walon ko often foreign lands mein better home aur family life milti hai. Real estate se bhi association possible hai — but be careful of speculative property deals. Inner peace ki khoj aapka lifetime spiritual journey hai — meditation aur inner work specifically recommended hai. Past life karma mein family situations se related debts hain jo resolve ho rahe hain.`,
    advice: `Ghar mein Vastu corrections karwao — Rahu 4th ke negative effects Vastu se significantly reduce ho sakte hain. Niyamit ghar ki safai aur decluttering Rahu ki chaotic energy ko manage karta hai. Mata ji ki seva aur unse relationship heal karna karmic priority hai.`,
  },

  // Default family
  {
    id: 'default_family',
    weight: 0,
    conditions: [],
    title: 'Family & Home — Your Domestic Destiny',
    description: `{name}, aapke family aur home life ka blueprint 4th Ghar, Moon ki position, aur Cancer sign ke lord se samajhna aata hai. {moonSign} Chandra aapki mata ke saath relationship aur domestic life indicate karta hai — {moonSign} ka element ya quality family dynamics mein reflect hoti hai. {ascSign} Lagna se 4th Ghar ke lord ki position primary family connection indicate karti hai. {sunSign} Sun 9th Ghar se father aur dharmic lineage ko represent karta hai. Current {mahadasha} Mahadasha family events ko time karta hai. {isManglik ? 'Manglik yoga hai — family specifically marriage ke matter mein careful planning important hai.' : ''} {isSadeSati ? 'Sade Sati active hai — family matters mein extra patience aur caution zaroori hai.' : ''} Home aur family security Life Path {lp} ke karakatva ke according interpreted hoti hai. Sibling relationships 3rd Ghar se aur 11th Ghar se (income brothers) dekhte hain.`,
    advice: `Family ke saath regular quality time schedule karo — not just emergency gatherings. Har hafte minimum ek family meal together. Ancestors ka tarpan (chahe minimal form mein bhi) monthly karo — yeh Pitru Dosha se protection deta hai chahe dosha indicate na ho.`,
  },
];

// ══════════════════════════════════════════════════════
// TIMELINE TEMPLATES (Life phases by age bracket)
// ══════════════════════════════════════════════════════
export const timelineTemplates = [

  // Strong early life (Jupiter in 1st or 5th, Sun strong)
  {
    id: 'strong_early_life',
    weight: 2,
    conditions: [
      ctx => [1, 5].includes(ctx.p.jupiter?.house) || ctx.p.sun?.dignity === 'exalted',
    ],
    title: 'Divinely Charted Life Journey — {name}',
    description: `{name} ki jeevan yatra ke major phadav kundli ke planetary placements ke saath align karte hain. Prarambhik jeevan (0-20 saal) mein Jupiter ya Sun ki strong position suggest karti hai ki bachpan comparatively protected aur fortunate tha — ache teachers, opportunities, ya family support available tha. Youth (20-30) mein {mahadasha} Mahadasha ki energy active hai — yeh period specifically {mahadasha} planet ke karakatva se related developments laata hai: foundation building, career start, ya significant relationships. Middle life (30-40) mein life's biggest achievements typically solidify hote hain — career peak, family establishment, ya major creative work. 40-50 mein wisdom aur leadership phases — junior logon ke mentor banne ka time. 50+ mein legacy building aur spiritual deepening natural focus banta hai. {isManglik ? 'Manglik yoga suggest karta hai ki 30 se pehle commitment cautiously lo.' : ''} Overall trajectory: {yogas.length > 0 ? yogas.join(', ') + ' yoga ki presence powerful life indicate karti hai.' : 'Balanced planetary positions steady aur meaningful life journey indicate karte hain.'}`,
    advice: `Har decade ek specific theme pe focus karo: 20s — foundation build karo (skills, relationships, health); 30s — major outcomes create karo; 40s — wisdom leverage karo; 50s+ — legacy consciously design karo. Planetary timing ke saath flow karo, fight mat karo.`,
  },

  // Challenging early life but strong later (Saturn prominent)
  {
    id: 'late_bloomer_timeline',
    weight: 2,
    conditions: [
      ctx => [1, 7, 10].includes(ctx.p.saturn?.house) || ctx.p.saturn?.dignity === 'exalted',
    ],
    title: 'The Late Bloomer\'s Triumphant Journey — {name}',
    description: `{name}, aapki kundli mein Saturn ki prominent position suggest karta hai ki aap classic "late bloomer" pattern follow karte hain — early years struggles aur slow progress, lekin mid-life ke baad extraordinary sustained success. Yeh frustrating lag sakta hai 20s-early 30s mein jab peers ko faster results milte dikh rahe hote hain, lekin Shani ka lesson hai: jo dheeraj se build hota hai woh permanently tikta hai, jo jaldi se milta hai woh jaldi jaata hai. Early life (0-20) mein responsibilities ya limitations ka sense hoga. Youth (20-30) mein hard work aur foundation laying — results delayed lekin quality high. 30-40 mein significant recognition aur rewards start hone lagte hain. 40-50 mein peak career aur authority positions. 50+ mein legacy aur wisdom-sharing phase — sabse fulfilling period typically. {yogas.length > 0 ? 'Aapke yogas (' + yogas.join(', ') + ') is overall positive trajectory ko confirm karte hain.' : ''} Aapka life story inspirational bnega doosron ke liye.`,
    advice: `Early years mein comparison trap avoid karo — aapka timeline different hai, not deficient. Har saal ek significant skill ya quality deliberately develop karo — compound effect 40s mein extraordinary results dega. Shani ko guru maano, enemy nahi.`,
  },

  // Default timeline
  {
    id: 'default_timeline',
    weight: 0,
    conditions: [],
    title: 'Life\'s Cosmic Timeline — {name}\'s Journey',
    description: `{name} ki jeevan yatra ka saransh kundli ke planetary periods (Dasha system) se bahut clearly dikhta hai. Janam se lekar ab tak: alag alag Mahadashas ne alag alag themes activate kiye hain. Current period: {mahadasha} Mahadasha {dashaEndYear} tak active hai — is period ke themes hain {mahadasha} ki karakatva se related. Next phase: {nextMahadasha} Mahadasha aayegi — unki quality ke according prepare karna abhi se start karo. Life Path {lp} aapke overall jeevan ka karmic theme hai jo consistently run karta hai saari dashas mein. {ascSign} Lagna se pehle ghar aapke main body of life define karta hai, aur 10th house aapki public legacy. {isSadeSati ? 'Abhi Sade Sati ka current phase — introspection aur patience ka phase hai, action nahi.' : 'Sade Sati active nahi — action aur growth ke liye comparatively good period hai.'} Nakshatra {nakshatra}, {nakshatraLord} ki ruling energy aapki har phase mein subtly present rehti hai.`,
    advice: `Har 7 saal ek life review karo — kyonki Shani approximately har 7 saal mein ek important transit karta hai aur shift aata hai. Sawal poochho: "Main kahan tha, main kahan hoon, main kahan jaana chahta hoon?" Intentional jeevan, accidental nahi.`,
  },
];
