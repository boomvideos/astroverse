// ═══════════════════════════════════════════════════════════════
// AstroVerse — Personality Templates
// templates/personality.js
//
// Conditions priority (high → low):
//   1. Lagna (Ascendant sign) — sabse strong personality indicator
//   2. Sun sign + element
//   3. Moon sign (inner nature)
//   4. Special yogas (Gaj Kesari, Budhaditya, etc.)
//   5. Saturn/Mars house positions
//   6. Default fallback
// ═══════════════════════════════════════════════════════════════

export const personalityTemplates = [

  // ── ARIES LAGNA ──────────────────────────────────────────────
  {
    id: 'aries_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Aries',
    ],
    title: 'The Dynamic Pioneer — {ascSign} Ascendant',
    description: `{name}, aapka {ascSign} Lagna aapko ek aise vyakti banata hai jisme janm se hi netatv ki shakti hai. Aap har kaam mein sabse pehle kadam uthate hain — bina zyada soche, seedha action mein aa jaate hain. Aapki personality mein ek magnetic energy hai jo logo ko attract karti hai, aur aap natural taur par doosron ko inspire karne ki kabiliyat rakhte hain. Mangal, jo aapka Lagna Lord hai, aapko ek fighter ki taasir deta hai — obstacles se girte nahi, balki unhe challenge samajh kar todte hain. Aapka {sunSign} Sun aur {moonSign} Moon aapki is fire energy ko aur sharpen karta hai. Kabhi kabhi aap thoda impatient ho jaate hain, lekin yahi speed aapki sabse badi strength bhi hai. Life mein aap woh log hain jo dusron ke sapnon ko reality banaate hain — pehle khud ke liye, phir apne circle ke liye. Aapke andar ek daring quality hai jo rarely milti hai.`,
    advice: `Apni impulsiveness ko discipline se balance karo. Roz subah 10 minute meditation aur ek specific goal set karo din ke liye. Mangal ki energy best results tab deti hai jab direction clear ho.`,
  },

  // ── TAURUS LAGNA ─────────────────────────────────────────────
  {
    id: 'taurus_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Taurus',
    ],
    title: 'The Steadfast Builder — {ascSign} Ascendant',
    description: `{name}, aapka {ascSign} Lagna aapko ek aisi solid aur reliable personality deta hai jo mushkil waqt mein bhi nahi hilti. Shukra, jo aapke Lagna Prabhu hain, aapko ek refined taste dete hain — aap art, music, ya kisi bhi beautiful cheez ke liye naturally draw hote hain. Aapki sabse badi strength hai aapki patience — jab baki sab log give up kar dete hain, tum wahan khade rehte ho aur ultimately jeet jaate ho. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek deep emotional grounding deta hai jo dusron ko stability aur safety feel karata hai. Aap loyal hain, trustworthy hain, aur jab aap kisi se committed ho jaate hain toh life bhar ke liye. Aapka Taurus Lagna aapko financial matters mein bhi ek intuitive edge deta hai — paise ki value aur investment ki samajh naturally aati hai aapko. Kabhi kabhi aap change se darte hain, lekin yahi consistency aapko long term success dilati hai.`,
    advice: `Change ko enemy mat samjho — growth ke liye zaruri hai. Jab bhi kuch naya karne se darna ho, apne aap se poochho: "Kya yeh meri real value hai ya sirf comfort zone?" Shukra ki grace tab milti hai jab tum growth mein beauty dhundho.`,
  },

  // ── GEMINI LAGNA ─────────────────────────────────────────────
  {
    id: 'gemini_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Gemini',
    ],
    title: 'The Versatile Communicator — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aisa mind deta hai jo ek jagah tik hi nahi sakta — aur yeh koi weakness nahi, yeh aapki superpower hai. Budh, jo aapke Lagna Prabhu hain, aapko ek exceptional communicator banate hain. Aap bolte hain toh log sun'te hain, likhte hain toh log padhte hain. Aapki curiosity aur learning speed almost kisi bhi topic mein aapko expert bana sakti hai. {sunSign} Sun ke combination se aapki personality mein ek youthful energy hoti hai jo umra ke saath bhi nahi jaati. Aap doosron ke perspective ko genuinely samajh paate hain — yahi quality aapko ek behtareen mediator, teacher, ya business partner banati hai. Dual nature hoti hai Gemini mein — ek taraf analytical mind, doosri taraf artistic soul. Dono mein balance rakho toh life mein success guaranteed hai. Aapka {moonSign} Moon aapki emotional depth deta hai jo upar se nahi dikhti, andar se mehsoos hoti hai.`,
    advice: `Ek time pe ek cheez pe focus karo — aapki energy scatter hoti hai bahut. Daily journaling shuru karo, aur monthly ek new skill seekhna band karo jab tak pichhli skill 80% master na ho jaye.`,
  },

  // ── CANCER LAGNA ─────────────────────────────────────────────
  {
    id: 'cancer_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Cancer',
    ],
    title: 'The Nurturing Protector — {ascSign} Ascendant',
    description: `{name}, aapka {ascSign} Lagna aapko duniya ke sabse empathetic logon mein se ek banata hai. Chandra, jo aapke Lagna Prabhu hain, aapko ek deep intuition dete hain — aap bina bataye log ka dard feel kar lete hain. Yeh sensitivity aapki sabse badi gift hai. Aap jis bhi circle mein hote hain, wahan emotional anchor ban jaate hain — ghar ho, office ho, ya dost ka group. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek strong domestic instinct deta hai. Aapko deep connections chahiye — surface level relationships se satisfy nahi hote. Creativity bhi naturally aati hai Cancer Lagna mein — art, cooking, music, writing — kuch na kuch form mein expression zaroori hai aapke liye warna aap restless feel karte hain. Aapki memory exceptionally strong hoti hai, especially emotions se related memories — kabhi bhool nahi paate. Aapka intuition almost psychic level ka hota hai — trust karo use, rarely wrong hoga.`,
    advice: `Apni emotional boundaries protect karo — sabka dard absorb karne ki zarurat nahi. Meditation aur moon cycle tracking shuru karo. Purnima ke din reflection karo: "Kahan main overgiving kar raha/rahi hoon?"`,
  },

  // ── LEO LAGNA ────────────────────────────────────────────────
  {
    id: 'leo_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Leo',
    ],
    title: 'The Royal Leader — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek natural royalty deta hai — jab aap room mein enter karte hain, log notice karte hain. Surya, jo aapke Lagna Prabhu hain, aapko ek charisma dete hain jo artificial nahi ho sakta — yeh born hai. Aap leadership mein naturally comfortable hote hain, aur jo log aapko follow karte hain unhe genuinely inspire karte hain, manipulate nahi. {sunSign} Sun ka combination Leo Lagna ke saath aapko double solar energy deta hai — confidence, dignity, aur a deep sense of self. Aapki generosity exceptional hai — dil khol ke dete hain chahe apne paas kam ho. Aap recognition chahte hain, aur yeh koi ego issue nahi — yeh healthy self-worth hai. Jab koi aapki mehnat appreciate nahi karta toh truly hurt hote hain, aur yeh understand karna important hai khud ke liye bhi aur doosron ke liye bhi. Aapka {moonSign} Moon aapko depth deta hai jo aapki Leo persona ke andar chhupi rehti hai.`,
    advice: `Apne inner child ko regularly nurture karo — play, creativity, aur pure joy aapke liye medicine hai. Praise ka hunger thoda kam karo aur self-validation build karo. Jab aap khud se satisfied ho, bahar ka recognition bonus ban jaata hai.`,
  },

  // ── VIRGO LAGNA ──────────────────────────────────────────────
  {
    id: 'virgo_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Virgo',
    ],
    title: 'The Meticulous Perfectionist — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek extraordinary attention to detail deta hai jo doosron ko kabhi notice nahi hoti lekin jo every situation mein difference banata hai. Budh, aapke Lagna Prabhu, aapko ek analytical mind dete hain jo patterns dhundhta hai, systems banata hai, aur chaos mein bhi order laata hai. Aap the person in any room who actually reads the fine print — aur usually saves the group from mistakes. {sunSign} Sun ke saath Virgo Lagna ka combination aapko ek practical dreamer banata hai — bade sapne dekhte hain lekin execution plan bana ke chalte hain. Aapki critique honest hai aur doosron ko better banane ke iraade se aati hai, lekin log kabhi kabhi ise negativity samajhte hain — yeh aapka biggest miscommunication point hai. Service ka bhav naturally strong hai — aap genuinely help karna chahte hain. Health matters mein bhi aap naturally aware hote hain. Aapka {moonSign} Moon aapko ek depth of feeling deta hai jo aap rarely express karte hain lekin deeply feel karte hain.`,
    advice: `"Good enough" ko accept karna seekho — perfection often blocks completion. Ek rule banao: jab koi kaam 85% complete ho, move on karo. Aur apni own mistakes ke saath utna gentle raho jitna doosron ke saath hote ho.`,
  },

  // ── SCORPIO LAGNA ─────────────────────────────────────────────
  {
    id: 'scorpio_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Scorpio',
    ],
    title: 'The Transformative Mystic — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aisi magnetic depth deti hai jo log feel karte hain jab aap paas hote hain — explain nahi kar paate lekin drawn rehte hain. Mangal (aur Ketu), jo aapke Lagna ke karaka hain, aapko ek intense investigative mind dete hain — aap surface par nahi rukते، hamesha truth ke andar jaane ki koshish karte hain. Aap logon ko pehli milne mein hi accurately judge kar lete hain — yeh intuition extraordinary level ki hai. {sunSign} Sun aur {moonSign} Moon ka combination aapko emotional depth deta hai jo rarely dikhata hai lekin her relationship ko profoundly affect karta hai. Aap transformation ke master hain — khud ke bhi aur circumstances ke bhi. Jab zindagi aapko todne ki koshish karti hai, aap reborn hote hain. Secrecy natural hai aapko — trust karna mushkil hai, lekin ek baar jo trust kar lete hain uske liye sab kuch karte hain. Aapki research aur investigation capacity almost supernatural hai.`,
    advice: `Aapka control tendency let go karo — sab kuch control nahi ho sakta, aur yeh anxiety create karta hai. Daily: ek cheez choose karo jis par control release karo. Trust process karo, sirf people ko nahi.`,
  },

  // ── SAGITTARIUS LAGNA ─────────────────────────────────────────
  {
    id: 'sagittarius_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Sagittarius',
    ],
    title: 'The Philosophical Explorer — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aisi freedom-seeking personality deta hai jo boundaries se naturally uncomfortable feel karti hai — physical, mental, ya intellectual koi bhi. Guru, jo aapke Lagna Prabhu hain, aapko ek natural philosopher banate hain — aap "why" questions ke jawab dhundhna kabhi band nahi karte. Aapki optimism almost infectious hai — mushkil situation mein bhi aap possibility dekh lete hain. {sunSign} Sun ke saath Sagittarius Lagna ka combination aapko ek born teacher banata hai — formal ya informal, aap jo jaante hain use share karna chahte hain. Travel, diverse cultures, aur new ideas aapki soul food hain. Aapka vision expansive hai — local nahi, global. Honesty aapki ek prominent quality hai — kabhi kabhi itni direct ki log uncomfortable ho jaate hain, lekin diplomatic dishonesty aapko genuinely distress karta hai. Aapka {moonSign} Moon aapko emotional sensitivity deta hai jo aapki philosophical exterior ke peeche roti hai.`,
    advice: `Ek jagah, ek commitment, ek cheez ko complete karna seekho. Aapka Jupiter nature scattered energy create karta hai — quarterly ek big project choose karo aur baaki sab temporarily park karo jab tak woh complete na ho.`,
  },

  // ── CAPRICORN LAGNA ───────────────────────────────────────────
  {
    id: 'capricorn_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Capricorn',
    ],
    title: 'The Disciplined Achiever — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aisi unshakeable discipline deta hai jis par koi bhi rely kar sakta hai. Shani, jo aapke Lagna Prabhu hain, aapko ek long-term thinker banate hain — aap 5-10 saal baad ka sochte hain jab log kal ke liye plan karte hain. Aapki work ethic legendary hai — jo uthate hain woh poora karte hain, deadline missed karna almost physically uncomfortable lagging hai aapko. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek quiet ambition deta hai jo loudly announce nahi karta lekin consistently deliver karta hai. Age ke saath aap more youthful feel karte hain — yeh Shani ka reverse aging gift hai Makar Lagna walon ko. Aap jo build karte hain woh generations tak chalti hai — whether career, family, business, ya legacy. Responsibility aapko weight nahi lagti — aap naturally capable feel karte hain jab load zyada hota hai. Aapka patience ki power almost superhuman hai.`,
    advice: `Work aur rest ka balance zaruri hai — aap efficiently rest nahi karte aur yeh long term productivity hurt karta hai. Schedule mein "joy time" mandatory add karo, productive activity ki tarah. Shani reward karta hai discipline ko, burnout ko nahi.`,
  },

  // ── AQUARIUS LAGNA ────────────────────────────────────────────
  {
    id: 'aquarius_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Aquarius',
    ],
    title: 'The Visionary Humanitarian — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aisi futuristic thinking deta hai jo aksar current times se 10-20 saal ahead hoti hai. Shani aur Rahu, Aquarius ke co-rulers, aapko ek unique blend of discipline aur rebellious innovation dete hain. Aap conventional wisdom ko naturally question karte hain — not for the sake of rebellion, but because you can genuinely see better possibilities. {sunSign} Sun ka combination aapko ek intellectual leader banata hai — ideas ki duniya mein comfortable hain, large groups mein equally comfortable hain. Aapka humanitarian streak genuine hai — aap world ki problems ko personally feel karte hain aur change karna chahte hain. Closest relationships mein aap deeply caring hote hain lekin express karna mushkil lagta hai — intellectual detachment default mode hai. Aapka {moonSign} Moon aapko ek hidden emotional depth deta hai. Technology, science, philosophy, social innovation — kisi bhi field mein future banane ki kabiliyat hai aapme.`,
    advice: `Emotional vulnerability practice karo — aapke intellectualism ke peeche deep feelings hain jo express nahi hoti aur relationships strain karta hai. Ek trusted person choose karo aur regularly check in karo: "Main actually kaisa feel kar raha/rahi hoon?"`,
  },

  // ── PISCES LAGNA ──────────────────────────────────────────────
  {
    id: 'pisces_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Pisces',
    ],
    title: 'The Intuitive Dreamer — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aise boundless compassion se bhar deta hai jo rarely milta hai — aap genuinely doosron ka dard feel karte hain. Guru, aapke Lagna Prabhu, aapko ek spiritual wisdom dete hain jo age se nahi aati, soul se aati hai. Aapki imagination aur creativity exceptional hai — art, music, writing, healing — kisi bhi expressive field mein extraordinary work kar sakte hain. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek deep intuition deta hai jo facts se behtar hota hai kabhi kabhi — trust it more. Aap easily others' energies absorb karte hain, isliye aapko regularly alone time mein recharge karna zaroori hai warna overwhelmed ho jaate hain. Spiritual matters mein naturally drawn hote hain — rituals, meditation, ya simply nature se connect hona — yeh aapki battery recharge karta hai. Aapka Pisces nature aapko ek healer quality deta hai — log naturally aapke paas aa jaate hain apni problems le kar, aur aap genuinely help kar paate hain.`,
    advice: `Boundaries set karna seekho — aapki compassion kabhi kabhi aapko exploit hone deti hai. "No" ek complete sentence hai. Aur regularly ground karo khud ko — nature walk, cooking, ya koi physical activity jo aapko present moment mein rakhe.`,
  },

  // ── LIBRA LAGNA ───────────────────────────────────────────────
  {
    id: 'libra_lagna',
    weight: 2,
    conditions: [
      ctx => ctx.ascSign === 'Libra',
    ],
    title: 'The Diplomatic Balancer — {ascSign} Ascendant',
    description: `{name}, {ascSign} Lagna aapko ek aisi personality deta hai jo naturally balance aur harmony dhundhti hai — conflict aapko physically uncomfortable karta hai. Shukra, aapke Lagna Prabhu, aapko ek refined aesthetic sense dete hain — aap beauty mein raho toh best perform karte hain. Aapka diplomatic skill extraordinary hai — dono sides ko genuinely sun sakte hain aur fair conclusion tak pahunch sakte hain. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek naturally social being banata hai — relationships aapke liye oxygen jaisi hain, alone time occasionally draining laag sakta hai. Aap naturally fair hain — unfairness aapko genuinely distress karta hai. Indecision aapki acknowledged challenge hai, lekin yeh actually multiple perspectives simultaneously see kar paane ki ability ka side effect hai. Aapki presence calming hai — people feel safer and more heard around you. Partnerships — business ya personal — aapko naturally suit karte hain.`,
    advice: `Decision making practice karo daily: chote decisions mein 2-minute rule lagao — 2 minutes mein decide nahi hua toh flip a coin aur commit karo. Yeh small muscles build karta hai jo bade decisions mein help karta hai.`,
  },

  // ── GAJ KESARI YOGA ───────────────────────────────────────────
  {
    id: 'gaj_kesari',
    weight: 3,
    conditions: [
      ctx => ctx.yogas.includes('GajKesari'),
      ctx => ['Sagittarius','Cancer','Pisces'].includes(ctx.ascSign),
    ],
    title: 'Gaj Kesari Yoga — {ascSign} Lagna: The Wise Leader',
    description: `{name}, aapki kundli mein Gaj Kesari Yoga hai — yeh ek powerful aur rare combination hai jahan Guru (Jupiter) aur Chandra ek doosre se kendra mein hain. Vedic shastra mein yeh yoga wise rulers, respected teachers, aur community leaders ko diya gaya hai. Aapke {ascSign} Lagna ke saath yeh yoga aapko ek exceptional wisdom deta hai jo decisions mein consistently ache results deta hai. Logon ki aapke upar natural trust hoti hai — even strangers aapko reliable feel karte hain pehli milne mein. Aapki memory sharp hai, wisdom age ke saath extraordinary ho jaati hai, aur aap jahan bhi hote hain wahan positivity laate hain. Aapke {sunSign} Sun aur {moonSign} Moon ka blend aapki personality mein warmth aur intelligence dono present rakhta hai jo rarely ek saath milta hai. Gaj Kesari log life mein usually recognition, respect, aur material comfort paate hain — not by luck, but by genuine merit aur consistent right action.`,
    advice: `Apni wisdom share karo — mentoring, teaching, ya writing ke zariye. Guru ka ashirvaad tabhi badhta hai jab aap jo jaante hain use pass on karte hain. Guruvar (Thursday) ko ek young person ya student ki guidance karna aapka Jupiter aur stronger karta hai.`,
  },

  // ── BUDHADITYA YOGA ───────────────────────────────────────────
  {
    id: 'budhaditya',
    weight: 3,
    conditions: [
      ctx => ctx.yogas.includes('Budhaditya'),
    ],
    title: 'Budhaditya Yoga — The Brilliant Communicator',
    description: `{name}, aapki kundli mein ek powerful intellectual yoga hai — Budhaditya Yoga, jahan Surya aur Budh ek hi rashi mein sthit hain. Yeh combination aapko ek extraordinary intelligence deta hai jo sirf academic nahi, practical bhi hai. Aap jo bhi subject pakadte hain, usmein depth of understanding quickly aati hai. Aapki communication skill natural hai — bolne mein bhi aur likhne mein bhi — logon ko aapki baat samajh aati hai aur impact karti hai. {ascSign} Lagna ke saath yeh yoga aapko ek sharp analytical mind deta hai jo problems mein patterns dekhta hai jab doosron ko sirf chaos dikhta hai. Aapka {sunSign} Sun {moonSign} Moon ke saath balance ek unique creative-intellectual blend banata hai. Career mein aap writing, teaching, technology, consulting, law, ya media mein exceptional success pa sakte hain. Doosron ke saath apni thoughts clearly articulate karne ki kabiliyat aapko leader quality deti hai jab bhi aap sochna band karo aur simply bol do.`,
    advice: `Apni intellectual energy ko ek specific mastery mein invest karo — generalist mat raho. Budhaditya yoga tabhi fully bloom karta hai jab aap apni specific niche dhundh lete hain aur usme depth build karte hain.`,
  },

  // ── MARS IN 10th HOUSE ────────────────────────────────────────
  {
    id: 'mars_10th',
    weight: 2,
    conditions: [
      ctx => ctx.p.mars?.house === 10,
    ],
    title: 'Mangal in 10th House — Karmic Warrior in Career',
    description: `{name}, aapka Mangal 10th Ghar (Karma Bhava) mein sthit hai — yeh ek exceptionally powerful position hai career aur public life ke liye. Mangal jo energy deta hai wo direct kaam karne mein aati hai, aur 10th house mein yeh professional world mein visible aur impactful hoti hai. Aap apne career mein aggressive lakin constructive taur par kaam karte hain — competition se nahi darate, balki use fuel ki tarah use karte hain. {ascSign} Lagna ke saath yeh placement aapko ek natural authority figure banata hai — loge naturally aapko leader manta dekhna chahte hain. Aapka {sunSign} Sun aur {moonSign} Moon ka combination aapki personality mein ek drive hai jo rarely relaxes — yeh aapka asset bhi hai aur kabhi kabhi stress source bhi. Mars in 10th log often military, police, surgery, engineering, sports, politics, ya entrepreneurship mein exceptional success paate hain. Ek important baat: anger management is crucial — 10th house Mars ka outburst public mein visible hota hai aur reputation damage kar sakta hai.`,
    advice: `Physical exercise daily karo — Mangal ki energy body se nikaalna zaroori hai warna excessive stress ya anger accumulate hoti hai. Martial arts, running, ya weight training — kuch bhi jo intensity allow kare safely. Career mein leadership roles accept karo without hesitation.`,
  },

  // ── SATURN IN 7th HOUSE ───────────────────────────────────────
  {
    id: 'saturn_7th',
    weight: 2,
    conditions: [
      ctx => ctx.p.saturn?.house === 7,
    ],
    title: 'Shani in 7th House — Karmic Partnerships',
    description: `{name}, aapka Shani 7th Ghar (Vivah aur Partnership Bhava) mein sthit hai — yeh ek intense position hai jo relationships mein seriousness aur deep karmic lessons laata hai. Aap relationships mein rush nahi karte — aur yeh actually wise hai. Partnership ke baare mein aap jo caution feel karte hain woh fear nahi, wisdom hai. Shani 7th house walon ko usually late marriage ya delayed serious commitment milta hai, lekin jab milta hai toh typically long-lasting aur mature hota hai. Aapka {ascSign} Lagna aur {sunSign} Sun ka combination suggest karta hai ki partnership mein aap ek reliable, committed partner bante hain jo responsibilities seriously lete hain. Aapka {moonSign} Moon emotional depth deta hai jo surface par nahi dikhta. Important: 7th house Shani business partnerships mein bhi caution suggest karta hai — written agreements hamesha karo, trust aur documents dono zaroori hain. Life mein aapke sabse bade teacher aapke partners honge — romantic ya business.`,
    advice: `Partnership decisions mein time lo — Shani deliberate process ko reward karta hai. 2-3 saal ke relationship ke baad hi long-term decisions lo. Business partnership mein lawyer se agreement zaroor banwao chahe kitna bhi close hो.`,
  },

  // ── JUPITER IN 1st HOUSE ──────────────────────────────────────
  {
    id: 'jupiter_1st',
    weight: 2,
    conditions: [
      ctx => ctx.p.jupiter?.house === 1,
    ],
    title: 'Guru in Lagna — The Blessed Personality',
    description: `{name}, Guru 1st Ghar mein — yeh ek divine blessing hai jo aapki poori personality mein ek luminous quality add karta hai. Log aapki presence mein naturally better feel karte hain — inspired, hopeful, ya simply at ease. Yeh coincidence nahi, Jupiter's grace directly aapki aura ko touch karta hai. Aap naturally generous hain, optimistic hain, aur life mein opportunities create karna jaante hain jab dusron ko sirf obstacles dikh rahe hote hain. {ascSign} Lagna ke saath 1st house Jupiter aapko ek philosophical aur wise personality deta hai jo age ke saath aur grow karti hai. Physically bhi 1st house Jupiter weight management mein thodi challenge de sakta hai — lekin yeh healthy lifestyle se easily balance hoti hai. Aapki teaching ability natural hai — formally ya informally, log aapse seekhte hain. {sunSign} Sun aur {moonSign} Moon ka combination aapko ek warm, expansive personality deta hai. Luck genuinely aapke saath hota hai — isliye grateful raho aur give back karo.`,
    advice: `Aapki natural optimism kabhi kabhi overconfidence mein convert ho sakti hai — reality check regular karo. Ek trusted person rakho jo honestly feedback de sake. Jupiter ka anugraha humesha dhyan se aur judgment ke saath rehna chahiye.`,
  },

  // ── MOON EXALTED ──────────────────────────────────────────────
  {
    id: 'moon_exalted',
    weight: 2,
    conditions: [
      ctx => ctx.p.moon?.dignity === 'exalted',
    ],
    title: 'Uchcha Chandra — The Emotionally Gifted Soul',
    description: `{name}, aapka Chandra Vrishabh Rashi mein uchcha (exalted) hai — yeh ek exceptional position hai jo aapko ek naturally stable, nurturing, aur emotionally intelligent personality deta hai. Exalted Moon ka matlab hai ki aapki emotional depth aur intuition sabse pure form mein hai. Log aapke paas naturally emotional support dhundh ke aate hain — aap genuinely empathize kar paate hain bina overwhelmed huye. {ascSign} Lagna ke saath exalted Moon aapko ek grounded yet deeply sensitive combination deta hai. Aapki memory — especially emotional aur sensory — exceptional hai. Art, music, food, nature, ya koi bhi sensory experience aapko deeply move karta hai. {sunSign} Sun aap mein ek purposeful direction add karta hai jo uchcha Chandra ki receptivity ko productive channel mein dalta hai. Aapki intuition regarding people aur situations almost never wrong hoti — trust karo use, even when logic seems to contradict. Financial security aur material comfort uchcha Chandra walon ko usually natural taur par aata hai life mein.`,
    advice: `Apni extraordinary empathy ka regular recharge karo — nature walk, creative expression, ya spiritual practice se. Uchcha Chandra ki energy tab best kaam karti hai jab receptive vessel clean hoti hai.`,
  },

  // ── DEFAULT FALLBACK ──────────────────────────────────────────
  {
    id: 'default_personality',
    weight: 0,
    conditions: [],
    title: 'Your Celestial Blueprint — {sunSign} Sun, {moonSign} Moon',
    description: `{name}, aapki kundli mein {sunSign} Surya, {moonSign} Chandra, aur {ascSign} Lagna ka combination aapko ek unique aur multi-layered personality deta hai. {ascSign} Lagna aapki outer personality banata hai — pehli impression jab log aapko dekhte hain. {sunSign} Sun aapka core self hai — jo aap actually ho andar se. {moonSign} Moon aapki emotional nature hai — how you feel, react, aur intuitively respond. Teen ka yeh combination rarely same hota hai do logon mein, isliye aap genuinely unique hain. Aapka {nakshatra} Nakshatra, jiske lord {nakshatraLord} hain, aapki personality mein ek specific quality add karta hai jo ek tareh se aapka cosmic signature hai. Current {mahadasha} Mahadasha ka bhi personality par effect hai — yeh influence {dashaEndYear} tak rahega. Life Path {lp} aapke karmic purpose ko represent karta hai aur aapki personality mein ek underlying motivation create karta hai jo surface par hamesha visible nahi hoti lekin consistently guide karti hai.`,
    advice: `Apni teen planetary natures — Sun, Moon, aur Ascendant — ko consciously integrate karo. Jab teeno align hote hain, personality ka authentic expression hota hai jo success attract karta hai.`,
  },
];
