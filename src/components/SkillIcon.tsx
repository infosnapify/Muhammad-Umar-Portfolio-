import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaSnapchatGhost,
  FaFacebook,
  FaGoogle,
  FaGithub
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiRuby,
  SiTypescript,
  SiTailwindcss,
  SiElectron,
  SiSupabase,
  SiMeta,
  SiGoogleads,
  SiWordpress,
  SiNextdotjs,
  SiBootstrap
} from 'react-icons/si';
import { TrendingUp, Search, Code, Megaphone, Share2, Target, Sparkles, MapPin } from 'lucide-react';

interface SkillIconProps {
  iconName: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ iconName, className = 'w-6 h-6' }) => {
  const renderIcon = () => {
    switch (iconName) {
      case 'FaHtml5':
        return <FaHtml5 />;
      case 'FaCss3Alt':
        return <FaCss3Alt />;
      case 'FaJs':
        return <FaJs />;
      case 'FaPython':
        return <FaPython />;
      case 'SiCplusplus':
        return <SiCplusplus />;
      case 'SiRuby':
        return <SiRuby />;
      case 'SiTypescript':
        return <SiTypescript />;
      case 'FaReact':
        return <FaReact />;
      case 'FaNodeJs':
        return <FaNodeJs />;
      case 'SiTailwindcss':
        return <SiTailwindcss />;
      case 'SiElectron':
        return <SiElectron />;
      case 'SiSupabase':
        return <SiSupabase />;
      case 'SiNextdotjs':
        return <SiNextdotjs />;
      case 'SiBootstrap':
        return <SiBootstrap />;
      case 'FaSnapchatGhost':
      case 'SiSnapchat':
        return <FaSnapchatGhost />;
      case 'SiMeta':
      case 'Meta':
        return <SiMeta />;
      case 'FaFacebook':
      case 'Facebook':
        return <FaFacebook />;
      case 'SiGoogleads':
      case 'GoogleAds':
        return <SiGoogleads />;
      case 'FaGoogle':
        return <FaGoogle />;
      case 'SiWordpress':
        return <SiWordpress />;
      case 'Megaphone':
        return <Megaphone className="w-full h-full" />;
      case 'Share2':
        return <Share2 className="w-full h-full" />;
      case 'Target':
        return <Target className="w-full h-full" />;
      case 'TrendingUp':
        return <TrendingUp className="w-full h-full" />;
      case 'Search':
        return <Search className="w-full h-full" />;
      case 'MapPin':
        return <MapPin className="w-full h-full" />;
      default:
        return <Code className="w-full h-full" />;
    }
  };

  return (
    <span className={`inline-flex items-center justify-center text-current ${className}`}>
      {renderIcon()}
    </span>
  );
};

