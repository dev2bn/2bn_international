import { useState } from "react";
import {Box} from "@mui/material";
import juridique_banner from '/assets/img/juridique/juridique_banner.webp';
import fc_conformite from '/assets/img/juridique/fc_conformite.jpg';
import juridique_accompagnement from '/assets/img/juridique/juridique_accompagnement.jpg';
import juridique_pourquoi_nous from '/assets/img/juridique/juridique_pourquoi_nous.jpg';

const CONTENT = {
    fiscal: {
        title: ["Service Juridique, ", "Fiscal & Conformité"],
        paragraphs: [
            "Chez 2BN International, nous aidons les entreprises, les institutions et les dirigeants à sécuriser leurs opérations et à anticiper les risques réglementaires. En tant que réseau panafricain, nous combinons la maîtrise des cadres juridiques locaux et une vision globale pour vous garantir une protection optimale.",
            "Notre approche repose sur une méthodologie rigoureuse, une veille juridique et fiscale continue et un accompagnement personnalisé : droit des affaires, droit social, fiscalité et conformité réglementaire sont traités par une seule et même équipe.",
        ],
        highlight: "Notre objectif est simple : transformer la contrainte juridique et fiscale en un levier de stabilité et de performance pour votre organisation.",
        cardsTitle: ["", "Zéro sanction", " : les risques dont nous vous préservons"],
        cardsIntro: "Gérer son entreprise sans expertise juridique et fiscale, c'est s'exposer inutilement. Voici les dangers réels que nous neutralisons pour vous :",
        cardsVariant: "list",
        asideTitle: "Votre assurance tous risques",
        asideText: "Confier votre gestion juridique et fiscale à nos experts, c'est vous protéger contre l'imprévu juridique et fiscal.",
        cards: [
            { title: "Sanctions CNSS / CNAMGS", text: "Fini les redressements systématiques : nous verrouillons vos déclarations sociales." },
            { title: "Contentieux prud'homaux", text: "Nous désamorçons les litiges avec les salariés avant qu'ils ne deviennent des procès coûteux." },
            { title: "Redressements fiscaux", text: "Nous éliminons les anomalies qui attirent l'attention de l'administration." },
            { title: "Pénalités de retard", text: "Fin des intérêts moratoires qui grignotent vos marges sans aucune valeur ajoutée." },
            { title: "Incertitude législative", text: "Nous suivons les réformes (Code du travail, fiscalité) et maîtrisons le risque pour vous." },
        ],
    },
    accompagnement: {
        title: ["Un accompagnement ", "sur mesure", " pour vos enjeux juridiques"],
        paragraphs: [
            "Nous mettons à votre disposition une équipe pluridisciplinaire d'experts pour vous épauler à chaque étape de la vie de votre entreprise :",
        ],
        cardsVariant: "blue",
        cards: [
            { title: "Droit des affaires & Secrétariat juridique", text: "Constitution de sociétés (SARL, SA, SAS, succursales), rédaction et modification des statuts, gestion des Assemblées Générales, cessions de parts et accompagnement dans vos restructurations." },
            { title: "Sécurisation des contrats", text: "Rédaction, révision et négociation de vos contrats commerciaux, baux et conventions de partenariat afin de prévenir tout risque de contentieux." },
            { title: "Droit social & Gestion RH", text: "Audit de conformité sociale, accompagnement dans la gestion des contrats de travail, procédures disciplinaires et relations avec l'administration du travail." },
            { title: "Assistance & Optimisation fiscale", text: "Préparation des déclarations, sécurisation de vos positions fiscales et assistance lors des contrôles et redressements." },
            { title: "Gestion des contentieux & Recouvrement", text: "Prévention des litiges, recouvrement amiable ou judiciaire de créances et suivi rigoureux de vos dossiers en contentieux." },
            { title: "Conformité & Gouvernance", text: "Mise aux normes réglementaires (gouvernance, RGPD, LCB-FT), cartographie des risques et suivi des évolutions législatives." },
        ],
    },
    pourquoi: {
        title: ["Pourquoi confier votre gestion juridique à ", "2BN International", " ?"],
        paragraphs: [],
        cardsVariant: "blue",
        cards: [
            { title: "Rigueur et conformité", text: "Nos procédures strictes neutralisent les risques de redressements fiscaux ou sociaux et préservent la sérénité de votre direction." },
            { title: "Gain d'efficacité", text: "En externalisant la gestion administrative et juridique, vous libérez du temps stratégique pour vous concentrer sur le cœur de votre activité." },
            { title: "Transparence et suivi", text: "Vous bénéficiez d'un suivi fluide et d'indicateurs clairs pour piloter vos engagements en toute confiance." },
            { title: "Solutions digitales", text: "Un portail client offre une transparence totale et un pilotage en temps réel de vos dossiers juridiques et fiscaux." },
            { title: "Une équipe d'experts reconnus", text: "Experts-comptables, juristes fiscalistes et managers issus de grands cabinets internationaux, réunis au sein d'une même équipe." },
            { title: "Des charges de structure maîtrisées", text: "L'externalisation de votre fonction juridique et fiscale réduit vos coûts fixes ainsi que vos risques de contentieux." },
        ],
        highlight: "Plus qu'un prestataire, un véritable bouclier juridique et fiscal face aux mutations du droit des affaires, du droit social et de la fiscalité.",
    },
};

const TABS = [
    { id: "fiscal", cls: "img_one", label: "Fiscal & Conformité", img: fc_conformite },
    { id: "accompagnement", cls: "img_two", label: "Accompagnement Juridique", img: juridique_accompagnement },
    { id: "pourquoi", cls: "img_three", label: "Pourquoi Nous ?", img: juridique_pourquoi_nous },
];

const renderTitle = (parts) =>
    parts.map((p, i) => (i % 2 ? <span className="upfront_bl_background" key={i}>{p}</span> : p));

export default function Juridique(){
    const [active, setActive] = useState("fiscal"); // "Fiscal & Conformité" par défaut
    const content = CONTENT[active];

    const onKey = (e, id) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive(id);
        }
    };

    return(
        <Box className="juridique_page">
            <Box>
                <div className="juridique_banner mobile_banner" style={{padding:'20% 0% 5% 8%',backgroundImage:`url(${juridique_banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',textAlign:'left',color:'white',position:'relative'}}>
                    <h1 style={{fontWeight:'300',position:'relative'}}>Nos missions - Juridique</h1>
                </div>
            </Box>
            <Box className="page_content_first_section">
                <div className="juridique_section_one">
                    transformer la contrainte juridique et fiscale en un <span className="upfront">levier de stabilité</span> et de performance pour votre organisation.
                </div>
                <div className="juridique_section_empty">
                </div>
            </Box>
            <Box className="page_content_second_section" role="tablist" aria-label="Services juridiques">
                {TABS.map((t) => (
                    <div
                        key={t.id}
                        className={`juridique_img ${t.cls} juridique_tab${active === t.id ? " is_active" : ""}`}
                        role="tab"
                        tabIndex={0}
                        aria-selected={active === t.id}
                        aria-controls="juridique_panel"
                        onClick={() => setActive(t.id)}
                        onKeyDown={(e) => onKey(e, t.id)}
                    >
                        <img src={t.img} alt={t.label} />
                    </div>
                ))}
            </Box>

            {/* Contenu dynamique */}
            <Box className="juridique_content about_main_content" id="juridique_panel" role="tabpanel">
                <div className="juridique_title">
                    <h2>{renderTitle(content.title)}</h2>
                </div>
                <div className="main_container juridique_content_inner" key={active}>

                    <div className="juridique_text">
                        {content.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {content.highlight && active === "fiscal" && (
                        <div className="juridique_highlight">{content.highlight}</div>
                    )}

                    {content.cardsTitle && (
                        <h2 className="juridique_subtitle">{renderTitle(content.cardsTitle)}</h2>
                    )}
                    {content.cardsIntro && (
                        <div className="juridique_text"><p>{content.cardsIntro}</p></div>
                    )}

                    {content.cardsVariant === "list" ? (
                        <div className="juridique_risks">
                            <div className="juridique_risks_aside">
                                <span className="juridique_risks_aside_title">{content.asideTitle}</span>
                                <span className="juridique_risks_aside_text">{content.asideText}</span>
                            </div>
                            <div className="juridique_risks_list">
                                {content.cards.map((c, i) => (
                                    <div className="juridique_risk" key={c.title}>
                                        <span className="juridique_risk_num">{String(i + 1).padStart(2, "0")}</span>
                                        <div className="juridique_risk_body">
                                            <span className="juridique_risk_title">{c.title}</span>
                                            <span className="juridique_risk_text">{c.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : content.cardsVariant === "blue" ? (
                        <div className="jx_grid">
                            {content.cards.map((c) => (
                                <article className="jx_card" key={c.title}>
                                    <h3 className="jx_title">{c.title}</h3>
                                    <p className="jx_text">{c.text}</p>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className={`juridique_cards juridique_cards_${content.cardsVariant}`}>
                            {content.cards.map((c) => (
                                <div className="juridique_card" key={c.title}>
                                    <div>
                                        <span className="value_title juridique_card_title">{c.title}</span><br />
                                        <span className="value_description juridique_card_text">{c.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {content.highlight && active !== "fiscal" && (
                        <div className="juridique_highlight">{content.highlight}</div>
                    )}
                </div>
            </Box>
        </Box>
    )
}