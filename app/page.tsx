"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Story = {
  year: string;
  eyebrow: string;
  title: string;
  text: string;
  note: string;
  icon: string;
  image: string;
  panel: number;
  alt: string;
  tone: string;
};

const stories: Story[] = [
  {
    year: "故事的起点",
    eyebrow: "01 · 摩天轮上的告白",
    title: "那一天，摩天轮刚好升到最高处",
    text: "我鼓起了很久很久的勇气，终于告诉你：我喜欢你，想陪你看以后所有的风景。那一刻，整座城市都在脚下，而你住进了我的心里。",
    note: "从这一天起，所有风景都有了你的名字。",
    icon: "♥",
    image: "/story-beginning.webp",
    panel: 0,
    alt: "夜晚摩天轮车厢里，棕色小熊向白色小熊告白",
    tone: "night",
  },
  {
    year: "我们有了家",
    eyebrow: "02 · 第一套房子",
    title: "后来，我们有了第一把属于“我们”的钥匙",
    text: "房子不大，东西也还没有摆齐。我们躺在地毯上想象未来的样子——可只要你在，空空的房间就已经有了家的温度。",
    note: "房子是买来的，家是我们一起变出来的。",
    icon: "⌂",
    image: "/story-beginning.webp",
    panel: 1,
    alt: "熊情侣躺在第一套房子的地毯上，身旁放着钥匙",
    tone: "home",
  },
  {
    year: "平凡的晚上",
    eyebrow: "03 · 电视、游戏和你",
    title: "最幸福的事，也可以什么都不做",
    text: "我们一起看综艺，一起玩游戏。原来平凡的晚上，也能成为我最舍不得忘记的时光。",
    note: "世界很大，我们的小沙发刚刚好。",
    icon: "✦",
    image: "/story-beginning.webp",
    panel: 2,
    alt: "熊情侣盖着毯子一起看电视玩游戏",
    tone: "cocoa",
  },
  {
    year: "去成都啦",
    eyebrow: "04 · 一起看大熊猫",
    title: "我们去看了比我们还会撒娇的熊猫",
    text: "走了很多路，吃了很多好吃的，也终于见到那些圆滚滚的小家伙。但我偷偷觉得，那天笑得最可爱的，明明还是你。",
    note: "旅行的意义，是把远方也变成我们的回忆。",
    icon: "❋",
    image: "/story-journey.webp",
    panel: 0,
    alt: "成都竹林里熊情侣开心看一只打滚的大熊猫",
    tone: "bamboo",
  },
  {
    year: "我们结婚了",
    eyebrow: "05 · 成为家人",
    title: "那一天，我把“喜欢你”变成了“一辈子”",
    text: "我牵着你的手，认真地说出承诺。从那天起，我们不只是恋人，也是彼此可以永远回去的家。",
    note: "余生很长，慢慢走，别松手。",
    icon: "∞",
    image: "/story-journey.webp",
    panel: 1,
    alt: "花园婚礼上穿礼服的熊情侣牵着手",
    tone: "wedding",
  },
  {
    year: "上海漫游",
    eyebrow: "06 · 牵手看繁华",
    title: "上海很大，而我只想牵紧你",
    text: "我们穿过热闹的街道，看橱窗、吃甜点、拍下好多照片。世界熙熙攘攘，我的目光却总会回到你身上。",
    note: "人潮拥挤，幸好一回头你就在身边。",
    icon: "◇",
    image: "/story-journey.webp",
    panel: 2,
    alt: "熊情侣牵手逛上海街道和商店",
    tone: "city",
  },
  {
    year: "长隆的一天",
    eyebrow: "07 · 一起看虎鲸",
    title: "虎鲸跃出海面，我们像孩子一样开心",
    text: "巨大的水花落下来，我们一起笑、一起惊呼。和你在一起以后，我好像重新学会了对世界好奇。",
    note: "最好的同伴，是陪你一起对世界说“哇”。",
    icon: "≈",
    image: "/story-family.webp",
    panel: 0,
    alt: "海洋剧场里熊情侣看虎鲸跃出水面",
    tone: "ocean",
  },
  {
    year: "今年",
    eyebrow: "08 · 第三颗心跳",
    title: "亲爱的，我们要有宝宝了",
    text: "你告诉我这个消息的时候，我开心得像站回摩天轮最高处。只是这一次，我们的幸福，多了一个小小的名字。",
    note: "谢谢你如此勇敢，也谢谢你让我们的家更完整。",
    icon: "♡",
    image: "/story-family.webp",
    panel: 1,
    alt: "怀孕的白色小熊和棕色小熊一起看宝宝照片",
    tone: "baby",
  },
  {
    year: "未来的某一天",
    eyebrow: "09 · 一家三口的春天",
    title: "下一站，是我们一家三口的公园",
    text: "以后，我们会牵着她的小手去逛公园，看花、看云，也把我们爱过的世界一点点讲给她听。而我会继续牵着你的手，就像故事开始的那一天。",
    note: "从两个人的故事，走向三个人的春天。",
    icon: "❀",
    image: "/story-family.webp",
    panel: 2,
    alt: "爸爸熊妈妈熊和小女熊牵手逛春日公园",
    tone: "spring",
  },
];

function StoryImage({ story, priority = false }: { story: Story; priority?: boolean }) {
  return (
    <div className="art-frame">
      <img
        className="triptych-image"
        src={story.image}
        alt={story.alt}
        loading={priority ? "eager" : "lazy"}
        style={{ "--panel": story.panel } as CSSProperties}
      />
      <div className="art-wash" aria-hidden="true" />
      <span className="tape tape-one" aria-hidden="true" />
      <span className="tape tape-two" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [babyRevealed, setBabyRevealed] = useState(false);
  const [futureRevealed, setFutureRevealed] = useState(false);
  const [letterEnvelopeOpen, setLetterEnvelopeOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<{ context: AudioContext; timer: number } | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const babyTitleRef = useRef<HTMLHeadingElement | null>(null);
  const futureTitleRef = useRef<HTMLHeadingElement | null>(null);
  const letterTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-story-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18 },
    );
    cards.forEach((card) => observer.observe(card));

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--reading-progress",
        max > 0 ? `${Math.min(100, (window.scrollY / max) * 100)}%` : "0%",
      );
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!giftOpened) {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    }
    document.body.style.overflow = giftOpened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [giftOpened]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        window.clearInterval(audioRef.current.timer);
        void audioRef.current.context.close();
      }
    };
  }, []);

  const playNote = (context: AudioContext, frequency: number, delay = 0) => {
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, context.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + delay + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + delay + 1.1);
    osc.connect(gain).connect(context.destination);
    osc.start(context.currentTime + delay);
    osc.stop(context.currentTime + delay + 1.15);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      window.clearInterval(audioRef.current.timer);
      void audioRef.current.context.close();
      audioRef.current = null;
      setMusicOn(false);
      return;
    }

    const context = new AudioContext();
    const melody = [261.63, 329.63, 392, 523.25];
    let step = 0;
    const chime = () => {
      playNote(context, melody[step % melody.length]);
      playNote(context, melody[(step + 2) % melody.length], 0.22);
      step += 1;
    };
    chime();
    const timer = window.setInterval(chime, 2700);
    audioRef.current = { context, timer };
    setMusicOn(true);
  };

  const openStory = () => {
    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className={`gift-cover ${giftOpened ? "is-open" : ""}`} aria-hidden={giftOpened}>
        <div className="gift-stars" aria-hidden="true"><span>✦</span><span>♥</span><span>✦</span></div>
        <div className="gift-wrap">
          <div className="gift-ribbon ribbon-horizontal" aria-hidden="true" />
          <div className="gift-ribbon ribbon-vertical" aria-hidden="true" />
          <div className="gift-bow" aria-hidden="true"><i /><i /><b>♥</b></div>
          <div className="gift-label">
            <p>TO MY FAVORITE PERSON</p>
            <h1>给老婆的一份<br />生日礼物</h1>
            <span>请亲手拆开 ♡</span>
          </div>
        </div>
        <button
          className="unwrap-button"
          onClick={() => {
            setGiftOpened(true);
            window.setTimeout(() => heroTitleRef.current?.focus({ preventScroll: true }), 850);
          }}
        >
          <span aria-hidden="true">↝</span> 轻点丝带，拆礼物
        </button>
        <p className="gift-whisper">里面装着我们走过的每一步</p>
      </section>

      <div className="site-content" inert={giftOpened ? undefined : true} aria-hidden={!giftOpened}>
      <div className="progress-track" aria-hidden="true"><span /></div>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到故事开头">
          <span className="brand-heart">♥</span>
          <span>我们的故事</span>
          <small>生日特别篇</small>
        </a>
        <button className={`music-button ${musicOn ? "is-playing" : ""}`} onClick={toggleMusic} aria-pressed={musicOn}>
          <span className="music-bars" aria-hidden="true"><i /><i /><i /></span>
          {musicOn ? "关掉轻音乐" : "听着轻音乐"}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker">FOR MY FAVORITE PERSON · 生日快乐</p>
          <h1 ref={heroTitleRef} tabIndex={-1}>从摩天轮，<br />到我们的<span>小宇宙</span></h1>
          <p className="hero-lead">这是我们一起走过的路，<br />也是故事刚刚翻开的新一页。</p>
          <button className="primary-button" onClick={openStory}>
            打开我们的故事 <span aria-hidden="true">↓</span>
          </button>
          <p className="hand-note">写给我最爱的你 ♡</p>
        </div>
        <div className="hero-art" aria-label="摩天轮上的熊情侣">
          <StoryImage story={stories[0]} priority />
          <span className="floating-heart heart-one" aria-hidden="true">♥</span>
          <span className="floating-heart heart-two" aria-hidden="true">♥</span>
          <div className="hero-sticker">我们的第一章<br /><strong>从这里开始</strong></div>
        </div>
        <div className="scroll-whisper" aria-hidden="true"><span />慢慢往下看</div>
      </section>

      <section className="intro" id="our-story">
        <p>一本只属于我们的</p>
        <h2>生日绘本情书</h2>
        <div className="mini-hearts" aria-hidden="true">· ♥ ·</div>
      </section>

      <div className="storyline">
        <div className="thread" aria-hidden="true" />
        {stories.map((story, index) => {
          const isBabyReveal = index === 7;
          const isFutureReveal = index === 8;
          const isRevealed = isBabyReveal ? babyRevealed : isFutureReveal ? futureRevealed : true;

          return (
            <section
              className={`story-card tone-${story.tone} ${index % 2 ? "is-reverse" : ""} ${index === 4 ? "is-wedding-highlight" : ""} ${isBabyReveal || isFutureReveal ? "is-reveal-chapter" : ""} ${isRevealed ? "is-unsealed" : "is-sealed"}`}
              key={story.eyebrow}
              aria-label={isRevealed ? story.eyebrow : isBabyReveal ? "今年最幸福的消息，等待揭晓" : "未来的一页，等待揭晓"}
              data-story-card
            >
              <div className="thread-pin" aria-hidden="true"><span>{story.icon}</span></div>

              {!isRevealed ? (
                <div className="reveal-gate">
                  <p className="reveal-count">{isBabyReveal ? "故事走到这里，幸福悄悄多了一点" : "故事还没有结束"}</p>
                  <div className={`reveal-symbol ${isBabyReveal ? "heartbeat-symbol" : "future-symbol"}`} aria-hidden="true">
                    {isBabyReveal ? "♡" : "?"}
                  </div>
                  <p className="story-eyebrow">{isBabyReveal ? "08 · 今年最幸福的消息" : "09 · 下一页，是我们的未来"}</p>
                  <h2>{isBabyReveal ? "今年，故事里多了一个小小的回声" : "猜猜，春天里会有几双小脚印？"}</h2>
                  <p className="reveal-hint">{isBabyReveal ? "有一句最重要的话，想让你亲手打开。" : "再打开一页，看看我们的下一站。"}</p>
                  <button
                    className="reveal-button"
                    onClick={(event) => {
                      const chapter = event.currentTarget.closest("section");
                      if (isBabyReveal) setBabyRevealed(true);
                      else setFutureRevealed(true);
                      window.setTimeout(() => chapter?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
                      window.setTimeout(
                        () => (isBabyReveal ? babyTitleRef : futureTitleRef).current?.focus({ preventScroll: true }),
                        850,
                      );
                    }}
                    aria-label={isBabyReveal ? "揭晓今年最幸福的消息" : "揭晓一家人的未来"}
                  >
                    <span aria-hidden="true">♥</span>{isBabyReveal ? "轻轻打开这一页" : "看看故事的下一页"}
                  </button>
                </div>
              ) : (
                <>
                  <div className="story-visual reveal-visual"><StoryImage story={story} /></div>
                  <div className="story-copy reveal-copy">
                    <p className="story-year">{story.year}</p>
                    <p className="story-eyebrow">{story.eyebrow}</p>
                    <h2
                      ref={isBabyReveal ? babyTitleRef : isFutureReveal ? futureTitleRef : undefined}
                      tabIndex={isBabyReveal || isFutureReveal ? -1 : undefined}
                    >
                      {story.title}
                    </h2>
                    <p className="story-text">{story.text}</p>
                    <div className="story-note"><span aria-hidden="true">“</span>{story.note}</div>
                    {isBabyReveal && !futureRevealed && (
                      <p className="turn-page-note">别急，下一页还有一个小小的未来在等你 ↓</p>
                    )}
                  </div>
                </>
              )}
            </section>
          );
        })}
      </div>

      <section className="letter-section" data-story-card>
        <div className="letter-sky" aria-hidden="true">
          <span className="cloud cloud-one" />
          <span className="cloud cloud-two" />
          <span className="far-wheel">✺</span>
        </div>
        {!letterEnvelopeOpen ? (
          <div className="envelope-stage">
            <p>故事的最后，留了一封只给你的信</p>
            <button
              className="envelope"
              onClick={() => {
                setLetterEnvelopeOpen(true);
                window.setTimeout(() => letterTitleRef.current?.focus({ preventScroll: true }), 950);
              }}
              aria-label="拆开最后一封生日信"
            >
              <span className="envelope-flap" aria-hidden="true" />
              <span className="wax-seal" aria-hidden="true">♥</span>
              <strong>TO MY LOVE</strong>
              <small>轻点拆封</small>
            </button>
          </div>
        ) : (
          <div className="letter-card is-unfolded">
            <p className="letter-kicker">TO MY LOVE</p>
            <h2 ref={letterTitleRef} tabIndex={-1}>亲爱的，生日快乐。</h2>
            <div className="letter-body">
              <p>谢谢你出现在我的生命里，<br />从恋人，到妻子，<br />再到我们宝宝最温柔的妈妈。</p>
              <p>以前的故事，我很珍惜。<br />以后的故事，我更想和你慢慢写。</p>
            </div>
            <p className="letter-sign">我爱你。<br /><span>今天，明天，还有很久很久。</span></p>
            <button className="seal-button" onClick={() => setLetterOpen(!letterOpen)} aria-expanded={letterOpen}>
              <span aria-hidden="true">♥</span>{letterOpen ? "把这句话收好" : "还有一句最想告诉你"}
            </button>
            <div className={`secret-note ${letterOpen ? "is-open" : ""}`} aria-hidden={!letterOpen}>
              <span className="secret-pin" aria-hidden="true">♡</span>
              “故事走到这里，我最想说的还是——<br />遇见你，是我这一生最幸运的事。”
              <small>你的小熊先生<br />写在我们等待宝宝到来的这一年</small>
            </div>
          </div>
        )}
      </section>

      {letterEnvelopeOpen && (
        <footer>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↟ 再看一遍</button>
          <p>未完待续 · 我们一家三口的故事才刚刚开始</p>
          <span>♥</span>
        </footer>
      )}
      </div>
    </main>
  );
}
