import React, { forwardRef, Suspense } from 'react';

const ReactQuill = React.lazy(() => import('react-quill'));

export interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  modules?: any;
  formats?: string[];
  className?: string;
  theme?: string;
  toolbar?: any;
}

export const RichTextEditor = forwardRef<any, RichTextEditorProps>(
  (
    {
      value,
      onChange,
      modules,
      formats,
      className = '',
      theme = 'snow',
      toolbar,
      ...rest
    },
    ref,
  ) => {
    const computedModules = modules ?? (toolbar ? { toolbar } : undefined);
    return (
      <div className={['w-full', className].filter(Boolean).join(' ')}>
        <Suspense fallback={<div>Loading editor...</div>}>
          <ReactQuill
            ref={ref}
            value={value}
            onChange={onChange}
            modules={computedModules}
            formats={formats}
            theme={theme}
            role="textbox"
            aria-multiline="true"
            {...rest}
          />
        </Suspense>
      </div>
    );
  },
);

export default RichTextEditor;
