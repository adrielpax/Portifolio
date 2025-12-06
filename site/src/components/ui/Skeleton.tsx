"use client";

import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & { className?: string };

const Skeleton: React.FC<Props> = ({ className = "", ...rest }) => {
  return <div aria-hidden className={`animate-pulse bg-gray-700/40 ${className}`} {...rest} />;
};

export default Skeleton;

