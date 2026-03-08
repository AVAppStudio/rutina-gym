import { useState } from "react";

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

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [checked, setChecked] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [completedDay, setCompletedDay] = useState(null);

  const day = routine[activeDay];

  const toggleCheck = (key) => {
    const newChecked = { ...checked, [key]: !checked[key] };
    setChecked(newChecked);

    // Check if all exercises of current day are now completed
    const total = routine[activeDay].exercises.length;
    const doneCount = routine[activeDay].exercises.filter((_, i) => newChecked[`${activeDay}-${i}`]).length;
    if (doneCount === total && !checked[key] === true) {
      setTimeout(() => {
        setCompletedDay(activeDay);
        setShowModal(true);
      }, 400);
    }
  };

  const handleReset = () => {
    const newChecked = { ...checked };
    routine[completedDay].exercises.forEach((_, i) => {
      delete newChecked[`${completedDay}-${i}`];
    });
    setChecked(newChecked);
    setShowModal(false);
    setCompletedDay(null);
  };

  const handleKeep = () => {
    setShowModal(false);
    setCompletedDay(null);
  };

  const completedCount = day.exercises.filter((_, i) => checked[`${activeDay}-${i}`]).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Georgia', serif",
      color: "#f0ede8",
      paddingBottom: 80
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${day.color}22, #0a0a0f)`,
        borderBottom: `1px solid ${day.color}33`,
        padding: "48px 24px 24px",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)"
      }}>
        <div style={{ fontSize: 11, letterSpacing: "0.25em", color: day.color, textTransform: "uppercase", marginBottom: 8, fontFamily: "monospace" }}>
          RUTINA FEMENINA · HIPERTROFIA & FUERZA
        </div>
        <h1 style={{ fontSize: 26, fontWeight: "normal", margin: 0, letterSpacing: "0.05em" }}>
          Plan de <span style={{ color: day.color, fontStyle: "italic" }}>4 Días</span>
        </h1>
      </div>

      {/* Day Tabs */}
      <div style={{ display: "flex", gap: 8, padding: "16px 16px 0", overflowX: "auto", justifyContent: "center" }}>
        {routine.map((d, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            style={{
              background: activeDay === i ? d.color : "transparent",
              border: `1.5px solid ${activeDay === i ? d.color : "#333"}`,
              borderRadius: 12,
              padding: "10px 14px",
              cursor: "pointer",
              color: activeDay === i ? "#fff" : "#888",
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              fontWeight: activeDay === i ? "bold" : "normal"
            }}
          >
            {d.emoji} DÍA {d.day}
          </button>
        ))}
      </div>

      {/* Day Content */}
      <div style={{ padding: "20px 16px 0", maxWidth: 600, margin: "0 auto" }}>
        {/* Day Header Card */}
        <div style={{
          background: `linear-gradient(135deg, ${day.color}18, transparent)`,
          border: `1px solid ${day.color}44`,
          borderRadius: 20,
          padding: "22px 20px 18px",
          marginBottom: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <span style={{ fontSize: 40 }}>{day.emoji}</span>
            <div>
              <div style={{ fontSize: 11, color: day.color, letterSpacing: "0.2em", fontFamily: "monospace", marginBottom: 4 }}>DÍA {day.day}</div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: "normal", letterSpacing: "0.08em" }}>{day.label}</h2>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div style={{ fontSize: 22, fontWeight: "bold", color: day.color, fontFamily: "monospace" }}>{completedCount}/{day.exercises.length}</div>
              <div style={{ fontSize: 10, color: "#666", fontFamily: "monospace" }}>completados</div>
            </div>
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 4, height: 4, marginBottom: 14 }}>
            <div style={{
              background: `linear-gradient(90deg, ${day.color}, ${day.accent})`,
              height: "100%",
              borderRadius: 4,
              width: `${(completedCount / day.exercises.length) * 100}%`,
              transition: "width 0.4s ease"
            }} />
          </div>

          <div style={{ fontSize: 11, color: "#888", fontFamily: "monospace", marginBottom: 10 }}>🎯 {day.focus}</div>
          <div style={{
            padding: "10px 14px",
            background: `${day.color}11`,
            borderRadius: 10,
            fontSize: 12,
            color: day.accent,
            fontStyle: "italic",
            lineHeight: 1.5
          }}>
            💡 {day.tip}
          </div>
        </div>

        {/* Exercises */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {day.exercises.map((ex, i) => {
            const key = `${activeDay}-${i}`;
            const done = checked[key];
            return (
              <div
                key={i}
                onClick={() => toggleCheck(key)}
                style={{
                  background: done ? `${day.color}15` : "#13131e",
                  border: `1px solid ${done ? day.color + "55" : "#222"}`,
                  borderRadius: 16,
                  padding: "16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  opacity: done ? 0.7 : 1,
                  userSelect: "none",
                  WebkitUserSelect: "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%",
                    border: `2px solid ${done ? day.color : "#444"}`,
                    background: done ? day.color : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2, transition: "all 0.2s"
                  }}>
                    {done && <span style={{ color: "#fff", fontSize: 13 }}>✓</span>}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                      <span style={{
                        fontSize: 14, fontWeight: "600",
                        textDecoration: done ? "line-through" : "none",
                        color: done ? "#666" : "#f0ede8",
                        letterSpacing: "0.02em"
                      }}>{ex.name}</span>
                      <span style={{
                        fontSize: 9, letterSpacing: "0.12em",
                        background: ex.type === "compound" ? `${day.color}22` : "#1e1e2e",
                        color: ex.type === "compound" ? day.accent : "#555",
                        padding: "2px 7px", borderRadius: 20, fontFamily: "monospace",
                        textTransform: "uppercase"
                      }}>
                        {ex.type === "compound" ? "COMPUESTO" : "AISLAMIENTO"}
                      </span>
                      {ex.video && (
                        <a
                          href={ex.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 4,
                            background: "#FF0000",
                            color: "#fff",
                            padding: "2px 8px",
                            borderRadius: 20,
                            fontSize: 9,
                            fontFamily: "monospace",
                            letterSpacing: "0.1em",
                            textDecoration: "none",
                            fontWeight: "bold",
                            flexShrink: 0
                          }}
                        >
                          ▶ VER
                        </a>
                      )}
                    </div>

                    <div style={{ display: "flex", gap: 20, marginBottom: 8 }}>
                      {[
                        { label: "SERIES", val: ex.sets },
                        { label: "REPS", val: ex.reps },
                        { label: "DESCANSO", val: ex.rest }
                      ].map(({ label, val }) => (
                        <div key={label}>
                          <div style={{ fontSize: 15, fontWeight: "bold", color: day.color, fontFamily: "monospace" }}>{val}</div>
                          <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.12em", fontFamily: "monospace" }}>{label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: 12, color: "#777", fontStyle: "italic", lineHeight: 1.4 }}>
                      {ex.notes}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* General notes */}
        <div style={{
          marginTop: 24,
          padding: "18px",
          background: "#0f0f1a",
          borderRadius: 16,
          border: "1px solid #1e1e30"
        }}>
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

      {/* Completion Modal */}
      {showModal && completedDay !== null && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        }}>
          <div style={{
            background: "#13131e",
            border: `1px solid ${routine[completedDay].color}55`,
            borderRadius: 24,
            padding: "36px 28px",
            maxWidth: 340,
            width: "100%",
            textAlign: "center",
            boxShadow: `0 0 60px ${routine[completedDay].color}22`
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
              <br/>¿Quieres limpiar el día para la próxima sesión?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                onClick={handleReset}
                style={{
                  background: routine[completedDay].color,
                  border: "none", borderRadius: 14, padding: "14px",
                  color: "#fff", fontSize: 14, fontFamily: "monospace",
                  letterSpacing: "0.1em", cursor: "pointer", fontWeight: "bold"
                }}
              >
                ✓ SÍ, LIMPIAR PARA LA PRÓXIMA
              </button>
              <button
                onClick={handleKeep}
                style={{
                  background: "transparent", border: "1px solid #333",
                  borderRadius: 14, padding: "14px", color: "#666",
                  fontSize: 13, fontFamily: "monospace",
                  letterSpacing: "0.08em", cursor: "pointer"
                }}
              >
                MANTENER COMO ESTÁ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
