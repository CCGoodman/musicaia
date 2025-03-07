'use client'

import { type FC, useState, useRef, useEffect } from 'react'
import { useSprings, animated, easings, SpringValue, AnimationResult, Controller } from '@react-spring/web'

type AnimationStep = {
  filter: string;
  opacity: number;
  transform: string;
};

type SpringAnimationProps = {
  filter: SpringValue<string>;
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
};

interface BlurTextProps {
text?: string;
delay?: number;
className?: string;
animateBy?: 'words' | 'letters';
direction?: 'top' | 'bottom';
threshold?: number;
rootMargin?: string;
animationFrom?: AnimationStep;
animationTo?: AnimationStep[];
easing?: keyof typeof easings;
onAnimationComplete?: () => void;
wordClassNames?: string[];
}

const BlurText: FC<BlurTextProps> = ({
text = '',
delay = 200,
className = '',
animateBy = 'words',
direction = 'top',
threshold = 0.1,
rootMargin = '0px',
animationFrom,
animationTo,
easing = 'easeOutCubic' as keyof typeof easings,
onAnimationComplete,
wordClassNames = [],
}: BlurTextProps) => {
const elements = animateBy === 'words' ? text.split(' ') : text.split('');
const [inView, setInView] = useState(false);
const ref = useRef<HTMLParagraphElement>(null);
const animatedCount = useRef(0);

const defaultFrom =
direction === 'top'
? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

const defaultTo = [
{
filter: 'blur(5px)',
opacity: 0.5,
transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
},
{ filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
];

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) {
setInView(true);
observer.unobserve(ref.current!);
}
},
{ threshold, rootMargin }
);

if (ref.current) {
observer.observe(ref.current);
}

return () => observer.disconnect();
}, [threshold, rootMargin]);

const springs = useSprings(
elements.length,
elements.map((_, i) => ({
from: animationFrom || defaultFrom,
to: inView
? async (next: (props: AnimationStep) => Promise<AnimationResult<AnimationStep>>, ctrl: Controller) => {
for (const step of (animationTo || defaultTo)) {
await next(step);
}
animatedCount.current += 1;
if (animatedCount.current === elements.length && onAnimationComplete) {
onAnimationComplete();
}
}
: animationFrom || defaultFrom,
delay: i * delay,
config: { easing: easings[easing] },
}))
);

return (
<p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
{springs.map((props: SpringAnimationProps, index: number) => (
<animated.span
key={index}
style={props}
className={`inline-block transition-transform will-change-[transform,filter,opacity] ${wordClassNames[index] || ''}`}
>
{elements[index] === ' ' ? '\u00A0' : elements[index]}
{animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
</animated.span>
))}
</p>
);
};

export default BlurText;
