import { useMemo, useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState("Laptop");
  const [faqOpen, setFaqOpen] = useState(null);

  const result = useMemo(() => {
    const max = 15000;
    const amount = Math.min(Number(value) || 0, max);
    const deductible = amount * 0.1;
    const indemnization = amount - deductible;

    return {
      amount,
      deductible,
      indemnization,
    };
  }, [value]);

  const faqs = [
    {
      question: "¿Qué necesito para reclamar?",
      answer:
        "Necesitas una denuncia formal, evidencia del siniestro y validación de pertenencias registradas.",
    },
    {
      question: "¿El seguro cubre celulares?",
      answer:
        "Sí, los dispositivos móviles están cubiertos dentro del límite de indemnización.",
    },
    {
      question: "¿Cuál es el límite máximo?",
      answer:
        "El límite máximo de indemnización es de $15,000 MXN por evento.",
    },
    {
      question: "¿El seguro aplica en transporte público?",
      answer:
        "Sí, la cobertura está diseñada especialmente para trayectos estudiantiles.",
    },
  ];

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        background: "#F5F7FA",
        color: "#0f172a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 65%, #f59e0b 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            top: "-100px",
            left: "-100px",
            filter: "blur(30px)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            maxWidth: "1000px",
            color: "white",
            animation: "fadeIn 1s ease",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "220px",
              margin: "0 auto 40px",
              borderRadius: "40px",
              background:
                "linear-gradient(135deg,#facc15 0%, #f59e0b 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#0f172a",
              }}
            >
              <h1
                style={{
                  fontSize: "70px",
                  margin: 0,
                  fontWeight: "900",
                }}
              >
                SRC
              </h1>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Seguro Regreso a Casa
              </p>
            </div>
          </div>

          <h1
            style={{
              fontSize: "70px",
              marginBottom: "20px",
              fontWeight: "900",
            }}
          >
            Seguro Regreso a Casa
          </h1>

          <p
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              color: "#dbeafe",
            }}
          >
            El cuidado inteligente que la comunidad UNAM merece
          </p>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
              color: "#e2e8f0",
              fontSize: "18px",
            }}
          >
            Protección especializada para estudiantes de la FES Acatlán durante
            sus trayectos casa–escuela.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => goTo("coverages")}
              style={{
                background: "#facc15",
                color: "#0f172a",
                border: "none",
                padding: "18px 35px",
                borderRadius: "18px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Ver Coberturas
            </button>

            <button
              onClick={() => goTo("simulator")}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "18px 35px",
                borderRadius: "18px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Simular indemnización
            </button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section
        style={{
          padding: "100px 20px",
          background: "#dbeafe",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "50px",
                marginBottom: "30px",
                fontWeight: "900",
                color: "#0f172a",
              }}
            >
              ¿Por qué nace este seguro?
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#334155",
              }}
            >
              Este seguro nace tras la necesidad de los alumnos por inseguridad
              en el transporte público y la intranquilidad de perder sus
              pertenencias importantes.
            </p>

            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#334155",
              }}
            >
              Nuestro objetivo es brindar tranquilidad, respaldo económico y
              protección para la comunidad estudiantil.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px",
            }}
          >
            {[
              ["$100", "Prima mensual"],
              ["24/7", "Protección"],
              ["15K", "Cobertura máxima"],
              ["UNAM", "Enfoque estudiantil"],
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "35px",
                  borderRadius: "25px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  style={{
                    fontSize: "40px",
                    marginBottom: "10px",
                    color: "#1e3a8a",
                  }}
                >
                  {item[0]}
                </h3>

                <p style={{ color: "#475569" }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGES */}
      <section
        id="coverages"
        style={{
          padding: "100px 20px",
          background: "#F5F7FA",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "70px",
            fontWeight: "900",
          }}
        >
          Coberturas principales
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "Laptop",
            "Celular",
            "Tablet",
            "Mochila",
            "Documentos",
            "Objetos escolares",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "30px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#dbeafe",
                  borderRadius: "20px",
                  marginBottom: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#1e3a8a",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {index + 1}
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "15px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.7",
                }}
              >
                Protección para pertenencias esenciales durante trayectos
                estudiantiles.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SIMULADOR */}
      <section
        id="simulator"
        style={{
          padding: "100px 20px",
          background: "#1e3a8a",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "55px",
              marginBottom: "60px",
              fontWeight: "900",
            }}
          >
            Simulador de indemnización
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "40px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "40px",
                borderRadius: "30px",
                backdropFilter: "blur(10px)",
              }}
            >
              <label style={{ display: "block", marginBottom: "10px" }}>
                Tipo de objeto
              </label>

              <select
                value={item}
                onChange={(e) => setItem(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "15px",
                  border: "none",
                  marginBottom: "25px",
                }}
              >
                <option>Laptop</option>
                <option>Celular</option>
                <option>Tablet</option>
                <option>Mochila</option>
              </select>

              <label style={{ display: "block", marginBottom: "10px" }}>
                Valor aproximado
              </label>

              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ejemplo: 12000"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "15px",
                  border: "none",
                }}
              />
            </div>

            <div
              style={{
                background: "white",
                color: "#0f172a",
                padding: "40px",
                borderRadius: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "35px",
                  marginBottom: "30px",
                  color: "#1e3a8a",
                }}
              >
                Resultado estimado
              </h3>

              <p style={{ marginBottom: "15px", fontSize: "20px" }}>
                Objeto: <strong>{item}</strong>
              </p>

              <p style={{ marginBottom: "15px", fontSize: "20px" }}>
                Valor declarado:
                <strong>
                  {" "}
                  ${result.amount.toLocaleString()} MXN
                </strong>
              </p>

              <p style={{ marginBottom: "15px", fontSize: "20px" }}>
                Deducible:
                <strong>
                  {" "}
                  ${result.deductible.toLocaleString()} MXN
                </strong>
              </p>

              <h2
                style={{
                  marginTop: "40px",
                  fontSize: "40px",
                  color: "#1e3a8a",
                }}
              >
                ${result.indemnization.toLocaleString()} MXN
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "100px 20px",
          background: "#dbeafe",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "55px",
              marginBottom: "60px",
              fontWeight: "900",
            }}
          >
            Preguntas frecuentes
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setFaqOpen(faqOpen === index ? null : index)
              }
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "25px",
                marginBottom: "20px",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: faqOpen === index ? "20px" : "0",
                }}
              >
                {faq.question}
              </h3>

              {faqOpen === index && (
                <p
                  style={{
                    color: "#475569",
                    lineHeight: "1.8",
                  }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "35px",
            marginBottom: "15px",
          }}
        >
          Seguro Regreso a Casa
        </h2>

        <p
          style={{
            color: "#cbd5e1",
          }}
        >
          Proyecto académico · FES Acatlán · UNAM
        </p>
      </footer>
    </div>
  );
}