/* ==========================================================================
   UMRATUL BADAL — MAIN JAVASCRIPT
   main.js

   TABLE OF CONTENTS
   ─────────────────
   01. Language Definitions  (10 languages)
   02. Translation Strings   (all keys per language)
   03. App State             (current language & theme)
   04. Loading Screen
   05. Dark / Light Mode Toggle
   06. Language Switcher UI
   07. Apply Translations (i18n engine)
   08. Mobile Sidebar
   09. FAQ Accordion
   10. Navbar Scroll Effect
   11. Scroll Reveal Animations
   12. Animated Counters
   13. Back To Top Button
   14. Boot — initialise everything
   ========================================================================== */


/* ══════════════════════════════════════════════════════════
   01. LANGUAGE DEFINITIONS
   ══════════════════════════════════════════════════════════ */

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English',    native: 'English',   dir: 'ltr' },
  { code: 'ar', flag: '🇸🇦', label: 'Arabic',     native: 'العربية',   dir: 'rtl' },
  { code: 'fr', flag: '🇫🇷', label: 'French',     native: 'Français',  dir: 'ltr' },
  { code: 'es', flag: '🇪🇸', label: 'Spanish',    native: 'Español',   dir: 'ltr' },
  { code: 'tr', flag: '🇹🇷', label: 'Turkish',    native: 'Türkçe',    dir: 'ltr' },
  { code: 'ur', flag: '🇵🇰', label: 'Urdu',       native: 'اردو',      dir: 'rtl' },
  { code: 'id', flag: '🇮🇩', label: 'Indonesian', native: 'Bahasa ID', dir: 'ltr' },
  { code: 'ms', flag: '🇲🇾', label: 'Malay',      native: 'Bahasa MY', dir: 'ltr' },
  { code: 'de', flag: '🇩🇪', label: 'German',     native: 'Deutsch',   dir: 'ltr' },
  { code: 'ha', flag: '🇳🇬', label: 'Hausa',      native: 'Hausa',     dir: 'ltr' },
];


/* ══════════════════════════════════════════════════════════
   02. TRANSLATION STRINGS
   Each key matches a [data-i18n="key"] attribute in HTML.
   ══════════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  /* ─────────── ENGLISH ─────────── */
  en: {
    loading:           'Loading…',
    nav_home:          'Home',
    nav_services:      'Services',
    nav_how:           'How It Works',
    nav_donations:     'Donations',
    nav_why:           'Why Us',
    nav_faq:           'FAQ',
    nav_login:         'Login',
    hero_badge:        'Shariah-Approved · Mecca & Madinah',
    hero_subtitle:     'Perform Umrah & Hajj Badal on behalf of your loved ones through trusted, Shariah-certified representatives in the holy cities of Mecca and Madinah.',
    hero_cta_book:     'Book a Service',
    hero_cta_learn:    'Learn More',
    stat_umrahs:       'Umrahs Performed',
    stat_countries:    'Countries Served',
    stat_certified:    'Shariah Certified',
    stat_proof:        'Proof Delivery',
    trust_video:       'Live Video Proof',
    trust_scholars:    'Scholar-Supervised',
    trust_cert:        'Official Certificate',
    trust_shariah:     'Shariah Compliant',
    trust_support:     '24/7 WhatsApp Support',
    services_eyebrow:  'Our Sacred Services',
    services_title_a:  'Hajj &',
    services_title_b:  'Umrah Badal',
    services_desc:     'Choose a service performed by certified Islamic scholars residing in the Holy Cities',
    tag_complete:      'Most Complete',
    tag_popular:       'Most Popular',
    tag_reward:        'High Reward',
    hajj_title:        'Hajj Badal',
    hajj_desc:         'Full Hajj pilgrimage performed on behalf of your loved one who is unable due to illness, old age, or death.',
    hajj_f1:           'All 5 pillars of Hajj performed',
    hajj_f2:           'Full video & photo documentation',
    hajj_f3:           'Official certificate issued',
    hajj_f4:           'Supervised by qualified Ulama',
    umrah_title:       'Umrah Badal',
    umrah_desc:        'Proxy Umrah in Makkah performed with complete care and sincerity on behalf of any person — living or deceased.',
    umrah_f1:          "Tawaf, Sa'i & all rituals complete",
    umrah_f2:          'Video proof within 72 hours',
    umrah_f3:          'Digital certificate emailed',
    umrah_f4:          'For living or deceased persons',
    ramadan_title:     'Ramadan Umrah Badal',
    ramadan_desc:      'Umrah performed during the blessed month of Ramadan — equivalent in reward to a full Hajj according to authentic Hadith.',
    ramadan_f1:        'Performed in Ramadan nights',
    ramadan_f2:        'Multiplied spiritual reward',
    ramadan_f3:        'Full documentation provided',
    ramadan_f4:        'Priority scheduling available',
    book_hajj:         'Book Hajj Badal',
    book_umrah:        'Book Umrah Badal',
    book_ramadan:      'Book Ramadan Umrah',
    from:              'from',
    how_eyebrow:       'Simple Process',
    how_title_a:       'How It',
    how_title_b:       'Works',
    how_desc:          'Four simple steps to fulfil this sacred act of worship for your loved one',
    step1_title:       'Select Service',
    step1_desc:        'Choose from Umrah Badal, Hajj Badal, or Ramadan Umrah — for living or deceased.',
    step2_title:       'Provide Details',
    step2_desc:        'Share the name of the person the ritual is for and complete your secure payment.',
    step3_title:       'We Perform',
    step3_desc:        'Our certified scholar performs all rituals in Makkah with full sincerity and precision.',
    step4_title:       'Receive Proof',
    step4_desc:        'Get your video proof, photos, and official digital certificate within 72 hours.',
    donations_eyebrow: 'Sadaqah Jariyah',
    donations_title_a: 'Donate to the',
    donations_title_b: 'Holy Cities',
    donations_desc:    'Earn continuous blessings through charitable giving in Mecca and Madinah',
    don1_title:        'Wheelchair Donation',
    don1_desc:         'Provide mobility assistance for elderly and disabled pilgrims performing Tawaf.',
    don2_title:        "Qur'an Donation",
    don2_desc:         "Donate 5 copies of the Holy Qur'an to pilgrims visiting the Masjid al-Haram.",
    don3_title:        'Qurbani Sacrifice',
    don3_desc:         'Sheep slaughtered in Makkah during Hajj season on your behalf.',
    don4_title:        'Feed Pilgrims',
    don4_desc:         'Sponsor Iftar meals and food packages for pilgrims in Makkah.',
    don5_title:        'Zamzam Water',
    don5_desc:         'Donate boxes of blessed Zamzam water — a box of 40 bottles for pilgrims.',
    don_cta_title:     'Give Sadaqah Today',
    don_cta_quote:     '"Charity does not decrease wealth" — Prophet Muhammad ﷺ',
    don_cta_btn:       'View All Donations',
    cert_title:        'What You Receive',
    cert1:             'HD Video of rituals performed in Makkah',
    cert2:             'Multiple photographs from Holy sites',
    cert3:             'Official digital certificate with name',
    cert4:             'Written confirmation from our scholar',
    cert5:             'Delivered within 72 hours by email',
    cert6:             'WhatsApp notification on completion',
    cert_badge:        'Certificates Issued',
    why_eyebrow:       'Why Choose Us',
    why_title_a:       'Trust &',
    why_title_b:       'Authenticity',
    why1_title:        'Scholars in Makkah',
    why1_desc:         'All rituals are performed by qualified Islamic scholars (Ulama) residing in the Holy Cities — not remote agents.',
    why2_title:        'Shariah Compliant',
    why2_desc:         'Every service follows Shariah rulings on Badal as verified by multiple Islamic institutions and scholars.',
    why3_title:        'Certified & Transparent',
    why3_desc:         'A legally registered, fully accountable organisation trusted by clients worldwide.',
    why4_title:        'Serving 40+ Countries',
    why4_desc:         'Muslims from the USA, UK, Canada, Australia, Malaysia, and beyond trust our service every year.',
    testi_eyebrow:     'Testimonials',
    testi_title_a:     'Words from Our',
    testi_title_b:     'Clients',
    testi1_text:       'I ordered Umrah Badal for my late mother and received a beautiful certificate and video within two days. May Allah accept it.',
    testi2_text:       'My father passed away without completing Hajj. Umratul Badal helped us perform Hajj Badal on his behalf. We felt such peace.',
    testi3_text:       'Ordered Ramadan Umrah Badal for my elderly mother. The video proof was touching — she cried watching her name mentioned in the Haram.',
    faq_eyebrow:       'Common Questions',
    faq_title_a:       'Frequently Asked',
    faq_title_b:       'Questions',
    faq1_q:            'What is Umrah Badal (Proxy Umrah)?',
    faq1_a:            'Umrah Badal is when a Muslim performs Umrah on behalf of another person who is unable to do so — due to illness, old age, disability, or death. It is supported by authentic Islamic scholarship.',
    faq2_q:            'Is Proxy Umrah permitted in Islam?',
    faq2_a:            'Yes. The Prophet ﷺ permitted Hajj to be performed on behalf of those who are unable. The majority of Islamic scholars consider Umrah Badal similarly permissible.',
    faq3_q:            'Can I order it for a deceased family member?',
    faq3_a:            'Yes. You may order an Umrah Badal or Hajj Badal for a deceased person as an act of Sadaqah Jariyah. Please provide their full name when booking.',
    faq4_q:            'What proof will I receive?',
    faq4_a:            "Within 72 hours: an HD video, photos from the Holy Mosque, an official digital certificate with the person's name, and written confirmation from our scholar.",
    faq5_q:            'Who performs the Umrah or Hajj?',
    faq5_a:            'All rituals are performed by qualified Islamic scholars (Ulama) residing in or near Makkah. They perform every ritual with sincerity and according to Shariah.',
    faq6_q:            'Is this service certified and trustworthy?',
    faq6_a:            'Yes. Umratul Badal is a legally registered, fully accountable organisation. We operate with complete transparency and have served clients across 40+ countries.',
    cta_title:         'Ready to Fulfil This Sacred Obligation?',
    cta_sub:           'Let us perform Umrah or Hajj Badal for your loved ones with sincerity, care, and full documentation.',
    cta_btn_book:      'Book a Service',
    cta_btn_wa:        'WhatsApp Us',
    footer_tagline:    'Trusted Proxy Umrah and Hajj Badal services, performed by certified scholars in the Holy Cities of Mecca and Madinah.',
    footer_services:   'Services',
    footer_contact:    'Contact',
    footer_all_services: 'All Services',
    footer_rights:     'All rights reserved.',
    footer_cert:       'Shariah Certified · Trusted Worldwide',
  },

  /* ─────────── ARABIC ─────────── */
  ar: {
    loading:           'جارٍ التحميل…',
    nav_home:          'الرئيسية',
    nav_services:      'الخدمات',
    nav_how:           'كيف يعمل',
    nav_donations:     'التبرعات',
    nav_why:           'لماذا نحن',
    nav_faq:           'الأسئلة الشائعة',
    nav_login:         'تسجيل الدخول',
    hero_badge:        'معتمد شرعياً · مكة المكرمة والمدينة المنورة',
    hero_subtitle:     'أدّ العمرة والحج البدل نيابةً عن أحبائك عبر ممثلين موثوقين معتمدين شرعياً في مكة المكرمة والمدينة المنورة.',
    hero_cta_book:     'احجز خدمة',
    hero_cta_learn:    'اعرف المزيد',
    stat_umrahs:       'عمرة منجزة',
    stat_countries:    'دول نخدمها',
    stat_certified:    'معتمد شرعياً',
    stat_proof:        'تسليم الإثبات',
    trust_video:       'إثبات بالفيديو المباشر',
    trust_scholars:    'بإشراف علماء',
    trust_cert:        'شهادة رسمية',
    trust_shariah:     'متوافق مع الشريعة',
    trust_support:     'دعم واتساب ٢٤/٧',
    services_eyebrow:  'خدماتنا المقدسة',
    services_title_a:  'الحج و',
    services_title_b:  'العمرة البدل',
    services_desc:     'اختر خدمة يؤديها علماء شرعيون معتمدون يقيمون في البلد الحرام',
    tag_complete:      'الأكثر شمولاً',
    tag_popular:       'الأكثر طلباً',
    tag_reward:        'أجر عظيم',
    hajj_title:        'حج البدل',
    hajj_desc:         'أداء فريضة الحج كاملةً نيابةً عن ذويك الذين يعجزون بسبب المرض أو الكبر أو الوفاة.',
    hajj_f1:           'أداء جميع أركان الحج الخمسة',
    hajj_f2:           'توثيق كامل بالفيديو والصور',
    hajj_f3:           'إصدار شهادة رسمية',
    hajj_f4:           'بإشراف علماء مؤهلين',
    umrah_title:       'عمرة البدل',
    umrah_desc:        'أداء العمرة بالنيابة في مكة المكرمة بكامل العناية والإخلاص عن أي شخص حياً كان أم ميتاً.',
    umrah_f1:          'الطواف والسعي وجميع الشعائر كاملة',
    umrah_f2:          'إثبات بالفيديو خلال ٧٢ ساعة',
    umrah_f3:          'شهادة رقمية ترسل بالبريد الإلكتروني',
    umrah_f4:          'للأحياء والأموات',
    ramadan_title:     'عمرة رمضان البدل',
    ramadan_desc:      'أداء العمرة في شهر رمضان المبارك — تعادل أجر حجة كاملة وفق حديث صحيح.',
    ramadan_f1:        'تُؤدَّى في ليالي رمضان',
    ramadan_f2:        'أجر مضاعف',
    ramadan_f3:        'توثيق كامل',
    ramadan_f4:        'جدولة ذات أولوية',
    book_hajj:         'احجز حج البدل',
    book_umrah:        'احجز عمرة البدل',
    book_ramadan:      'احجز عمرة رمضان',
    from:              'ابتداءً من',
    how_eyebrow:       'خطوات بسيطة',
    how_title_a:       'كيف',
    how_title_b:       'يعمل',
    how_desc:          'أربع خطوات بسيطة لأداء هذه الشعيرة المقدسة نيابةً عن أحبائك',
    step1_title:       'اختر الخدمة',
    step1_desc:        'اختر بين عمرة البدل وحج البدل وعمرة رمضان للأحياء والأموات.',
    step2_title:       'قدّم التفاصيل',
    step2_desc:        'أرسل اسم الشخص المُؤدَّى عنه وأتمّ الدفع الآمن.',
    step3_title:       'نؤدّيها عنك',
    step3_desc:        'يؤدي عالمنا المعتمد جميع الشعائر في مكة المكرمة بإخلاص تام.',
    step4_title:       'استلم الإثبات',
    step4_desc:        'احصل على الفيديو والصور والشهادة الرسمية خلال ٧٢ ساعة.',
    donations_eyebrow: 'صدقة جارية',
    donations_title_a: 'تبرع إلى',
    donations_title_b: 'البلد الحرام',
    donations_desc:    'اكسب بركات مستمرة بالصدقة في مكة المكرمة والمدينة المنورة',
    don1_title:        'التبرع بكراسي متحركة',
    don1_desc:         'وفّر المساعدة للحجاج كبار السن وذوي الإعاقة أثناء الطواف.',
    don2_title:        'التبرع بالمصاحف',
    don2_desc:         'أهدِ ٥ نسخ من القرآن الكريم لحجاج المسجد الحرام.',
    don3_title:        'الأضحية',
    don3_desc:         'ذبح الكبش في مكة المكرمة خلال موسم الحج نيابةً عنك.',
    don4_title:        'إطعام الحجاج',
    don4_desc:         'كفّل وجبات الإفطار ومستلزمات الطعام للحجاج في مكة.',
    don5_title:        'ماء زمزم',
    don5_desc:         'تبرع بصناديق ماء زمزم المبارك — كل صندوق ٤٠ قارورة.',
    don_cta_title:     'تبرع بالصدقة اليوم',
    don_cta_quote:     '"الصدقة لا تنقص المال" — النبي محمد ﷺ',
    don_cta_btn:       'عرض جميع التبرعات',
    cert_title:        'ما ستحصل عليه',
    cert1:             'فيديو عالي الجودة للشعائر في مكة',
    cert2:             'صور متعددة من المواقع المقدسة',
    cert3:             'شهادة رقمية رسمية باسمك',
    cert4:             'تأكيد مكتوب من العالم',
    cert5:             'التسليم خلال ٧٢ ساعة بالبريد الإلكتروني',
    cert6:             'إشعار واتساب عند الانتهاء',
    cert_badge:        'شهادة صادرة',
    why_eyebrow:       'لماذا تختارنا',
    why_title_a:       'الثقة و',
    why_title_b:       'الأصالة',
    why1_title:        'علماء في مكة',
    why1_desc:         'تُؤدَّى جميع الشعائر بواسطة علماء إسلاميين مؤهلين يقيمون في البلد الحرام.',
    why2_title:        'متوافق مع الشريعة',
    why2_desc:         'كل خدمة تتبع أحكام الشريعة الإسلامية المتعلقة بالبدل المعتمدة من مؤسسات علمية متعددة.',
    why3_title:        'معتمد وشفاف',
    why3_desc:         'مؤسسة مسجلة قانونياً وكاملة المساءلة يثق بها عملاء من حول العالم.',
    why4_title:        'نخدم أكثر من ٤٠ دولة',
    why4_desc:         'مسلمو الولايات المتحدة والمملكة المتحدة وكندا وأستراليا وماليزيا وغيرها يثقون بخدماتنا.',
    testi_eyebrow:     'آراء العملاء',
    testi_title_a:     'كلمات من',
    testi_title_b:     'عملائنا',
    testi1_text:       'طلبت عمرة بدل لوالدتي المتوفاة وتلقيت شهادة وفيديو جميلاً في غضون يومين. تقبّل الله.',
    testi2_text:       'توفي والدي دون أن يؤدي الحج. ساعدنا فريق عمرة البدل على أداء حج بدل عنه. شعرنا بالسكينة.',
    testi3_text:       'طلبت عمرة رمضان البدل لأمي العجوز. الفيديو كان مؤثراً جداً — بكت وهي ترى اسمها يُذكر في الحرم.',
    faq_eyebrow:       'أسئلة شائعة',
    faq_title_a:       'الأسئلة',
    faq_title_b:       'المتكررة',
    faq1_q:            'ما هي عمرة البدل؟',
    faq1_a:            'عمرة البدل هي أن يؤدي مسلم العمرة نيابةً عن شخص آخر عاجز بسبب المرض أو الكبر أو العجز أو الوفاة، وهو أمر ثابت بالسنة النبوية.',
    faq2_q:            'هل عمرة البدل جائزة شرعاً؟',
    faq2_a:            'نعم. أجاز النبي ﷺ الحج نيابةً عن العاجز، ويرى جمهور العلماء أن عمرة البدل جائزة بالمثل.',
    faq3_q:            'هل يمكنني طلبها لشخص متوفى؟',
    faq3_a:            'نعم. يجوز طلب عمرة البدل أو حج البدل عن المتوفى صدقةً جاريةً. يُرجى ذكر اسمه الكامل عند الحجز.',
    faq4_q:            'ما الإثبات الذي سأحصل عليه؟',
    faq4_a:            'خلال ٧٢ ساعة: فيديو عالي الجودة وصور من المسجد الحرام وشهادة رقمية رسمية وتأكيد مكتوب من العالم.',
    faq5_q:            'من يؤدي العمرة أو الحج؟',
    faq5_a:            'تُؤدَّى جميع الشعائر بواسطة علماء إسلاميين مؤهلين يقيمون في مكة أو قربها، يؤدون كل شعيرة بإخلاص وفق الشريعة.',
    faq6_q:            'هل هذه الخدمة معتمدة وموثوقة؟',
    faq6_a:            'نعم. عمرة البدل مؤسسة مسجلة قانونياً وكاملة الشفافية، خدمت عملاء في أكثر من ٤٠ دولة.',
    cta_title:         'هل أنت مستعد لأداء هذا الواجب المقدس؟',
    cta_sub:           'دعنا نؤدي العمرة أو حج البدل عن أحبائك بإخلاص وعناية وتوثيق كامل.',
    cta_btn_book:      'احجز خدمة',
    cta_btn_wa:        'تواصل عبر واتساب',
    footer_tagline:    'خدمات موثوقة لعمرة البدل وحج البدل تُؤدَّى بواسطة علماء معتمدين في البلد الحرام.',
    footer_services:   'الخدمات',
    footer_contact:    'التواصل',
    footer_all_services: 'جميع الخدمات',
    footer_rights:     'جميع الحقوق محفوظة.',
    footer_cert:       'معتمد شرعياً · موثوق عالمياً',
  },

  /* ─────────── FRENCH ─────────── */
  fr: {
    loading:           'Chargement…',
    nav_home:          'Accueil',
    nav_services:      'Services',
    nav_how:           'Comment ça marche',
    nav_donations:     'Dons',
    nav_why:           'Pourquoi nous',
    nav_faq:           'FAQ',
    nav_login:         'Connexion',
    hero_badge:        'Approuvé par la Charia · La Mecque & Médine',
    hero_subtitle:     "Accomplissez l'Omra et le Hajj Badal au nom de vos proches par des représentants de confiance certifiés selon la Charia à La Mecque et à Médine.",
    hero_cta_book:     'Réserver un service',
    hero_cta_learn:    'En savoir plus',
    stat_umrahs:       'Omras accomplies',
    stat_countries:    'Pays servis',
    stat_certified:    'Certifié Charia',
    stat_proof:        'Livraison de preuves',
    trust_video:       'Preuve vidéo en direct',
    trust_scholars:    'Supervisé par des savants',
    trust_cert:        'Certificat officiel',
    trust_shariah:     'Conforme à la Charia',
    trust_support:     'Support WhatsApp 24/7',
    services_eyebrow:  'Nos services sacrés',
    services_title_a:  'Hajj &',
    services_title_b:  'Omra Badal',
    services_desc:     'Choisissez un service accompli par des savants islamiques certifiés résidant dans les Villes Saintes',
    tag_complete:      'Le plus complet',
    tag_popular:       'Le plus populaire',
    tag_reward:        'Grande récompense',
    hajj_title:        'Hajj Badal',
    hajj_desc:         "Pèlerinage du Hajj complet accompli au nom de votre proche incapable en raison de maladie, vieillesse ou décès.",
    hajj_f1:           'Les 5 piliers du Hajj accomplis',
    hajj_f2:           'Documentation vidéo et photo complète',
    hajj_f3:           'Certificat officiel délivré',
    hajj_f4:           'Supervisé par des Oulémas qualifiés',
    umrah_title:       'Omra Badal',
    umrah_desc:        "Omra par procuration à La Mecque accomplie avec soin et sincérité au nom de toute personne — vivante ou décédée.",
    umrah_f1:          "Tawaf, Sa'i & tous les rites accomplis",
    umrah_f2:          'Preuve vidéo dans les 72 heures',
    umrah_f3:          'Certificat numérique envoyé par e-mail',
    umrah_f4:          'Pour les personnes vivantes ou décédées',
    ramadan_title:     'Omra Ramadan Badal',
    ramadan_desc:      'Omra accomplie durant le béni mois de Ramadan — équivalent en récompense à un Hajj complet selon un hadith authentique.',
    ramadan_f1:        'Accomplie les nuits de Ramadan',
    ramadan_f2:        'Récompense spirituelle multipliée',
    ramadan_f3:        'Documentation complète fournie',
    ramadan_f4:        'Programmation prioritaire disponible',
    book_hajj:         'Réserver le Hajj Badal',
    book_umrah:        "Réserver l'Omra Badal",
    book_ramadan:      "Réserver l'Omra Ramadan",
    from:              'à partir de',
    how_eyebrow:       'Processus simple',
    how_title_a:       'Comment ça',
    how_title_b:       'marche',
    how_desc:          "Quatre étapes simples pour accomplir cet acte sacré d'adoration pour votre proche",
    step1_title:       'Choisir le service',
    step1_desc:        'Choisissez entre Omra Badal, Hajj Badal ou Omra Ramadan — pour vivants ou défunts.',
    step2_title:       'Fournir les détails',
    step2_desc:        'Partagez le nom de la personne concernée et effectuez votre paiement sécurisé.',
    step3_title:       'Nous accomplissons',
    step3_desc:        'Notre savant certifié accomplit tous les rites à La Mecque avec sincérité et précision.',
    step4_title:       'Recevoir la preuve',
    step4_desc:        'Obtenez votre vidéo, photos et certificat numérique officiel dans les 72 heures.',
    donations_eyebrow: 'Sadaqa Jariya',
    donations_title_a: 'Faites un don aux',
    donations_title_b: 'Villes Saintes',
    donations_desc:    'Gagnez des bénédictions continues par la charité à La Mecque et Médine',
    don1_title:        'Don de fauteuil roulant',
    don1_desc:         'Fournissez une aide à la mobilité pour les pèlerins âgés et handicapés lors du Tawaf.',
    don2_title:        'Don du Coran',
    don2_desc:         "Offrez 5 exemplaires du Saint Coran aux pèlerins visitant la Masjid al-Haram.",
    don3_title:        'Sacrifice Qurbani',
    don3_desc:         'Mouton égorgé à La Mecque pendant la saison du Hajj en votre nom.',
    don4_title:        'Nourrir les pèlerins',
    don4_desc:         "Parrainer des repas d'Iftar et des colis alimentaires pour les pèlerins à La Mecque.",
    don5_title:        'Eau Zamzam',
    don5_desc:         'Offrez des boîtes d\'eau Zamzam bénie — une boîte de 40 bouteilles pour les pèlerins.',
    don_cta_title:     "Donnez une Sadaqa aujourd'hui",
    don_cta_quote:     '"La charité ne diminue pas la richesse" — Prophète Muhammad ﷺ',
    don_cta_btn:       'Voir tous les dons',
    cert_title:        'Ce que vous recevez',
    cert1:             'Vidéo HD des rites accomplis à La Mecque',
    cert2:             'Plusieurs photographies des lieux saints',
    cert3:             'Certificat numérique officiel avec le nom',
    cert4:             'Confirmation écrite de notre savant',
    cert5:             'Livré dans les 72 heures par e-mail',
    cert6:             'Notification WhatsApp à la fin',
    cert_badge:        'Certificats émis',
    why_eyebrow:       'Pourquoi nous choisir',
    why_title_a:       'Confiance &',
    why_title_b:       'Authenticité',
    why1_title:        'Savants à La Mecque',
    why1_desc:         'Tous les rites sont accomplis par des savants islamiques qualifiés résidant dans les Villes Saintes.',
    why2_title:        'Conforme à la Charia',
    why2_desc:         'Chaque service suit les règles de la Charia sur le Badal vérifiées par plusieurs institutions islamiques.',
    why3_title:        'Certifié & transparent',
    why3_desc:         'Une organisation légalement enregistrée, entièrement responsable et fiable, reconnue par des clients du monde entier.',
    why4_title:        'Au service de 40+ pays',
    why4_desc:         "Des musulmans des USA, du Royaume-Uni, du Canada, d'Australie, de Malaisie et d'ailleurs font confiance à notre service.",
    testi_eyebrow:     'Témoignages',
    testi_title_a:     'Paroles de nos',
    testi_title_b:     'Clients',
    testi1_text:       "J'ai commandé l'Omra Badal pour ma défunte mère et j'ai reçu un beau certificat et une vidéo en deux jours. Qu'Allah accepte.",
    testi2_text:       'Mon père est décédé sans accomplir le Hajj. Umratul Badal nous a aidés à accomplir le Hajj Badal en son nom. Quelle paix.',
    testi3_text:       "J'ai commandé l'Omra Ramadan Badal pour ma vieille mère. La vidéo était émouvante — elle a pleuré en entendant son nom au Haram.",
    faq_eyebrow:       'Questions fréquentes',
    faq_title_a:       'Questions',
    faq_title_b:       'Fréquentes',
    faq1_q:            "Qu'est-ce que l'Omra Badal (Omra par procuration) ?",
    faq1_a:            "L'Omra Badal est l'accomplissement de l'Omra au nom d'une personne dans l'incapacité de le faire — par maladie, vieillesse, invalidité ou décès.",
    faq2_q:            "L'Omra par procuration est-elle permise en Islam ?",
    faq2_a:            "Oui. Le Prophète ﷺ a permis le Hajj au nom des incapables. La majorité des savants islamiques considèrent l'Omra Badal pareillement permise.",
    faq3_q:            'Puis-je le commander pour un membre de la famille décédé ?',
    faq3_a:            "Oui. Vous pouvez commander une Omra Badal ou un Hajj Badal pour un défunt en tant que Sadaqa Jariya. Fournissez leur nom complet lors de la réservation.",
    faq4_q:            'Quelle preuve vais-je recevoir ?',
    faq4_a:            "Dans les 72 heures : une vidéo HD, des photos de la Mosquée Sacrée, un certificat numérique officiel et la confirmation écrite de notre savant.",
    faq5_q:            "Qui accomplit l'Omra ou le Hajj ?",
    faq5_a:            "Tous les rites sont accomplis par des savants islamiques qualifiés résidant à La Mecque ou à proximité, avec sincérité et selon la Charia.",
    faq6_q:            'Ce service est-il certifié et fiable ?',
    faq6_a:            "Oui. Umratul Badal est une organisation légalement enregistrée et entièrement transparente. Nous avons servi des clients dans plus de 40 pays.",
    cta_title:         'Prêt à accomplir cette obligation sacrée ?',
    cta_sub:           "Laissez-nous accomplir l'Omra ou le Hajj Badal pour vos proches avec sincérité, soin et documentation complète.",
    cta_btn_book:      'Réserver un service',
    cta_btn_wa:        'Nous contacter sur WhatsApp',
    footer_tagline:    "Services fiables d'Omra Badal et de Hajj Badal accomplis par des savants certifiés dans les Villes Saintes.",
    footer_services:   'Services',
    footer_contact:    'Contact',
    footer_all_services: 'Tous les services',
    footer_rights:     'Tous droits réservés.',
    footer_cert:       'Certifié Charia · Fiable dans le monde entier',
  },

  /* ─────────── SPANISH ─────────── */
  es: {
    loading:           'Cargando…',
    nav_home:          'Inicio',
    nav_services:      'Servicios',
    nav_how:           'Cómo funciona',
    nav_donations:     'Donaciones',
    nav_why:           'Por qué nosotros',
    nav_faq:           'Preguntas',
    nav_login:         'Iniciar sesión',
    hero_badge:        'Aprobado por la Sharia · La Meca & Medina',
    hero_subtitle:     'Realice Umrah y Hajj Badal en nombre de sus seres queridos a través de representantes de confianza certificados por la Sharia en La Meca y Medina.',
    hero_cta_book:     'Reservar un servicio',
    hero_cta_learn:    'Saber más',
    stat_umrahs:       'Umrahs realizadas',
    stat_countries:    'Países atendidos',
    stat_certified:    'Certificado por la Sharia',
    stat_proof:        'Entrega de prueba',
    trust_video:       'Prueba en vídeo en directo',
    trust_scholars:    'Supervisado por eruditos',
    trust_cert:        'Certificado oficial',
    trust_shariah:     'Conforme a la Sharia',
    trust_support:     'Soporte WhatsApp 24/7',
    services_eyebrow:  'Nuestros servicios sagrados',
    services_title_a:  'Hajj y',
    services_title_b:  'Umrah Badal',
    services_desc:     'Elija un servicio realizado por eruditos islámicos certificados que residen en las Ciudades Santas',
    tag_complete:      'Más completo',
    tag_popular:       'Más popular',
    tag_reward:        'Alta recompensa',
    hajj_title:        'Hajj Badal',
    hajj_desc:         'Peregrinación completa del Hajj realizada en nombre de su ser querido que no puede hacerlo por enfermedad, vejez o fallecimiento.',
    hajj_f1:           'Los 5 pilares del Hajj realizados',
    hajj_f2:           'Documentación completa en vídeo y fotos',
    hajj_f3:           'Certificado oficial emitido',
    hajj_f4:           'Supervisado por Ulema cualificados',
    umrah_title:       'Umrah Badal',
    umrah_desc:        'Umrah por procuración en La Meca realizada con pleno cuidado y sinceridad en nombre de cualquier persona — viva o fallecida.',
    umrah_f1:          "Tawaf, Sa'i y todos los ritos completos",
    umrah_f2:          'Prueba en vídeo en 72 horas',
    umrah_f3:          'Certificado digital enviado por correo',
    umrah_f4:          'Para personas vivas o fallecidas',
    ramadan_title:     'Umrah Ramadán Badal',
    ramadan_desc:      'Umrah realizada durante el bendito mes de Ramadán — equivalente en recompensa a un Hajj completo según hadith auténtico.',
    ramadan_f1:        'Realizada en las noches de Ramadán',
    ramadan_f2:        'Recompensa espiritual multiplicada',
    ramadan_f3:        'Documentación completa proporcionada',
    ramadan_f4:        'Programación prioritaria disponible',
    book_hajj:         'Reservar Hajj Badal',
    book_umrah:        'Reservar Umrah Badal',
    book_ramadan:      'Reservar Umrah Ramadán',
    from:              'desde',
    how_eyebrow:       'Proceso sencillo',
    how_title_a:       'Cómo',
    how_title_b:       'funciona',
    how_desc:          'Cuatro sencillos pasos para cumplir este sagrado acto de adoración por su ser querido',
    step1_title:       'Seleccionar servicio',
    step1_desc:        'Elija entre Umrah Badal, Hajj Badal o Umrah Ramadán — para vivos o fallecidos.',
    step2_title:       'Proporcionar detalles',
    step2_desc:        'Comparta el nombre de la persona y complete su pago seguro.',
    step3_title:       'Nosotros realizamos',
    step3_desc:        'Nuestro erudito certificado realiza todos los ritos en La Meca con plena sinceridad.',
    step4_title:       'Recibir prueba',
    step4_desc:        'Reciba su vídeo, fotos y certificado digital oficial en 72 horas.',
    donations_eyebrow: 'Sadaqa Jariya',
    donations_title_a: 'Done a las',
    donations_title_b: 'Ciudades Santas',
    donations_desc:    'Gane bendiciones continuas a través de donaciones caritativas en La Meca y Medina',
    don1_title:        'Donación de silla de ruedas',
    don1_desc:         'Brinde asistencia de movilidad a peregrinos ancianos y discapacitados durante el Tawaf.',
    don2_title:        'Donación del Corán',
    don2_desc:         'Done 5 copias del Santo Corán a peregrinos que visitan la Masjid al-Haram.',
    don3_title:        'Sacrificio Qurbani',
    don3_desc:         'Oveja sacrificada en La Meca durante la temporada del Hajj en su nombre.',
    don4_title:        'Alimentar a peregrinos',
    don4_desc:         'Patrocine comidas de Iftar y paquetes de alimentos para peregrinos en La Meca.',
    don5_title:        'Agua Zamzam',
    don5_desc:         'Done cajas de agua Zamzam bendita — una caja de 40 botellas para peregrinos.',
    don_cta_title:     'Dé Sadaqa hoy',
    don_cta_quote:     '"La caridad no disminuye la riqueza" — Profeta Muhammad ﷺ',
    don_cta_btn:       'Ver todas las donaciones',
    cert_title:        'Lo que recibirá',
    cert1:             'Vídeo HD de los ritos realizados en La Meca',
    cert2:             'Múltiples fotografías de los lugares sagrados',
    cert3:             'Certificado digital oficial con el nombre',
    cert4:             'Confirmación escrita de nuestro erudito',
    cert5:             'Entregado en 72 horas por correo electrónico',
    cert6:             'Notificación por WhatsApp al finalizar',
    cert_badge:        'Certificados emitidos',
    why_eyebrow:       'Por qué elegirnos',
    why_title_a:       'Confianza y',
    why_title_b:       'Autenticidad',
    why1_title:        'Eruditos en La Meca',
    why1_desc:         'Todos los ritos son realizados por eruditos islámicos cualificados que residen en las Ciudades Santas.',
    why2_title:        'Conforme a la Sharia',
    why2_desc:         'Cada servicio sigue las normas de la Sharia sobre el Badal verificadas por múltiples instituciones islámicas.',
    why3_title:        'Certificado y transparente',
    why3_desc:         'Una organización legalmente registrada y plenamente responsable de confianza para clientes de todo el mundo.',
    why4_title:        'Atendemos más de 40 países',
    why4_desc:         'Musulmanes de EE.UU., Reino Unido, Canadá, Australia, Malasia y otros confían en nuestro servicio.',
    testi_eyebrow:     'Testimonios',
    testi_title_a:     'Palabras de nuestros',
    testi_title_b:     'Clientes',
    testi1_text:       'Pedí Umrah Badal para mi difunta madre y recibí un hermoso certificado y vídeo en dos días. Que Allah lo acepte.',
    testi2_text:       'Mi padre falleció sin completar el Hajj. Umratul Badal nos ayudó a realizar el Hajj Badal en su nombre. Qué paz sentimos.',
    testi3_text:       'Pedí Umrah Ramadán Badal para mi anciana madre. El vídeo fue conmovedor — lloró al ver su nombre mencionado en el Haram.',
    faq_eyebrow:       'Preguntas frecuentes',
    faq_title_a:       'Preguntas',
    faq_title_b:       'Frecuentes',
    faq1_q:            '¿Qué es la Umrah Badal (Umrah por procuración)?',
    faq1_a:            'La Umrah Badal consiste en que un musulmán realice la Umrah en nombre de otra persona que no puede hacerlo por enfermedad, vejez, discapacidad o muerte.',
    faq2_q:            '¿Está permitida la Umrah por procuración en el Islam?',
    faq2_a:            'Sí. El Profeta ﷺ permitió el Hajj en nombre de los incapacitados. La mayoría de los eruditos islámicos consideran la Umrah Badal igualmente permisible.',
    faq3_q:            '¿Puedo pedirlo para un familiar fallecido?',
    faq3_a:            'Sí. Puede pedir una Umrah Badal o Hajj Badal para un fallecido como Sadaqa Jariya. Proporcione su nombre completo al reservar.',
    faq4_q:            '¿Qué prueba recibiré?',
    faq4_a:            "En 72 horas: un vídeo HD, fotos de la Mezquita Sagrada, un certificado digital oficial y la confirmación escrita de nuestro erudito.",
    faq5_q:            '¿Quién realiza la Umrah o el Hajj?',
    faq5_a:            'Todos los ritos son realizados por eruditos islámicos cualificados que residen en La Meca o sus alrededores, con sinceridad y según la Sharia.',
    faq6_q:            '¿Es este servicio certificado y confiable?',
    faq6_a:            'Sí. Umratul Badal es una organización legalmente registrada y completamente transparente. Hemos servido a clientes en más de 40 países.',
    cta_title:         '¿Listo para cumplir esta sagrada obligación?',
    cta_sub:           'Permítanos realizar Umrah o Hajj Badal por sus seres queridos con sinceridad, cuidado y documentación completa.',
    cta_btn_book:      'Reservar un servicio',
    cta_btn_wa:        'Contáctenos por WhatsApp',
    footer_tagline:    'Servicios fiables de Umrah Badal y Hajj Badal realizados por eruditos certificados en las Ciudades Santas.',
    footer_services:   'Servicios',
    footer_contact:    'Contacto',
    footer_all_services: 'Todos los servicios',
    footer_rights:     'Todos los derechos reservados.',
    footer_cert:       'Certificado por la Sharia · Confiable en todo el mundo',
  },

  /* ─────────── TURKISH ─────────── */
  tr: {
    loading:           'Yükleniyor…',
    nav_home:          'Ana Sayfa',
    nav_services:      'Hizmetler',
    nav_how:           'Nasıl Çalışır',
    nav_donations:     'Bağışlar',
    nav_why:           'Neden Biz',
    nav_faq:           'SSS',
    nav_login:         'Giriş Yap',
    hero_badge:        "Şeriat Onaylı · Mekke & Medine",
    hero_subtitle:     "Sevdikleriniz adına güvenilir, Şeriat sertifikalı temsilciler aracılığıyla Mekke ve Medine'de Umre ve Hac Bedel yaptırın.",
    hero_cta_book:     'Hizmet Rezervasyonu',
    hero_cta_learn:    'Daha Fazla Bilgi',
    stat_umrahs:       'Gerçekleştirilen Umre',
    stat_countries:    'Hizmet Verilen Ülke',
    stat_certified:    'Şeriat Sertifikalı',
    stat_proof:        'Kanıt Teslimi',
    trust_video:       'Canlı Video Kanıtı',
    trust_scholars:    'Alim Denetimli',
    trust_cert:        'Resmi Sertifika',
    trust_shariah:     "Şeriata Uygun",
    trust_support:     '7/24 WhatsApp Desteği',
    services_eyebrow:  'Kutsal Hizmetlerimiz',
    services_title_a:  'Hac &',
    services_title_b:  'Umre Bedel',
    services_desc:     'Kutsal Şehirlerde ikamet eden sertifikalı İslam alimleri tarafından gerçekleştirilen bir hizmet seçin',
    tag_complete:      'En Kapsamlı',
    tag_popular:       'En Popüler',
    tag_reward:        'Yüksek Sevap',
    hajj_title:        'Hac Bedeli',
    hajj_desc:         "Hastalık, yaşlılık veya vefat nedeniyle gitemeyen sevdikleriniz adına tam Hac ibadeti.",
    hajj_f1:           "Hac'ın 5 rüknü eksiksiz yerine getirilir",
    hajj_f2:           'Tam video & fotoğraf belgeleme',
    hajj_f3:           'Resmi sertifika düzenlenir',
    hajj_f4:           'Nitelikli Ulema gözetiminde',
    umrah_title:       'Umre Bedeli',
    umrah_desc:        "Mekke'de, diri veya vefat etmiş herhangi bir kişi adına tam özen ve samimiyetle gerçekleştirilen vekâleten Umre.",
    umrah_f1:          "Tavaf, Sa'y & tüm ibadetler eksiksiz",
    umrah_f2:          '72 saat içinde video kanıtı',
    umrah_f3:          'Dijital sertifika e-posta ile gönderilir',
    umrah_f4:          'Yaşayan veya vefat etmiş kişiler için',
    ramadan_title:     'Ramazan Umresi Bedeli',
    ramadan_desc:      'Mübarek Ramazan ayında gerçekleştirilen Umre — sahih hadise göre tam bir Haca denk sevap.',
    ramadan_f1:        'Ramazan gecelerinde gerçekleştirilir',
    ramadan_f2:        'Katlanmış manevi sevap',
    ramadan_f3:        'Tam belgeleme sağlanır',
    ramadan_f4:        'Öncelikli zamanlama mevcut',
    book_hajj:         'Hac Bedeli Rezervasyonu',
    book_umrah:        'Umre Bedeli Rezervasyonu',
    book_ramadan:      'Ramazan Umresi Rezervasyonu',
    from:              'başlangıç',
    how_eyebrow:       'Basit Süreç',
    how_title_a:       'Nasıl',
    how_title_b:       'Çalışır',
    how_desc:          'Sevdikleriniz adına bu kutsal ibadeti yerine getirmek için dört basit adım',
    step1_title:       'Hizmet Seçin',
    step1_desc:        'Umre Bedeli, Hac Bedeli veya Ramazan Umresi arasından seçin — yaşayan veya vefat etmiş için.',
    step2_title:       'Bilgileri Girin',
    step2_desc:        'İbadet yapılacak kişinin adını paylaşın ve güvenli ödemenizi tamamlayın.',
    step3_title:       'Biz Yaparız',
    step3_desc:        "Sertifikalı alimimiz tüm ibadetleri Mekke'de tam bir samimiyetle yerine getirir.",
    step4_title:       'Kanıtı Alın',
    step4_desc:        'Video kanıtı, fotoğraflar ve resmi dijital sertifikanızı 72 saat içinde alın.',
    donations_eyebrow: 'Sadaka-i Câriye',
    donations_title_a: 'Kutsal Şehirlere',
    donations_title_b: 'Bağış Yapın',
    donations_desc:    "Mekke ve Medine'de hayırsever bağışlarla sürekli bereket kazanın",
    don1_title:        'Tekerlekli Sandalye Bağışı',
    don1_desc:         'Tavaf sırasında yaşlı ve engelli hacılar için hareket kolaylığı sağlayın.',
    don2_title:        'Kuran-ı Kerim Bağışı',
    don2_desc:         "Mescid-i Haram'ı ziyaret eden hacılara 5 adet Kuran-ı Kerim hediye edin.",
    don3_title:        'Kurban Kesimi',
    don3_desc:         "Hac mevsiminde Mekke'de adınıza kurban kesilir.",
    don4_title:        'Hacılara Yemek',
    don4_desc:         "Mekke'deki hacılar için iftar yemekleri ve gıda paketleri sponsorluğu yapın.",
    don5_title:        'Zemzem Suyu',
    don5_desc:         'Hacılar için mübarek Zemzem suyu kutuları bağışlayın — 40 şişelik kutu.',
    don_cta_title:     'Bugün Sadaka Verin',
    don_cta_quote:     '"Sadaka vermek serveti azaltmaz" — Hz. Muhammed ﷺ',
    don_cta_btn:       'Tüm Bağışları Görüntüle',
    cert_title:        'Ne Alacaksınız',
    cert1:             "Mekke'de gerçekleştirilen ibadetlerin HD videosu",
    cert2:             'Kutsal mekânlardan çeşitli fotoğraflar',
    cert3:             'İsimle resmi dijital sertifika',
    cert4:             'Alimimizden yazılı onay',
    cert5:             'E-posta ile 72 saat içinde teslim',
    cert6:             'Tamamlandığında WhatsApp bildirimi',
    cert_badge:        'Düzenlenen Sertifika',
    why_eyebrow:       'Neden Bizi Seçmelisiniz',
    why_title_a:       'Güven &',
    why_title_b:       'Özgünlük',
    why1_title:        "Mekke'deki Alimler",
    why1_desc:         'Tüm ibadetler Kutsal Şehirlerde ikamet eden nitelikli İslam alimleri tarafından yerine getirilir.',
    why2_title:        "Şeriata Uygun",
    why2_desc:         'Her hizmet, birden fazla İslami kurum ve alim tarafından doğrulanan Bedel Şeriatı kurallarına uyar.',
    why3_title:        'Sertifikalı & Şeffaf',
    why3_desc:         'Dünya genelinde müşterilerin güvendiği, yasal olarak tescillenmiş ve tam hesap verebilir bir kuruluş.',
    why4_title:        "40'tan Fazla Ülkeye Hizmet",
    why4_desc:         "ABD, İngiltere, Kanada, Avustralya, Malezya ve diğer ülkelerden Müslümanlar her yıl hizmetimize güveniyor.",
    testi_eyebrow:     'Müşteri Yorumları',
    testi_title_a:     'Müşterilerimizin',
    testi_title_b:     'Sözleri',
    testi1_text:       'Vefat eden annem için Umre Bedeli sipariş ettim ve iki gün içinde güzel bir sertifika ve video aldım. Allah kabul etsin.',
    testi2_text:       "Babam Hac'cını tamamlamadan vefat etti. Umratul Badal, adına Hac Bedeli yapmamıza yardımcı oldu. Ne büyük bir huzur hissettik.",
    testi3_text:       'Yaşlı annem için Ramazan Umresi Bedeli sipariş ettim. Video çok duygusaldı — ismi Haremde anılırken ağladı.',
    faq_eyebrow:       'Sık Sorulan Sorular',
    faq_title_a:       'Sık Sorulan',
    faq_title_b:       'Sorular',
    faq1_q:            'Umre Bedeli (Vekâleten Umre) Nedir?',
    faq1_a:            'Umre Bedeli; hastalık, yaşlılık, engellilik veya vefat nedeniyle umre yapamayan biri adına bir Müslümanın umre yapmasıdır.',
    faq2_q:            "Vekâleten Umre İslam'da caiz midir?",
    faq2_a:            "Hz. Peygamber ﷺ güç yetiremeyenler adına Hac yapılmasına izin vermiştir. İslam alimlerinin büyük çoğunluğu Umre Badal'ini de caiz kabul eder.",
    faq3_q:            'Vefat etmiş bir aile üyesi için sipariş verebilir miyim?',
    faq3_a:            'Evet. Sadaka-i Câriye olarak vefat etmiş biri adına Umre Bedeli veya Hac Bedeli yaptırabilirsiniz. Rezervasyon sırasında tam adını belirtin.',
    faq4_q:            'Ne tür kanıt alacağım?',
    faq4_a:            "72 saat içinde: HD video, Mescid-i Haram'dan fotoğraflar, kişinin adıyla resmi dijital sertifika ve alimimizden yazılı onay.",
    faq5_q:            "Umre veya Hac'cı kim yapıyor?",
    faq5_a:            "Tüm ibadetler, Mekke'de veya yakınında ikamet eden nitelikli İslam alimleri tarafından samimiyetle ve Şeriat'a uygun olarak yerine getirilir.",
    faq6_q:            'Bu hizmet sertifikalı ve güvenilir midir?',
    faq6_a:            "Evet. Umratul Badal, yasal olarak tescillenmiş ve tamamen şeffaf bir kuruluştur. 40'tan fazla ülkede müşterilere hizmet verdik.",
    cta_title:         'Bu Kutsal Yükümlülüğü Yerine Getirmeye Hazır mısınız?',
    cta_sub:           'Sevdikleriniz adına samimiyetle, özenle ve eksiksiz belgelemeyle Umre veya Hac Bedeli yapalım.',
    cta_btn_book:      'Hizmet Rezervasyonu',
    cta_btn_wa:        "WhatsApp'tan Yazın",
    footer_tagline:    "Mekke ve Medine'deki sertifikalı alimler tarafından gerçekleştirilen güvenilir Umre Bedeli ve Hac Bedeli hizmetleri.",
    footer_services:   'Hizmetler',
    footer_contact:    'İletişim',
    footer_all_services: 'Tüm Hizmetler',
    footer_rights:     'Tüm hakları saklıdır.',
    footer_cert:       'Şeriat Sertifikalı · Dünya Genelinde Güvenilir',
  },

  /* ─────────── URDU ─────────── */
  ur: {
    loading:           'لوڈ ہو رہا ہے…',
    nav_home:          'ہوم',
    nav_services:      'خدمات',
    nav_how:           'یہ کیسے کام کرتا ہے',
    nav_donations:     'عطیات',
    nav_why:           'ہم کیوں',
    nav_faq:           'سوالات',
    nav_login:         'لاگ ان',
    hero_badge:        'شریعت سے منظور شدہ · مکہ اور مدینہ',
    hero_subtitle:     'اپنے پیاروں کی طرف سے عمرہ اور حج بدل ادا کروائیں — مکہ مکرمہ اور مدینہ منورہ میں قابل اعتماد، شریعت سے تصدیق شدہ نمائندوں کے ذریعے۔',
    hero_cta_book:     'خدمت بک کریں',
    hero_cta_learn:    'مزید جانیں',
    stat_umrahs:       'ادا کیے گئے عمرے',
    stat_countries:    'ممالک خدمت زیر',
    stat_certified:    'شرعی تصدیق شدہ',
    stat_proof:        'ثبوت کی فراہمی',
    trust_video:       'براہ راست ویڈیو ثبوت',
    trust_scholars:    'علماء کی نگرانی',
    trust_cert:        'سرکاری سرٹیفکیٹ',
    trust_shariah:     'شریعت کے مطابق',
    trust_support:     '24/7 واٹس ایپ سپورٹ',
    services_eyebrow:  'ہماری مقدس خدمات',
    services_title_a:  'حج اور',
    services_title_b:  'عمرہ بدل',
    services_desc:     'مقدس شہروں میں مقیم سند یافتہ اسلامی علماء کی طرف سے ادا کردہ خدمت منتخب کریں',
    tag_complete:      'سب سے مکمل',
    tag_popular:       'سب سے مقبول',
    tag_reward:        'بہت ثواب',
    hajj_title:        'حج بدل',
    hajj_desc:         'آپ کے اس پیارے کی طرف سے مکمل حج جو بیماری، بڑھاپے یا وفات کی وجہ سے نہیں جا سکتے۔',
    hajj_f1:           'حج کے پانچوں ارکان ادا کیے جاتے ہیں',
    hajj_f2:           'مکمل ویڈیو اور فوٹو دستاویز',
    hajj_f3:           'سرکاری سرٹیفکیٹ جاری',
    hajj_f4:           'اہل علماء کی نگرانی میں',
    umrah_title:       'عمرہ بدل',
    umrah_desc:        'مکہ میں بدلی عمرہ — کسی بھی شخص کی طرف سے مکمل توجہ اور اخلاص کے ساتھ، زندہ ہو یا فوت شدہ۔',
    umrah_f1:          'طواف، سعی اور تمام ارکان مکمل',
    umrah_f2:          '72 گھنٹوں میں ویڈیو ثبوت',
    umrah_f3:          'ڈیجیٹل سرٹیفکیٹ ای میل پر',
    umrah_f4:          'زندہ یا فوت شدہ افراد کے لیے',
    ramadan_title:     'رمضان عمرہ بدل',
    ramadan_desc:      'مبارک ماہ رمضان میں ادا کیا گیا عمرہ — صحیح حدیث کے مطابق مکمل حج کے برابر ثواب۔',
    ramadan_f1:        'رمضان کی راتوں میں ادا کیا جاتا ہے',
    ramadan_f2:        'بڑھا ہوا روحانی ثواب',
    ramadan_f3:        'مکمل دستاویز فراہم',
    ramadan_f4:        'ترجیحی شیڈولنگ دستیاب',
    book_hajj:         'حج بدل بک کریں',
    book_umrah:        'عمرہ بدل بک کریں',
    book_ramadan:      'رمضان عمرہ بک کریں',
    from:              'سے شروع',
    how_eyebrow:       'آسان عمل',
    how_title_a:       'یہ کیسے',
    how_title_b:       'کام کرتا ہے',
    how_desc:          'اپنے پیارے کی طرف سے یہ مقدس عبادت ادا کرنے کے چار آسان قدم',
    step1_title:       'خدمت منتخب کریں',
    step1_desc:        'عمرہ بدل، حج بدل یا رمضان عمرہ میں سے انتخاب کریں — زندہ یا فوت شدہ کے لیے۔',
    step2_title:       'تفصیلات دیں',
    step2_desc:        'اس شخص کا نام شیئر کریں جس کی طرف سے عبادت کرنی ہے اور محفوظ ادائیگی مکمل کریں۔',
    step3_title:       'ہم ادا کرتے ہیں',
    step3_desc:        'ہمارا سند یافتہ عالم مکہ میں تمام مناسک مکمل اخلاص کے ساتھ ادا کرتا ہے۔',
    step4_title:       'ثبوت حاصل کریں',
    step4_desc:        '72 گھنٹوں میں ویڈیو ثبوت، تصاویر اور سرکاری ڈیجیٹل سرٹیفکیٹ حاصل کریں۔',
    donations_eyebrow: 'صدقہ جاریہ',
    donations_title_a: 'مقدس شہروں میں',
    donations_title_b: 'عطیہ دیں',
    donations_desc:    'مکہ اور مدینہ میں خیراتی عطیات کے ذریعے مسلسل برکات حاصل کریں',
    don1_title:        'وہیل چیئر عطیہ',
    don1_desc:         'طواف کے دوران بزرگ اور معذور حجاج کرام کو نقل و حرکت میں مدد فراہم کریں۔',
    don2_title:        'قرآن کریم عطیہ',
    don2_desc:         'مسجد الحرام میں آنے والے حجاج کرام کو قرآن کریم کی 5 کاپیاں عطیہ کریں۔',
    don3_title:        'قربانی',
    don3_desc:         'حج کے موسم میں آپ کی طرف سے مکہ میں جانور ذبح کیا جائے گا۔',
    don4_title:        'حجاج کو کھانا کھلائیں',
    don4_desc:         'مکہ میں حجاج کرام کے لیے افطاری اور کھانے کے پیکجز کی کفالت کریں۔',
    don5_title:        'آب زمزم',
    don5_desc:         'حجاج کرام کے لیے مبارک آب زمزم کے ڈبے عطیہ کریں — ہر ڈبے میں 40 بوتلیں۔',
    don_cta_title:     'آج صدقہ دیں',
    don_cta_quote:     '"صدقہ مال کو کم نہیں کرتا" — نبی کریم ﷺ',
    don_cta_btn:       'تمام عطیات دیکھیں',
    cert_title:        'آپ کو کیا ملے گا',
    cert1:             'مکہ میں ادا کردہ مناسک کی ایچ ڈی ویڈیو',
    cert2:             'مقدس مقامات سے متعدد تصاویر',
    cert3:             'نام کے ساتھ سرکاری ڈیجیٹل سرٹیفکیٹ',
    cert4:             'ہمارے عالم سے تحریری تصدیق',
    cert5:             '72 گھنٹوں میں ای میل کے ذریعے فراہمی',
    cert6:             'مکمل ہونے پر واٹس ایپ اطلاع',
    cert_badge:        'جاری کردہ سرٹیفکیٹ',
    why_eyebrow:       'ہمیں کیوں چنیں',
    why_title_a:       'اعتماد اور',
    why_title_b:       'صداقت',
    why1_title:        'مکہ میں علماء',
    why1_desc:         'تمام مناسک مقدس شہروں میں مقیم اہل علماء کی طرف سے ادا کیے جاتے ہیں — ریموٹ ایجنٹ نہیں۔',
    why2_title:        'شریعت کے مطابق',
    why2_desc:         'ہر خدمت متعدد اسلامی اداروں اور علماء کی طرف سے تصدیق شدہ بدل کے شرعی احکام پر مبنی ہے۔',
    why3_title:        'تصدیق شدہ اور شفاف',
    why3_desc:         'قانونی طور پر رجسٹرڈ، مکمل جوابدہ ادارہ جس پر دنیا بھر کے موکلین اعتماد کرتے ہیں۔',
    why4_title:        '40 سے زیادہ ممالک کی خدمت',
    why4_desc:         'امریکہ، برطانیہ، کینیڈا، آسٹریلیا، ملائیشیا اور دیگر ممالک کے مسلمان ہر سال ہماری خدمات پر بھروسہ کرتے ہیں۔',
    testi_eyebrow:     'تعریفی کلمات',
    testi_title_a:     'ہمارے',
    testi_title_b:     'موکلین کی آواز',
    testi1_text:       'میں نے اپنی مرحوم والدہ کے لیے عمرہ بدل کا آرڈر دیا اور دو دن میں خوبصورت سرٹیفکیٹ اور ویڈیو ملی۔ اللہ قبول فرمائے۔',
    testi2_text:       'میرے والد حج مکمل کیے بغیر وفات پا گئے۔ عمرۃ البدل نے ان کی طرف سے حج بدل کرانے میں مدد کی۔ کتنا سکون ملا۔',
    testi3_text:       'میں نے اپنی بوڑھی والدہ کے لیے رمضان عمرہ بدل کا آرڈر دیا۔ ویڈیو بہت اثر انگیز تھی — وہ حرم میں اپنا نام سن کر رو پڑیں۔',
    faq_eyebrow:       'عام سوالات',
    faq_title_a:       'اکثر پوچھے جانے والے',
    faq_title_b:       'سوالات',
    faq1_q:            'عمرہ بدل کیا ہے؟',
    faq1_a:            'عمرہ بدل وہ ہے جب ایک مسلمان کسی دوسرے شخص کی طرف سے عمرہ ادا کرے جو بیماری، بڑھاپے، معذوری یا وفات کی وجہ سے خود نہ جا سکے۔',
    faq2_q:            'کیا اسلام میں عمرہ بدل جائز ہے؟',
    faq2_a:            'جی ہاں۔ نبی ﷺ نے عاجز افراد کی طرف سے حج کی اجازت دی۔ جمہور علماء عمرہ بدل کو بھی جائز قرار دیتے ہیں۔',
    faq3_q:            'کیا میں کسی فوت شدہ کے لیے آرڈر دے سکتا ہوں؟',
    faq3_a:            'جی ہاں۔ آپ کسی فوت شدہ کے لیے صدقہ جاریہ کے طور پر عمرہ بدل یا حج بدل کروا سکتے ہیں۔ بکنگ کے وقت ان کا پورا نام دیں۔',
    faq4_q:            'مجھے کون سا ثبوت ملے گا؟',
    faq4_a:            '72 گھنٹوں میں: ایچ ڈی ویڈیو، مسجد الحرام کی تصاویر، نام کے ساتھ سرکاری ڈیجیٹل سرٹیفکیٹ اور ہمارے عالم سے تحریری تصدیق۔',
    faq5_q:            'عمرہ یا حج کون ادا کرتا ہے؟',
    faq5_a:            'تمام مناسک مکہ میں یا اس کے قریب مقیم اہل اسلامی علماء ادا کرتے ہیں — پورے اخلاص اور شریعت کے مطابق۔',
    faq6_q:            'کیا یہ خدمت تصدیق شدہ اور قابل اعتماد ہے؟',
    faq6_a:            'جی ہاں۔ عمرۃ البدل ایک قانونی طور پر رجسٹرڈ اور مکمل شفاف ادارہ ہے۔ ہم نے 40 سے زیادہ ممالک میں موکلین کی خدمت کی ہے۔',
    cta_title:         'کیا آپ اس مقدس فرض کو پورا کرنے کے لیے تیار ہیں؟',
    cta_sub:           'ہمیں اجازت دیں کہ آپ کے پیاروں کے لیے اخلاص، توجہ اور مکمل دستاویزات کے ساتھ عمرہ یا حج بدل ادا کریں۔',
    cta_btn_book:      'خدمت بک کریں',
    cta_btn_wa:        'واٹس ایپ پر رابطہ کریں',
    footer_tagline:    'مکہ اور مدینہ میں سند یافتہ علماء کی طرف سے ادا کردہ قابل اعتماد عمرہ بدل اور حج بدل خدمات۔',
    footer_services:   'خدمات',
    footer_contact:    'رابطہ',
    footer_all_services: 'تمام خدمات',
    footer_rights:     'جملہ حقوق محفوظ ہیں۔',
    footer_cert:       'شرعی تصدیق شدہ · عالمی سطح پر قابل اعتماد',
  },

  /* ─────────── INDONESIAN ─────────── */
  id: {
    loading:           'Memuat…',
    nav_home:          'Beranda',
    nav_services:      'Layanan',
    nav_how:           'Cara Kerja',
    nav_donations:     'Donasi',
    nav_why:           'Mengapa Kami',
    nav_faq:           'FAQ',
    nav_login:         'Masuk',
    hero_badge:        'Disetujui Syariah · Mekah & Madinah',
    hero_subtitle:     'Tunaikan Umrah & Haji Badal atas nama orang-orang terkasih Anda melalui perwakilan terpercaya bersertifikat syariah di kota suci Mekah dan Madinah.',
    hero_cta_book:     'Pesan Layanan',
    hero_cta_learn:    'Pelajari Lebih Lanjut',
    stat_umrahs:       'Umrah Ditunaikan',
    stat_countries:    'Negara Dilayani',
    stat_certified:    'Bersertifikat Syariah',
    stat_proof:        'Pengiriman Bukti',
    trust_video:       'Bukti Video Langsung',
    trust_scholars:    'Diawasi Ulama',
    trust_cert:        'Sertifikat Resmi',
    trust_shariah:     'Sesuai Syariah',
    trust_support:     'Dukungan WhatsApp 24/7',
    services_eyebrow:  'Layanan Suci Kami',
    services_title_a:  'Haji &',
    services_title_b:  'Umrah Badal',
    services_desc:     'Pilih layanan yang dilakukan oleh ulama Islam bersertifikat yang tinggal di Kota Suci',
    tag_complete:      'Paling Lengkap',
    tag_popular:       'Paling Populer',
    tag_reward:        'Pahala Besar',
    hajj_title:        'Haji Badal',
    hajj_desc:         'Ibadah haji lengkap yang dilakukan atas nama orang terkasih yang tidak mampu karena sakit, usia tua, atau wafat.',
    hajj_f1:           'Semua 5 rukun haji dilaksanakan',
    hajj_f2:           'Dokumentasi video & foto lengkap',
    hajj_f3:           'Sertifikat resmi diterbitkan',
    hajj_f4:           'Diawasi oleh Ulama yang berkualifikasi',
    umrah_title:       'Umrah Badal',
    umrah_desc:        'Umrah badal di Mekah yang dilaksanakan dengan penuh perhatian dan ketulusan atas nama siapa pun — yang masih hidup maupun yang sudah wafat.',
    umrah_f1:          "Tawaf, Sa'i & semua ritual lengkap",
    umrah_f2:          'Bukti video dalam 72 jam',
    umrah_f3:          'Sertifikat digital dikirim via email',
    umrah_f4:          'Untuk orang yang masih hidup atau sudah wafat',
    ramadan_title:     'Umrah Ramadan Badal',
    ramadan_desc:      'Umrah yang dilaksanakan di bulan Ramadan yang penuh berkah — setara pahalanya dengan haji penuh menurut hadits sahih.',
    ramadan_f1:        'Dilaksanakan di malam-malam Ramadan',
    ramadan_f2:        'Pahala spiritual yang dilipatgandakan',
    ramadan_f3:        'Dokumentasi lengkap disediakan',
    ramadan_f4:        'Penjadwalan prioritas tersedia',
    book_hajj:         'Pesan Haji Badal',
    book_umrah:        'Pesan Umrah Badal',
    book_ramadan:      'Pesan Umrah Ramadan',
    from:              'mulai dari',
    how_eyebrow:       'Proses Sederhana',
    how_title_a:       'Cara',
    how_title_b:       'Kerjanya',
    how_desc:          'Empat langkah sederhana untuk menunaikan ibadah suci ini atas nama orang terkasih Anda',
    step1_title:       'Pilih Layanan',
    step1_desc:        'Pilih antara Umrah Badal, Haji Badal, atau Umrah Ramadan — untuk yang masih hidup atau sudah wafat.',
    step2_title:       'Berikan Detail',
    step2_desc:        'Bagikan nama orang yang akan ditunaikan ibadahnya dan selesaikan pembayaran aman Anda.',
    step3_title:       'Kami Menunaikan',
    step3_desc:        'Ulama kami yang bersertifikat menunaikan semua ritual di Mekah dengan ketulusan penuh.',
    step4_title:       'Terima Bukti',
    step4_desc:        'Dapatkan bukti video, foto, dan sertifikat digital resmi dalam 72 jam.',
    donations_eyebrow: 'Sedekah Jariyah',
    donations_title_a: 'Donasi ke',
    donations_title_b: 'Kota Suci',
    donations_desc:    'Raih pahala yang terus mengalir melalui donasi di Mekah dan Madinah',
    don1_title:        'Donasi Kursi Roda',
    don1_desc:         'Berikan bantuan mobilitas untuk jemaah haji lanjut usia dan penyandang disabilitas saat tawaf.',
    don2_title:        "Donasi Al-Qur'an",
    don2_desc:         "Donasikan 5 eksemplar Al-Qur'an kepada jemaah yang mengunjungi Masjidil Haram.",
    don3_title:        'Kurban Qurban',
    don3_desc:         'Domba disembelih di Mekah selama musim haji atas nama Anda.',
    don4_title:        'Beri Makan Jemaah',
    don4_desc:         'Sponsori makanan buka puasa dan paket makanan untuk jemaah di Mekah.',
    don5_title:        'Air Zamzam',
    don5_desc:         'Donasikan kotak air Zamzam yang penuh berkah — sekotak berisi 40 botol untuk jemaah.',
    don_cta_title:     'Berikan Sedekah Hari Ini',
    don_cta_quote:     '"Sedekah tidak mengurangi harta" — Nabi Muhammad ﷺ',
    don_cta_btn:       'Lihat Semua Donasi',
    cert_title:        'Apa yang Akan Anda Terima',
    cert1:             'Video HD ritual yang dilaksanakan di Mekah',
    cert2:             'Beberapa foto dari tempat-tempat suci',
    cert3:             'Sertifikat digital resmi dengan nama',
    cert4:             'Konfirmasi tertulis dari ulama kami',
    cert5:             'Dikirimkan dalam 72 jam via email',
    cert6:             'Notifikasi WhatsApp saat selesai',
    cert_badge:        'Sertifikat Diterbitkan',
    why_eyebrow:       'Mengapa Memilih Kami',
    why_title_a:       'Kepercayaan &',
    why_title_b:       'Keaslian',
    why1_title:        'Ulama di Mekah',
    why1_desc:         'Semua ritual dilakukan oleh ulama Islam yang berkualifikasi yang tinggal di Kota Suci — bukan agen jarak jauh.',
    why2_title:        'Sesuai Syariah',
    why2_desc:         'Setiap layanan mengikuti hukum syariah tentang Badal yang telah diverifikasi oleh berbagai lembaga dan ulama Islam.',
    why3_title:        'Bersertifikat & Transparan',
    why3_desc:         'Organisasi yang terdaftar secara hukum, sepenuhnya akuntabel, dan dipercaya oleh klien di seluruh dunia.',
    why4_title:        'Melayani 40+ Negara',
    why4_desc:         'Muslim dari AS, Inggris, Kanada, Australia, Malaysia, dan negara lain mempercayai layanan kami setiap tahun.',
    testi_eyebrow:     'Testimoni',
    testi_title_a:     'Kata-Kata dari',
    testi_title_b:     'Klien Kami',
    testi1_text:       'Saya memesan Umrah Badal untuk ibu saya yang telah wafat dan menerima sertifikat dan video yang indah dalam dua hari. Semoga Allah menerimanya.',
    testi2_text:       'Ayah saya wafat tanpa menyelesaikan haji. Umratul Badal membantu kami melakukan Haji Badal atas namanya. Betapa damainya kami.',
    testi3_text:       'Saya memesan Umrah Ramadan Badal untuk ibu saya yang sudah tua. Video buktinya mengharukan — dia menangis mendengar namanya disebut di Haram.',
    faq_eyebrow:       'Pertanyaan Umum',
    faq_title_a:       'Pertanyaan yang Sering',
    faq_title_b:       'Diajukan',
    faq1_q:            'Apa itu Umrah Badal (Umrah Wakil)?',
    faq1_a:            'Umrah Badal adalah ketika seorang Muslim melakukan Umrah atas nama orang lain yang tidak mampu melakukannya — karena sakit, usia tua, disabilitas, atau kematian.',
    faq2_q:            'Apakah Umrah Wakil diperbolehkan dalam Islam?',
    faq2_a:            'Ya. Nabi ﷺ memperbolehkan haji atas nama mereka yang tidak mampu. Mayoritas ulama Islam menganggap Umrah Badal juga diperbolehkan.',
    faq3_q:            'Bolehkah saya memesan untuk anggota keluarga yang sudah wafat?',
    faq3_a:            'Ya. Anda dapat memesan Umrah Badal atau Haji Badal untuk orang yang sudah wafat sebagai sedekah jariyah. Berikan nama lengkap mereka saat memesan.',
    faq4_q:            'Bukti apa yang akan saya terima?',
    faq4_a:            "Dalam 72 jam: video HD, foto dari Masjidil Haram, sertifikat digital resmi dengan nama orang tersebut, dan konfirmasi tertulis dari ulama kami.",
    faq5_q:            'Siapa yang melakukan Umrah atau Haji?',
    faq5_a:            'Semua ritual dilakukan oleh ulama Islam yang berkualifikasi yang tinggal di atau dekat Mekah. Mereka menjalankan setiap ritual dengan tulus sesuai syariah.',
    faq6_q:            'Apakah layanan ini bersertifikat dan terpercaya?',
    faq6_a:            'Ya. Umratul Badal adalah organisasi yang terdaftar secara hukum dan sepenuhnya transparan. Kami telah melayani klien di lebih dari 40 negara.',
    cta_title:         'Siap Menunaikan Kewajiban Suci Ini?',
    cta_sub:           'Biarkan kami melaksanakan Umrah atau Haji Badal untuk orang-orang terkasih Anda dengan tulus, penuh perhatian, dan dokumentasi lengkap.',
    cta_btn_book:      'Pesan Layanan',
    cta_btn_wa:        'Hubungi via WhatsApp',
    footer_tagline:    'Layanan Umrah Badal dan Haji Badal terpercaya yang dilaksanakan oleh ulama bersertifikat di Kota Suci Mekah dan Madinah.',
    footer_services:   'Layanan',
    footer_contact:    'Kontak',
    footer_all_services: 'Semua Layanan',
    footer_rights:     'Hak cipta dilindungi.',
    footer_cert:       'Bersertifikat Syariah · Terpercaya di Seluruh Dunia',
  },

  /* ─────────── MALAY ─────────── */
  ms: {
    loading:           'Memuatkan…',
    nav_home:          'Laman Utama',
    nav_services:      'Perkhidmatan',
    nav_how:           'Cara Kerja',
    nav_donations:     'Derma',
    nav_why:           'Kenapa Kami',
    nav_faq:           'Soal Jawab',
    nav_login:         'Log Masuk',
    hero_badge:        'Diluluskan Syariah · Mekah & Madinah',
    hero_subtitle:     'Tunaikan Umrah & Haji Badal bagi pihak orang tersayang anda melalui wakil yang dipercayai dan disahkan Syariah di kota suci Mekah dan Madinah.',
    hero_cta_book:     'Tempah Perkhidmatan',
    hero_cta_learn:    'Ketahui Lebih Lanjut',
    stat_umrahs:       'Umrah Ditunaikan',
    stat_countries:    'Negara Dilayan',
    stat_certified:    'Bersijil Syariah',
    stat_proof:        'Penghantaran Bukti',
    trust_video:       'Bukti Video Langsung',
    trust_scholars:    'Diawasi Ulama',
    trust_cert:        'Sijil Rasmi',
    trust_shariah:     'Pematuhan Syariah',
    trust_support:     'Sokongan WhatsApp 24/7',
    services_eyebrow:  'Perkhidmatan Suci Kami',
    services_title_a:  'Haji &',
    services_title_b:  'Umrah Badal',
    services_desc:     'Pilih perkhidmatan yang dilaksanakan oleh ulama Islam bertauliah yang menetap di Kota Suci',
    tag_complete:      'Paling Lengkap',
    tag_popular:       'Paling Popular',
    tag_reward:        'Pahala Tinggi',
    hajj_title:        'Haji Badal',
    hajj_desc:         'Haji penuh yang dilaksanakan bagi pihak orang tersayang yang tidak mampu kerana sakit, usia tua, atau kematian.',
    hajj_f1:           'Semua 5 rukun Haji dilaksanakan',
    hajj_f2:           'Dokumentasi video & foto lengkap',
    hajj_f3:           'Sijil rasmi dikeluarkan',
    hajj_f4:           'Diawasi oleh Ulama berkelayakan',
    umrah_title:       'Umrah Badal',
    umrah_desc:        'Umrah badal di Mekah yang dilaksanakan dengan penuh perhatian dan keikhlasan bagi pihak mana-mana orang — yang masih hidup atau yang telah wafat.',
    umrah_f1:          "Tawaf, Sa'i & semua ritual lengkap",
    umrah_f2:          'Bukti video dalam 72 jam',
    umrah_f3:          'Sijil digital dihantar melalui e-mel',
    umrah_f4:          'Untuk orang yang hidup atau telah wafat',
    ramadan_title:     'Umrah Ramadan Badal',
    ramadan_desc:      'Umrah yang dilaksanakan semasa bulan Ramadan yang penuh berkat — setara pahalanya dengan haji penuh menurut hadis sahih.',
    ramadan_f1:        'Dilaksanakan pada malam-malam Ramadan',
    ramadan_f2:        'Pahala rohani yang digandakan',
    ramadan_f3:        'Dokumentasi lengkap disediakan',
    ramadan_f4:        'Penjadualan keutamaan tersedia',
    book_hajj:         'Tempah Haji Badal',
    book_umrah:        'Tempah Umrah Badal',
    book_ramadan:      'Tempah Umrah Ramadan',
    from:              'mulai',
    how_eyebrow:       'Proses Mudah',
    how_title_a:       'Cara',
    how_title_b:       'Kerjanya',
    how_desc:          'Empat langkah mudah untuk menunaikan ibadah suci ini bagi pihak orang tersayang anda',
    step1_title:       'Pilih Perkhidmatan',
    step1_desc:        'Pilih antara Umrah Badal, Haji Badal, atau Umrah Ramadan — untuk yang hidup atau telah wafat.',
    step2_title:       'Berikan Maklumat',
    step2_desc:        'Kongsi nama orang yang akan ditunaikan ibadahnya dan selesaikan pembayaran selamat anda.',
    step3_title:       'Kami Tunaikan',
    step3_desc:        'Ulama bertauliah kami menunaikan semua ritual di Mekah dengan penuh keikhlasan.',
    step4_title:       'Terima Bukti',
    step4_desc:        'Dapatkan bukti video, foto, dan sijil digital rasmi dalam 72 jam.',
    donations_eyebrow: 'Sedekah Jariah',
    donations_title_a: 'Derma ke',
    donations_title_b: 'Kota Suci',
    donations_desc:    'Raih keberkatan berterusan melalui derma di Mekah dan Madinah',
    don1_title:        'Derma Kerusi Roda',
    don1_desc:         'Sediakan bantuan mobiliti untuk jemaah haji warga emas dan OKU semasa tawaf.',
    don2_title:        "Derma Al-Quran",
    don2_desc:         'Derma 5 naskhah Al-Quran kepada jemaah yang melawat Masjidil Haram.',
    don3_title:        'Korban Qurban',
    don3_desc:         'Kambing disembelih di Mekah semasa musim Haji bagi pihak anda.',
    don4_title:        'Beri Makan Jemaah',
    don4_desc:         'Tajakan makanan berbuka puasa dan pakej makanan untuk jemaah di Mekah.',
    don5_title:        'Air Zamzam',
    don5_desc:         'Derma kotak air Zamzam yang penuh berkat — sekotak berisi 40 botol untuk jemaah.',
    don_cta_title:     'Beri Sedekah Hari Ini',
    don_cta_quote:     '"Sedekah tidak mengurangi harta" — Nabi Muhammad ﷺ',
    don_cta_btn:       'Lihat Semua Derma',
    cert_title:        'Apa yang Akan Anda Terima',
    cert1:             'Video HD ritual yang dilaksanakan di Mekah',
    cert2:             'Beberapa gambar dari tempat-tempat suci',
    cert3:             'Sijil digital rasmi dengan nama',
    cert4:             'Pengesahan bertulis daripada ulama kami',
    cert5:             'Dihantar dalam 72 jam melalui e-mel',
    cert6:             'Pemberitahuan WhatsApp apabila selesai',
    cert_badge:        'Sijil Dikeluarkan',
    why_eyebrow:       'Mengapa Pilih Kami',
    why_title_a:       'Kepercayaan &',
    why_title_b:       'Keaslian',
    why1_title:        'Ulama di Mekah',
    why1_desc:         'Semua ritual dilaksanakan oleh ulama Islam berkelayakan yang menetap di Kota Suci — bukan ejen jauh.',
    why2_title:        'Pematuhan Syariah',
    why2_desc:         'Setiap perkhidmatan mengikuti hukum Syariah tentang Badal yang disahkan oleh pelbagai institusi dan ulama Islam.',
    why3_title:        'Bertauliah & Telus',
    why3_desc:         'Organisasi yang berdaftar secara sah, sepenuhnya bertanggungjawab, dan dipercayai oleh pelanggan di seluruh dunia.',
    why4_title:        'Melayan 40+ Negara',
    why4_desc:         'Muslim dari AS, UK, Kanada, Australia, Malaysia, dan lain-lain mempercayai perkhidmatan kami setiap tahun.',
    testi_eyebrow:     'Testimoni',
    testi_title_a:     'Kata-Kata dari',
    testi_title_b:     'Pelanggan Kami',
    testi1_text:       'Saya menempah Umrah Badal untuk ibu saya yang telah wafat dan menerima sijil dan video yang indah dalam masa dua hari. Semoga Allah menerimanya.',
    testi2_text:       'Ayah saya wafat tanpa menyempurnakan haji. Umratul Badal membantu kami melakukan Haji Badal atas namanya. Betapa damainya kami.',
    testi3_text:       'Saya menempah Umrah Ramadan Badal untuk ibu saya yang sudah tua. Video buktinya sangat mengharukan — dia menangis mendengar namanya disebut di Haram.',
    faq_eyebrow:       'Soalan Lazim',
    faq_title_a:       'Soalan yang Kerap',
    faq_title_b:       'Ditanya',
    faq1_q:            'Apakah Umrah Badal (Umrah Wakil)?',
    faq1_a:            'Umrah Badal ialah apabila seorang Muslim melakukan Umrah bagi pihak orang lain yang tidak mampu berbuat demikian — kerana sakit, usia tua, hilang upaya, atau kematian.',
    faq2_q:            'Adakah Umrah Wakil dibenarkan dalam Islam?',
    faq2_a:            'Ya. Nabi ﷺ membenarkan haji bagi pihak mereka yang tidak mampu. Majoriti ulama Islam menganggap Umrah Badal juga dibolehkan.',
    faq3_q:            'Bolehkah saya menempahnya untuk ahli keluarga yang telah wafat?',
    faq3_a:            'Ya. Anda boleh menempah Umrah Badal atau Haji Badal untuk orang yang telah wafat sebagai sedekah jariah. Berikan nama penuh mereka semasa tempahan.',
    faq4_q:            'Apakah bukti yang akan saya terima?',
    faq4_a:            "Dalam 72 jam: video HD, gambar dari Masjidil Haram, sijil digital rasmi dengan nama orang tersebut, dan pengesahan bertulis daripada ulama kami.",
    faq5_q:            'Siapa yang melakukan Umrah atau Haji?',
    faq5_a:            'Semua ritual dilaksanakan oleh ulama Islam berkelayakan yang menetap di atau berhampiran Mekah. Mereka melaksanakan setiap ritual dengan ikhlas mengikut Syariah.',
    faq6_q:            'Adakah perkhidmatan ini bertauliah dan boleh dipercayai?',
    faq6_a:            'Ya. Umratul Badal ialah organisasi yang berdaftar secara sah dan sepenuhnya telus. Kami telah melayan pelanggan di lebih 40 negara.',
    cta_title:         'Bersedia untuk Menunaikan Kewajipan Suci Ini?',
    cta_sub:           'Biarkan kami melaksanakan Umrah atau Haji Badal untuk orang tersayang anda dengan ikhlas, penuh perhatian, dan dokumentasi lengkap.',
    cta_btn_book:      'Tempah Perkhidmatan',
    cta_btn_wa:        'Hubungi melalui WhatsApp',
    footer_tagline:    'Perkhidmatan Umrah Badal dan Haji Badal yang dipercayai, dilaksanakan oleh ulama bertauliah di Kota Suci Mekah dan Madinah.',
    footer_services:   'Perkhidmatan',
    footer_contact:    'Hubungi',
    footer_all_services: 'Semua Perkhidmatan',
    footer_rights:     'Hak cipta terpelihara.',
    footer_cert:       'Bersijil Syariah · Dipercayai di Seluruh Dunia',
  },

  /* ─────────── GERMAN ─────────── */
  de: {
    loading:           'Wird geladen…',
    nav_home:          'Startseite',
    nav_services:      'Leistungen',
    nav_how:           'Wie es funktioniert',
    nav_donations:     'Spenden',
    nav_why:           'Warum wir',
    nav_faq:           'FAQ',
    nav_login:         'Anmelden',
    hero_badge:        'Scharia-Genehmigt · Mekka & Medina',
    hero_subtitle:     'Lassen Sie Umrah & Hajj Badal im Namen Ihrer Liebsten durch vertrauenswürdige, Scharia-zertifizierte Vertreter in den heiligen Städten Mekka und Medina durchführen.',
    hero_cta_book:     'Leistung buchen',
    hero_cta_learn:    'Mehr erfahren',
    stat_umrahs:       'Durchgeführte Umrahs',
    stat_countries:    'Bediente Länder',
    stat_certified:    'Scharia-Zertifiziert',
    stat_proof:        'Nachweislieferung',
    trust_video:       'Live-Videobeweis',
    trust_scholars:    'Gelehrten-Aufsicht',
    trust_cert:        'Offizielles Zertifikat',
    trust_shariah:     'Scharia-konform',
    trust_support:     '24/7 WhatsApp-Support',
    services_eyebrow:  'Unsere heiligen Leistungen',
    services_title_a:  'Hajj &',
    services_title_b:  'Umrah Badal',
    services_desc:     'Wählen Sie einen Dienst, der von zertifizierten islamischen Gelehrten durchgeführt wird, die in den Heiligen Städten leben',
    tag_complete:      'Am umfassendsten',
    tag_popular:       'Am beliebtesten',
    tag_reward:        'Hohe Belohnung',
    hajj_title:        'Hajj Badal',
    hajj_desc:         'Vollständige Hajj-Pilgerfahrt im Namen Ihres Angehörigen, der aufgrund von Krankheit, Alter oder Tod nicht teilnehmen kann.',
    hajj_f1:           'Alle 5 Säulen des Hajj werden durchgeführt',
    hajj_f2:           'Vollständige Video- & Fotodokumentation',
    hajj_f3:           'Offizielles Zertifikat ausgestellt',
    hajj_f4:           'Unter Aufsicht qualifizierter Ulama',
    umrah_title:       'Umrah Badal',
    umrah_desc:        'Stellvertretende Umrah in Mekka, die mit größter Sorgfalt und Aufrichtigkeit im Namen einer Person durchgeführt wird — lebend oder verstorben.',
    umrah_f1:          "Tawaf, Sa'i & alle Rituale vollständig",
    umrah_f2:          'Videobeweis innerhalb von 72 Stunden',
    umrah_f3:          'Digitales Zertifikat per E-Mail',
    umrah_f4:          'Für lebende oder verstorbene Personen',
    ramadan_title:     'Ramadan Umrah Badal',
    ramadan_desc:      'Im gesegneten Monat Ramadan durchgeführte Umrah — laut authentischem Hadith gleichwertig mit einem vollständigen Hajj.',
    ramadan_f1:        'In den Nächten des Ramadan durchgeführt',
    ramadan_f2:        'Vervielfachte spirituelle Belohnung',
    ramadan_f3:        'Vollständige Dokumentation bereitgestellt',
    ramadan_f4:        'Vorrangige Terminplanung verfügbar',
    book_hajj:         'Hajj Badal buchen',
    book_umrah:        'Umrah Badal buchen',
    book_ramadan:      'Ramadan Umrah buchen',
    from:              'ab',
    how_eyebrow:       'Einfacher Ablauf',
    how_title_a:       'Wie es',
    how_title_b:       'funktioniert',
    how_desc:          'Vier einfache Schritte, um diesen heiligen Gottesdienst für Ihren Angehörigen zu erfüllen',
    step1_title:       'Leistung wählen',
    step1_desc:        'Wählen Sie zwischen Umrah Badal, Hajj Badal oder Ramadan Umrah — für Lebende oder Verstorbene.',
    step2_title:       'Details angeben',
    step2_desc:        'Geben Sie den Namen der Person an und schließen Sie Ihre sichere Zahlung ab.',
    step3_title:       'Wir führen durch',
    step3_desc:        'Unser zertifizierter Gelehrter führt alle Rituale in Mekka mit voller Aufrichtigkeit durch.',
    step4_title:       'Beweis erhalten',
    step4_desc:        'Erhalten Sie Ihren Videobeweis, Fotos und offizielles Digitalzertifikat innerhalb von 72 Stunden.',
    donations_eyebrow: 'Sadaqa Jariyya',
    donations_title_a: 'Spenden an die',
    donations_title_b: 'Heiligen Städte',
    donations_desc:    'Verdienen Sie anhaltende Segnungen durch wohltätige Spenden in Mekka und Medina',
    don1_title:        'Rollstuhl-Spende',
    don1_desc:         'Bieten Sie älteren und behinderten Pilgern beim Tawaf Mobilitätshilfe an.',
    don2_title:        'Koran-Spende',
    don2_desc:         'Spenden Sie 5 Exemplare des Heiligen Korans an Pilger der Masjid al-Haram.',
    don3_title:        'Qurban-Opfer',
    don3_desc:         'Ein Schaf wird während der Hajj-Saison in Mekka in Ihrem Namen geschlachtet.',
    don4_title:        'Pilger speisen',
    don4_desc:         'Unterstützen Sie Iftar-Mahlzeiten und Lebensmittelpakete für Pilger in Mekka.',
    don5_title:        'Zamzam-Wasser',
    don5_desc:         'Spenden Sie Kisten des gesegneten Zamzam-Wassers — eine Kiste mit 40 Flaschen für Pilger.',
    don_cta_title:     'Geben Sie heute Sadaqa',
    don_cta_quote:     '"Almosen mindern das Vermögen nicht" — Prophet Muhammad ﷺ',
    don_cta_btn:       'Alle Spenden anzeigen',
    cert_title:        'Was Sie erhalten',
    cert1:             'HD-Video der in Mekka durchgeführten Rituale',
    cert2:             'Mehrere Fotos von heiligen Stätten',
    cert3:             'Offizielles Digitalzertifikat mit Namen',
    cert4:             'Schriftliche Bestätigung unseres Gelehrten',
    cert5:             'Innerhalb von 72 Stunden per E-Mail zugestellt',
    cert6:             'WhatsApp-Benachrichtigung bei Abschluss',
    cert_badge:        'Ausgestellte Zertifikate',
    why_eyebrow:       'Warum uns wählen',
    why_title_a:       'Vertrauen &',
    why_title_b:       'Authentizität',
    why1_title:        'Gelehrte in Mekka',
    why1_desc:         'Alle Rituale werden von qualifizierten islamischen Gelehrten durchgeführt, die in den Heiligen Städten wohnen.',
    why2_title:        'Scharia-konform',
    why2_desc:         'Jeder Dienst folgt den Scharia-Regeln zum Badal, die von mehreren islamischen Institutionen verifiziert wurden.',
    why3_title:        'Zertifiziert & Transparent',
    why3_desc:         'Eine rechtlich registrierte, vollständig rechenschaftspflichtige Organisation, der Kunden weltweit vertrauen.',
    why4_title:        'In 40+ Ländern tätig',
    why4_desc:         'Muslime aus den USA, UK, Kanada, Australien, Malaysia und anderen Ländern vertrauen unserem Service.',
    testi_eyebrow:     'Erfahrungsberichte',
    testi_title_a:     'Worte unserer',
    testi_title_b:     'Kunden',
    testi1_text:       'Ich bestellte Umrah Badal für meine verstorbene Mutter und erhielt ein wunderschönes Zertifikat und Video in zwei Tagen. Möge Allah es annehmen.',
    testi2_text:       'Mein Vater verstarb, ohne den Hajj abzuschließen. Umratul Badal half uns, Hajj Badal in seinem Namen durchzuführen. Welch ein Frieden.',
    testi3_text:       'Ich bestellte Ramadan Umrah Badal für meine betagte Mutter. Der Videobeweis war bewegend — sie weinte beim Hören ihres Namens im Haram.',
    faq_eyebrow:       'Häufige Fragen',
    faq_title_a:       'Häufig gestellte',
    faq_title_b:       'Fragen',
    faq1_q:            'Was ist Umrah Badal (Stellvertretende Umrah)?',
    faq1_a:            'Umrah Badal ist, wenn ein Muslim die Umrah im Namen einer anderen Person durchführt, die dies nicht kann — aufgrund von Krankheit, Alter, Behinderung oder Tod.',
    faq2_q:            'Ist stellvertretende Umrah im Islam erlaubt?',
    faq2_a:            'Ja. Der Prophet ﷺ erlaubte Hajj im Namen derer, die nicht in der Lage waren. Die Mehrheit der islamischen Gelehrten hält Umrah Badal ebenfalls für erlaubt.',
    faq3_q:            'Kann ich es für ein verstorbenes Familienmitglied bestellen?',
    faq3_a:            'Ja. Sie können Umrah Badal oder Hajj Badal für einen Verstorbenen als Sadaqa Jariyya bestellen. Geben Sie bei der Buchung den vollständigen Namen an.',
    faq4_q:            'Welchen Beweis erhalte ich?',
    faq4_a:            "Innerhalb von 72 Stunden: HD-Video, Fotos der Heiligen Moschee, offizielles Digitalzertifikat und schriftliche Bestätigung unseres Gelehrten.",
    faq5_q:            'Wer führt die Umrah oder den Hajj durch?',
    faq5_a:            'Alle Rituale werden von qualifizierten islamischen Gelehrten durchgeführt, die in oder nahe Mekka wohnen, aufrichtig und gemäß der Scharia.',
    faq6_q:            'Ist dieser Service zertifiziert und vertrauenswürdig?',
    faq6_a:            'Ja. Umratul Badal ist eine rechtlich registrierte und vollständig transparente Organisation. Wir haben Kunden in über 40 Ländern bedient.',
    cta_title:         'Bereit, diese heilige Pflicht zu erfüllen?',
    cta_sub:           'Lassen Sie uns Umrah oder Hajj Badal für Ihre Liebsten mit Aufrichtigkeit, Sorgfalt und vollständiger Dokumentation durchführen.',
    cta_btn_book:      'Leistung buchen',
    cta_btn_wa:        'Auf WhatsApp kontaktieren',
    footer_tagline:    'Vertrauenswürdige Umrah Badal und Hajj Badal-Dienste, durchgeführt von zertifizierten Gelehrten in den Heiligen Städten Mekka und Medina.',
    footer_services:   'Leistungen',
    footer_contact:    'Kontakt',
    footer_all_services: 'Alle Leistungen',
    footer_rights:     'Alle Rechte vorbehalten.',
    footer_cert:       'Scharia-Zertifiziert · Weltweit Vertrauenswürdig',
  },

  /* ─────────── HAUSA ─────────── */
  ha: {
    loading:           'Ana lodawa…',
    nav_home:          'Gida',
    nav_services:      'Ayyuka',
    nav_how:           'Yadda Yake Aiki',
    nav_donations:     'Gudummawa',
    nav_why:           'Me Yasa Mu',
    nav_faq:           'Tambayoyi',
    nav_login:         'Shiga',
    hero_badge:        "An Amince da Shari'a · Makka & Madina",
    hero_subtitle:     "Gudanar da Umrah & Hajj Badal a madadin ƙaunatattunku ta wakilai amintattun da aka tabbatar da shari'a a garuruwan tsarkaka na Makka da Madina.",
    hero_cta_book:     'Yi Ajiyar Sabis',
    hero_cta_learn:    'Ƙara Sani',
    stat_umrahs:       'Umrah da Aka Gudanar',
    stat_countries:    "Ƙasashe da Aka Ba da Sabis",
    stat_certified:    "An Tabbatar da Shari'a",
    stat_proof:        'Isar da Shaidar',
    trust_video:       'Shaida ta Bidiyo Kai Tsaye',
    trust_scholars:    'Ƙarƙashin Kulawa ta Malamai',
    trust_cert:        'Takardar Shaida ta Hukuma',
    trust_shariah:     "Ya Bi Shari'a",
    trust_support:     'Tallafi ta WhatsApp 24/7',
    services_eyebrow:  'Ayyukanmu Masu Tsarki',
    services_title_a:  'Hajji &',
    services_title_b:  'Umrah Badal',
    services_desc:     'Zaɓi sabis da malaman Musulunci masu takaddun shaida da ke zaune a Birane Masu Tsarki suke gudanarwa',
    tag_complete:      'Mafi Cikakke',
    tag_popular:       'Mafi Shahara',
    tag_reward:        'Ladan Allah Mai Yawa',
    hajj_title:        'Hajji Badal',
    hajj_desc:         "Cikakken Hajji da aka gudanar a madadin ƙaunatankku da bai iya zuwa ba saboda rashin lafiya, tsufa, ko mutuwa.",
    hajj_f1:           "An kammala dukkan ginshiƙai 5 na Hajji",
    hajj_f2:           'Cikakken takardun bidiyo & hoto',
    hajj_f3:           'An fitar da takardar shaida ta hukuma',
    hajj_f4:           'Ƙarƙashin kulawa ta malamai masu cancanta',
    umrah_title:       'Umrah Badal',
    umrah_desc:        "Umrah ta wakilci a Makka da aka gudanar da cikakken kulawa da gaskiya a madadin kowane mutum — mai rai ko ya mutu.",
    umrah_f1:          "Tawaf, Sa'i & dukkan al'adun sun cika",
    umrah_f2:          'Shaida ta bidiyo a cikin awowi 72',
    umrah_f3:          'Takardar shaida ta dijital ta imel',
    umrah_f4:          'Ga masu rai ko marasa rai',
    ramadan_title:     'Umrah Ramadan Badal',
    ramadan_desc:      'Umrah da aka gudanar a watan Ramadan mai albarka — daidai da ladan cikakken Hajji a cewar hadisin gaskiya.',
    ramadan_f1:        'An gudanar da dare na Ramadan',
    ramadan_f2:        'Ladan ruhaniya da aka ninka',
    ramadan_f3:        'An samar da cikakken takardun',
    ramadan_f4:        'Jadawalin fifiko yana samuwa',
    book_hajj:         'Yi Ajiyar Hajji Badal',
    book_umrah:        'Yi Ajiyar Umrah Badal',
    book_ramadan:      'Yi Ajiyar Umrah Ramadan',
    from:              'daga',
    how_eyebrow:       'Sauƙin Tsari',
    how_title_a:       'Yadda Yake',
    how_title_b:       'Aiki',
    how_desc:          "Matakai huɗu masu sauƙi don cika wannan aikin ibada mai tsarki a madadin ƙaunatankku",
    step1_title:       'Zaɓi Sabis',
    step1_desc:        'Zaɓi tsakanin Umrah Badal, Hajji Badal, ko Umrah Ramadan — don masu rai ko matattun.',
    step2_title:       'Bayar da Bayanai',
    step2_desc:        "Raba sunan mutumin da za a gudanar da ibadar a madadinsa ka kammala biyan kuɗi mai aminci.",
    step3_title:       'Muna Gudanarwa',
    step3_desc:        "Malaminmu mai takardar shaida yana gudanar da dukkan al'adu a Makka da cikakken gaskiya.",
    step4_title:       'Karɓi Shaida',
    step4_desc:        'Sami bidiyon shaida, hotuna, da takardar shaida ta dijital ta hukuma a cikin awowi 72.',
    donations_eyebrow: 'Sadakar Jariya',
    donations_title_a: 'Ba da Gudummawa ga',
    donations_title_b: 'Birane Masu Tsarki',
    donations_desc:    'Sami albarku mai ɗorewa ta hanyar ba da sadaka a Makka da Madina',
    don1_title:        'Gudummawar Keken Gurgu',
    don1_desc:         'Bayar da taimako na motsi ga mahajjata tsotsaffo da nakasassu yayin Tawaf.',
    don2_title:        'Gudummawar Alƙur\'ani',
    don2_desc:         'Ba da kwafi 5 na Alƙur\'ani Mai Tsarki ga mahajjata da ke ziyartar Masallacin Haram.',
    don3_title:        'Sadaukarwar Qurbani',
    don3_desc:         'An yanka rago a Makka a lokacin kakar Hajji a madadinksa.',
    don4_title:        'Ciyar da Mahajjata',
    don4_desc:         'Tallafa wa abincin Iftar da kwalaben abinci ga mahajjata a Makka.',
    don5_title:        'Ruwan Zamzam',
    don5_desc:         'Ba da akwatunan ruwan Zamzam mai albarka — akwati ɗaya mai kwalabe 40 ga mahajjata.',
    don_cta_title:     'Ba da Sadaka Yau',
    don_cta_quote:     '"Sadaka ba ta raguwa ba dukiya" — Annabi Muhammad ﷺ',
    don_cta_btn:       'Duba Dukkan Gudummawar',
    cert_title:        'Abin da Za Ka Samu',
    cert1:             "Bidiyo na HD na al'adu da aka gudanar a Makka",
    cert2:             'Hotuna da yawa daga wuraren tsarki',
    cert3:             'Takardar shaida ta dijital ta hukuma mai suna',
    cert4:             'Tabbaci na rubutu daga malaminmu',
    cert5:             'An isar ta imel a cikin awowi 72',
    cert6:             'Sanarwar WhatsApp idan an kammala',
    cert_badge:        'Takardun Shaida da Aka Fitar',
    why_eyebrow:       'Me Yasa Zaɓar Mu',
    why_title_a:       'Amana &',
    why_title_b:       'Asali',
    why1_title:        'Malamai a Makka',
    why1_desc:         "Dukkan al'adu ana gudanar da su ne ta hanyar malaman Musulunci masu cancanta da ke zaune a Birane Masu Tsarki.",
    why2_title:        "Yana Bi Shari'a",
    why2_desc:         "Kowane sabis yana bin dokokin shari'a akan Badal kamar yadda cibiyoyi da malamai da yawa na Musulunci suka tabbatar.",
    why3_title:        'An Tabbatar & Mai Gaskiya',
    why3_desc:         'Wata ƙungiya da aka yi rajista bisa doka, mai cikakken lissafi, da abokan ciniki a duniya suka amince da ita.',
    why4_title:        'Ana Hidimar Ƙasashe 40+',
    why4_desc:         'Musulmai daga Amurka, Ingila, Kanada, Ostiraliya, Malasiya, da sauransu suna amincewa da sabismu kowace shekara.',
    testi_eyebrow:     'Shaidun Abokan Ciniki',
    testi_title_a:     'Kalmomi daga',
    testi_title_b:     'Abokanmu',
    testi1_text:       "Na yi odar Umrah Badal don mahaifiyata da ta rasu kuma na karɓi takarda mai kyau da bidiyo a cikin kwanaki biyu. Allah ya karɓa.",
    testi2_text:       "Mahaifinmu ya rasu ba tare da ya kammala Hajji ba. Umratul Badal ta taimake mu wajen gudanar da Hajji Badal a madadinsa. Mun ji salama.",
    testi3_text:       "Na yi odar Umrah Ramadan Badal don tsohuwar mahaifiyata. Bidiyon shaida ya taɓa zuciya — ta yi kuka tana jin sunanta ana kiranta a Haram.",
    faq_eyebrow:       'Tambayoyin Da Ake Yawan Yi',
    faq_title_a:       'Tambayoyi Masu',
    faq_title_b:       'Yawan Yin Su',
    faq1_q:            'Mene ne Umrah Badal?',
    faq1_a:            "Umrah Badal shi ne lokacin da Musulmi yake gudanar da Umrah a madadin wani mutum da bai iya yi ba — saboda rashin lafiya, tsufa, nakasa, ko mutuwa.",
    faq2_q:            "Shin Umrah ta wakilci ta halatta a Musulunci?",
    faq2_a:            "E. Annabi ﷺ ya yarda da gudanar da Hajji a madadin marasa iya. Mafi yawan malaman Musulunci suna ɗaukar Umrah Badal da ita ma ta halatta.",
    faq3_q:            'Zan iya yi odar don wanda ya rasu?',
    faq3_a:            "E. Zaka iya yi odar Umrah Badal ko Hajji Badal don wanda ya rasu a matsayin sadakar jariya. Ka bayar da sunansu cikakke yayin ajiya.",
    faq4_q:            'Wace shaida zan samu?',
    faq4_a:            "A cikin awowi 72: bidiyo na HD, hotuna daga Masallacin Haram, takardar shaida ta dijital ta hukuma da sunan mutumin, da tabbaci na rubutu daga malaminmu.",
    faq5_q:            'Wane ne ke gudanar da Umrah ko Hajji?',
    faq5_a:            "Dukkan al'adu ana gudanar da su ne ta malaman Musulunci masu cancanta da ke zaune a Makka ko kusa da ita. Suna gudanar da kowace ibada da gaskiya bisa shari'a.",
    faq6_q:            'Shin wannan sabis yana da takarda kuma ana amincewa da shi?',
    faq6_a:            "E. Umratul Badal ƙungiya ce da aka yi rajista bisa doka kuma mai cikakken gaskiya. Mun yi hidima ga abokan ciniki a ƙasashe 40+.",
    cta_title:         'Kana Shirye don Cika wannan Wajibcin Mai Tsarki?',
    cta_sub:           'Ka bar mu mu gudanar da Umrah ko Hajji Badal don ƙaunatattunksa da gaskiya, kulawa, da cikakkun takardun.',
    cta_btn_book:      'Yi Ajiyar Sabis',
    cta_btn_wa:        'Tuntuɓe mu ta WhatsApp',
    footer_tagline:    'Ayyukan Umrah Badal da Hajji Badal masu aminci da malamai masu takardar shaida ke gudanarwa a Birane Masu Tsarki.',
    footer_services:   'Ayyuka',
    footer_contact:    'Tuntuɓa',
    footer_all_services: 'Dukkan Ayyuka',
    footer_rights:     'Dukkan haƙƙoƙi an kiyaye su.',
    footer_cert:       "An Tabbatar da Shari'a · Ana Amincewa da shi a Duniya",
  },

}; // end TRANSLATIONS


/* ══════════════════════════════════════════════════════════
   03. APP STATE
   ══════════════════════════════════════════════════════════ */

const State = {
  lang:  localStorage.getItem('ub_lang')  || 'en',
  theme: localStorage.getItem('ub_theme') || 'light',
};


/* ══════════════════════════════════════════════════════════
   04. LOADING SCREEN
   Hides after the window fully loads (or after 2s max).
   ══════════════════════════════════════════════════════════ */

function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  function hideLoader() {
    screen.classList.add('hidden');
    // Remove from DOM after transition ends so it doesn't block interaction
    screen.addEventListener('transitionend', () => screen.remove(), { once: true });
  }

  // Hide immediately if page already loaded, otherwise wait for load event
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 600);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 600));
    // Safety net: hide after 3 seconds regardless
    setTimeout(hideLoader, 3000);
  }
}


/* ══════════════════════════════════════════════════════════
   05. DARK / LIGHT MODE TOGGLE
   ══════════════════════════════════════════════════════════ */

function initTheme() {
  // Apply saved theme on page load
  applyTheme(State.theme);

  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    State.theme = State.theme === 'light' ? 'dark' : 'light';
    applyTheme(State.theme);
    localStorage.setItem('ub_theme', State.theme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}


/* ══════════════════════════════════════════════════════════
   06. LANGUAGE SWITCHER UI
   Builds the dropdown, handles open/close & selection.
   ══════════════════════════════════════════════════════════ */

function initLanguageSwitcher() {
  const switcher  = document.getElementById('langSwitcher');
  const btn       = document.getElementById('langBtn');
  const dropdown  = document.getElementById('langDropdown');
  const flagEl    = document.getElementById('langFlag');
  const codeEl    = document.getElementById('langCode');

  if (!switcher || !btn || !dropdown) return;

  // Build dropdown options from LANGUAGES array
  LANGUAGES.forEach(lang => {
    const option = document.createElement('div');
    option.className  = 'lang-option';
    option.dataset.code = lang.code;
    option.innerHTML  = `
      <span class="opt-flag">${lang.flag}</span>
      <span>${lang.label}</span>
      <span class="opt-native">${lang.native}</span>
    `;
    option.addEventListener('click', () => {
      selectLanguage(lang.code);
      closeDropdown();
    });
    dropdown.appendChild(option);
  });

  // Apply saved language to button label
  updateBtnLabel(State.lang);

  // Toggle dropdown open/close
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    isOpen ? closeDropdown() : openDropdown();
  });

  // Close when clicking anywhere else on the page
  document.addEventListener('click', closeDropdown);
  dropdown.addEventListener('click', (e) => e.stopPropagation());

  function openDropdown() {
    dropdown.classList.add('open');
    btn.classList.add('open');
    markActiveOption(State.lang);
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    btn.classList.remove('open');
  }

  function markActiveOption(code) {
    dropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.code === code);
    });
  }

  function updateBtnLabel(code) {
    const lang = LANGUAGES.find(l => l.code === code);
    if (!lang) return;
    if (flagEl) flagEl.textContent = lang.flag;
    if (codeEl) codeEl.textContent = lang.code.toUpperCase();
  }

  function selectLanguage(code) {
    State.lang = code;
    localStorage.setItem('ub_lang', code);
    updateBtnLabel(code);
    applyTranslations(code);
    applyDirection(code);
    markActiveOption(code);
  }
}


/* ══════════════════════════════════════════════════════════
   07. i18n — APPLY TRANSLATIONS
   Walks all [data-i18n] elements and sets their textContent.
   ══════════════════════════════════════════════════════════ */

function applyTranslations(code) {
  const strings = TRANSLATIONS[code] || TRANSLATIONS['en'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });
}

function applyDirection(code) {
  const lang = LANGUAGES.find(l => l.code === code);
  const dir  = lang ? lang.dir : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', code);
}


/* ══════════════════════════════════════════════════════════
   08. MOBILE SIDEBAR
   ══════════════════════════════════════════════════════════ */

function initMobileSidebar() {
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('mobileSidebar');
  const overlay   = document.getElementById('sidebarOverlay');
  const closeBtn  = document.getElementById('sidebarClose');

  if (!hamburger || !sidebar || !overlay) return;

  function open() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? close() : open();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  // Close when a sidebar link is tapped
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}


/* ══════════════════════════════════════════════════════════
   09. FAQ ACCORDION
   ══════════════════════════════════════════════════════════ */

function initFaq() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item   = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Re-open if it was closed before the click
      if (!isOpen) item.classList.add('open');
    });
  });
}


/* ══════════════════════════════════════════════════════════
   10. NAVBAR SCROLL EFFECT
   Adds a shadow when user scrolls down.
   ══════════════════════════════════════════════════════════ */

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}


/* ══════════════════════════════════════════════════════════
   11. SCROLL REVEAL ANIMATIONS
   Uses IntersectionObserver to add .visible to .reveal elements.
   ══════════════════════════════════════════════════════════ */

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers: show everything immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.12,    // trigger when 12% of the element is visible
    rootMargin: '0px 0px -40px 0px',
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════════════════════════
   12. ANIMATED COUNTERS
   Counts up any element with data-count="N" and data-suffix="X".
   Triggers once the element scrolls into view.
   ══════════════════════════════════════════════════════════ */

function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-count'), 10);
  const suffix   = el.getAttribute('data-suffix') || '';
  const duration = 2000;   // total animation time in ms
  const steps    = 60;     // number of animation frames
  const stepTime = duration / steps;
  let   current  = 0;

  const timer = setInterval(() => {
    current += target / steps;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, stepTime);
}

function initCounters() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-count]').forEach(el => {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // count up only once
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════════════════════════
   13. BACK TO TOP BUTTON
   Shows after scrolling 400px; scrolls to top on click.
   ══════════════════════════════════════════════════════════ */

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  // Show / hide based on scroll position
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Smooth scroll to top
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ══════════════════════════════════════════════════════════
   14. BOOT — Initialise everything when DOM is ready
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  initLoadingScreen();     // 04 — hide loader when page is ready
  initTheme();             // 05 — apply saved dark/light mode
  initLanguageSwitcher();  // 06 — build lang dropdown & handle clicks
  applyTranslations(State.lang);  // 07 — render text in saved language
  applyDirection(State.lang);     // 07 — set html dir & lang attributes
  initMobileSidebar();     // 08 — hamburger + slide-in panel
  initFaq();               // 09 — accordion open/close
  initNavbarScroll();      // 10 — shadow on scroll
  initScrollReveal();      // 11 — fade-in elements as they enter viewport
  initCounters();          // 12 — animated number count-up
  initBackToTop();         // 13 — floating back-to-top button

});
