import { useState, useEffect, useRef } from "react";

const routine = [
  {
    day: 1,
    label: "GLÚTEOS",
    emoji: "🍑",
    color: "#FF6B9D",
    accent: "#FFB3D1",
    focus: "Activación + Fuerza",
    tip: "Aprieta el glúteo 2 segundos arriba en cada repetición — ahí está el dinero",
    exercises: [
      { name: "Hip Thrust en Máquina", sets: 4, reps: "8-10", rest: "2 min", notes: "Empuje desde talones, contrae glúteo arriba y mantén 2 seg", type: "compound", video: "https://www.youtube.com/shorts/zzFpqhVxxj8" },
      { name: "Sentadilla Multipower pies abiertos", sets: 4, reps: "10-12", rest: "90 seg", notes: "Pies a la anchura de hombros con puntas hacia fuera, baja hasta paralelo", type: "compound", video: "https://youtube.com/shorts/rQw8GUzpj1I" },
      { name: "Good Morning en Multipower", sets: 3, reps: "10-12", rest: "90 seg", notes: "Barra en trapecios, bisagra de cadera hacia atrás, espalda recta, siente el isquio", type: "compound", video: "https://www.youtube.com/shorts/BXLsy0vfKNE" },
      { name: "Abducción en Máquina", sets: 3, reps: "12-15", rest: "60 seg", notes: "Movimiento controlado, no uses impulso, enfoca glúteo medio", type: "isolation", video: "https://www.youtube.com/shorts/ghrWOwqn5eM" },
      { name: "Peso Muerto en Smith", sets: 3, reps: "12", rest: "90 seg", notes: "Pies bajo la barra, espalda neutra, empuja el suelo al subir", type: "compound", video: "https://www.youtube.com/shorts/ki15Z8rPhOc" },
      { name: "Patada de Glúteo en Máquina", sets: 3, reps: "15", rest: "45 seg", notes: "Extensión completa de cadera, no gires el tronco", type: "isolation", video: "https://www.youtube.com/shorts/7dAyon8VTz4" },
    ]
  },
  {
    day: 2,
    label: "PECHO, HOMBRO & TRÍCEPS",
    emoji: "💪",
    color: "#7C3AED",
    accent: "#C4B5FD",
    focus: "Empuje completo tren superior",
    tip: "Orden: pecho primero, hombro segundo, tríceps al final — de mayor a menor músculo",
    exercises: [
      { name: "Press Banca Máquina", sets: 4, reps: "8-10", rest: "2 min", notes: "Escápulas juntas y abajo, empuja sin despegar la espalda del respaldo", type: "compound", video: "https://www.youtube.com/shorts/YC91F8zHZn4" },
      { name: "Press Inclinado Máquina", sets: 4, reps: "8-10", rest: "90 seg", notes: "Inclinación 30-45°, enfoca la parte alta del pecho", type: "compound", video: "https://www.youtube.com/shorts/JXJmPXlqwh0" },
      { name: "Aperturas en Máquina (pec deck)", sets: 3, reps: "12-15", rest: "60 seg", notes: "Arco amplio, contracción 1 seg en el centro, baja controlado", type: "isolation", video: "https://www.youtube.com/shorts/-9JbjkG5f0Q" },
      { name: "Press Militar Máquina", sets: 4, reps: "8-10", rest: "90 seg", notes: "Empuje vertical, no arquees la lumbar, codos ligeramente adelante", type: "compound", video: "https://www.youtube.com/shorts/smuOqyk1HUQ" },
      { name: "Aperturas Laterales Máquina", sets: 3, reps: "12-15", rest: "60 seg", notes: "Codos ligeramente flexionados, sube hasta altura de hombros, baja lento", type: "isolation", video: "https://www.youtube.com/shorts/i-hacjW13ts" },
      { name: "Extensión Tríceps Individual (polea)", sets: 3, reps: "10-12", rest: "60 seg", notes: "Codo fijo al cuerpo, extensión completa, un brazo cada vez", type: "isolation", video: "https://www.youtube.com/shorts/hip11n3QXzU" },
      { name: "Extensión Tríceps Polea Alta (cuerda)", sets: 3, reps: "12-15", rest: "60 seg", notes: "Abre la cuerda al final del movimiento, codos pegados al cuerpo", type: "isolation", video: "https://youtube.com/shorts/uvrH-ceZg_Q" },
    ]
  },
  {
    day: 3,
    label: "ESPALDA & BÍCEPS",
    emoji: "🏋️‍♀️",
    color: "#0D9488",
    accent: "#99F6E4",
    focus: "Tracción + Grosor",
    tip: "Imagina que intentas meter los codos al bolsillo trasero — activa la espalda entera",
    exercises: [
      { name: "Jalón al Pecho", sets: 4, reps: "6-10", rest: "2 min", notes: "Agarre prono ancho, lleva la barra al pecho, retrae escápulas al bajar", type: "compound", video: "https://youtube.com/shorts/O2KKmriBsK0" },
      { name: "Remo con Barra Sentado (polea baja)", sets: 4, reps: "8-10", rest: "90 seg", notes: "Pecho afuera, tira hacia el ombligo, no redondees la lumbar", type: "compound", video: "https://www.youtube.com/shorts/WFo5wJfmqN4" },
      { name: "Remo Máquina Cerrada", sets: 3, reps: "10-12", rest: "75 seg", notes: "Agarre neutro, aprieta escápulas al final del recorrido", type: "compound", video: "https://www.youtube.com/shorts/f-erDgYjlzQ" },
      { name: "Face Pull con Cuerda", sets: 3, reps: "15", rest: "60 seg", notes: "Codos altos a la altura de los hombros, tira hacia la cara, salud de hombro", type: "isolation", video: "https://www.youtube.com/shorts/IeOqdw9WI90" },
      { name: "Curl Barra EZ", sets: 4, reps: "8-10", rest: "90 seg", notes: "Codos fijos, supina al subir, baja en 3 segundos", type: "compound", video: "https://www.youtube.com/shorts/1nzqkCLd_hE" },
      { name: "Curl Martillo Mancuernas", sets: 3, reps: "10-12", rest: "60 seg", notes: "Agarre neutro, alterna o simultáneo, trabaja braquial", type: "isolation", video: "https://www.youtube.com/shorts/rmOiSECL78s" },
    ]
  },
  {
    day: 4,
    label: "PIERNAS",
    emoji: "🦵",
    color: "#D97706",
    accent: "#FDE68A",
    focus: "Fuerza + Volumen completo",
    tip: "Día más duro de la semana — cuáds, isquios y gemelos. Descansa bien el día anterior",
    exercises: [
      { name: "Hack Squat", sets: 4, reps: "6-8", rest: "3 min", notes: "Pies a anchura de cadera, baja hasta 90°, rodillas en línea con pies", type: "compound", video: "https://www.youtube.com/shorts/9E0oA25ZBlo" },
      { name: "Prensa de Piernas", sets: 4, reps: "10-12", rest: "90 seg", notes: "Pies altos y separados para más glúteo-isquio, no bloquees rodillas arriba", type: "compound", video: "https://www.youtube.com/shorts/0dL8o6staRM" },
      { name: "Extensión de Cuádriceps", sets: 3, reps: "12-15", rest: "60 seg", notes: "Contracción 2 seg arriba, baja lento y controlado", type: "isolation", video: "https://www.youtube.com/shorts/ESxIZ13Uq6c" },
      { name: "Curl Femoral Tumbado", sets: 3, reps: "12-15", rest: "60 seg", notes: "Caderas pegadas al banco, flexión completa, aprieta isquio arriba", type: "isolation", video: "https://www.youtube.com/shorts/ENDnSAkatcw" },
      { name: "Zancada con Mancuernas", sets: 3, reps: "10 c/pierna", rest: "75 seg", notes: "Torso recto, rodilla trasera casi toca el suelo, empuja desde el talón delantero", type: "compound", video: "https://www.youtube.com/shorts/uCyxYGkvKO4" },
      { name: "Elevación de Gemelos de Pie", sets: 4, reps: "15-20", rest: "45 seg", notes: "Rango completo, estira abajo, aguanta 1 seg arriba en punta", type: "isolation", video: "https://youtube.com/shorts/goHLe1fninw" },
    ]
  }
];

// LS helpers
const LS_WEIGHTS = "soukaina_weights";
const LS_CALENDAR = "soukaina_calendar";
const loadWeights = () => { try { return JSON.parse(localStorage.getItem(LS_WEIGHTS) || "{}"); } catch { return {}; } };
const saveWeights = (w) => localStorage.setItem(LS_WEIGHTS, JSON.stringify(w));
const loadCalendar = () => { try { return JSON.parse(localStorage.getItem(LS_CALENDAR) || "[]"); } catch { return []; } };
const saveCalendar = (c) => localStorage.setItem(LS_CALENDAR, JSON.stringify(c));

const toDateStr = (d) => d.toISOString().split("T")[0];

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("routine"); // "routine" | "calendar"
  const [checked, setChecked] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [completedDay, setCompletedDay] = useState(null);
  const [weights, setWeights] = useState(loadWeights);
  const [trainedDays, setTrainedDays] = useState(loadCalendar);
  const [calMonth, setCalMonth] = useState(() => { const n = new Date(); return { year: n.getFullYear(), month: n.getMonth() }; });

  const day = routine[activeDay];

  const toggleCheck = (key) => {
    const newChecked = { ...checked, [key]: !checked[key] };
    setChecked(newChecked);
    const total = routine[activeDay].exercises.length;
    const doneCount = routine[activeDay].exercises.filter((_, i) => newChecked[`${activeDay}-${i}`]).length;
    if (doneCount === total && !checked[key] === true) {
      setTimeout(() => { setCompletedDay(activeDay); setShowModal(true); }, 400);
    }
  };

  const handleReset = () => {
    const newChecked = { ...checked };
    routine[completedDay].exercises.forEach((_, i) => { delete newChecked[`${completedDay}-${i}`]; });
    setChecked(newChecked);
    // Mark today in calendar
    const today = toDateStr(new Date());
    if (!trainedDays.includes(today)) {
      const updated = [...trainedDays, today];
      setTrainedDays(updated);
      saveCalendar(updated);
    }
    setShowModal(false);
    setCompletedDay(null);
  };

  const handleKeep = () => { setShowModal(false); setCompletedDay(null); };

  const updateWeight = (exKey, val) => {
    const updated = { ...weights, [exKey]: val };
    setWeights(updated);
    saveWeights(updated);
  };

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [timerConfig, setTimerConfig] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(s => {
          if (s <= 1) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            setTimerDone(true);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerSeconds(timerDuration);
    setTimerDone(false);
    setTimerRunning(true);
    setTimerConfig(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimerSeconds(timerDuration);
    setTimerRunning(false);
    setTimerDone(false);
  };

  const completedCount = day.exercises.filter((_, i) => checked[`${activeDay}-${i}`]).length;

  // Calendar helpers
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const today = toDateStr(new Date());
  const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  const streak = (() => {
    if (trainedDays.length === 0) return 0;
    const sorted = [...trainedDays].sort().reverse();
    let count = 0;
    let check = new Date();
    for (let i = 0; i < 60; i++) {
      if (sorted.includes(toDateStr(check))) { count++; check.setDate(check.getDate() - 1); }
      else if (i === 0) { check.setDate(check.getDate() - 1); continue; }
      else break;
    }
    return count;
  })();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", fontFamily: "'Georgia', serif", color: "#f0ede8", paddingBottom: 100 }}>

      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${day.color}22, #0a0a0f)`,
        borderBottom: `1px solid ${day.color}33`,
        padding: "48px 24px 20px",
        textAlign: "center",
        position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)"
      }}>
        <div style={{ fontSize: 11, letterSpacing: "0.25em", color: day.color, textTransform: "uppercase", marginBottom: 6, fontFamily: "monospace" }}>
          SOUKAINA GYM · HIPERTROFIA & FUERZA
        </div>
        <h1 style={{ fontSize: 24, fontWeight: "normal", margin: 0, letterSpacing: "0.05em" }}>
          Plan de <span style={{ color: day.color, fontStyle: "italic" }}>4 Días</span>
        </h1>
      </div>

      {/* Main tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #1e1e30", background: "#0a0a0f", position: "sticky", top: 97, zIndex: 9 }}>
        {[{ id: "routine", label: "💪 Rutina" }, { id: "calendar", label: "📅 Calendario" }].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            flex: 1, padding: "12px", background: "transparent",
            border: "none", borderBottom: activeTab === tab.id ? `2px solid ${day.color}` : "2px solid transparent",
            color: activeTab === tab.id ? day.color : "#555",
            fontFamily: "monospace", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer",
            transition: "all 0.2s"
          }}>{tab.label}</button>
        ))}
      </div>

      {/* ROUTINE TAB */}
      {activeTab === "routine" && (
        <>
          {/* Day Tabs */}
          <div style={{ display: "flex", gap: 8, padding: "16px 16px 0", overflowX: "auto", justifyContent: "center" }}>
            {routine.map((d, i) => (
              <button key={i} onClick={() => setActiveDay(i)} style={{
                background: activeDay === i ? d.color : "transparent",
                border: `1.5px solid ${activeDay === i ? d.color : "#333"}`,
                borderRadius: 12, padding: "10px 14px", cursor: "pointer",
                color: activeDay === i ? "#fff" : "#888",
                fontFamily: "monospace", fontSize: 11, letterSpacing: "0.1em",
                textTransform: "uppercase", whiteSpace: "nowrap",
                transition: "all 0.2s", fontWeight: activeDay === i ? "bold" : "normal"
              }}>
                {d.emoji} DÍA {d.day}
              </button>
            ))}
          </div>

          <div style={{ padding: "20px 16px 0", maxWidth: 600, margin: "0 auto" }}>
            {/* Day Header */}
            <div style={{
              background: `linear-gradient(135deg, ${day.color}18, transparent)`,
              border: `1px solid ${day.color}44`,
              borderRadius: 20, padding: "22px 20px 18px", marginBottom: 16
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <span style={{ fontSize: 40 }}>{day.emoji}</span>
                <div>
                  <div style={{ fontSize: 11, color: day.color, letterSpacing: "0.2em", fontFamily: "monospace", marginBottom: 4 }}>DÍA {day.day}</div>
                  <h2 style={{ margin: 0, fontSize: 22, fontWeight: "normal", letterSpacing: "0.06em" }}>{day.label}</h2>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <div style={{ fontSize: 22, fontWeight: "bold", color: day.color, fontFamily: "monospace" }}>{completedCount}/{day.exercises.length}</div>
                  <div style={{ fontSize: 10, color: "#666", fontFamily: "monospace" }}>completados</div>
                </div>
              </div>
              <div style={{ background: "#1a1a2e", borderRadius: 4, height: 4, marginBottom: 14 }}>
                <div style={{
                  background: `linear-gradient(90deg, ${day.color}, ${day.accent})`,
                  height: "100%", borderRadius: 4,
                  width: `${(completedCount / day.exercises.length) * 100}%`,
                  transition: "width 0.4s ease"
                }} />
              </div>
              <div style={{ fontSize: 11, color: "#888", fontFamily: "monospace", marginBottom: 10 }}>🎯 {day.focus}</div>
              <div style={{ padding: "10px 14px", background: `${day.color}11`, borderRadius: 10, fontSize: 12, color: day.accent, fontStyle: "italic", lineHeight: 1.5 }}>
                💡 {day.tip}
              </div>
            </div>

            {/* Exercises */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {day.exercises.map((ex, i) => {
                const key = `${activeDay}-${i}`;
                const done = checked[key];
                const weightKey = `d${activeDay}_e${i}`;
                return (
                  <div key={i} style={{
                    background: done ? `${day.color}15` : "#13131e",
                    border: `1px solid ${done ? day.color + "55" : "#222"}`,
                    borderRadius: 16, padding: "16px",
                    transition: "all 0.2s", opacity: done ? 0.75 : 1
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      {/* Check */}
                      <div onClick={() => toggleCheck(key)} style={{
                        width: 24, height: 24, borderRadius: "50%",
                        border: `2px solid ${done ? day.color : "#444"}`,
                        background: done ? day.color : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 2, transition: "all 0.2s", cursor: "pointer"
                      }}>
                        {done && <span style={{ color: "#fff", fontSize: 13 }}>✓</span>}
                      </div>

                      <div style={{ flex: 1 }}>
                        {/* Name + badges */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                          <span onClick={() => toggleCheck(key)} style={{
                            fontSize: 14, fontWeight: "600", cursor: "pointer",
                            textDecoration: done ? "line-through" : "none",
                            color: done ? "#666" : "#f0ede8", letterSpacing: "0.02em"
                          }}>{ex.name}</span>
                          <span style={{
                            fontSize: 9, letterSpacing: "0.12em",
                            background: ex.type === "compound" ? `${day.color}22` : "#1e1e2e",
                            color: ex.type === "compound" ? day.accent : "#555",
                            padding: "2px 7px", borderRadius: 20, fontFamily: "monospace", textTransform: "uppercase"
                          }}>
                            {ex.type === "compound" ? "COMPUESTO" : "AISLAMIENTO"}
                          </span>
                          {ex.video && (
                            <a href={ex.video} target="_blank" rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                display: "inline-flex", alignItems: "center", gap: 4,
                                background: "#FF0000", color: "#fff",
                                padding: "2px 8px", borderRadius: 20,
                                fontSize: 9, fontFamily: "monospace", letterSpacing: "0.1em",
                                textDecoration: "none", fontWeight: "bold", flexShrink: 0
                              }}>▶ VER</a>
                          )}
                        </div>

                        {/* Stats */}
                        <div style={{ display: "flex", gap: 16, marginBottom: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
                          {[{ label: "SERIES", val: ex.sets }, { label: "REPS", val: ex.reps }, { label: "DESCANSO", val: ex.rest }].map(({ label, val }) => (
                            <div key={label}>
                              <div style={{ fontSize: 15, fontWeight: "bold", color: day.color, fontFamily: "monospace" }}>{val}</div>
                              <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.12em", fontFamily: "monospace" }}>{label}</div>
                            </div>
                          ))}
                          {/* Weight input */}
                          <div style={{ marginLeft: "auto" }}>
                            <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.12em", fontFamily: "monospace", marginBottom: 3, textAlign: "right" }}>PESO MÁX (kg)</div>
                            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                              <input
                                type="number"
                                inputMode="decimal"
                                value={weights[weightKey] || ""}
                                onChange={(e) => updateWeight(weightKey, e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                placeholder="0"
                                style={{
                                  width: 58, padding: "4px 8px",
                                  background: "#0a0a0f",
                                  border: `1px solid ${day.color}55`,
                                  borderRadius: 8, color: day.accent,
                                  fontSize: 14, fontFamily: "monospace",
                                  fontWeight: "bold", textAlign: "center",
                                  outline: "none"
                                }}
                              />
                              <span style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>kg</span>
                            </div>
                          </div>
                        </div>

                        {/* Notes */}
                        <div onClick={() => toggleCheck(key)} style={{ fontSize: 12, color: "#777", fontStyle: "italic", lineHeight: 1.4, cursor: "pointer" }}>
                          {ex.notes}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* General notes */}
            <div style={{ marginTop: 24, padding: "18px", background: "#0f0f1a", borderRadius: 16, border: "1px solid #1e1e30" }}>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.2em", fontFamily: "monospace", marginBottom: 12 }}>NOTAS GENERALES</div>
              {[
                "🔥 Calienta 8-10 min antes: movilidad articular + cardio suave",
                "📈 Sube peso cuando completes todas las series con buena técnica",
                "💤 Descansa al menos 1 día entre sesiones: L-M-J-V o L-X-J-S",
                "🥗 Proteína: 1.6-2g por kg de peso corporal al día",
                "✅ Toca cada ejercicio para marcarlo como completado"
              ].map((note, i) => (
                <div key={i} style={{ fontSize: 12, color: "#666", marginBottom: 7, lineHeight: 1.5 }}>{note}</div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* CALENDAR TAB */}
      {activeTab === "calendar" && (
        <div style={{ padding: "20px 16px", maxWidth: 600, margin: "0 auto" }}>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {[
              { label: "DÍAS TOTALES", val: trainedDays.length, color: "#FF6B9D" },
              { label: "RACHA ACTUAL", val: `${streak} 🔥`, color: "#D97706" },
              { label: "ESTE MES", val: trainedDays.filter(d => d.startsWith(`${calMonth.year}-${String(calMonth.month + 1).padStart(2, "0")}`)).length, color: "#0D9488" },
            ].map(({ label, val, color }) => (
              <div key={label} style={{ flex: 1, background: "#13131e", border: `1px solid ${color}33`, borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: "bold", color, fontFamily: "monospace" }}>{val}</div>
                <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.12em", fontFamily: "monospace", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Month navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <button onClick={() => setCalMonth(p => { const d = new Date(p.year, p.month - 1); return { year: d.getFullYear(), month: d.getMonth() }; })}
              style={{ background: "transparent", border: "1px solid #333", borderRadius: 8, padding: "6px 14px", color: "#888", cursor: "pointer", fontSize: 16 }}>‹</button>
            <span style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.15em", color: "#f0ede8" }}>
              {monthNames[calMonth.month].toUpperCase()} {calMonth.year}
            </span>
            <button onClick={() => setCalMonth(p => { const d = new Date(p.year, p.month + 1); return { year: d.getFullYear(), month: d.getMonth() }; })}
              style={{ background: "transparent", border: "1px solid #333", borderRadius: 8, padding: "6px 14px", color: "#888", cursor: "pointer", fontSize: 16 }}>›</button>
          </div>

          {/* Day headers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 4 }}>
            {["D","L","M","X","J","V","S"].map(d => (
              <div key={d} style={{ textAlign: "center", fontSize: 10, color: "#555", fontFamily: "monospace", padding: "4px 0" }}>{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
            {/* Empty cells for first day offset */}
            {Array.from({ length: getFirstDayOfMonth(calMonth.year, calMonth.month) }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {/* Day cells */}
            {Array.from({ length: getDaysInMonth(calMonth.year, calMonth.month) }).map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${calMonth.year}-${String(calMonth.month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
              const trained = trainedDays.includes(dateStr);
              const isToday = dateStr === today;
              return (
                <div key={dayNum} style={{
                  aspectRatio: "1",
                  borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontFamily: "monospace",
                  background: trained ? "#FF6B9D" : isToday ? "#1e1e30" : "transparent",
                  border: isToday ? "1px solid #FF6B9D88" : "1px solid transparent",
                  color: trained ? "#fff" : isToday ? "#FF6B9D" : "#666",
                  fontWeight: trained || isToday ? "bold" : "normal",
                  position: "relative"
                }}>
                  {dayNum}
                  {trained && <span style={{ position: "absolute", top: 2, right: 3, fontSize: 8 }}>✓</span>}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: 16, marginTop: 16, justifyContent: "center" }}>
            {[
              { color: "#FF6B9D", label: "Entrenado" },
              { color: "#1e1e30", label: "Hoy", border: "1px solid #FF6B9D88" },
            ].map(({ color, label, border }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: color, border: border || "none" }} />
                <span style={{ fontSize: 11, color: "#666", fontFamily: "monospace" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Trained days list */}
          {trainedDays.length > 0 && (
            <div style={{ marginTop: 24, padding: "18px", background: "#0f0f1a", borderRadius: 16, border: "1px solid #1e1e30" }}>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.2em", fontFamily: "monospace", marginBottom: 12 }}>ÚLTIMOS ENTRENAMIENTOS</div>
              {[...trainedDays].sort().reverse().slice(0, 10).map(d => (
                <div key={d} style={{ fontSize: 12, color: "#888", marginBottom: 6, fontFamily: "monospace", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#FF6B9D" }}>✓</span>
                  {new Date(d + "T12:00:00").toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Completion Modal */}
      {showModal && completedDay !== null && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)"
        }}>
          <div style={{
            background: "#13131e",
            border: `1px solid ${routine[completedDay].color}55`,
            borderRadius: 24, padding: "36px 28px", maxWidth: 340, width: "100%",
            textAlign: "center", boxShadow: `0 0 60px ${routine[completedDay].color}22`
          }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: routine[completedDay].color, fontFamily: "monospace", marginBottom: 10 }}>
              ¡DÍA {routine[completedDay].day} COMPLETADO!
            </div>
            <h3 style={{ fontSize: 22, fontWeight: "normal", margin: "0 0 10px", letterSpacing: "0.05em" }}>
              ¡Lo has clavado! {routine[completedDay].emoji}
            </h3>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, margin: "0 0 28px" }}>
              Has completado todos los ejercicios del día de{" "}
              <span style={{ color: routine[completedDay].accent }}>{routine[completedDay].label}</span>.
              <br/>¿Limpiar el día y marcar hoy en el calendario?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button onClick={handleReset} style={{
                background: routine[completedDay].color, border: "none", borderRadius: 14,
                padding: "14px", color: "#fff", fontSize: 14, fontFamily: "monospace",
                letterSpacing: "0.1em", cursor: "pointer", fontWeight: "bold"
              }}>✓ SÍ, LIMPIAR Y MARCAR HOY</button>
              <button onClick={handleKeep} style={{
                background: "transparent", border: "1px solid #333", borderRadius: 14,
                padding: "14px", color: "#666", fontSize: 13, fontFamily: "monospace",
                letterSpacing: "0.08em", cursor: "pointer"
              }}>MANTENER COMO ESTÁ</button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Timer Button */}
      {activeTab === "routine" && (
        <div style={{
          position: "fixed", bottom: 28, right: 20, zIndex: 50,
          display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12
        }}>

          {/* Settings popup */}
          {timerConfig && !timerRunning && (
            <div style={{
              background: "#13131e",
              border: `1px solid ${day.color}66`,
              borderRadius: 16, padding: "16px 20px",
              boxShadow: `0 8px 40px rgba(0,0,0,0.6)`,
              minWidth: 180
            }}>
              <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace", letterSpacing: "0.2em", marginBottom: 12 }}>DURACIÓN DESCANSO</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[30, 45, 60, 90, 120, 180].map(sec => (
                  <button key={sec} onClick={() => { setTimerDuration(sec); setTimerSeconds(sec); setTimerConfig(false); }} style={{
                    background: timerDuration === sec ? day.color : "transparent",
                    border: `1px solid ${timerDuration === sec ? day.color : "#333"}`,
                    borderRadius: 10, padding: "8px 14px",
                    color: timerDuration === sec ? "#fff" : "#888",
                    fontFamily: "monospace", fontSize: 13, cursor: "pointer",
                    letterSpacing: "0.05em", textAlign: "left",
                    transition: "all 0.15s"
                  }}>
                    {sec >= 60 ? `${sec/60} min${sec > 60 ? ` (${sec}s)` : ""}` : `${sec} seg`}
                    {timerDuration === sec && " ✓"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Timer popup */}
          {(timerRunning || timerDone) && (
            <div style={{
              background: "#13131e",
              border: `1px solid ${day.color}66`,
              borderRadius: 20,
              padding: "20px 28px",
              textAlign: "center",
              boxShadow: `0 8px 40px rgba(0,0,0,0.6), 0 0 30px ${day.color}22`,
              minWidth: 160
            }}>
              {timerDone ? (
                <div>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>💪</div>
                  <div style={{
                    fontSize: 13, fontFamily: "monospace", fontWeight: "bold",
                    color: day.color, letterSpacing: "0.08em", lineHeight: 1.4
                  }}>SIGUIENTE<br/>SERIE</div>
                </div>
              ) : (
                <div>
                  <div style={{
                    fontSize: 72, fontWeight: "bold", fontFamily: "monospace",
                    color: timerSeconds <= 10 ? "#FF6B9D" : day.accent,
                    lineHeight: 1, letterSpacing: "-2px",
                    transition: "color 0.3s"
                  }}>
                    {String(Math.floor(timerSeconds / 60)).padStart(2,"0")}:{String(timerSeconds % 60).padStart(2,"0")}
                  </div>
                  <button onClick={resetTimer} style={{
                    marginTop: 10, background: "transparent",
                    border: "none", color: "#555", fontSize: 11,
                    fontFamily: "monospace", cursor: "pointer", letterSpacing: "0.1em"
                  }}>✕ CANCELAR</button>
                </div>
              )}
            </div>
          )}

          {/* Play + Gear buttons */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {/* Gear button */}
            {!timerRunning && !timerDone && (
              <button onClick={() => setTimerConfig(p => !p)} style={{
                width: 36, height: 36, borderRadius: "50%",
                background: timerConfig ? `${day.color}33` : "#1a1a2e",
                border: `1px solid ${timerConfig ? day.color : "#333"}`,
                color: timerConfig ? day.color : "#666",
                fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s"
              }}>⚙️</button>
            )}
            {/* Play / Pause / Reset button */}
            <button
              onClick={timerDone ? resetTimer : timerRunning ? resetTimer : startTimer}
              style={{
                width: 52, height: 52, borderRadius: "50%",
                background: timerRunning ? `${day.color}33` : day.color,
                border: `2px solid ${day.color}`,
                color: "#fff", fontSize: timerDone ? 18 : 20,
                cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
                boxShadow: `0 4px 20px ${day.color}44`,
                transition: "all 0.2s"
              }}
            >
              {timerRunning ? "⏹" : timerDone ? "↺" : "▶"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
