import { useInView } from '../hooks/useInView';

type Animation = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number; // ms
}

export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: Props) => {
  const { ref, isInView } = useInView(0.12);

  const base = 'transition-all duration-700 ease-out';

  const hidden: Record<Animation, string> = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'fade-left': 'opacity-0 -translate-x-10',
    'fade-right': 'opacity-0 translate-x-10',
  };

  const visible = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${base} ${isInView ? visible : hidden[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};
