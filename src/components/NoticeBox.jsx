import React from 'react';
import { AlertTriangle, Info, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function NoticeBox({
  type = 'warning', // 'warning' | 'info' | 'dark' | 'success'
  title,
  children,
  icon
}) {
  const getIcon = () => {
    if (icon) return icon;
    switch (type) {
      case 'warning':
        return <AlertTriangle size={22} className="notice-icon" />;
      case 'info':
        return <Info size={22} className="notice-icon" />;
      case 'dark':
        return <ShieldAlert size={22} className="notice-icon" />;
      case 'success':
        return <CheckCircle2 size={22} className="notice-icon" />;
      default:
        return <Info size={22} className="notice-icon" />;
    }
  };

  return (
    <div className={`notice-box ${type}`}>
      {getIcon()}
      <div className="notice-content">
        {title && <h4>{title}</h4>}
        {typeof children === 'string' ? <p>{children}</p> : children}
      </div>
    </div>
  );
}
