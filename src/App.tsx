import { useState } from 'react';
import './App.css';

// Import data
import { beforeStartingData } from './data/beforeStarting';
import { stagesData } from './data/stages';
import { piecesData } from './data/pieces';
import { familyGuideData } from './data/familyGuide';
import { teacherGuideData } from './data/teacherGuide';

// Web Audio API Synth for the keyboard
const noteFrequencies: { [key: string]: number } = {
  "Do": 261.63,
  "Do#": 277.18,
  "Re": 293.66,
  "Re#": 311.13,
  "Mi": 329.63,
  "Fa": 349.23,
  "Fa#": 369.99,
  "Sol": 392.00,
  "Sol#": 415.30,
  "La": 440.00,
  "La#": 466.16,
  "Si": 493.88,
  "Do5": 523.25,
  "Do5#": 554.37,
  "Re5": 587.33,
  "Re5#": 622.25,
  "Mi5": 659.25,
  "Fa5": 698.46,
  "Fa5#": 739.99,
  "Sol5": 783.99,
};

const playNote = (note: string) => {
  const frequency = noteFrequencies[note];
  if (!frequency) return;

  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'triangle'; // Smooth, friendly sound
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    // Fade out to simulate piano key release
    gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.0);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1.0);
  } catch (error) {
    console.warn("Web Audio API is blocked or not supported on this browser.", error);
  }
};

type View = 'home' | 'before' | 'map' | 'family' | 'teacher';

export default function App() {
  // Navigation
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>(null);

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Sound playing keys indicator
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // Keyboard helper
  const handleKeyClick = (note: string) => {
    setActiveKey(note);
    playNote(note);
    setTimeout(() => setActiveKey(null), 200);
  };


  // Pieces study steps accordion
  const [openPieceAccordions, setOpenPieceAccordions] = useState<{ [key: string]: boolean }>({
    'pasos': true,
    'errores': false,
    'consejos': false
  });

  const togglePieceAccordion = (key: string) => {
    setOpenPieceAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Search function
  const filteredSearchResults = () => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    
    const results: Array<{ id: string; name: string; type: 'Etapa' | 'Pieza'; stageId?: string }> = [];
    
    stagesData.forEach(stage => {
      if (stage.title.toLowerCase().includes(query) || stage.description.toLowerCase().includes(query)) {
        results.push({ id: stage.id, name: stage.title, type: 'Etapa' });
      }
    });

    piecesData.forEach(piece => {
      if (piece.name.toLowerCase().includes(query) || piece.objective.toLowerCase().includes(query)) {
        results.push({ id: piece.id, name: `${piece.number} ${piece.name}`, type: 'Pieza', stageId: piece.stageId });
      }
    });

    return results.slice(0, 5);
  };

  const handleSearchResultClick = (result: any) => {
    setSearchQuery('');
    setShowSearchResults(false);
    if (result.type === 'Etapa') {
      setSelectedStageId(result.id);
      setSelectedPieceId(null);
      setCurrentView('map');
    } else {
      setSelectedStageId(result.stageId);
      setSelectedPieceId(result.id);
      setCurrentView('map');
    }
  };

  // Get icons for map nodes
  const stageIcons: { [key: number]: string } = {
    1: "🔍",
    2: "🧘",
    3: "👂",
    4: "🥁",
    5: "🖐️",
    6: "🤝",
    7: "🎵",
    8: "✨",
    9: "🎭",
    10: "🏆"
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-container">
          <div className="header-logo" onClick={() => { setCurrentView('home'); setSelectedStageId(null); setSelectedPieceId(null); }} style={{ cursor: 'pointer' }}>
            <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="Musicala Logo" className="header-logo-img" />
            <div className="logo-text">Ruta Suzuki <span className="logo-sub">Piano I</span></div>
          </div>

          {/* Search bar */}
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Buscar etapa o pieza..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowSearchResults(true); }}
              onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
              onFocus={() => setShowSearchResults(true)}
            />
            {showSearchResults && filteredSearchResults().length > 0 && (
              <div className="search-results-overlay">
                {filteredSearchResults().map(result => (
                  <div key={result.id} className="search-result-item" onMouseDown={() => handleSearchResultClick(result)}>
                    <span className="search-result-name">{result.name}</span>
                    <span className="search-result-type">{result.type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Nav tabs */}
          <nav className="header-nav">
            <button 
              className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => { setCurrentView('home'); setSelectedStageId(null); setSelectedPieceId(null); }}
            >
              Portada
            </button>
            <button 
              className={`nav-btn ${currentView === 'before' ? 'active' : ''}`}
              onClick={() => { setCurrentView('before'); setSelectedStageId(null); setSelectedPieceId(null); }}
            >
              Antes de comenzar
            </button>
            <button 
              className={`nav-btn ${currentView === 'map' ? 'active' : ''}`}
              onClick={() => { setCurrentView('map'); }}
            >
              Recorrido
            </button>
            <button 
              className={`nav-btn ${currentView === 'family' ? 'active' : ''}`}
              onClick={() => { setCurrentView('family'); setSelectedStageId(null); setSelectedPieceId(null); }}
            >
              Familia
            </button>
            <button 
              className={`nav-btn ${currentView === 'teacher' ? 'active' : ''}`}
              onClick={() => { setCurrentView('teacher'); setSelectedStageId(null); setSelectedPieceId(null); }}
            >
              Docentes
            </button>
          </nav>
        </div>
      </header>

      {/* Main Body content */}
      <main className="main-content">
        
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <div className="home-hero">
              <div className="hero-content">
                <span className="hero-badge">Filosofía Musicala</span>
                <h1 className="hero-title">Ruta Suzuki Piano I</h1>
                <p className="hero-subtitle">
                  En Musicala sugerimos un aprendizaje flexible y disfrutable. <strong>No sugerimos abordar todas las piezas del libro clásico de Suzuki de manera rígida</strong>, sino avanzar paso a paso mediante esta selección de piezas clave enfocadas en desarrollar tu expresión y técnica real.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary" onClick={() => setCurrentView('before')}>
                    Explorar bases de práctica 🚀
                  </button>
                  <button className="btn-secondary" onClick={() => setCurrentView('map')}>
                    Ver mapa de canciones 🎹
                  </button>
                </div>
              </div>
              <div className="hero-illustration-container">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/illustrations/hero_piano_journey.png`} 
                  alt="Estudiante frente al piano con una ruta de notas musicales flotantes" 
                  className="hero-img"
                />
              </div>
            </div>

            <div className="info-note" style={{ borderLeftColor: 'var(--color-magenta)' }}>
              <div className="info-note-title" style={{ color: 'var(--color-magenta)' }}>
                <span>✨</span> Nuestra Lista Curada de Repertorio
              </div>
              <p className="info-note-text">
                En lugar de tocar cada ejercicio, sugerimos concentrarnos en estas 6 piezas musicales de gran valor técnico y artístico:
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '16px' }}>
                {piecesData.map(p => (
                  <div key={p.id} className="before-card" style={{ padding: '12px', cursor: 'pointer', textAlign: 'center' }} onClick={() => { setSelectedStageId(p.stageId); setSelectedPieceId(p.id); setCurrentView('map'); }}>
                    <span className="piece-item-num" style={{ display: 'inline-block', marginBottom: '4px' }}>{p.number}</span>
                    <h4 style={{ fontSize: '0.95rem' }}>{p.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-blue)', fontWeight: 600 }}>Ver Ficha →</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick access cards */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
              <div className="before-card" onClick={() => setCurrentView('before')} style={{ cursor: 'pointer' }}>
                <h3>1. Cimientos firmes</h3>
                <p className="before-card-desc">Antes de tocar piezas, prepara tu postura, tu banca y el cuidado de tus deditos relajados.</p>
                <span style={{ color: 'var(--color-magenta)', fontWeight: 700, fontSize: '0.85rem' }}>Explorar cimientos →</span>
              </div>
              <div className="before-card" onClick={() => setCurrentView('map')} style={{ cursor: 'pointer' }}>
                <h3>2. Mapa del Recorrido</h3>
                <p className="before-card-desc">Sigue el camino de las 10 etapas sugeridas y descubre dónde encaja cada pieza del repertorio.</p>
                <span style={{ color: 'var(--color-magenta)', fontWeight: 700, fontSize: '0.85rem' }}>Ver mapa completo →</span>
              </div>
              <div className="before-card" onClick={() => setCurrentView('family')} style={{ cursor: 'pointer' }}>
                <h3>3. Guía Familiar</h3>
                <p className="before-card-desc">Consejos cálidos para acompañar al estudiante en casa de forma amena y libre de estrés.</p>
                <span style={{ color: 'var(--color-magenta)', fontWeight: 700, fontSize: '0.85rem' }}>Leer consejos →</span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: BEFORE STARTING */}
        {currentView === 'before' && (
          <div className="animate-fade-in">
            <div className="section-title-area">
              <div>
                <h2 className="section-title">Antes de comenzar</h2>
                <p className="section-desc">
                  ¡Prepara tu cuerpo y tu piano! Lograr una postura cómoda y hábitos sanos desde el inicio hará que tocar sea un juego divertido y libre de tensiones. Lee y explora estas 10 bases:
                </p>
              </div>
              <button className="btn-primary" onClick={() => setCurrentView('map')}>Ir al Recorrido de Canciones →</button>
            </div>

            <div className="before-grid">
              {beforeStartingData.map((item) => {
                return (
                  <div key={item.id} className="before-card">
                    <div className="before-card-header">
                      <div className="before-card-img-wrap">
                        <img 
                          src={`/assets/illustrations/${item.illustration.replace('.webp', '.png')}`} 
                          alt={item.title} 
                          className="before-card-img"
                        />
                      </div>
                      <h3 className="before-card-title">{item.title}</h3>
                    </div>
                    <p className="before-card-desc">{item.description}</p>
                    
                    <div className="before-card-activity" style={{ marginTop: 'auto' }}>
                      <div className="before-activity-title">Actividad Práctica:</div>
                      <p style={{ margin: 0 }}>{item.activity}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW: MAP / STAGES */}
        {currentView === 'map' && (
          <div className="animate-fade-in">
            
            {/* If no stage or piece is selected, display the full list map */}
            {!selectedStageId && !selectedPieceId && (
              <div className="map-view-container">
                <div className="text-center">
                  <h2 className="section-title" style={{ display: 'inline-block' }}>Ruta de Aprendizaje</h2>
                  <p className="section-desc" style={{ margin: '10px auto' }}>
                    Sigue esta senda sugerida de 10 etapas para explorar tu piano. Haz clic en cualquier estación para ver sus detalles y canciones asociadas.
                  </p>
                </div>

                <div className="map-wrapper">
                  <div className="map-path-vertical">
                    {stagesData.map((stage) => {
                      const stagePieces = piecesData.filter(p => stage.pieces.includes(p.id));
                      return (
                        <div key={stage.id} className="map-node-wrapper">
                          <div 
                            className="map-node-card"
                            data-index={stage.index}
                            onClick={() => setSelectedStageId(stage.id)}
                            aria-label={`Etapa ${stage.index}: ${stage.title}`}
                          >
                            <div className="node-badge-icon">
                              {stageIcons[stage.index] || "🎵"}
                            </div>
                            <div className="node-info">
                              <span className="stage-index-text">Etapa {stage.index}</span>
                              <h3 className="node-title">{stage.title}</h3>
                              <p className="node-desc">{stage.description}</p>
                              {stagePieces.length > 0 && (
                                <div style={{ marginTop: '6px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                  {stagePieces.map(p => (
                                    <span key={p.id} className="piece-item-num" style={{ fontSize: '0.65rem' }}>
                                      {p.number} {p.name}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STAGE DETAIL VIEW */}
            {selectedStageId && !selectedPieceId && (() => {
              const stage = stagesData.find(s => s.id === selectedStageId);
              if (!stage) return <div>Etapa no encontrada</div>;

              const relatedPieces = piecesData.filter(p => stage.pieces.includes(p.id));

              return (
                <div className="stage-detail-container animate-fade-in">
                  <div className="stage-detail-header">
                    <div className="stage-title-wrap">
                      <div className="stage-badge-large">{stageIcons[stage.index]}</div>
                      <div>
                        <span className="stage-index-text">Estación {stage.index} del Recorrido</span>
                        <h2 className="stage-detail-title">{stage.title}</h2>
                      </div>
                    </div>
                    <div className="stage-action-btns">
                      <button className="btn-back" onClick={() => setSelectedStageId(null)}>
                        ⬅️ Volver al Mapa
                      </button>
                    </div>
                  </div>

                  <div className="stage-split-layout">
                    <div className="stage-main-info">
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>{stage.description}</p>
                      
                      <div className="why-box">
                        <h4 className="why-title">¿Por qué es importante esta etapa?</h4>
                        <p className="why-text">{stage.whyItMatters}</p>
                      </div>

                      {/* Accordions */}
                      <div className="accordion-list">
                        
                        <div className="accordion-item" style={{ border: '1px solid #FFE0B2', backgroundColor: '#FFFDF9' }}>
                          <div style={{ padding: '16px 20px' }}>
                            <h4 style={{ color: '#E65100', marginBottom: '8px', fontSize: '1rem' }}>🎧 ¿Qué escuchar en esta etapa?</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{stage.whatToListen}</p>
                          </div>
                        </div>

                        <div className="accordion-item" style={{ border: '1px solid var(--color-border)' }}>
                          <div style={{ padding: '16px 20px' }}>
                            <h4 style={{ color: 'var(--color-blue)', marginBottom: '8px', fontSize: '1rem' }}>💡 Consejos para el estudiante</h4>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {stage.studentTips.map((tip, index) => <li key={index}>{tip}</li>)}
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="stage-sidebar">
                      {/* Related pieces */}
                      <div className="sidebar-box" style={{ background: 'white' }}>
                        <h3 className="sidebar-box-title">Repertorio Sugerido</h3>
                        {relatedPieces.length > 0 ? (
                          <>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                              En Musicala sugerimos concentrarnos en la siguiente pieza clave para esta etapa:
                            </p>
                            <div className="sidebar-pieces-list">
                              {relatedPieces.map(piece => {
                                return (
                                  <div 
                                    key={piece.id} 
                                    className="piece-list-item"
                                    onClick={() => setSelectedPieceId(piece.id)}
                                  >
                                    <div>
                                      <span className="piece-item-num">{piece.number}</span>
                                      <span className="piece-item-name" style={{ marginLeft: '8px' }}>{piece.name}</span>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-blue)', fontWeight: 700 }}>Explorar Ficha →</span>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                            Esta etapa es de preparación y cimientos corporales o auditivos. No tiene una canción obligatoria asignada del libro. ¡Disfruta explorando los conceptos con tu profe!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* PIECE DETAIL VIEW */}
            {selectedStageId && selectedPieceId && (() => {
              const piece = piecesData.find(p => p.id === selectedPieceId);
              if (!piece) return <div>Pieza no encontrada</div>;

              return (
                <div className="piece-detail-container animate-fade-in">
                  <div className="piece-header">
                    <div className="piece-title-group">
                      <span className="piece-badge">{piece.number}</span>
                      <div>
                        <h2 className="piece-title">{piece.name}</h2>
                        <div className="piece-meta-row">
                          <span className="piece-meta-pill">Mano sugerida: <span>{piece.hands}</span></span>
                          <span className="piece-meta-pill" style={{ backgroundColor: 'var(--color-magenta-light)', color: 'var(--color-magenta)', borderColor: 'transparent' }}>Sugerida por Musicala ⭐</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn-back" onClick={() => setSelectedPieceId(null)}>
                      ⬅️ Volver a la Etapa
                    </button>
                  </div>

                  <div className="piece-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      
                      <div className="why-box" style={{ backgroundColor: 'var(--color-blue-light)', borderLeftColor: 'var(--color-blue)' }}>
                        <h4 className="why-title" style={{ color: 'var(--color-blue)' }}>Objetivo de la Canción</h4>
                        <p className="why-text" style={{ color: 'var(--text-dark)' }}>{piece.objective}</p>
                      </div>

                      {/* Accordions */}
                      <div className="accordion-list">
                        
                        <div className={`accordion-item ${openPieceAccordions['pasos'] ? 'open' : ''}`}>
                          <button className="accordion-trigger" onClick={() => togglePieceAccordion('pasos')}>
                            <span>👣 Estudio sugerido paso a paso</span>
                            <span className="accordion-icon">▼</span>
                          </button>
                          {openPieceAccordions['pasos'] && (
                            <div className="accordion-content">
                              <ol style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {piece.stepByStep.map((step, index) => (
                                  <li key={index} style={{ marginBottom: '4px' }}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>

                        <div className={`accordion-item ${openPieceAccordions['errores'] ? 'open' : ''}`}>
                          <button className="accordion-trigger" onClick={() => togglePieceAccordion('errores')}>
                            <span>⚠️ Qué cuidar (Dificultades comunes)</span>
                            <span className="accordion-icon">▼</span>
                          </button>
                          {openPieceAccordions['errores'] && (
                            <div className="accordion-content">
                              <ul>
                                {piece.challenges.map((ch, index) => (
                                  <li key={index} style={{ color: 'var(--text-dark)', marginBottom: '8px' }}>{ch}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="accordion-item" style={{ border: '1px solid #E2F0D9', backgroundColor: '#F9FDF7' }}>
                          <div style={{ padding: '16px 20px' }}>
                            <h4 style={{ color: '#385723', marginBottom: '4px', fontSize: '0.95rem' }}>👪 Para acompañantes en casa:</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{piece.familyTip}</p>
                          </div>
                        </div>

                        <div className="accordion-item" style={{ border: '1px solid #FFE0B2', backgroundColor: '#FFFDF9' }}>
                          <div style={{ padding: '16px 20px' }}>
                            <h4 style={{ color: '#E65100', marginBottom: '4px', fontSize: '0.95rem' }}>💭 Pregunta para ti:</h4>
                            <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>"{piece.reflectionQuestion}"</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {/* Conceptual Keyboard */}
                      <div className="keyboard-section">
                        <h3 className="keyboard-title">🎹 Explora las notas de la melodía</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          Haz clic en las teclas del piano para escuchar su sonido, o toca las notas del patrón rítmico sugerido abajo para seguir el canto:
                        </p>

                        <div className="interactive-keyboard-wrap">
                          <div className="keyboard-keys-container">
                            {/* C4 to G5 keys */}
                            <button className={`piano-key-white ${activeKey === 'Do' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Do')}>Do</button>
                            <button className={`piano-key-black ${activeKey === 'Do#' ? 'active-playing' : ''}`} style={{ left: '32px' }} onClick={() => handleKeyClick('Do#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Re' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Re')}>Re</button>
                            <button className={`piano-key-black ${activeKey === 'Re#' ? 'active-playing' : ''}`} style={{ left: '74px' }} onClick={() => handleKeyClick('Re#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Mi' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Mi')}>Mi</button>
                            
                            <button className={`piano-key-white ${activeKey === 'Fa' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Fa')}>Fa</button>
                            <button className={`piano-key-black ${activeKey === 'Fa#' ? 'active-playing' : ''}`} style={{ left: '158px' }} onClick={() => handleKeyClick('Fa#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Sol' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Sol')}>Sol</button>
                            <button className={`piano-key-black ${activeKey === 'Sol#' ? 'active-playing' : ''}`} style={{ left: '200px' }} onClick={() => handleKeyClick('Sol#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'La' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('La')}>La</button>
                            <button className={`piano-key-black ${activeKey === 'La#' ? 'active-playing' : ''}`} style={{ left: '242px' }} onClick={() => handleKeyClick('La#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Si' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Si')}>Si</button>
                            
                            <button className={`piano-key-white ${activeKey === 'Do5' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Do5')}>Do5</button>
                            <button className={`piano-key-black ${activeKey === 'Do5#' ? 'active-playing' : ''}`} style={{ left: '326px' }} onClick={() => handleKeyClick('Do5#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Re5' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Re5')}>Re5</button>
                            <button className={`piano-key-black ${activeKey === 'Re5#' ? 'active-playing' : ''}`} style={{ left: '368px' }} onClick={() => handleKeyClick('Re5#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Mi5' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Mi5')}>Mi5</button>
                            
                            <button className={`piano-key-white ${activeKey === 'Fa5' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Fa5')}>Fa5</button>
                            <button className={`piano-key-black ${activeKey === 'Fa5#' ? 'active-playing' : ''}`} style={{ left: '452px' }} onClick={() => handleKeyClick('Fa5#')}></button>
                            
                            <button className={`piano-key-white ${activeKey === 'Sol5' ? 'active-playing' : ''}`} onClick={() => handleKeyClick('Sol5')}>Sol5</button>
                          </div>
                          
                          <div className="keyboard-notes-helper">
                            <strong>Notas de inicio de la pieza:</strong>
                            <div className="pattern-flow">
                              {piece.visualPattern.notes.map((note, index) => (
                                <div key={index} className="pattern-note-pill" onClick={() => handleKeyClick(note)}>
                                  <span>{note}</span>
                                  <span className="pattern-note-duration">
                                    {piece.visualPattern.rhythm.split(', ')[index] || 'Negra'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        )}

        {/* VIEW: FAMILY GUIDE */}
        {currentView === 'family' && (
          <div className="animate-fade-in guide-container">
            <div className="section-title-area">
              <div>
                <h2 className="section-title">Guía para el acompañante familiar</h2>
                <p className="section-desc">
                  El rol de la familia en Musicala es crear un entorno de apoyo cálido, motivador y paciente en casa. Acompañar no significa presionar.
                </p>
              </div>
            </div>

            <div className="guide-grid">
              {familyGuideData.map(tip => (
                <div key={tip.id} className="guide-card" style={{ borderLeft: '4px solid var(--color-magenta)' }}>
                  <span className="guide-card-icon">❤️</span>
                  <h3 className="guide-card-title">{tip.title}</h3>
                  <p className="guide-card-text">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="before-card" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <img 
                src={`${import.meta.env.BASE_URL}assets/illustrations/family_practice.png`} 
                alt="Familia practicando piano feliz"
                style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px' }} 
              />
              <div>
                <h4>Un recordatorio con cariño</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                  El doctor Shinichi Suzuki decía: "La música es el lenguaje del corazón". Si apoyamos a nuestros hijos con constancia, paciencia y alegría, desarrollarán una sensibilidad artística hermosa para toda la vida.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: TEACHER GUIDE */}
        {currentView === 'teacher' && (
          <div className="animate-fade-in guide-container">
            <div className="section-title-area">
              <div>
                <h2 className="section-title">Pautas Docentes</h2>
                <p className="section-desc">
                  Observaciones pedagógicas para enriquecer las clases de piano utilizando la metodología CREA de Musicala y optimizando el repertorio sugerido.
                </p>
              </div>
            </div>

            <div className="guide-grid">
              {teacherGuideData.map(item => (
                <div key={item.id} className="guide-card" style={{ borderLeft: '4px solid var(--color-blue)' }}>
                  <span className="guide-card-icon" style={{ color: 'var(--color-blue)' }}>🎓</span>
                  <span className="stage-index-text" style={{ color: 'var(--color-blue)' }}>{item.category}</span>
                  <h3 className="guide-card-title" style={{ marginTop: '-4px' }}>{item.title}</h3>
                  <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-logo">Musicala <span>CREA</span></div>
          <p className="footer-text">
            © {new Date().getFullYear()} Escuela de Artes Musicala. Desarrollado con ❤️ para el aprendizaje del piano Suzuki.
          </p>
        </div>
      </footer>
    </div>
  );
}
