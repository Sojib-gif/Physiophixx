/* ===================== PHYSIOPHIXX CLINIC MANAGEMENT ===================== */

/* ---------- Bangladesh District -> Upazila data ---------- */
const BD_DATA = {
"Dhaka":["Dhamrai","Dohar","Keraniganj","Nawabganj","Savar","Dhaka City"],
"Faridpur":["Faridpur Sadar","Alfadanga","Bhanga","Boalmari","Charbhadrasan","Madhukhali","Nagarkanda","Sadarpur","Saltha"],
"Gazipur":["Gazipur Sadar","Kaliakair","Kaliganj","Kapasia","Sreepur"],
"Gopalganj":["Gopalganj Sadar","Kashiani","Kotalipara","Muksudpur","Tungipara"],
"Kishoreganj":["Kishoreganj Sadar","Austagram","Bajitpur","Bhairab","Hossainpur","Itna","Karimganj","Katiadi","Kuliarchar","Mithamain","Nikli","Pakundia","Tarail"],
"Madaripur":["Madaripur Sadar","Kalkini","Rajoir","Shibchar"],
"Manikganj":["Manikganj Sadar","Daulatpur","Ghior","Harirampur","Saturia","Shivalaya","Singair"],
"Munshiganj":["Munshiganj Sadar","Gazaria","Lohajang","Sirajdikhan","Sreenagar","Tongibari"],
"Narayanganj":["Narayanganj Sadar","Araihazar","Bandar","Rupganj","Sonargaon"],
"Narsingdi":["Narsingdi Sadar","Belabo","Monohardi","Palash","Raipura","Shibpur"],
"Rajbari":["Rajbari Sadar","Baliakandi","Goalandaghat","Pangsha","Kalukhali"],
"Shariatpur":["Shariatpur Sadar","Bhedarganj","Damudya","Gosairhat","Naria","Zajira"],
"Tangail":["Tangail Sadar","Basail","Bhuapur","Delduar","Dhanbari","Ghatail","Gopalpur","Kalihati","Madhupur","Mirzapur","Nagarpur","Sakhipur","Shibpur"],
"Bandarban":["Bandarban Sadar","Alikadam","Lama","Naikhongchhari","Rowangchhari","Ruma","Thanchi"],
"Brahmanbaria":["Brahmanbaria Sadar","Akhaura","Ashuganj","Bancharampur","Bijoynagar","Kasba","Nabinagar","Nasirnagar","Sarail"],
"Chandpur":["Chandpur Sadar","Faridganj","Haimchar","Haziganj","Kachua","Matlab Dakshin","Matlab Uttar","Shahrasti"],
"Chattogram":["Anwara","Banshkhali","Boalkhali","Chandanaish","Fatikchhari","Hathazari","Lohagara","Mirsharai","Patiya","Rangunia","Raozan","Sandwip","Satkania","Sitakunda","Chattogram City"],
"Comilla":["Comilla Sadar","Barura","Brahmanpara","Burichang","Chandina","Chauddagram","Daudkandi","Debidwar","Homna","Laksam","Meghna","Muradnagar","Nangalkot","Titas"],
"Cox's Bazar":["Cox's Bazar Sadar","Chakaria","Kutubdia","Maheshkhali","Ramu","Teknaf","Ukhia","Pekua"],
"Feni":["Feni Sadar","Chhagalnaiya","Daganbhuiyan","Parshuram","Sonagazi","Fulgazi"],
"Khagrachhari":["Khagrachhari Sadar","Dighinala","Lakshmichhari","Mahalchhari","Manikchhari","Matiranga","Panchhari","Ramgarh"],
"Lakshmipur":["Lakshmipur Sadar","Kamalnagar","Raipur","Ramganj","Ramgati"],
"Noakhali":["Noakhali Sadar","Begumganj","Chatkhil","Companiganj","Hatiya","Kabirhat","Senbagh","Sonaimuri","Subarnachar"],
"Rangamati":["Rangamati Sadar","Bagaichhari","Barkal","Belaichhari","Juraichhari","Kaptai","Kawkhali","Langadu","Naniarchar","Rajasthali"],
"Bagerhat":["Bagerhat Sadar","Chitalmari","Fakirhat","Kachua","Mollahat","Mongla","Morrelganj","Rampal","Sarankhola"],
"Chuadanga":["Chuadanga Sadar","Alamdanga","Damurhuda","Jibannagar"],
"Jashore":["Jashore Sadar","Abhaynagar","Bagherpara","Chaugachha","Jhikargachha","Keshabpur","Manirampur","Sharsha"],
"Jhenaidah":["Jhenaidah Sadar","Harinakunda","Kaliganj","Kotchandpur","Maheshpur","Shailkupa"],
"Khulna":["Khulna Sadar","Batiaghata","Dacope","Dumuria","Dighalia","Koyra","Paikgachha","Phultala","Rupsa","Terokhada"],
"Kushtia":["Kushtia Sadar","Bheramara","Daulatpur","Khoksa","Kumarkhali","Mirpur"],
"Magura":["Magura Sadar","Mohammadpur","Shalikha","Sreepur"],
"Meherpur":["Meherpur Sadar","Gangni","Mujibnagar"],
"Narail":["Narail Sadar","Kalia","Lohagara"],
"Satkhira":["Satkhira Sadar","Assasuni","Debhata","Kalaroa","Kaliganj","Shyamnagar","Tala"],
"Bogura":["Bogura Sadar","Adamdighi","Dhunat","Dhupchanchia","Gabtali","Kahaloo","Nandigram","Sariakandi","Shajahanpur","Sherpur","Shibganj","Sonatala"],
"Joypurhat":["Joypurhat Sadar","Akkelpur","Kalai","Khetlal","Panchbibi"],
"Naogaon":["Naogaon Sadar","Atrai","Badalgachhi","Dhamoirhat","Manda","Mahadebpur","Niamatpur","Patnitala","Porsha","Raninagar","Sapahar"],
"Natore":["Natore Sadar","Bagatipara","Baraigram","Gurudaspur","Lalpur","Singra"],
"Chapainawabganj":["Chapainawabganj Sadar","Bholahat","Gomastapur","Nachole","Shibganj"],
"Pabna":["Pabna Sadar","Atgharia","Bera","Bhangura","Chatmohar","Faridpur","Ishwardi","Santhia","Sujanagar"],
"Rajshahi":["Rajshahi City","Bagha","Bagmara","Charghat","Durgapur","Godagari","Mohanpur","Paba","Puthia","Tanore"],
"Sirajganj":["Sirajganj Sadar","Belkuchi","Chauhali","Kamarkhanda","Kazipur","Raiganj","Shahjadpur","Tarash","Ullapara"],
"Dinajpur":["Dinajpur Sadar","Birampur","Birganj","Biral","Bochaganj","Chirirbandar","Fulbari","Ghoraghat","Hakimpur","Kaharole","Khansama","Nawabganj","Parbatipur"],
"Gaibandha":["Gaibandha Sadar","Fulchhari","Gobindaganj","Palashbari","Sadullapur","Saghata","Sundarganj"],
"Kurigram":["Kurigram Sadar","Bhurungamari","Char Rajibpur","Chilmari","Nageshwari","Phulbari","Rajarhat","Raomari","Ulipur"],
"Lalmonirhat":["Lalmonirhat Sadar","Aditmari","Hatibandha","Kaliganj","Patgram"],
"Nilphamari":["Nilphamari Sadar","Dimla","Domar","Jaldhaka","Kishoreganj","Saidpur"],
"Panchagarh":["Panchagarh Sadar","Atwari","Boda","Debiganj","Tetulia"],
"Rangpur":["Rangpur Sadar","Badarganj","Gangachara","Kaunia","Mithapukur","Pirgachha","Pirganj","Taraganj"],
"Thakurgaon":["Thakurgaon Sadar","Baliadangi","Haripur","Pirganj","Ranisankail"],
"Barguna":["Barguna Sadar","Amtali","Bamna","Betagi","Patharghata","Taltali"],
"Barishal":["Barishal Sadar","Agailjhara","Babuganj","Bakerganj","Banaripara","Gaurnadi","Hizla","Mehendiganj","Muladi","Wazirpur"],
"Bhola":["Bhola Sadar","Borhanuddin","Char Fasson","Daulatkhan","Lalmohan","Manpura","Tazumuddin"],
"Jhalokati":["Jhalokati Sadar","Kathalia","Nalchity","Rajapur"],
"Patuakhali":["Patuakhali Sadar","Bauphal","Dashmina","Galachipa","Kalapara","Mirzaganj","Dumki","Rangabali"],
"Pirojpur":["Pirojpur Sadar","Bhandaria","Kawkhali","Mathbaria","Nazirpur","Nesarabad"],
"Habiganj":["Habiganj Sadar","Ajmiriganj","Bahubal","Baniachong","Chunarughat","Lakhai","Madhabpur","Nabiganj","Shayestaganj"],
"Moulvibazar":["Moulvibazar Sadar","Barlekha","Juri","Kamalganj","Kulaura","Rajnagar","Sreemangal"],
"Sunamganj":["Sunamganj Sadar","Bishwamvarpur","Chhatak","Derai","Dharampasha","Dowarabazar","Jagannathpur","Jamalganj","Sullah","Shantiganj","Tahirpur"],
"Sylhet":["Sylhet Sadar","Balaganj","Beanibazar","Bishwanath","Companiganj","Fenchuganj","Golapganj","Gowainghat","Jaintiapur","Kanaighat","Osmani Nagar","Zakiganj"],
"Jamalpur":["Jamalpur Sadar","Bakshiganj","Dewanganj","Islampur","Madarganj","Melandaha","Sarishabari"],
"Mymensingh":["Mymensingh Sadar","Bhaluka","Dhobaura","Fulbaria","Gafargaon","Gauripur","Haluaghat","Ishwarganj","Muktagachha","Nandail","Phulpur","Trishal"],
"Netrokona":["Netrokona Sadar","Atpara","Barhatta","Durgapur","Kalmakanda","Kendua","Khaliajuri","Madan","Mohanganj","Purbadhala"],
"Sherpur":["Sherpur Sadar","Jhenaigati","Nakla","Nalitabari","Sreebardi"]
};

/* ---------- Icons ---------- */
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  patients:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/><circle cx="17.5" cy="7.5" r="2.8"/><path d="M15 13.3c2.9.3 5 2.7 5 6.2"/></svg>',
  appt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/><path d="M8 14l2.2 2.2L15.5 11"/></svg>',
  billing:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="5" width="19" height="14" rx="2.2"/><path d="M2.5 9.5h19"/><path d="M6 14.5h5"/></svg>',
  receipt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2.5h12v19l-2.3-1.4L13.5 22l-1.5-1.4L10.5 22l-2.2-1.9L6 21.5v-19Z"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2.1 2.1 0 1 1-2.96 2.96l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V19.8a2.1 2.1 0 1 1-4.2 0v-.09a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2.1 2.1 0 1 1-2.96-2.96l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H4.2a2.1 2.1 0 1 1 0-4.2h.09a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2.1 2.1 0 1 1 2.96-2.96l.06.06a1.7 1.7 0 0 0 1.87.34H10.5a1.7 1.7 0 0 0 1-1.55V4.2a2.1 2.1 0 1 1 4.2 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2.1 2.1 0 1 1 2.96 2.96l-.06.06a1.7 1.7 0 0 0-.34 1.87V10.5a1.7 1.7 0 0 0 1.55 1H19.8a2.1 2.1 0 1 1 0 4.2h-.09a1.7 1.7 0 0 0-1.55 1Z"/></svg>',
  doctor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v4a4 4 0 0 0 8 0V3"/><path d="M8 3H6.5A1.5 1.5 0 0 0 5 4.5V9a7 7 0 0 0 14 0V4.5A1.5 1.5 0 0 0 17.5 3H16"/><circle cx="19" cy="14.5" r="2.3"/><path d="M12 16v2a4 4 0 0 0 4 4"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>',
  unlock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 7.4-2.2"/></svg>',
  alertTriangle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3.5 22 20.5H2z"/><path d="M12 9.5v5M12 18h.01"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 18l-6-6 6-6"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6m2 0-.7 14a2 2 0 0 1-2 1.9H8.7a2 2 0 0 1-2-1.9L6 6"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="1.5"/><path d="M6 15h12v6H6z"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
  money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>'
};

/* ---------- Font choices for Clinic Name / Slogan styling ---------- */
const FONT_OPTIONS = [
  {id:'Poppins', label:'Poppins — Modern'},
  {id:'Montserrat', label:'Montserrat — Clean & Bold'},
  {id:'Playfair Display', label:'Playfair Display — Elegant Serif'},
  {id:'Merriweather', label:'Merriweather — Classic Serif'},
  {id:'Raleway', label:'Raleway — Minimal'},
  {id:'Lora', label:'Lora — Warm Serif'},
  {id:'Nunito', label:'Nunito — Friendly Rounded'},
  {id:'Quicksand', label:'Quicksand — Soft Rounded'},
  {id:'Dancing Script', label:'Dancing Script — Signature'}
];

/* ---------- Nav icon accent colors (modern, colorful chips per tab) ---------- */
const NAV_ACCENTS = {
  dashboard:    {solid:'#6366f1', soft:'rgba(99,102,241,.24)'},   // indigo
  patients:     {solid:'#10b981', soft:'rgba(16,185,129,.24)'},   // emerald
  appointments: {solid:'#f59e0b', soft:'rgba(245,158,11,.24)'},   // amber
  doctors:      {solid:'#8b5cf6', soft:'rgba(139,92,246,.24)'},   // violet
  billing:      {solid:'#f43f5e', soft:'rgba(244,63,94,.24)'},    // rose
  receipts:     {solid:'#06b6d4', soft:'rgba(6,182,212,.24)'},    // cyan
  settings:     {solid:'#94a3b8', soft:'rgba(148,163,184,.24)'}   // slate
};
function navIconChip(view, iconSvg){
  const c = NAV_ACCENTS[view] || {solid:'#94a3b8', soft:'rgba(148,163,184,.24)'};
  return `<div class="nav-icon" style="--accent:${c.solid};--accent-soft:${c.soft};">${iconSvg}</div>`;
}

/* ---------- Themes ---------- */
const THEMES = {
  teal:  {label:"Teal (Default)", c:['#0b3b3a','#0f5753','#0f766e','#14a098','#e3f6f4','#f2fbfa','#e8a33d','#c8811f']},
  ocean: {label:"Ocean Blue",     c:['#0b2a4a','#123a63','#1c5490','#2f8fd6','#e6f1fb','#f3f9fe','#f5a623','#d4880f']},
  coral: {label:"Rose Coral",     c:['#4a1620','#6b2130','#a13347','#e0546f','#fdeaee','#fff5f6','#e8a33d','#c8811f']},
  forest:{label:"Forest Green",   c:['#122b1a','#1c4028','#2b6b3f','#4a9a5f','#e6f4ea','#f3faf4','#d9a441','#b3831f']},
  slate: {label:"Slate Dark",     c:['#1a2027','#242c36','#37424f','#5c6b7c','#e9edf1','#f4f6f8','#e8a33d','#c8811f']}
};
function applyTheme(themeId){
  const t = THEMES[themeId] || THEMES.teal;
  const root = document.documentElement.style;
  root.setProperty('--teal-900', t.c[0]);
  root.setProperty('--teal-800', t.c[1]);
  root.setProperty('--teal-700', t.c[2]);
  root.setProperty('--teal-600', t.c[3]);
  root.setProperty('--teal-100', t.c[4]);
  root.setProperty('--teal-50', t.c[5]);
  root.setProperty('--amber', t.c[6]);
  root.setProperty('--amber-dark', t.c[7]);
}

/* ---------- Payment methods ---------- */
const PAYMENT_METHODS = [
  {id:'Cash', label:'Cash', color:'#2f9e58',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v.01M18 15v.01"/></svg>'},
  {id:'bKash', label:'bKash', color:'#e2136e',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M9.5 18.5h5"/><path d="M9 8.5l2.7 3-2.7 3"/><path d="M15 8.5l-2.7 3 2.7 3" opacity="0"/></svg>'},
  {id:'Nagad', label:'Nagad', color:'#f5821f',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 8.5 12 3l9 5.5v7L12 21l-9-5.5Z"/><path d="M12 3v18M3 8.5l9 5.5 9-5.5"/></svg>'},
  {id:'Rocket', label:'Rocket', color:'#7b2ff7',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2.5c3 2 4.5 5.5 4.5 9 0 2-1 4-1 4h-7s-1-2-1-4c0-3.5 1.5-7 4.5-9Z"/><circle cx="12" cy="10" r="1.6"/><path d="M8.5 15.5 6 19l3.2-1M15.5 15.5 18 19l-3.2-1"/></svg>'},
  {id:'Upay', label:'Upay', color:'#0aa3a3',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 9h18"/><circle cx="16.5" cy="14" r="1.4" fill="white" stroke="none"/></svg>'},
  {id:'QR', label:'QR Scan', color:'#22262b',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/></svg>'},
  {id:'Bank Transfer', label:'Bank Transfer', color:'#1c5490',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 10.5 12 4l9 6.5"/><path d="M4.5 10.5v8M9 10.5v8M15 10.5v8M19.5 10.5v8"/><path d="M3 21h18"/></svg>'},
  {id:'Online Payment', label:'Online Payment', color:'#5b3cc4',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg>'}
];
function payMethodMeta(id){
  return PAYMENT_METHODS.find(m=>m.id===id) || {id, label:id, color:'#5c6b6a', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>'};
}
function payIconHtml(id, size){
  const m = payMethodMeta(id);
  size = size||34;
  const iconSize = Math.round(size*0.56);
  return `<div class="pay-icon" style="background:${m.color};width:${size}px;height:${size}px;"><span style="width:${iconSize}px;height:${iconSize}px;display:inline-flex;">${m.icon}</span></div>`;
}

/* ---------- Service / Item Charges (per-doctor, manually managed, no presets, no cross-doctor sharing) ---------- */
function serviceById(id, doctorId){
  if(doctorId){
    const d = DB.doctors.find(x=>x.id===doctorId);
    return d && (d.services||[]).find(s=>s.id===id);
  }
  // No doctor context given — search across all doctors as a fallback for display/legacy lookups only.
  for(const d of DB.doctors){
    const found = (d.services||[]).find(s=>s.id===id);
    if(found) return found;
  }
  return (DB.services||[]).find(s=>s.id===id); // legacy pre-per-doctor invoices
}
function servicesForDoctor(doctorId){
  if(!doctorId) return [];
  const d = DB.doctors.find(x=>x.id===doctorId);
  return d ? (d.services||[]) : [];
}

/* ---------- Storage ---------- */
const STORE_KEY = 'physiophixx_db_v1';
function defaultDB(){
  return {
    settings:{
      name:"Physiophixx Physiotherapy Clinic",
      slogan:"Trusted Care, Advanced Solutions",
      logo:"",
      address:"House 12, Road 5, Dhanmondi, Dhaka",
      mobile:"01700-000000",
      email:"info@physiophixx.com",
      website:"www.physiophixx.com",
      whatsapp:"01700-000000",
      theme:"teal",
      nameFont:"Poppins",
      nameColor:"#0b3b3a",
      sloganFont:"Poppins",
      sloganColor:"#14a098",
      adminPasswordHash:""
    },
    patients:[],
    doctors:[],
    appointments:[],
    invoices:[],
    services:[],
    seq:{patient:0,doctor:0,appt:0,invoice:0,service:0}
  };
}
let DB = loadDB();
function loadDB(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return defaultDB();
    const parsed = JSON.parse(raw);
    const merged = Object.assign(defaultDB(), parsed);
    merged.settings = Object.assign(defaultDB().settings, parsed.settings||{});
    merged.seq = Object.assign(defaultDB().seq, parsed.seq||{});
    if(!Array.isArray(merged.services)) merged.services = [];
    return merged;
  }catch(e){ return defaultDB(); }
}
function saveDB(){
  localStorage.setItem(STORE_KEY, JSON.stringify(DB));
  if(typeof writeAutoBackup === 'function') writeAutoBackup();
}
function nextId(kind){
  DB.seq[kind] = (DB.seq[kind]||0)+1;
  return DB.seq[kind];
}
function pad(n,len){ n=String(n); while(n.length<len) n='0'+n; return n; }
function nextInvoiceNo(){
  const year = new Date().getFullYear();
  if(!DB.seq.invoiceYear) DB.seq.invoiceYear = {};
  DB.seq.invoiceYear[year] = (DB.seq.invoiceYear[year]||0) + 1;
  return 'INV-'+year+'-'+pad(DB.seq.invoiceYear[year],4);
}

/* ---------- Partial payment / Paid & Due tracking ---------- */
function invoicePaid(inv){
  return (inv.payments||[]).reduce((s,p)=>s+Number(p.amount||0),0);
}
function invoiceDue(inv){
  return Math.max(0, Math.round((inv.total - invoicePaid(inv))*100)/100);
}
function invoicePaymentStatus(inv){
  if(inv.status==='Cancelled') return 'Cancelled';
  const due = invoiceDue(inv);
  if(due<=0.009) return 'Paid';
  if(invoicePaid(inv)>0) return 'Partial';
  return 'Due';
}
function paymentStatusBadge(inv){
  const st = invoicePaymentStatus(inv);
  const map = {Paid:'green', Partial:'amber', Due:'red', Cancelled:'gray'};
  return `<span class="badge ${map[st]}">${st}</span>`;
}
/* Sum of all recorded payments (across all invoices) whose payment date matches — used for accurate daily/monthly revenue */
function allPaymentRecords(){
  const list = [];
  DB.invoices.forEach(inv=>{
    if(inv.status==='Cancelled') return;
    (inv.payments||[]).forEach(p=> list.push(p));
  });
  return list;
}

/* ===================== ADMIN AUTHENTICATION ===================== */
let adminUnlocked = false;
async function hashPassword(pw){
  try{
    const enc = new TextEncoder().encode(pw);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }catch(e){
    // Fallback for non-secure contexts where crypto.subtle is unavailable
    let h = 0;
    for(let i=0;i<pw.length;i++){ h = ((h<<5)-h+pw.charCodeAt(i))|0; }
    return 'fb'+Math.abs(h).toString(16);
  }
}
function requireAdmin(action){
  if(adminUnlocked){ action(); return; }
  if(!DB.settings.adminPasswordHash){
    openSetAdminPasswordModal(action);
  } else {
    openAdminLoginModal(action);
  }
}
function openAdminLoginModal(onSuccess){
  const body = `
    <div style="text-align:center;padding:4px 0 12px 0;">
      <div style="width:48px;height:48px;border-radius:50%;background:var(--teal-100);color:var(--teal-700);display:flex;align-items:center;justify-content:center;margin:0 auto 10px auto;">${ICONS.lock}</div>
      <div style="font-size:13px;color:var(--slate);">This is an admin-protected action. Enter the admin password to continue.</div>
    </div>
    <div class="field"><label>Admin Password</label><input type="password" id="adm_pw" placeholder="Enter admin password"></div>
    <div id="admErr" style="color:var(--danger);font-size:12px;margin-top:6px;display:none;">Incorrect password. Please try again.</div>
  `;
  const foot = `<button class="btn btn-ghost" id="admCancelBtn">Cancel</button><button class="btn btn-primary" id="admUnlockBtn">${ICONS.unlock} Unlock</button>`;
  openModal('Admin Verification', body, foot);
  const pwInput = document.getElementById('adm_pw');
  pwInput.focus();
  const attempt = async ()=>{
    const pw = pwInput.value;
    const hash = await hashPassword(pw);
    if(hash === DB.settings.adminPasswordHash){
      adminUnlocked = true;
      closeModal();
      renderAdminLockIndicator();
      onSuccess();
    } else {
      document.getElementById('admErr').style.display = 'block';
      pwInput.value=''; pwInput.focus();
    }
  };
  document.getElementById('admCancelBtn').addEventListener('click', closeModal);
  document.getElementById('admUnlockBtn').addEventListener('click', attempt);
  pwInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter') attempt(); });
}
function openSetAdminPasswordModal(onSuccess){
  const body = `
    <div style="text-align:center;padding:4px 0 12px 0;">
      <div style="width:48px;height:48px;border-radius:50%;background:var(--teal-100);color:var(--teal-700);display:flex;align-items:center;justify-content:center;margin:0 auto 10px auto;">${ICONS.lock}</div>
      <div style="font-size:13px;color:var(--slate);">No admin password has been set yet. Create one now to protect Settings, Invoice editing, backups, and factory reset.</div>
    </div>
    <div class="form-grid">
      <div class="field"><label>New Admin Password</label><input type="password" id="adm_new1" placeholder="Minimum 4 characters"></div>
      <div class="field"><label>Confirm Password</label><input type="password" id="adm_new2" placeholder="Re-enter password"></div>
    </div>
    <div id="admSetErr" style="color:var(--danger);font-size:12px;margin-top:6px;display:none;"></div>
  `;
  const foot = `<button class="btn btn-ghost" id="admSetCancelBtn">Cancel</button><button class="btn btn-primary" id="admSetBtn">${ICONS.lock} Set Password</button>`;
  openModal('Create Admin Password', body, foot);
  document.getElementById('admSetCancelBtn').addEventListener('click', closeModal);
  document.getElementById('admSetBtn').addEventListener('click', async ()=>{
    const p1 = document.getElementById('adm_new1').value;
    const p2 = document.getElementById('adm_new2').value;
    const errBox = document.getElementById('admSetErr');
    if(p1.length<4){ errBox.textContent='Password must be at least 4 characters.'; errBox.style.display='block'; return; }
    if(p1!==p2){ errBox.textContent='Passwords do not match.'; errBox.style.display='block'; return; }
    DB.settings.adminPasswordHash = await hashPassword(p1);
    saveDB();
    adminUnlocked = true;
    closeModal();
    renderAdminLockIndicator();
    toast('Admin password set');
    onSuccess();
  });
}
function lockAdmin(){
  adminUnlocked = false;
  renderAdminLockIndicator();
  toast('Admin locked');
  if(currentView==='settings') switchView('dashboard');
}
function renderAdminLockIndicator(){
  const el = document.getElementById('adminLockIndicator');
  if(!el) return;
  el.innerHTML = adminUnlocked
    ? `${ICONS.unlock}<span>Admin Unlocked</span>`
    : `${ICONS.lock}<span>Admin Locked</span>`;
  el.classList.toggle('unlocked', adminUnlocked);
}


/* ===================== HARD / FACTORY RESET ===================== */
function hardResetSystem(){
  const typed = prompt('THIS WILL PERMANENTLY DELETE ALL DATA — patients, appointments, doctors, invoices, and settings — and cannot be undone.\n\nType RESET (all capitals) to confirm:');
  if(typed !== 'RESET'){ toast('Factory reset cancelled'); return; }
  localStorage.removeItem(STORE_KEY);
  localStorage.removeItem('physiophixx_backup_history_v1'); // legacy restore-point data, if present
  DB = defaultDB();
  adminUnlocked = false;
  saveDB();
  toast('Factory reset complete. Reloading...');
  setTimeout(()=>location.reload(), 900);
}

/* ---------- Helpers ---------- */
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}
function esc(s){ return (s===undefined||s===null)?'':String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function todayStr(){
  const d = new Date();
  return d.getFullYear()+'-'+pad(d.getMonth()+1,2)+'-'+pad(d.getDate(),2);
}
function fmtDate(d){
  if(!d) return '';
  const dt = new Date(d+'T00:00:00');
  if(isNaN(dt)) return d;
  return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
}
function fmtDateLong(input){
  const dt = (input instanceof Date) ? input : new Date(input+'T00:00:00');
  if(isNaN(dt)) return '';
  return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
}
function fmtDateDMY(input){
  const dt = (input instanceof Date) ? input : new Date(input+'T00:00:00');
  if(isNaN(dt)) return '';
  const dd = pad(dt.getDate(),2), mm = pad(dt.getMonth()+1,2), yyyy = dt.getFullYear();
  return dd+'/'+mm+'/'+yyyy;
}
function fmtMoney(n){
  n = Number(n)||0;
  return '৳' + n.toLocaleString('en-BD',{minimumFractionDigits:0,maximumFractionDigits:2});
}
function calcAge(dobStr){
  if(!dobStr) return null;
  const dob = new Date(dobStr+'T00:00:00');
  const now = new Date();
  if(isNaN(dob) || dob>now) return null;
  let y = now.getFullYear()-dob.getFullYear();
  let m = now.getMonth()-dob.getMonth();
  let d = now.getDate()-dob.getDate();
  if(d<0){ m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if(m<0){ y--; m += 12; }
  return {y,m,d};
}
function ageLabel(p){
  if(p.ageMode==='manual'){
    return (p.ageManualY||0)+'Y '+(p.ageManualM||0)+'M '+(p.ageManualD||0)+'D';
  }
  const a = calcAge(p.dob);
  if(!a) return '-';
  return a.y+'Y '+a.m+'M '+a.d+'D';
}
const WEEKDAYS = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
function weekdayOf(dateStr){
  const dt = new Date(dateStr+'T00:00:00');
  return dt.toLocaleDateString('en-US',{weekday:'long'});
}
function timeToMin(t){ const [h,m]=t.split(':').map(Number); return h*60+m; }
function minToTime(min){ const h=Math.floor(min/60), m=min%60; return pad(h,2)+':'+pad(m,2); }
function fmt12(t){
  const [h,m] = t.split(':').map(Number);
  const ap = h>=12?'PM':'AM';
  let hh = h%12; if(hh===0) hh=12;
  return hh+':'+pad(m,2)+' '+ap;
}

/* ---------- App Shell ---------- */
let currentView = 'dashboard';
let sidebarOpen = false;

function renderShell(){
  const s = DB.settings;
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="sidebar" id="sidebar">
      <div class="brand-mini">
        ${s.logo? `<div class="logo-box"><img src="${s.logo}"></div>` : `<div class="logo-fallback">${esc((s.name||'P').charAt(0))}</div>`}
        <div>
          <div class="name" style="font-family:'${s.nameFont||'Poppins'}',sans-serif;">${esc(s.name||'Physiophixx')}</div>
          ${s.slogan? `<div class="slogan" style="font-family:'${s.sloganFont||'Poppins'}',sans-serif;">${esc(s.slogan)}</div>` : `<div class="tag">CLINIC MANAGEMENT</div>`}
        </div>
      </div>
      <div class="nav-item" data-view="dashboard">${navIconChip('dashboard', ICONS.dashboard)}<span>Dashboard</span></div>
      <div class="nav-item" data-view="patients">${navIconChip('patients', ICONS.patients)}<span>Patient Registration</span></div>
      <div class="nav-item" data-view="appointments">${navIconChip('appointments', ICONS.appt)}<span>Appointments</span></div>
      <div class="nav-item" data-view="doctors">${navIconChip('doctors', ICONS.doctor)}<span>Doctors</span></div>
      <div class="nav-item" data-view="billing">${navIconChip('billing', ICONS.billing)}<span>Billing, Payment &amp; Invoice</span></div>
      <div class="nav-item" data-view="receipts">${navIconChip('receipts', ICONS.receipt)}<span>Invoice History</span></div>
      <div class="nav-item" data-view="settings">${navIconChip('settings', ICONS.settings)}<span>Clinic Settings</span></div>
      <div class="admin-lock-indicator" id="adminLockIndicator" onclick="lockAdmin()"></div>
      <div class="sidebar-foot">Physiophixx CMS &copy; ${new Date().getFullYear()}</div>
    </div>
    <div class="main">
      <div class="topbar">
        <div style="display:flex;align-items:center;gap:12px;">
          <button class="menu-btn" id="menuBtn">${ICONS.menu}</button>
          <div class="clinic-head">
            ${s.logo? `<div class="logo-box"><img src="${s.logo}"></div>` : `<div class="logo-fallback">${esc((s.name||'P').charAt(0))}</div>`}
            <div>
              <div class="cname" style="font-family:'${s.nameFont||'Poppins'}',sans-serif;color:${s.nameColor||'var(--teal-900)'};">${esc(s.name||'Physiophixx Physiotherapy Clinic')}</div>
              ${s.slogan? `<div class="slogan" style="font-family:'${s.sloganFont||'Poppins'}',sans-serif;color:${s.sloganColor||'var(--teal-600)'};">${esc(s.slogan)}</div>`:''}
              <div class="cmeta">
                ${s.address? `<span>Address: ${esc(s.address)}</span>`:''}
                ${s.mobile? `<span>Mobile: ${esc(s.mobile)}</span>`:''}
                ${s.email? `<span>Email: ${esc(s.email)}</span>`:''}
                ${s.website? `<span>Web: ${esc(s.website)}</span>`:''}
                ${s.whatsapp? `<span>WhatsApp: ${esc(s.whatsapp)}</span>`:''}
              </div>
            </div>
          </div>
        </div>
        <div class="topbar-right">
          <div class="date">${new Date().toLocaleDateString('en-GB',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})}</div>
          <div>${weekdayOf(todayStr())==='Friday' ? 'Friday — Clinic Off Day' : 'Clinic Open'}</div>
        </div>
      </div>
      <div class="view" id="view-dashboard"></div>
      <div class="view" id="view-patients"></div>
      <div class="view" id="view-appointments"></div>
      <div class="view" id="view-doctors"></div>
      <div class="view" id="view-billing"></div>
      <div class="view" id="view-receipts"></div>
      <div class="view" id="view-settings"></div>
    </div>
  `;
  document.querySelectorAll('.nav-item').forEach(el=>{
    el.addEventListener('click', ()=>{ switchView(el.dataset.view); sidebarOpen=false; document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlayBg').classList.remove('active'); });
  });
  document.getElementById('menuBtn').addEventListener('click', ()=>{
    sidebarOpen = !sidebarOpen;
    document.getElementById('sidebar').classList.toggle('open', sidebarOpen);
    document.getElementById('overlayBg').classList.toggle('active', sidebarOpen);
  });
  document.getElementById('overlayBg').addEventListener('click', ()=>{
    sidebarOpen=false;
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlayBg').classList.remove('active');
  });
  renderAdminLockIndicator();
  switchView(currentView);
}

function switchView(v){
  currentView = v;
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active', el.dataset.view===v));
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  const renderers = {dashboard:renderDashboard, patients:renderPatients, appointments:renderAppointments, doctors:renderDoctors, billing:renderBilling, receipts:renderReceipts, settings:renderSettings};
  renderers[v]();
}

/* ---------- Modal helper ---------- */
let modalBackStack = [];
function openModal(title, bodyHtml, footHtml, wide, preserveHistory){
  if(!preserveHistory) modalBackStack = [];
  const box = document.getElementById('modalBox');
  box.className = wide? 'modal wide' : 'modal';
  const backBtn = modalBackStack.length? `<button class="modal-back" id="modalBackBtn" title="Back">${ICONS.back}<span>Back</span></button>` : '';
  box.innerHTML = `
    <div class="modal-head"><div style="display:flex;align-items:center;gap:4px;">${backBtn}<h3>${title}</h3></div><button class="modal-close" id="modalCloseBtn">&times;</button></div>
    <div class="modal-body">${bodyHtml}</div>
    ${footHtml? `<div class="modal-foot">${footHtml}</div>` : ''}
  `;
  document.getElementById('modalBg').classList.add('active');
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  if(modalBackStack.length) document.getElementById('modalBackBtn').addEventListener('click', goBackModal);
}
function goBackModal(){
  const fn = modalBackStack.pop();
  if(fn) fn();
}
function closeModal(){
  modalBackStack = [];
  document.getElementById('modalBg').classList.remove('active');
  document.getElementById('modalBox').innerHTML='';
  document.getElementById('modalBox').className = 'modal';
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('modalBg').addEventListener('click', (e)=>{ if(e.target.id==='modalBg') closeModal(); });
});

/* ===================== DASHBOARD ===================== */
function renderDashboard(){
  const el = document.getElementById('view-dashboard');
  const today = todayStr();
  const totalPatients = DB.patients.length;
  const todaysAppts = DB.appointments.filter(a=>a.date===today && a.status!=='Cancelled');
  const payments = allPaymentRecords();
  const todaysRevenue = payments.filter(p=>p.date===today).reduce((s,p)=>s+Number(p.amount||0),0);
  const monthPrefix = today.slice(0,7);
  const monthRevenue = payments.filter(p=>p.date.slice(0,7)===monthPrefix).reduce((s,p)=>s+Number(p.amount||0),0);
  const totalOutstandingDue = DB.invoices.filter(i=>i.status!=='Cancelled').reduce((s,i)=>s+invoiceDue(i),0);

  const recentPatients = [...DB.patients].sort((a,b)=>b.createdAt-a.createdAt).slice(0,5);
  const upcoming = [...DB.appointments].filter(a=>a.date>=today && a.status!=='Cancelled')
    .sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time)).slice(0,6);

  el.innerHTML = `
    <div class="page-head">
      <div><h2>Dashboard</h2><p>Overview of clinic activity</p></div>
    </div>
    <div class="stat-grid">
      <div class="stat-card" style="--accent:#10b981;"><div class="icon" style="background:rgba(16,185,129,.14);color:#10b981">${ICONS.patients}</div><div class="num">${totalPatients}</div><div class="lbl">Total Patients</div></div>
      <div class="stat-card" style="--accent:#f59e0b;"><div class="icon" style="background:rgba(245,158,11,.14);color:#e08a0c">${ICONS.appt}</div><div class="num">${todaysAppts.length}</div><div class="lbl">Today's Appointments</div></div>
      <div class="stat-card" style="--accent:#f43f5e;"><div class="icon" style="background:rgba(244,63,94,.14);color:#e11d48">${ICONS.money}</div><div class="num">${fmtMoney(todaysRevenue)}</div><div class="lbl">Today's Revenue</div></div>
      <div class="stat-card" style="--accent:#6366f1;"><div class="icon" style="background:rgba(99,102,241,.14);color:#6366f1">${ICONS.billing}</div><div class="num">${fmtMoney(monthRevenue)}</div><div class="lbl">This Month's Revenue</div></div>
      <div class="stat-card" style="--accent:#dc2626;"><div class="icon" style="background:rgba(220,38,38,.14);color:#dc2626">${ICONS.alertTriangle}</div><div class="num">${fmtMoney(totalOutstandingDue)}</div><div class="lbl">Total Outstanding Due</div></div>
    </div>
    <div class="dash-grid">
      <div class="card pad">
        <h3 style="font-size:15px;color:var(--teal-900);margin-bottom:12px;">Upcoming Appointments</h3>
        <div class="table-wrap"><table><thead><tr><th>Date</th><th>Time</th><th>Patient</th><th>Doctor</th><th>Status</th></tr></thead><tbody>
        ${upcoming.length? upcoming.map(a=>{
          const p = DB.patients.find(p=>p.id===a.patientId);
          const d = DB.doctors.find(d=>d.id===a.doctorId);
          return `<tr><td>${fmtDate(a.date)}</td><td>${fmt12(a.time)}</td><td>${p? patientLink(p) : '-'}</td><td>${esc(d?d.name:'-')}</td><td>${statusBadge(a.status)}</td></tr>`;
        }).join('') : `<tr class="empty-row"><td colspan="5">No upcoming appointments</td></tr>`}
        </tbody></table></div>
      </div>
      <div class="card pad">
        <h3 style="font-size:15px;color:var(--teal-900);margin-bottom:12px;">Recently Registered Patients</h3>
        <div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Mobile</th></tr></thead><tbody>
        ${recentPatients.length? recentPatients.map(p=>`<tr><td>${esc(p.pid)}</td><td>${patientLink(p)}</td><td>${ageLabel(p)}</td><td>${esc(p.mobile)}</td></tr>`).join('') : `<tr class="empty-row"><td colspan="4">No patients yet</td></tr>`}
        </tbody></table></div>
      </div>
    </div>
  `;
}
function statusBadge(status){
  const map = {'Booked':'amber','Completed':'green','Cancelled':'red'};
  return `<span class="badge ${map[status]||'gray'}">${status}</span>`;
}
/* Count how many non-cancelled sessions/appointments a patient has had, in date+time order */
function patientSessionCount(patientId){
  return DB.appointments.filter(a=>a.patientId===patientId && a.status!=='Cancelled').length;
}
function sessionLabel(n){
  if(n<=1) return '1st Visit (New Patient)';
  return 'Follow-up — Session #'+n;
}
function referredFromLabel(p){
  if(!p.referredFrom) return '-';
  if(p.referredFrom==='Doctor'){
    if(p.referredDoctorId){
      const d = DB.doctors.find(x=>x.id===p.referredDoctorId);
      return 'Doctor — '+(d? d.name+(d.specialty?' ('+d.specialty+')':'') : 'Unknown');
    }
    return 'Doctor'+(p.referredOther? ' — '+p.referredOther : ' — External');
  }
  if(p.referredFrom==='Other' && p.referredOther) return 'Other — '+p.referredOther;
  return p.referredFrom;
}

/* ===================== PATIENTS ===================== */
let patientSearchTerm = '';
function renderPatients(){
  const el = document.getElementById('view-patients');
  el.innerHTML = `
    <div class="page-head">
      <div><h2>Patient Registration</h2><p>Add, search and manage patient records</p></div>
      <button class="btn btn-primary" id="addPatientBtn">${ICONS.plus} New Patient</button>
    </div>
    <div class="search-bar">
      <span style="color:var(--slate)">${ICONS.search}</span>
      <input type="text" id="patientSearch" placeholder="Search by Name, Mobile, ID No, NID or Email..." value="${esc(patientSearchTerm)}">
    </div>
    <div class="card">
      <div class="table-wrap">
      <table><thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Mobile</th><th>Email</th><th>Location</th><th>Sessions</th><th>Actions</th></tr></thead>
      <tbody id="patientsTbody"></tbody></table>
      </div>
    </div>
  `;
  document.getElementById('addPatientBtn').addEventListener('click', ()=>openPatientForm());
  document.getElementById('patientSearch').addEventListener('input', (e)=>{ patientSearchTerm = e.target.value; renderPatientsTable(); });
  renderPatientsTable();
}
function renderPatientsTable(){
  const tbody = document.getElementById('patientsTbody');
  if(!tbody) return;
  const term = patientSearchTerm.trim().toLowerCase();
  let list = [...DB.patients].sort((a,b)=>b.createdAt-a.createdAt);
  if(term){
    list = list.filter(p =>
      (p.name||'').toLowerCase().includes(term) ||
      (p.mobile||'').toLowerCase().includes(term) ||
      (p.pid||'').toLowerCase().includes(term) ||
      (p.email||'').toLowerCase().includes(term) ||
      (p.nid||'').toLowerCase().includes(term)
    );
  }
  tbody.innerHTML = list.length ? list.map(p=>`
    <tr>
      <td><strong>${esc(p.pid)}</strong></td>
      <td>${patientLink(p)}</td>
      <td>${ageLabel(p)}</td>
      <td>${esc(p.gender)}</td>
      <td>${esc(p.mobile)}</td>
      <td>${esc(p.email||'-')}</td>
      <td>${esc(p.area? p.area+', ':'')}${esc(p.upazila||'')}, ${esc(p.district||'')}</td>
      <td><span class="badge ${patientSessionCount(p.id)? 'green':'gray'}">${patientSessionCount(p.id)} session${patientSessionCount(p.id)===1?'':'s'}</span></td>
      <td>
        ${patientBillButtonHtml(p.id)}
        <button class="btn btn-ghost btn-sm" onclick="openPatientForm('${p.id}')">${ICONS.edit}</button>
        <button class="btn btn-danger btn-sm" onclick="deletePatient('${p.id}')">${ICONS.trash}</button>
      </td>
    </tr>
  `).join('') : `<tr class="empty-row"><td colspan="9">No patients found</td></tr>`;
}
function deletePatient(id){
  if(!confirm('Delete this patient record? This cannot be undone.')) return;
  DB.patients = DB.patients.filter(p=>p.id!==id);
  saveDB(); renderPatientsTable(); toast('Patient deleted');
}

function districtOptions(selected){
  return Object.keys(BD_DATA).sort().map(d=>`<option value="${esc(d)}" ${d===selected?'selected':''}>${esc(d)}</option>`).join('');
}
function upazilaOptions(district, selected){
  const list = BD_DATA[district] || [];
  return list.map(u=>`<option value="${esc(u)}" ${u===selected?'selected':''}>${esc(u)}</option>`).join('');
}

function openPatientForm(id){
  const editing = !!id;
  const p = editing ? DB.patients.find(x=>x.id===id) : {
    ageMode:'dob', gender:'Female', district:'Dhaka'
  };
  const body = `
    <form id="patientForm">
      ${editing? `<div class="badge ${patientSessionCount(p.id)?'green':'gray'}" style="font-size:12px;padding:6px 12px;margin-bottom:14px;">
        📋 Total Sessions So Far: ${patientSessionCount(p.id)}
      </div>` : ''}
      <div class="form-grid">
        <div class="field span2"><label>Full Name *</label><input type="text" id="pf_name" required value="${esc(p.name||'')}" placeholder="e.g. Rahima Akter"></div>

        <div class="field">
          <label>Age Entry Mode</label>
          <div class="radio-row">
            <label><input type="radio" name="ageMode" value="dob" ${p.ageMode!=='manual'?'checked':''}> Date of Birth</label>
            <label><input type="radio" name="ageMode" value="manual" ${p.ageMode==='manual'?'checked':''}> Manual Age</label>
          </div>
        </div>
        <div class="field" id="dobWrap" style="${p.ageMode==='manual'?'display:none':''}">
          <label>Date of Birth</label>
          <input type="date" id="pf_dob" max="${todayStr()}" value="${esc(p.dob||'')}">
          <span class="hint" id="dobAgeHint">${p.dob? 'Age: '+(calcAge(p.dob)?calcAge(p.dob).y+'Y '+calcAge(p.dob).m+'M '+calcAge(p.dob).d+'D':''):''}</span>
        </div>
        <div class="field" id="manualAgeWrap" style="${p.ageMode==='manual'?'':'display:none'}">
          <label>Age (Manual)</label>
          <div style="display:flex;gap:6px;">
            <input type="number" min="0" id="pf_ageY" placeholder="Y" value="${p.ageManualY!=null?p.ageManualY:''}" style="width:33%">
            <input type="number" min="0" max="11" id="pf_ageM" placeholder="M" value="${p.ageManualM!=null?p.ageManualM:''}" style="width:33%">
            <input type="number" min="0" max="30" id="pf_ageD" placeholder="D" value="${p.ageManualD!=null?p.ageManualD:''}" style="width:33%">
          </div>
        </div>

        <div class="field"><label>Gender *</label>
          <select id="pf_gender">
            <option ${p.gender==='Female'?'selected':''}>Female</option>
            <option ${p.gender==='Male'?'selected':''}>Male</option>
            <option ${p.gender==='Other'?'selected':''}>Other</option>
          </select>
        </div>
        <div class="field"><label>Mobile No *</label><input type="tel" id="pf_mobile" required value="${esc(p.mobile||'')}" placeholder="01XXXXXXXXX"></div>

        <div class="field"><label>Email <span class="hint">(optional)</span></label><input type="email" id="pf_email" value="${esc(p.email||'')}" placeholder="name@email.com"></div>
        <div class="field"><label>NID No <span class="hint">(optional)</span></label><input type="text" id="pf_nid" value="${esc(p.nid||'')}" placeholder="National ID number"></div>

        <div class="field"><label>Referred From</label>
          <select id="pf_referredFrom">
            ${['Self / Walk-in','Doctor','Friend / Family','Facebook / Online','Poster / Signboard','Other'].map(opt=>`<option ${p.referredFrom===opt?'selected':''}>${opt}</option>`).join('')}
          </select>
        </div>
        <div class="field" id="referredDoctorWrap" style="${p.referredFrom==='Doctor'?'':'display:none'}">
          <label>Referring Doctor</label>
          <select id="pf_referredDoctorId">
            <option value="">— External / Not in this clinic —</option>
            ${DB.doctors.map(d=>`<option value="${d.id}" ${p.referredDoctorId===d.id?'selected':''}>${esc(d.name)}${d.specialty?' — '+esc(d.specialty):''}</option>`).join('')}
          </select>
        </div>
        <div class="field" id="referredOtherWrap" style="${(p.referredFrom==='Other'||p.referredFrom==='Doctor')?'':'display:none'}">
          <label id="referredOtherLabel">Referred From — Details</label>
          <input type="text" id="pf_referredOther" value="${esc(p.referredOther||'')}" placeholder="e.g. Dr. Karim, City Hospital">
        </div>

        <fieldset class="span2" style="grid-column:1/-1;">
          <legend>Address</legend>
          <div class="form-grid cols-3">
            <div class="field"><label>District</label>
              <select id="pf_district">${districtOptions(p.district||'Dhaka')}</select>
            </div>
            <div class="field"><label>Upazila</label>
              <select id="pf_upazila">${upazilaOptions(p.district||'Dhaka', p.upazila)}</select>
            </div>
            <div class="field"><label>Area / Location</label>
              <input type="text" id="pf_area" value="${esc(p.area||'')}" placeholder="e.g. Road 5, House 12">
            </div>
          </div>
        </fieldset>
      </div>
    </form>
  `;
  const foot = `<button class="btn btn-ghost" id="cancelPBtn">Cancel</button><button class="btn btn-primary" id="savePBtn">${editing?'Update':'Save'} Patient</button>`;
  openModal(editing? 'Edit Patient' : 'New Patient Registration', body, foot);

  document.querySelectorAll('input[name=ageMode]').forEach(r=>{
    r.addEventListener('change', (e)=>{
      document.getElementById('dobWrap').style.display = e.target.value==='dob'?'':'none';
      document.getElementById('manualAgeWrap').style.display = e.target.value==='manual'?'':'none';
    });
  });
  document.getElementById('pf_dob').addEventListener('input', (e)=>{
    const a = calcAge(e.target.value);
    document.getElementById('dobAgeHint').textContent = a? `Age: ${a.y}Y ${a.m}M ${a.d}D` : '';
  });
  document.getElementById('pf_district').addEventListener('change', (e)=>{
    document.getElementById('pf_upazila').innerHTML = upazilaOptions(e.target.value);
  });
  document.getElementById('pf_referredFrom').addEventListener('change', (e)=>{
    const v = e.target.value;
    document.getElementById('referredDoctorWrap').style.display = v==='Doctor' ? '' : 'none';
    document.getElementById('referredOtherWrap').style.display = (v==='Other' || v==='Doctor') ? '' : 'none';
    document.getElementById('referredOtherLabel').textContent = v==='Doctor' ? 'External Doctor Name / Notes (optional)' : 'Referred From — Details';
  });
  document.getElementById('cancelPBtn').addEventListener('click', closeModal);
  document.getElementById('savePBtn').addEventListener('click', ()=>{
    const name = document.getElementById('pf_name').value.trim();
    const mobile = document.getElementById('pf_mobile').value.trim();
    if(!name || !mobile){ toast('Name and Mobile are required'); return; }
    const ageMode = document.querySelector('input[name=ageMode]:checked').value;
    const referredFromVal = document.getElementById('pf_referredFrom').value;
    const rec = {
      id: editing? p.id : 'p'+nextId('patient'),
      pid: editing? p.pid : 'PHX-'+pad(DB.seq.patient,4),
      name, mobile,
      email: document.getElementById('pf_email').value.trim(),
      nid: document.getElementById('pf_nid').value.trim(),
      referredFrom: referredFromVal,
      referredDoctorId: referredFromVal==='Doctor' ? document.getElementById('pf_referredDoctorId').value : '',
      referredOther: (referredFromVal==='Other' || referredFromVal==='Doctor') ? document.getElementById('pf_referredOther').value.trim() : '',
      gender: document.getElementById('pf_gender').value,
      ageMode,
      dob: ageMode==='dob'? document.getElementById('pf_dob').value : '',
      ageManualY: ageMode==='manual'? Number(document.getElementById('pf_ageY').value||0):null,
      ageManualM: ageMode==='manual'? Number(document.getElementById('pf_ageM').value||0):null,
      ageManualD: ageMode==='manual'? Number(document.getElementById('pf_ageD').value||0):null,
      district: document.getElementById('pf_district').value,
      upazila: document.getElementById('pf_upazila').value,
      area: document.getElementById('pf_area').value.trim(),
      createdAt: editing? p.createdAt : Date.now()
    };
    if(editing){
      const idx = DB.patients.findIndex(x=>x.id===id);
      DB.patients[idx] = rec;
    } else {
      DB.patients.push(rec);
    }
    saveDB();
    closeModal();
    renderPatientsTable();
    if(document.getElementById('view-dashboard')) renderDashboard();
    if(editing){
      toast('Patient updated');
    } else {
      showRegistrationComplete(rec);
    }
  });
}

function showRegistrationComplete(patient){
  const body = `
    <div style="text-align:center;padding:6px 0 14px 0;">
      <div style="width:52px;height:52px;border-radius:50%;background:#e2f6ea;color:#1e7e42;display:flex;align-items:center;justify-content:center;margin:0 auto 10px auto;">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <h3 style="font-size:16px;color:var(--teal-900);">Patient Registered Successfully</h3>
      <div style="font-size:13px;color:var(--slate);margin-top:2px;">${esc(patient.name)} — <strong>${esc(patient.pid)}</strong></div>
    </div>
    <div class="card pad" style="background:var(--teal-50);border-style:dashed;text-align:center;">
      <div style="font-size:13.5px;color:var(--ink);">Would you like to book their first appointment now?</div>
    </div>
  `;
  const foot = `
    <button class="btn btn-ghost" id="regSkipBtn">Skip for Now</button>
    <button class="btn btn-primary" id="regBookBtn">${ICONS.appt} Get Appointment</button>
  `;
  openModal('Registration Complete', body, foot);
  document.getElementById('regSkipBtn').addEventListener('click', closeModal);
  document.getElementById('regBookBtn').addEventListener('click', ()=>{
    closeModal();
    if(!DB.doctors.length){ toast('Please add a doctor first'); openDoctorManager(); return; }
    switchView('appointments');
    setTimeout(()=>openAppointmentForm(patient.id), 60);
  });
}

/* ===================== PATIENT PROFILE (360° view, linked everywhere) ===================== */
function patientLink(p, suffix){
  if(!p) return 'Unknown';
  return `<a class="patient-link" onclick="openPatientProfile('${p.id}')">${esc(p.name)}${suffix?esc(suffix):''}</a>`;
}
function viewInvoiceFromProfile(invId, patientId){
  modalBackStack.push(()=>openPatientProfile(patientId));
  previewReceipt(invId, true);
}
function openPatientProfile(patientId){
  const p = DB.patients.find(x=>x.id===patientId);
  if(!p){ toast('Patient not found'); return; }
  const appts = [...DB.appointments].filter(a=>a.patientId===patientId).sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
  const invoices = [...DB.invoices].filter(i=>i.patientId===patientId).sort((a,b)=>b.createdAt-a.createdAt);
  const nowStr = todayStr();
  const now = new Date();
  const nowTime = pad(now.getHours(),2)+':'+pad(now.getMinutes(),2);
  const nextAppt = appts.filter(a=>a.status==='Booked' && (a.date>nowStr || (a.date===nowStr && a.time>=nowTime)))
    .sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time))[0];
  const lastVisit = appts.find(a=> a.status!=='Cancelled' && a.date<=nowStr);
  const activeInvoices = invoices.filter(i=>i.status!=='Cancelled');
  const totalPaid = activeInvoices.reduce((s,i)=>s+invoicePaid(i),0);
  const totalDue = activeInvoices.reduce((s,i)=>s+invoiceDue(i),0);
  const totalSessions = patientSessionCount(patientId);
  const registeredStr = p.createdAt? new Date(p.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '-';

  const body = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;margin-bottom:16px;">
      <div>
        <div style="font-family:'Poppins';font-weight:800;font-size:19px;color:var(--teal-900);">${esc(p.name)}</div>
        <div style="font-size:12.5px;color:var(--slate);margin-top:3px;">Patient ID: <strong>${esc(p.pid)}</strong> &middot; ${esc(p.gender)} &middot; Age: ${ageLabel(p)}</div>
        <div style="font-size:12.5px;color:var(--slate);margin-top:3px;">Mobile: ${esc(p.mobile)}${p.email? ' &middot; Email: '+esc(p.email):''}</div>
        <div style="font-size:12.5px;color:var(--slate);margin-top:3px;">Address: ${esc(p.area? p.area+', ':'')}${esc(p.upazila||'')}, ${esc(p.district||'')}</div>
        ${p.nid? `<div style="font-size:12.5px;color:var(--slate);margin-top:3px;">NID: ${esc(p.nid)}</div>`:''}
        <div style="font-size:12.5px;color:var(--slate);margin-top:3px;">Referred From: ${esc(referredFromLabel(p))}</div>
      </div>
      <div><span class="badge gray">Registered: ${registeredStr}</span></div>
    </div>

    <div class="stat-grid" style="margin-bottom:20px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));">
      <div class="stat-card" style="padding:12px;"><div class="lbl">Total Sessions</div><div class="num" style="font-size:20px;">${totalSessions}</div></div>
      <div class="stat-card" style="padding:12px;"><div class="lbl">Total Paid</div><div class="num" style="font-size:20px;">${fmtMoney(totalPaid)}</div></div>
      <div class="stat-card" style="padding:12px;"><div class="lbl">Total Due</div><div class="num" style="font-size:20px;color:${totalDue>0?'var(--danger)':'var(--teal-900)'};">${fmtMoney(totalDue)}</div></div>
      <div class="stat-card" style="padding:12px;"><div class="lbl">Next Appointment</div><div style="font-size:13px;font-weight:700;color:var(--teal-800);margin-top:5px;">${nextAppt? fmtDate(nextAppt.date)+' • '+fmt12(nextAppt.time) : 'None scheduled'}</div></div>
      <div class="stat-card" style="padding:12px;"><div class="lbl">Last Visit</div><div style="font-size:13px;font-weight:700;color:var(--teal-800);margin-top:5px;">${lastVisit? fmtDate(lastVisit.date) : '-'}</div></div>
    </div>

    <h4 style="font-size:13.5px;color:var(--teal-900);margin-bottom:8px;">Appointment History — Date Wise (${appts.length})</h4>
    <div class="table-wrap" style="margin-bottom:22px;max-height:220px;overflow-y:auto;">
      <table><thead><tr><th>Date</th><th>Time</th><th>Doctor</th><th>Session</th><th>Status</th></tr></thead><tbody>
      ${appts.length? appts.map(a=>{
        const d = DB.doctors.find(x=>x.id===a.doctorId);
        return `<tr><td>${fmtDate(a.date)}</td><td>${fmt12(a.time)}</td><td>${esc(d?d.name:'-')}</td><td>${a.sessionNo? (a.sessionNo===1?'New':'#'+a.sessionNo):'-'}</td><td>${statusBadge(a.status)}</td></tr>`;
      }).join('') : `<tr class="empty-row"><td colspan="5">No appointments yet</td></tr>`}
      </tbody></table>
    </div>

    <h4 style="font-size:13.5px;color:var(--teal-900);margin-bottom:8px;">Billing, Payment &amp; Invoice History (${invoices.length})</h4>
    <div class="table-wrap" style="max-height:220px;overflow-y:auto;">
      <table><thead><tr><th>Invoice No</th><th>Date</th><th>Payment</th><th>Paid</th><th>Due</th><th>Status</th><th></th></tr></thead><tbody>
      ${invoices.length? invoices.map(inv=>{
        const invDue = invoiceDue(inv);
        const pStatus = invoicePaymentStatus(inv);
        const statusBadgeMap = {Paid:'green', Partial:'amber', Due:'red', Cancelled:'red'};
        return `<tr>
        <td><strong>${inv.receiptNo}</strong></td>
        <td>${fmtDate(inv.date)}</td>
        <td><span class="pay-chip">${payIconHtml(inv.method,18)} ${esc(inv.method)}</span></td>
        <td>${fmtMoney(invoicePaid(inv))}</td>
        <td>${invDue>0? `<strong style="color:var(--danger);">${fmtMoney(invDue)}</strong>` : '-'}</td>
        <td><span class="badge ${statusBadgeMap[pStatus]}">${pStatus}</span></td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="viewInvoiceFromProfile('${inv.id}','${patientId}')">${ICONS.print} View</button>
          ${invDue>0? `<button class="btn btn-primary btn-sm" onclick="openAddPaymentForm('${inv.id}')">${ICONS.money} Collect Due</button>` : ''}
        </td>
      </tr>`;}).join('') : `<tr class="empty-row"><td colspan="7">No invoices yet</td></tr>`}
      </tbody></table>
    </div>
  `;
  const billState = patientBillableState(patientId);
  const billBtnLabel = billState && billState.type==='due' ? `${ICONS.money} Collect Due (${fmtMoney(billState.due)})` : `${ICONS.billing} New Bill`;
  const foot = `
    <button class="btn btn-ghost" id="ppCloseBtn">Close</button>
    <button class="btn btn-ghost" id="ppEditBtn">${ICONS.edit} Edit Patient</button>
    <button class="btn btn-amber" id="ppBookBtn">${ICONS.appt} Book Appointment</button>
    <button class="btn btn-primary" id="ppBillBtn">${billBtnLabel}</button>
  `;
  openModal('Patient Profile', body, foot, true);
  document.getElementById('ppCloseBtn').addEventListener('click', closeModal);
  document.getElementById('ppEditBtn').addEventListener('click', ()=>{ closeModal(); switchView('patients'); setTimeout(()=>openPatientForm(patientId), 60); });
  document.getElementById('ppBookBtn').addEventListener('click', ()=>{
    closeModal();
    if(!DB.doctors.length){ toast('Please add a doctor first'); openDoctorManager(); return; }
    switchView('appointments');
    setTimeout(()=>openAppointmentForm(patientId), 60);
  });
  document.getElementById('ppBillBtn').addEventListener('click', ()=>{
    closeModal();
    if(billState && billState.type==='due'){ openAddPaymentForm(billState.invId); return; }
    switchView('billing');
    setTimeout(()=>{
      const sel = document.getElementById('bf_patient');
      if(sel){ sel.value = patientId; sel.dispatchEvent(new Event('change')); }
    }, 60);
  });
}

/* ===================== APPOINTMENTS ===================== */
function renderAppointments(){
  const el = document.getElementById('view-appointments');
  el.innerHTML = `
    <div class="page-head">
      <div><h2>Patient Appointments</h2><p>Manage doctor schedules and book appointment slots</p></div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-ghost" id="manageDocBtn">${ICONS.settings} Manage Doctors</button>
        <button class="btn btn-primary" id="newApptBtn">${ICONS.plus} New Appointment</button>
      </div>
    </div>
    <div class="card">
      <div class="table-wrap">
      <table><thead><tr><th>Date</th><th>Time</th><th>Patient</th><th>Session</th><th>Doctor</th><th>Status</th><th>Invoice</th><th>Actions</th></tr></thead>
      <tbody id="apptTbody"></tbody></table>
      </div>
    </div>
  `;
  document.getElementById('manageDocBtn').addEventListener('click', openDoctorManager);
  document.getElementById('newApptBtn').addEventListener('click', openAppointmentForm);
  renderApptTable();
}
function renderApptTable(){
  const tbody = document.getElementById('apptTbody');
  if(!tbody) return;
  const list = [...DB.appointments].sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
  tbody.innerHTML = list.length ? list.map(a=>{
    const p = DB.patients.find(x=>x.id===a.patientId);
    const d = DB.doctors.find(x=>x.id===a.doctorId);
    const anyInv = DB.invoices.find(x=>x.apptId===a.id);
    const activeInv = DB.invoices.find(x=>x.apptId===a.id && x.status!=='Cancelled');
    return `<tr>
      <td>${fmtDate(a.date)}</td>
      <td>${fmt12(a.time)}</td>
      <td>${p? patientLink(p, ' ('+p.pid+')') : 'Unknown'}</td>
      <td>${a.sessionNo? `<span class="badge ${a.sessionNo===1?'gray':'amber'}">${a.sessionNo===1?'New':'#'+a.sessionNo}</span>` : '-'}</td>
      <td>${esc(d?d.name:'Unknown')}</td>
      <td>${statusBadge(a.status)}</td>
      <td>${anyInv? `<button class="btn btn-ghost btn-sm" onclick="switchView('receipts'); setTimeout(()=>previewReceipt('${anyInv.id}'),60);">${anyInv.receiptNo}${anyInv.status==='Cancelled'?' (Cancelled)':''}</button>` : `<span class="badge gray">No bill</span>`}</td>
      <td>
        ${a.status==='Booked'? `<button class="btn btn-ghost btn-sm" onclick="setApptStatus('${a.id}','Completed')">Complete</button>
        <button class="btn btn-danger btn-sm" onclick="setApptStatus('${a.id}','Cancelled')">Cancel</button>
        ${!activeInv? `<button class="btn btn-amber btn-sm" onclick="billFromAppointment('${a.id}')">Bill</button>` : (invoiceDue(activeInv)>0? `<button class="btn btn-primary btn-sm" onclick="openAddPaymentForm('${activeInv.id}')">${ICONS.money} Collect Due (${fmtMoney(invoiceDue(activeInv))})</button>` : '')}`:''}
      </td>
    </tr>`;
  }).join('') : `<tr class="empty-row"><td colspan="8">No appointments yet</td></tr>`;
}
function setApptStatus(id, status){
  const a = DB.appointments.find(x=>x.id===id);
  if(!a) return;
  a.status = status;
  let msg = 'Appointment '+status.toLowerCase();
  if(status==='Cancelled'){
    const linked = DB.invoices.filter(inv=>inv.apptId===id && inv.status!=='Cancelled');
    if(linked.length){
      const deducted = linked.reduce((s,inv)=>s+invoicePaid(inv),0);
      linked.forEach(inv=> inv.status='Cancelled');
      msg = 'Appointment cancelled — '+fmtMoney(deducted)+' auto-deducted from revenue ('+linked.length+' receipt'+(linked.length>1?'s':'')+' cancelled)';
    }
  }
  saveDB();
  refreshAllBillingViews();
  toast(msg);
}
function billFromAppointment(apptId){
  const appt = DB.appointments.find(a=>a.id===apptId);
  if(!appt) return;
  switchView('billing');
  setTimeout(()=>{
    const patSel = document.getElementById('bf_patient');
    if(!patSel) return;
    patSel.value = appt.patientId;
    patSel.dispatchEvent(new Event('change'));
    setTimeout(()=>{
      const apptSel = document.getElementById('bf_appt');
      if(apptSel) apptSel.value = appt.id;
    }, 30);
  }, 60);
}
function patientBillableState(patientId){
  const dueInv = DB.invoices.find(inv=>inv.patientId===patientId && inv.status!=='Cancelled' && invoiceDue(inv)>0);
  if(dueInv) return {type:'due', invId:dueInv.id, due:invoiceDue(dueInv)};
  const billedApptIds = new Set(DB.invoices.filter(inv=>inv.apptId && inv.status!=='Cancelled').map(inv=>inv.apptId));
  const hasNew = DB.appointments.some(a=>a.patientId===patientId && a.status==='Booked' && !billedApptIds.has(a.id));
  return hasNew ? {type:'new'} : null;
}
function patientHasBillableAppt(patientId){
  return !!patientBillableState(patientId);
}
function patientBillButtonHtml(patientId){
  const state = patientBillableState(patientId);
  if(!state) return '';
  if(state.type==='due') return `<button class="btn btn-primary btn-sm" onclick="billForPatient('${patientId}')">${ICONS.money} Collect Due (${fmtMoney(state.due)})</button>`;
  return `<button class="btn btn-amber btn-sm" onclick="billForPatient('${patientId}')">${ICONS.billing} Bill</button>`;
}
function billForPatient(patientId){
  const state = patientBillableState(patientId);
  if(state && state.type==='due'){ openAddPaymentForm(state.invId); return; }
  const p = DB.patients.find(x=>x.id===patientId);
  if(!p){ toast('Patient not found'); return; }
  switchView('billing');
  setTimeout(()=>{
    const patSel = document.getElementById('bf_patient');
    if(!patSel) return;
    patSel.value = patientId;
    patSel.dispatchEvent(new Event('change'));
  }, 60);
}

/* ===================== DOCTORS TAB ===================== */
let selectedDoctorId = null;
let doctorScheduleDate = todayStr();
function renderDoctors(){
  const el = document.getElementById('view-doctors');
  el.innerHTML = `
    <div class="page-head">
      <div><h2>Doctors</h2><p>Every doctor's own date-wise appointment list — fully linked with the main Appointments</p></div>
      <button class="btn btn-ghost" id="drManageBtn">${ICONS.settings} Manage Doctors</button>
    </div>
    <div id="doctorCards" class="stat-grid"></div>
    <div id="doctorScheduleWrap" style="margin-top:20px;"></div>
  `;
  document.getElementById('drManageBtn').addEventListener('click', openDoctorManager);
  renderDoctorCards();
  if(selectedDoctorId && DB.doctors.find(d=>d.id===selectedDoctorId)){
    renderDoctorSchedulePanel();
  }
}
function renderDoctorCards(){
  const wrap = document.getElementById('doctorCards');
  if(!wrap) return;
  if(!DB.doctors.length){
    wrap.innerHTML = `<div class="card pad" style="grid-column:1/-1;"><p style="color:var(--slate);">No doctors added yet.</p>
      <button class="btn btn-primary" style="margin-top:10px;" onclick="openDoctorManager()">${ICONS.plus} Add Doctor</button></div>`;
    return;
  }
  const today = todayStr();
  const palette = [
    {solid:'#6366f1', soft:'rgba(99,102,241,.14)'},
    {solid:'#10b981', soft:'rgba(16,185,129,.14)'},
    {solid:'#f59e0b', soft:'rgba(245,158,11,.14)'},
    {solid:'#8b5cf6', soft:'rgba(139,92,246,.14)'},
    {solid:'#06b6d4', soft:'rgba(6,182,212,.14)'},
    {solid:'#f43f5e', soft:'rgba(244,63,94,.14)'}
  ];
  wrap.innerHTML = DB.doctors.map((d,idx)=>{
    const todays = DB.appointments.filter(a=>a.doctorId===d.id && a.date===today && a.status!=='Cancelled');
    const active = d.id===selectedDoctorId;
    const c = palette[idx % palette.length];
    return `<div class="stat-card" style="cursor:pointer;--accent:${c.solid};${active?'border-color:'+c.solid+';box-shadow:0 0 0 3px '+c.soft+';':''}" onclick="openDoctorSchedule('${d.id}')">
      <div class="icon" style="background:${c.soft};color:${c.solid}">${ICONS.doctor}</div>
      <div style="font-family:'Poppins';font-weight:700;font-size:15px;color:var(--teal-900);">${esc(d.name)}</div>
      <div class="lbl" style="margin-bottom:8px;">${esc(d.specialty||'General')}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <span class="badge amber">${todays.length} today</span>
        <span class="badge gray">${d.slotMinutes} min slots</span>
      </div>
    </div>`;
  }).join('');
}
function openDoctorSchedule(doctorId){
  selectedDoctorId = doctorId;
  doctorScheduleDate = todayStr();
  renderDoctorCards();
  renderDoctorSchedulePanel();
  document.getElementById('doctorScheduleWrap').scrollIntoView({behavior:'smooth', block:'nearest'});
}
function renderDoctorSchedulePanel(){
  const wrap = document.getElementById('doctorScheduleWrap');
  if(!wrap) return;
  const d = DB.doctors.find(x=>x.id===selectedDoctorId);
  if(!d){ wrap.innerHTML=''; return; }
  const dayAppts = DB.appointments.filter(a=>a.doctorId===d.id && a.date===doctorScheduleDate).sort((a,b)=>a.time.localeCompare(b.time));
  const booked = dayAppts.filter(a=>a.status==='Booked').length;
  const completed = dayAppts.filter(a=>a.status==='Completed').length;
  const cancelled = dayAppts.filter(a=>a.status==='Cancelled').length;
  const weekday = weekdayOf(doctorScheduleDate);
  wrap.innerHTML = `
    <div class="card pad">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;">
        <div>
          <h3 style="font-size:16px;color:var(--teal-900);">${esc(d.name)}'s Schedule</h3>
          <div style="font-size:12.5px;color:var(--slate);">${esc(d.specialty||'General')} &middot; ${weekday}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="btn btn-ghost btn-sm" id="drPrevDay">&larr; Prev</button>
          <input type="date" id="drDatePick" value="${doctorScheduleDate}">
          <button class="btn btn-ghost btn-sm" id="drToday">Today</button>
          <button class="btn btn-ghost btn-sm" id="drNextDay">Next &rarr;</button>
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
        <span class="badge amber">${booked} Booked</span>
        <span class="badge green">${completed} Completed</span>
        <span class="badge red">${cancelled} Cancelled</span>
      </div>
      <div class="table-wrap">
        <table><thead><tr><th>Time</th><th>Patient</th><th>Session</th><th>Status</th><th>Invoice</th><th>Actions</th></tr></thead>
        <tbody>
        ${dayAppts.length? dayAppts.map(a=>{
          const p = DB.patients.find(x=>x.id===a.patientId);
          const anyInv = DB.invoices.find(x=>x.apptId===a.id);
          const activeInv = DB.invoices.find(x=>x.apptId===a.id && x.status!=='Cancelled');
          return `<tr>
            <td>${fmt12(a.time)}</td>
            <td>${p? patientLink(p, ' ('+p.pid+')') : 'Unknown'}</td>
            <td>${a.sessionNo? `<span class="badge ${a.sessionNo===1?'gray':'amber'}">${a.sessionNo===1?'New':'#'+a.sessionNo}</span>` : '-'}</td>
            <td>${statusBadge(a.status)}</td>
            <td>${anyInv? `<button class="btn btn-ghost btn-sm" onclick="switchView('receipts'); setTimeout(()=>previewReceipt('${anyInv.id}'),60);">${anyInv.receiptNo}${anyInv.status==='Cancelled'?' (Cancelled)':''}</button>` : `<span class="badge gray">No bill</span>`}</td>
            <td>
              ${a.status==='Booked'? `<button class="btn btn-ghost btn-sm" onclick="drSetStatus('${a.id}','Completed')">Complete</button>
              <button class="btn btn-danger btn-sm" onclick="drSetStatus('${a.id}','Cancelled')">Cancel</button>
              ${!activeInv? `<button class="btn btn-amber btn-sm" onclick="billFromAppointment('${a.id}')">Bill</button>` : (invoiceDue(activeInv)>0? `<button class="btn btn-primary btn-sm" onclick="openAddPaymentForm('${activeInv.id}')">${ICONS.money} Collect Due (${fmtMoney(invoiceDue(activeInv))})</button>` : '')}`:''}
            </td>
          </tr>`;
        }).join('') : `<tr class="empty-row"><td colspan="6">No appointments for this date</td></tr>`}
        </tbody></table>
      </div>
    </div>
  `;
  document.getElementById('drDatePick').addEventListener('change', (e)=>{ doctorScheduleDate = e.target.value; renderDoctorSchedulePanel(); });
  document.getElementById('drPrevDay').addEventListener('click', ()=>{ shiftDoctorDate(-1); });
  document.getElementById('drNextDay').addEventListener('click', ()=>{ shiftDoctorDate(1); });
  document.getElementById('drToday').addEventListener('click', ()=>{ doctorScheduleDate = todayStr(); renderDoctorSchedulePanel(); });
}
function shiftDoctorDate(days){
  const dt = new Date(doctorScheduleDate+'T00:00:00');
  dt.setDate(dt.getDate()+days);
  doctorScheduleDate = dt.getFullYear()+'-'+pad(dt.getMonth()+1,2)+'-'+pad(dt.getDate(),2);
  renderDoctorSchedulePanel();
}
function drSetStatus(apptId, status){
  setApptStatus(apptId, status);
  renderDoctorCards();
  renderDoctorSchedulePanel();
}

/* ---- Doctor manager ---- */
function openDoctorManager(){
  const body = `
    <div style="margin-bottom:14px;display:flex;justify-content:flex-end;">
      <button class="btn btn-amber" id="addDoctorBtn">${ICONS.plus} Add Doctor</button>
    </div>
    <div id="doctorList"></div>
  `;
  openModal('Manage Doctors & Schedules', body, `<button class="btn btn-ghost" id="closeDocBtn">Close</button>`);
  document.getElementById('closeDocBtn').addEventListener('click', closeModal);
  document.getElementById('addDoctorBtn').addEventListener('click', ()=>openDoctorForm());
  renderDoctorList();
}
function renderDoctorList(){
  const wrap = document.getElementById('doctorList');
  if(!wrap) return;
  if(!DB.doctors.length){ wrap.innerHTML = `<p style="color:var(--slate);font-size:13px;">No doctors added yet.</p>`; return; }
  wrap.innerHTML = DB.doctors.map(d=>{
    const activeDays = WEEKDAYS.filter(w=>d.days[w] && d.days[w].active);
    return `<div class="card pad" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <strong style="color:var(--teal-900);">${esc(d.name)}</strong> <span class="badge gray">${esc(d.specialty||'General')}</span>
          <div style="font-size:12px;color:var(--slate);margin-top:4px;">Working days: ${activeDays.join(', ')||'None set'}</div>
          <div style="font-size:12px;color:var(--slate);">Slot: ${d.slotMinutes} min &nbsp;|&nbsp; Lunch break: ${d.lunchStart?fmt12(d.lunchStart)+' - '+fmt12(d.lunchEnd):'None'}</div>
          <div style="font-size:12px;color:var(--slate);margin-top:4px;">Services: ${(d.services&&d.services.length)? d.services.map(id=>esc(serviceById(id)?serviceById(id).name:id)).join(', ') : 'All clinic services'}</div>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-ghost btn-sm" onclick="openDoctorForm('${d.id}')">${ICONS.edit}</button>
          <button class="btn btn-danger btn-sm" onclick="deleteDoctor('${d.id}')">${ICONS.trash}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}
function deleteDoctor(id){
  if(!confirm('Remove this doctor? Existing appointments will remain but the schedule will be removed.')) return;
  DB.doctors = DB.doctors.filter(d=>d.id!==id);
  if(selectedDoctorId===id) selectedDoctorId = null;
  saveDB(); renderDoctorList();
  if(document.getElementById('doctorCards')) renderDoctorCards();
  if(document.getElementById('doctorScheduleWrap')) document.getElementById('doctorScheduleWrap').innerHTML='';
}
function openDoctorForm(id){
  const editing = !!id;
  const d = editing ? DB.doctors.find(x=>x.id===id) : {
    slotMinutes:30, lunchStart:'13:00', lunchEnd:'14:00',
    days: Object.fromEntries(WEEKDAYS.map(w=>[w,{active: w!=='Friday', start:'08:00', end:'20:00'}]))
  };
  const body = `
    <form id="docForm">
      <div class="form-grid">
        <div class="field"><label>Doctor Name *</label><input type="text" id="df_name" required value="${esc(d.name||'')}" placeholder="Dr. John Doe"></div>
        <div class="field"><label>Specialty</label><input type="text" id="df_spec" value="${esc(d.specialty||'')}" placeholder="Physiotherapist"></div>
        <div class="field"><label>Slot Duration (minutes)</label>
          <select id="df_slot">
            <option value="15" ${d.slotMinutes==15?'selected':''}>15 min</option>
            <option value="20" ${d.slotMinutes==20?'selected':''}>20 min</option>
            <option value="30" ${d.slotMinutes==30?'selected':''}>30 min</option>
            <option value="45" ${d.slotMinutes==45?'selected':''}>45 min</option>
            <option value="60" ${d.slotMinutes==60?'selected':''}>60 min</option>
          </select>
        </div>
        <div class="field"></div>
        <div class="field"><label>Lunch Break Start</label><input type="time" id="df_lstart" value="${d.lunchStart||''}"></div>
        <div class="field"><label>Lunch Break End</label><input type="time" id="df_lend" value="${d.lunchEnd||''}"></div>
      </div>
      <fieldset style="margin-top:16px;">
        <legend>Weekly Working Hours</legend>
        <div id="dayRows">
          ${WEEKDAYS.map(w=>{
            const dd = d.days[w] || {active:false,start:'08:00',end:'20:00'};
            return `<div class="day-row" data-day="${w}">
              <div class="dname">${w}</div>
              <div class="toggle"><input type="time" class="day-start" value="${dd.start}" ${dd.active?'':'disabled'}></div>
              <div class="toggle"><input type="time" class="day-end" value="${dd.end}" ${dd.active?'':'disabled'}></div>
              <label class="toggle"><input type="checkbox" class="day-active" ${dd.active?'checked':''}> Open</label>
            </div>`;
          }).join('')}
        </div>
      </fieldset>
      <fieldset style="margin-top:16px;">
        <legend>Service / Item Charges (specific to this doctor)</legend>
        <p class="hint" style="margin-bottom:8px;">This doctor's own billable services — nothing is shared or preset. A Physiotherapy doctor's list should only contain physiotherapy services; a Medical doctor's list should only contain medical consultation items, and so on.</p>
        <div id="docServiceRows" style="margin-bottom:10px;"></div>
        <div style="display:grid;grid-template-columns:1fr 120px auto;gap:8px;align-items:end;">
          <div class="field"><label>Service / Item Name</label><input type="text" id="dsvc_name" placeholder="e.g. Manual Therapy Session"></div>
          <div class="field"><label>Price</label><input type="number" id="dsvc_price" min="0" placeholder="0"></div>
          <button type="button" class="btn btn-ghost" id="dsvcAddBtn">${ICONS.plus} Add</button>
        </div>
      </fieldset>
    </form>
  `;
  const foot = `<button class="btn btn-ghost" id="cancelDBtn">Cancel</button><button class="btn btn-primary" id="saveDBtn">${editing?'Update':'Save'} Doctor</button>`;
  openModal(editing?'Edit Doctor':'Add Doctor', body, foot);

  let doctorServiceDraft = (d.services||[]).map(s=>({id:s.id, name:s.name, price:s.price}));
  const renderDocServiceRows = ()=>{
    const wrap = document.getElementById('docServiceRows');
    wrap.innerHTML = doctorServiceDraft.length? doctorServiceDraft.map((s,i)=>`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 10px;border:1px solid var(--line);border-radius:8px;margin-bottom:6px;">
        <span style="font-size:12.5px;font-weight:600;">${esc(s.name)}</span>
        <span style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:12.5px;color:var(--teal-700);font-weight:700;">${fmtMoney(s.price)}</span>
          <button type="button" class="btn btn-ghost btn-sm" onclick="editDoctorServiceDraft(${i})">${ICONS.edit}</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="removeDoctorServiceDraft(${i})">${ICONS.trash}</button>
        </span>
      </div>
    `).join('') : `<p style="font-size:12.5px;color:var(--slate);">No services added yet for this doctor.</p>`;
  };
  window.removeDoctorServiceDraft = (i)=>{ doctorServiceDraft.splice(i,1); renderDocServiceRows(); };
  window.editDoctorServiceDraft = (i)=>{
    const s = doctorServiceDraft[i];
    document.getElementById('dsvc_name').value = s.name;
    document.getElementById('dsvc_price').value = s.price;
    doctorServiceDraft.splice(i,1);
    renderDocServiceRows();
  };
  document.getElementById('dsvcAddBtn').addEventListener('click', ()=>{
    const name = document.getElementById('dsvc_name').value.trim();
    const price = Number(document.getElementById('dsvc_price').value||0);
    if(!name){ toast('Enter a service name first'); return; }
    doctorServiceDraft.push({id:'dsvc'+nextId('service'), name, price});
    document.getElementById('dsvc_name').value='';
    document.getElementById('dsvc_price').value='';
    document.getElementById('dsvc_name').focus();
    renderDocServiceRows();
  });
  renderDocServiceRows();

  document.querySelectorAll('.day-active').forEach(cb=>{
    cb.addEventListener('change', (e)=>{
      const row = e.target.closest('.day-row');
      row.querySelector('.day-start').disabled = !e.target.checked;
      row.querySelector('.day-end').disabled = !e.target.checked;
    });
  });
  document.getElementById('cancelDBtn').addEventListener('click', closeModal);
  document.getElementById('saveDBtn').addEventListener('click', ()=>{
    const name = document.getElementById('df_name').value.trim();
    if(!name){ toast('Doctor name is required'); return; }
    const days = {};
    document.querySelectorAll('.day-row').forEach(row=>{
      const w = row.dataset.day;
      days[w] = {
        active: row.querySelector('.day-active').checked,
        start: row.querySelector('.day-start').value,
        end: row.querySelector('.day-end').value
      };
    });
    const rec = {
      id: editing? d.id : 'd'+nextId('doctor'),
      name, specialty: document.getElementById('df_spec').value.trim(),
      slotMinutes: Number(document.getElementById('df_slot').value),
      lunchStart: document.getElementById('df_lstart').value,
      lunchEnd: document.getElementById('df_lend').value,
      services: doctorServiceDraft,
      days
    };
    if(editing){ const idx = DB.doctors.findIndex(x=>x.id===id); DB.doctors[idx]=rec; }
    else DB.doctors.push(rec);
    saveDB();
    openDoctorManager();
    if(document.getElementById('doctorCards')) renderDoctorCards();
    if(selectedDoctorId) renderDoctorSchedulePanel();
    toast(editing?'Doctor updated':'Doctor added');
  });
}

/* ---- Book appointment ---- */
function generateSlots(doctor, date){
  const weekday = weekdayOf(date);
  const dayCfg = doctor.days[weekday];
  if(!dayCfg || !dayCfg.active) return [];
  const slots = [];
  const startMin = timeToMin(dayCfg.start);
  const endMin = timeToMin(dayCfg.end);
  const lunchStartMin = doctor.lunchStart? timeToMin(doctor.lunchStart) : null;
  const lunchEndMin = doctor.lunchEnd? timeToMin(doctor.lunchEnd) : null;
  const booked = DB.appointments.filter(a=>a.doctorId===doctor.id && a.date===date && a.status!=='Cancelled').map(a=>a.time);
  for(let m=startMin; m+doctor.slotMinutes<=endMin; m+=doctor.slotMinutes){
    const t = minToTime(m);
    const isLunch = lunchStartMin!=null && m < lunchEndMin && (m+doctor.slotMinutes) > lunchStartMin;
    slots.push({time:t, lunch:isLunch, booked: booked.includes(t)});
  }
  return slots;
}
function openAppointmentForm(preselectPatientId, preselectDoctorId){
  if(!DB.doctors.length){ toast('Please add a doctor first'); openDoctorManager(); return; }
  if(!DB.patients.length){ toast('Please register a patient first'); switchView('patients'); return; }
  const body = `
    <div class="form-grid">
      <div class="field"><label>Patient *</label>
        <select id="af_patient">${DB.patients.map(p=>`<option value="${p.id}" ${p.id===preselectPatientId?'selected':''}>${esc(p.name)} — ${esc(p.pid)} (${esc(p.mobile)})</option>`).join('')}</select>
      </div>
      <div class="field"><label>Doctor *</label>
        <select id="af_doctor">${DB.doctors.map(d=>`<option value="${d.id}" ${d.id===preselectDoctorId?'selected':''}>${esc(d.name)} ${d.specialty?'- '+esc(d.specialty):''}</option>`).join('')}</select>
      </div>
      <div class="field span2"><label>Appointment Date *</label><input type="date" id="af_date" min="${todayStr()}" value="${todayStr()}"></div>
    </div>
    <div id="sessionInfo" style="margin-top:4px;"></div>
    <div id="slotArea" style="margin-top:8px;"></div>
    <input type="hidden" id="af_time">
  `;
  const foot = `<button class="btn btn-ghost" id="cancelABtn">Cancel</button><button class="btn btn-primary" id="saveABtn" disabled>Confirm Appointment</button>`;
  openModal('New Appointment', body, foot);
  document.getElementById('cancelABtn').addEventListener('click', closeModal);
  const refreshSessionInfo = ()=>{
    const patientId = document.getElementById('af_patient').value;
    const count = patientSessionCount(patientId);
    const nextSession = count+1;
    const box = document.getElementById('sessionInfo');
    box.innerHTML = `<div class="badge ${nextSession===1?'gray':'amber'}" style="font-size:12px;padding:6px 12px;">
      ${nextSession===1? "🆕 This will be the patient's 1st Visit (New Patient)" : '🔁 This will be Session #'+nextSession+' — Follow-up #'+count+' for this Patient ID'}
    </div>`;
  };
  const refreshSlots = ()=>{
    const doctor = DB.doctors.find(d=>d.id===document.getElementById('af_doctor').value);
    const date = document.getElementById('af_date').value;
    const area = document.getElementById('slotArea');
    document.getElementById('af_time').value='';
    document.getElementById('saveABtn').disabled = true;
    if(!doctor || !date){ area.innerHTML=''; return; }
    const weekday = weekdayOf(date);
    const slots = generateSlots(doctor, date);
    if(!slots.length){
      area.innerHTML = `<p style="color:var(--danger);font-size:13px;font-weight:600;margin-top:10px;">${doctor.name} is off on ${weekday}s. Please choose another date.</p>`;
      return;
    }
    area.innerHTML = `<label style="font-size:12px;font-weight:600;color:var(--teal-800);">Available Slots (${weekday})</label>
      <div class="slot-grid">
        ${slots.map(s=>`<div class="slot ${s.lunch?'lunch':s.booked?'booked':''}" data-time="${s.time}" title="${s.lunch?'Lunch Break':s.booked?'Already Booked':''}">${fmt12(s.time)}</div>`).join('')}
      </div>`;
    area.querySelectorAll('.slot:not(.lunch):not(.booked)').forEach(el=>{
      el.addEventListener('click', ()=>{
        area.querySelectorAll('.slot').forEach(s=>s.classList.remove('selected'));
        el.classList.add('selected');
        document.getElementById('af_time').value = el.dataset.time;
        document.getElementById('saveABtn').disabled = false;
      });
    });
  };
  document.getElementById('af_patient').addEventListener('change', refreshSessionInfo);
  document.getElementById('af_doctor').addEventListener('change', refreshSlots);
  document.getElementById('af_date').addEventListener('change', refreshSlots);
  refreshSessionInfo();
  refreshSlots();
  document.getElementById('saveABtn').addEventListener('click', ()=>{
    const time = document.getElementById('af_time').value;
    if(!time){ toast('Please select a time slot'); return; }
    const patientId = document.getElementById('af_patient').value;
    const sessionNo = patientSessionCount(patientId) + 1;
    const rec = {
      id:'a'+nextId('appt'),
      patientId,
      doctorId: document.getElementById('af_doctor').value,
      date: document.getElementById('af_date').value,
      time, status:'Booked', sessionNo, createdAt: Date.now()
    };
    DB.appointments.push(rec);
    saveDB(); closeModal(); renderApptTable();
    if(document.getElementById('view-dashboard')) renderDashboard();
    if(document.getElementById('doctorCards')) renderDoctorCards();
    if(document.getElementById('doctorScheduleWrap') && selectedDoctorId) renderDoctorSchedulePanel();
    toast('Appointment booked ('+sessionLabel(sessionNo)+') for '+fmt12(time)+' on '+fmtDate(rec.date));
  });
}

/* ===================== BILLING ===================== */
let billItems = [];
let billPayMethod = 'Cash';
function renderBilling(){
  const el = document.getElementById('view-billing');
  if(!DB.patients.length){
    el.innerHTML = `<div class="page-head"><div><h2>Billing, Payment &amp; Invoice</h2><p>Create and generate a patient invoice</p></div></div>
    <div class="card pad"><p style="color:var(--slate);">Please register a patient first before creating a bill.</p>
    <button class="btn btn-primary" style="margin-top:10px;" onclick="switchView('patients')">Go to Patient Registration</button></div>`;
    return;
  }
  billItems = [{desc:'', amount:'', serviceId:''}];
  billPayMethod = 'Cash';
  billReceivedTouched = false;
  el.innerHTML = `
    <div class="page-head"><div><h2>Billing, Payment &amp; Invoice</h2><p>Add charges, take payment, and generate the invoice — all in one step</p></div></div>
    <div class="card pad">
      <div class="form-grid">
        <div class="field span2"><label>Patient *</label>
          <select id="bf_patient">${DB.patients.map(p=>`<option value="${p.id}">${esc(p.name)} — ${esc(p.pid)} (${esc(p.mobile)})</option>`).join('')}</select>
        </div>
        <div class="field span2"><label>Doctor Appointment *</label>
          <select id="bf_appt"></select>
          <span class="hint">Billing requires a booked doctor appointment — this determines the Attending Doctor and their service list.</span>
        </div>
        <div class="field"><label>Attending Doctor</label>
          <input type="text" id="bf_doctor_display" disabled style="background:#f6f6f6;font-weight:600;color:var(--teal-800);">
          <input type="hidden" id="bf_doctor">
        </div>
        <div class="field"><label>Bill Date</label><input type="date" id="bf_date" value="${todayStr()}"></div>
      </div>

      <div id="noApptBlock" style="display:none;margin-top:16px;padding:22px;text-align:center;background:#fdf1de;border:1.5px dashed #f0ce9c;border-radius:12px;">
        <div style="font-size:13.5px;font-weight:700;color:var(--amber-dark);">This patient has no billable doctor appointment.</div>
        <div style="font-size:12.5px;color:var(--slate);margin-top:4px;">Billing can only be created against a booked doctor appointment. Please book one first.</div>
        <button class="btn btn-primary" style="margin-top:12px;" id="noApptBookBtn">${ICONS.appt} Book Appointment</button>
      </div>

      <div id="billFormBody">
        <div style="margin-top:18px;">
          <label style="font-size:12px;font-weight:600;color:var(--teal-800);">Service / Item Charges</label>
          <div id="noServiceHint" class="hint" style="display:none;margin-top:4px;"></div>
          <div id="itemsWrap" style="margin-top:8px;"></div>
          <button class="btn btn-ghost btn-sm" id="addItemBtn" style="margin-top:4px;">${ICONS.plus} Add Item</button>
        </div>

        <div class="form-grid" style="margin-top:18px;">
          <div class="field"><label>Discount (Amount)</label><input type="number" id="bf_discount" value="0" min="0"></div>
          <div class="field"><label>Amount Received Now *</label><input type="number" id="bf_received" min="0" placeholder="0"><span class="hint">Leave equal to total for full payment, or enter less for a partial payment.</span></div>
          <div class="field span2" id="txnWrap" style="display:none;"><label>Transaction / Reference No.</label><input type="text" id="bf_txn" placeholder="e.g. bKash TrxID"></div>
        </div>

        <div style="margin-top:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--teal-800);">Payment Method *</label>
          <div class="pay-grid" id="payGrid"></div>
        </div>

        <div class="bill-summary" id="billSummary"></div>

        <div style="margin-top:18px;display:flex;justify-content:flex-end;gap:10px;">
          <button class="btn btn-amber" id="generateBillBtn">${ICONS.receipt} Generate Invoice</button>
        </div>
      </div>
    </div>
  `;
  renderBillItems();
  renderPayGrid('payGrid', billPayMethod, (id)=>{ billPayMethod=id; document.getElementById('txnWrap').style.display = id==='Cash' ? 'none':''; });

  const refreshApptOptions = ()=>{
    const pid = document.getElementById('bf_patient').value;
    const billedApptIds = new Set(DB.invoices.filter(inv=>inv.apptId && inv.status!=='Cancelled').map(inv=>inv.apptId));
    const opts = DB.appointments.filter(a=>a.patientId===pid && a.status==='Booked' && !billedApptIds.has(a.id))
      .sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
    const apptSel = document.getElementById('bf_appt');
    const formBody = document.getElementById('billFormBody');
    const noApptBlock = document.getElementById('noApptBlock');
    if(!opts.length){
      apptSel.innerHTML = `<option value="">— No billable appointment —</option>`;
      noApptBlock.style.display = '';
      formBody.style.display = 'none';
      document.getElementById('bf_doctor_display').value = '';
      document.getElementById('bf_doctor').value = '';
      return;
    }
    noApptBlock.style.display = 'none';
    formBody.style.display = '';
    apptSel.innerHTML = opts.map(a=>{const d=DB.doctors.find(x=>x.id===a.doctorId);return `<option value="${a.id}">${fmtDate(a.date)} ${fmt12(a.time)} — ${esc(d?d.name:'Unknown Doctor')}</option>`;}).join('');
    apptSel.dispatchEvent(new Event('change'));
  };
  document.getElementById('bf_patient').addEventListener('change', refreshApptOptions);
  document.getElementById('bf_appt').addEventListener('change', (e)=>{
    const appt = DB.appointments.find(a=>a.id===e.target.value);
    const d = appt ? DB.doctors.find(x=>x.id===appt.doctorId) : null;
    document.getElementById('bf_doctor').value = appt ? appt.doctorId : '';
    document.getElementById('bf_doctor_display').value = d ? (d.name+(d.specialty?' — '+d.specialty:'')) : '';
    billItems = [{desc:'', amount:'', serviceId:''}];
    billReceivedTouched = false;
    renderBillItems();
    updateBillSummary();
  });
  document.getElementById('noApptBookBtn')?.addEventListener('click', ()=>{
    const pid = document.getElementById('bf_patient').value;
    if(!DB.doctors.length){ toast('Please add a doctor first'); openDoctorManager(); return; }
    openAppointmentForm(pid);
  });
  refreshApptOptions();
  document.getElementById('addItemBtn').addEventListener('click', ()=>{ billItems.push({desc:'',amount:'',serviceId:''}); renderBillItems(); });
  document.getElementById('bf_discount').addEventListener('input', updateBillSummary);
  document.getElementById('bf_received').addEventListener('input', ()=>{ billReceivedTouched = true; updateBillSummary(); });
  document.getElementById('generateBillBtn').addEventListener('click', generateInvoice);
  updateBillSummary();
}
function renderPayGrid(containerId, selected, onSelect){
  const grid = document.getElementById(containerId);
  grid.innerHTML = PAYMENT_METHODS.map(m=>`
    <button type="button" class="pay-btn ${m.id===selected?'selected':''}" data-method="${m.id}">
      ${payIconHtml(m.id)}<span>${esc(m.label)}</span>
    </button>
  `).join('');
  grid.querySelectorAll('.pay-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      grid.querySelectorAll('.pay-btn').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      onSelect(btn.dataset.method);
    });
  });
}
function currentBillServiceList(){
  const docSel = document.getElementById('bf_doctor');
  const doctorId = docSel ? docSel.value : '';
  return servicesForDoctor(doctorId || null);
}
function renderBillItems(){
  const wrap = document.getElementById('itemsWrap');
  const services = currentBillServiceList();
  wrap.innerHTML = billItems.map((it,i)=>{
    const isKnown = it.serviceId && it.serviceId!=='__custom__';
    return `
    <div class="item-row">
      <div style="display:flex;flex-direction:column;gap:5px;">
        <select onchange="onBillServiceSelect(${i}, this.value)">
          <option value="">— Select a service —</option>
          ${services.map(s=>`<option value="${s.id}" ${it.serviceId===s.id?'selected':''}>${esc(s.name)} (${fmtMoney(s.price)})</option>`).join('')}
          <option value="__custom__" ${it.serviceId==='__custom__'?'selected':''}>Other / Custom...</option>
        </select>
        ${(!isKnown)? `<input type="text" placeholder="${it.serviceId==='__custom__'?'Custom service description':'Or type a description directly'}" value="${esc(it.desc)}" oninput="billItems[${i}].desc=this.value">` : ''}
      </div>
      <input type="number" placeholder="Amount" min="0" value="${it.amount}" oninput="billItems[${i}].amount=this.value; updateBillSummary();">
      <input type="text" value="৳" disabled style="text-align:center;background:#f6f6f6;">
      <button class="remove-item" onclick="removeBillItem(${i})">&times;</button>
    </div>
  `;}).join('');
}
function onBillServiceSelect(i, val){
  if(val===''){
    billItems[i].serviceId=''; billItems[i].desc=''; 
  } else if(val==='__custom__'){
    billItems[i].serviceId='__custom__'; billItems[i].desc='';
  } else {
    const svc = serviceById(val);
    billItems[i].serviceId = val;
    billItems[i].desc = svc? svc.name : '';
    billItems[i].amount = svc? svc.price : billItems[i].amount;
  }
  renderBillItems();
  updateBillSummary();
}
function removeBillItem(i){ billItems.splice(i,1); if(!billItems.length) billItems.push({desc:'',amount:'',serviceId:''}); renderBillItems(); updateBillSummary(); }
let billReceivedTouched = false;
function updateBillSummary(){
  const sub = billItems.reduce((s,it)=>s+(Number(it.amount)||0),0);
  const disc = Number(document.getElementById('bf_discount')?.value||0);
  const total = Math.max(0, sub-disc);
  const receivedInput = document.getElementById('bf_received');
  if(receivedInput && !billReceivedTouched){
    receivedInput.value = total || '';
  }
  let received = Number(receivedInput?.value||0);
  if(received<0) received = 0;
  if(received>total) received = total;
  const due = Math.max(0, Math.round((total-received)*100)/100);
  const box = document.getElementById('billSummary');
  if(!box) return;
  box.innerHTML = `
    <div class="row"><span>Subtotal</span><span>${fmtMoney(sub)}</span></div>
    <div class="row"><span>Discount</span><span>- ${fmtMoney(disc)}</span></div>
    <div class="row total"><span>Total Payable</span><span>${fmtMoney(total)}</span></div>
    <div class="row" style="margin-top:6px;"><span>Amount Received Now</span><span style="color:#1e7e42;font-weight:700;">${fmtMoney(received)}</span></div>
    <div class="row"><span>Due Amount</span><span style="color:${due>0?'var(--danger)':'var(--slate)'};font-weight:700;">${fmtMoney(due)}</span></div>
  `;
}
function generateInvoice(){
  const patientId = document.getElementById('bf_patient').value;
  const date = document.getElementById('bf_date').value || todayStr();
  const items = billItems.filter(it=>it.desc && Number(it.amount)>0);
  if(!items.length){ toast('Please add at least one billing item with amount'); return; }
  const apptId = document.getElementById('bf_appt').value || null;
  if(!apptId){ toast('Billing requires a booked doctor appointment. Please select one.'); return; }

  // Hard guard: never allow two active invoices against the same appointment (same patient, same date & time).
  const dupe = DB.invoices.find(inv=>inv.apptId===apptId && inv.status!=='Cancelled');
  if(dupe){
    const appt = DB.appointments.find(a=>a.id===apptId);
    const p = DB.patients.find(x=>x.id===patientId);
    warnDuplicateBilling(dupe, p, appt);
    return;
  }

  const sub = items.reduce((s,it)=>s+Number(it.amount),0);
  const discount = Number(document.getElementById('bf_discount').value||0);
  const total = Math.max(0, sub-discount);
  let received = Number(document.getElementById('bf_received').value||0);
  if(received<0) received = 0;
  if(received>total) received = total;
  const method = billPayMethod;
  const txn = document.getElementById('bf_txn')?.value || '';
  const doctorId = document.getElementById('bf_doctor').value || null;
  const now = new Date();
  const payments = received>0 ? [{amount:received, method, txn, date, time:pad(now.getHours(),2)+':'+pad(now.getMinutes(),2), recordedAt:Date.now()}] : [];
  const inv = {
    id:'i'+nextId('invoice'),
    receiptNo: nextInvoiceNo(),
    patientId, date, items, subtotal:sub, discount, total, method, txn, apptId, doctorId,
    payments,
    status:'Paid',
    createdAt: Date.now(), updatedAt: Date.now()
  };
  DB.invoices.push(inv);
  saveDB();
  toast('Invoice '+inv.receiptNo+' generated'+(invoiceDue(inv)>0? ' — '+fmtMoney(invoiceDue(inv))+' due':''));
  renderBilling();
  showPaymentInvoiceComplete(inv.id);
}
function warnDuplicateBilling(existingInv, patient, appt){
  const due = invoiceDue(existingInv);
  const body = `
    <div style="text-align:center;padding:6px 0 14px 0;">
      <div style="width:52px;height:52px;border-radius:50%;background:#fdecee;color:var(--danger);display:flex;align-items:center;justify-content:center;margin:0 auto 10px auto;">${ICONS.alertTriangle}</div>
      <h3 style="font-size:16px;color:var(--teal-900);">This Visit Is Already Billed</h3>
      <div style="font-size:13px;color:var(--slate);margin-top:4px;">
        ${esc(patient?patient.name:'This patient')} (${esc(patient?patient.pid:'')}) already has an invoice for
        ${appt? 'the appointment on '+fmtDate(appt.date)+' at '+fmt12(appt.time) : 'this visit'}.
      </div>
    </div>
    <div class="card pad" style="background:#fdecee;border-style:dashed;text-align:center;">
      <div style="font-size:13.5px;">Existing Invoice: <strong>${existingInv.receiptNo}</strong> — ${fmtMoney(existingInv.total)}</div>
      ${due>0? `<div style="font-size:13px;color:var(--danger);font-weight:700;margin-top:4px;">Due Amount: ${fmtMoney(due)}</div>` : ''}
      <div style="font-size:12px;color:var(--slate);margin-top:4px;">Creating another bill for the same patient ID and the same appointment schedule would double-count this visit in Today's and Monthly Revenue. ${due>0? 'Collect the remaining balance against this same invoice instead.':''}</div>
    </div>
  `;
  const foot = `
    <button class="btn btn-ghost" id="dupCloseBtn">Cancel</button>
    <button class="btn btn-ghost" id="dupViewBtn">${ICONS.receipt} View Existing Invoice</button>
    ${due>0? `<button class="btn btn-primary" id="dupPayBtn">${ICONS.money} Collect Due (${fmtMoney(due)})</button>` : ''}
  `;
  openModal('Duplicate Billing Blocked', body, foot);
  document.getElementById('dupCloseBtn').addEventListener('click', closeModal);
  document.getElementById('dupViewBtn').addEventListener('click', ()=>{
    closeModal();
    switchView('receipts');
    setTimeout(()=>previewReceipt(existingInv.id), 60);
  });
  document.getElementById('dupPayBtn')?.addEventListener('click', ()=>{
    closeModal();
    openAddPaymentForm(existingInv.id);
  });
}

/* ---------- Collect further payment against an existing (partially paid) invoice ---------- */
function openAddPaymentForm(invId){
  const inv = DB.invoices.find(x=>x.id===invId);
  if(!inv){ toast('Invoice not found'); return; }
  const due = invoiceDue(inv);
  const paid = invoicePaid(inv);
  const p = DB.patients.find(x=>x.id===inv.patientId);
  if(due<=0){
    toast('This invoice is already fully paid');
    previewReceipt(invId);
    return;
  }
  let payMethod = inv.method || 'Cash';
  const body = `
    <div style="margin-bottom:12px;">
      <div style="font-size:13.5px;font-weight:700;color:var(--teal-800);">${esc(p?p.name:'')} — ${esc(p?p.pid:'')}</div>
      <div style="font-size:12px;color:var(--slate);">Invoice ${inv.receiptNo}</div>
    </div>
    <div class="bill-summary" style="margin-top:0;border-top:none;padding-top:0;">
      <div class="row"><span>Invoice Total</span><span>${fmtMoney(inv.total)}</span></div>
      <div class="row"><span>Already Paid</span><span style="color:#1e7e42;font-weight:700;">${fmtMoney(paid)}</span></div>
      <div class="row total"><span>Due Amount</span><span style="color:var(--danger);">${fmtMoney(due)}</span></div>
    </div>
    <div class="form-grid" style="margin-top:16px;">
      <div class="field"><label>Payment Amount Now *</label><input type="number" id="ap_amount" min="0.01" max="${due}" value="${due}"></div>
      <div class="field span2" id="apTxnWrap" style="${payMethod==='Cash'?'display:none;':''}"><label>Transaction / Reference No.</label><input type="text" id="ap_txn" placeholder="e.g. bKash TrxID"></div>
    </div>
    <div style="margin-top:14px;">
      <label style="font-size:12px;font-weight:600;color:var(--teal-800);">Payment Method</label>
      <div class="pay-grid" id="apPayGrid"></div>
    </div>
  `;
  const foot = `<button class="btn btn-ghost" id="apCancelBtn">Cancel</button><button class="btn btn-primary" id="apSaveBtn">${ICONS.money} Record Payment</button>`;
  openModal('Collect Due Payment', body, foot);
  document.getElementById('apCancelBtn').addEventListener('click', closeModal);
  renderPayGrid('apPayGrid', payMethod, (id)=>{ payMethod=id; document.getElementById('apTxnWrap').style.display = id==='Cash'?'none':''; });
  document.getElementById('apSaveBtn').addEventListener('click', ()=>{
    let amt = Number(document.getElementById('ap_amount').value||0);
    if(amt<=0){ toast('Enter a valid payment amount'); return; }
    if(amt>due+0.009) amt = due;
    const now = new Date();
    if(!inv.payments) inv.payments = [];
    inv.payments.push({
      amount: amt, method: payMethod, txn: document.getElementById('ap_txn')?.value||'',
      date: todayStr(), time: pad(now.getHours(),2)+':'+pad(now.getMinutes(),2), recordedAt: Date.now()
    });
    inv.updatedAt = Date.now();
    saveDB();
    closeModal();
    const newDue = invoiceDue(inv);
    toast(newDue<=0 ? 'Payment recorded — invoice fully paid!' : fmtMoney(amt)+' recorded, '+fmtMoney(newDue)+' still due');
    refreshAllBillingViews();
    previewReceipt(invId);
  });
}
/* Refresh every screen that shows billing/invoice status, wherever it happens to be mounted */
function refreshAllBillingViews(){
  if(document.getElementById('view-dashboard')) renderDashboard();
  if(document.getElementById('apptTbody')) renderApptTable();
  if(document.getElementById('doctorCards')) renderDoctorCards();
  if(document.getElementById('doctorScheduleWrap') && selectedDoctorId) renderDoctorSchedulePanel();
  if(document.getElementById('patientsTbody')) renderPatientsTable();
  if(document.getElementById('receiptsTbody')) renderReceiptsTable();
}

function showPaymentInvoiceComplete(invId){
  const inv = DB.invoices.find(x=>x.id===invId);
  if(!inv) return;
  const p = DB.patients.find(x=>x.id===inv.patientId);
  const body = `
    <div style="text-align:center;padding:6px 0 14px 0;">
      <div style="width:52px;height:52px;border-radius:50%;background:#e2f6ea;color:#1e7e42;display:flex;align-items:center;justify-content:center;margin:0 auto 10px auto;">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <h3 style="font-size:16px;color:var(--teal-900);">Payment Received &amp; Invoice Generated</h3>
      <div style="font-size:13px;color:var(--slate);margin-top:2px;">${esc(p?p.name:'')} — ${esc(p?p.pid:'')}</div>
    </div>
    <div class="card pad" style="background:var(--teal-50);border-style:dashed;">
      <div class="bill-summary" style="margin-top:0;border-top:none;padding-top:0;">
        <div class="row"><span>Invoice No</span><span><strong>${inv.receiptNo}</strong></span></div>
        <div class="row"><span>Payment Method</span><span class="pay-chip">${payIconHtml(inv.method,18)} ${esc(inv.method)}${inv.txn? ' ('+esc(inv.txn)+')':''}</span></div>
        <div class="row"><span>Discount</span><span>- ${fmtMoney(inv.discount)}</span></div>
        <div class="row"><span>Grand Total</span><span>${fmtMoney(inv.total)}</span></div>
        <div class="row" style="color:#1e7e42;font-weight:700;"><span>Paid Amount</span><span>${fmtMoney(invoicePaid(inv))}</span></div>
        <div class="row total" style="${invoiceDue(inv)>0?'color:var(--danger);':''}"><span>Due Amount</span><span>${fmtMoney(invoiceDue(inv))}</span></div>
      </div>
    </div>
  `;
  const foot = `
    <button class="btn btn-ghost" id="pcNewBillBtn">+ New Bill</button>
    <button class="btn btn-ghost" id="pcViewBtn">${ICONS.receipt} View Invoice</button>
    <button class="btn btn-primary" id="pcPrintBtn">${ICONS.print} Print Invoice (A5)</button>
  `;
  openModal('Payment &amp; Invoice', body, foot);
  document.getElementById('pcNewBillBtn').addEventListener('click', ()=>{ closeModal(); switchView('billing'); });
  document.getElementById('pcViewBtn').addEventListener('click', ()=>{ closeModal(); switchView('receipts'); setTimeout(()=>previewReceipt(inv.id), 60); });
  document.getElementById('pcPrintBtn').addEventListener('click', ()=>{ printReceipt(inv, false); });
}

/* ===================== MONEY RECEIPTS ===================== */
let receiptSearch = '';
function renderReceipts(){
  const el = document.getElementById('view-receipts');
  el.innerHTML = `
    <div class="page-head"><div><h2>Invoices</h2><p>View, print and reprint patient billing invoices</p></div></div>
    <div class="search-bar"><span style="color:var(--slate)">${ICONS.search}</span>
      <input type="text" id="receiptSearch" placeholder="Search by Invoice No, Patient Name or Mobile..." value="${esc(receiptSearch)}">
    </div>
    <div class="card"><div class="table-wrap">
      <table><thead><tr><th>Invoice No</th><th>Date</th><th>Patient</th><th>Payment</th><th>Total</th><th>Paid</th><th>Due</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody id="receiptsTbody"></tbody></table>
    </div></div>
  `;
  document.getElementById('receiptSearch').addEventListener('input', (e)=>{ receiptSearch=e.target.value; renderReceiptsTable(); });
  renderReceiptsTable();
}
function renderReceiptsTable(){
  const tbody = document.getElementById('receiptsTbody');
  if(!tbody) return;
  const term = receiptSearch.trim().toLowerCase();
  let list = [...DB.invoices].sort((a,b)=>b.createdAt-a.createdAt);
  if(term){
    list = list.filter(inv=>{
      const p = DB.patients.find(x=>x.id===inv.patientId);
      return inv.receiptNo.toLowerCase().includes(term) || (p&&p.name.toLowerCase().includes(term)) || (p&&p.mobile.includes(term));
    });
  }
  const statusBadgeMap = {Paid:'green', Partial:'amber', Due:'red', Cancelled:'red'};
  tbody.innerHTML = list.length? list.map(inv=>{
    const p = DB.patients.find(x=>x.id===inv.patientId);
    const cancelled = inv.status==='Cancelled';
    const due = invoiceDue(inv);
    const pStatus = invoicePaymentStatus(inv);
    return `<tr style="${cancelled?'opacity:.55;':''}">
      <td><strong>${inv.receiptNo}</strong></td>
      <td>${fmtDate(inv.date)}</td>
      <td>${p? patientLink(p) : 'Unknown'}</td>
      <td><span class="pay-chip">${payIconHtml(inv.method,20)} ${esc(inv.method)}</span></td>
      <td><strong>${fmtMoney(inv.total)}</strong></td>
      <td>${fmtMoney(invoicePaid(inv))}</td>
      <td>${due>0? `<strong style="color:var(--danger);">${fmtMoney(due)}</strong>` : '-'}</td>
      <td><span class="badge ${statusBadgeMap[pStatus]}">${pStatus}</span></td>
      <td>
        <button class="btn btn-ghost btn-sm" onclick="previewReceipt('${inv.id}')">${ICONS.print} View</button>
        <button class="btn btn-ghost btn-sm" onclick="openInvoiceEditor('${inv.id}')">${ICONS.edit} Edit</button>
        ${due>0 && !cancelled? `<button class="btn btn-primary btn-sm" onclick="openAddPaymentForm('${inv.id}')">${ICONS.money} Collect Due</button>` : ''}
      </td>
    </tr>`;
  }).join('') : `<tr class="empty-row"><td colspan="9">No receipts yet</td></tr>`;
}

function receiptHtml(inv, copyLabel){
  const s = DB.settings;
  const p = DB.patients.find(x=>x.id===inv.patientId) || {};
  const cancelled = inv.status==='Cancelled';
  const issued = new Date(inv.createdAt);
  const issuedStr = fmtDateLong(issued)+', '+issued.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const now = new Date();
  const printedStr = fmtDateLong(now)+', '+now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const appt = inv.apptId ? DB.appointments.find(a=>a.id===inv.apptId) : null;
  const apptStr = appt ? fmtDateLong(appt.date)+' ('+weekdayOf(appt.date)+'), '+fmt12(appt.time) : '';
  let attendingDoctorId = inv.doctorId;
  if(!attendingDoctorId && appt){
    attendingDoctorId = appt.doctorId;
  }
  const attendingDoctor = attendingDoctorId ? DB.doctors.find(x=>x.id===attendingDoctorId) : null;
  return `
  <div class="receipt" style="${cancelled?'position:relative;':''}">
    <div class="r-head">
      ${s.logo? `<div class="logo-box"><img src="${s.logo}"></div>` : `<div></div>`}
      <div class="r-head-text">
        <div class="cname" style="font-family:'${s.nameFont||'Poppins'}',sans-serif;color:${s.nameColor||'var(--teal-800)'};">${esc(s.name)}</div>
        ${s.slogan? `<div class="slogan" style="font-family:'${s.sloganFont||'Poppins'}',sans-serif;color:${s.sloganColor||'var(--teal-600)'};">${esc(s.slogan)}</div>`:''}
        <div class="cmeta">${esc(s.address)}<br>Mobile: ${esc(s.mobile)} ${s.whatsapp? ' | WhatsApp: '+esc(s.whatsapp):''}<br>${s.email? esc(s.email)+' | ':''}${esc(s.website||'')}</div>
      </div>
      <div></div>
    </div>
    <div class="r-title">Invoice ${cancelled? '&mdash; <span style="color:#c0334a;">CANCELLED</span>' : (invoiceDue(inv)>0? '&mdash; <span style="color:var(--amber-dark);">PARTIALLY PAID</span>' : '')}</div>
    <div class="r-copy">${copyLabel}</div>
    <div class="r-meta"><span>Invoice No: <strong>${inv.receiptNo}</strong></span><span>Issued: ${issuedStr}</span></div>
    ${apptStr? `<div class="r-meta"><span>Appointment Date &amp; Time: <strong>${apptStr}</strong></span><span></span></div>` : ''}
    <div class="r-meta"><span>Patient: ${esc(p.name||'')}</span><span>ID: ${esc(p.pid||'')}</span></div>
    <div class="r-meta"><span>Age: ${ageLabel(p)}</span><span>Gender: ${esc(p.gender||'-')}</span></div>
    <div class="r-meta"><span>Mobile: ${esc(p.mobile||'')}</span><span>Referred By: ${esc(referredFromLabel(p))}</span></div>
    ${attendingDoctor? `<div class="r-meta"><span>Attending Doctor: ${esc(attendingDoctor.name)}${attendingDoctor.specialty? ' ('+esc(attendingDoctor.specialty)+')':''}</span><span></span></div>` : ''}
    <table style="width:100%;"><thead><tr><th>#</th><th>Description</th><th style="text-align:right;">Amount</th></tr></thead>
      <tbody>${inv.items.map((it,i)=>`<tr><td>${i+1}</td><td>${esc(it.desc)}</td><td style="text-align:right;">${fmtMoney(it.amount)}</td></tr>`).join('')}</tbody>
    </table>
    <div class="r-total">
      <div class="row"><span>Subtotal</span><span>${fmtMoney(inv.subtotal)}</span></div>
      <div class="row"><span>Discount</span><span>- ${fmtMoney(inv.discount)}</span></div>
      <div class="row grand"><span>Grand Total</span><span>${fmtMoney(inv.total)}</span></div>
      <div class="row" style="color:#1e7e42;font-weight:700;"><span>Paid Amount</span><span>${fmtMoney(invoicePaid(inv))}</span></div>
      <div class="row" style="${invoiceDue(inv)>0?'color:var(--danger);font-weight:800;':''}"><span>Due Amount</span><span>${fmtMoney(invoiceDue(inv))}</span></div>
      <div class="row"><span>Payment Method</span><span class="pay-chip">${payIconHtml(inv.method,18)} ${esc(inv.method)}${inv.txn? ' ('+esc(inv.txn)+')':''}</span></div>
    </div>
    <div class="r-sign"><div>Received By</div><div>Patient / Guardian Signature</div></div>
    <div class="r-foot">Thank you for choosing ${esc(s.name)}. Get well soon!</div>
    <div class="r-printed">Printed: ${printedStr}</div>
  </div>`;
}
function previewReceipt(invId, preserveHistory){
  const inv = DB.invoices.find(x=>x.id===invId);
  if(!inv) return;
  const body = `<div class="receipt-preview">${receiptHtml(inv,'ORIGINAL — PATIENT COPY')}</div>`;
  const foot = `
    <label style="display:flex;align-items:center;gap:6px;font-size:12.5px;margin-right:auto;">
      <input type="checkbox" id="dupCheck"> Print duplicate copy also
    </label>
    <button class="btn btn-ghost" id="closeRBtn">Close</button>
    <button class="btn btn-primary" id="printRBtn">${ICONS.print} Print (A5)</button>
  `;
  openModal('Invoice', body, foot, false, preserveHistory);
  document.getElementById('closeRBtn').addEventListener('click', closeModal);
  document.getElementById('printRBtn').addEventListener('click', ()=>{
    const dup = document.getElementById('dupCheck').checked;
    printReceipt(inv, dup);
  });
}
function printReceipt(inv, duplicate){
  const area = document.getElementById('printArea');
  area.innerHTML = receiptHtml(inv,'ORIGINAL — PATIENT COPY') + (duplicate? receiptHtml(inv,'DUPLICATE — CLINIC COPY') : '');
  window.print();
}

/* ---- Admin: edit an existing money receipt / invoice ---- */
let editItems = [];
let editPayMethod = 'Cash';
function openInvoiceEditor(invId){
  requireAdmin(()=>actualOpenInvoiceEditor(invId));
}
function actualOpenInvoiceEditor(invId){
  const inv = DB.invoices.find(x=>x.id===invId);
  if(!inv) return;
  editItems = inv.items.map(it=>({desc:it.desc, amount:it.amount, serviceId:it.serviceId||''}));
  editPayMethod = inv.method;
  const p = DB.patients.find(x=>x.id===inv.patientId);
  const body = `
    <div class="field" style="margin-bottom:12px;"><label>Patient</label>
      <div style="font-size:13.5px;font-weight:600;color:var(--teal-800);">${esc(p?p.name+' — '+p.pid:'Unknown patient')}</div>
    </div>
    <div class="form-grid">
      <div class="field"><label>Invoice No</label><input type="text" value="${esc(inv.receiptNo)}" disabled style="background:#f6f6f6;"></div>
      <div class="field"><label>Bill Date</label><input type="date" id="ef_date" value="${esc(inv.date)}"></div>
      <div class="field span2"><label>Attending Doctor <span class="hint">(shown on the invoice)</span></label>
        <select id="ef_doctor">
          <option value="">— Not applicable / No doctor —</option>
          ${DB.doctors.map(d=>`<option value="${d.id}" ${inv.doctorId===d.id?'selected':''}>${esc(d.name)}${d.specialty?' — '+esc(d.specialty):''}</option>`).join('')}
        </select>
      </div>
    </div>
    <div style="margin-top:16px;">
      <label style="font-size:12px;font-weight:600;color:var(--teal-800);">Service / Item Charges</label>
      <div id="editItemsWrap" style="margin-top:8px;"></div>
      <button class="btn btn-ghost btn-sm" id="editAddItemBtn" style="margin-top:4px;">${ICONS.plus} Add Item</button>
    </div>
    <div class="form-grid" style="margin-top:16px;">
      <div class="field"><label>Discount (Amount)</label><input type="number" id="ef_discount" value="${inv.discount}" min="0"></div>
      <div class="field span2" id="editTxnWrap" style="${inv.method==='Cash'?'display:none;':''}"><label>Transaction / Reference No.</label><input type="text" id="ef_txn" value="${esc(inv.txn||'')}"></div>
    </div>
    <div style="margin-top:14px;">
      <label style="font-size:12px;font-weight:600;color:var(--teal-800);">Payment Method</label>
      <div class="pay-grid" id="editPayGrid"></div>
    </div>
    <div class="bill-summary" id="editBillSummary"></div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;">
      <label style="font-size:12.5px;font-weight:600;display:flex;align-items:center;gap:6px;">
        <input type="checkbox" id="ef_cancelled" ${inv.status==='Cancelled'?'checked':''}> Mark this receipt as Cancelled (excluded from revenue)
      </label>
    </div>
  `;
  const foot = `<button class="btn btn-ghost" id="cancelEBtn">Close</button><button class="btn btn-primary" id="saveEBtn">Save Changes</button>`;
  openModal('Edit Invoice — '+inv.receiptNo, body, foot);
  document.getElementById('cancelEBtn').addEventListener('click', closeModal);
  const renderEditItems = ()=>{
    document.getElementById('editItemsWrap').innerHTML = editItems.map((it,i)=>{
      const isKnown = it.serviceId && it.serviceId!=='__custom__';
      return `
      <div class="item-row">
        <div style="display:flex;flex-direction:column;gap:5px;">
          <select onchange="onEditServiceSelect(${i}, this.value)">
            <option value="">— Select a service —</option>
            ${(DB.services||[]).map(s=>`<option value="${s.id}" ${it.serviceId===s.id?'selected':''}>${esc(s.name)} (${fmtMoney(s.price)})</option>`).join('')}
            <option value="__custom__" ${it.serviceId==='__custom__'?'selected':''}>Other / Custom...</option>
          </select>
          ${(!isKnown)? `<input type="text" placeholder="${it.serviceId==='__custom__'?'Custom service description':'Or type a description directly'}" value="${esc(it.desc)}" oninput="editItems[${i}].desc=this.value">` : ''}
        </div>
        <input type="number" placeholder="Amount" min="0" value="${it.amount}" oninput="editItems[${i}].amount=this.value; updateEditSummary();">
        <input type="text" value="৳" disabled style="text-align:center;background:#f6f6f6;">
        <button type="button" class="remove-item" onclick="editItems.splice(${i},1); if(!editItems.length) editItems.push({desc:'',amount:'',serviceId:''}); renderInvoiceEditItems(); updateEditSummary();">&times;</button>
      </div>
    `;}).join('');
  };
  window.onEditServiceSelect = (i,val)=>{
    if(val===''){ editItems[i].serviceId=''; editItems[i].desc=''; }
    else if(val==='__custom__'){ editItems[i].serviceId='__custom__'; editItems[i].desc=''; }
    else {
      const svc = serviceById(val);
      editItems[i].serviceId = val;
      editItems[i].desc = svc? svc.name : '';
      editItems[i].amount = svc? svc.price : editItems[i].amount;
    }
    renderInvoiceEditItems();
    updateEditSummary();
  };
  window.renderInvoiceEditItems = renderEditItems;
  window.updateEditSummary = ()=>{
    const sub = editItems.reduce((s,it)=>s+(Number(it.amount)||0),0);
    const disc = Number(document.getElementById('ef_discount')?.value||0);
    const total = Math.max(0, sub-disc);
    const paidSoFar = invoicePaid(inv);
    const dueAfter = Math.max(0, Math.round((total-paidSoFar)*100)/100);
    document.getElementById('editBillSummary').innerHTML = `
      <div class="row"><span>Subtotal</span><span>${fmtMoney(sub)}</span></div>
      <div class="row"><span>Discount</span><span>- ${fmtMoney(disc)}</span></div>
      <div class="row total"><span>Total Payable</span><span>${fmtMoney(total)}</span></div>
      <div class="row" style="color:#1e7e42;font-weight:700;"><span>Already Paid</span><span>${fmtMoney(paidSoFar)}</span></div>
      <div class="row" style="${dueAfter>0?'color:var(--danger);font-weight:700;':''}"><span>Due After This Edit</span><span>${fmtMoney(dueAfter)}</span></div>
    `;
  };
  renderEditItems();
  renderPayGrid('editPayGrid', editPayMethod, (id)=>{ editPayMethod=id; document.getElementById('editTxnWrap').style.display = id==='Cash'?'none':''; });
  document.getElementById('editAddItemBtn').addEventListener('click', ()=>{ editItems.push({desc:'',amount:'',serviceId:''}); renderEditItems(); });
  document.getElementById('ef_discount').addEventListener('input', updateEditSummary);
  updateEditSummary();

  document.getElementById('saveEBtn').addEventListener('click', ()=>{
    const items = editItems.filter(it=>it.desc && Number(it.amount)>0);
    if(!items.length){ toast('Please keep at least one billing item'); return; }
    const sub = items.reduce((s,it)=>s+Number(it.amount),0);
    const discount = Number(document.getElementById('ef_discount').value||0);
    const total = Math.max(0, sub-discount);
    inv.date = document.getElementById('ef_date').value || inv.date;
    inv.doctorId = document.getElementById('ef_doctor').value || null;
    inv.items = items;
    inv.subtotal = sub;
    inv.discount = discount;
    inv.total = total;
    inv.method = editPayMethod;
    inv.txn = document.getElementById('ef_txn')?.value || '';
    inv.status = document.getElementById('ef_cancelled').checked ? 'Cancelled' : 'Paid';
    inv.updatedAt = Date.now();
    saveDB();
    closeModal();
    refreshAllBillingViews();
    toast('Invoice '+inv.receiptNo+' updated');
  });
}

/* ===================== SETTINGS ===================== */
function renderSettings(){
  const el = document.getElementById('view-settings');
  if(!adminUnlocked){
    el.innerHTML = `
      <div class="page-head"><div><h2>Clinic / Admin Settings</h2><p>This section is admin-protected</p></div></div>
      <div class="card pad" style="max-width:460px;text-align:center;padding:40px 30px;">
        <div style="width:56px;height:56px;border-radius:50%;background:var(--teal-100);color:var(--teal-700);display:flex;align-items:center;justify-content:center;margin:0 auto 14px auto;">${ICONS.lock}</div>
        <h3 style="font-size:16px;color:var(--teal-900);margin-bottom:6px;">Admin Verification Required</h3>
        <p style="font-size:13px;color:var(--slate);margin-bottom:16px;">Settings, invoice editing, backups, and factory reset are protected. Enter the admin password to continue.</p>
        <button class="btn btn-primary" id="settingsUnlockBtn">${ICONS.unlock} Unlock Settings</button>
      </div>
    `;
    document.getElementById('settingsUnlockBtn').addEventListener('click', ()=>requireAdmin(renderSettings));
    return;
  }
  const s = DB.settings;
  el.innerHTML = `
    <div class="page-head">
      <div><h2>Clinic / Admin Settings</h2><p>Update clinic branding and contact information shown across the system and on receipts</p></div>
      <button class="btn btn-ghost" id="settingsLockBtn">${ICONS.lock} Lock Admin</button>
    </div>
    <div class="card pad" style="max-width:680px;">
      <form id="settingsForm">
        <div class="field" style="margin-bottom:18px;">
          <label>Clinic Logo</label>
          <div class="logo-upload">
            <div class="preview-box">${s.logo? `<img id="logoPreview" src="${s.logo}">` : `<span id="logoPreview">${esc((s.name||'P').charAt(0))}</span>`}</div>
            <div>
              <input type="file" id="sf_logo" accept="image/*">
              <div class="hint" style="margin-top:4px;">Any resolution accepted — a clear, high-resolution PNG or JPG with a transparent or white background looks best. The logo is shown in full (not cropped).</div>
              ${s.logo? `<button type="button" class="btn btn-danger btn-sm" id="removeLogoBtn" style="margin-top:6px;">Remove Logo</button>`:''}
            </div>
          </div>
        </div>
        <div class="form-grid">
          <div class="field span2"><label>Clinic Name</label><input type="text" id="sf_name" value="${esc(s.name)}"></div>
          <div class="field span2"><label>Slogan / Tagline</label><input type="text" id="sf_slogan" value="${esc(s.slogan||'')}" placeholder="e.g. Trusted Care, Advanced Solutions"></div>
          <div class="field span2"><label>Address</label><textarea id="sf_address">${esc(s.address)}</textarea></div>
          <div class="field"><label>Mobile No</label><input type="text" id="sf_mobile" value="${esc(s.mobile)}"></div>
          <div class="field"><label>WhatsApp No</label><input type="text" id="sf_whatsapp" value="${esc(s.whatsapp)}"></div>
          <div class="field"><label>Email</label><input type="email" id="sf_email" value="${esc(s.email)}"></div>
          <div class="field"><label>Website</label><input type="text" id="sf_website" value="${esc(s.website)}"></div>
        </div>

        <fieldset style="margin-top:18px;">
          <legend>Clinic Name &amp; Slogan Style</legend>
          <div class="form-grid">
            <div class="field"><label>Clinic Name Font</label>
              <select id="sf_nameFont">${FONT_OPTIONS.map(f=>`<option value="${f.id}" ${(s.nameFont||'Poppins')===f.id?'selected':''}>${f.label}</option>`).join('')}</select>
            </div>
            <div class="field"><label>Clinic Name Color</label>
              <input type="color" id="sf_nameColor" value="${s.nameColor||'#0b3b3a'}" style="height:38px;padding:3px;">
            </div>
            <div class="field"><label>Slogan Font</label>
              <select id="sf_sloganFont">${FONT_OPTIONS.map(f=>`<option value="${f.id}" ${(s.sloganFont||'Poppins')===f.id?'selected':''}>${f.label}</option>`).join('')}</select>
            </div>
            <div class="field"><label>Slogan Color</label>
              <input type="color" id="sf_sloganColor" value="${s.sloganColor||'#14a098'}" style="height:38px;padding:3px;">
            </div>
          </div>
          <div class="card pad" style="margin-top:12px;background:var(--teal-50);border-style:dashed;">
            <div class="hint" style="margin-bottom:6px;">Live Preview</div>
            <div id="brandPreviewName" style="font-size:20px;font-weight:800;">${esc(s.name)}</div>
            <div id="brandPreviewSlogan" style="font-size:12px;font-style:italic;font-weight:600;margin-top:2px;">${esc(s.slogan||'')}</div>
          </div>
        </fieldset>

        <div style="margin-top:20px;">
          <label style="font-size:12px;font-weight:600;color:var(--teal-800);">App Theme</label>
          <div class="theme-grid" id="themeGrid"></div>
        </div>

        <div style="margin-top:20px;display:flex;justify-content:flex-end;">
          <button type="button" class="btn btn-primary" id="saveSettingsBtn">Save Settings</button>
        </div>
      </form>
    </div>

    <div class="card pad" style="max-width:680px;margin-top:16px;">
      <h3 style="font-size:14px;color:var(--teal-900);margin-bottom:8px;">Data Backup</h3>
      <p style="font-size:12.5px;color:var(--slate);margin-bottom:10px;">All data (patients, appointments, receipts) is stored securely in this browser. Export a backup file anytime, or restore from one.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn btn-ghost" id="exportBtn">Export Backup Now (.json)</button>
        <button class="btn btn-ghost" id="exportExcelBtn">${ICONS.receipt} Export to Excel (.xlsx)</button>
        <label class="btn btn-ghost" style="position:relative;overflow:hidden;">Import Backup
          <input type="file" id="importFile" accept=".json" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
        </label>
      </div>
      <p class="hint" style="margin-top:8px;">The Excel file has a separate sheet each for Patients, Doctors &amp; Services, Appointments, Invoices, and Clinic Settings — open it in Excel, Google Sheets, or LibreOffice.</p>
      <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--line);">
        <h3 style="font-size:13px;color:var(--teal-900);margin-bottom:6px;">Automatic Folder Backup ${autoBackupSupported()? '<span class="badge '+(autoBackupHandle?'green':'gray')+'">'+(autoBackupHandle?'ON':'OFF')+'</span>':'<span class="badge gray">Not supported in this browser</span>'}</h3>
        <p style="font-size:12.5px;color:var(--slate);margin-bottom:10px;">
          ${autoBackupSupported()
            ? 'Pick a folder on this computer. Every time data changes, both a .json backup and a full .xlsx Excel workbook are saved there automatically — no need to click Export.'
            : 'Your browser does not support automatic folder backups (this needs Chrome or Edge). Please use "Export Backup Now" or "Export to Excel" regularly instead.'}
        </p>
        ${autoBackupSupported()? `<button class="btn btn-ghost" id="chooseFolderBtn">${autoBackupHandle? 'Change Backup Folder' : 'Choose Backup Folder'}</button>` : ''}
      </div>
    </div>

    <div class="card pad" style="max-width:680px;margin-top:16px;">
      <h3 style="font-size:14px;color:var(--teal-900);margin-bottom:8px;">Admin Password</h3>
      <p style="font-size:12.5px;color:var(--slate);margin-bottom:10px;">Protects Settings, Invoice editing, backup restore, and factory reset.</p>
      <div class="form-grid">
        <div class="field"><label>Current Password</label><input type="password" id="pw_current" placeholder="Current password"></div>
        <div></div>
        <div class="field"><label>New Password</label><input type="password" id="pw_new1" placeholder="Minimum 4 characters"></div>
        <div class="field"><label>Confirm New Password</label><input type="password" id="pw_new2" placeholder="Re-enter new password"></div>
      </div>
      <div id="pwChangeErr" style="color:var(--danger);font-size:12px;margin-top:8px;display:none;"></div>
      <div style="margin-top:12px;display:flex;justify-content:flex-end;">
        <button class="btn btn-primary btn-sm" id="changePwBtn">${ICONS.lock} Update Password</button>
      </div>
    </div>

    <div class="card pad" style="max-width:680px;margin-top:16px;border-color:#f3c9cf;">
      <h3 style="font-size:14px;color:var(--danger);margin-bottom:8px;display:flex;align-items:center;gap:7px;">${ICONS.alertTriangle} Danger Zone</h3>
      <p style="font-size:12.5px;color:var(--slate);margin-bottom:10px;">Factory reset permanently erases every patient, appointment, doctor, invoice, and setting from this browser. This cannot be undone — export a backup first if you might need this data again.</p>
      <button class="btn btn-danger" id="hardResetBtn">${ICONS.trash} Hard / Factory Reset</button>
    </div>
  `;
  let newLogo = s.logo;
  document.getElementById('sf_logo').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev)=>{
      newLogo = ev.target.result;
      const prev = document.getElementById('logoPreview');
      const img = document.createElement('img');
      img.id='logoPreview'; img.src=newLogo;
      prev.replaceWith(img);
    };
    reader.readAsDataURL(file);
  });
  document.getElementById('removeLogoBtn')?.addEventListener('click', ()=>{ newLogo=''; toast('Logo will be removed on save'); });

  const updateBrandPreview = ()=>{
    const nm = document.getElementById('sf_name').value.trim() || 'Clinic Name';
    const sl = document.getElementById('sf_slogan').value.trim();
    const nf = document.getElementById('sf_nameFont').value;
    const nc = document.getElementById('sf_nameColor').value;
    const sf = document.getElementById('sf_sloganFont').value;
    const sc = document.getElementById('sf_sloganColor').value;
    const pn = document.getElementById('brandPreviewName');
    const ps = document.getElementById('brandPreviewSlogan');
    pn.textContent = nm; pn.style.fontFamily = `'${nf}',sans-serif`; pn.style.color = nc;
    ps.textContent = sl; ps.style.fontFamily = `'${sf}',sans-serif`; ps.style.color = sc;
  };
  ['sf_name','sf_slogan','sf_nameFont','sf_nameColor','sf_sloganFont','sf_sloganColor'].forEach(id=>{
    document.getElementById(id).addEventListener('input', updateBrandPreview);
  });
  updateBrandPreview();

  let chosenTheme = s.theme || 'teal';
  const themeGrid = document.getElementById('themeGrid');
  themeGrid.innerHTML = Object.keys(THEMES).map(id=>{
    const t = THEMES[id];
    return `<div class="theme-swatch ${id===chosenTheme?'active':''}" data-theme="${id}">
      <div class="dots"><span style="background:${t.c[2]}"></span><span style="background:${t.c[6]}"></span><span style="background:${t.c[4]}"></span></div>
      <div class="tname">${t.label}</div>
    </div>`;
  }).join('');
  themeGrid.querySelectorAll('.theme-swatch').forEach(el=>{
    el.addEventListener('click', ()=>{
      chosenTheme = el.dataset.theme;
      themeGrid.querySelectorAll('.theme-swatch').forEach(x=>x.classList.remove('active'));
      el.classList.add('active');
      applyTheme(chosenTheme);
    });
  });

  document.getElementById('saveSettingsBtn').addEventListener('click', ()=>{
    DB.settings = Object.assign({}, DB.settings, {
      name: document.getElementById('sf_name').value.trim() || 'Physiophixx Physiotherapy Clinic',
      slogan: document.getElementById('sf_slogan').value.trim(),
      logo: newLogo,
      address: document.getElementById('sf_address').value.trim(),
      mobile: document.getElementById('sf_mobile').value.trim(),
      whatsapp: document.getElementById('sf_whatsapp').value.trim(),
      email: document.getElementById('sf_email').value.trim(),
      website: document.getElementById('sf_website').value.trim(),
      theme: chosenTheme,
      nameFont: document.getElementById('sf_nameFont').value,
      nameColor: document.getElementById('sf_nameColor').value,
      sloganFont: document.getElementById('sf_sloganFont').value,
      sloganColor: document.getElementById('sf_sloganColor').value
    });
    saveDB();
    toast('Settings saved');
    renderShell();
    switchView('settings');
  });
  document.getElementById('exportBtn').addEventListener('click', ()=>{ downloadBackupFile(); });
  document.getElementById('exportExcelBtn').addEventListener('click', ()=>{ downloadExcelBackup(); });
  document.getElementById('importFile').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev)=>{
      try{
        const data = JSON.parse(ev.target.result);
        if(!confirm('This will replace all current data with the backup file. Continue?')) return;
        DB = Object.assign(defaultDB(), data);
        DB.settings = Object.assign(defaultDB().settings, data.settings||{});
        DB.seq = Object.assign(defaultDB().seq, data.seq||{});
        if(!Array.isArray(DB.services)) DB.services = [];
        saveDB();
        applyTheme(DB.settings.theme||'teal');
        toast('Backup restored');
        renderShell();
      }catch(err){ toast('Invalid backup file'); }
    };
    reader.readAsText(file);
  });
  document.getElementById('chooseFolderBtn')?.addEventListener('click', chooseAutoBackupFolder);
  document.getElementById('settingsLockBtn').addEventListener('click', lockAdmin);

  document.getElementById('changePwBtn').addEventListener('click', async ()=>{
    const cur = document.getElementById('pw_current').value;
    const n1 = document.getElementById('pw_new1').value;
    const n2 = document.getElementById('pw_new2').value;
    const errBox = document.getElementById('pwChangeErr');
    errBox.style.display='none';
    if(DB.settings.adminPasswordHash){
      const curHash = await hashPassword(cur);
      if(curHash !== DB.settings.adminPasswordHash){
        errBox.textContent = 'Current password is incorrect.'; errBox.style.display='block'; return;
      }
    }
    if(n1.length<4){ errBox.textContent='New password must be at least 4 characters.'; errBox.style.display='block'; return; }
    if(n1!==n2){ errBox.textContent='New passwords do not match.'; errBox.style.display='block'; return; }
    DB.settings.adminPasswordHash = await hashPassword(n1);
    saveDB();
    toast('Admin password updated');
    document.getElementById('pw_current').value='';
    document.getElementById('pw_new1').value='';
    document.getElementById('pw_new2').value='';
  });

  document.getElementById('hardResetBtn').addEventListener('click', hardResetSystem);
}

/* ===================== BACKUP UTILITIES ===================== */
function downloadBackupFile(){
  const blob = new Blob([JSON.stringify(DB,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'physiophixx-backup-'+todayStr()+'.json';
  a.click();
}

/* ---------- Excel (.xlsx) export — every table as its own sheet ---------- */
function excelSupported(){ return typeof window.XLSX !== 'undefined'; }
function buildExcelWorkbook(){
  const wb = XLSX.utils.book_new();

  const patientRows = DB.patients.map(p=>({
    'Patient ID': p.pid, 'Name': p.name, 'Age': ageLabel(p), 'Gender': p.gender,
    'Mobile': p.mobile, 'Email': p.email||'', 'NID': p.nid||'',
    'District': p.district||'', 'Upazila': p.upazila||'', 'Area': p.area||'',
    'Referred From': referredFromLabel(p),
    'Registered On': p.createdAt? new Date(p.createdAt).toLocaleString('en-GB') : ''
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(patientRows.length?patientRows:[{'No Data':''}]), 'Patients');

  const doctorRows = [];
  DB.doctors.forEach(d=>{
    if(d.services && d.services.length){
      d.services.forEach(s=> doctorRows.push({
        'Doctor': d.name, 'Specialty': d.specialty||'', 'Slot (min)': d.slotMinutes,
        'Service': s.name, 'Price': s.price
      }));
    } else {
      doctorRows.push({'Doctor': d.name, 'Specialty': d.specialty||'', 'Slot (min)': d.slotMinutes, 'Service':'', 'Price':''});
    }
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(doctorRows.length?doctorRows:[{'No Data':''}]), 'Doctors & Services');

  const apptRows = DB.appointments.map(a=>{
    const p = DB.patients.find(x=>x.id===a.patientId);
    const d = DB.doctors.find(x=>x.id===a.doctorId);
    return {
      'Date': a.date, 'Time': a.time, 'Patient': p?p.name:'', 'Patient ID': p?p.pid:'',
      'Doctor': d?d.name:'', 'Session': a.sessionNo? (a.sessionNo===1?'New':'#'+a.sessionNo) : '',
      'Status': a.status
    };
  }).sort((a,b)=> (a.Date+a.Time).localeCompare(b.Date+b.Time));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(apptRows.length?apptRows:[{'No Data':''}]), 'Appointments');

  const invRows = DB.invoices.map(inv=>{
    const p = DB.patients.find(x=>x.id===inv.patientId);
    const doc = inv.doctorId? DB.doctors.find(x=>x.id===inv.doctorId) : null;
    return {
      'Invoice No': inv.receiptNo, 'Date': inv.date, 'Patient': p?p.name:'', 'Patient ID': p?p.pid:'',
      'Doctor': doc?doc.name:'', 'Items': inv.items.map(it=>it.desc+' ('+fmtMoney(it.amount)+')').join('; '),
      'Subtotal': inv.subtotal, 'Discount': inv.discount, 'Total': inv.total,
      'Paid': invoicePaid(inv), 'Due': invoiceDue(inv), 'Payment Method': inv.method,
      'Status': invoicePaymentStatus(inv)
    };
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(invRows.length?invRows:[{'No Data':''}]), 'Invoices');

  const settingsRows = Object.keys(DB.settings)
    .filter(k=>!['logo','adminPasswordHash'].includes(k))
    .map(k=>({'Setting': k, 'Value': String(DB.settings[k])}));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(settingsRows), 'Clinic Settings');

  return wb;
}
function downloadExcelBackup(){
  if(!excelSupported()){ toast('Excel export library failed to load — check your internet connection and try again.'); return; }
  try{
    const wb = buildExcelWorkbook();
    XLSX.writeFile(wb, 'physiophixx-data-'+todayStr()+'.xlsx');
    toast('Excel file downloaded');
  }catch(err){ toast('Could not generate Excel file'); }
}

function autoBackupSupported(){ return typeof window.showDirectoryPicker === 'function'; }
let autoBackupHandle = null;
async function chooseAutoBackupFolder(){
  try{
    autoBackupHandle = await window.showDirectoryPicker();
    await writeAutoBackup();
    toast('Auto-backup folder set. JSON and Excel backups will save here automatically.');
    renderSettings();
  }catch(err){
    // user cancelled the picker — no action needed
  }
}
async function writeAutoBackup(){
  if(!autoBackupHandle) return;
  try{
    const perm = await autoBackupHandle.queryPermission({mode:'readwrite'});
    if(perm!=='granted'){
      const req = await autoBackupHandle.requestPermission({mode:'readwrite'});
      if(req!=='granted') return;
    }
    const fileHandle = await autoBackupHandle.getFileHandle('physiophixx-autobackup.json', {create:true});
    const writable = await fileHandle.createWritable();
    await writable.write(JSON.stringify(DB,null,2));
    await writable.close();

    if(excelSupported()){
      try{
        const wb = buildExcelWorkbook();
        const xlsxData = XLSX.write(wb, {type:'array', bookType:'xlsx'});
        const xlsxHandle = await autoBackupHandle.getFileHandle('physiophixx-autobackup.xlsx', {create:true});
        const xlsxWritable = await xlsxHandle.createWritable();
        await xlsxWritable.write(xlsxData);
        await xlsxWritable.close();
      }catch(e){ /* Excel snapshot is best-effort; JSON backup above already succeeded */ }
    }
  }catch(err){ /* silent — folder may have been moved/removed */ }
}

/* ===================== INIT ===================== */
function init(){
  applyTheme(DB.settings.theme || 'teal');
  renderShell();
}
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', init);
}else{
  init();
}
