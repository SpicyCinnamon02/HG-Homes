// src/components/Separator.jsx
import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const Separator = ({ className, orientation = 'horizontal', decorative = true, ...props }) => (
    <SeparatorPrimitive.Root
        decorative={decorative}
        orientation={orientation}
        className={`${
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`}
        {...props}
    />
);

export default Separator;
