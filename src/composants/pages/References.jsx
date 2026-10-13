import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

// Les logos sont dans /public/assets/img/references/ (servis à la racine par Vite)
const BASE = '/assets/img/references/';

const logos = [
    { file: 'seeg.png',            alt: 'SEEG' },
    { file: 'sunu-assurances.png', alt: 'SUNU Assurances' },
    { file: 'acd-group.png',       alt: 'ACD Group' },
    { file: 'chimie-gabon.png',    alt: 'Chimie Gabon' },
    { file: 'sing.png',            alt: 'SING - Société d\'Incubation Numérique du Gabon' },
    { file: 'moneygram.png',       alt: 'MoneyGram' },
    { file: 'pmuc.png',            alt: 'PMUC' },
    { file: 'bricorama.png',       alt: 'Bricorama Gabon' },
    { file: 'bamboo.png',          alt: 'Bamboo - Établissement de Microfinance' },
    { file: 'bgfi-bourse.png',     alt: 'BGFI Bourse' },
    { file: 'cdc.png',             alt: 'Caisse des Dépôts et Consignations' },
    { file: 'cima.png',            alt: 'CIMA' },
    { file: 'cofina.png',          alt: 'Cofina' },
    { file: 'banque-mondiale.png', alt: 'Banque Mondiale' },
    { file: 'ceeac.png',           alt: 'CEEAC' },
    { file: 'nsia.png',            alt: 'NSIA Assurances' },
    { file: 'ag2r.png',            alt: 'AG2R La Mondiale' },
    { file: 'allianz.png',         alt: 'Allianz' },
    { file: 'gmc.png',             alt: 'Garantie Mutuelle des Cadres' },
    { file: 'covea.png',           alt: 'Covéa' },
    { file: 'sonam.png',           alt: 'Sonam Assurances' },
    { file: 'malakoff.png',        alt: 'Malakoff Médéric Humanis' },
    { file: 'finafrica.png',       alt: 'Finafrica' },
    { file: 'royal-onyx.png',      alt: 'Royal Onyx Insurance' },
    { file: 'mutlog.png',          alt: 'Mutlog Garanties' },
    { file: 'gras-savoye.png',     alt: 'Gras Savoye' },
    { file: 'prudential.png',      alt: 'Prudential Beneficial' },
    { file: 'axa.png',             alt: 'AXA' },
    { file: 'bpce.png',            alt: 'BPCE Assurances' },
    { file: 'saar.png',            alt: 'SAAR Assurances' },
];

export default function References() {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return;

        const SPEED = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 45; // px / seconde
        const s = { x: 0, vel: 0, hovering: false, dragging: false, lastX: 0, lastT: 0 };
        let raf;
        let last = performance.now();

        const tick = (now) => {
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;

            if (!s.dragging) {
                if (Math.abs(s.vel) > 5) {
                    // inertie après un glissement
                    s.x += s.vel * dt;
                    s.vel *= Math.pow(0.04, dt);
                } else if (!s.hovering) {
                    s.x -= SPEED * dt; // défilement automatique
                }
            }

            // boucle infinie : on reste toujours dans l'intervalle (-w, 0]
            const w = track.scrollWidth / 2;
            if (w > 0) {
                s.x = s.x % w;
                if (s.x > 0) s.x -= w;
            }
            track.style.transform = `translate3d(${s.x}px,0,0)`;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        const onDown = (e) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            s.dragging = true;
            s.vel = 0;
            s.lastX = e.clientX;
            s.lastT = performance.now();
            viewport.setPointerCapture(e.pointerId);
            viewport.classList.add('is_dragging');
        };
        const onMove = (e) => {
            if (!s.dragging) return;
            const t = performance.now();
            const dx = e.clientX - s.lastX;
            const dtm = Math.max(t - s.lastT, 1) / 1000;
            s.x += dx;
            s.vel = 0.6 * (dx / dtm) + 0.4 * s.vel; // vitesse lissée
            s.lastX = e.clientX;
            s.lastT = t;
        };
        const onUp = (e) => {
            if (!s.dragging) return;
            s.dragging = false;
            viewport.classList.remove('is_dragging');
            if (performance.now() - s.lastT > 80) s.vel = 0; // pas d'inertie si on a arrêté avant de relâcher
            if (e.pointerType !== 'mouse') s.hovering = false; // sur mobile, on reprend le défilement
        };
        const onEnter = (e) => { if (e.pointerType === 'mouse') s.hovering = true; };
        const onLeave = () => { s.hovering = false; };

        viewport.addEventListener('pointerdown', onDown);
        viewport.addEventListener('pointermove', onMove);
        viewport.addEventListener('pointerup', onUp);
        viewport.addEventListener('pointercancel', onUp);
        viewport.addEventListener('pointerenter', onEnter);
        viewport.addEventListener('pointerleave', onLeave);

        return () => {
            cancelAnimationFrame(raf);
            viewport.removeEventListener('pointerdown', onDown);
            viewport.removeEventListener('pointermove', onMove);
            viewport.removeEventListener('pointerup', onUp);
            viewport.removeEventListener('pointercancel', onUp);
            viewport.removeEventListener('pointerenter', onEnter);
            viewport.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return (
        <Box className="refs_section">
            <h2 className="refs_title">Ils nous font confiance</h2>

            <div className="refs_viewport" ref={viewportRef}>
                <div className="refs_track" ref={trackRef}>
                    {/* Liste rendue 2 fois uniquement pour la boucle sans coupure (2e copie masquée aux lecteurs d'écran) */}
                    {[0, 1].map((copy) => (
                        <ul className="refs_list" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                            {logos.map((l) => (
                                <li className="refs_item" key={`${copy}-${l.file}`}>
                                    <img src={BASE + l.file} alt={copy === 0 ? l.alt : ''} draggable={false} />
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </Box>
    );
}