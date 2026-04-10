// ═══════════════════════════════════════════════════════════════
// AstroVerse — Personality Templates  (Bilingual v3)
// Har template mein dono hain: hi{} aur en{}
// engine.js ka fillTemplate() lang ke hisaab se sahi version pick karta hai
// ═══════════════════════════════════════════════════════════════

export const personalityTemplates = [

  // ── ARIES LAGNA ──────────────────────────────────────────────
  {
    id: 'aries_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Aries' ],
    hi: {
      title: '🔥 मेष लग्न — जन्मजात योद्धा',
      description: `{name}, आपका मेष लग्न आपको एक ऐसी शक्ति देता है जो बहुत कम लोगों में होती है।

✨ आपकी खासियतें —
• आप किसी भी काम में सबसे पहले कदम उठाते हैं — बिना ज़्यादा सोचे, सीधे एक्शन में
• कोई भी बाधा आए, आप उसे चुनौती समझकर तोड़ते हैं — हार मानना आपकी फ़ितरत नहीं
• लोग आपकी energy से naturally attract होते हैं — आप inspire करते हैं, डराते नहीं
• मंगल आपका लग्नेश है — यही आपको एक fighter की तासीर देता है

🌟 आपका व्यक्तित्व —
आपका {sunSign} सूर्य और {moonSign} चंद्र मिलकर आपकी fire energy को और पैना करते हैं। आप उन लोगों में से हैं जो दूसरों के सपनों को भी reality बनाते हैं।`,
      advice: `💡 आपके लिए सुझाव —
• रोज़ सुबह 10 मिनट meditation करें और दिन का एक specific goal तय करें
• अपनी impulsiveness को discipline से balance करें
• मंगल की energy तब best results देती है जब direction एकदम clear हो`,
    },
    en: {
      title: '🔥 Aries Ascendant — Born Warrior',
      description: `{name}, your Aries Ascendant gives you a rare and powerful energy that few people possess.

✨ Your strengths —
• You take the first step in any situation — no overthinking, straight to action
• No obstacle can stop you — you see challenges as things to break, not reasons to quit
• People are naturally drawn to your energy — you inspire, not intimidate
• Mars is your Lagna Lord — it gives you the spirit of a true fighter

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon sharpen your fire energy further. You are the kind of person who turns other people's dreams into reality — starting with your own.`,
      advice: `💡 Advice for you —
• Meditate 10 minutes every morning and set one specific goal for the day
• Balance your impulsiveness with discipline
• Mars energy gives best results when your direction is crystal clear`,
    },
  },

  // ── TAURUS LAGNA ─────────────────────────────────────────────
  {
    id: 'taurus_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Taurus' ],
    hi: {
      title: '🌿 वृषभ लग्न — अटल निर्माता',
      description: `{name}, आपका वृषभ लग्न आपको एक ऐसी solid और reliable personality देता है जो मुश्किल वक्त में भी नहीं हिलती।

✨ आपकी खासियतें —
• शुक्र आपके लग्नेश हैं — art, music और beauty की ओर naturally खिंचाव है
• आपकी सबसे बड़ी ताकत है आपका patience — जब बाकी सब छोड़ देते हैं, आप खड़े रहते हो
• आप loyal हैं, trustworthy हैं — एक बार committed हो जाते हैं तो life भर के लिए
• पैसे की value और investment की समझ naturally आती है आपको

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य और {moonSign} चंद्र का combination आपको एक deep emotional grounding देता है।`,
      advice: `💡 आपके लिए सुझाव —
• Change को दुश्मन मत समझो — growth के लिए ज़रूरी है
• जब भी कुछ नया करने से डर लगे पूछो: "क्या यह मेरी real value है या सिर्फ comfort zone?"
• शुक्र की कृपा तब मिलती है जब आप growth में भी beauty ढूंढते हो`,
    },
    en: {
      title: '🌿 Taurus Ascendant — The Unshakeable Builder',
      description: `{name}, your Taurus Ascendant gives you a solid and reliable personality that doesn't waver even in tough times.

✨ Your strengths —
• Venus is your Lagna Lord — you have a natural pull toward art, music, and beauty
• Your greatest strength is patience — when everyone else gives up, you stay standing
• You are loyal and trustworthy — once committed, it's for life
• You have a natural instinct for money's value and smart investment

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon give you a deep emotional grounding that makes others feel stable and safe around you.`,
      advice: `💡 Advice for you —
• Don't treat change as your enemy — it's essential for growth
• When something new feels scary, ask: "Is this my real value or just my comfort zone?"
• Venus's grace comes when you find beauty even in growth`,
    },
  },

  // ── GEMINI LAGNA ─────────────────────────────────────────────
  {
    id: 'gemini_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Gemini' ],
    hi: {
      title: '💨 मिथुन लग्न — बहुमुखी संचारक',
      description: `{name}, मिथुन लग्न आपको एक ऐसा mind देता है जो एक जगह टिक ही नहीं सकता — और यह कोई कमज़ोरी नहीं, यह आपकी superpower है।

✨ आपकी खासियतें —
• बुध आपके लग्नेश हैं — आप एक exceptional communicator हैं
• किसी भी topic में learning speed almost extraordinary है
• दोनों sides को genuinely समझ पाते हैं — mediator, teacher, business partner के रूप में बेजोड़
• Gemini की dual nature: एक तरफ analytical mind, दूसरी तरफ artistic soul

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य के combination से आपकी personality में एक youthful energy होती है जो उम्र के साथ भी नहीं जाती।`,
      advice: `💡 आपके लिए सुझाव —
• एक time पर एक चीज़ पर focus करो — energy scatter होती है बहुत
• Daily journaling शुरू करो
• Monthly एक नई skill सीखना बंद करो जब तक पिछली skill 80% master न हो जाए`,
    },
    en: {
      title: '💨 Gemini Ascendant — The Versatile Communicator',
      description: `{name}, your Gemini Ascendant gives you a mind that simply cannot stay in one place — and that's not a weakness, it's your superpower.

✨ Your strengths —
• Mercury is your Lagna Lord — you are an exceptional communicator
• Your learning speed in any topic is almost extraordinary
• You can genuinely understand both sides — you're a natural mediator, teacher, and business partner
• Gemini's dual nature: analytical mind on one side, artistic soul on the other

🌟 Your personality —
Your {sunSign} Sun gives your personality a youthful energy that doesn't fade with age.`,
      advice: `💡 Advice for you —
• Focus on one thing at a time — your energy tends to scatter
• Start daily journaling
• Stop learning a new skill every month until the previous one is 80% mastered`,
    },
  },

  // ── CANCER LAGNA ─────────────────────────────────────────────
  {
    id: 'cancer_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Cancer' ],
    hi: {
      title: '🌙 कर्क लग्न — भावनाओं का रक्षक',
      description: `{name}, आपका कर्क लग्न आपको दुनिया के सबसे empathetic लोगों में से एक बनाता है।

✨ आपकी खासियतें —
• चंद्र आपके लग्नेश हैं — बिना बताए लोगों का दर्द feel कर लेते हैं
• आप जिस भी circle में होते हैं, वहाँ emotional anchor बन जाते हैं
• Memory exceptionally strong है — especially emotions से जुड़ी यादें
• Intuition almost psychic level की है — उस पर trust करो, rarely wrong होता है

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य और {moonSign} चंद्र का combination आपको एक strong domestic instinct देता है। Art, cooking, music, writing — कुछ न कुछ creative expression ज़रूरी है।`,
      advice: `💡 आपके लिए सुझाव —
• Emotional boundaries protect करो — सबका दर्द absorb करने की ज़रूरत नहीं
• Meditation और moon cycle tracking शुरू करो
• पूर्णिमा के दिन reflection करो: "कहाँ मैं overgiving कर रहा/रही हूँ?"`,
    },
    en: {
      title: '🌙 Cancer Ascendant — The Emotional Guardian',
      description: `{name}, your Cancer Ascendant makes you one of the most empathetic people in the world.

✨ Your strengths —
• The Moon is your Lagna Lord — you feel people's pain before they even say a word
• Wherever you go, you become the emotional anchor of the group
• Your memory is exceptionally strong — especially emotional memories
• Your intuition is almost psychic — trust it, it's rarely wrong

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon give you a strong domestic instinct. Art, cooking, music, writing — some form of creative expression is essential for you.`,
      advice: `💡 Advice for you —
• Protect your emotional boundaries — you don't need to absorb everyone's pain
• Start meditation and track moon cycles
• On full moon nights, reflect: "Where am I overgiving?"`,
    },
  },

  // ── LEO LAGNA ────────────────────────────────────────────────
  {
    id: 'leo_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Leo' ],
    hi: {
      title: '👑 सिंह लग्न — जन्मजात नेता',
      description: `{name}, सिंह लग्न आपको एक natural royalty देता है — जब आप room में enter करते हैं, लोग notice करते हैं।

✨ आपकी खासियतें —
• सूर्य आपके लग्नेश हैं — एक ऐसा charisma जो artificial नहीं हो सकता
• Leadership में naturally comfortable हैं — inspire करते हैं, manipulate नहीं
• Generosity exceptional है — दिल खोलकर देते हैं चाहे अपने पास कम हो
• Recognition चाहते हैं — और यह कोई ego issue नहीं, यह healthy self-worth है

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य का combination Leo Lagna के साथ आपको double solar energy देता है। {moonSign} चंद्र वो depth देता है जो आपकी Leo persona के अंदर छुपी रहती है।`,
      advice: `💡 आपके लिए सुझाव —
• अपने inner child को regularly nurture करो — play, creativity और pure joy medicine है
• Praise का hunger थोड़ा कम करो और self-validation build करो
• जब आप खुद से satisfied हों, बाहर का recognition bonus बन जाता है`,
    },
    en: {
      title: '👑 Leo Ascendant — Born to Lead',
      description: `{name}, your Leo Ascendant gives you a natural royalty — when you walk into a room, people notice.

✨ Your strengths —
• The Sun is your Lagna Lord — a charisma that cannot be faked, it's born
• You are naturally comfortable in leadership — you inspire, not manipulate
• Your generosity is exceptional — you give with an open heart even when you have less
• You want recognition — and that's not ego, it's healthy self-worth

🌟 Your personality —
Your {sunSign} Sun combined with Leo Ascendant gives you double solar energy. Your {moonSign} Moon gives you a hidden depth inside your Leo persona.`,
      advice: `💡 Advice for you —
• Nurture your inner child regularly — play, creativity, and pure joy are your medicine
• Reduce your hunger for external praise and build self-validation instead
• When you're satisfied with yourself, outside recognition becomes a bonus`,
    },
  },

  // ── VIRGO LAGNA ──────────────────────────────────────────────
  {
    id: 'virgo_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Virgo' ],
    hi: {
      title: '🌾 कन्या लग्न — विश्लेषक और परफेक्शनिस्ट',
      description: `{name}, कन्या लग्न आपको एक extraordinary attention to detail देता है जो दूसरों को कभी notice नहीं होती।

✨ आपकी खासियतें —
• बुध आपके लग्नेश हैं — patterns ढूंढना, systems बनाना, chaos में order लाना naturally आता है
• आप वो इंसान हैं जो actually fine print पढ़ता है — और usually सबको mistakes से बचाता है
• Service का भाव naturally strong है — genuinely help करना चाहते हैं
• Critique honest है और दूसरों को better बनाने के इरादे से आती है

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य के साथ कन्या Lagna आपको एक practical dreamer बनाता है। {moonSign} चंद्र एक depth of feeling देता है जो आप rarely express करते हैं।`,
      advice: `💡 आपके लिए सुझाव —
• "Good enough" को accept करना सीखो — perfection often blocks completion
• एक rule बनाओ: जब कोई काम 85% complete हो, move on करो
• अपनी own mistakes के साथ उतना gentle रहो जितना दूसरों के साथ होते हो`,
    },
    en: {
      title: '🌾 Virgo Ascendant — The Meticulous Perfectionist',
      description: `{name}, your Virgo Ascendant gives you an extraordinary attention to detail that others simply don't notice.

✨ Your strengths —
• Mercury is your Lagna Lord — finding patterns, building systems, bringing order to chaos comes naturally
• You are the person in any room who actually reads the fine print — and usually saves everyone from mistakes
• Your instinct to serve is deeply genuine — you truly want to help
• Your critique is honest and comes from a place of wanting others to improve

🌟 Your personality —
Your {sunSign} Sun with Virgo Ascendant makes you a practical dreamer. Your {moonSign} Moon gives you a depth of feeling that you rarely express but deeply experience.`,
      advice: `💡 Advice for you —
• Learn to accept "good enough" — perfectionism often blocks completion
• Make a rule: when a task is 85% done, move on
• Be as gentle with your own mistakes as you are with others'`,
    },
  },

  // ── SCORPIO LAGNA ─────────────────────────────────────────────
  {
    id: 'scorpio_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Scorpio' ],
    hi: {
      title: '🦂 वृश्चिक लग्न — रहस्यमय परिवर्तक',
      description: `{name}, वृश्चिक लग्न आपको एक ऐसी magnetic depth देती है जो लोग feel करते हैं जब आप पास होते हैं।

✨ आपकी खासियतें —
• मंगल और केतु के influence से आपको एक intense investigative mind मिला है
• लोगों को पहली मुलाकात में ही accurately judge कर लेते हैं
• Transformation के master हैं — खुद के भी और circumstances के भी
• एक बार जिसे trust कर लेते हैं, उसके लिए सब कुछ करते हैं

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य और {moonSign} चंद्र का combination आपको emotional depth देता है। जब ज़िंदगी आपको तोड़ने की कोशिश करती है, आप reborn होते हैं।`,
      advice: `💡 आपके लिए सुझाव —
• Control tendency को let go करो — सब कुछ control नहीं हो सकता
• Daily: एक चीज़ choose करो जिस पर control release करो
• Trust process करो, सिर्फ लोगों को नहीं`,
    },
    en: {
      title: '🦂 Scorpio Ascendant — The Transformative Mystic',
      description: `{name}, your Scorpio Ascendant gives you a magnetic depth that people feel when you're near — they can't explain it, but they feel it.

✨ Your strengths —
• Mars and Ketu's influence gives you an intense investigative mind
• You can accurately judge people at the very first meeting
• You are a master of transformation — of yourself and of circumstances
• Once you trust someone, you do everything for them

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon give you an emotional depth that rarely shows but profoundly shapes every relationship. When life tries to break you, you are reborn.`,
      advice: `💡 Advice for you —
• Let go of your control tendency — not everything can be controlled, and that's okay
• Daily practice: choose one thing to release control over
• Trust the process, not just people`,
    },
  },

  // ── SAGITTARIUS LAGNA ─────────────────────────────────────────
  {
    id: 'sagittarius_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Sagittarius' ],
    hi: {
      title: '🏹 धनु लग्न — दार्शनिक यात्री',
      description: `{name}, धनु लग्न आपको एक ऐसी freedom-seeking personality देता है जो boundaries से naturally uncomfortable feel करती है।

✨ आपकी खासियतें —
• गुरु आपके लग्नेश हैं — आप एक natural philosopher हैं
• Optimism almost infectious है — मुश्किल situation में भी possibility देख लेते हैं
• Travel, diverse cultures और new ideas आपकी soul food हैं
• Honesty इतनी prominent है कि कभी-कभी लोग uncomfortable हो जाते हैं

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य के साथ धनु Lagna आपको एक born teacher बनाता है। {moonSign} चंद्र आपको emotional sensitivity देता है जो आपकी philosophical exterior के पीछे रहती है।`,
      advice: `💡 आपके लिए सुझाव —
• एक जगह, एक commitment, एक चीज़ को complete करना सीखो
• Quarterly एक big project choose करो और बाकी सब temporarily park करो
• Jupiter की scattered energy को channel करना ही असली success है`,
    },
    en: {
      title: '🏹 Sagittarius Ascendant — The Philosophical Explorer',
      description: `{name}, your Sagittarius Ascendant gives you a freedom-seeking personality that is naturally uncomfortable with boundaries of any kind.

✨ Your strengths —
• Jupiter is your Lagna Lord — you are a natural philosopher who never stops asking "why"
• Your optimism is almost infectious — you can see possibility even in difficult situations
• Travel, diverse cultures, and new ideas are your soul food
• Your honesty is so prominent it sometimes makes others uncomfortable

🌟 Your personality —
Your {sunSign} Sun with Sagittarius Ascendant makes you a born teacher. Your {moonSign} Moon gives you emotional sensitivity hidden behind your philosophical exterior.`,
      advice: `💡 Advice for you —
• Learn to commit to one place, one promise, and one thing at a time
• Choose one big project per quarter and park everything else
• Channeling Jupiter's scattered energy is the real path to success`,
    },
  },

  // ── CAPRICORN LAGNA ───────────────────────────────────────────
  {
    id: 'capricorn_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Capricorn' ],
    hi: {
      title: '🏔️ मकर लग्न — अनुशासित उपलब्धि',
      description: `{name}, मकर लग्न आपको एक ऐसी unshakeable discipline देता है जिस पर कोई भी rely कर सकता है।

✨ आपकी खासियतें —
• शनि आपके लग्नेश हैं — आप 5-10 साल बाद का सोचते हैं जब लोग कल के लिए plan करते हैं
• Work ethic legendary है — जो उठाते हैं वो पूरा करते हैं
• उम्र के साथ आप more youthful feel करते हैं — यह शनि का reverse aging gift है
• जो build करते हैं वो generations तक चलती है

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य और {moonSign} चंद्र का combination आपको एक quiet ambition देता है जो loudly announce नहीं करता लेकिन consistently deliver करता है।`,
      advice: `💡 आपके लिए सुझाव —
• Work और rest का balance ज़रूरी है — आप efficiently rest नहीं करते
• Schedule में "joy time" mandatory add करो
• शनि discipline को reward करता है, burnout को नहीं`,
    },
    en: {
      title: '🏔️ Capricorn Ascendant — The Disciplined Achiever',
      description: `{name}, your Capricorn Ascendant gives you an unshakeable discipline that anyone can rely on.

✨ Your strengths —
• Saturn is your Lagna Lord — you think 5-10 years ahead when others plan for tomorrow
• Your work ethic is legendary — what you pick up, you complete
• You feel more youthful with age — this is Saturn's reverse aging gift to Capricorn Ascendants
• What you build lasts for generations

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon give you a quiet ambition that doesn't announce itself loudly but consistently delivers.`,
      advice: `💡 Advice for you —
• Balance work with rest — you don't rest efficiently and it hurts long-term productivity
• Mandatorily add "joy time" to your schedule, treat it like a productive task
• Saturn rewards discipline, not burnout`,
    },
  },

  // ── AQUARIUS LAGNA ────────────────────────────────────────────
  {
    id: 'aquarius_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Aquarius' ],
    hi: {
      title: '🌊 कुम्भ लग्न — दूरदर्शी मानवतावादी',
      description: `{name}, कुम्भ लग्न आपको एक ऐसी futuristic thinking देता है जो अक्सर current times से 10-20 साल ahead होती है।

✨ आपकी खासियतें —
• शनि और राहु के co-rulers — discipline और rebellious innovation का unique blend
• Conventional wisdom को naturally question करते हैं — rebellion के लिए नहीं, बेहतर possibilities देखने के लिए
• Humanitarian streak genuine है — दुनिया की problems को personally feel करते हैं
• Technology, science, philosophy में future बनाने की क्षमता है

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य का combination आपको एक intellectual leader बनाता है। {moonSign} चंद्र एक hidden emotional depth देता है।`,
      advice: `💡 आपके लिए सुझाव —
• Emotional vulnerability practice करो
• एक trusted person choose करो: "मैं actually कैसा feel कर रहा/रही हूँ?"
• Close relationships में intellectual detachment को थोड़ा कम करो`,
    },
    en: {
      title: '🌊 Aquarius Ascendant — The Visionary Humanitarian',
      description: `{name}, your Aquarius Ascendant gives you a futuristic way of thinking that is often 10-20 years ahead of the times.

✨ Your strengths —
• Saturn and Rahu as co-rulers give you a unique blend of discipline and rebellious innovation
• You question conventional wisdom not for rebellion's sake, but because you genuinely see better possibilities
• Your humanitarian streak is genuine — you personally feel the world's problems
• You have the capacity to build the future in technology, science, or philosophy

🌟 Your personality —
Your {sunSign} Sun makes you an intellectual leader. Your {moonSign} Moon gives you a hidden emotional depth.`,
      advice: `💡 Advice for you —
• Practice emotional vulnerability — there are deep feelings behind your intellectualism
• Choose one trusted person and regularly check in: "How am I actually feeling?"
• Reduce intellectual detachment a little in your closest relationships`,
    },
  },

  // ── PISCES LAGNA ──────────────────────────────────────────────
  {
    id: 'pisces_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Pisces' ],
    hi: {
      title: '🐠 मीन लग्न — सहज स्वप्नदृष्टा',
      description: `{name}, मीन लग्न आपको एक ऐसे boundless compassion से भर देता है जो rarely मिलता है।

✨ आपकी खासियतें —
• गुरु आपके लग्नेश हैं — एक spiritual wisdom जो उम्र से नहीं, soul से आती है
• Imagination और creativity exceptional है — art, music, writing, healing में extraordinary
• दूसरों की energies easily absorb करते हैं — alone time में recharge ज़रूरी है
• लोग naturally आपके पास अपनी problems लेकर आते हैं — आप genuinely help कर पाते हैं

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य और {moonSign} चंद्र का combination आपको एक deep intuition देता है। Spiritual matters में naturally drawn होते हैं।`,
      advice: `💡 आपके लिए सुझाव —
• Boundaries set करना सीखो — "No" एक complete sentence है
• Regularly ground करो खुद को — nature walk, cooking या कोई physical activity
• अपनी compassion की वजह से exploit न होने दो`,
    },
    en: {
      title: '🐠 Pisces Ascendant — The Intuitive Dreamer',
      description: `{name}, your Pisces Ascendant fills you with a boundless compassion that is rarely found.

✨ Your strengths —
• Jupiter is your Lagna Lord — a spiritual wisdom that comes not from age, but from the soul
• Your imagination and creativity are exceptional — extraordinary potential in art, music, writing, healing
• You easily absorb others' energies — you must regularly recharge with alone time
• People naturally come to you with their problems — and you genuinely help them

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon give you a deep intuition that is sometimes better than facts — trust it more.`,
      advice: `💡 Advice for you —
• Learn to set boundaries — "No" is a complete sentence
• Regularly ground yourself — nature walks, cooking, or any physical activity
• Don't let your compassion be taken advantage of`,
    },
  },

  // ── LIBRA LAGNA ───────────────────────────────────────────────
  {
    id: 'libra_lagna',
    weight: 2,
    conditions: [ ctx => ctx.ascSign === 'Libra' ],
    hi: {
      title: '⚖️ तुला लग्न — कूटनीतिक संतुलनकर्ता',
      description: `{name}, तुला लग्न आपको एक ऐसी personality देता है जो naturally balance और harmony ढूंढती है।

✨ आपकी खासियतें —
• शुक्र आपके लग्नेश हैं — एक refined aesthetic sense, beauty में रहो तो best perform करते हो
• Diplomatic skill extraordinary है — दोनों sides को genuinely सुन सकते हैं
• आप naturally fair हैं — unfairness आपको genuinely distress करती है
• Partnerships — business या personal — आपको naturally suit करती हैं

🌟 आपका व्यक्तित्व —
{sunSign} सूर्य और {moonSign} चंद्र का combination आपको एक naturally social being बनाता है। Indecision आपकी challenge है — लेकिन यह multiple perspectives एक साथ देखने की ability का side effect है।`,
      advice: `💡 आपके लिए सुझाव —
• Decision making daily practice करो: छोटे decisions में 2-minute rule लगाओ
• 2 minutes में decide नहीं हुआ तो coin flip करो और commit करो
• यह small muscles build करता है जो बड़े decisions में help करता है`,
    },
    en: {
      title: '⚖️ Libra Ascendant — The Diplomatic Balancer',
      description: `{name}, your Libra Ascendant gives you a personality that naturally seeks balance and harmony in everything.

✨ Your strengths —
• Venus is your Lagna Lord — a refined aesthetic sense, you perform best in beautiful environments
• Your diplomatic skill is extraordinary — you can genuinely listen to both sides
• You are naturally fair — unfairness genuinely distresses you
• Partnerships — business or personal — suit you naturally

🌟 Your personality —
Your {sunSign} Sun and {moonSign} Moon make you a naturally social being. Indecision is your acknowledged challenge — but it's actually a side effect of your ability to see multiple perspectives simultaneously.`,
      advice: `💡 Advice for you —
• Practice decision-making daily: apply the 2-minute rule for small decisions
• If you can't decide in 2 minutes, flip a coin and commit
• This builds the small muscles that help with big decisions`,
    },
  },

  // ── GAJ KESARI YOGA ───────────────────────────────────────────
  {
    id: 'gaj_kesari',
    weight: 3,
    conditions: [
      ctx => ctx.yogas.includes('GajKesari'),
      ctx => ['Sagittarius','Cancer','Pisces'].includes(ctx.ascSign),
    ],
    hi: {
      title: '🐘 गज केसरी योग — बुद्धिमान नेता',
      description: `{name}, आपकी कुंडली में गज केसरी योग है — गुरु और चंद्र एक दूसरे से केंद्र में हैं।

✨ यह योग क्या देता है —
• Wise rulers और respected teachers का yoga है — यह आपके लिए है
• लोगों की आप पर natural trust होती है — पहली मुलाकात में ही reliable feel होते हैं
• Memory sharp है, wisdom उम्र के साथ extraordinary होती जाती है
• जहाँ भी होते हैं, वहाँ positivity लाते हैं

🌟 आपकी विशेषता —
{ascSign} लग्न के साथ यह yoga exceptional decisions लेने की wisdom देता है। {sunSign} सूर्य और {moonSign} चंद्र का blend warmth और intelligence दोनों एक साथ देता है।`,
      advice: `💡 आपके लिए सुझाव —
• अपनी wisdom share करो — mentoring, teaching या writing के ज़रिए
• गुरु का आशीर्वाद तभी बढ़ता है जब आप जो जानते हैं उसे pass on करते हैं
• गुरुवार को एक young person को guidance देना Jupiter को और strong करता है`,
    },
    en: {
      title: '🐘 Gaj Kesari Yoga — The Wise Leader',
      description: `{name}, your chart has Gaj Kesari Yoga — Jupiter and Moon are in kendra from each other.

✨ What this yoga gives you —
• This is the yoga of wise rulers and respected teachers — it belongs to you
• People naturally trust you — they feel you're reliable at first meeting
• Your memory is sharp, and your wisdom grows extraordinary with age
• Wherever you go, you bring positivity

🌟 Your special quality —
With your {ascSign} Ascendant, this yoga gives you exceptional decision-making wisdom. Your {sunSign} Sun and {moonSign} Moon blend warmth and intelligence — a combination that's rarely found together.`,
      advice: `💡 Advice for you —
• Share your wisdom — through mentoring, teaching, or writing
• Jupiter's grace grows only when you pass on what you know
• Guiding one young person on Thursdays makes your Jupiter even stronger`,
    },
  },

  // ── BUDHADITYA YOGA ───────────────────────────────────────────
  {
    id: 'budhaditya',
    weight: 3,
    conditions: [ ctx => ctx.yogas.includes('Budhaditya') ],
    hi: {
      title: '☀️ बुधादित्य योग — तेज़ बुद्धि, sharp ज़बान',
      description: `{name}, आपकी कुंडली में बुधादित्य योग है — सूर्य और बुध एक ही राशि में।

✨ यह योग क्या देता है —
• जो भी subject पकड़ते हैं उसमें depth of understanding quickly आती है
• Communication skill natural है — बोलने और लिखने दोनों में
• Problems में patterns देखते हैं जब दूसरों को सिर्फ chaos दिखता है
• Writing, teaching, technology, consulting, law, media में exceptional success possible है

🌟 आपका advantage —
{ascSign} लग्न के साथ यह yoga एक sharp analytical mind देता है। {sunSign} सूर्य और {moonSign} चंद्र का balance एक unique creative-intellectual blend बनाता है।`,
      advice: `💡 आपके लिए सुझाव —
• Intellectual energy को एक specific mastery में invest करो — generalist मत रहो
• LinkedIn, blog या newsletter शुरू करो
• Public speaking में invest करो — यह yoga तब fully bloom करता है`,
    },
    en: {
      title: '☀️ Budhaditya Yoga — Sharp Mind, Sharp Words',
      description: `{name}, your chart has Budhaditya Yoga — Sun and Mercury in the same sign.

✨ What this yoga gives you —
• Whatever subject you pick up, depth of understanding comes quickly
• Your communication skill is natural — both in speaking and writing
• You see patterns in problems when others only see chaos
• Exceptional success potential in writing, teaching, technology, consulting, law, and media

🌟 Your advantage —
With your {ascSign} Ascendant, this yoga gives you a sharp analytical mind. Your {sunSign} Sun and {moonSign} Moon create a unique creative-intellectual blend.`,
      advice: `💡 Advice for you —
• Invest your intellectual energy into one specific mastery — don't stay a generalist
• Start a LinkedIn, blog, or newsletter — Mercury energy amplifies in written form
• Invest in public speaking — this yoga fully blooms through that channel`,
    },
  },

  // ── MARS IN 10th HOUSE ────────────────────────────────────────
  {
    id: 'mars_10th',
    weight: 2,
    conditions: [ ctx => ctx.p.mars?.house === 10 ],
    hi: {
      title: '⚔️ दशम भाव में मंगल — करियर का योद्धा',
      description: `{name}, आपका मंगल 10वें घर में है — career के लिए एक exceptionally powerful position।

✨ आपकी खासियतें —
• Competition से नहीं डरते, उसे fuel की तरह use करते हैं
• लोग naturally आपको leader मानकर चलना चाहते हैं
• Military, police, surgery, engineering, sports, politics, entrepreneurship में exceptional success possible है
• Pressure में performance better होती है, कम नहीं

⚠️ ध्यान रखें —
Anger management crucial है — 10th house Mars का outburst public में visible होता है और reputation damage कर सकता है।`,
      advice: `💡 आपके लिए सुझाव —
• Daily physical exercise ज़रूरी है — मंगल की energy body से निकालना ज़रूरी है
• Martial arts, running या weight training — कुछ भी जो intensity safely allow करे
• Leadership roles accept करो without hesitation`,
    },
    en: {
      title: '⚔️ Mars in 10th House — The Career Warrior',
      description: `{name}, your Mars is in the 10th house — an exceptionally powerful position for career and public life.

✨ Your strengths —
• You don't fear competition — you use it as fuel
• People naturally want to see you as a leader
• Exceptional success potential in military, police, surgery, engineering, sports, politics, entrepreneurship
• Your performance gets better under pressure, not worse

⚠️ Watch out —
Anger management is crucial — a 10th house Mars outburst is visible publicly and can damage your reputation.`,
      advice: `💡 Advice for you —
• Daily physical exercise is essential — Mars energy must be released through the body
• Martial arts, running, or weight training — anything that safely allows intensity
• Accept leadership roles without hesitation`,
    },
  },

  // ── SATURN IN 7th HOUSE ───────────────────────────────────────
  {
    id: 'saturn_7th',
    weight: 2,
    conditions: [ ctx => ctx.p.saturn?.house === 7 ],
    hi: {
      title: '🪐 सप्तम भाव में शनि — गहरी karmic partnership',
      description: `{name}, आपका शनि 7वें घर में है — relationships में सeriousness और deep karmic lessons।

✨ आपकी खासियतें —
• Relationships में rush नहीं करते — और यह actually wise है
• जो caution feel करते हैं वो fear नहीं, wisdom है
• Late या delayed commitment मिलती है — लेकिन जब मिलती है तो long-lasting और mature होती है
• Life में सबसे बड़े teacher आपके partners होंगे — romantic या business

🌟 आपका pattern —
{ascSign} लग्न और {sunSign} सूर्य suggest करते हैं कि partnership में आप एक reliable, committed partner बनते हैं।`,
      advice: `💡 आपके लिए सुझाव —
• Partnership decisions में time लो — शनि deliberate process को reward करता है
• 2-3 साल के relationship के बाद ही long-term decisions लो
• Business partnership में lawyer से agreement ज़रूर बनवाओ`,
    },
    en: {
      title: '🪐 Saturn in 7th House — Karmic Partnerships',
      description: `{name}, your Saturn is in the 7th house — bringing seriousness and deep karmic lessons to relationships.

✨ Your strengths —
• You don't rush into relationships — and that's actually wise
• The caution you feel is not fear, it's wisdom
• You tend toward late or delayed commitment — but when it comes, it's long-lasting and mature
• Life's greatest teachers will be your partners — romantic or business

🌟 Your pattern —
Your {ascSign} Ascendant and {sunSign} Sun suggest you become a reliable, committed partner once in a relationship.`,
      advice: `💡 Advice for you —
• Take your time with partnership decisions — Saturn rewards the deliberate approach
• Make long-term decisions only after 2-3 years in a relationship
• Always get a legally drafted agreement in business partnerships`,
    },
  },

  // ── JUPITER IN 1st HOUSE ──────────────────────────────────────
  {
    id: 'jupiter_1st',
    weight: 2,
    conditions: [ ctx => ctx.p.jupiter?.house === 1 ],
    hi: {
      title: '🌟 प्रथम भाव में गुरु — आशीर्वाद से भरा व्यक्तित्व',
      description: `{name}, गुरु पहले घर में — यह एक divine blessing है।

✨ आपकी खासियतें —
• लोग आपकी presence में naturally better feel करते हैं — inspired, hopeful, या simply at ease
• आप naturally generous हैं, optimistic हैं
• Life में opportunities create करना जानते हैं जब दूसरों को सिर्फ obstacles दिखते हैं
• Teaching ability natural है — formally या informally, लोग आपसे सीखते हैं

🌟 आपकी personality —
{ascSign} लग्न के साथ 1st house Jupiter एक philosophical और wise personality देता है। Luck genuinely आपके साथ होता है।`,
      advice: `💡 आपके लिए सुझाव —
• Natural optimism कभी-कभी overconfidence में convert हो सकती है — reality check regular करो
• एक trusted person रखो जो honestly feedback दे
• Jupiter का अनुग्रह हमेशा ध्यान और judgment के साथ रहना चाहिए`,
    },
    en: {
      title: '🌟 Jupiter in 1st House — The Blessed Personality',
      description: `{name}, Jupiter in the first house — this is a divine blessing.

✨ Your strengths —
• People naturally feel better in your presence — inspired, hopeful, or simply at ease
• You are naturally generous and optimistic
• You know how to create opportunities where others only see obstacles
• Your teaching ability is natural — formally or informally, people learn from you

🌟 Your personality —
Your {ascSign} Ascendant with 1st house Jupiter gives you a philosophical and wise personality. Luck is genuinely on your side.`,
      advice: `💡 Advice for you —
• Natural optimism can sometimes turn into overconfidence — do regular reality checks
• Keep one trusted person who gives you honest feedback
• Jupiter's grace should always be used with care and good judgment`,
    },
  },

  // ── MOON EXALTED ──────────────────────────────────────────────
  {
    id: 'moon_exalted',
    weight: 2,
    conditions: [ ctx => ctx.p.moon?.dignity === 'exalted' ],
    hi: {
      title: '🌕 उच्च चंद्र — भावनात्मक बुद्धिमत्ता',
      description: `{name}, आपका चंद्र वृषभ राशि में उच्च (exalted) है।

✨ आपकी खासियतें —
• Emotional depth और intuition सबसे pure form में है
• लोग आपके पास naturally emotional support ढूंढकर आते हैं — genuinely empathize कर पाते हैं
• Memory — especially emotional और sensory — exceptional है
• Financial security और material comfort naturally आती है life में

🌟 आपकी विशेषता —
{ascSign} लग्न के साथ उच्च चंद्र आपको grounded yet deeply sensitive combination देता है। {sunSign} सूर्य एक purposeful direction add करता है।`,
      advice: `💡 आपके लिए सुझाव —
• Extraordinary empathy का regular recharge करो — nature walk, creative expression या spiritual practice से
• उच्च चंद्र की energy तब best काम करती है जब receptive vessel clean हो
• People pleasing से बचो — empathy आपकी strength है, weakness नहीं`,
    },
    en: {
      title: '🌕 Exalted Moon — Emotional Intelligence at Its Peak',
      description: `{name}, your Moon is exalted in Taurus — an exceptional position.

✨ Your strengths —
• Your emotional depth and intuition are in their purest form
• People naturally come to you seeking emotional support — and you genuinely empathize
• Your memory — especially emotional and sensory — is exceptional
• Financial security and material comfort tend to come naturally in life

🌟 Your special quality —
Your {ascSign} Ascendant with exalted Moon gives you a grounded yet deeply sensitive combination. Your {sunSign} Sun adds purposeful direction.`,
      advice: `💡 Advice for you —
• Regularly recharge your extraordinary empathy — nature walks, creative expression, or spiritual practice
• Exalted Moon energy works best when the receptive vessel is clean and clear
• Avoid people-pleasing — your empathy is your strength, not your weakness`,
    },
  },

  // ── DEFAULT FALLBACK ──────────────────────────────────────────
  {
    id: 'default_personality',
    weight: 0,
    conditions: [],
    hi: {
      title: '🌌 आपका ब्रह्मांडीय व्यक्तित्व — {sunSign} सूर्य, {moonSign} चंद्र',
      description: `{name}, आपकी कुंडली में {sunSign} सूर्य, {moonSign} चंद्र और {ascSign} लग्न का combination आपको एक unique और multi-layered personality देता है।

✨ तीन परतें —
• {ascSign} लग्न: आपकी outer personality — पहली impression जब लोग आपको देखते हैं
• {sunSign} सूर्य: आपका core self — जो आप actually हो अंदर से
• {moonSign} चंद्र: आपकी emotional nature — कैसे feel करते हैं, react करते हैं

🌟 आपका cosmic signature —
आपका {nakshatra} नक्षत्र, lord {nakshatraLord}, आपकी personality में एक specific quality add करता है। Current {mahadasha} महादशा का भी personality पर effect है — यह influence {dashaEndYear} तक रहेगा।`,
      advice: `💡 आपके लिए सुझाव —
• अपनी तीन planetary natures — सूर्य, चंद्र और लग्न — को consciously integrate करो
• जब तीनों align होते हैं, authentic expression होता है जो success attract करता है
• Life Path {lp} आपके karmic purpose को represent करता है — इसे guide मानो`,
    },
    en: {
      title: '🌌 Your Celestial Blueprint — {sunSign} Sun, {moonSign} Moon',
      description: `{name}, your chart's combination of {sunSign} Sun, {moonSign} Moon, and {ascSign} Ascendant gives you a unique and multi-layered personality.

✨ Three layers —
• {ascSign} Ascendant: your outer personality — the first impression people see
• {sunSign} Sun: your core self — who you actually are on the inside
• {moonSign} Moon: your emotional nature — how you feel, react, and intuitively respond

🌟 Your cosmic signature —
Your {nakshatra} Nakshatra, ruled by {nakshatraLord}, adds a specific quality to your personality. The current {mahadasha} Mahadasha also affects your personality — this influence lasts until {dashaEndYear}.`,
      advice: `💡 Advice for you —
• Consciously integrate your three planetary natures — Sun, Moon, and Ascendant
• When all three align, authentic expression happens — and that attracts success
• Life Path {lp} represents your karmic purpose — treat it as your guiding compass`,
    },
  },
];
