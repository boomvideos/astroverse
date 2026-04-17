// ═══════════════════════════════════════════════════════════════
// AstroVerse — All Section Templates  (Bilingual v3)
// Har template mein hi{} aur en{} dono hain
// engine.js ka generateSection() lang ke hisaab se pick karta hai
// ═══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// CAREER TEMPLATES
// ══════════════════════════════════════════════════════
export const careerTemplates = [

  {
    id: 'sun_10th_career',
    weight: 3,
    conditions: [ctx => ctx.p.sun?.house === 10],
    hi: {
      title: '☀️ दशम भाव में सूर्य — पहचान के लिए बना करियर',
      description: `{name}, आपका सूर्य 10वें घर में है — यह government, authority और public recognition से directly connected है।

✨ आपकी career strengths —
• काम में naturally visible होते हैं — अच्छे काम पर credit मिलता है
• Government jobs, politics, senior management — जहाँ authority matter करती है वहाँ excel करते हैं
• {ascSign} लग्न के साथ 10th house Sun एक strong professional identity देता है
• Career trajectory usually mid-life में peak करता है और legacy छोड़ता है

🌟 आपका career pattern —
{mahadasha} महादशा का career पर direct impact है — {dashaEndYear} तक यह influence रहेगा।`,
      advice: `💡 करियर सुझाव —
• Government schemes, senior mentors और official channels से connect करो
• गायत्री मंत्र रोज़ 108 बार जपो — career blessings के लिए
• Official recognition आपके career को 3x accelerate करती है`,
    },
    en: {
      title: '☀️ Sun in 10th House — Born for Recognition',
      description: `{name}, your Sun is in the 10th house — directly connected to government, authority, and public recognition.

✨ Your career strengths —
• You are naturally visible at work — good work gets you credit
• Government jobs, politics, senior management — you excel wherever authority matters
• Your {ascSign} Ascendant with 10th house Sun gives you a strong professional identity
• Your career trajectory typically peaks in mid-life and leaves a lasting legacy

🌟 Your career pattern —
The {mahadasha} Mahadasha has a direct impact on your career — this influence lasts until {dashaEndYear}.`,
      advice: `💡 Career advice —
• Connect with government schemes, senior mentors, and official channels
• Chant the Gayatri Mantra 108 times daily for career blessings
• Official recognition accelerates your career 3x`,
    },
  },

  {
    id: 'saturn_10th_career',
    weight: 3,
    conditions: [ctx => ctx.p.saturn?.house === 10],
    hi: {
      title: '🪐 दशम भाव में शनि — धीरे पर पक्के',
      description: `{name}, आपका शनि 10वें घर में है — career में एक specific pattern: slow, steady और ultimately unbreakable success।

✨ आपका career pattern —
• शनि देरी करता है लेकिन deny नहीं — 35-45 साल के बाद best career years आते हैं
• Early years frustrating लग सकते हैं, लेकिन जो build होता है वो permanent है
• Shortcuts से naturally uncomfortable feel होता है — और यही quality आगे ले जाती है
• Real estate, law, medicine, engineering, administration में exceptional potential है

🌟 आपकी strength —
{ascSign} लग्न के साथ 10th Shani एक disciplined, systematic professional बनाता है।`,
      advice: `💡 करियर सुझाव —
• "Slow को weakness मत समझो" — शनि की timeline में काम करो
• 5-year professional plan बनाओ, 6-month नहीं
• हर हफ्ते सबसे मुश्किल professional task पहले करो`,
    },
    en: {
      title: '🪐 Saturn in 10th House — The Slow Burn of Success',
      description: `{name}, your Saturn is in the 10th house — creating a specific career pattern: slow, steady, and ultimately unbreakable success.

✨ Your career pattern —
• Saturn delays but never denies — your best career years typically come after 35-45
• Early years may feel frustrating, but what gets built is permanent
• You're naturally uncomfortable with shortcuts — and that quality is ultimately what takes you furthest
• Exceptional potential in real estate, law, medicine, engineering, administration

🌟 Your strength —
Your {ascSign} Ascendant with 10th Saturn makes you a disciplined, systematic professional.`,
      advice: `💡 Career advice —
• Don't treat "slow" as weakness — work within Saturn's timeline
• Make 5-year professional plans, not 6-month ones
• Do the hardest professional task first every week`,
    },
  },

  {
    id: 'jupiter_2nd_11th_career',
    weight: 2,
    conditions: [ctx => [2, 11].includes(ctx.p.jupiter?.house)],
    hi: {
      title: '🌟 धन भाव में गुरु — समृद्धि आपका अधिकार है',
      description: `{name}, आपका गुरु 2nd या 11th घर में है — financial prosperity और income के घर।

✨ आपकी career strengths —
• जब तक honest और ethical काम करते हो, income consistently grows
• Teaching, consulting, finance, investment, education, legal advisory में excellent potential
• Clients और employers naturally आप पर trust करते हैं
• Multiple income streams possible हैं — main career के alongside side income भी

🌟 आपका advantage —
{ascSign} लग्न के साथ यह placement एक beautiful professional life suggest करती है।`,
      advice: `💡 करियर सुझाव —
• Financial knowledge continuously upgrade करते रहो
• Gold, mutual funds और education sector में invest करो
• गुरुवार को किसी ज़रूरतमंद को कुछ दान दो — Jupiter circulate करता है`,
    },
    en: {
      title: '🌟 Jupiter in Wealth Houses — Abundance is Your Birthright',
      description: `{name}, your Jupiter is in the 2nd or 11th house — the houses of financial prosperity and income.

✨ Your career strengths —
• As long as you work honestly and ethically, income consistently grows
• Excellent potential in teaching, consulting, finance, investment, education, legal advisory
• Clients and employers naturally trust you
• Multiple income streams are possible — side income alongside your main career

🌟 Your advantage —
Your {ascSign} Ascendant with this placement suggests a beautiful professional life where work is both satisfying and financially rewarding.`,
      advice: `💡 Career advice —
• Continuously upgrade your financial knowledge
• Invest in gold, mutual funds, and the education sector
• Donate something to someone in need every Thursday — Jupiter circulates`,
    },
  },

  {
    id: 'mercury_strong_career',
    weight: 2,
    conditions: [
      ctx => ['own','exalted'].includes(ctx.p.mercury?.dignity),
      ctx => [3, 6, 10, 11].includes(ctx.p.mercury?.house),
    ],
    hi: {
      title: '🧠 उच्च बुध — बौद्धिक professional',
      description: `{name}, आपका बुध strong position में और एक favorable house में है।

✨ आपकी career strengths —
• Technology, media, writing, law, consulting, trading, teaching, marketing में naturally excel करते हैं
• Deals समझना, negotiate करना, loopholes ढूंढना naturally आता है
• Multiple simultaneous projects manage करने की क्षमता extraordinary है
• Writing — professional reports हो या creative content — career में additional income ला सकती है

🌟 आपका advantage —
{ascSign} लग्न के साथ strong बुध एक sharp business mind देता है।`,
      advice: `💡 करियर सुझाव —
• Public speaking या writing में invest करो — यह career multiplier है
• LinkedIn, blog या newsletter शुरू करो
• बुध की energy written record में और ज़्यादा powerful हो जाती है`,
    },
    en: {
      title: '🧠 Strong Mercury — The Intellectual Professional',
      description: `{name}, your Mercury is in a strong position and in a favorable house.

✨ Your career strengths —
• You naturally excel in technology, media, writing, law, consulting, trading, teaching, marketing
• Understanding deals, negotiating, and finding loopholes comes naturally to you
• Your ability to manage multiple projects simultaneously is extraordinary
• Writing — whether professional reports or creative content — can bring additional income

🌟 Your advantage —
Your {ascSign} Ascendant with strong Mercury gives you a sharp business mind.`,
      advice: `💡 Career advice —
• Invest in public speaking or writing — it's a career multiplier
• Start a LinkedIn, blog, or newsletter
• Mercury energy amplifies greatly in written form`,
    },
  },

  {
    id: 'mars_3rd_6th_career',
    weight: 2,
    conditions: [ctx => [3, 6].includes(ctx.p.mars?.house)],
    hi: {
      title: '⚔️ उपचय भाव में मंगल — competitive advantage',
      description: `{name}, आपका मंगल 3rd या 6th घर में है — Upachaya houses जहाँ Mars especially strong results देता है।

✨ आपकी career strengths —
• Competition में naturally comfortable हैं — competitive situation में performance better होती है
• Deadlines, pressure और challenges से galvanize होते हैं, paralyzed नहीं
• Sales, management, sports, military, police, surgery, entrepreneurship में strong potential
• Enemies और competitors ultimately unsuccessful होते हैं आपके against

🌟 आपका advantage —
{ascSign} लग्न के साथ यह placement एक resilient professional identity देता है।`,
      advice: `💡 करियर सुझाव —
• Competition avoid मत करो — यह आपका fuel है
• Deliberately ऐसे roles choose करो जहाँ performance metrics clear हों
• मंगल को channel करने के लिए physical workout mandatory — daily 30 minutes minimum`,
    },
    en: {
      title: '⚔️ Mars in Growth Houses — Competitive Advantage',
      description: `{name}, your Mars is in the 3rd or 6th house — Upachaya (growth) houses where Mars gives especially strong results.

✨ Your career strengths —
• You are naturally comfortable with competition — your performance actually gets better in competitive situations
• Deadlines, pressure, and challenges galvanize you — they don't paralyze you
• Strong potential in sales, management, sports, military, police, surgery, entrepreneurship
• Enemies and competitors ultimately fail against you

🌟 Your advantage —
Your {ascSign} Ascendant with this placement gives you a resilient professional identity that grows stronger through obstacles.`,
      advice: `💡 Career advice —
• Don't avoid competition — it's your fuel
• Deliberately choose roles where performance metrics are clear and measurable
• Physical workout mandatory to channel Mars energy — minimum 30 minutes daily`,
    },
  },

  {
    id: 'default_career',
    weight: 0,
    conditions: [],
    hi: {
      title: '🗺️ करियर का ब्रह्मांडीय blueprint',
      description: `{name}, आपकी कुंडली में {sunSign} सूर्य, {moonSign} चंद्र और {ascSign} लग्न का combination एक specific professional identity suggest करता है।

✨ आपका career profile —
• {sunSign} element से income के primary sources align होते हैं
• Life Path {lp} आपके deepest career purpose को represent करता है
• {mahadasha} महादशा {dashaEndYear} तक active है — इस planet की energy के according career events expect करो
• {nakshatra} नक्षत्र, lord {nakshatraLord} — career timing में specific patterns create करता है

🌟 Focus area —
Saturn की house position career में discipline indicate करती है, और Jupiter की position growth और expansion के opportunities को।`,
      advice: `💡 करियर सुझाव —
• अपने Sun sign की strengths professionally leverage करो consciously
• Saturn की house का काम seriously लो — वो department आपका karma भूमि है
• {mahadasha} planet के karakatva के according career decisions लो`,
    },
    en: {
      title: '🗺️ Your Career Blueprint',
      description: `{name}, your chart's combination of {sunSign} Sun, {moonSign} Moon, and {ascSign} Ascendant suggests a specific professional identity.

✨ Your career profile —
• Your primary income sources align with the {sunSign} element
• Life Path {lp} represents your deepest career purpose
• The {mahadasha} Mahadasha is active until {dashaEndYear} — expect career events aligned with this planet's nature
• {nakshatra} Nakshatra, ruled by {nakshatraLord}, creates specific patterns in your career timing

🌟 Focus area —
Saturn's house position indicates discipline in your career, and Jupiter's position shows where growth and expansion opportunities lie.`,
      advice: `💡 Career advice —
• Consciously leverage your {sunSign} Sun sign's strengths professionally
• Take seriously the work of Saturn's house — that department is your karma ground
• Make career decisions aligned with the {mahadasha} planet's nature`,
    },
  },
];


// ══════════════════════════════════════════════════════
// RELATIONSHIP TEMPLATES
// ══════════════════════════════════════════════════════
export const relationshipTemplates = [

  {
    id: 'venus_exalted_rel',
    weight: 3,
    conditions: [ctx => ctx.p.venus?.dignity === 'exalted'],
    hi: {
      title: '💕 उच्च शुक्र — प्रेम में आशीर्वाद',
      description: `{name}, आपका शुक्र मीन राशि में उच्च (exalted) है — relationships में एक extraordinary divine blessing।

✨ आपकी relationship strengths —
• उच्च शुक्र वाले naturally attractive होते हैं — physically और personality दोनों में
• Love को deeply और purely experience करते हैं — petty jealousy suit नहीं करती
• Marriage में एक deeply devoted और caring partner बनते हैं
• Physical beauty, art, music या luxury से naturally connected life मिलती है

🌟 आपका relationship pattern —
{ascSign} लग्न के साथ exalted Venus relationships में generous, romantic और artistic nature देता है।`,
      advice: `💡 रिश्ते के लिए सुझाव —
• Love में vulnerability को strength समझो
• Relationships में art, creativity और beauty create करो together
• Shared aesthetic experiences bond को deepen करते हैं`,
    },
    en: {
      title: '💕 Exalted Venus — Blessed in Love',
      description: `{name}, your Venus is exalted in Pisces — an extraordinary divine blessing in relationships.

✨ Your relationship strengths —
• People with exalted Venus are naturally attractive — both physically and in personality
• You experience love deeply and purely — petty jealousy simply doesn't suit you
• You become a deeply devoted and caring partner in marriage
• Life naturally connects you with physical beauty, art, music, or luxury

🌟 Your relationship pattern —
Your {ascSign} Ascendant with exalted Venus gives you a generous, romantic, and artistic nature in relationships.`,
      advice: `💡 Relationship advice —
• See vulnerability in love as strength, not weakness
• Create art, creativity, and beauty in your relationships together
• Shared aesthetic experiences deepen the bond`,
    },
  },

  {
    id: 'mars_7th_manglik',
    weight: 3,
    conditions: [
      ctx => ctx.p.mars?.house === 7,
      ctx => ctx.isManglik,
    ],
    hi: {
      title: '🔥 सप्तम में मंगल — intense passionate partnership',
      description: `{name}, आपका मंगल 7वें घर में है — इसका मतलब यह नहीं कि शादी में problems होंगी।

✨ असली मतलब —
• आपको एक strong, assertive और equally passionate partner चाहिए
• "Weak" partner adjust नहीं कर पाएगा — equally strong personality के साथ relationship extraordinary होगी
• Disagreements passionate होते हैं, लेकिन making up भी equally intense होता है
• Late 20s या early 30s में committed relationship best results देती है usually

⚠️ मांगलिक के बारे में —
Manglik दोष से Manglik से शादी एक traditional suggestion है जो still many astrologers recommend करते हैं।`,
      advice: `💡 रिश्ते के लिए सुझाव —
• Anger और assertiveness के बीच फर्क समझो
• Partner के साथ "ground rules" early set करो
• मंगल उपाय: मंगलवार को हनुमान मंदिर जाओ और physical exercise करो`,
    },
    en: {
      title: '🔥 Mars in 7th House — Intense Passionate Partnerships',
      description: `{name}, your Mars is in the 7th house — this does NOT mean there will be problems in marriage.

✨ What it actually means —
• You need a strong, assertive, and equally passionate partner
• A "weak" partner won't be able to adjust — with an equally strong personality, the relationship will be extraordinary
• Disagreements are passionate, but making up is equally intense
• Committed relationships in late 20s or early 30s tend to give the best results

⚠️ About Manglik —
Marrying another Manglik is a traditional suggestion that many astrologers still recommend for harmony.`,
      advice: `💡 Relationship advice —
• Understand the difference between anger and assertiveness
• Set "ground rules" with your partner early on
• Mars remedy: visit Hanuman temple on Tuesdays and do physical exercise`,
    },
  },

  {
    id: 'kaal_sarp_rel',
    weight: 2,
    conditions: [ctx => ctx.isKaalSarp],
    hi: {
      title: '🐍 काल सर्प दोष — karmic relationship journey',
      description: `{name}, आपकी कुंडली में काल सर्प दोष है — relationships में specific challenges और karmic lessons हैं।

✨ समझने वाली बात —
• यह dosha बता रहा है कि relationships में कुछ karmic debts हैं जो इस जन्म में resolve होनी हैं
• On-off connections, long distance, societal obstacles, या timing issues face हो सकते हैं
• Positive side: relationships uniquely deep और karmic होती हैं — soul-level bonds
• एक बार obstacles cross हो जाएँ तो relationship unusually strong होती है

🌟 अच्छी खबर —
Age 40 के बाद typically effects significantly reduce हो जाते हैं।`,
      advice: `💡 रिश्ते के लिए सुझाव —
• Kaal Sarp Puja (Trimbakeshwar या किसी ज्योतिर्लिंग में) करो
• प्रतिदिन महामृत्युंजय मंत्र 108 बार जपो
• Relationships में patience रखो — karmic timing अलग होती है`,
    },
    en: {
      title: '🐍 Kaal Sarp Dosha — Karmic Relationship Journey',
      description: `{name}, your chart has Kaal Sarp Dosha — bringing specific challenges and karmic lessons in relationships.

✨ What this means —
• This dosha indicates some karmic debts in relationships that are being resolved in this lifetime
• You may face on-off connections, long distance, societal obstacles, or timing challenges
• Positive side: relationships are uniquely deep and karmic — soul-level bonds
• Once obstacles are crossed, the relationship becomes unusually strong

🌟 Good news —
After age 40, the effects typically reduce significantly.`,
      advice: `💡 Relationship advice —
• Perform Kaal Sarp Puja (at Trimbakeshwar or any Jyotirlinga)
• Chant the Mahamrityunjaya Mantra 108 times daily
• Have patience in relationships — karmic timing is different`,
    },
  },

  {
    id: 'jupiter_7th_aspect',
    weight: 2,
    conditions: [
      ctx => {
        if (!ctx.p.jupiter) return false;
        const jHouse = ctx.p.jupiter.house;
        const asp5 = ((jHouse - 1 + 4) % 12) + 1;
        const asp7 = ((jHouse - 1 + 6) % 12) + 1;
        const asp9 = ((jHouse - 1 + 8) % 12) + 1;
        return [asp5, asp7, asp9].includes(7);
      },
    ],
    hi: {
      title: '🌟 गुरु की दृष्टि — विवाह में आशीर्वाद',
      description: `{name}, आपके 7वें घर पर गुरु की दृष्टि पड़ रही है — relationships में एक powerful protection।

✨ आपकी relationship strengths —
• गुरु जहाँ भी दृष्टि डालता है, वहाँ wisdom, grace और positive outcomes लाता है
• Marriage में obstacles आते हैं लेकिन ultimately resolve होते हैं
• Spouse educated, wise या spiritually inclined होगा/होगी
• Relationship में growth और learning central theme होगी

🌟 Bonus —
Financially भी marriage beneficial होती है usually। Current {mahadasha} महादशा relationship timeline को influence कर रहा है।`,
      advice: `💡 रिश्ते के लिए सुझाव —
• Relationship में wisdom और communication invest करो
• Partner के साथ regularly meaningful conversations करो
• दो लोगों को Vedic knowledge या spiritual wisdom share करो`,
    },
    en: {
      title: '🌟 Jupiter Aspecting 7th — Blessed Marriage',
      description: `{name}, Jupiter is casting its aspect on your 7th house — a powerful protection in relationships.

✨ Your relationship strengths —
• Wherever Jupiter casts its aspect, it brings wisdom, grace, and positive outcomes
• Obstacles come in marriage but ultimately get resolved
• Your spouse will likely be educated, wise, or spiritually inclined
• Growth and learning will be central themes in your relationship

🌟 Bonus —
Marriage tends to also be financially beneficial. The current {mahadasha} Mahadasha is influencing your relationship timeline.`,
      advice: `💡 Relationship advice —
• Invest wisdom and communication into your relationship
• Have meaningful conversations with your partner regularly — not just logistics
• Share Vedic knowledge or spiritual wisdom with two people — Jupiter's aspect grows stronger`,
    },
  },

  {
    id: 'default_relationship',
    weight: 0,
    conditions: [],
    hi: {
      title: '💞 प्रेम और साझेदारी — आपकी Venus story',
      description: `{name}, आपके relationships और विवाह का blueprint Venus और 7th घर के lord की position से समझना आता है।

✨ आपकी relationship profile —
• {sunSign} सूर्य: जो आप love में चाहते हैं — direction और purpose
• {moonSign} चंद्र: जो आप feel करते हैं — emotional needs
• {ascSign} लग्न: love में आपका approach — first impression और style
• मांगलिक स्थिति: {isManglik}

🌟 Timing —
Current {mahadasha} महादशा relationship events को time करता है।`,
      advice: `💡 रिश्ते के लिए सुझाव —
• अपने Venus की house और sign देखो — वो department आपका relationship karmic zone है
• शुक्रवार को शृंगार करो, मीठी चीज़ खाओ और white/pink पहनो
• Relationships में authentic expression priority दो`,
    },
    en: {
      title: '💞 Love & Partnership — Your Venus Story',
      description: `{name}, the blueprint of your relationships and marriage is understood through Venus and the lord of your 7th house.

✨ Your relationship profile —
• {sunSign} Sun: what you seek in love — direction and purpose
• {moonSign} Moon: what you feel — emotional needs
• {ascSign} Ascendant: your approach to love — first impressions and style
• Manglik status: {isManglik}

🌟 Timing —
The current {mahadasha} Mahadasha times your relationship events.`,
      advice: `💡 Relationship advice —
• Look at your Venus's house and sign — that department is your relationship karmic zone
• On Fridays, dress up, eat something sweet, and wear white or pink
• Give authentic expression priority in relationships`,
    },
  },
];


// ══════════════════════════════════════════════════════
// HEALTH TEMPLATES
// ══════════════════════════════════════════════════════
export const healthTemplates = [

  {
    id: 'saturn_6th_health',
    weight: 2,
    conditions: [ctx => ctx.p.saturn?.house === 6],
    hi: {
      title: '💪 षष्ठ भाव में शनि — मज़बूत constitution',
      description: `{name}, आपका शनि 6वें घर में है — यहाँ Saturn रक्षक की तरह काम करता है।

✨ आपकी health strengths —
• Body constitution naturally tough है — बीमार पड़ भी जाओ तो recovery fast होती है
• Chronic diseases की possibility reduced है
• Physically resilient personality है

⚠️ ध्यान रखें —
• Bone, joint और nervous system related issues kabhi kabhi arise हो सकते हैं
• {sunSign} element: fire = blood pressure, earth = digestion, air = respiratory, water = immune
• Mental health भी physical जितनी important है`,
      advice: `💡 स्वास्थ्य सुझाव —
• Strict daily health routine बनाओ: fixed wake time, fixed meal times, fixed exercise time
• Cold water bath शनि की दशा में especially beneficial है
• शनि discipline reward करता है — especially health में`,
    },
    en: {
      title: '💪 Saturn in 6th House — Resilient Constitution',
      description: `{name}, your Saturn is in the 6th house — here Saturn works as a protector.

✨ Your health strengths —
• Your body constitution is naturally tough — even if you fall ill, recovery is fast
• Reduced likelihood of chronic diseases
• You are a physically resilient personality

⚠️ Watch out —
• Bone, joint, and nervous system issues can occasionally arise
• {sunSign} element: fire = blood pressure, earth = digestion, air = respiratory, water = immune system
• Mental health is equally as important as physical health`,
      advice: `💡 Health advice —
• Build a strict daily health routine: fixed wake time, fixed meal times, fixed exercise time
• Cold water baths are especially beneficial during Saturn's dasha
• Saturn rewards discipline — especially in health`,
    },
  },

  {
    id: 'moon_debil_health',
    weight: 3,
    conditions: [ctx => ctx.p.moon?.dignity === 'debilitated'],
    hi: {
      title: '🌑 नीच चंद्र — mind-body alignment journey',
      description: `{name}, आपका चंद्र वृश्चिक राशि में नीच (debilitated) है।

✨ समझने वाली बात —
• Anxiety, mood fluctuations और kabhi kabhi sleep disturbances face करनी पड़ सकती हैं
• यह weakness नहीं — conscious care से extraordinary balance achieve होता है
• Stomach, chest और hormonal system पर ध्यान दो
• एक positive: नीच चंद्र वालों में often extraordinary empathy होती है — healing arts में natural talent

⚠️ सावधानी —
Sade Sati ({isSadeSati}) के period में extra care ज़रूरी है।`,
      advice: `💡 स्वास्थ्य सुझाव —
• Daily: "ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः" — 108 बार, सोमवार को
• Dairy products, especially milk की quantity moderate रखो
• Therapy या counseling genuinely helpful होगी`,
    },
    en: {
      title: '🌑 Debilitated Moon — Mind-Body Alignment Journey',
      description: `{name}, your Moon is debilitated in Scorpio.

✨ What this means —
• You may face anxiety, mood fluctuations, and occasional sleep disturbances
• This is NOT a weakness — with conscious care, extraordinary balance can be achieved
• Pay attention to the stomach, chest, and hormonal system
• One positive: people with debilitated Moon often have extraordinary empathy — natural talent in healing arts

⚠️ Caution —
Extra care is needed during the Sade Sati period ({isSadeSati}).`,
      advice: `💡 Health advice —
• Daily: "Om Shram Shreem Shraum Sah Chandramasay Namah" — 108 times, on Mondays
• Keep dairy products, especially milk, in moderate quantities
• Therapy or counseling will be genuinely helpful`,
    },
  },

  {
    id: 'mars_8th_health',
    weight: 2,
    conditions: [ctx => ctx.p.mars?.house === 8],
    hi: {
      title: '⚡ अष्टम भाव में मंगल — vital force और hidden strength',
      description: `{name}, आपका मंगल 8वें घर में है।

✨ Positive side पहले —
• 8th house Mars वालों में extraordinary recovery ability होती है
• Vital force strong है
• Sports, martial arts या intense physical training perfect outlets हैं

⚠️ ध्यान रखें —
• Accidents से सावधान रहो — especially head injuries, cuts, burns, surgeries
• Driving में extra caution, especially Mars dasha में
• Blood pressure, blood disorders या reproductive health — regular checkups recommended`,
      advice: `💡 स्वास्थ्य सुझाव —
• Driving पर phone मत use करो
• Risky sports में safety gear always use करो
• Anger के वक्त कोई sharp या mechanical काम avoid करो
• नीम के पत्ते और हल्दी का daily use मंगल के negative effects reduce करता है`,
    },
    en: {
      title: '⚡ Mars in 8th House — Vital Force and Hidden Strength',
      description: `{name}, your Mars is in the 8th house.

✨ Positive side first —
• People with 8th house Mars have extraordinary recovery ability
• Your vital force is strong
• Sports, martial arts, or intense physical training are perfect outlets

⚠️ Watch out —
• Be careful about accidents — especially head injuries, cuts, burns, surgeries
• Extra caution in driving, especially during Mars dasha
• Blood pressure, blood disorders, or reproductive health — regular checkups recommended`,
      advice: `💡 Health advice —
• Don't use your phone while driving
• Always use safety gear in risky sports
• Avoid sharp or mechanical tasks when angry
• Daily use of neem leaves and turmeric reduces Mars's negative effects`,
    },
  },

  {
    id: 'jupiter_protection_health',
    weight: 2,
    conditions: [ctx => ctx.p.jupiter?.house === 8 || ctx.p.jupiter?.house === 6],
    hi: {
      title: '🛡️ गुरु की रक्षा — protected constitution',
      description: `{name}, गुरु का 6th या 8th घर से connection health में एक powerful protection create करता है।

✨ आपकी health strengths —
• Diseases और health challenges से more gracefully deal करते हैं
• Fundamentally optimistic approach to health है — जो healing में genuinely help करता है
• Liver और thyroid पर ध्यान beneficial है
• Mental health गुरु की presence से genuinely better होती है

🌟 Longevity —
Overall constitution strong रहती है।`,
      advice: `💡 स्वास्थ्य सुझाव —
• Yellow foods (हल्दी, केला, दाल), गुरुवार का व्रत और गुरु मंत्र
• एक knowledgeable doctor से preventive health partnership बनाओ
• Integrative medicine approach beneficial होगा`,
    },
    en: {
     title: "🛡️ Jupiter's Protection — Protected Constitution",
      description: `{name}, Jupiter's connection with the 6th or 8th house creates a powerful health protection.

✨ Your health strengths —
• You deal with diseases and health challenges more gracefully than most
• You have a fundamentally optimistic approach to health — which genuinely aids healing
• Paying attention to liver and thyroid is beneficial
• Mental health is genuinely better with Jupiter's presence

🌟 Longevity —
Your overall constitution tends to remain strong.`,
      advice: `💡 Health advice —
• Yellow foods (turmeric, banana, lentils), Thursday fasting, and Jupiter mantras
• Build a preventive health partnership with a knowledgeable doctor
• An integrative medicine approach will be beneficial`,
    },
  },

  {
    id: 'default_health',
    weight: 0,
    conditions: [],
    hi: {
      title: '🌿 स्वास्थ्य का ब्रह्मांडीय blueprint',
      description: `{name}, आपकी health constitution का blueprint {ascSign} लग्न, 6th और 8th घर के lords से समझना आता है।

✨ आपका health profile —
• {sunSign} element: fire = pitta/inflammation, earth = kapha/weight, air = vata/nervous, water = immune/hormonal
• {moonSign} चंद्र emotional health को represent करता है — stress direct physical symptoms में convert होता है
• {isSadeSati ? "⚠️ साढ़े साती active — extra vigilance, especially spine और joints" : "✅ साढ़े साती active नहीं — comparatively stable period"}
• Current {mahadasha} महादशा {dashaEndYear} तक health events को time करती है`,
      advice: `💡 स्वास्थ्य सुझाव —
• Daily: सूर्य नमस्कार 12 rounds + अनुलोम विलोम pranayama 10 min
• Weekly: अपने लग्न Lord के planet के weekday पर fast करो
• Avoid: processed foods, late nights और suppressed emotions`,
    },
    en: {
      title: '🌿 Your Health Blueprint',
      description: `{name}, your health constitution blueprint is understood through your {ascSign} Ascendant and the lords of the 6th and 8th houses.

✨ Your health profile —
• {sunSign} element: fire = pitta/inflammation, earth = kapha/weight, air = vata/nervous, water = immune/hormonal
• {moonSign} Moon represents emotional health — stress directly converts into physical symptoms
• {isSadeSati ? "⚠️ Sade Sati active — extra vigilance needed, especially for spine and joints" : "✅ Sade Sati not active — comparatively stable period"}
• Current {mahadasha} Mahadasha times health events until {dashaEndYear}`,
      advice: `💡 Health advice —
• Daily: 12 rounds of Surya Namaskar + 10 minutes of Anulom Vilom pranayama
• Weekly: fast on your Lagna Lord's planet's weekday
• Avoid: processed foods, consistent late nights, and suppressed emotions`,
    },
  },
];


// ══════════════════════════════════════════════════════
// FINANCE TEMPLATES
// ══════════════════════════════════════════════════════
export const financeTemplates = [

  {
    id: 'jupiter_2nd_finance',
    weight: 3,
    conditions: [ctx => ctx.p.jupiter?.house === 2],
    hi: {
      title: '💰 धन भाव में गुरु — natural wealth magnet',
      description: `{name}, आपका गुरु 2nd घर (धन भाव) में है — यह सबसे auspicious financial placement है।

✨ आपकी financial strengths —
• पैसे आते हैं, और wisely managed हों तो consistently grow करते हैं
• Family या ancestral property से भी benefit possible है
• Speech भी financially impactful है — public speaking, teaching, content creation से income possible
• Multiple income streams possible हैं

⚠️ एक important बात —
2nd house Jupiter तभी best results देता है जब honest और ethical हो।`,
      advice: `💡 finance सुझाव —
• Long-term investment consciousness develop करो
• Real estate, gold और education sector में invest करो
• Monthly income का minimum 20% save करो`,
    },
    en: {
      title: '💰 Jupiter in 2nd House — Natural Wealth Magnet',
      description: `{name}, your Jupiter is in the 2nd house (Dhana Bhava) — the most auspicious financial placement.

✨ Your financial strengths —
• Money comes, and when managed wisely, it consistently grows
• Benefit from family or ancestral property is also possible
• Your speech is financially impactful — income possible from public speaking, teaching, content creation
• Multiple income streams are possible

⚠️ One important point —
2nd house Jupiter gives best results only when you are honest and ethical.`,
      advice: `💡 Finance advice —
• Develop a long-term investment mindset
• Invest in real estate, gold, and the education sector
• Save a minimum of 20% of your monthly income`,
    },
  },

  {
    id: 'venus_11th_finance',
    weight: 2,
    conditions: [ctx => ctx.p.venus?.house === 11],
    hi: {
      title: '✨ लाभ भाव में शुक्र — connections से gains',
      description: `{name}, आपका शुक्र 11वें घर में है।

✨ आपकी financial strengths —
• Luxury goods, beauty, entertainment, art, fashion, real estate में gains के लिए excellent placement
• Social connections financial gains लाते हैं — who you know genuinely matters
• Deals negotiate करने में naturally effective हैं
• Friday को financial decisions especially beneficial होती हैं

🌟 आपका network = आपका net worth।`,
      advice: `💡 finance सुझाव —
• Networking और relationship maintenance में consciously invest करो
• हर month minimum 3 meaningful professional connections maintain करो
• Venus-related businesses personally और as investments consider करो`,
    },
    en: {
      title: '✨ Venus in 11th House — Gains Through Connections',
      description: `{name}, your Venus is in the 11th house.

✨ Your financial strengths —
• Excellent placement for gains from luxury goods, beauty, entertainment, art, fashion, real estate
• Social connections bring financial gains — who you know genuinely matters
• You're naturally effective at negotiating deals
• Financial decisions made on Fridays are especially beneficial

🌟 Your network is your net worth.`,
      advice: `💡 Finance advice —
• Consciously invest in networking and relationship maintenance
• Maintain a minimum of 3 meaningful professional connections every month
• Consider Venus-related businesses both personally and as investments`,
    },
  },

  {
    id: 'rahu_dhana_finance',
    weight: 2,
    conditions: [ctx => [2, 11].includes(ctx.p.rahu?.house)],
    hi: {
      title: '🌀 धन भाव में राहु — unconventional wealth path',
      description: `{name}, आपका राहु 2nd या 11th घर में है।

✨ आपकी financial strengths —
• Tech startups, cryptocurrency, international business, media, social media influencing में exceptional potential
• Traditional finance paths से हटकर नए तरीकों से पैसे कमाने में naturally good हैं
• Foreign connections financially beneficial हैं
• Wealth trajectory likely non-linear होगा — sudden gains possible हैं

⚠️ सावधानी —
Shortcuts या dishonest means से earned money typically नहीं टिकता।`,
      advice: `💡 finance सुझाव —
• Technology और digital skills में invest करो
• International markets और foreign currency exposure beneficial हो सकती है
• Weekly: राहु के उपाय करो — financial protection के लिए`,
    },
    en: {
      title: '🌀 Rahu in Money Houses — Unconventional Wealth Path',
      description: `{name}, your Rahu is in the 2nd or 11th house.

✨ Your financial strengths —
• Exceptional potential in tech startups, cryptocurrency, international business, media, social media influencing
• You're naturally good at making money through non-traditional means
• Foreign connections are financially beneficial
• Your wealth trajectory is likely non-linear — sudden gains are possible

⚠️ Caution —
Money earned through shortcuts or dishonest means typically doesn't last.`,
      advice: `💡 Finance advice —
• Invest in technology and digital skills
• International markets and foreign currency exposure can be financially beneficial
• Weekly: perform Rahu remedies for financial protection`,
    },
  },

  {
    id: 'saturn_challenge_finance',
    weight: 2,
    conditions: [
      ctx => ctx.p.saturn?.dignity === 'debilitated' || ctx.p.saturn?.house === 12,
    ],
    hi: {
      title: '⚖️ शनि की चुनौती — discipline से wealth',
      description: `{name}, आपका शनि debilitated है या 12वें घर में — financial life में specific challenges हैं।

✨ समझने वाली बात —
• Hidden losses, unexpected expenses या financial leakage possible है
• Foreign lands या isolated work environments में often better financial results
• Spiritual practices और seva में investment करनी चाहिए
• यह challenge है, curse नहीं

⚠️ Avoid करो —
Speculative investments, gambling और overnight wealth schemes।`,
      advice: `💡 finance सुझाव —
• Zero-based budget monthly बनाओ — expenses track करो, savings automate करो
• शनिवार को गरीबों को food donate करो
• Mustard oil lamp जलाओ और hard work करो without shortcuts
• Slowly build, never gamble`,
    },
    en: {
      title: "⚖️ Saturn's Challenge — Building Wealth Through Discipline",
      description: `{name}, your Saturn is debilitated or in the 12th house — indicating specific financial challenges.

✨ What this means —
• Hidden losses, unexpected expenses, or financial leakage are possible
• Often better financial results come in foreign lands or isolated work environments
• Invest in spiritual practices and service
• This is a challenge, not a curse

⚠️ Avoid —
Speculative investments, gambling, and overnight wealth schemes.`,
      advice: `💡 Finance advice —
• Create a zero-based budget monthly — track expenses, automate savings
• Donate food to the poor on Saturdays
• Light a mustard oil lamp and work hard without shortcuts
• Build slowly, never gamble`,
    },
  },

  {
    id: 'default_finance',
    weight: 0,
    conditions: [],
    hi: {
      title: '💎 धन का ब्रह्मांडीय blueprint',
      description: `{name}, आपकी financial कुंडली में 2nd और 11th घर के lords, plus Jupiter और Venus की positions key roles play करती हैं।

✨ आपका financial profile —
• {sunSign} element: fire = leadership/entrepreneurship, earth = service/industry, air = communication/knowledge, water = healing/creative
• Life Path {lp} आपकी financial karma indicate करता है
• {mahadasha} महादशा current financial period shape कर रहा है — {dashaEndYear} तक
• {isSadeSati ? "⚠️ साढ़े साती: expenses control करो, big investments का best time नहीं" : "✅ साढ़े साती active नहीं — financial initiatives के लिए better period"}`,
      advice: `💡 finance सुझाव —
• तीन rules: (1) income का 20% save करें पहले; (2) 6 महीने का emergency fund; (3) Jupiter या Venus दशा में long-term investments`,
    },
    en: {
      title: '💎 Your Wealth Blueprint',
      description: `{name}, in your financial chart, the lords of the 2nd and 11th houses, plus Jupiter and Venus, play key roles.

✨ Your financial profile —
• {sunSign} element: fire = leadership/entrepreneurship, earth = service/industry, air = communication/knowledge, water = healing/creative
• Life Path {lp} indicates your financial karma
• The {mahadasha} Mahadasha is shaping your current financial period until {dashaEndYear}
• {isSadeSati ? "⚠️ Sade Sati: control expenses, not the best time for big investments" : "✅ Sade Sati not active — comparatively better period for financial initiatives"}`,
      advice: `💡 Finance advice —
• Three rules: (1) save 20% of income first; (2) build a 6-month emergency fund; (3) start long-term investments during Jupiter or Venus dasha`,
    },
  },
];


// ══════════════════════════════════════════════════════
// REMEDIES TEMPLATES
// ══════════════════════════════════════════════════════
export const remediesTemplates = [

  {
    id: 'kaalsarp_remedies',
    weight: 3,
    conditions: [ctx => ctx.isKaalSarp],
    hi: {
      title: '🐍 काल सर्प दोष निवारण — पवित्र उपाय',
      description: `{name}, आपकी कुंडली में काल सर्प दोष है।

✨ सबसे effective उपाय —
• नाग पंचमी पर नाग देवता की पूजा
• Trimbakeshwar या Ujjain Mahakal में काल सर्प शांति पूजा
• गृह में नाग देव की मूर्ति या photo रखना

🔔 Weekly उपाय —
• राहु: "ॐ राहवे नमः" — 108 बार, शनिवार
• केतु: "ॐ केतवे नमः" — 108 बार, शनिवार

⚠️ Important — यह दोष जन्म से है, regular rituals ज़रूरी हैं। {isSadeSati ? "साढ़े साती भी active — extra उपाय ज़रूरी।" : ""}`,
      advice: `💡 daily उपाय —
• Monthly: नाग पंचमी-style पूजा करो
• Weekly: शनिवार को राहु-केतु मंत्र + तिल का दान
• Daily: महामृत्युंजय मंत्र 108 बार`,
    },
    en: {
      title: '🐍 Kaal Sarp Dosha Remedies — Sacred Practices',
      description: `{name}, your chart has Kaal Sarp Dosha.

✨ Most effective remedies —
• Worship Nag Devata on Nag Panchami
• Kaal Sarp Shanti Puja at Trimbakeshwar or Ujjain Mahakal
• Keeping a Nag Dev idol or photo at home for protection

🔔 Weekly remedies —
• Rahu: "Om Rahave Namah" — 108 times, on Saturdays
• Ketu: "Om Ketave Namah" — 108 times, on Saturdays

⚠️ Important — this dosha is from birth, regular rituals are needed. {isSadeSati ? "Sade Sati also active — extra remedies needed." : ""}`,
      advice: `💡 Daily remedies —
• Monthly: perform a Nag Panchami-style puja
• Weekly: Rahu-Ketu mantras + sesame donation on Saturdays
• Daily: Mahamrityunjaya Mantra 108 times`,
    },
  },

  {
    id: 'manglik_remedies',
    weight: 3,
    conditions: [ctx => ctx.isManglik],
    hi: {
      title: '🔴 मंगल दोष शांति — harmony के लिए उपाय',
      description: `{name}, आपकी कुंडली में मांगलिक योग है। Effective उपाय से यह considerably balance हो जाता है।

✨ परंपरागत उपाय —
• मंगलवार को हनुमान मंदिर में सिंदूर और तेल चढ़ाओ
• मंगल मंत्र: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः" — 108 बार, मंगलवार को
• Kumbh Vivah (symbolic marriage with banana plant) — पारंपरिक remedy
• Coral (मूंगा) stone — qualified astrologer से check करके

⚠️ Important — मांगलिक yoga अलग-अलग levels में होती है। एक qualified ज्योतिषी से सही level check करवाओ।`,
      advice: `💡 daily उपाय —
• मंगलवार को red items (कपड़े, लाल मिर्च, मसूर दाल) donate करो
• घर में हनुमान जी की photo रखना और "जय श्री राम" जाप daily करना
• Physical exercise — Mars की energy का constructive use`,
    },
    en: {
      title: '🔴 Mangal Dosha Remedies — Practices for Harmony',
      description: `{name}, your chart has Manglik Yoga. With effective remedies, it gets considerably balanced.

✨ Traditional remedies —
• Offer sindoor and oil at Hanuman temple on Tuesdays
• Mars mantra: "Om Kram Kreem Kraum Sah Bhaumaya Namah" — 108 times, on Tuesdays
• Kumbh Vivah (symbolic marriage with a banana plant) — a traditional remedy
• Coral (Moonga) stone — only after checking with a qualified astrologer

⚠️ Important — Manglik yoga exists at different levels (mild, moderate, strong). Get the correct level checked by a qualified Jyotishi.`,
      advice: `💡 Daily remedies —
• Donate red items (clothes, red chili, red lentils) on Tuesdays
• Keep a photo of Hanuman ji at home and do daily "Jai Shri Ram" chanting
• Physical exercise — a constructive channel for Mars energy`,
    },
  },

  {
    id: 'sadesati_remedies',
    weight: 3,
    conditions: [ctx => ctx.isSadeSati],
    hi: {
      title: '🪐 साढ़े साती शांति — शनि के test को navigate करो',
      description: `{name}, आप अभी साढ़े साती के period में हैं — 7.5 साल का Saturn transit।

✨ specific उपाय —
• शनि चालीसा path daily करो
• शनिवार को सरसों का तेल शनि idol पर चढ़ाओ और गरीबों को खाना दान करो
• तिल (black sesame) का दान शनिवार को

⚠️ साढ़े साती के दौरान —
• Loans avoid करो, new ventures slowly start करो
• Health extra ध्यान — especially spine और joints
• Controversy से दूर रहो

🌟 Service और hard work शनि को सबसे ज़्यादा please करते हैं।`,
      advice: `💡 शनिवार का routine —
• शनि मंदिर visit, Mustard oil lamp, black sesame और black clothes donate
• "ॐ श्रां श्रीं श्रौं सः शनिश्चराय नमः" 108 बार
• Patience रखो — यह भी गुज़र जाएगा`,
    },
    en: {
     title: "🪐 Sade Sati Remedies — Navigating Saturn's Test",
      description: `{name}, you are currently in the Sade Sati period — a 7.5-year Saturn transit.

✨ Specific remedies —
• Recite the Shani Chalisa daily
• On Saturdays, offer mustard oil on the Saturn idol and donate food to the poor
• Donate black sesame (til) on Saturdays

⚠️ During Sade Sati —
• Avoid loans, start new ventures slowly
• Pay extra attention to health — especially spine and joints
• Stay away from controversy

🌟 Service and hard work please Saturn the most.`,
      advice: `💡 Saturday routine —
• Visit a Shani temple, light a mustard oil lamp, donate black sesame and black clothes
• Chant "Om Shram Shreem Shraum Sah Shanishcharaya Namah" 108 times
• Keep patience — this too shall pass`,
    },
  },

  {
    id: 'default_remedies',
    weight: 0,
    conditions: [],
    hi: {
      title: '🕉️ वैदिक उपाय — आपका personal remedy blueprint',
      description: `{name}, आपकी कुंडली के specific planetary positions के according personalized उपाय।

✨ सबसे important उपाय —
• {mahadasha} महादशा {dashaEndYear} तक active — इस planet के specific उपाय सबसे impactful हैं
• {nakshatra} नक्षत्र के lord {nakshatraLord} की उपासना daily practice होनी चाहिए
• {ascSign} लग्न Lord की regular पूजा overall life quality improve करती है

📊 आपकी dosha status —
• मांगलिक: {isManglik} | काल सर्प: {isKaalSarp} | साढ़े साती: {isSadeSati}`,
      advice: `💡 तीन daily practices —
• सुबह सूर्य को जल चढ़ाओ
• रात को सोने से पहले महामृत्युंजय मंत्र 11 बार
• Weekly अपने लग्न Lord के planet के day पर temple visit
• Consistency matters more than intensity`,
    },
    en: {
      title: '🕉️ Vedic Remedies — Your Personal Blueprint',
      description: `{name}, personalized remedies based on your chart's specific planetary positions.

✨ Most important remedies —
• {mahadasha} Mahadasha active until {dashaEndYear} — this planet's specific remedies are most impactful now
• Daily worship of {nakshatraLord}, lord of your {nakshatra} Nakshatra, should be your fundamental practice
• Regular puja of your {ascSign} Ascendant Lord improves overall life quality

📊 Your dosha status —
• Manglik: {isManglik} | Kaal Sarp: {isKaalSarp} | Sade Sati: {isSadeSati}`,
      advice: `💡 Three daily practices —
• Offer water to the Sun in the morning
• Chant the Mahamrityunjaya Mantra 11 times before sleeping
• Weekly temple visit or specific worship on your Lagna Lord's planet's day
• Consistency matters more than intensity`,
    },
  },
];


// ══════════════════════════════════════════════════════
// EDUCATION TEMPLATES
// ══════════════════════════════════════════════════════
export const educationTemplates = [

  {
    id: 'mercury_education',
    weight: 3,
    conditions: [
      ctx => ['own','exalted'].includes(ctx.p.mercury?.dignity),
      ctx => [4, 5].includes(ctx.p.mercury?.house),
    ],
    hi: {
      title: '📚 उच्च बुध education भाव में — academic excellence',
      description: `{name}, आपका बुध strong position में और education के घर में है।

✨ आपकी academic strengths —
• Naturally fast learner हैं — multiple subjects simultaneously handle कर सकते हैं
• Exams में typically above-average results आते हैं
• Competitive exams में natural advantage है
• Teaching या education sector में career भी possible और fulfilling हो सकता है

🌟 आपके लिए best fields —
Research, doctoral studies या specialized certifications especially suit करेंगी।`,
      advice: `💡 education सुझाव —
• Multiple learning formats try करो — audio, visual, kinesthetic
• Language learning specifically add करो
• {mahadasha} Mahadasha education timeline को influence करता है`,
    },
    en: {
      title: '📚 Strong Mercury in Education Houses — Academic Excellence',
      description: `{name}, your Mercury is in a strong position and in an education house.

✨ Your academic strengths —
• You are a naturally fast learner — you can handle multiple subjects simultaneously
• You typically get above-average results in exams
• You have a natural advantage in competitive exams
• A career in teaching or the education sector is also possible and fulfilling

🌟 Best fields for you —
Research, doctoral studies, or specialized certifications will especially suit you.`,
      advice: `💡 Education advice —
• Try multiple learning formats — audio, visual, kinesthetic — and double down on what works best
• Specifically add language learning to your skills
• The {mahadasha} Mahadasha influences your education timeline`,
    },
  },

  {
    id: 'jupiter_5th_education',
    weight: 3,
    conditions: [ctx => ctx.p.jupiter?.house === 5],
    hi: {
      title: '🌟 विद्या भाव में गुरु — wisdom का आशीर्वाद',
      description: `{name}, आपका गुरु 5वें घर में है — विद्या, पूर्व पुण्य और Intelligence का घर।

✨ आपकी academic strengths —
• Philosophy, law, religion, higher education, spirituality, counseling में especially deep understanding
• Higher education — post-graduate या research — में exceptional results possible हैं
• Teaching, mentoring, writing और knowledge sharing आपको satisfy करते हैं
• आपके पूर्व पुण्य अच्छे हैं — natural learning ease है

🌟 Children —
Children भी intelligent और educated होने की possibility है।`,
      advice: `💡 education सुझाव —
• Formal education के अलावा informal wisdom traditions explore करो
• एक subject में depth pursue करो — गुरु depth को favor करता है
• Specialist बनो, generalist नहीं`,
    },
    en: {
      title: '🌟 Jupiter in 5th House — Blessed with Wisdom',
      description: `{name}, your Jupiter is in the 5th house — the house of education, past life merit, and intelligence.

✨ Your academic strengths —
• Especially deep understanding in philosophy, law, religion, higher education, spirituality, counseling
• Exceptional results possible in higher education — post-graduate or research
• Teaching, mentoring, writing, and sharing knowledge deeply satisfies you
• Your past life merit is good — natural ease in learning comes from it

🌟 Children —
Your children are also likely to be intelligent and well-educated.`,
      advice: `💡 Education advice —
• Explore informal wisdom traditions beyond formal education
• Pursue depth in one subject — Jupiter favors specialists
• Be a specialist, not a generalist`,
    },
  },

  {
    id: 'rahu_5th_education',
    weight: 2,
    conditions: [ctx => ctx.p.rahu?.house === 5],
    hi: {
      title: '🌀 विद्या भाव में राहु — unconventional learner',
      description: `{name}, आपका राहु 5वें घर में है — learning में unconventional paths।

✨ आपकी learning style —
• Traditional education system में kabhi kabhi restless feel हो सकता है
• Self-directed, technology-based या experimental learning में extraordinary absorption
• Internet से, experiences से और unusual mentors से सीखते हैं
• Online education, international universities या self-taught expertise often better काम करता है

🌟 Best areas —
Technology, psychology, occult sciences, foreign education और cutting-edge fields।`,
      advice: `💡 education सुझाव —
• Formal credentials pursue करो (practical necessity के लिए)
• Unconventional interests abandon मत करो — ये often career differentiators बनते हैं
• Find your unique learning niche और उसमें world-class बनो`,
    },
    en: {
      title: '🌀 Rahu in 5th House — The Unconventional Learner',
      description: `{name}, your Rahu is in the 5th house — indicating unconventional paths in learning.

✨ Your learning style —
• You may sometimes feel restless in the traditional education system
• You have extraordinary absorption in self-directed, technology-based, or experimental learning
• You learn from the internet, experiences, and unusual mentors
• Online education, international universities, or self-taught expertise often works better for you

🌟 Best areas —
Technology, psychology, occult sciences, foreign education, and cutting-edge fields.`,
      advice: `💡 Education advice —
• Do pursue formal credentials (for practical necessity)
• Don't abandon your unconventional interests — they often become career differentiators
• Find your unique learning niche and become world-class in it`,
    },
  },

  {
    id: 'default_education',
    weight: 0,
    conditions: [],
    hi: {
      title: '📖 शिक्षा और बुद्धि — आपका intellectual blueprint',
      description: `{name}, आपकी education का blueprint 3rd, 4th और 5th घर के lords plus Mercury और Jupiter की positions से समझना आता है।

✨ आपकी learning style —
• {sunSign} element: fire = conceptual/big-picture, earth = practical/technical, air = theoretical/communication, water = intuitive/emotional
• {ascSign} लग्न: extroverted Lagnas collaborative learning में, introverted Lagnas solo deep-study में best
• Life Path {lp} आपकी natural areas of brilliance indicate करता है
• {mahadasha} महादशा education के timing को affect करता है`,
      advice: `💡 education सुझाव —
• {nakshatraLord} के day पर पढ़ाई करो — उस दिन concentration naturally better होती है
• Reading habit daily करो — 20 pages minimum
• जो सीखा उसे teach करो — teaching best learning method है`,
    },
    en: {
      title: '📖 Your Education & Intellect Blueprint',
      description: `{name}, your education blueprint is understood through the lords of the 3rd, 4th, and 5th houses, plus Mercury and Jupiter's positions.

✨ Your learning style —
• {sunSign} element: fire = conceptual/big-picture, earth = practical/technical, air = theoretical/communication, water = intuitive/emotional
• {ascSign} Ascendant: extroverted Lagnas work best in collaborative learning, introverted ones in solo deep-study
• Life Path {lp} indicates your natural areas of brilliance
• The {mahadasha} Mahadasha affects your education timing`,
      advice: `💡 Education advice —
• Study on {nakshatraLord}'s day — concentration is naturally better that day
• Build a daily reading habit — minimum 20 pages
• Teach what you've learned — teaching is the best learning method`,
    },
  },
];


// ══════════════════════════════════════════════════════
// FAMILY TEMPLATES
// ══════════════════════════════════════════════════════
export const familyTemplates = [

  {
    id: 'moon_4th_family',
    weight: 3,
    conditions: [ctx => ctx.p.moon?.house === 4],
    hi: {
      title: '🏠 सुख भाव में चंद्र — परिवार का दिल',
      description: `{name}, आपका चंद्र 4वें घर में है — family और home के साथ exceptionally deep connection।

✨ आपकी family role —
• Naturally caretaker role में fit हो जाते हैं — birth order कुछ भी हो
• माता जी से strong emotional bond है — उनका आप पर deep influence रहता है
• Real estate से भी connection strong है — property investments beneficial
• Mood home environment से deeply connected है — peaceful घर में best perform

🌟 आपकी विशेषता —
Inner security की feeling family से मिलती है।`,
      advice: `💡 family सुझाव —
• घर के space को deliberately peaceful और beautiful बनाओ
• Family rituals (weekly dinners, festivals, ancestral remembrance) maintain करो
• यह आपकी emotional roots हैं — इन्हें nurture करो`,
    },
    en: {
      title: "🏠 Moon in 4th House — The Family's Heart",
      description: `{name}, your Moon is in the 4th house — giving you an exceptionally deep connection with family and home.

✨ Your family role —
• You naturally fit into the caretaker role — regardless of birth order
• You have a strong emotional bond with your mother — her influence on you runs deep
• Your connection with real estate is strong — property investments can be beneficial
• Your mood is deeply connected to your home environment — you perform best in a peaceful home

🌟 Your special quality —
Your sense of inner security comes from family.`,
      advice: `💡 Family advice —
• Deliberately make your home space peaceful and beautiful
• Maintain family rituals (weekly dinners, festivals, ancestral remembrance)
• These are your emotional roots — nurture them`,
    },
  },

  {
    id: 'sun_9th_family',
    weight: 2,
    conditions: [ctx => ctx.p.sun?.house === 9],
    hi: {
      title: '☀️ धर्म भाव में सूर्य — पिता का आशीर्वाद',
      description: `{name}, आपका सूर्य 9वें घर में है — पिता और guru के साथ profound karmic connection।

✨ आपका family pattern —
• पिताजी का influence आपके life philosophy पर extraordinary है
• Higher education, foreign connections और dharmic pursuits में family support strong
• Siblings के साथ relationship generally good है
• Family में आप वो हैं जो wisdom और values आगे carry करते हैं

🌟 पिता का connection —
{sunSign} सूर्य की dignity यहाँ important है।`,
      advice: `💡 family सुझाव —
• पिताजी का specifically आशीर्वाद लो regularly
• 9th house का सूर्य Pitru Tarpan से pleased होता है
• Ancestors का regular remembrance family prosperity maintain करता है`,
    },
    en: {
     title: "☀️ Sun in 9th House — Father's Blessing",
      description: `{name}, your Sun is in the 9th house — indicating a profound karmic connection with your father and guru.

✨ Your family pattern —
• Your father's influence on your life philosophy is extraordinary
• Family support tends to be strong in higher education, foreign connections, and dharmic pursuits
• Your relationship with siblings is generally good
• In the family, you are the one who carries wisdom and values forward

🌟 Father's connection —
The dignity of your {sunSign} Sun here is important.`,
      advice: `💡 Family advice —
• Specifically seek your father's blessings regularly
• The 9th house Sun is pleased by Pitru Tarpan
• Regular ancestral remembrance maintains family prosperity`,
    },
  },

  {
    id: 'rahu_4th_family',
    weight: 2,
    conditions: [ctx => ctx.p.rahu?.house === 4],
    hi: {
      title: '🌀 सुख भाव में राहु — karmic family lessons',
      description: `{name}, आपका राहु 4वें घर में है।

✨ समझने वाली बात —
• Early home life में possible disruptions, relocations या unusual family dynamics
• माता जी के साथ relationship complex या unusual हो सकती है
• Foreign countries में settle होना, multiple homes — possible है

🌟 Positive side —
Foreign lands में better home और family life मिलती है often। Inner peace की खोज आपका lifetime spiritual journey है।`,
      advice: `💡 family सुझाव —
• घर में Vastu corrections करवाओ
• नियमित घर की सफाई और decluttering राहु की chaotic energy manage करता है
• माता जी की seva और उनसे relationship heal करना karmic priority है`,
    },
    en: {
      title: '🌀 Rahu in 4th House — Karmic Family Lessons',
      description: `{name}, your Rahu is in the 4th house.

✨ What this means —
• Possible disruptions, relocations, or unusual family dynamics in early home life
• Your relationship with your mother may be complex or unusual
• Settling in foreign countries or having multiple homes is possible

🌟 Positive side —
People with Rahu in 4th often find better home and family life in foreign lands. The search for inner peace is your lifetime spiritual journey.`,
      advice: `💡 Family advice —
• Get Vastu corrections done at home
• Regular cleaning and decluttering manages Rahu's chaotic energy
• Serving your mother and healing your relationship with her is a karmic priority`,
    },
  },

  {
    id: 'default_family',
    weight: 0,
    conditions: [],
    hi: {
      title: '👨‍👩‍👧‍👦 परिवार और घर — आपकी domestic destiny',
      description: `{name}, आपके family और home life का blueprint 4th घर, Moon की position से समझना आता है।

✨ आपकी family profile —
• {moonSign} चंद्र माता के साथ relationship और domestic life indicate करता है
• {sunSign} सूर्य पिता और dharmic lineage को represent करता है
• Current {mahadasha} महादशा family events को time करता है
• {isManglik ? "⚠️ मांगलिक योग — marriage में careful planning important" : "✅ मांगलिक योग नहीं"}
• {isSadeSati ? "⚠️ साढ़े साती active — extra patience और caution" : ""}`,
      advice: `💡 family सुझाव —
• Family के साथ regular quality time schedule करो
• हर हफ्ते minimum एक family meal together
• Ancestors का tarpan monthly करो`,
    },
    en: {
      title: '👨‍👩‍👧‍👦 Family & Home — Your Domestic Destiny',
      description: `{name}, your family and home life blueprint is understood through the 4th house and Moon's position.

✨ Your family profile —
• {moonSign} Moon indicates your relationship with your mother and domestic life
• {sunSign} Sun represents your father and dharmic lineage
• The current {mahadasha} Mahadasha times family events
• {isManglik ? "⚠️ Manglik yoga — careful planning important in marriage matters" : "✅ No Manglik yoga"}
• {isSadeSati ? "⚠️ Sade Sati active — extra patience and caution needed" : ""}`,
      advice: `💡 Family advice —
• Schedule regular quality time with family — not just emergency gatherings
• Have at least one family meal together every week
• Perform ancestral tarpan monthly`,
    },
  },
];


// ══════════════════════════════════════════════════════
// TIMELINE TEMPLATES
// ══════════════════════════════════════════════════════
export const timelineTemplates = [

  {
    id: 'strong_early_life',
    weight: 2,
    conditions: [
      ctx => [1, 5].includes(ctx.p.jupiter?.house) || ctx.p.sun?.dignity === 'exalted',
    ],
    hi: {
      title: '🗓️ {name} की जीवन यात्रा — divinely charted',
      description: `{name}, आपकी कुंडली के planetary placements एक beautiful life journey का outline करते हैं।

✨ जीवन के पड़ाव —
• 0-20 साल: बचपन comparatively protected था — अच्छे teachers, opportunities या family support
• 20-30 साल: {mahadasha} महादशा active — foundation building, career start, significant relationships
• 30-40 साल: जीवन की सबसे बड़ी achievements solidify होती हैं
• 40-50 साल: Wisdom और leadership phase — junior लोगों के mentor बनने का time
• 50+ साल: Legacy building और spiritual deepening

🌟 Special factor —
{yogas.length > 0 ? yogas.join(", ") + " योग present हैं — powerful life indicate करते हैं" : "Balanced planetary positions steady और meaningful life journey indicate करती हैं"}`,
      advice: `💡 life timeline सुझाव —
• हर decade एक specific theme पर focus करो
• 20s: foundation; 30s: outcomes; 40s: wisdom; 50s+: legacy
• Planetary timing के साथ flow करो, fight मत करो`,
    },
    en: {
      title: '🗓️ {name}\'s Life Journey — Divinely Charted',
      description: `{name}, your chart's planetary placements outline a beautiful life journey.

✨ Life phases —
• 0-20 years: Childhood was comparatively protected — good teachers, opportunities, or family support
• 20-30 years: {mahadasha} Mahadasha active — foundation building, career start, significant relationships
• 30-40 years: Life's biggest achievements solidify
• 40-50 years: Wisdom and leadership phase — time to become a mentor for juniors
• 50+ years: Legacy building and spiritual deepening

🌟 Special factor —
{yogas.length > 0 ? yogas.join(", ") + " yoga(s) present — indicating a powerful life" : "Balanced planetary positions indicate a steady and meaningful life journey"}`,
      advice: `💡 Life timeline advice —
• Focus on one specific theme per decade
• 20s: foundation; 30s: outcomes; 40s: wisdom; 50s+: legacy
• Flow with planetary timing, don't fight it`,
    },
  },

  {
    id: 'late_bloomer_timeline',
    weight: 2,
    conditions: [
      ctx => [1, 7, 10].includes(ctx.p.saturn?.house) || ctx.p.saturn?.dignity === 'exalted',
    ],
    hi: {
      title: '🌱 {name} की यात्रा — late bloomer की triumphant journey',
      description: `{name}, आपकी कुंडली में Saturn की prominent position — classic "late bloomer" pattern।

✨ आपका life pattern —
• Early years: responsibilities या limitations का sense होगा
• 20-30: Hard work और foundation laying — results delayed लेकिन quality high
• 30-40: Significant recognition और rewards शुरू होने लगते हैं
• 40-50: Peak career और authority positions
• 50+: Legacy और wisdom-sharing — सबसे fulfilling period typically

🌟 याद रखो —
शनि का lesson: जो धैर्य से build होता है वो permanently टिकता है। {yogas.length > 0 ? yogas.join(", ") + " योग इस positive trajectory को confirm करते हैं।" : ""}`,
      advice: `💡 life timeline सुझाव —
• Early years में comparison trap avoid करो — timeline different है, deficient नहीं
• हर साल एक significant skill deliberately develop करो
• Compound effect 40s में extraordinary results देगा
• शनि को guru मानो, enemy नहीं`,
    },
    en: {
      title: '🌱 {name}\'s Journey — The Late Bloomer\'s Triumph',
      description: `{name}, Saturn's prominent position in your chart indicates the classic "late bloomer" pattern.

✨ Your life pattern —
• Early years: A sense of responsibilities or limitations
• 20-30: Hard work and foundation-laying — results delayed but quality high
• 30-40: Significant recognition and rewards begin to arrive
• 40-50: Peak career and authority positions
• 50+: Legacy and wisdom-sharing — typically the most fulfilling period

🌟 Remember —
Saturn's lesson: what is built with patience lasts permanently. {yogas.length > 0 ? yogas.join(", ") + " yoga(s) confirm this positive trajectory." : ""}`,
      advice: `💡 Life timeline advice —
• Avoid the comparison trap in early years — your timeline is different, not deficient
• Deliberately develop one significant skill every year
• The compound effect will yield extraordinary results in your 40s
• See Saturn as your guru, not your enemy`,
    },
  },

  {
    id: 'default_timeline',
    weight: 0,
    conditions: [],
    hi: {
      title: '⏳ {name} की cosmic timeline — जीवन का सारांश',
      description: `{name}, आपकी जीवन यात्रा का सारांश planetary periods (Dasha system) से clearly दिखता है।

✨ आपकी timeline —
• Current: {mahadasha} महादशा {dashaEndYear} तक active है
• Next phase: {nextMahadasha} महादशा — अभी से prepare करना शुरू करो
• Life Path {lp} आपके overall जीवन का karmic theme है
• {isSadeSati ? "⚠️ साढ़े साती active — introspection और patience का phase" : "✅ साढ़े साती active नहीं — growth के लिए good period"}

🌟 Cosmic signature —
नक्षत्र {nakshatra}, {nakshatraLord} की ruling energy आपकी हर phase में present रहती है।`,
      advice: `💡 life timeline सुझाव —
• हर 7 साल एक life review करो
• सवाल पूछो: "मैं कहाँ था, मैं कहाँ हूँ, मैं कहाँ जाना चाहता हूँ?"
• Intentional जीवन जियो, accidental नहीं`,
    },
    en: {
      title: '⏳ {name}\'s Cosmic Timeline — Life\'s Summary',
      description: `{name}, your life journey is clearly visible through the planetary periods (Dasha system).

✨ Your timeline —
• Current: {mahadasha} Mahadasha active until {dashaEndYear}
• Next phase: {nextMahadasha} Mahadasha — start preparing for it now
• Life Path {lp} is the karmic theme of your overall life
• {isSadeSati ? "⚠️ Sade Sati active — a phase for introspection and patience" : "✅ Sade Sati not active — comparatively good period for growth"}

🌟 Cosmic signature —
The ruling energy of {nakshatra} Nakshatra and {nakshatraLord} is subtly present in every phase of your life.`,
      advice: `💡 Life timeline advice —
• Do a life review every 7 years
• Ask yourself: "Where was I, where am I, where do I want to go?"
• Live intentionally, not accidentally`,
    },
  },
];
