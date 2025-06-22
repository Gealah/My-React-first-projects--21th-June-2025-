import { useState, useRef } from "react";

function BmiImage({ bmi }) {
    if (!bmi) return null;
    const bmiNum = parseFloat(bmi);
    let img = "";
    let alt = "";
    if (bmiNum < 18.5) {
        img = "https://i0.wp.com/2.bp.blogspot.com/-CHuGtuTD0SM/Vhrb8_TQ2qI/AAAAAAAAAb8/IjNZqINQuGU/s1600/Are-You-Underweight-Natural-Remedies-Just-For-You.jpg";
    } else if (bmiNum < 24.9) {
        img = "https://photos.peopleimages.com/picture/202210/2525139-man-athlete-healthy-and-with-cross-arms-smile-and-stand-happy-outdoor-for-workout-warm-up-and-wellness.-portrait-confident-male-and-trainer-ready-for-training-fitness-and-enjoy-health-exercise-fit_400_400.jpg";
    } else if (bmiNum < 29.9) {
        img = "https://compote.slate.com/images/737f6f1c-bba3-40b7-9625-3f42c38f4ebc.jpg";
    } else if (bmiNum < 34.9) {
        img = "https://insightplus.mja.com.au/wp-content/uploads/obesity1.jpg";
    } else {
        img = "https://editorialge.com/wp-content/uploads/2025/03/Is-Gorlock-The-Destroyer-a-Man.jpg";
    }
    return (
        <div style={{ margin: "18px 0" }}>
            <img
                src={img}
                alt={alt}
                style={{
                    width: "250px",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px #87ceeb55",
                    background: "#e3f6fd",
                    padding: "8px"
                }}
            />
            <div style={{ fontSize: "1rem", color: "#3399cc", marginTop: "8px" }}>{alt}</div>
        </div>
    );
}

function BmiText({ bmi }) {
    if (bmi < 18.5) {
        return <div style={{ color: "#2196f3" }}>Underweight¡</div>;
    } else if (bmi < 24.9) {
        return <div style={{ color: "#009688" }}>Normal weight</div>;
    } else if (bmi < 29.9) {
        return <div style={{ color: "#ff9800" }}>Overweight!</div>;
    } else if (bmi < 34.9) {
        return <div style={{ color: "#f44336" }}>Obesity!!</div>;
    } else {
        return <div style={{ color: "#b71c1c" }}>Severe Obesity!!!</div>;
    }
}

export default function Bmi() {
    const [bmi, setBmi] = useState(null);
    const w_input = useRef(null);
    const h_input = useRef(null);

    function calculateBmi() {
        let w = w_input.current.value;
        let h = h_input.current.value;
        if (!w || !h || w <= 0 || h <= 0) {
            alert("Please enter valid weight and height.");
            return;
        }
        const bmiValue = w / ((h / 100) * (h / 100));
        setBmi(bmiValue.toFixed(2));
    }

    // Custom cursor style
    const customCursorStyle = `
        * {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="24" fill="skyblue">➤</text></svg>') 16 0, auto;
        }
    `;

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #e3f6fd 0%, #87ceeb 100%)"
        }}>
            <style>{customCursorStyle}</style>
            <div style={{
                background: "rgba(255,255,255,0.97)",
                borderRadius: "22px",
                boxShadow: "0 8px 32px 0 #87ceeb55",
                padding: "40px 32px",
                minWidth: "320px",
                textAlign: "center"
            }}>
                <h1 style={{ color: "#3399cc", marginBottom: "24px", letterSpacing: "2px" }}>BMI Calculator</h1>
                <div style={{ marginBottom: "18px" }}>
                    <label>
                        <span style={{ marginRight: "8px" }}>Weight</span>
                        <input
                            ref={w_input}
                            type="number"
                            placeholder="kg"
                            style={{
                                padding: "8px",
                                borderRadius: "8px",
                                border: "1px solid #b3e0fc",
                                width: "80px",
                                marginRight: "8px",
                                background: "#f0fbff"
                            }}
                        />
                        <span>kg</span>
                    </label>
                </div>
                <div style={{ marginBottom: "18px" }}>
                    <label>
                        <span style={{ marginRight: "8px" }}>Height</span>
                        <input
                            ref={h_input}
                            type="number"
                            placeholder="cm"
                            style={{
                                padding: "8px",
                                borderRadius: "8px",
                                border: "1px solid #b3e0fc",
                                width: "80px",
                                marginRight: "8px",
                                background: "#f0fbff"
                            }}
                        />
                        <span>cm</span>
                    </label>
                </div>
                <button
                    onClick={calculateBmi}
                    style={{
                        padding: "10px 30px",
                        borderRadius: "8px",
                        border: "none",
                        background: "#3399cc",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        marginBottom: "20px",
                        boxShadow: "0 2px 8px #87ceeb55"
                    }}
                >
                    Calculate
                </button>
                <div style={{ marginTop: "22px", fontSize: "1.2rem" }}>
                    {bmi && (
                        <>
                            <strong>Your BMI:</strong> <span style={{ color: "#00796b" }}>{bmi}</span>
                            <BmiImage bmi={bmi} />
                            <h2 style={{ marginTop: "12px" }}><BmiText bmi={bmi} /></h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}