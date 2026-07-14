# Physiophixx — সরাসরি .exe ও .apk পাওয়ার সহজ পথ (কিছু ইনস্টল লাগবে না)

আগেরবার আমি শুধু **সোর্স কোড** দিয়েছিলাম, তাই zip খুললে exe/apk পাননি — সেটা ঠিক আছে, ওগুলো দিয়ে বানাতে হতো। এবার এই ফোল্ডারে **GitHub Actions** সেট করে দিয়েছি, যেটা GitHub-এর নিজের সার্ভারে অটোমেটিক আপনার exe আর apk বানিয়ে দেবে — আপনার কম্পিউটারে Node.js, Android Studio কিছুই ইনস্টল করতে হবে না। শুধু নিচের ধাপগুলো ফলো করুন।

## ধাপ ১: GitHub অ্যাকাউন্ট খুলুন (যদি না থাকে)
https://github.com এ গিয়ে ফ্রি অ্যাকাউন্ট বানান।

## ধাপ ২: নতুন Repository বানান
- GitHub-এ লগইন করে উপরে ডানদিকে **+** → **New repository**
- নাম দিন যেমন `physiophixx-app`
- Public বা Private যেকোনোটা রাখতে পারেন
- **Create repository** ক্লিক করুন

## ধাপ ৩: এই ফোল্ডারের সব ফাইল আপলোড করুন
- নতুন খালি repo পেজে **"uploading an existing file"** লিংকে ক্লিক করুন
- এই zip-টা extract করে ভেতরের সব ফাইল/ফোল্ডার (`.github`, `desktop`, `mobile`) টেনে এনে ড্রপ করুন
  - ⚠️ `.github` ফোল্ডারটা hidden ফোল্ডার হতে পারে, তাই zip extract করার পর ফোল্ডার ভিউতে "hidden files" দেখানো অন করতে হতে পারে (Windows-এ File Explorer → View → Hidden items ✓)
- নিচে **Commit changes** ক্লিক করুন

## ধাপ ৪: Actions অটো চলা শুরু হবে
- আপলোড হওয়ার পর repo-র উপরে **"Actions"** ট্যাবে ক্লিক করুন
- সেখানে **"Build Windows App"** আর **"Build Android App"** — দুইটা workflow রান হতে দেখবেন (হলুদ 🟡 = চলছে, সবুজ ✅ = শেষ, সময় লাগবে ৩-৮ মিনিট)

## ধাপ ৫: exe/apk ডাউনলোড করুন
- যে workflow run সবুজ ✅ হয়ে গেছে, সেটার উপর ক্লিক করুন
- নিচে **"Artifacts"** সেকশনে গিয়ে:
  - **Physiophixx-Windows-App** → এটা ডাউনলোড করলে ভেতরে আসল `.exe` ফাইল পাবেন
  - **Physiophixx-Android-App** → এটা ডাউনলোড করলে ভেতরে আসল `.apk` ফাইল পাবেন

ব্যাস, এটাই এখন সরাসরি ইনস্টল করার মতো ফাইল। exe ডাবল ক্লিক করলে Windows-এ ইনস্টল হবে, apk ফোনে পাঠিয়ে ইনস্টল করলে Android-এ চলবে (ফোনে "Install from unknown sources" অন করতে হতে পারে)।

---

### যদি Actions ট্যাবে run শুরু না হয়
Repo-র **Settings → Actions → General** এ গিয়ে "Workflow permissions" ঠিক আছে কিনা দেখুন, এবং Actions অপশন enabled আছে কিনা চেক করুন (নতুন repo-তে ডিফল্ট এনাবলড থাকে)।

### যদি কোনো ধাপে লাল ❌ (fail) দেখায়
Run-এর উপর ক্লিক করে error log copy করে আমাকে পাঠান, আমি ঠিক করে দেব।
