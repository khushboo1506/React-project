import React from "react";
import windIcon from "../wind.png";
import humidityIcon from "../humidity.png";
import visibilityIcon from "../visibility.png";
import sunriseIcon from "../sunrise.png";
import sunsetIcon from "../sunset.png";

// Common Icon component
const Icon = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
);

export const WindIcon = () => (
  <Icon src={windIcon} alt="wind" className="animate-icon svg-hover" />
);

export const HumidityIcon = () => (
  <Icon src={humidityIcon} alt="humidity" className="powerful-pulses svg-hover" />
);

export const VisibilityIcon = () => (
  <Icon src={visibilityIcon} alt="visibility" className="powerful-pulses svg-hover" />
);

export const SunriseIcon = () => (
  <Icon src={sunriseIcon} alt="sunrise" className="powerful-pulses svg-hover" />
);

export const SunsetIcon = () => (
  <Icon src={sunsetIcon} alt="sunset" className="powerful-pulses svg-hover" />
);
