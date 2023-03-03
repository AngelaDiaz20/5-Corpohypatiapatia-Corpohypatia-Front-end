import React, { useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLogo,
    SSidebar,
    SSidebarButton,
    SInfo,
    SUserType, SUserState,
} from "./styles";

import logoSVG from "../../../assets/img/brandReduce-CorpoHypatia.png";
import logo2SVG from "../../../assets/img/CorpoHypatia-side.png";

import {
    VscFolderOpened,
    VscNewFolder,
} from "react-icons/vsc";
import {
    AiOutlineHome,
    AiOutlineSetting
} from "react-icons/ai"
import {
    HiOutlineUserGroup,
    HiOutlineUserAdd,
} from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { BsBuilding} from "react-icons/bs";
import axios from "axios";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    function logout() {
        localStorage.removeItem('token');
    }

    async function invalidateToken() {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('(aqui va la ruta del back)', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            logout();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    {!sidebarOpen ? <FaBars/> : <CgClose/>}
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" width={sidebarOpen ? 0 : 50}/>
                {sidebarOpen && <img src={logo2SVG} alt="logo"/>}
            </SLogo>
            {
                sidebarOpen &&
                <SInfo>
                    <SUserType>
                        Administrador
                    </SUserType>
                    <SUserState>
                        Activo
                    </SUserState>
                </SInfo>
            }
            <SDivider />
            {linksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <SLinkLabel>{label}</SLinkLabel>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" onClick={label === "Logout" && invalidateToken} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
    },
    {
        label: "Entidad",
        icon: <BsBuilding />,
        to: "/entidad-solicitante",
    },
    {
        label: "Lista de proyectos",
        icon: <VscFolderOpened />,
        to: "/admin-projects",
    },
    {
        label: "Crear proyectos",
        icon: <VscNewFolder />,
        to: "/step",
    },
    {
        label: "Lista de usuarios",
        icon: <HiOutlineUserGroup />,
        to: "/#",
    },
    {
        label: "Agregar usuarios",
        icon: <HiOutlineUserAdd />,
        to: "/user-register",
    },

];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
];

export default Sidebar;
