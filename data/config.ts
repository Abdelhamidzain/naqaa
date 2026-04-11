// ═══════════════════════════════════════
// NAQAA v2 — Central Data Configuration
// ═══════════════════════════════════════

export const SITE = {
  name: 'نقاء',
  nameEn: 'Naqaa',
  domain: 'https://naqaa.sa',
  phone: '+966500000000',
  phoneDisplay: '0500000000',
  whatsapp: '966500000000',
  email: 'info@naqaa.sa',
  address: 'الرياض، المملكة العربية السعودية',
} as const;

export interface ServiceDef {
  slug: string;
  nameAr: string;
  nameEn: string;
  shortDesc: string;
  primaryKw: string;
  priceFrom?: string;
  category: 'residential' | 'specialized' | 'commercial' | 'maintenance';
  priority: number;
}

export const SERVICES: ServiceDef[] = [
  { slug: 'house-cleaning', nameAr: 'تنظيف منازل', nameEn: 'House Cleaning', shortDesc: 'تنظيف شامل لجميع أنواع المنازل والبيوت بمعدات حديثة ومواد آمنة', primaryKw: 'شركة تنظيف منازل', priceFrom: '٢٥٠', category: 'residential', priority: 1 },
  { slug: 'deep-cleaning', nameAr: 'تنظيف عميق', nameEn: 'Deep Cleaning', shortDesc: 'تنظيف مكثف يصل لكل زاوية مخفية ويزيل الأوساخ المتراكمة', primaryKw: 'تنظيف عميق', priceFrom: '٤٠٠', category: 'residential', priority: 2 },
  { slug: 'sofa-cleaning', nameAr: 'تنظيف كنب', nameEn: 'Sofa Cleaning', shortDesc: 'غسيل الكنب والمجالس بالبخار والشامبو المتخصص مع الحفاظ على الأقمشة', primaryKw: 'شركة تنظيف كنب', priceFrom: '١٥٠', category: 'specialized', priority: 3 },
  { slug: 'carpet-cleaning', nameAr: 'تنظيف سجاد', nameEn: 'Carpet Cleaning', shortDesc: 'غسيل السجاد والموكيت بالبخار مع إزالة البقع والروائح', primaryKw: 'تنظيف سجاد', priceFrom: '١٠٠', category: 'specialized', priority: 4 },
  { slug: 'marble-polishing', nameAr: 'جلي رخام', nameEn: 'Marble Polishing', shortDesc: 'جلي وتلميع الرخام والغرانيت بأقراص الألماس الإيطالية', primaryKw: 'شركة جلي رخام', priceFrom: '٣٠', category: 'specialized', priority: 5 },
  { slug: 'ac-cleaning', nameAr: 'تنظيف مكيفات', nameEn: 'AC Cleaning', shortDesc: 'غسيل المكيفات بالبخار مع تعقيم ضد البكتيريا والفطريات', primaryKw: 'تنظيف مكيفات', priceFrom: '١٠٠', category: 'maintenance', priority: 6 },
  { slug: 'hourly-cleaning', nameAr: 'تنظيف بالساعة', nameEn: 'Hourly Cleaning', shortDesc: 'خدمة مرنة بالساعة تناسب احتياجاتك ووقتك', primaryKw: 'شركة تنظيف بالساعة', priceFrom: '٤٥', category: 'residential', priority: 7 },
  { slug: 'move-cleaning', nameAr: 'تنظيف قبل وبعد النقل', nameEn: 'Move Cleaning', shortDesc: 'تنظيف شامل عند الانتقال لمنزل جديد أو تسليم منزل قديم', primaryKw: 'تنظيف شقق قبل النقل', priceFrom: '٣٠٠', category: 'residential', priority: 8 },
  { slug: 'office-cleaning', nameAr: 'تنظيف مكاتب', nameEn: 'Office Cleaning', shortDesc: 'خدمات نظافة احترافية للمكاتب والمنشآت التجارية', primaryKw: 'شركة تنظيف مكاتب', priceFrom: '٥٠٠', category: 'commercial', priority: 9 },
  { slug: 'tank-cleaning', nameAr: 'تنظيف خزانات', nameEn: 'Tank Cleaning', shortDesc: 'غسيل وتعقيم خزانات المياه بمواد معتمدة صحياً', primaryKw: 'شركة تنظيف خزانات', priceFrom: '٢٥٠', category: 'maintenance', priority: 10 },
  { slug: 'mattress-cleaning', nameAr: 'تنظيف مراتب', nameEn: 'Mattress Cleaning', shortDesc: 'تعقيم المراتب بالبخار للقضاء على العث والبكتيريا', primaryKw: 'تنظيف مراتب', priceFrom: '٨٠', category: 'specialized', priority: 11 },
  { slug: 'curtain-cleaning', nameAr: 'تنظيف ستائر', nameEn: 'Curtain Cleaning', shortDesc: 'غسيل الستائر بالبخار أو بالمغسلة مع الحفاظ على الأقمشة', primaryKw: 'تنظيف ستائر', priceFrom: '٢٠', category: 'specialized', priority: 12 },
  { slug: 'post-construction-cleaning', nameAr: 'تنظيف بعد البناء', nameEn: 'Post-Construction', shortDesc: 'إزالة مخلفات البناء وتجهيز المبنى للسكن أو العمل', primaryKw: 'تنظيف بعد البناء', priceFrom: '٨٠٠', category: 'specialized', priority: 13 },
  { slug: 'disinfection', nameAr: 'تعقيم وتطهير', nameEn: 'Disinfection', shortDesc: 'تعقيم شامل بمواد معتمدة تقضي على الجراثيم والفيروسات', primaryKw: 'شركة تعقيم', priceFrom: '٢٠٠', category: 'maintenance', priority: 14 },
  { slug: 'pest-control', nameAr: 'مكافحة حشرات', nameEn: 'Pest Control', shortDesc: 'مكافحة جميع أنواع الحشرات والقوارض بمبيدات آمنة ومعتمدة', primaryKw: 'شركة مكافحة حشرات', priceFrom: '١٥٠', category: 'maintenance', priority: 15 },
  { slug: 'tile-cleaning', nameAr: 'تنظيف بلاط', nameEn: 'Tile Cleaning', shortDesc: 'تنظيف وتلميع البلاط والسيراميك مع معالجة الفواصل', primaryKw: 'تنظيف بلاط', priceFrom: '٢٥', category: 'specialized', priority: 16 },
];

export interface CityDef {
  slug: string;
  nameAr: string;
  preposition: string; // بالرياض، بجدة etc.
  isLaunched: boolean;
  priority: number;
  neighborhoods?: string[];
}

export const CITIES: CityDef[] = [
  { slug: 'riyadh', nameAr: 'الرياض', preposition: 'بالرياض', isLaunched: true, priority: 1, neighborhoods: ['النرجس','الملقا','العليا','حطين','الياسمين','النخيل','الربيع','الصحافة','العقيق','الغدير','الورود','المروج','السليمانية','الشفا','العزيزية','الحمراء','الروضة','الملز','القيروان','العارض'] },
  { slug: 'jeddah', nameAr: 'جدة', preposition: 'بجدة', isLaunched: true, priority: 2 },
  { slug: 'dammam', nameAr: 'الدمام', preposition: 'بالدمام', isLaunched: true, priority: 3 },
  { slug: 'makkah', nameAr: 'مكة', preposition: 'بمكة', isLaunched: true, priority: 4 },
  { slug: 'khobar', nameAr: 'الخبر', preposition: 'بالخبر', isLaunched: true, priority: 5 },
  { slug: 'taif', nameAr: 'الطائف', preposition: 'بالطائف', isLaunched: true, priority: 6 },
  { slug: 'madinah', nameAr: 'المدينة المنورة', preposition: 'بالمدينة المنورة', isLaunched: true, priority: 7 },
  { slug: 'ahsa', nameAr: 'الاحساء', preposition: 'بالاحساء', isLaunched: true, priority: 8 },
  { slug: 'jubail', nameAr: 'الجبيل', preposition: 'بالجبيل', isLaunched: true, priority: 9 },
  { slug: 'tabuk', nameAr: 'تبوك', preposition: 'بتبوك', isLaunched: true, priority: 10 },
  { slug: 'khamis-mushait', nameAr: 'خميس مشيط', preposition: 'بخميس مشيط', isLaunched: true, priority: 11 },
  { slug: 'abha', nameAr: 'أبها', preposition: 'بأبها', isLaunched: true, priority: 12 },
  { slug: 'kharj', nameAr: 'الخرج', preposition: 'بالخرج', isLaunched: true, priority: 13 },
  { slug: 'qatif', nameAr: 'القطيف', preposition: 'بالقطيف', isLaunched: true, priority: 14 },
];

export const GLOBAL_FAQS = [
  { q: 'كم تكلفة خدمات التنظيف؟', a: 'تختلف الأسعار حسب نوع الخدمة ومساحة المكان. نقدم عروض أسعار مجانية بعد وصف الاحتياجات عبر الواتساب.' },
  { q: 'هل المواد المستخدمة آمنة على الأطفال والحيوانات؟', a: 'نعم، جميع المواد معتمدة وآمنة تماماً على الأطفال والحيوانات الأليفة والبيئة.' },
  { q: 'هل أحتاج أكون في المنزل أثناء التنظيف؟', a: 'ليس بالضرورة. فريقنا مؤمن ومرخص ويمكنك تسليم المفتاح بكل أمان.' },
  { q: 'كم يستغرق وقت التنظيف؟', a: 'يعتمد على المساحة ونوع الخدمة. شقة متوسطة تستغرق ٣-٥ ساعات. نحدد الوقت المتوقع مسبقاً.' },
  { q: 'هل يوجد ضمان على الخدمة؟', a: 'نعم، ضمان رضا كامل. إذا لم تكن راضياً نعيد التنظيف مجاناً خلال ٤٨ ساعة.' },
  { q: 'كيف أحجز موعد؟', a: 'عبر الواتساب أو الاتصال المباشر. نرد خلال ساعة واحدة كحد أقصى.' },
];
