import { ServiceCategory, AgencyContact } from '../types';

export const contactInfo: AgencyContact = {
  phones: ['+966509077753', '+966539000939'],
  location: 'الرياض - العليا - حي الورود',
  defaultWhatsApp: '+966509077753'
};

export const additionalServices: ServiceCategory[] = [
  {
    title: 'الحلول الرقمية',
    items: [
      'تصميم وتطوير المواقع الإلكترونية',
      'إنشاء المتاجر الإلكترونية',
      'تصميم وبرمجة التطبيقات',
      'تطوير الأنظمة والبرمجيات',
      'ربط الأنظمة والخدمات الرقمية'
    ]
  },
  {
    title: 'التسويق عبر المؤثرين',
    items: [
      'اختيار المؤثرين والبلوجرز المناسبين',
      'التنسيق والتفاوض',
      'إدارة التعاونات',
      'تنفيذ الحملات',
      'متابعة النتائج'
    ]
  }
];

export const customServiceNote = {
  title: 'معلومة مهمة',
  text: 'الباقات غير إلزامية، ويمكن للعميل اختيار وترتيب الخدمات حسب الرغبة.',
  buttonText: 'تنسيق باقة مخصصة عبر واتساب'
};