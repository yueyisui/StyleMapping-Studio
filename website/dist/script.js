const translations = {
  zh: {
    title: "StyleMapping Studio｜本地 AI 风格迁移",
    description: "在 Windows 和 Android 设备上本地完成艺术风格与真实风格迁移，照片无需上传。",
    skip: "跳到主要内容",
    navLabel: "主导航",
    menuLabel: "打开导航",
    languageLabel: "语言",
    navModes: "迁移模式",
    navShowcase: "效果展示",
    navDownload: "下载",
    navFaq: "常见问题",
    navGithub: "GitHub",
    heroEyebrow: "本地 AI 图像创作工具",
    heroTitle: "把灵感映射到<br><em>每一张照片</em>",
    heroLead: "上传内容图和参考风格，在自己的电脑或手机上完成艺术风格与真实风格迁移。照片不离开设备。",
    downloadWindows: "下载 Windows 版",
    downloadAndroid: "下载 Android 版",
    trustLabel: "产品特性",
    trustLocal: "完全本地",
    trustNoAccount: "无需账号",
    trustOffline: "无需上传",
    heroCompareLabel: "真实风格迁移前后对比",
    photoMode: "真实风格迁移",
    processedLocally: "本机生成",
    original: "原图",
    result: "结果",
    sliderLabel: "拖动比较原图和结果",
    photoCaption: "保留真实纹理，迁移色彩与光线氛围",
    photoAfterAlt: "真实风格迁移后的秋日湖景",
    photoBeforeAlt: "迁移前的秋日湖景",
    artAfterAlt: "艺术风格迁移后的芝加哥建筑",
    artBeforeAlt: "迁移前的芝加哥建筑",
    privacyKicker: "本地优先",
    privacyTitle: "你的照片，只属于你的设备",
    privacyBody: "没有云端上传，没有等待队列。模型和图片处理都发生在本地，断网也能继续创作。",
    privacyFlowLabel: "本地处理流程",
    yourPhoto: "你的照片",
    localModel: "本地模型",
    yourWork: "你的作品",
    modesTitle: "一种工具，两种视觉语言",
    modesBody: "根据参考图选择合适的迁移方式。艺术模式重构笔触与质感，真实模式专注颜色与光影。",
    artTitle: "艺术风格迁移",
    artBody: "提取绘画的笔触、色块和材质，让照片形成明显的艺术表达。",
    artFeature1: "绘画质感与笔触映射",
    artFeature2: "可调节风格强度",
    artFeature3: "适合插画与创意作品",
    photoTitle: "真实风格迁移",
    photoBody: "保持场景结构和自然纹理，迁移参考照片的色彩、光线与整体氛围。",
    photoFeature1: "保留真实画面细节",
    photoFeature2: "色彩与光影风格化",
    photoFeature3: "适合摄影与调色探索",
    showcaseTitle: "拖动，而不是想象",
    showcaseBody: "直接比较生成前后的变化。结构保持清晰，风格来自你选择的参考图。",
    effectSoft: "柔和",
    effectWarm: "暖色",
    effectDetail: "保留细节",
    effectContrast: "高对比",
    artExample: "艺术模式示例",
    dragHint: "拖动查看",
    stepsTitle: "三步完成一次风格迁移",
    step1Title: "选择内容图",
    step1Body: "从电脑、相册或相机选择需要处理的照片。",
    step2Title: "添加风格图",
    step2Body: "使用任意绘画或照片作为视觉参考。",
    step3Title: "本地生成",
    step3Body: "调整模式与强度，在设备上生成并保存作品。",
    downloadsTitle: "选择你的设备",
    downloadsBody: "Windows 优先推荐支持 CUDA 加速的 GPU 完整版；没有兼容 NVIDIA 显卡时，可以选择体积更小的 CPU 版。",
    recommended: "推荐",
    universal: "通用",
    cpuBody: "更小、更通用，适合没有 NVIDIA 显卡或只需要 CPU 运行的电脑。",
    packageSize: "安装包",
    requirement: "要求",
    acceleration: "加速",
    downloadZip: "下载 ZIP",
    downloadBaidu: "百度网盘下载",
    baiduMirror: "百度网盘备用下载 · 提取码",
    accessCode: "提取码",
    androidBody: "适用于 Android 10 及以上手机，支持系统硬件加速。",
    downloadApk: "下载 APK",
    gpuBody: "推荐的完整版本。支持 NVIDIA GPU 与 CUDA 加速，也可以切换为 CPU 运行。",
    viewRelease: "查看发布页",
    inDevelopment: "开发中",
    iosBody: "原生版本已经开始开发，完成签名与真机验证后开放。",
    statusLabel: "状态",
    sourceReady: "源码已准备",
    comingSoon: "敬请期待",
    releaseNote: "CPU 与 Android 由 GitHub Releases 提供并附带 <b>SHA-256</b> 校验值，同时提供百度网盘备用下载；GPU 完整包通过百度网盘分发。",
    faqTitle: "下载之前，你可能想知道",
    faq1Q: "我的照片会上传到服务器吗？",
    faq1A: "不会。桌面版和手机版都在用户设备上完成模型推理，网站只用于展示和下载。",
    faq2Q: "Windows 版需要安装 Python 或 PyTorch 吗？",
    faq2A: "不需要。便携版已经包含运行环境，解压完整文件夹后即可启动。",
    faq3Q: "没有 NVIDIA 显卡可以使用吗？",
    faq3A: "可以。请选择 Windows CPU 版；GPU 版则专门为兼容的 NVIDIA 显卡准备。",
    faq4Q: "输出图片会改变原图比例吗？",
    faq4A: "不会。应用会按内容图比例调整尺寸，并将边长对齐到模型支持的规格。",
    faq5Q: "为什么 Windows GPU 版比较大？",
    faq5A: "它包含 PyTorch、CUDA 运行库和模型，确保新电脑不需要手动配置开发环境。",
    creatorTitle: "由创作者独立设计与开发",
    creatorBody: "StyleMapping Studio 源于对图像风格迁移的研究，希望让更多人无需配置开发环境，也能在自己的设备上使用它。",
    createdBy: "作者",
    personalHomepage: "个人主页",
    closingTitle: "把计算留在设备，把作品留给自己。",
    chooseVersion: "选择版本",
    footerText: "本地优先的艺术与真实风格迁移工具。",
    releasePending: "公开发布后开放下载"
  },
  en: {
    title: "StyleMapping Studio | Local AI Style Transfer",
    description: "Run artistic and photorealistic style transfer locally on Windows and Android. Your photos never leave your device.",
    skip: "Skip to main content",
    navLabel: "Main navigation",
    menuLabel: "Open navigation",
    languageLabel: "Language",
    navModes: "Modes",
    navShowcase: "Showcase",
    navDownload: "Download",
    navFaq: "FAQ",
    navGithub: "GitHub",
    heroEyebrow: "LOCAL AI IMAGE STUDIO",
    heroTitle: "Map inspiration onto<br><em>every photograph</em>",
    heroLead: "Combine a content image with a visual reference to create artistic or photorealistic transfers directly on your computer or phone. Your photos stay on-device.",
    downloadWindows: "Download for Windows",
    downloadAndroid: "Download for Android",
    trustLabel: "Product highlights",
    trustLocal: "Runs locally",
    trustNoAccount: "No account",
    trustOffline: "No upload",
    heroCompareLabel: "Photorealistic style transfer comparison",
    photoMode: "Photorealistic transfer",
    processedLocally: "Made on-device",
    original: "Original",
    result: "Result",
    sliderLabel: "Drag to compare the original and result",
    photoCaption: "Preserve natural texture while transferring color and light",
    photoAfterAlt: "Autumn lakeside after photorealistic style transfer",
    photoBeforeAlt: "Original autumn lakeside photograph",
    artAfterAlt: "Chicago buildings after artistic style transfer",
    artBeforeAlt: "Original photograph of Chicago buildings",
    privacyKicker: "LOCAL FIRST",
    privacyTitle: "Your photos stay on your device",
    privacyBody: "No cloud uploads and no waiting queues. The model and image processing run locally, so you can keep creating offline.",
    privacyFlowLabel: "Local processing flow",
    yourPhoto: "Your photo",
    localModel: "Local model",
    yourWork: "Your artwork",
    modesTitle: "One tool, two visual languages",
    modesBody: "Choose the transfer mode that fits your reference. Artistic mode reshapes brushwork and texture; photorealistic mode focuses on color and light.",
    artTitle: "Artistic style transfer",
    artBody: "Map brushwork, color blocks, and material qualities from a painting into a distinct artistic image.",
    artFeature1: "Painterly texture and brushwork",
    artFeature2: "Adjustable style intensity",
    artFeature3: "Ideal for illustration and creative work",
    photoTitle: "Photorealistic transfer",
    photoBody: "Keep scene structure and natural detail while transferring the reference photo's color, lighting, and atmosphere.",
    photoFeature1: "Preserves realistic detail",
    photoFeature2: "Color and lighting transfer",
    photoFeature3: "Ideal for photography experiments",
    showcaseTitle: "Drag. Don't imagine.",
    showcaseBody: "Compare the transformation directly. Structure stays clear while the visual style comes from your chosen reference.",
    effectSoft: "Soft",
    effectWarm: "Warm",
    effectDetail: "Detailed",
    effectContrast: "High contrast",
    artExample: "Artistic mode example",
    dragHint: "Drag to compare",
    stepsTitle: "Three steps to a new visual style",
    step1Title: "Choose a content image",
    step1Body: "Pick a photo from your computer, gallery, files, or camera.",
    step2Title: "Add a style reference",
    step2Body: "Use any painting or photograph as the visual reference.",
    step3Title: "Generate locally",
    step3Body: "Adjust mode and intensity, then generate and save on your device.",
    downloadsTitle: "Choose your device",
    downloadsBody: "For Windows, the full GPU edition with CUDA acceleration is recommended. Choose the smaller CPU edition when a compatible NVIDIA GPU is unavailable.",
    recommended: "Recommended",
    universal: "Universal",
    cpuBody: "Smaller and more universal, for computers without an NVIDIA GPU or for CPU-only use.",
    packageSize: "Package",
    requirement: "Requires",
    acceleration: "Acceleration",
    downloadZip: "Download ZIP",
    downloadBaidu: "Download from Baidu",
    baiduMirror: "Baidu mirror · code",
    accessCode: "Access code",
    androidBody: "For phones running Android 10 or later, with system hardware acceleration.",
    downloadApk: "Download APK",
    gpuBody: "The recommended full edition. Supports NVIDIA GPU and CUDA acceleration, with an optional CPU mode.",
    viewRelease: "View release",
    inDevelopment: "In development",
    iosBody: "Native development is underway. It will open after signing and device validation are complete.",
    statusLabel: "Status",
    sourceReady: "Source prepared",
    comingSoon: "Coming soon",
    releaseNote: "CPU and Android packages are available from GitHub Releases with <b>SHA-256</b> checksums and Baidu mirrors. The full GPU package is distributed through Baidu Netdisk.",
    faqTitle: "Before you download",
    faq1Q: "Will my photos be uploaded to a server?",
    faq1A: "No. Both desktop and mobile editions run inference on your device. This website is only for the showcase and downloads.",
    faq2Q: "Do I need to install Python or PyTorch on Windows?",
    faq2A: "No. The portable package contains its runtime. Extract the entire folder and start the app.",
    faq3Q: "Can I use it without an NVIDIA graphics card?",
    faq3A: "Yes. Choose the Windows CPU edition. The GPU edition is built specifically for compatible NVIDIA graphics cards.",
    faq4Q: "Will the output change my image's aspect ratio?",
    faq4A: "No. The app keeps the content image's aspect ratio while aligning dimensions to model-compatible values.",
    faq5Q: "Why is the Windows GPU package so large?",
    faq5A: "It bundles PyTorch, CUDA runtime libraries, and the model so a new computer does not need a development environment.",
    creatorTitle: "Independently designed and developed",
    creatorBody: "StyleMapping Studio grew from research into image style transfer, with the goal of making it usable on personal devices without configuring a development environment.",
    createdBy: "Creator",
    personalHomepage: "Personal website",
    closingTitle: "Keep the computation on your device—and the artwork in your hands.",
    chooseVersion: "Choose a version",
    footerText: "A local-first studio for artistic and photorealistic style transfer.",
    releasePending: "Downloads open after the public release"
  }
};

const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-language]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const lang = translations[language] ? language : "zh";
  const copy = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) element.alt = value;
  });

  root.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = copy.title;
  if (metaDescription) metaDescription.content = copy.description;
  languageButtons.forEach((button) => {
    const active = button.dataset.language === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-release-pending]").forEach((element) => {
    element.title = copy.releasePending;
  });
  localStorage.setItem("stylemapping-language", lang);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelectorAll("[data-compare]").forEach((comparison) => {
  const slider = comparison.querySelector('input[type="range"]');
  if (!slider) return;
  const update = () => comparison.style.setProperty("--split", `${slider.value}%`);
  slider.addEventListener("input", update);
  update();
});

function resolveRepository() {
  const host = window.location.hostname.toLowerCase();
  if (!host.endsWith(".github.io")) return null;
  const owner = host.slice(0, -".github.io".length);
  const repo = window.location.pathname.split("/").filter(Boolean)[0];
  if (!owner || !repo) return null;
  return `https://github.com/${owner}/${repo}`;
}

const authorProfileUrl = "https://github.com/yueyisui";
const repositoryUrl = resolveRepository() || "https://github.com/yueyisui/StyleMapping-Studio";
document.querySelectorAll("[data-github-link]").forEach((link) => {
  link.href = repositoryUrl || authorProfileUrl;
});

const downloadTargets = repositoryUrl
  ? {
      "windows-cpu": `${repositoryUrl}/releases/download/v0.1.0-beta/StyleMapping-Studio-Windows-CPU.zip`,
      android: `${repositoryUrl}/releases/download/v0.1.0-beta/StyleMapping-Studio-Android.apk`,
      "windows-gpu": "https://pan.baidu.com/s/1rxog7HNFYwFWfMNj0-955w?pwd=21hs"
    }
  : null;

document.querySelectorAll("[data-download]").forEach((link) => {
  const target = downloadTargets?.[link.dataset.download];
  if (target) {
    link.href = target;
  } else {
    link.href = "#downloads";
    link.dataset.releasePending = "true";
  }
});

const mirrorTargets = {
  "windows-cpu": "https://pan.baidu.com/s/1nV-9wP16F7swJOjM8bfxDw?pwd=3j4f",
  android: "https://pan.baidu.com/s/1ihqIyN6TyGy0Rsv0iCy4tg?pwd=4tv9"
};

document.querySelectorAll("[data-mirror]").forEach((link) => {
  link.href = mirrorTargets[link.dataset.mirror] || "#downloads";
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("open", open);
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const initialLanguage = localStorage.getItem("stylemapping-language") ||
  (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
setLanguage(initialLanguage);

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
