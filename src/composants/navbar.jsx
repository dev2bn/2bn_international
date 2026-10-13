import {Box} from "@mui/material";
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import hamburger from '../../public/assets/img/icons/hamburger.png';
import Logo from '/assets/img/logo/logo.png';
import '../index.css';

import icon_menu from '../../public/assets/img/petrolier/menu_icon.png';

export default function Navbar() {
    const [rotate, setRotate] = useState({rotated:false});
    const cancelRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const missions = [
        { to: '/juridique',    label: 'Secteur juridique' },
        { to: '/assurances',   label: 'Secteur assurances' },
        { to: '/petrole',      label: 'Secteur Pétrolier & Minier' },
        { to: '/energy_verte', label: 'Secteur Énergie & Conseil Vert' },
        { to: '/industries',   label: 'Industries & Services' },
    ];

    const closeMega = () => {
        clearTimeout(cancelRef.current);
        setRotate({ rotated: false });
    };

    const mobileLinkStyle = (path, fontSize = '16px', extra = {}) => ({
        color: '#fff',
        textDecoration: 'none',
        fontSize,
        fontWeight: isActive(path) ? 700 : 400,
        ...extra
    });

    return (
        <Box>
            {/* ================= DESKTOP ================= */}
            <Box className="navbar" sx={{padding:'20px 0px', backgroundColor:'#ffffff26',borderBottom:'0.5px solid #ffffff6e',zIndex:80,position:'relative'}}>
                <Box className="navbar-content" sx={{display:'grid', gridTemplateColumns:'1fr 1.5fr 1fr',gap:2, alignItems:'center',justifyContent:'space-between', width: '100%', '& button': { m: 1 }, margin:'0px', padding:'0 0px'}}>
                    <div className="logo_2bn nav_item" style={{padding:'0 0px 0 50px'}}>
                        <h2 style={{fontSize:'16px'}}>
                            <Link to="/"><img src={Logo} alt="2BN International Logo" width="100%" style={{height: '40px'}} /></Link>
                        </h2>
                    </div>

                    <div className="menu nav_item">
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/about">A propos</Link></li>
                            <li
                                onMouseOver={() => { clearTimeout(cancelRef.current); setRotate({ rotated: true }) }}
                                onMouseOut={() => { cancelRef.current = setTimeout(() => setRotate({ rotated: false }), 300); }}
                            >
                                <Link to="#" className="icon_menu">
                                    <span>Nos missions</span>
                                    <span className="img_icon_rotate">
                                        <img src={icon_menu} alt="icon_menu" width='50%' style={{transform: rotate.rotated ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                                    </span>
                                </Link>

                                <Box
                                    className="mega_menu"
                                    onMouseEnter={() => { clearTimeout(cancelRef.current); setRotate({ rotated: true }) }}
                                    onMouseLeave={() => { cancelRef.current = setTimeout(() => setRotate({ rotated: false }), 300); }}
                                    sx={{display: rotate.rotated ? 'flex':'none',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',padding:'2% 4%', zIndex:90,position:'absolute', width:'100%',left:'0',top:'100%',gap:2}}
                                >
                                    {missions.map((m) => (
                                        <div
                                            key={m.to}
                                            className={`mega_menu_item ${isActive(m.to) ? 'active' : ''}`}
                                            style={{width:'23%'}}
                                        >
                                            <Link to={m.to} onClick={closeMega}><span>{m.label}</span></Link>
                                        </div>
                                    ))}
                                </Box>
                            </li>
                            <li><Link to="/carriere">Carrière</Link></li>
                        </ul>
                    </div>

                    <div className="nav_item nav_contact_btn" style={{display:'grid',placeItems:'center', gridTemplateColumns:'repeat(2, 1fr)',gap:'0',textAlign:'right',padding:'0 50px 0 0px',color:'#ffff'}}>
                        <Link to="/schedule"><Button variant="contained" size="small" sx={{fontSize:'9px', padding:'6px 13px 4px 13px!important',minWidth: '100px', borderRadius:'50px',backgroundColor:'#03285973'}}>Rencontrez-nous</Button></Link>
                        <Link to="/contact" className="right_button"><Button variant="contained" size="small" sx={{fontSize:'9px', padding:'6px 13px 4px 13px!important',minWidth: '100px', borderRadius:'50px',backgroundColor:'#03285973'}}>Contactez-nous</Button></Link>
                    </div>
                </Box>
            </Box>

            {/* ================= MOBILE ================= */}
            <Box className="mobile_navbar" sx={{padding:'20px 20px 20px 20px',boxSizing:'border-box', backgroundColor:'#ffffff26',borderBottom:'0.5px solid #ffffff6e',zIndex:80,position:'relative'}}>
                <Box className="navbar-content" sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '100%', '& button': { m: 1 }, margin:'0px', padding:'0 0px'}}>
                    <div className="logo_2bn nav_item">
                        <h2 style={{fontSize:'16px'}}>
                            <Link to="/"><img src={Logo} alt="2BN International Logo" width="100%" style={{height: '40px'}} /></Link>
                        </h2>
                    </div>
                    <div className="menu_mobile" onClick={() => setMobileMenuOpen(true)} style={{cursor:'pointer'}}>
                        <img src={hamburger} alt="menu" width="70%"/>
                    </div>
                </Box>

                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    right: mobileMenuOpen ? 0 : '-100%',
                    width: '80%',
                    maxWidth: '400px',
                    height: '100vh',
                    backgroundColor: '#032859',
                    transition: 'right 0.3s ease-in-out',
                    zIndex: 999,
                    overflowY: 'auto',
                    padding: '20px'
                }}>
                    <Box sx={{display:'flex', justifyContent:'flex-end', marginBottom:'30px'}}>
                        <span onClick={() => setMobileMenuOpen(false)} style={{color:'#fff', fontSize:'30px', cursor:'pointer'}}>×</span>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle('/', '16px', {padding:'10px 0', borderBottom:'1px solid #ffffff33'})}>Accueil</Link>

                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle('/about', '16px', {padding:'10px 0', borderBottom:'1px solid #ffffff33'})}>A propos</Link>

                        <Box>
                            <Box onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)} sx={{color:'#fff', fontSize:'16px', padding:'10px 0', borderBottom:'1px solid #ffffff33', cursor:'pointer', display:'flex',paddingLeft:'50px',gap:2,justifyContent:'center', alignItems:'center'}}>
                                <span>Nos missions</span>
                                <img src={icon_menu} alt="icon_menu" width='20px' style={{transform: mobileSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.3s'}} />
                            </Box>

                            <Box sx={{
                                display: mobileSubMenuOpen ? 'flex' : 'none',
                                flexDirection: 'column',
                                gap: '10px',
                                paddingLeft: '20px',
                                marginTop: '10px'
                            }}>
                                {missions.map((m) => (
                                    <Link
                                        key={m.to}
                                        to={m.to}
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={mobileLinkStyle(m.to, '14px', {padding:'8px 0'})}
                                    >
                                        {m.label}
                                    </Link>
                                ))}
                            </Box>
                        </Box>

                        <Link to="/carriere" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle('/carriere', '16px', {padding:'10px 0', borderBottom:'1px solid #ffffff33'})}>Carrière</Link>

                        {/* Boutons contact */}
                        <Box sx={{display:'flex', flexDirection:'column', gap:'15px', marginTop:'20px'}}>
                            <Link to="/schedule" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="contained" fullWidth sx={{fontSize:'12px', padding:'10px', borderRadius:'50px', backgroundColor:'#fff', color:'#032859'}}>Rencontrez-nous</Button>
                            </Link>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="contained" fullWidth sx={{fontSize:'12px', padding:'10px', borderRadius:'50px', backgroundColor:'#fff', color:'#032859'}}>Contactez-nous</Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* Overlay */}
                {mobileMenuOpen && (
                    <Box onClick={() => setMobileMenuOpen(false)} sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 998
                    }} />
                )}
            </Box>
        </Box>
    )
}