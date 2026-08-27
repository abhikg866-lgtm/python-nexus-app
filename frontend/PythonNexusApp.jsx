import React, { useEffect, useRef, useState } from "react";
import {
  Home,
  BookOpen,
  Dumbbell,
  FolderKanban,
  User,
  ChevronLeft,
  ChevronRight,
  Play,
  Lock,
  CheckCircle2,
  Flame,
  Bot,
  Send,
  Loader2,
  Trophy,
  Code2,
  RotateCcw,
  Plus,
  Trash2,
  Check,
} from "lucide-react";

const BACKEND_URL = "https://YOUR-BACKEND-URL.vercel.app";

const UI = {
  en: {
    tagline: "Learn · Code · Build Your Future",
    getStarted: "Get Started",
    home: "Home",
    learn: "Learn",
    practice: "Practice",
    projects: "Projects",
    profile: "Profile",
    hiLearner: "Hi Learner! 👋",
    keepGrowing: "Keep learning, keep growing!",
    yourProgress: "Your Progress",
    lessons: "Lessons",
    xp: "XP",
    streak: "Day Streak",
    coursePath: "Course Path",
    comingSoon: "Coming Soon",
    locked: "Locked",
    part: "Part",
    next: "Next",
    previous: "Previous",
    runCode: "Run",
    output: "Output:",
    quizTime: "Quiz Time!",
    correct: "Correct! 🎉",
    incorrect: "Not quite — try again",
    finishLesson: "Finish & Claim XP",
    aiTutor: "AI Tutor",
    askAnything: "Ask anything about this lesson!",
    typeQuestion: "Type your question...",
    thinking: "Thinking...",
    settings: "Settings",
    chooseLanguage: "Choose Language",
    back: "Back",
    score: "Score",
    codePlayground: "Code Playground",
    projectDetails: "Project Details",
    difficulty: "Difficulty",
    skills: "Skills you'll use",
    passToUnlock: "Pass the quiz to complete this lesson.",
    startProject: "Start Project",
    projectWorkspace: "Project Workspace",
    reset: "Reset",
    saveProject: "Complete Project",
    projectComplete: "Project completed! 🎉",
    addTask: "Add task",
    taskPlaceholder: "Enter a task...",
    calculator: "Calculator",
    clear: "Clear",
    equals: "=",
    practiceTitle: "Practice",
    practiceText: "Complete a lesson quiz to test your Python knowledge.",
    startQuiz: "Start Quiz",
  },

  hi: {
    tagline: "सीखो · कोड करो · अपना भविष्य बनाओ",
    getStarted: "शुरू करें",
    home: "होम",
    learn: "सीखें",
    practice: "अभ्यास",
    projects: "प्रोजेक्ट्स",
    profile: "प्रोफाइल",
    hiLearner: "नमस्ते Learner! 👋",
    keepGrowing: "सीखते रहो, बढ़ते रहो!",
    yourProgress: "आपकी प्रगति",
    lessons: "पाठ",
    xp: "XP",
    streak: "दिन स्ट्रीक",
    coursePath: "कोर्स पाथ",
    comingSoon: "जल्द आ रहा है",
    locked: "लॉक्ड",
    part: "भाग",
    next: "आगे",
    previous: "पीछे",
    runCode: "रन करें",
    output: "आउटपुट:",
    quizTime: "क्विज़ टाइम!",
    correct: "सही जवाब! 🎉",
    incorrect: "गलत — फिर से कोशिश करें",
    finishLesson: "पूरा करें और XP लें",
    aiTutor: "AI ट्यूटर",
    askAnything: "इस lesson के बारे में कुछ भी पूछें!",
    typeQuestion: "अपना सवाल लिखें...",
    thinking: "सोच रहा हूँ...",
    settings: "सेटिंग्स",
    chooseLanguage: "भाषा चुनें",
    back: "वापस",
    score: "स्कोर",
    codePlayground: "कोड प्लेग्राउंड",
    projectDetails: "प्रोजेक्ट विवरण",
    difficulty: "कठिनाई",
    skills: "इस्तेमाल होने वाले skills",
    passToUnlock: "इस lesson को पूरा करने के लिए quiz pass करें.",
    startProject: "प्रोजेक्ट शुरू करें",
    projectWorkspace: "प्रोजेक्ट वर्कस्पेस",
    reset: "रीसेट",
    saveProject: "प्रोजेक्ट पूरा करें",
    projectComplete: "प्रोजेक्ट पूरा हो गया! 🎉",
    addTask: "टास्क जोड़ें",
    taskPlaceholder: "टास्क लिखें...",
    calculator: "कैलकुलेटर",
    clear: "क्लियर",
    equals: "=",
    practiceTitle: "अभ्यास",
    practiceText: "अपनी Python knowledge test करने के लिए lesson quiz पूरा करें.",
    startQuiz: "क्विज़ शुरू करें",
  },

  es: {
    tagline: "Aprende · Programa · Construye tu Futuro",
    getStarted: "Comenzar",
    home: "Inicio",
    learn: "Aprender",
    practice: "Práctica",
    projects: "Proyectos",
    profile: "Perfil",
    hiLearner: "¡Hola, Estudiante! 👋",
    keepGrowing: "¡Sigue aprendiendo, sigue creciendo!",
    yourProgress: "Tu Progreso",
    lessons: "Lecciones",
    xp: "XP",
    streak: "Días seguidos",
    coursePath: "Ruta del Curso",
    comingSoon: "Próximamente",
    locked: "Bloqueado",
    part: "Parte",
    next: "Siguiente",
    previous: "Anterior",
    runCode: "Ejecutar",
    output: "Salida:",
    quizTime: "¡Hora del Quiz!",
    correct: "¡Correcto! 🎉",
    incorrect: "No es correcto — intenta de nuevo",
    finishLesson: "Terminar y Reclamar XP",
    aiTutor: "Tutor IA",
    askAnything: "¡Pregunta lo que quieras sobre esta lección!",
    typeQuestion: "Escribe tu pregunta...",
    thinking: "Pensando...",
    settings: "Ajustes",
    chooseLanguage: "Elige Idioma",
    back: "Atrás",
    score: "Puntaje",
    codePlayground: "Zona de Código",
    projectDetails: "Detalles del Proyecto",
    difficulty: "Dificultad",
    skills: "Habilidades a usar",
    passToUnlock: "Aprueba el quiz para completar esta lección.",
    startProject: "Iniciar Proyecto",
    projectWorkspace: "Espacio del Proyecto",
    reset: "Reiniciar",
    saveProject: "Completar Proyecto",
    projectComplete: "¡Proyecto completado! 🎉",
    addTask: "Añadir tarea",
    taskPlaceholder: "Escribe una tarea...",
    calculator: "Calculadora",
    clear: "Limpiar",
    equals: "=",
    practiceTitle: "Práctica",
    practiceText: "Completa un quiz para probar tus conocimientos de Python.",
    startQuiz: "Iniciar Quiz",
  },
};

const LANG = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

const MODULES = [
  {
    id: 1,
    icon: "🐍",
    color: "from-pink-500 to-rose-500",
    lessonsCount: 12,
    name: {
      en: "Python Introduction",
      hi: "Python परिचय",
      es: "Introducción a Python",
    },
  },
  {
    id: 2,
    icon: "💻",
    color: "from-sky-500 to-blue-500",
    lessonsCount: 8,
    name: {
      en: "Setup & Installation",
      hi: "सेटअप और इंस्टॉलेशन",
      es: "Instalación",
    },
  },
  {
    id: 3,
    icon: "🔷",
    color: "from-amber-400 to-orange-500",
    lessonsCount: 15,
    real: "var1",
    name: {
      en: "Variables & Data Types",
      hi: "Variables और Data Types",
      es: "Variables y Tipos de Datos",
    },
  },
  {
    id: 4,
    icon: "🧩",
    color: "from-amber-500 to-yellow-400",
    lessonsCount: 10,
    name: {
      en: "Operators",
      hi: "ऑपरेटर्स",
      es: "Operadores",
    },
  },
  {
    id: 5,
    icon: "🔀",
    color: "from-violet-500 to-purple-500",
    lessonsCount: 14,
    name: {
      en: "Conditions",
      hi: "कंडीशन्स",
      es: "Condiciones",
    },
  },
  {
    id: 6,
    icon: "🔁",
    color: "from-emerald-500 to-teal-500",
    lessonsCount: 16,
    real: "loop1",
    name: {
      en: "Loops",
      hi: "लूप्स",
      es: "Bucles",
    },
  },
  {
    id: 7,
    icon: "⚙️",
    color: "from-amber-400 to-orange-400",
    lessonsCount: 15,
    name: {
      en: "Functions",
      hi: "फंक्शन्स",
      es: "Funciones",
    },
  },
  {
    id: 8,
    icon: "📦",
    color: "from-pink-500 to-fuchsia-500",
    lessonsCount: 9,
    name: {
      en: "Modules & Packages",
      hi: "मॉड्यूल्स और पैकेजेस",
      es: "Módulos",
    },
  },
];

const LESSONS = {
  var1: {
    title: "What is a Variable?",
    parts: [
      {
        h: "The Idea",
        b: "A variable is a labeled box where you store a value in memory, so you can use it later by name.",
      },
      {
        h: "Creating a Variable",
        b: "In Python, write a name, an equals sign, and a value.",
        c: 'name = "Arjun"\nage = 20\ncity = "Delhi"',
      },
      {
        h: "Different Types",
        b: "Variables can hold text, whole numbers, decimals, or True/False.",
        c: 'price = 49.99\nis_open = True\nprint(price, is_open)',
      },
      {
        h: "Try It Yourself",
        b: "Change the values and press Run.",
        c: 'favorite_lang = "Python"\nprint("I love", favorite_lang)',
      },
    ],
    quiz: [
      {
        q: "How do you create a variable in Python?",
        o: ["var x = 10", "x = 10", "int x = 10", "x := 10"],
        a: 1,
      },
      {
        q: "What type is age = 20?",
        o: ["string", "int", "float", "boolean"],
        a: 1,
      },
    ],
  },

  loop1: {
    title: "For Loops",
    parts: [
      {
        h: "Why Loops?",
        b: "A loop repeats an action many times without copy-pasting code.",
      },
      {
        h: "The for Loop",
        b: "range(5) gives 0,1,2,3,4.",
        c: 'for i in range(5):\n    print(i)',
      },
      {
        h: "Looping with a Message",
        b: "Use print() inside a loop to repeat a message.",
        c: 'for i in range(3):\n    print("Count:", i)',
      },
      {
        h: "Try It Yourself",
        b: "Change the range number and Run it.",
        c: 'for i in range(4):\n    print("Hello", i)',
      },
    ],
    quiz: [
      {
        q: "How many times does range(5) loop?",
        o: ["4", "5", "6", "Infinite"],
        a: 1,
      },
      {
        q: "Which keyword starts a for loop?",
        o: ["loop", "for", "repeat", "foreach"],
        a: 1,
      },
    ],
  },
};

function run(code) {
  const vars = {};
  const out = [];

  const val = (x) => {
    x = x.trim();

    if (
      (x.startsWith('"') && x.endsWith('"')) ||
      (x.startsWith("'") && x.endsWith("'"))
    ) {
      return x.slice(1, -1);
    }

    if (x === "True") return true;
    if (x === "False") return false;

    if (x in vars) return vars[x];

    if (x !== "" && !isNaN(x)) return Number(x);

    return x;
  };

  const print = (x) => {
    out.push(
      x
        .split(",")
        .map(val)
        .join(" ")
    );
  };

  const lines = code.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();

    const loop = l.match(
      /^for\s+(\w+)\s+in\s+range\((\d+)\):$/
    );

    if (loop) {
      let j = i + 1;
      const body = [];

      while (
        j < lines.length &&
        /^\s+/.test(lines[j])
      ) {
        body.push(lines[j].trim());
        j++;
      }

      for (let k = 0; k < Number(loop[2]); k++) {
        vars[loop[1]] = k;

        body.forEach((x) => {
          const p = x.match(/^print\((.*)\)$/);

          if (p) {
            print(p[1]);
          }
        });
      }

      i = j - 1;
    } else {
      const p = l.match(/^print\((.*)\)$/);
      const a = l.match(/^(\w+)\s*=\s*(.+)$/);

      if (p) {
        print(p[1]);
      } else if (a) {
        vars[a[1]] = val(a[2]);
      }
    }
  }

  return out.length ? out : ["(no output)"];
}

function Header({ title, back }) {
  return (
    <div className="flex items-center justify-between px-4 pt-3 pb-2">
      <button
        onClick={back}
        className="p-1 text-white/80 active:scale-90"
      >
        <ChevronLeft size={22} />
      </button>

      <h1 className="text-white font-semibold text-base truncate">
        {title}
      </h1>

      <div className="w-6" />
    </div>
  );
}

function Nav({ screen, setScreen, t }) {
  const items = [
    ["home", t.home, Home],
    ["course", t.learn, BookOpen],
    ["practice", t.practice, Dumbbell],
    ["projects", t.projects, FolderKanban],
    ["settings", t.profile, User],
  ];

  return (
    <div className="flex justify-around border-t border-white/10 bg-slate-950/95 py-2">
      {items.map(([key, label, Icon]) => (
        <button
          key={key}
          onClick={() => setScreen(key)}
          className={`flex flex-col items-center text-[10px] ${
            screen === key
              ? "text-sky-400"
              : "text-slate-500"
          }`}
        >
          <Icon size={20} />
          {label}
        </button>
      ))}
    </div>
  );
}

function HomeScreen({ go, t, p }) {
  return (
    <div className="h-full overflow-y-auto bg-slate-950 px-4 pt-4 pb-4">
      <div className="flex justify-between mb-4">
        <div>
          <b className="text-white">{t.hiLearner}</b>

          <p className="text-slate-400 text-xs">
            {t.keepGrowing}
          </p>
        </div>

        <span className="text-orange-300 text-xs">
          <Flame size={14} className="inline" />{" "}
          {p.streak}
        </span>
      </div>

      <div className="bg-gradient-to-r from-violet-700 to-sky-600 rounded-2xl p-4 mb-4">
        <p className="text-white/80 text-xs">
          {t.yourProgress}
        </p>

        <b className="text-white text-lg">
          {p.completed.length} / 2 {t.lessons}
        </b>

        <p className="text-white/70 text-xs">
          {p.xp} XP
        </p>

        <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all"
            style={{
              width: `${Math.min(
                100,
                (p.completed.length / 2) * 100
              )}%`,
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <b className="text-white">{t.coursePath}</b>

        <button
          onClick={() => go("course")}
          className="text-sky-400 text-xs"
        >
          View all
        </button>
      </div>

      <div className="space-y-2">
        {MODULES.filter((m) => m.real).map((m) => (
          <button
            key={m.id}
            onClick={() => go(m.real)}
            className="w-full flex items-center gap-3 bg-slate-900 border border-white/10 rounded-xl p-3 active:scale-[0.98]"
          >
            <span
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center`}
            >
              {m.icon}
            </span>

            <span className="flex-1 text-left text-white text-sm">
              {m.name[t._lang]}

              <small className="block text-slate-400">
                {LESSONS[m.real].title}
              </small>
            </span>

            {p.completed.includes(m.real) ? (
              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />
            ) : (
              <ChevronRight
                size={18}
                className="text-slate-500"
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={() => go("projects")}
        className="w-full mt-4 flex items-center gap-3 bg-slate-900 border border-violet-500/30 rounded-xl p-4 text-white text-sm"
      >
        <Code2 className="text-violet-400" size={21} />
        <span className="flex-1 text-left">
          Build a Project
          <small className="block text-slate-500">
            Practice what you learn
          </small>
        </span>
        <ChevronRight size={18} />
      </button>

      <button
        onClick={() => go("tutor")}
        className="w-full mt-3 flex gap-2 bg-slate-900 border border-sky-500/40 rounded-xl p-3 text-white text-sm"
      >
        <Bot
          size={20}
          className="text-sky-400"
        />
        {t.aiTutor} →
      </button>
    </div>
  );
}

function Course({ go, t, p }) {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.coursePath}
        back={() => go("home")}
      />

      <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-4">
        {MODULES.map((m) => {
          const available = Boolean(m.real);
          const completed = available &&
            p.completed.includes(m.real);

          return (
            <button
              key={m.id}
              disabled={!available}
              onClick={() =>
                available && go(m.real)
              }
              className={`w-full flex gap-3 p-3 rounded-xl border border-white/10 ${
                available
                  ? "bg-slate-900 active:scale-[0.98]"
                  : "bg-slate-900/50 opacity-60"
              }`}
            >
              <span
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center`}
              >
                {m.icon}
              </span>

              <span className="flex-1 text-left text-white text-sm">
                {m.id}. {m.name[t._lang]}

                <small className="block text-slate-400">
                  {available
                    ? LESSONS[m.real].title
                    : `${m.lessonsCount} ${t.lessons} · ${t.comingSoon}`}
                </small>
              </span>

              {completed ? (
                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />
              ) : available ? (
                <ChevronRight size={18} />
              ) : (
                <Lock size={16} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Lesson({ go, t, id, complete }) {
  const [i, setI] = useState(0);
  const [quiz, setQuiz] = useState(false);
  const [code, setCode] = useState("");
  const [out, setOut] = useState(null);

  const lesson = LESSONS[id];

  useEffect(() => {
    setCode(lesson.parts[i].c || "");
    setOut(null);
  }, [i, id]);

  if (quiz) {
    return (
      <Quiz
        t={t}
        data={lesson.quiz}
        done={() => {
          complete(id);
          go("home");
        }}
        back={() => setQuiz(false)}
      />
    );
  }

  const part = lesson.parts[i];

  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={lesson.title}
        back={() => go("course")}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex gap-1 my-3">
          {lesson.parts.map((_, x) => (
            <div
              key={x}
              className={`h-1.5 flex-1 rounded ${
                x <= i
                  ? "bg-sky-400"
                  : "bg-slate-800"
              }`}
            />
          ))}
        </div>

        <p className="text-slate-500 text-xs">
          {t.part} {i + 1}/4
        </p>

        <h2 className="text-white font-bold text-lg mt-1">
          {part.h}
        </h2>

        <p className="text-slate-300 text-sm mt-2 leading-6">
          {part.b}
        </p>

        {part.c && (
          <>
            <p className="text-slate-400 text-xs mt-4">
              {t.codePlayground}
            </p>

            <textarea
              value={code}
              onChange={(e) =>
                setCode(e.target.value)
              }
              rows="6"
              spellCheck="false"
              className="w-full mt-1 bg-slate-900 text-emerald-400 font-mono text-xs p-3 rounded-xl outline-none border border-white/5 focus:border-sky-500"
            />

            <button
              onClick={() => setOut(run(code))}
              className="mt-2 bg-gradient-to-r from-violet-600 to-sky-500 text-white px-4 py-2 rounded-lg text-sm flex gap-2 items-center"
            >
              <Play size={16} />
              {t.runCode}
            </button>

            {out && (
              <div className="bg-slate-900 p-3 mt-2 rounded-xl border border-white/5">
                <p className="text-slate-500 text-xs mb-2">
                  {t.output}
                </p>

                <div className="text-emerald-400 font-mono text-xs">
                  {out.map((x, index) => (
                    <div key={index}>{x}</div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex justify-between p-3 border-t border-white/10">
        <button
          disabled={!i}
          onClick={() => setI(i - 1)}
          className="text-slate-300 disabled:opacity-30"
        >
          {t.previous}
        </button>

        <button
          onClick={() =>
            i < 3
              ? setI(i + 1)
              : setQuiz(true)
          }
          className="bg-gradient-to-r from-violet-600 to-sky-500 text-white px-5 py-2 rounded-lg"
        >
          {i < 3 ? t.next : t.quizTime}
        </button>
      </div>
    </div>
  );
}

function Quiz({ t, data, done, back }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);

  const q = data[i];

  const choose = (x) => {
    if (sel !== null) return;

    setSel(x);

    if (x === q.a) {
      setScore((s) => s + 1);
    }
  };

  return (
    <div className="h-full bg-slate-950">
      <Header
        title={t.quizTime}
        back={back}
      />

      <div className="px-4">
        <p className="text-slate-500 text-xs mb-3">
          {t.passToUnlock}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <Trophy
            size={18}
            className="text-amber-400"
          />
          <span className="text-slate-400 text-xs">
            Question {i + 1} / {data.length}
          </span>
        </div>

        <div className="bg-slate-900 p-4 rounded-2xl border border-white/5">
          <p className="text-white mb-4 font-medium">
            {q.q}
          </p>

          {q.o.map((x, j) => (
            <button
              key={j}
              onClick={() => choose(j)}
              className={`w-full text-left p-3 mb-2 rounded-lg border transition ${
                sel === null
                  ? "bg-slate-800 border-white/10 text-slate-200"
                  : j === q.a
                  ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                  : sel === j
                  ? "bg-rose-500/20 border-rose-400 text-rose-300"
                  : "bg-slate-800 border-white/10 text-slate-300"
              }`}
            >
              {x}
            </button>
          ))}

          {sel !== null && (
            <div className="mb-3 text-xs">
              {sel === q.a ? (
                <span className="text-emerald-400">
                  {t.correct}
                </span>
              ) : (
                <span className="text-rose-400">
                  {t.incorrect}
                </span>
              )}
            </div>
          )}

          {sel !== null && (
            <button
              onClick={() => {
                if (i + 1 < data.length) {
                  setI(i + 1);
                  setSel(null);
                } else {
                  done();
                }
              }}
              className="w-full bg-gradient-to-r from-violet-600 to-sky-500 text-white py-2 rounded-lg"
            >
              {i + 1 < data.length
                ? t.next
                : t.finishLesson}
            </button>
          )}
        </div>

        <p className="text-slate-500 text-xs text-center mt-3">
          {t.score}: {score}/{data.length}
        </p>
      </div>
    </div>
  );
}

function Practice({ go, t }) {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.practiceTitle}
        back={() => go("home")}
      />

      <div className="flex-1 px-4">
        <div className="bg-gradient-to-br from-violet-700/30 to-sky-600/20 border border-white/10 rounded-2xl p-5">
          <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
            <Dumbbell
              className="text-violet-400"
              size={24}
            />
          </div>

          <h2 className="text-white font-bold text-lg">
            {t.practiceTitle}
          </h2>

          <p className="text-slate-400 text-sm mt-2 leading-6">
            {t.practiceText}
          </p>

          <button
            onClick={() => go("var1")}
            className="mt-5 w-full bg-gradient-to-r from-violet-600 to-sky-500 text-white py-3 rounded-xl"
          >
            {t.startQuiz}
          </button>
        </div>
      </div>
    </div>
  );
}

function Tutor({ go, t, lang }) {
  const [msgs, setMsgs] = useState([
    {
      bot: 1,
      text: t.askAnything,
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const end = useRef();

  useEffect(() => {
    end.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [msgs]);

  async function send() {
    if (!input.trim() || loading) return;

    const text = input;

    setInput("");

    const next = [
      ...msgs,
      {
        bot: 0,
        text,
      },
    ];

    setMsgs(next);
    setLoading(true);

    try {
      const r = await fetch(
        `${BACKEND_URL}/api/tutor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system: `You are a friendly Python tutor. Reply in ${
              lang === "hi"
                ? "Hindi/Hinglish"
                : lang === "es"
                ? "Spanish"
                : "English"
            }, under 80 words.`,
            messages: next.map((m) => ({
              role: m.bot
                ? "assistant"
                : "user",
              content: m.text,
            })),
          }),
        }
      );

      const d = await r.json();

      setMsgs((m) => [
        ...m,
        {
          bot: 1,
          text:
            (d.content || [])
              .map((c) => c.text || "")
              .join("\n") ||
            "Sorry, no response.",
        },
      ]);
    } catch (e) {
      setMsgs((m) => [
        ...m,
        {
          bot: 1,
          text: "Network error — please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.aiTutor}
        back={() => go("home")}
      />

      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] p-3 rounded-xl text-sm ${
              m.bot
                ? "bg-slate-900 text-slate-200"
                : "bg-sky-600 text-white ml-auto"
            }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <Loader2
            className="animate-spin text-slate-400"
            size={16}
          />
        )}

        <div ref={end} />
      </div>

      <div className="p-3 border-t border-white/10 flex gap-2">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === "Enter" && send()
          }
          placeholder={t.typeQuestion}
          className="flex-1 bg-slate-900 text-white rounded-full px-4 py-2 outline-none"
        />

        <button
          onClick={send}
          className="bg-sky-600 p-2 rounded-full text-white"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

function Settings({ go, t, lang, setLang }) {
  return (
    <div className="h-full bg-slate-950">
      <Header
        title={t.settings}
        back={() => go("home")}
      />

      <div className="px-4">
        <p className="text-slate-400 text-xs mb-2">
          {t.chooseLanguage}
        </p>

        {LANG.map((x) => (
          <button
            key={x.code}
            onClick={() => setLang(x.code)}
            className={`w-full p-3 mb-2 rounded-xl border flex gap-3 text-white ${
              lang === x.code
                ? "border-sky-400 bg-sky-500/10"
                : "border-white/10 bg-slate-900"
            }`}
          >
            {x.flag}
            {x.label}

            {lang === x.code && (
              <CheckCircle2
                className="ml-auto text-sky-400"
                size={18}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "calc",
    icon: "🧮",
    title: "Calculator",
    difficulty: "Beginner",
    desc: "Build a working calculator that adds, subtracts, multiplies and divides.",
    skills: [
      "Variables",
      "Functions",
      "Conditions",
    ],
  },
  {
    id: "todo",
    icon: "✅",
    title: "To-Do App",
    difficulty: "Beginner",
    desc: "Create a list where you can add, complete and remove tasks.",
    skills: [
      "Lists",
      "Loops",
      "Functions",
    ],
  },
  {
    id: "weather",
    icon: "⛅",
    title: "Weather App",
    difficulty: "Intermediate",
    desc: "Learn how a weather application uses APIs and JSON data.",
    skills: [
      "APIs",
      "JSON",
      "Functions",
    ],
  },
  {
    id: "chatbot",
    icon: "🤖",
    title: "Chat Bot",
    difficulty: "Intermediate",
    desc: "Build a simple rule-based chatbot.",
    skills: [
      "Conditions",
      "Strings",
      "Loops",
    ],
  },
  {
    id: "snake",
    icon: "🐍",
    title: "Snake Game",
    difficulty: "Advanced",
    desc: "Plan and build the classic Snake game.",
    skills: [
      "OOP",
      "Game Loops",
      "Events",
    ],
  },
  {
    id: "dataviz",
    icon: "📊",
    title: "Data Visualizer",
    difficulty: "Advanced",
    desc: "Turn data into useful charts and visualizations.",
    skills: [
      "Pandas",
      "Matplotlib",
      "Files",
    ],
  },
];

function Projects({ go, t }) {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.projects}
        back={() => go("home")}
      />

      <div className="flex-1 overflow-y-auto grid grid-cols-2 gap-3 p-4">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() =>
              go("project-" + p.id)
            }
            className="bg-slate-900 border border-white/10 rounded-xl p-3 text-left active:scale-95 transition"
          >
            <span className="text-2xl">
              {p.icon}
            </span>

            <p className="text-white text-sm font-medium mt-2">
              {p.title}
            </p>

            <p className="text-slate-400 text-xs">
              {p.difficulty}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({
  go,
  t,
  projectId,
}) {
  const project = PROJECTS.find(
    (p) => p.id === projectId
  );

  if (!project) {
    return (
      <div className="h-full bg-slate-950 text-white p-4">
        <button
          onClick={() => go("projects")}
          className="text-sky-400"
        >
          ← {t.back}
        </button>

        <p className="mt-6">
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.projectDetails}
        back={() => go("projects")}
      />

      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-6xl mb-4">
          {project.icon}
        </div>

        <h2 className="text-white text-2xl font-bold">
          {project.title}
        </h2>

        <p className="text-amber-300 text-sm mt-1">
          {t.difficulty}: {project.difficulty}
        </p>

        <p className="text-slate-300 text-sm mt-4 leading-6">
          {project.desc}
        </p>

        <p className="text-slate-400 text-xs mt-6 mb-2">
          {t.skills}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-900 border border-white/10 text-slate-300 text-xs px-3 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <button
          onClick={() =>
            go("project-start-" + projectId)
          }
          className="w-full mt-8 bg-gradient-to-r from-violet-600 to-sky-500 text-white font-semibold py-3 rounded-xl"
        >
          {t.startProject} →
        </button>
      </div>
    </div>
  );
}

function CalculatorWorkspace({ go, t, completeProject }) {
  const [display, setDisplay] = useState("0");

  const press = (value) => {
    if (value === "C") {
      setDisplay("0");
      return;
    }

    if (value === "=") {
      try {
        const expression = display
          .replace(/×/g, "*")
          .replace(/÷/g, "/");

        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
          return;
        }

        const result = Function(
          `"use strict"; return (${expression})`
        )();

        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }

      return;
    }

    if (display === "0" || display === "Error") {
      setDisplay(value);
    } else {
      setDisplay((d) => d + value);
    }
  };

  const buttons = [
    "C",
    "÷",
    "×",
    "−",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "(",
    "1",
    "2",
    "3",
    ")",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.calculator}
        back={() => go("projects")}
      />

      <div className="flex-1 p-4">
        <div className="bg-slate-900 rounded-2xl p-4 border border-white/10">
          <div className="bg-slate-950 rounded-xl p-4 mb-3 text-right">
            <p className="text-white text-2xl font-mono break-all">
              {display}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {buttons.map((b, index) => (
              <button
                key={index}
                onClick={() => press(b)}
                className={`h-12 rounded-xl text-white font-semibold ${
                  b === "="
                    ? "bg-gradient-to-r from-violet-600 to-sky-500"
                    : b === "C"
                    ? "bg-rose-500/30 text-rose-300"
                    : "bg-slate-800"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => completeProject("calc")}
          className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Check size={18} />
          {t.saveProject}
        </button>
      </div>
    </div>
  );
}

function TodoWorkspace({
  go,
  t,
  completeProject,
}) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks((items) => [
      ...items,
      {
        id: Date.now(),
        text: task.trim(),
        done: false,
      },
    ]);

    setTask("");
  };

  const toggle = (id) => {
    setTasks((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item
      )
    );
  };

  const remove = (id) => {
    setTasks((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title="To-Do App"
        back={() => go("projects")}
      />

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex gap-2">
          <input
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && addTask()
            }
            placeholder={t.taskPlaceholder}
            className="flex-1 bg-slate-900 text-white rounded-xl px-4 py-3 outline-none border border-white/10"
          />

          <button
            onClick={addTask}
            className="bg-sky-600 text-white p-3 rounded-xl"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {tasks.length === 0 && (
            <div className="text-center text-slate-500 text-sm py-10">
              No tasks yet.
            </div>
          )}

          {tasks.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 bg-slate-900 border border-white/10 rounded-xl p-3"
            >
              <button
                onClick={() => toggle(item.id)}
                className={`w-7 h-7 rounded-lg border flex items-center justify-center ${
                  item.done
                    ? "bg-emerald-500 border-emerald-400"
                    : "border-slate-600"
                }`}
              >
                {item.done && (
                  <Check
                    size={16}
                    className="text-white"
                  />
                )}
              </button>

              <span
                className={`flex-1 text-sm ${
                  item.done
                    ? "text-slate-500 line-through"
                    : "text-white"
                }`}
              >
                {item.text}
              </span>

              <button
                onClick={() => remove(item.id)}
                className="text-rose-400 p-1"
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => completeProject("todo")}
          className="w-full mt-5 bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Check size={18} />
          {t.saveProject}
        </button>
      </div>
    </div>
  );
}

function GenericWorkspace({
  go,
  t,
  project,
  completeProject,
}) {
  const [code, setCode] = useState(
    `# ${project.title}\n\nprint("Hello, Python!")`
  );

  const [out, setOut] = useState(null);

  return (
    <div className="h-full flex flex-col bg-slate-950">
      <Header
        title={t.projectWorkspace}
        back={() => go("projects")}
      />

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">
            {project.icon}
          </span>

          <div>
            <h2 className="text-white font-bold">
              {project.title}
            </h2>

            <p className="text-slate-500 text-xs">
              {project.difficulty}
            </p>
          </div>
        </div>

        <textarea
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
          spellCheck="false"
          rows="10"
          className="w-full bg-slate-900 text-emerald-400 font-mono text-xs p-3 rounded-xl outline-none border border-white/10"
        />

        <button
          onClick={() => setOut(run(code))}
          className="mt-2 bg-gradient-to-r from-violet-600 to-sky-500 text-white px-4 py-3 rounded-xl flex items-center gap-2"
        >
          <Play size={17} />
          {t.runCode}
        </button>

        {out && (
          <div className="mt-3 bg-slate-900 rounded-xl p-3">
            <p className="text-slate-500 text-xs mb-2">
              {t.output}
            </p>

            {out.map((line, i) => (
              <p
                key={i}
                className="text-emerald-400 font-mono text-xs"
              >
                {line}
              </p>
            ))}
          </div>
        )}

        <button
          onClick={() =>
            completeProject(project.id)
          }
          className="w-full mt-5 bg-emerald-600 text-white py-3 rounded-xl"
        >
          {t.saveProject}
        </button>
      </div>
    </div>
  );
}

function ProjectWorkspace({
  go,
  t,
  projectId,
  completeProject,
}) {
  const project = PROJECTS.find(
    (p) => p.id === projectId
  );

  if (!project) {
    return (
      <div className="h-full bg-slate-950 text-white p-4">
        Project not found.
      </div>
    );
  }

  if (projectId === "calc") {
    return (
      <CalculatorWorkspace
        go={go}
        t={t}
        completeProject={completeProject}
      />
    );
  }

  if (projectId === "todo") {
    return (
      <TodoWorkspace
        go={go}
        t={t}
        completeProject={completeProject}
      />
    );
  }

  return (
    <GenericWorkspace
      go={go}
      t={t}
      project={project}
      completeProject={completeProject}
    />
  );
}

export default function PythonNexusApp() {
  const [screen, setScreen] = useState(
    "splash"
  );

  const [lang, setLang] = useState(
    localStorage.getItem("nexus_lang") || "hi"
  );

  const [p, setP] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem(
          "nexus_progress"
        ) ||
          '{"xp":0,"streak":1,"completed":[],"projects":[]}'
      );
    } catch {
      return {
        xp: 0,
        streak: 1,
        completed: [],
        projects: [],
      };
    }
  });

  const t = {
    ...UI[lang],
    _lang: lang,
  };

  const go = (nextScreen) => {
    setScreen(nextScreen);
  };

  const complete = (id) => {
    setP((v) => {
      if (v.completed.includes(id)) {
        return v;
      }

      const next = {
        ...v,
        completed: [
          ...v.completed,
          id,
        ],
        xp: v.xp + 20,
      };

      localStorage.setItem(
        "nexus_progress",
        JSON.stringify(next)
      );

      return next;
    });
  };

  const completeProject = (id) => {
    setP((v) => {
      if (
        (v.projects || []).includes(id)
      ) {
        return v;
      }

      const next = {
        ...v,
        projects: [
          ...(v.projects || []),
          id,
        ],
        xp: v.xp + 50,
      };

      localStorage.setItem(
        "nexus_progress",
        JSON.stringify(next)
      );

      return next;
    });
  };

  const change = (nextLang) => {
    setLang(nextLang);

    localStorage.setItem(
      "nexus_lang",
      nextLang
    );
  };

  if (screen === "splash") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="w-[360px] h-[720px] bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-6xl">🐍</div>

          <h1 className="text-white text-2xl font-bold mt-4">
            PYTHON{" "}
            <span className="text-sky-400">
              NEXUS
            </span>
          </h1>

          <p className="text-slate-400 text-xs">
            {t.tagline}
          </p>

          <button
            onClick={() => go("home")}
            className="mt-8 w-full bg-gradient-to-r from-violet-600 to-sky-500 text-white py-3 rounded-xl"
          >
            {t.getStarted}
          </button>
        </div>
      </div>
    );
  }

  let content;

  if (screen === "home") {
    content = (
      <HomeScreen
        go={go}
        t={t}
        p={p}
      />
    );
  } else if (screen === "course") {
    content = (
      <Course
        go={go}
        t={t}
        p={p}
      />
    );
  } else if (screen === "practice") {
    content = (
      <Practice
        go={go}
        t={t}
      />
    );
  } else if (screen === "tutor") {
    content = (
      <Tutor
        go={go}
        t={t}
        lang={lang}
      />
    );
  } else if (screen === "projects") {
    content = (
      <Projects
        go={go}
        t={t}
      />
    );
  } else if (
    screen.startsWith("project-start-")
  ) {
    content = (
      <ProjectWorkspace
        go={go}
        t={t}
        projectId={screen.replace(
          "project-start-",
          ""
        )}
        completeProject={
          completeProject
        }
      />
    );
  } else if (
    screen.startsWith("project-")
  ) {
    content = (
      <ProjectDetail
        go={go}
        t={t}
        projectId={screen.replace(
          "project-",
          ""
        )}
      />
    );
  } else if (LESSONS[screen]) {
    content = (
      <Lesson
        go={go}
        t={t}
        id={screen}
        complete={complete}
      />
    );
  } else {
    content = (
      <Settings
        go={go}
        t={t}
        lang={lang}
        setLang={change}
      />
    );
  }

  const hideNav =
    LESSONS[screen] ||
    screen === "tutor" ||
    screen === "settings" ||
    screen.startsWith("project-");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 py-6">
      <div className="w-[360px] h-[720px] rounded-[2.2rem] border-4 border-slate-800 overflow-hidden flex flex-col bg-slate-950">
        <div className="flex-1 overflow-hidden">
          {content}
        </div>

        {!hideNav && (
          <Nav
            screen={screen}
            setScreen={go}
            t={t}
          />
        )}
      </div>
    </div>
  );
}
